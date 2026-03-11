import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import nodemailer from "npm:nodemailer@6.9.16";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
}

// Rate limiting: track IPs
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_MS = 30_000;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD");
    if (!SMTP_PASSWORD) {
      throw new Error("SMTP_PASSWORD is not configured");
    }

    // Rate limiting by IP
    const clientIP =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const lastRequest = rateLimitMap.get(clientIP) ?? 0;
    if (Date.now() - lastRequest < RATE_LIMIT_MS) {
      return new Response(
        JSON.stringify({ error: "Veuillez patienter avant de renvoyer le formulaire." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    rateLimitMap.set(clientIP, Date.now());

    const body: ContactFormData = await req.json();

    // Server-side validation
    const { firstName, lastName, email, phone, projectType, description } = body;
    if (!firstName || !lastName || !email || !phone || !projectType || !description) {
      return new Response(
        JSON.stringify({ error: "Tous les champs sont requis." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (firstName.length > 50 || lastName.length > 50 || email.length > 255 || phone.length > 20 || description.length > 2000) {
      return new Response(
        JSON.stringify({ error: "Un ou plusieurs champs dépassent la longueur autorisée." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Adresse email invalide." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize for HTML
    const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, // SSL
      auth: {
        user: "contact@kf-services.fr",
        pass: SMTP_PASSWORD,
      },
    });

    // 1. Notification email to owner
    const ownerHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <h2 style="color:#c0392b;">🔔 Nouvelle demande de devis</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Prénom</td><td style="padding:8px;border-bottom:1px solid #eee;">${esc(firstName)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Nom</td><td style="padding:8px;border-bottom:1px solid #eee;">${esc(lastName)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Téléphone</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="tel:${esc(phone)}">${esc(phone)}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Type de projet</td><td style="padding:8px;border-bottom:1px solid #eee;">${esc(projectType)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Description</td><td style="padding:8px;">${esc(description).replace(/\n/g, "<br>")}</td></tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: '"KF Services" <contact@kf-services.fr>',
      to: "contact@kf-services.fr",
      replyTo: email,
      subject: `Nouvelle demande de devis – ${firstName} ${lastName}`,
      html: ownerHtml,
    });

    // 2. Confirmation email to client
    const clientHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#ffffff;">
        <div style="text-align:center;padding:20px 0;">
          <h1 style="color:#c0392b;margin:0;font-size:24px;">KF Services</h1>
          <p style="color:#666;margin:4px 0 0;">Votre partenaire BTP en Auvergne-Rhône-Alpes</p>
        </div>
        <hr style="border:none;border-top:2px solid #c0392b;margin:16px 0;">
        <h2 style="color:#333;">Merci ${esc(firstName)} !</h2>
        <p style="color:#555;line-height:1.6;">
          Nous avons bien reçu votre demande de devis pour un projet de <strong>${esc(projectType)}</strong>.
        </p>
        <p style="color:#555;line-height:1.6;">
          Notre équipe vous recontactera <strong>sous 48 heures</strong> pour organiser une visite gratuite et établir un devis détaillé.
        </p>
        <div style="background:#f8f8f8;border-radius:12px;padding:16px;margin:20px 0;">
          <h3 style="margin:0 0 8px;color:#333;">Récapitulatif de votre demande :</h3>
          <p style="margin:4px 0;color:#555;"><strong>Type :</strong> ${esc(projectType)}</p>
          <p style="margin:4px 0;color:#555;"><strong>Description :</strong> ${esc(description)}</p>
        </div>
        <p style="color:#555;line-height:1.6;">
          En attendant, n'hésitez pas à nous appeler au <a href="tel:+33669209788" style="color:#c0392b;font-weight:bold;">06 69 20 97 88</a>.
        </p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;">
        <p style="color:#999;font-size:12px;text-align:center;">
          KF Services – 58 Rue des Tallifardières, 38500 Voiron<br>
          <a href="https://kf-services.fr" style="color:#c0392b;">kf-services.fr</a>
        </p>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: '"KF Services" <contact@kf-services.fr>',
        to: email,
        subject: "Votre demande de devis a bien été reçue – KF Services",
        html: clientHtml,
      });
    } catch (clientEmailErr) {
      console.error("SMTP client email error:", clientEmailErr);
    }

    // Save to database
    try {
      const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
      const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      const sb = createClient(supabaseUrl, supabaseServiceKey);
      await sb.from("contact_requests").insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        project_type: projectType,
        description,
      });
    } catch (dbErr) {
      console.error("DB insert error:", dbErr);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("send-contact-email error:", error);
    return new Response(
      JSON.stringify({ error: "Une erreur est survenue lors de l'envoi. Veuillez réessayer." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
