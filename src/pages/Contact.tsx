import { Phone, Mail, MapPin, Clock, CalendarCheck, FileText, Shield } from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lancez votre projet en 2 minutes</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Décrivez vos besoins, nous vous rappelons sous 48h avec un rendez-vous pour une visite gratuite et un devis détaillé sans engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm font-medium shadow-sm border border-border">
              <CalendarCheck className="w-4 h-4 text-primary" />
              Réponse sous 48h garantie
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm font-medium shadow-sm border border-border">
              <FileText className="w-4 h-4 text-primary" />
              Devis détaillé et gratuit
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm font-medium shadow-sm border border-border">
              <Shield className="w-4 h-4 text-primary" />
              Assurance décennale & RC Pro
            </span>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Comment ça se passe ?</h2>
            <p className="text-muted-foreground text-sm mb-8">
              Vous remplissez le formulaire, on vous rappelle pour comprendre votre projet, puis on vient chez vous pour établir un devis précis. Simple et sans engagement.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Appelez-nous directement</p>
                  <a href="tel:+33123456789" className="text-sm text-muted-foreground hover:text-foreground">01 23 45 67 89</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Écrivez-nous</p>
                  <a href="mailto:contact@kf-services.fr" className="text-sm text-muted-foreground hover:text-foreground">contact@kf-services.fr</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Siège</p>
                  <p className="text-sm text-muted-foreground">58 Rue des Tallifardières</p>
                  <p className="text-sm text-muted-foreground">38500 Voiron</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Disponibilité</p>
                  <p className="text-sm text-muted-foreground">Lun – Ven : 8h00 – 18h00</p>
                  <p className="text-sm text-muted-foreground">Sam : 9h00 – 12h00</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-muted rounded-xl">
              <h3 className="font-semibold text-sm mb-2">Nous venons chez vous</h3>
              <p className="text-xs text-muted-foreground">
                Intervention dans toute l'Île-de-France : Paris et les départements 77, 78, 91, 92, 93, 94 et 95. Où que vous soyez, vous bénéficiez du même niveau de service.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold mb-2">Décrivez votre projet</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Plus vous êtes précis, plus notre devis sera adapté à vos besoins réels.
              </p>
              <ContactForm />
              <p className="text-xs text-muted-foreground mt-4">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité. Aucun engagement, aucun frais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-semibold mb-2">Carte interactive</h2>
          <p className="text-sm text-muted-foreground mb-6">Nous intervenons dans toute l'Île-de-France</p>
          <div className="bg-background rounded-2xl h-64 flex items-center justify-center border border-border">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">58 Rue des Tallifardières, 38500 Voiron</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
