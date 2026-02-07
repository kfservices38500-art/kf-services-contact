import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/animations/ScrollReveal";
import KFButton from "../components/ui/KFButton";

const categories = [
  { key: "all", label: "Tous les projets" },
  { key: "maconnerie", label: "Maçonnerie" },
  { key: "charpente", label: "Charpente/Couverture" },
  { key: "plomberie", label: "Plomberie" },
  { key: "autres", label: "Autres" },
];

const projects = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "maconnerie",
    categoryLabel: "Maçonnerie",
    title: "+30 m² habitables grâce à une rénovation complète",
    location: "Voiron (38)",
    description: "Les propriétaires ont gagné un étage entier et revalorisé leur bien de 150 000 €, sans un seul jour de retard.",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    category: "maconnerie",
    categoryLabel: "Maçonnerie",
    title: "Une extension lumineuse qui a changé leur quotidien",
    location: "Grenoble (38)",
    description: "40 m² supplémentaires avec baies vitrées et toiture terrasse.",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    category: "charpente",
    categoryLabel: "Charpente/Couverture",
    title: "Fini les infiltrations : une toiture neuve pour 30 ans",
    location: "Moirans (38)",
    description: "Couverture ardoise intégralement remplacée avec isolation par l'extérieur.",
  },
  {
    image: "https://images.unsplash.com/photo-1632759145905-98a82e3776a6?w=800&q=80",
    category: "charpente",
    categoryLabel: "Charpente/Couverture",
    title: "Une charpente en chêne qui traversera les générations",
    location: "Chambéry (73)",
    description: "Charpente traditionnelle massive pour une maison neuve.",
  },
  {
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
    category: "plomberie",
    categoryLabel: "Plomberie",
    title: "-40% sur la facture de chauffage grâce à une pompe à chaleur",
    location: "Annecy (74)",
    description: "Installation d'une PAC air/eau avec nouveaux radiateurs.",
  },
  {
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    category: "plomberie",
    categoryLabel: "Plomberie",
    title: "Une salle de bain spa qui valorise l'appartement",
    location: "Lyon 6ème (69)",
    description: "Douche italienne, baignoire balnéo et finitions haut de gamme.",
  },
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    category: "autres",
    categoryLabel: "Désamiantage",
    title: "Un immeuble désamianté en toute sécurité",
    location: "Voreppe (38)",
    description: "Retrait complet des matériaux amiantés dans les parties communes.",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "autres",
    categoryLabel: "Gouttières",
    title: "Des gouttières alu qui protègent les façades pour 25 ans",
    location: "Tullins (38)",
    description: "Installation sur mesure avec descentes décoratives.",
  },
];

const Realisations = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Des résultats concrets, <span className="gradient-red-text">pas des promesses</span></h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Chaque projet ci-dessous est un client qui a retrouvé confort, sécurité ou valeur immobilière. Jugez par vous-même.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "gradient-red text-white shadow-lg"
                    : "border border-foreground/20 text-muted-foreground hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                  className="bg-background rounded-3xl overflow-hidden shadow-sm border border-foreground/15"
                >
                  <div className="relative">
                    <img src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover" />
                    <span className="absolute top-4 left-4 gradient-red text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                      {project.categoryLabel}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <p className="text-base text-muted-foreground">{project.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-red text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Votre projet mérite le même niveau de qualité</h2>
            <p className="text-white/70 text-base md:text-lg mb-8">Parlez-nous de vos besoins et recevez un devis personnalisé sous 48h.</p>
            <KFButton to="/contact" variant="light">
              Obtenir mon devis gratuit
            </KFButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Realisations;
