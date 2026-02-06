import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Hammer,
  Home as HomeIcon,
  Droplets,
  ShieldAlert,
  Wrench,
  Building2,
  Star,
  Users,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  ChevronRight,
  Shield,
  FileCheck,
  Award,
  Scale,
} from "lucide-react";
import { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";

const heroImages = [
  { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80", alt: "Votre maison plus solide" },
  { src: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=1920&q=80", alt: "Une toiture qui vous protège" },
  { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80", alt: "Un confort thermique optimal" },
];

const services = [
  { icon: Hammer, label: "Maçonnerie" },
  { icon: HomeIcon, label: "Charpente & Couverture" },
  { icon: Droplets, label: "Gouttières Alu" },
  { icon: ShieldAlert, label: "Désamiantage" },
  { icon: Wrench, label: "Plomberie" },
  { icon: Building2, label: "Neuf & Rénovation" },
];

const testimonials = [
  {
    text: "Notre salle de bain est méconnaissable ! Délais tenus, budget respecté et une équipe toujours à l'écoute. On a gagné en confort au quotidien sans aucune mauvaise surprise.",
    name: "Marie Dupont",
    location: "Paris 15ème",
  },
  {
    text: "L'extension de notre maison s'est déroulée sans accroc. Un seul interlocuteur a tout coordonné, ce qui nous a évité beaucoup de stress. Rapport qualité-prix imbattable.",
    name: "Jean-Pierre Martin",
    location: "Versailles",
  },
  {
    text: "Suite à une tempête, notre toiture a été réparée en un temps record. Nous avons retrouvé la sérénité très vite. Professionnalisme et réactivité exemplaires !",
    name: "Sophie Bernard",
    location: "Nanterre",
  },
];

const serviceCards = [
  {
    title: "Maçonnerie",
    benefits: [
      "Des fondations et murs solides pour un bâti durable",
      "Des extensions qui valorisent votre bien immobilier",
      "Une rénovation complète qui transforme votre intérieur",
    ],
  },
  {
    title: "Charpente & Couverture",
    benefits: [
      "Une toiture étanche qui vous protège des intempéries",
      "Une isolation performante qui réduit vos factures d'énergie",
      "Des matériaux durables pour 30 ans de tranquillité",
      "Zinguerie et étanchéité pour zéro infiltration",
    ],
  },
  {
    title: "Désamiantage",
    benefits: [
      "Un diagnostic clair pour savoir où vous en êtes",
      "Un retrait sécurisé par une équipe certifiée SS4",
      "Traitement conforme des déchets, vous êtes en règle",
      "Votre santé et celle de vos proches protégées",
    ],
  },
  {
    title: "Plomberie",
    subtitle: "Confort & économies",
    benefits: [
      "Des sanitaires fonctionnels dès le premier jour",
      "Un air sain grâce à une VMC bien dimensionnée",
      "Des économies d'énergie avec une pompe à chaleur adaptée",
      "Un dépannage rapide pour éviter les dégâts",
    ],
  },
];

const guarantees = [
  { icon: Shield, title: "Assurance Décennale", desc: "Vos travaux protégés pendant 10 ans, en toute sérénité" },
  { icon: FileCheck, title: "RC Professionnelle", desc: "Vous êtes couvert en cas d'imprévu sur le chantier" },
  { icon: Award, title: "Certification SS4", desc: "Votre santé préservée grâce à un désamiantage conforme" },
  { icon: Scale, title: "Normes respectées", desc: "Des travaux conformes qui sécurisent la valeur de votre bien" },
];

const portfolioItems = [
  { img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80", title: "Maçonnerie & Construction", desc: "Des murs solides et des extensions qui augmentent la surface habitable et la valeur de votre bien." },
  { img: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=800&q=80", title: "Charpente & Couverture", desc: "Une toiture qui vous met à l'abri pour des décennies, avec une isolation qui réduit vos factures." },
  { img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80", title: "Gouttières Aluminium", desc: "Des gouttières sur mesure qui protègent vos façades et fondations des dégâts des eaux." },
  { img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", title: "Plomberie & Chauffage", desc: "Un confort thermique optimal et des économies d'énergie grâce à des installations modernes et fiables." },
];

const processSteps = [
  { num: "01", title: "Vous nous appelez", desc: "En 10 minutes, nous cernons votre besoin et planifions une visite." },
  { num: "02", title: "On vient chez vous", desc: "Visite gratuite, analyse technique et conseil personnalisé sur place." },
  { num: "03", title: "Vous recevez un devis clair", desc: "Devis détaillé ligne par ligne, sans coûts cachés ni surprise." },
  { num: "04", title: "Les travaux avancent", desc: "Suivi régulier à chaque étape, vous restez informé en permanence." },
  { num: "05", title: "Vous profitez du résultat", desc: "Réception soignée et garantie décennale pour votre tranquillité." },
];

const departments = [
  { code: "75", name: "Paris" },
  { code: "78", name: "Yvelines" },
  { code: "91", name: "Essonne" },
  { code: "92", name: "Hauts-de-Seine" },
  { code: "93", name: "Seine-Saint-Denis" },
  { code: "94", name: "Val-de-Marne" },
  { code: "95", name: "Val-d'Oise" },
  { code: "77", name: "Seine-et-Marne" },
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground mb-4">
              Depuis 2003, <span className="font-semibold text-foreground">KF Services</span> vous accompagne pour que vos projets de construction et rénovation se réalisent sereinement.
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Votre maison plus solide,{" "}
              <span className="text-primary">plus sûre, plus belle</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Vous bénéficiez d'un interlocuteur unique qui coordonne maçonnerie, charpente et finitions — pour un chantier sans stress et un résultat durable.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                Obtenir mon devis gratuit
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/realisations"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
              >
                Voir nos réalisations
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <span key={s.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                  <s.icon className="w-3.5 h-3.5" />
                  {s.label}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              {heroImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    i === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            {/* Stats bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur rounded-xl p-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-semibold">+20 ans d'expérience</span>
              </div>
              <div className="flex gap-1">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === currentImage ? "bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-semibold">Toute l'Île-de-France</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-primary font-bold text-lg">4.9/5</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-8">Clients satisfaits · Avis vérifiés Google</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
              alt="Chantier KF Services"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Un budget maîtrisé,<br />zéro mauvaise surprise.
            </h2>
            <h3 className="text-xl font-semibold mb-4">
              Gagnez du temps<br />et de la sérénité
            </h3>
            <p className="text-muted-foreground mb-4">
              Vous évitez la galère de coordonner plusieurs artisans : un seul interlocuteur gère l'intégralité de votre chantier, du devis à la réception.
            </p>
            <p className="text-muted-foreground mb-6">
              Vous bénéficiez d'un devis détaillé et d'un planning réaliste, pour que votre projet avance sans surprise et dans les temps.
            </p>
            <Link
              to="/a-propos"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Découvrir nos engagements
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Tous vos travaux, un seul partenaire</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Des solutions concrètes pour chaque besoin</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Vous évitez la multiplication des artisans et les retards : KF Services coordonne tous les corps de métier pour que votre projet avance vite, bien, et dans votre budget.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceCards.map((card) => (
              <div key={card.title} className="bg-background rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                {card.subtitle && <p className="text-sm text-primary font-medium mb-2">{card.subtitle}</p>}
                <ul className="space-y-2">
                  {card.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Pourquoi nos clients nous font confiance</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Rénovez sereinement, on s'occupe de tout</h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-muted rounded-2xl p-8">
            <p className="text-primary text-xs font-medium uppercase tracking-wider mb-2">Votre projet, simplifié</p>
            <h3 className="text-xl font-bold mb-3">Un plan clair dès le départ</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Vous obtenez une vision complète de votre projet avant le premier coup de pioche : choix des matériaux, planning détaillé et estimation précise. Vous savez exactement où vous allez.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors">
              Obtenir mon devis gratuit <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80" alt="Consultation" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-muted rounded-2xl p-8">
            <p className="text-primary text-xs font-medium uppercase tracking-wider mb-2">Votre budget, respecté</p>
            <h3 className="text-xl font-bold mb-3">Aucune surprise sur la facture</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Vous recevez un devis détaillé ligne par ligne, avec un calendrier réaliste. Chaque dépense est justifiée et vous gardez le contrôle de votre budget du début à la fin.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors">
              Obtenir mon devis gratuit <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" alt="Budget" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {guarantees.map((g) => (
            <div key={g.title} className="bg-muted rounded-xl p-5 text-center">
              <g.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-sm mb-1">{g.title}</h4>
              <p className="text-xs text-muted-foreground">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">La preuve par l'exemple</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Des résultats qui parlent d'eux-mêmes</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Chaque projet réalisé est un client satisfait. Découvrez ce que nos équipes peuvent accomplir pour transformer votre habitat.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item) => (
              <div key={item.title} className="bg-background rounded-2xl overflow-hidden shadow-sm">
                <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/realisations" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors">
              Voir toutes nos réalisations <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Simple et transparent</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça se passe concrètement ?</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Vous savez exactement à quoi vous attendre à chaque étape. Pas de zone grise, pas de stress — juste un projet qui avance.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step) => (
            <div key={step.num} className="relative">
              <span className="text-4xl font-black text-primary/20">{step.num}</span>
              <h3 className="font-semibold mt-2 mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* News */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Toujours en mouvement</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Suivez nos avancées</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-6">Visitez nos chantiers terminés</h3>
              <div className="space-y-4">
                <div className="bg-background rounded-xl p-5">
                  <p className="text-xs text-muted-foreground mb-1">15 Février 2025</p>
                  <h4 className="font-semibold mb-1">Versailles</h4>
                  <p className="text-sm text-muted-foreground mb-3">Rénovation maison — venez juger par vous-même</p>
                  <Link to="/contact" className="text-primary text-sm font-medium hover:underline">Réserver ma visite →</Link>
                </div>
                <div className="bg-background rounded-xl p-5">
                  <p className="text-xs text-muted-foreground mb-1">22 Février 2025</p>
                  <h4 className="font-semibold mb-1">Boulogne-Billancourt</h4>
                  <p className="text-sm text-muted-foreground mb-3">Extension + Toiture — voyez le résultat en vrai</p>
                  <Link to="/contact" className="text-primary text-sm font-medium hover:underline">Réserver ma visite →</Link>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Dernières réalisations</h3>
              <div className="space-y-4">
                <div className="bg-background rounded-xl p-5">
                  <p className="text-xs text-muted-foreground mb-1">10 Janvier 2025</p>
                  <h4 className="font-semibold mb-1">Nouveau projet livré à Neuilly-sur-Seine</h4>
                  <p className="text-sm text-muted-foreground">Une maison de ville entièrement rénovée : les propriétaires ont gagné 30 m² de surface habitable.</p>
                </div>
                <div className="bg-background rounded-xl p-5">
                  <p className="text-xs text-muted-foreground mb-1">5 Janvier 2025</p>
                  <h4 className="font-semibold mb-1">Certification SS4 renouvelée pour 2025</h4>
                  <p className="text-sm text-muted-foreground">Votre sécurité reste notre priorité : notre équipe désamiantage est recertifiée.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à concrétiser votre projet ?</h2>
          <p className="text-background/70 mb-8">En 48h, vous recevez une réponse et un rendez-vous pour avancer ensemble.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Obtenir mon devis gratuit
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">C'est simple et rapide</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Décrivez votre projet, on s'occupe du reste</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Remplissez ce formulaire en 2 minutes. Vous recevrez un appel sous 48h pour planifier une visite gratuite et obtenir votre devis détaillé.
        </p>
        <ContactForm />
      </section>

      {/* Map / Coverage */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Près de chez vous</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nous intervenons partout en Île-de-France</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Où que vous soyez dans la région, vous bénéficiez de la même réactivité et du même niveau d'exigence sur votre chantier.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {departments.map((d) => (
              <div key={d.code} className="bg-background rounded-xl p-4 text-center shadow-sm">
                <span className="text-2xl font-black text-primary">{d.code}</span>
                <p className="text-sm text-muted-foreground mt-1">{d.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
