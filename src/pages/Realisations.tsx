import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import arrowsDown from "../assets/arrows-down.svg";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/animations/ScrollReveal";
import KFButton from "../components/ui/KFButton";
import ProjectModal from "../components/ProjectModal";
import realIzeauxMac1 from "../assets/real-izeaux-mac-1.jpeg";
import realIzeauxMac2 from "../assets/real-izeaux-mac-2.jpeg";
import realIzeauxMac3 from "../assets/real-izeaux-mac-3.jpeg";
import realIzeauxMac4 from "../assets/real-izeaux-mac-4.jpeg";
import realIzeauxMac5 from "../assets/real-izeaux-mac-5.jpeg";
import realIzeauxMac6 from "../assets/real-izeaux-mac-6.jpeg";
import realLaTroncheCharp1 from "../assets/real-latronche-charp-1.jpeg";
import realLaTroncheCharp2 from "../assets/real-latronche-charp-2.jpeg";
import realLaTroncheCharp3 from "../assets/real-latronche-charp-3.jpeg";
import realLaTroncheCharp4 from "../assets/real-latronche-charp-4.jpeg";
import realLaTroncheCharp5 from "../assets/real-latronche-charp-5.jpeg";
import realMaubec1 from "../assets/real-maubec-1.jpeg";
import realMaubec2 from "../assets/real-maubec-2.jpeg";
import realMaubec3 from "../assets/real-maubec-3.jpeg";
import realMaubec4 from "../assets/real-maubec-4.jpeg";
import realMaubec5 from "../assets/real-maubec-5.jpeg";
import realMaubec6 from "../assets/real-maubec-6.jpeg";
import realMaubec7 from "../assets/real-maubec-7.jpeg";
import realMaubec8 from "../assets/real-maubec-8.jpeg";
import realMaubec9 from "../assets/real-maubec-9.jpeg";
import realRoybon1 from "../assets/real-roybon-1.jpeg";
import realRoybon2 from "../assets/real-roybon-2.jpeg";
import realRoybon3 from "../assets/real-roybon-3.jpeg";
import realRoybon4 from "../assets/real-roybon-4.jpeg";
import realRoybon5 from "../assets/real-roybon-5.jpeg";
import realSteCrossey1 from "../assets/real-stecrossey-1.jpeg";
import realSteCrossey2 from "../assets/real-stecrossey-2.jpeg";
import realSteCrossey3 from "../assets/real-stecrossey-3.jpeg";
import realStGeoire1 from "../assets/real-stgeoire-1.jpeg";
import realStGeoire2 from "../assets/real-stgeoire-2.jpeg";
import realStGeoire3 from "../assets/real-stgeoire-3.jpeg";
import realStPaulIzeaux1 from "../assets/real-stpaulizeaux-1.jpeg";
import realStPaulIzeaux2 from "../assets/real-stpaulizeaux-2.jpeg";
import realStPaulIzeaux3 from "../assets/real-stpaulizeaux-3.jpeg";
import realStPaulIzeaux4 from "../assets/real-stpaulizeaux-4.jpeg";
import realStPaulIzeaux5 from "../assets/real-stpaulizeaux-5.jpeg";
import realSassenage1 from "../assets/real-sassenage-1.jpeg";
import realSassenage2 from "../assets/real-sassenage-2.jpeg";
import realSassenage3 from "../assets/real-sassenage-3.jpeg";
import realSassenage4 from "../assets/real-sassenage-4.jpeg";
import realSassenage5 from "../assets/real-sassenage-5.jpeg";
import realSassenage6 from "../assets/real-sassenage-6.jpeg";
import realSassenage7 from "../assets/real-sassenage-7.jpeg";
import realSassenage8 from "../assets/real-sassenage-8.jpeg";
import realSassenage9 from "../assets/real-sassenage-9.jpeg";
import realSassenage10 from "../assets/real-sassenage-10.jpeg";
import realVoreppe1 from "../assets/real-voreppe-1.jpeg";
import realVoreppe2 from "../assets/real-voreppe-2.jpeg";
import realMontStMartin1 from "../assets/real-montstmartin-1.jpeg";
import realMontStMartin2 from "../assets/real-montstmartin-2.jpeg";
import realMontStMartin3 from "../assets/real-montstmartin-3.jpeg";
import realMontStMartin4 from "../assets/real-montstmartin-4.jpeg";
import realMontStMartin5 from "../assets/real-montstmartin-5.jpeg";
import realMontStMartin6 from "../assets/real-montstmartin-6.jpeg";
import realMontStMartin7 from "../assets/real-montstmartin-7.jpeg";
import realLesEchelles1 from "../assets/real-lesechelles-1.jpeg";
import realLesEchelles2 from "../assets/real-lesechelles-2.jpeg";
import realLesEchelles3 from "../assets/real-lesechelles-3.jpeg";
import realLesEchelles4 from "../assets/real-lesechelles-4.jpeg";
import realLesEchelles5 from "../assets/real-lesechelles-5.jpeg";
import realLesEchelles6 from "../assets/real-lesechelles-6.jpeg";
import realLesEchelles7 from "../assets/real-lesechelles-7.jpeg";
import realLesEchelles8 from "../assets/real-lesechelles-8.jpeg";
import realLesEchelles9 from "../assets/real-lesechelles-9.jpeg";
import realLesEchelles10 from "../assets/real-lesechelles-10.jpeg";
const deptNames: Record<string, string> = {
  "01": "Ain",
  "03": "Allier",
  "07": "Ardèche",
  "15": "Cantal",
  "26": "Drôme",
  "38": "Isère",
  "42": "Loire",
  "43": "Haute-Loire",
  "63": "Puy-de-Dôme",
  "69": "Rhône",
  "73": "Savoie",
  "74": "Haute-Savoie",
  "54": "Meurthe-et-Moselle"
};
const categories = [{
  key: "all",
  label: "Tous les projets"
}, {
  key: "maconnerie",
  label: "Maçonnerie"
}, {
  key: "charpente",
  label: "Charpente/Couverture"
}, {
  key: "plomberie",
  label: "Plomberie"
}, {
  key: "autres",
  label: "Autres"
}];
const projects = [{
  images: [realIzeauxMac4, realIzeauxMac5, realIzeauxMac1, realIzeauxMac2, realIzeauxMac3, realIzeauxMac6],
  category: ["maconnerie"],
  categoryLabel: "Maçonnerie",
  title: "Terrassement et maçonnerie pour une construction neuve",
  location: "Izeaux (38)",
  description: "Du terrassement aux fondations jusqu'à l'élévation des murs : construction complète d'une maison individuelle en briques avec dalle béton armé."
}, {
  images: [realMaubec6, realMaubec4, realMaubec5, realMaubec8, realMaubec1, realMaubec2, realMaubec3, realMaubec7, realMaubec9],
  category: ["maconnerie", "charpente"],
  categoryLabel: "Maçonnerie & Charpente",
  title: "Construction complète : maçonnerie et charpente couverture",
  location: "Maubec (38)",
  description: "Élévation des murs en parpaings, pose de la charpente industrielle, couverture tuiles et finitions gouttières pour une maison neuve de plain-pied."
}, {
  images: [realLaTroncheCharp1, realLaTroncheCharp2, realLaTroncheCharp3, realLaTroncheCharp4, realLaTroncheCharp5],
  category: ["charpente"],
  categoryLabel: "Charpente/Couverture",
  title: "Un abri voiture en bois sur mesure, esthétique et durable",
  location: "La Tronche (38)",
  description: "Conception et réalisation d'un carport en charpente bois avec bardage à claire-voie, intégré à l'environnement de la maison."
}, {
  images: [realRoybon2, realRoybon5, realRoybon1, realRoybon4, realRoybon3],
  category: ["charpente"],
  categoryLabel: "Charpente/Couverture",
  title: "Terrasses et ossatures bois pour une extension sur mesure",
  location: "Roybon (38)",
  description: "Création de terrasses surélevées et ossatures bois adossées à une maison existante, alliant structure porteuse et esthétique naturelle."
}, {
  images: [realSteCrossey2, realSteCrossey1, realSteCrossey3],
  category: ["charpente", "autres"],
  categoryLabel: "Charpente & Rénovation",
  title: "Mezzanine en bois avec dalle de verre intégrée",
  location: "Saint-Étienne-de-Crossey (38)",
  description: "Création d'une mezzanine sur structure bois apparente avec insertion d'une dalle en verre pour apporter lumière naturelle entre les niveaux."
}, {
  images: [realStGeoire1, realStGeoire2, realStGeoire3],
  category: ["maconnerie"],
  categoryLabel: "Maçonnerie & Gros œuvre",
  title: "Accès carrossable en béton désactivé sur mesure",
  location: "Saint-Geoire-en-Valdaine (38)",
  description: "Réalisation d'un accès carrossable en béton désactivé, offrant une surface robuste et esthétique adaptée au passage des véhicules."
}, {
  images: [realStPaulIzeaux4, realStPaulIzeaux5, realStPaulIzeaux1, realStPaulIzeaux2, realStPaulIzeaux3],
  category: ["maconnerie"],
  categoryLabel: "Maçonnerie & Gros œuvre",
  title: "Piscine à débordement en béton armé",
  location: "Saint-Paul-d'Izeaux (38)",
  description: "Construction d'une piscine à débordement en béton armé, du terrassement au coulage du radier et élévation des murs en parpaings avec local technique intégré."
}, {
  images: [realSassenage9, realSassenage10, realSassenage1, realSassenage2, realSassenage4, realSassenage3, realSassenage5, realSassenage6, realSassenage7, realSassenage8],
  category: ["maconnerie", "autres"],
  categoryLabel: "Rénovation & Gros œuvre",
  title: "Ouvertures en sous-œuvre et mezzanine bois dans bâtiment en pierres",
  location: "Sassenage (38)",
  description: "Création de deux ouvertures en sous-œuvre dans un mur en pierres, coulage d'une dalle béton armé et construction d'une mezzanine en structure bois pour réhabiliter un bâtiment ancien."
}, {
  images: [realVoreppe1, realVoreppe2],
  category: ["maconnerie", "autres"],
  categoryLabel: "Rénovation & Gros œuvre",
  title: "Réfection d'un mur en pierres avec arase et couvertine",
  location: "Voreppe (38)",
  description: "Restauration complète d'un mur en pierres : réalisation d'une arase à la chaux, remise en place des pierres, rejointoiement traditionnel et pose de couvertines en pierres de taille."
}, {
  images: [realMontStMartin3, realMontStMartin4, realMontStMartin5, realMontStMartin7, realMontStMartin1, realMontStMartin2, realMontStMartin6],
  category: ["autres"],
  categoryLabel: "Autres",
  title: "Abri de jardin en bois avec couverture tuiles",
  location: "Mont-Saint-Martin (54)",
  description: "Construction complète d'un abri de jardin en madriers bois massif avec charpente traditionnelle et couverture en tuiles, intégré harmonieusement au terrain."
}, {
  images: [realLesEchelles3, realLesEchelles10, realLesEchelles4, realLesEchelles1, realLesEchelles2, realLesEchelles5, realLesEchelles6, realLesEchelles9, realLesEchelles7, realLesEchelles8],
  category: ["maconnerie", "autres"],
  categoryLabel: "Rénovation & Gros œuvre",
  title: "Aménagement d'une grange en habitation avec plancher bois",
  location: "Les Échelles (73)",
  description: "Transformation complète d'une grange en habitation : ouvertures en sous-œuvre dans les murs en pierres, coulage de dalle béton, création d'un plancher bois sur structure apparente et maçonnerie de reprise."
}, {
  images: ["https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80", "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"],
  category: ["plomberie"],
  categoryLabel: "Plomberie",
  title: "-40% sur la facture de chauffage grâce à une pompe à chaleur",
  location: "Annecy (74)",
  description: "Installation d'une PAC air/eau avec nouveaux radiateurs."
}, {
  images: ["https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80", "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80", "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&q=80"],
  category: ["plomberie"],
  categoryLabel: "Plomberie",
  title: "Une salle de bain spa qui valorise l'appartement",
  location: "Lyon 6ème (69)",
  description: "Douche italienne, baignoire balnéo et finitions haut de gamme."
}, {
  images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"],
  category: ["autres"],
  categoryLabel: "Gouttières",
  title: "Des gouttières alu qui protègent les façades pour 25 ans",
  location: "Tullins (38)",
  description: "Installation sur mesure avec descentes décoratives."
}];
const Realisations = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const deptFilter = searchParams.get("dept") || null;
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);
  const filteredProjects = (() => {
    let filtered = activeCategory === "all" ? projects : projects.filter(p => p.category.includes(activeCategory));
    if (deptFilter) {
      filtered = filtered.filter(p => p.location.includes(`(${deptFilter})`));
    }
    return filtered;
  })();
  return <div>
      {/* Hero */}
      <section className="bg-muted pt-16 md:pt-24 pb-6 md:pb-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7
        }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {deptFilter ? <>Nos réalisations en <span className="gradient-red-text">{deptNames[deptFilter] || deptFilter} ({deptFilter})</span></> : <>Pas des promesses, <span className="gradient-red-text">juste des résultats concrets</span></>}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              {deptFilter ? `Découvrez nos chantiers réalisés dans le département ${deptNames[deptFilter] || deptFilter}.` : "Chaque projet ci-dessous est un client qui a retrouvé satisfaction, sécurité, confort, + valeur immobilière."}
            </p>
            {deptFilter && <Link to="/realisations" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                ← Voir tous les projets
              </Link>}

            <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-2">Jugez par vous-même.</h2>
            <motion.div animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="mt-4">
              <img src={arrowsDown} alt="Scroll vers le bas" className="w-[300px] h-[300px] mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => <button key={cat.key} onClick={() => setActiveCategory(cat.key)} className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${activeCategory === cat.key ? "gradient-red text-white shadow-lg" : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"}`}>
                {cat.label}
              </button>)}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length === 0 ? <div className="col-span-full text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">Aucun chantier référencé pour le moment dans ce département.</p>
                <Link to="/realisations" className="inline-flex items-center gap-2 font-semibold gradient-red-text hover:underline">
                  ← Voir tous nos projets
                </Link>
              </div> : null}
            {filteredProjects.map((project, index) => <motion.div key={project.title} layout initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.9
          }} transition={{
            duration: 0.4,
            delay: index * 0.05
          }}>
                <motion.div whileHover={{
              y: -5,
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
            }} className="bg-background rounded-3xl overflow-hidden shadow-sm border border-border cursor-pointer" onClick={() => setSelectedProject(project)}>
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
              </motion.div>)}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-red text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Votre projet mérite aussi le même niveau d'exigence et de qualité</h2>
            <p className="text-white/70 text-base md:text-lg mb-8">Parlez-nous de vos besoins et recevez un devis personnalisé sous 48h.</p>
            <KFButton to="/contact" variant="light">
              Obtenir mon devis gratuit
            </KFButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>;
};
export default Realisations;