import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import logoKF from "@/assets/logo-kf.svg";

const Footer = () => {
  return (
    <footer className="gradient-red text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <img
                src={logoKF}
                alt="KF Services"
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-base text-white/70">
                Depuis 2003, KF Services vous accompagne pour vos projets de construction et rénovation en Île-de-France.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-bold mb-4 text-base uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-3">
                {[
                  { label: "Accueil", to: "/" },
                  { label: "À propos", to: "/a-propos" },
                  { label: "Services", to: "/services" },
                  { label: "Réalisations", to: "/realisations" },
                  { label: "Contact", to: "/contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-base text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-4 text-base uppercase tracking-wider">Services</h4>
              <ul className="space-y-3 text-base text-white/70">
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
              <h4 className="text-white font-bold mb-4 text-base uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4 text-base">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-white/70" />
                  <a href="tel:+33123456789" className="text-white/70 hover:text-white transition-colors">01 23 45 67 89</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-white/70" />
                  <a href="mailto:contact@kf-services.fr" className="text-white/70 hover:text-white transition-colors">contact@kf-services.fr</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-white/70" />
                  <span className="text-white/70">58 Rue des Tallifardières, 38500 Voiron</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} KF Services. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
