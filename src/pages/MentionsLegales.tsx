import { useEffect } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const MentionsLegales = () => {
  useEffect(() => {
    document.title = "Mentions légales – KF Services";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Mentions légales du site KF Services : raison sociale, SIRET, siège social, hébergeur et directeur de publication.");
  }, []);

  return (
    <div className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-10">Mentions légales</h1>

          <div className="space-y-8 text-base text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">1. Éditeur du site</h2>
              <p>
                Le site <strong>kf-services.fr</strong> est édité par :<br />
                <strong>KF SERVICES</strong>, SAS (Société par Actions Simplifiée)<br />
                Capital social : 3 000,00 €<br />
                Siège social : 58 Rue des Tallifardières, 38500 Voiron, France<br />
                SIRET : 913 344 768 00043<br />
                SIREN : 913 344 768<br />
                Directeur de la publication : Mr Fatih KOCAK
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">2. Contact</h2>
              <p>
                Téléphone : <a href="tel:+33669209788" className="text-primary hover:underline">06 69 20 97 88</a><br />
                Email : <a href="mailto:contact@kf-services.fr" className="text-primary hover:underline">contact@kf-services.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">3. Hébergement</h2>
              <p>
                Le site est hébergé par :<br />
                <strong>GoDaddy</strong><br />
                14455 N. Hayden Road, Suite 219, Scottsdale, AZ 85260, États-Unis<br />
                Site web : <a href="https://www.godaddy.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.godaddy.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, graphismes, logos, icônes, etc.) est la propriété exclusive de KF SERVICES ou de ses partenaires. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de KF SERVICES.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">5. Limitation de responsabilité</h2>
              <p>
                KF SERVICES s'efforce de fournir des informations aussi précises que possible sur le site. Toutefois, la société ne pourra être tenue responsable des omissions, inexactitudes ou carences dans la mise à jour des informations. KF SERVICES se réserve le droit de modifier le contenu du site à tout moment et sans préavis.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">6. Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens vers d'autres sites. KF SERVICES n'exerce aucun contrôle sur le contenu de ces sites tiers et décline toute responsabilité quant à leur contenu.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">7. Droit applicable</h2>
              <p>
                Le présent site et ses mentions légales sont régis par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default MentionsLegales;
