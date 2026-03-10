import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import logoKF from "@/assets/logo-kf.svg";

const Footer = () => {
  return (
    <footer className="text-white" style={{ background: "linear-gradient(135deg, hsl(0 0% 18%), hsl(0 0% 8%))" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/">
                <img
                  src={logoKF}
                  alt="KF Services"
                  className="h-14 w-auto mb-4 brightness-0 invert transition-transform duration-300 hover:scale-110"
                />
              </Link>
              <p className="text-base text-white/70">
                Fort de plus de 20 ans d'expertise, KF Services vous accompagne pour vos projets de construction et rénovation en Auvergne-Rhône-Alpes.
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
              <ul className="space-y-3 text-base">
                {[
                  { label: "Maçonnerie", hash: "maconnerie" },
                  { label: "Charpente & Couverture", hash: "charpente" },
                  
                  { label: "Plomberie", hash: "plomberie" },
                  { label: "Neuf & Rénovation", hash: "neuf-renovation" },
                ].map((service) => (
                  <li key={service.hash}>
                    <Link to={`/services#${service.hash}`} className="text-white/70 hover:text-white transition-colors">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4 text-base uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4 text-base">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-white/70" />
                  <a href="tel:+33669209788" className="text-white/70 hover:text-white transition-colors">06 69 20 97 88</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-white/70" />
                  <a href="mailto:contact@kf-services.fr" className="text-white/70 hover:text-white transition-colors">contact@kf-services.fr</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-white/70" />
                  <span className="text-white/70">58 Rue des Tallifardières, 38500 Voiron, France</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <span>© {new Date().getFullYear()} KF Services. Tous droits réservés.</span>
          <div className="flex items-center gap-4">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
        <div className="text-center text-xs text-white/35 mt-4">
          Site créé par <a href="https://novavisio.ch" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Nova Visio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
