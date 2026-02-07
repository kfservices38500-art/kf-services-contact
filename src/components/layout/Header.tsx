import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ArrowUpRight, ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight">
            <div className="w-12 h-12 gradient-red rounded-2xl flex items-center justify-center text-white text-sm font-black">
              KF
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-muted/60 backdrop-blur-md rounded-full px-2 py-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-5 py-2.5 rounded-full text-base font-medium transition-all duration-300 ${
                  location.pathname === link.to
                    ? "gradient-red text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+33123456789" className="flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-5 h-5" />
              01 23 45 67 89
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 btn-gradient px-6 py-3 rounded-full text-base font-semibold group"
            >
              Contact
              <span className="relative w-5 h-5">
                <ArrowUpRight className="w-5 h-5 absolute inset-0 transition-all duration-300 group-hover:opacity-0" />
                <ArrowRight className="w-5 h-5 absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </span>
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
                        ? "gradient-red text-white"
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
                <Phone className="w-5 h-5" />
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
