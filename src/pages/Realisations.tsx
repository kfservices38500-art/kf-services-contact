import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import arrowsDown from "../assets/arrows-down.svg";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/animations/ScrollReveal";
import KFButton from "../components/ui/KFButton";
import ProjectModal from "../components/ProjectModal";

const deptNames: Record<string, string> = {
  "01": "Ain", "03": "Allier", "07": "Ardèche", "15": "Cantal",
  "26": "Drôme", "38": "Isère", "42": "Loire", "43": "Haute-Loire",
  "63": "Puy-de-Dôme", "69": "Rhône", "73": "Savoie", "74": "Haute-Savoie"
};

const categories = [
  { key: "all", label: "Tous les projets" },
  { key: "maconnerie", label: "Maçonnerie" },
  { key: "charpente", label: "Charpente/Couverture" },
  { key: "plomberie", label: "Plomberie" },
  { key: "autres", label: "Autres" },
];

const projects = [
  {
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    ],
    category: "maconnerie",
    categoryLabel: "Maçonnerie",
    title: "+30 m² habitables grâce à une rénovation complète",
    location: "Voiron (38)",
    description: "Les propriétaires ont gagné un étage entier et revalorisé leur bien de 150 000 €, sans un seul jour de retard.",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    ],
    category: "maconnerie",
    categoryLabel: "Maçonnerie",
    title: "Une extension lumineuse qui a changé leur quotidien",
    location: "Grenoble (38)",
    description: "40 m² supplémentaires avec baies vitrées et toiture terrasse.",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    ],
    category: "charpente",
    categoryLabel: "Charpente/Couverture",
    title: "Fini les infiltrations : une toiture neuve pour 30 ans",
    location: "Moirans (38)",
    description: "Couverture ardoise intégralement remplacée avec isolation par l'extérieur.",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1632759145905-98a82e3776a6?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752734-2a0cd66c42f2?w=800&q=80",
    ],
    category: "charpente",
    categoryLabel: "Charpente/Couverture",
    title: "Une charpente en chêne qui traversera les générations",
    location: "Chambéry (73)",
    description: "Charpente traditionnelle massive pour une maison neuve.",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    ],
    category: "plomberie",
    categoryLabel: "Plomberie",
    title: "-40% sur la facture de chauffage grâce à une pompe à chaleur",
    location: "Annecy (74)",
    description: "Installation d'une PAC air/eau avec nouveaux radiateurs.",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&q=80",
    ],
    category: "plomberie",
    categoryLabel: "Plomberie",
    title: "Une salle de bain spa qui valorise l'appartement",
    location: "Lyon 6ème (69)",
    description: "Douche italienne, baignoire balnéo et finitions haut de gamme.",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
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
  const deptFilter = searchParams.get("dept") || null;
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);
  
  const filteredProjects = (() => {
    let filtered = activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
    if (deptFilter) {
      filtered = filtered.filter((p) => p.location.includes(`(${deptFilter})`));
    }
    return filtered;
  })();

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {deptFilter ? (
                <>Nos réalisations en <span className="gradient-red-text">{deptNames[deptFilter] || deptFilter} ({deptFilter})</span></>
              ) : (
                <>Pas des promesses, <span className="gradient-red-text">des résultats concrets</span></>
              )}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              {deptFilter
                ? `Découvrez nos chantiers réalisés dans le département ${deptNames[deptFilter] || deptFilter}.`
                : "Chaque projet ci-dessous est un client qui a retrouvé confort, sécurité ou valeur immobilière."}
            </p>
            {deptFilter && (
              <Link to="/realisations" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                ← Voir tous les projets
              </Link>
            )}

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-2">Jugez par vous-même.</h2>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="mt-4"
            >
              <img src={arrowsDown} alt="Scroll vers le bas" className="w-[100px] h-[100px] mx-auto" />
            </motion.div>
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
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
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
            {filteredProjects.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">Aucun chantier référencé pour le moment dans ce département.</p>
                <Link to="/realisations" className="inline-flex items-center gap-2 font-semibold gradient-red-text hover:underline">
                  ← Voir tous nos projets
                </Link>
              </div>
            ) : null}
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
                  className="bg-background rounded-3xl overflow-hidden shadow-sm border border-border cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative">
                    <img src={project.images[0]} alt={project.title} className="w-full aspect-[4/3] object-cover" />
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

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default Realisations;
