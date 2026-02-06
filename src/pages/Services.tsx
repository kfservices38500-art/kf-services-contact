import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

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
    title: "Désamiantage",
    emoji: "⚠️",
    description: "Vous préservez la santé de vos proches et vous mettez en conformité avec la réglementation. Notre équipe certifiée SS4 intervient en toute sécurité pour éliminer ce risque invisible.",
    benefits: [
      "Un diagnostic précis pour savoir exactement où se trouve le danger",
      "Un retrait sécurisé qui protège votre famille et vos voisins",
      "Un confinement maîtrisé qui empêche toute dispersion de fibres",
      "Un traitement conforme des déchets — vous êtes en règle",
      "Un certificat de fin de travaux qui valorise votre bien à la revente",
      "Une intervention possible même en milieu occupé, sans déménager",
    ],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    category: "desamiantage",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tous vos travaux, un seul partenaire de confiance</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vous évitez la galère de coordonner plusieurs artisans. KF Services gère l'intégralité de votre projet pour que vous n'ayez qu'un seul numéro à appeler.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-24">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <span>{service.emoji}</span>
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
                  >
                    Obtenir mon devis <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to={`/realisations?category=${service.category}`}
                    className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-full text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Voir les résultats <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Vous avez un projet ? Parlons-en.</h2>
          <p className="text-background/70 mb-8">En 48h, vous recevez un appel et un rendez-vous pour une visite gratuite sur site.</p>
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

export default Services;
