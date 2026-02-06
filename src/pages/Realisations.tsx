import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MapPin, ArrowUpRight } from "lucide-react";

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
    location: "Versailles (78)",
    description: "Les propriétaires ont gagné un étage entier et revalorisé leur bien de 150 000 €, sans un seul jour de retard.",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    category: "maconnerie",
    categoryLabel: "Maçonnerie",
    title: "Une extension lumineuse qui a changé leur quotidien",
    location: "Saint-Germain-en-Laye (78)",
    description: "40 m² supplémentaires avec baies vitrées et toiture terrasse — la famille profite enfin d'un vrai espace de vie.",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    category: "charpente",
    categoryLabel: "Charpente/Couverture",
    title: "Fini les infiltrations : une toiture neuve pour 30 ans",
    location: "Neuilly-sur-Seine (92)",
    description: "Couverture ardoise intégralement remplacée avec isolation par l'extérieur — facture de chauffage divisée par deux.",
  },
  {
    image: "https://images.unsplash.com/photo-1632759145905-98a82e3776a6?w=800&q=80",
    category: "charpente",
    categoryLabel: "Charpente/Couverture",
    title: "Une charpente en chêne qui traversera les générations",
    location: "Meudon (92)",
    description: "Charpente traditionnelle massive pour une maison neuve — les propriétaires ont la certitude d'un bâti durable.",
  },
  {
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
    category: "plomberie",
    categoryLabel: "Plomberie",
    title: "-40% sur la facture de chauffage grâce à une pompe à chaleur",
    location: "Boulogne-Billancourt (92)",
    description: "Installation d'une PAC air/eau avec nouveaux radiateurs — confort thermique optimal hiver comme été.",
  },
  {
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    category: "plomberie",
    categoryLabel: "Plomberie",
    title: "Une salle de bain spa qui valorise l'appartement",
    location: "Paris 16ème",
    description: "Douche italienne, baignoire balnéo et finitions haut de gamme — un espace bien-être au quotidien.",
  },
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    category: "autres",
    categoryLabel: "Désamiantage",
    title: "Un immeuble désamianté en toute sécurité",
    location: "Levallois-Perret (92)",
    description: "Retrait complet des matériaux amiantés dans les parties communes — résidents protégés, copropriété en conformité.",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "autres",
    categoryLabel: "Gouttières",
    title: "Des gouttières alu qui protègent les façades pour 25 ans",
    location: "Le Vésinet (78)",
    description: "Installation sur mesure avec descentes décoratives — plus de traces de ruissellement sur les murs.",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Des résultats concrets, pas des promesses</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chaque projet ci-dessous est un client qui a retrouvé confort, sécurité ou valeur immobilière. Jugez par vous-même.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-background rounded-2xl overflow-hidden shadow-sm border border-border">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover" />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {project.categoryLabel}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location}
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Votre projet mérite le même niveau de qualité</h2>
          <p className="text-background/70 mb-8">Parlez-nous de vos besoins et recevez un devis personnalisé sous 48h.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Obtenir mon devis gratuit
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Realisations;
