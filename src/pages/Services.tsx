import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/animations/ScrollReveal";
import ParallaxSection from "../components/animations/ParallaxSection";
import KFButton from "../components/ui/KFButton";

const servicesData = [
  {
    title: "Maçonnerie",
    emoji: "🧱",
    description: "Vous bénéficiez de structures solides qui supportent vos projets sur le long terme. Murs, dalles et extensions sont conçus pour que votre maison reste stable, sûre et prête à évoluer avec vos besoins.",
    benefits: [
      "Des murs porteurs et cloisons qui garantissent la solidité de votre bâti",
      "Des fondations et dallages dimensionnés pour durer des décennies",
      "Des extensions qui ajoutent de l'espace et de la valeur à votre bien",
      "Une rénovation de façade qui redonne vie à votre extérieur",
      "Des ouvertures de murs réalisées en toute sécurité structurelle",
      "Des terrasses qui prolongent votre espace de vie à l'extérieur",
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    category: "maconnerie",
  },
  {
    title: "Charpente & Couverture",
    emoji: "🏠",
    description: "Vous êtes protégé des intempéries pour les 30 prochaines années. Notre expertise en charpente traditionnelle et couverture vous garantit une toiture étanche, isolée et durable.",
    benefits: [
      "Une charpente en bois massif qui résiste au temps et aux contraintes",
      "Une couverture étanche qui élimine tout risque d'infiltration",
      "Une rénovation complète qui redonne sa solidité à votre toit",
      "Une isolation par l'extérieur qui réduit vos factures d'énergie",
      "Une zinguerie soignée qui protège vos murs des eaux de ruissellement",
      "Des fenêtres de toit qui apportent lumière et ventilation naturelle",
    ],
    image: "https://images.unsplash.com/photo-1632759145905-98a82e3776a6?w=800&q=80",
    category: "charpente",
  },
  {
    title: "Gouttières Aluminium",
    emoji: "💧",
    description: "Vous protégez vos façades et fondations des dégâts des eaux grâce à un système d'évacuation durable, esthétique et sans entretien pendant des années.",
    benefits: [
      "Des gouttières sur mesure qui s'intègrent parfaitement à votre toiture",
      "Des descentes d'eau qui éloignent efficacement l'eau de vos fondations",
      "Des raccordements étanches qui éliminent les fuites",
      "Un entretien qui prolonge la durée de vie de votre installation",
      "Une réparation rapide pour stopper les infiltrations en urgence",
      "Une protection anti-feuilles pour éviter les bouchons et débordements",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "gouttieres",
  },
  {
    title: "Plomberie",
    emoji: "🔧",
    description: "Vous gagnez en confort au quotidien et vous réduisez vos dépenses énergétiques grâce à des installations modernes, fiables et adaptées à votre habitat.",
    benefits: [
      "Des sanitaires fonctionnels et esthétiques dès le premier jour",
      "Un chauffage performant qui répartit la chaleur uniformément",
      "Une pompe à chaleur qui divise vos factures de chauffage",
      "Un air sain grâce à une VMC bien dimensionnée pour votre logement",
      "Un dépannage rapide qui limite les dégâts en cas d'urgence",
      "Une mise aux normes qui sécurise votre installation",
    ],
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
    category: "plomberie",
  },
  {
    title: "Construction neuve & Rénovation globale",
    emoji: "🏗️",
    description: "Vous confiez l'ensemble de votre projet à un seul interlocuteur. De la conception à la livraison, vous évitez la complexité et gagnez du temps, de l'argent et de la tranquillité.",
    benefits: [
      "Une maison neuve clé en main, conforme à vos plans et à votre budget",
      "Une rénovation complète qui transforme votre intérieur sans tracas",
      "Une transformation de locaux adaptée à votre nouveau besoin",
      "Une mise en conformité qui protège votre bien et ses occupants",
      "Une coordination de tous les corps de métier — zéro stress pour vous",
      "Un suivi de chantier régulier pour que vous restiez informé à chaque étape",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "neuf-renovation",
  },
];

const Services = () => {
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Tous vos travaux, <span className="gradient-red-text">un seul partenaire de confiance</span></h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Vous évitez la galère de coordonner plusieurs artisans. KF Services gère l'intégralité de votre projet pour que vous n'ayez qu'un seul numéro à appeler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-24">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              id={service.category}
              className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-28"
            >
              <ScrollReveal direction={index % 2 === 0 ? "left" : "right"} className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">{service.emoji}</span>
                  <span className="gradient-red-text">{service.title}</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <KFButton to="/contact" variant="gradient">
                    Obtenir mon devis
                  </KFButton>
                  <KFButton to={`/realisations?category=${service.category}`} variant="outline">
                    Voir les résultats
                  </KFButton>
                </div>
              </ScrollReveal>
              <ScrollReveal direction={index % 2 === 0 ? "right" : "left"} className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-3xl overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-red text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Vous avez un projet ? Parlons-en.</h2>
            <p className="text-white/70 text-base md:text-lg mb-8">En 48h, vous recevez un appel et un rendez-vous pour une visite gratuite sur site.</p>
            <KFButton to="/contact" variant="light">
              Obtenir mon devis gratuit
            </KFButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
