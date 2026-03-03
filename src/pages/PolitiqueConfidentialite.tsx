import ScrollReveal from "@/components/animations/ScrollReveal";

const PolitiqueConfidentialite = () => {
  return (
    <div className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-10">Politique de confidentialité</h1>

          <div className="space-y-8 text-base text-muted-foreground leading-relaxed">
            <p>
              La présente politique de confidentialité décrit comment <strong>KF SERVICES</strong> (SAS, 58 Rue des Tallifardières, 38500 Voiron) collecte, utilise et protège vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données est :<br />
                <strong>KF SERVICES</strong><br />
                58 Rue des Tallifardières, 38500 Voiron<br />
                Email : <a href="mailto:contact@kf-services.fr" className="text-primary hover:underline">contact@kf-services.fr</a><br />
                Téléphone : <a href="tel:+33669209788" className="text-primary hover:underline">06 69 20 97 88</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">2. Données collectées</h2>
              <p>Nous collectons uniquement les données que vous nous fournissez volontairement via le formulaire de contact :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Message / description de votre projet</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">3. Finalité du traitement</h2>
              <p>Vos données personnelles sont collectées dans le but de :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Répondre à vos demandes de devis ou d'information</li>
                <li>Vous recontacter dans le cadre de votre projet</li>
                <li>Assurer le suivi de la relation commerciale</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">4. Base légale</h2>
              <p>
                Le traitement de vos données repose sur votre <strong>consentement</strong> (envoi volontaire du formulaire de contact) ainsi que sur l'<strong>intérêt légitime</strong> de KF SERVICES à répondre à vos demandes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">5. Durée de conservation</h2>
              <p>
                Vos données personnelles sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact, conformément aux recommandations de la CNIL.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">6. Destinataires des données</h2>
              <p>
                Vos données personnelles ne sont transmises à aucun tiers. Elles sont utilisées exclusivement par KF SERVICES pour répondre à vos demandes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">7. Cookies</h2>
              <p>
                Ce site utilise uniquement des <strong>cookies essentiels</strong> nécessaires au bon fonctionnement du site. Aucun cookie de tracking, d'analyse ou publicitaire n'est utilisé. Le cookie de consentement enregistre votre choix concernant l'utilisation des cookies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">8. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
                <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
                <li><strong>Droit à la limitation</strong> : restreindre le traitement de vos données</li>
                <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@kf-services.fr" className="text-primary hover:underline">contact@kf-services.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">9. Réclamation</h2>
              <p>
                Si vous estimez que le traitement de vos données ne respecte pas la réglementation en vigueur, vous pouvez introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">10. Mise à jour</h2>
              <p>
                La présente politique de confidentialité peut être mise à jour à tout moment. La date de dernière mise à jour est : <strong>mars 2026</strong>.
              </p>
            </section>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
