import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoKF from "@/assets/logo-kf.svg";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Services", to: "/services" },
  { label: "Réalisations", to: "/realisations" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative">
            {/* Default black logo */}
            <img
              src={logoKF}
              alt="KF Services"
              className="h-14 md:h-[4.5rem] w-auto transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Gradient logo on hover */}
            <div
              className="absolute inset-0 h-14 md:h-[4.5rem] w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                WebkitMaskImage: `url(${logoKF})`,
                maskImage: `url(${logoKF})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                background: 'linear-gradient(135deg, hsl(0 78% 55%), hsl(0 78% 35%))',
              }}
            />
          </Link>

          {/* Desktop Nav - grey pill, blur on scroll */}
          <nav
            className={`hidden md:flex items-center rounded-full px-1.5 py-1.5 transition-all duration-500 border border-white/40 ${
              scrolled
                ? "bg-white/30 backdrop-blur-2xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_4px_30px_-4px_rgba(0,0,0,0.1)]"
                : "bg-white/40 backdrop-blur-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.5),0_2px_20px_-4px_rgba(0,0,0,0.06)]"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-5 py-2.5 text-base font-semibold rounded-full transition-all duration-300 ${
                  location.pathname === link.to
                    ? "text-foreground bg-background shadow-[0_2px_8px_-2px_rgba(0,0,0,0.12)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA - phone + dark contact button */}
          <div className="hidden md:flex items-center gap-5">
            <a href="tel:+33123456789" className="flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground hover:font-bold transition-all duration-300">
              <Phone className="w-5 h-5 text-primary" />
              01 23 45 67 89
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 btn-gradient px-7 py-3 rounded-full text-base font-semibold group"
            >
              Devis gratuit
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu - fullscreen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-20 bg-background z-40"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-5 py-4 rounded-2xl text-lg font-semibold transition-all ${
                      location.pathname === link.to
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="tel:+33123456789"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 px-5 py-4 text-lg text-muted-foreground"
              >
                <Phone className="w-5 h-5 text-primary" />
                01 23 45 67 89
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
