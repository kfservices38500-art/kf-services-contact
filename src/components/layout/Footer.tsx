import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center text-foreground text-sm font-black mb-4">
              KF
            </div>
            <p className="text-sm text-background/60">
              Depuis 2003, KF Services vous accompagne pour vos projets de construction et rénovation en Île-de-France.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-background font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Accueil", to: "/" },
                { label: "À propos", to: "/a-propos" },
                { label: "Services", to: "/services" },
                { label: "Réalisations", to: "/realisations" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-background font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Maçonnerie</li>
              <li>Charpente & Couverture</li>
              <li>Gouttières Aluminium</li>
              <li>Désamiantage</li>
              <li>Plomberie</li>
              <li>Neuf & Rénovation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-background font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+33123456789" className="hover:text-background">01 23 45 67 89</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:contact@kf-services.fr" className="hover:text-background">contact@kf-services.fr</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>58 Rue des Tallifardières, 38500 Voiron</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-xs text-background/40">
          © {new Date().getFullYear()} KF Services. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
