import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-lg z-50"
        >
          <div className="backdrop-blur-xl text-white rounded-2xl p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]" style={{ background: "linear-gradient(135deg, hsl(0 0% 18%), hsl(0 0% 8%))" }}>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <Cookie className="w-4.5 h-4.5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white mb-1">
                  🍪 Nous utilisons des cookies
                </p>
                <p className="text-xs text-white/65 leading-relaxed">
                  Ce site utilise des cookies essentiels au fonctionnement. Aucune donnée personnelle n'est revendue à des tiers. Consultez notre{" "}
                  <a href="/politique-confidentialite" className="underline hover:text-white transition-colors">politique de confidentialité</a>.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={accept}
                    className="btn-gradient px-5 py-2 rounded-full text-sm font-semibold"
                  >
                    Accepter
                  </button>
                  <button
                    onClick={decline}
                    className="px-5 py-2 rounded-full text-sm font-semibold text-white/60 hover:text-white transition-colors"
                  >
                    Refuser
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
