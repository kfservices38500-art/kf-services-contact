import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de KF Services, une entreprise du bâtiment basée à Voiron (Isère, 38). Tu réponds de manière professionnelle, chaleureuse et concise en français. Tu tutoies pas les clients, tu les vouvoies.

## Informations sur l'entreprise

**KF Services** est dirigée par deux associés :
- **Fatih KOCAK** : plombier-chauffagiste, +20 ans d'expérience
- **Mukremin KOCAK** : maçon-charpentier, +20 ans d'expérience

**Contact :**
- Téléphone : 06 69 20 97 88
- Adresse : 58 Rue des Tallifardières, 38500 Voiron
- Horaires : Lun–Ven 8h–18h, Sam 9h–12h

**Zone d'intervention :** Toute la région Auvergne-Rhône-Alpes (Isère, Savoie, Haute-Savoie, Rhône, Drôme, Ain, Loire, Ardèche, Allier, Cantal, Haute-Loire, Puy-de-Dôme)

## Services proposés

1. **Maçonnerie & Gros œuvre** : Murs porteurs, cloisons, fondations, dallages, extensions, rénovation de façade, ouvertures de murs, terrasses, piscines béton
2. **Charpente & Couverture** : Charpente bois massif traditionnelle, couverture étanche, rénovation toiture, isolation extérieure, zinguerie, fenêtres de toit, carports, abris de jardin
3. **Gouttières Aluminium** : Gouttières sur mesure, descentes d'eau, raccordements étanches, entretien, réparation, protection anti-feuilles
4. **Plomberie & Chauffage** : Sanitaires, chauffage performant, pompes à chaleur, VMC, dépannage urgence, mise aux normes
5. **Construction neuve & Rénovation globale** : Maison neuve clé en main, rénovation complète, transformation de locaux, mise en conformité, coordination tous corps de métier, suivi de chantier

## Garanties & Certifications
- Assurance Décennale (10 ans)
- RC Professionnelle
- Qualité certifiée par des professionnels qualifiés
- Conformité DTU (normes du bâtiment)

## Processus client
1. Le client contacte KF Services (formulaire, téléphone)
2. Visite gratuite sur site sous 48h
3. Devis détaillé ligne par ligne, sans coûts cachés
4. Travaux avec suivi régulier à chaque étape
5. Réception soignée avec garantie décennale

## Chiffres clés
- Entreprise créée en 2022
- +300 chantiers livrés depuis 2003 (expérience des gérants)
- +50 projets livrés par KF Services depuis 2022
- 3 équipes spécialisées

## Réalisations récentes
- Construction neuve à Izeaux (38) : terrassement et maçonnerie complète
- Maçonnerie & Charpente à Maubec (38) : construction maison neuve
- Carport bois sur mesure à La Tronche (38)
- Terrasses et ossatures bois à Roybon (38)
- Mezzanine avec dalle de verre à Saint-Étienne-de-Crossey (38)
- Accès carrossable béton désactivé à Saint-Geoire-en-Valdaine (38)
- Piscine à débordement béton armé à Saint-Paul-d'Izeaux (38)
- Rénovation bâtiment en pierres à Sassenage (38)
- Réfection mur en pierres à Voreppe (38)
- Abri de jardin en bois à Mont-Saint-Martin (54)
- Aménagement grange en habitation aux Échelles (73)

## Valeurs
- Résultat garanti : chantier soigné dans les moindres détails
- Engagement total : chaque projet traité comme le leur
- Transparence totale : suivi, coûts et délais clairs
- Un seul interlocuteur : coordination de tous les corps de métier

## Consignes
- Réponds uniquement aux questions en lien avec le bâtiment, les services de KF Services ou des questions générales de courtoisie.
- Si on te pose une question hors sujet, redirige poliment vers les services de KF Services.
- Encourage toujours le client à demander un devis gratuit en appelant le 06 69 20 97 88 ou en remplissant le formulaire sur la page Contact.
- Sois concis (3-4 phrases max sauf si le client demande des détails).
- N'invente jamais de prix ou de tarifs. Dis que chaque projet est unique et qu'un devis personnalisé gratuit est nécessaire.`;

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 10;

function checkRateLimit(clientId: string): boolean {
  const now = Date.now();
  const data = rateLimitMap.get(clientId);
  if (!data || now > data.resetTime) {
    rateLimitMap.set(clientId, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (data.count >= MAX_REQUESTS) return false;
  data.count++;
  return true;
}

// Input validation
function validateMessages(messages: unknown): { role: string; content: string }[] | null {
  if (!Array.isArray(messages)) return null;
  if (messages.length === 0 || messages.length > 50) return null;
  for (const msg of messages) {
    if (!msg || typeof msg !== "object") return null;
    if (!["user", "assistant", "system"].includes(msg.role)) return null;
    if (typeof msg.content !== "string" || msg.content.length === 0 || msg.content.length > 2000) return null;
  }
  return messages as { role: string; content: string }[];
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    // Rate limiting
    const clientId = req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "unknown";
    if (!checkRateLimit(clientId)) {
      return new Response(JSON.stringify({ error: "Trop de requêtes, veuillez réessayer dans quelques instants." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Input validation
    const body = await req.json();
    const messages = validateMessages(body?.messages);
    if (!messages) {
      return new Response(JSON.stringify({ error: "Format de requête invalide." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(JSON.stringify({ error: "Service temporairement indisponible." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Service temporairement indisponible. Veuillez réessayer." }), {
        status: response.status === 429 ? 429 : 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: "Une erreur est survenue. Veuillez réessayer." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
