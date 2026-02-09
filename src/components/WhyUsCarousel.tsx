import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import KFButton from "./ui/KFButton";

const whyUsSlides = [
  {
    tag: "Votre projet, simplifié",
    title: "Un plan clair dès le départ",
    description: "Vous obtenez une vision complète de votre projet avant le premier coup de pioche : choix des matériaux, planning détaillé et estimation précise. Vous savez exactement où vous allez.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    imageAlt: "Consultation chantier",
  },
  {
    tag: "Qualité garantie",
    title: "Des artisans qualifiés sur chaque poste",
    description: "Chaque intervenant est sélectionné pour son expertise métier. Maçons, couvreurs, plombiers : vous avez accès à des spécialistes expérimentés qui maîtrisent leur domaine.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    imageAlt: "Artisan qualifié au travail",
  },
  {
    tag: "Zéro surprise",
    title: "Un budget respecté, sans mauvaise surprise",
    description: "Le devis que vous signez est le prix que vous payez. Pas de coûts cachés, pas de surcharge en cours de chantier. Vous gardez le contrôle de votre budget du début à la fin.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    imageAlt: "Devis et budget maîtrisé",
  },
  {
    tag: "Un seul interlocuteur",
    title: "Fini la galère des multiples artisans",
    description: "Un seul numéro, un seul contact qui coordonne l'ensemble de votre chantier. Vous gagnez du temps et de la tranquillité d'esprit à chaque étape.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    imageAlt: "Coordination de chantier",
  },
];

const WhyUsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % whyUsSlides.length);
    }, 8000);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoplay]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    startAutoplay();
  };

  const slide = whyUsSlides[currentIndex];

  return (
    <div
      className="rounded-3xl overflow-hidden relative"
      onMouseEnter={() => { if (intervalRef.current) clearInterval(intervalRef.current); }}
      onMouseLeave={() => startAutoplay()}
    >
      <div className="grid lg:grid-cols-2">
        <motion.div
          key={`whyus-text-${currentIndex}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="gradient-red p-10 md:p-14 flex flex-col justify-end min-h-[400px]"
        >
          <p className="text-white/70 text-sm font-bold uppercase tracking-wider mb-3">{slide.tag}</p>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">{slide.title}</h3>
          <p className="text-white/80 text-base md:text-lg mb-8">{slide.description}</p>
          <div>
            <KFButton to="/contact" variant="light">
              Obtenir mon devis gratuit
            </KFButton>
          </div>
        </motion.div>
        <div className="relative min-h-[300px] overflow-hidden">
          <motion.img
            key={`whyus-img-${currentIndex}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={slide.image}
            alt={slide.imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => goTo((currentIndex - 1 + whyUsSlides.length) % whyUsSlides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-10"
        aria-label="Précédent"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => goTo((currentIndex + 1) % whyUsSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-10"
        aria-label="Suivant"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 lg:left-10 lg:translate-x-0 lg:bottom-6">
        {whyUsSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/70 w-2.5"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyUsCarousel;
