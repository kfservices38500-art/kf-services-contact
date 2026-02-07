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
          <Link to="/" className="flex items-center">
            <img
              src={logoKF}
              alt="KF Services"
              className="h-10 md:h-12 w-auto transition-all duration-300"
              style={{ filter: scrolled ? "none" : "none" }}
            />
          </Link>

          {/* Desktop Nav - grey pill, blur on scroll */}
          <nav
            className={`hidden md:flex items-center rounded-full px-3 py-2 transition-all duration-500 ${
              scrolled
                ? "bg-muted/70 backdrop-blur-xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)]"
                : "bg-muted"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-5 py-2.5 text-base font-semibold transition-all duration-300 ${
                  location.pathname === link.to
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0.5 left-4 right-4 h-[2.5px] bg-foreground rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA - phone + dark contact button */}
          <div className="hidden md:flex items-center gap-5">
            <a href="tel:+33123456789" className="flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-5 h-5 text-primary" />
              01 23 45 67 89
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3 rounded-full text-base font-semibold hover:bg-foreground/90 transition-all duration-300 group"
            >
              Contact
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
