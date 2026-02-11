import { Link } from "react-router-dom";
import { ArrowUpRight, Hammer, Home as HomeIcon, Droplets, Wrench, Building2, Star, Users, MapPin, CheckCircle2, ChevronRight, Shield, FileCheck, Award, Scale, Quote } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import ScrollReveal from "../components/animations/ScrollReveal";
import ParallaxSection from "../components/animations/ParallaxSection";
import KFButton from "../components/ui/KFButton";
import WhyUsCarousel from "../components/WhyUsCarousel";
import MarqueeBanner from "../components/MarqueeBanner";
const heroImages = [{
  src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
  alt: "Votre maison plus solide"
}, {
  src: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=1920&q=80",
  alt: "Une toiture qui vous protège"
}, {
  src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",
  alt: "Un confort thermique optimal"
}];
const services = [{
  icon: Hammer,
  label: "Maçonnerie & Gros œuvre"
}, {
  icon: HomeIcon,
  label: "Charpente & Couverture"
}, {
  icon: Wrench,
  label: "Plomberie & Chauffage"
}, {
  icon: Droplets,
  label: "Gouttières Aluminium"
}, {
  icon: Building2,
  label: "Neuf & Rénovation"
}];
const serviceCards = [{
  icon: Hammer,
  title: "MAÇONNERIE",
  subtitle: "SOLIDITÉ & DURABILITÉ",
  benefits: ["Des fondations et murs solides pour un bâti durable", "Des extensions qui valorisent votre bien immobilier", "Une rénovation complète qui transforme votre intérieur"]
}, {
  icon: HomeIcon,
  title: "CHARPENTE & COUVERTURE",
  subtitle: "PROTECTION & ISOLATION",
  benefits: ["Une toiture étanche qui vous protège des intempéries", "Une isolation performante qui réduit vos factures d'énergie", "Des matériaux durables pour 30 ans de tranquillité", "Zinguerie et étanchéité pour zéro infiltration"]
}, {
  icon: Droplets,
  title: "GOUTTIÈRES ALUMINIUM",
  subtitle: "ÉVACUATION & ÉTANCHÉITÉ",
  benefits: ["Des gouttières sur mesure intégrées à votre toiture", "Des raccordements étanches qui éliminent les fuites", "Une protection durable de vos façades et fondations"]
}, {
  icon: Wrench,
  title: "PLOMBERIE & CHAUFFAGE",
  subtitle: "CONFORT & ÉCONOMIES",
  benefits: ["Des sanitaires fonctionnels dès le premier jour", "Un chauffage performant pour une chaleur homogène dans toute la maison", "Des économies d'énergie avec une pompe à chaleur adaptée", "Un air sain grâce à une VMC bien dimensionnée", "Un dépannage rapide"]
}, {
  icon: Building2,
  title: "NEUF & RÉNOVATION",
  subtitle: "PROJET CLÉ EN MAIN",
  benefits: ["Une maison neuve conforme à vos plans et votre budget", "Une rénovation complète sans tracas", "Un seul interlocuteur qui coordonne tous les corps de métier"]
}];
const testimonials = [{
  text: "Notre salle de bain est méconnaissable ! Délais tenus, budget respecté et une équipe toujours à l'écoute. On a gagné en confort au quotidien sans aucune mauvaise surprise.",
  name: "Marie Dupont",
  location: "Voiron",
  rating: 5
}, {
  text: "L'extension de notre maison s'est déroulée sans accroc. Un seul interlocuteur a tout coordonné, ce qui nous a évité beaucoup de stress. Rapport qualité-prix imbattable.",
  name: "Jean-Pierre Martin",
  location: "Grenoble",
  rating: 5
}, {
  text: "Suite à une tempête, notre toiture a été réparée en un temps record. Nous avons retrouvé la sérénité très vite. Professionnalisme et réactivité exemplaires !",
  name: "Sophie Bernard",
  location: "Moirans",
  rating: 5
}, {
  text: "Travaux de plomberie impeccables, équipe ponctuelle et soignée. Le devis était clair et le prix final identique. Je recommande vivement !",
  name: "Laurent Girard",
  location: "Voreppe",
  rating: 5
}, {
  text: "Rénovation complète de notre maison ancienne. Le résultat dépasse nos attentes. L'équipe a su préserver le charme tout en modernisant l'ensemble.",
  name: "Michel Faure",
  location: "Saint-Égrève",
  rating: 5
}];
const guarantees = [{
  icon: Shield,
  title: "Assurance Décennale",
  desc: "Vos travaux protégés pendant 10 ans, en toute sérénité"
}, {
  icon: FileCheck,
  title: "RC Professionnelle",
  desc: "Vous êtes couvert en cas d'imprévu sur le chantier"
}, {
  icon: Award,
  title: "Qualité certifiée",
  desc: "Des travaux réalisés dans les règles de l'art par des professionnels qualifiés"
}, {
  icon: Scale,
  title: "Normes respectées",
  desc: "Des travaux conformes qui sécurisent la valeur de votre bien"
}];
const portfolioItems = [{
  img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  title: "Maçonnerie & Construction",
  desc: "Des murs solides et des extensions qui augmentent la surface habitable."
}, {
  img: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=800&q=80",
  title: "Charpente & Couverture",
  desc: "Une toiture qui vous met à l'abri pour des décennies."
}, {
  img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80",
  title: "Gouttières Aluminium",
  desc: "Des gouttières sur mesure qui protègent vos façades."
}, {
  img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  title: "Plomberie & Chauffage",
  desc: "Un confort thermique optimal et des économies d'énergie."
}];
const processSteps = [{
  num: "01",
  title: "Vous nous contactez",
  desc: "Nous cernons votre besoin et planifions une visite."
}, {
  num: "02",
  title: "On se déplace chez vous",
  desc: "Visite gratuite, analyse technique et conseil personnalisé."
}, {
  num: "03",
  title: "Vous recevez un devis clair",
  desc: "Devis détaillé ligne par ligne, sans coûts cachés."
}, {
  num: "04",
  title: "Les travaux avancent",
  desc: "Suivi régulier à chaque étape, vous restez informé."
}, {
  num: "05",
  title: "Vous profitez du résultat",
  desc: "Réception soignée et garantie décennale."
}];
const departments = [{
  code: "01",
  name: "Ain",
  landmark: "Monastère de Brou",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
}, {
  code: "03",
  name: "Allier",
  landmark: "Château des Bourbon",
  image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80"
}, {
  code: "07",
  name: "Ardèche",
  landmark: "Pont d'Arc",
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
}, {
  code: "15",
  name: "Cantal",
  landmark: "Viaduc de Garabit",
  image: "https://images.unsplash.com/photo-1470770841497-7b3090ac6836?w=600&q=80"
}, {
  code: "26",
  name: "Drôme",
  landmark: "Palais du Facteur Cheval",
  image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&q=80"
}, {
  code: "38",
  name: "Isère",
  landmark: "Fort de la Bastille",
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
}, {
  code: "42",
  name: "Loire",
  landmark: "Château de la Bâtie d'Urfé",
  image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80"
}, {
  code: "43",
  name: "Haute-Loire",
  landmark: "Cathédrale du Puy-en-Velay",
  image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=600&q=80"
}, {
  code: "63",
  name: "Puy-de-Dôme",
  landmark: "Puy de Dôme",
  image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&q=80"
}, {
  code: "69",
  name: "Rhône",
  landmark: "Basilique de Fourvière",
  image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?w=600&q=80"
}, {
  code: "73",
  name: "Savoie",
  landmark: "Lac du Bourget",
  image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80"
}, {
  code: "74",
  name: "Haute-Savoie",
  landmark: "Lac d'Annecy",
  image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&q=80"
}];
const TestimonialCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalPages = Math.ceil(testimonials.length / 3);
  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.getBoundingClientRect().width ?? 0;
    const gap = 24;
    scrollRef.current.scrollTo({
      left: index * (cardWidth + gap) * 3,
      behavior: "smooth"
    });
    setActiveIndex(index);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => {
        const next = (prev + 1) % totalPages;
        scrollToIndex(next);
        return next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [totalPages, scrollToIndex]);
  return <div>
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2" style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none"
    }}>
        {testimonials.map((t, i) => <motion.div key={i} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: i * 0.08
      }} whileHover={{
        y: -5,
        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
      }} className="bg-background rounded-3xl p-7 shadow-sm flex-shrink-0 w-[calc(33.333%-1rem)] min-w-[300px] snap-start flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <p className="text-base text-muted-foreground mb-5 leading-relaxed">"{t.text}"</p>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="font-bold text-base">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
              <Quote className="w-8 h-8 text-primary opacity-30" />
            </div>
          </motion.div>)}
      </div>
      <div className="flex gap-2 mt-8 justify-center">
        {Array.from({
        length: totalPages
      }).map((_, i) => <button key={i} onClick={() => scrollToIndex(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex ? "gradient-red scale-110" : "bg-foreground/20"}`} />)}
      </div>
    </div>;
};
const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <p className="text-muted-foreground text-lg mb-4">
              Fort depuis plus de <span className="font-bold text-foreground">20 ans d'expérience</span> dans le domaine du bâtiment, les associés <span className="font-bold gradient-red-text">Fatih</span> (plombier - chauffagiste) et <span className="font-bold gradient-red-text">Mukremin KOCAK</span> (maçon - charpentier) ont décidé de mettre en commun avec <span className="font-bold gradient-red-text">KF Services</span> leurs compétences, afin de répondre aux besoins et exigences des clients particuliers et professionnels.
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Votre maison plus solide,{" "}
              <span className="gradient-red-text">plus sûre, plus belle</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg">
              La diversité de nos activités vous permettra de réduire les interlocuteurs ainsi qu'une meilleure coordination de vos travaux.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <KFButton to="/contact" variant="gradient">
                Obtenir mon devis gratuit
              </KFButton>
              <KFButton to="/realisations" variant="outline">
                Voir nos réalisations
              </KFButton>
            </div>
            {/* All services badges in hero */}
            <div className="flex flex-wrap gap-2">
              {services.map(s => <Link key={s.label} to="/services" className="inline-flex items-center gap-2 px-4 py-2.5 bg-muted rounded-2xl text-sm font-medium text-muted-foreground hover:bg-foreground hover:text-background transition-all duration-300">
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </Link>)}
            </div>
          </motion.div>
          <motion.div className="relative" initial={{
          opacity: 0,
          x: 40
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <div className="aspect-[3/3.2] rounded-[2rem] overflow-hidden relative">
              {heroImages.map((img, i) => <img key={i} src={img.src} alt={img.alt} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentImage ? "opacity-100" : "opacity-0"}`} />)}
            </div>
            {/* Stats bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/40 backdrop-blur-xl rounded-2xl p-4 flex items-center justify-between gap-4 text-white">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-base font-bold">+20 ans d'expérience</span>
              </div>
              <div className="flex gap-1.5">
                {heroImages.map((_, i) => <button key={i} onClick={() => setCurrentImage(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentImage ? "gradient-red scale-110" : "bg-white/40"}`} />)}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-base font-bold">Auvergne-Rhône-Alpes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Carousel */}
      <ParallaxSection className="bg-muted py-16 md:py-24 overflow-hidden" speed={0.15}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="gradient-red-text font-bold text-base uppercase tracking-wider mb-2 text-center">Témoignages</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
              Ce que nos clients <span className="gradient-red-text">disent de nous</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-12 text-center max-w-2xl mx-auto">
              4.9/5 sur Google · Avis vérifiés
            </p>
          </ScrollReveal>
          <TestimonialCarousel />
        </div>
      </ParallaxSection>

      {/* Value Prop - 3 column layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left - Photo with overlay */}
          <ScrollReveal direction="left">
            <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px]">
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80" alt="Chantier KF Services" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">Budget maîtrisé, zéro mauvaise surprise.
zéro mauvaise surprise.<br />Budget maîtrisé, zéro mauvaise surprise.
  
                </h3>
              </div>
            </div>
          </ScrollReveal>

          {/* Center - Red header + bullet points */}
          <ScrollReveal>
            <div className="flex flex-col h-full">
              <div className="gradient-red rounded-t-3xl p-6 md:p-8">
                <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
                  Gagnez du temps<br />et de la sérénité
                </h3>
              </div>
              <div className="bg-background rounded-b-3xl p-6 md:p-8 flex-1 shadow-sm">
                <div className="w-12 h-[3px] gradient-red rounded-full mb-6" />
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3 text-muted-foreground text-base">
                    <span className="w-2.5 h-2.5 rounded-full gradient-red flex-shrink-0 mt-1.5" />
                    Un seul interlocuteur gère l'intégralité de votre chantier, du devis à la réception.
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground text-base">
                    <span className="w-2.5 h-2.5 rounded-full gradient-red flex-shrink-0 mt-1.5" />
                    Vous bénéficiez d'un devis détaillé et d'un planning réaliste, pour que votre projet avance sans surprise et dans les temps.
                  </li>
                </ul>
                <Link to="/a-propos" className="inline-flex items-center gap-2 gradient-red-text font-bold text-base hover:underline">
                  Découvrir nos engagements
                  <ChevronRight className="w-5 h-5 text-primary" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Photo with service tags */}
          <ScrollReveal direction="right">
            <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px]">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" alt="Cuisine rénovée KF Services" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                {services.map(s => <span key={s.label} className="inline-flex items-center px-4 py-2 bg-foreground/80 backdrop-blur-sm text-background text-sm font-medium rounded-full">
                    {s.label}
                  </span>)}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Overview - 4 cards with gradient headers */}
      <ParallaxSection className="bg-muted py-16 md:py-24" speed={0.1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="gradient-red-text font-bold text-base uppercase tracking-wider mb-2">Tous vos travaux, un seul partenaire</p>
                <h2 className="text-3xl md:text-5xl font-bold">Des solutions concrètes pour <span className="gradient-red-text">chaque besoin</span></h2>
              </div>
              <div className="flex items-end">
                <p className="text-muted-foreground text-base md:text-lg">
                  Vous évitez la multiplication des artisans et les retards : KF Services coordonne tous les corps de métier pour que votre projet avance vite, bien, et dans votre budget.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceCards.map((card, i) => <ScrollReveal key={card.title} delay={i * 0.1}>
                <motion.div whileHover={{
              y: -5,
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)"
            }} className="bg-background rounded-3xl overflow-hidden shadow-sm h-full flex flex-col">
                  {/* Gradient red header */}
                  <div className="gradient-red p-6 pb-5">
                    <card.icon className="w-8 h-8 text-white/80 mb-3" />
                    <h3 className="text-white text-lg font-bold leading-tight">{card.title}</h3>
                    {card.subtitle && <p className="text-white/70 text-sm font-medium mt-1">{card.subtitle}</p>}
                  </div>
                  {/* Benefits */}
                  <div className="p-6 flex-1">
                    <ul className="space-y-3">
                      {card.benefits.map((b, j) => <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {b}
                        </li>)}
                    </ul>
                  </div>
                </motion.div>
              </ScrollReveal>)}
          </div>
        </div>
      </ParallaxSection>

      {/* Bandeau défilant valeurs */}
      <MarqueeBanner />

      {/* Trust - Split card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <ScrollReveal>
          <p className="gradient-red-text font-bold text-base uppercase tracking-wider mb-2 text-center">Pourquoi nos clients nous font confiance</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="gradient-red-text">Rénovez sereinement,</span> on s'occupe de tout
          </h2>
        </ScrollReveal>

        {/* Why Us Carousel */}
        <ScrollReveal className="mb-12">
          <WhyUsCarousel />
        </ScrollReveal>

        {/* Guarantees */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {guarantees.map((g, i) => <ScrollReveal key={g.title} delay={i * 0.1}>
              <motion.div whileHover={{
            y: -3
          }} className="bg-muted rounded-3xl p-6 text-center">
                <g.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-base mb-1">{g.title}</h4>
                <p className="text-sm text-muted-foreground">{g.desc}</p>
              </motion.div>
            </ScrollReveal>)}
        </div>
      </section>

      {/* Portfolio Preview */}
      <ParallaxSection className="bg-muted py-16 md:py-24" speed={0.15}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="gradient-red-text font-bold text-base uppercase tracking-wider mb-2">La preuve par l'exemple</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Des résultats qui <span className="gradient-red-text">parlent d'eux-mêmes</span></h2>
            <p className="text-muted-foreground text-base md:text-lg mb-12 max-w-2xl">
              Chaque projet réalisé est un client satisfait. Découvrez ce que nos équipes peuvent accomplir pour transformer votre habitat.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, i) => <ScrollReveal key={item.title} delay={i * 0.1}>
                <motion.div whileHover={{
              y: -5,
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
            }} className="bg-background rounded-3xl overflow-hidden shadow-sm">
                  <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover" />
                  <div className="p-5">
                    <h3 className="font-bold text-base mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>)}
          </div>
          <ScrollReveal className="text-center mt-10">
            <KFButton to="/realisations" variant="dark">
              Voir toutes nos réalisations
            </KFButton>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <ScrollReveal>
          <p className="gradient-red-text font-bold text-base uppercase tracking-wider mb-2">Simple et transparent</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Comment ça se passe <span className="gradient-red-text">concrètement ?</span></h2>
          <p className="text-muted-foreground text-base md:text-lg mb-12 max-w-2xl">
            Vous savez exactement à quoi vous attendre à chaque étape. Pas de zone grise, pas de stress.
          </p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step, i) => <ScrollReveal key={step.num} delay={i * 0.08}>
              <div className="relative">
                <span className="text-5xl font-black gradient-red-text opacity-30">{step.num}</span>
                <h3 className="font-bold text-base mt-2 mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </ScrollReveal>)}
        </div>
      </section>

      {/* News */}
      <ParallaxSection className="bg-muted py-16 md:py-24" speed={0.1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="gradient-red-text font-bold text-base uppercase tracking-wider mb-2">Toujours en mouvement</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-12">Suivez nos <span className="gradient-red-text">avancées</span></h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal>
              <motion.div whileHover={{
              y: -3
            }} className="bg-background rounded-3xl p-6">
                <p className="text-sm text-muted-foreground mb-1">10 Janvier 2025</p>
                <h4 className="font-bold text-base mb-1">Nouveau projet livré à Moirans</h4>
                <p className="text-base text-muted-foreground">Une maison de ville entièrement rénovée : les propriétaires ont gagné 30 m² de surface habitable.</p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal>
              <motion.div whileHover={{
              y: -3
            }} className="bg-background rounded-3xl p-6">
                <p className="text-sm text-muted-foreground mb-1">5 Janvier 2025</p>
                <h4 className="font-bold text-base mb-1">Extension livrée à Voiron</h4>
                <p className="text-base text-muted-foreground">30 m² supplémentaires pour une famille qui avait besoin d'espace — chantier livré en 8 semaines.</p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal>
              <motion.div whileHover={{
              y: -3
            }} className="bg-background rounded-3xl p-6">
                <p className="text-sm text-muted-foreground mb-1">15 Décembre 2024</p>
                <h4 className="font-bold text-base mb-1">Toiture rénovée à Grenoble</h4>
                <p className="text-base text-muted-foreground">Charpente et couverture complètes pour une maison des années 60 — étanchéité garantie.</p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA */}
      <section className="gradient-red text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Prêt à concrétiser votre projet ?</h2>
            <p className="text-white/70 text-base md:text-lg mb-8">En 48h, vous recevez une réponse et un rendez-vous pour avancer ensemble.</p>
            <KFButton to="/contact" variant="light">
              Obtenir mon devis gratuit
            </KFButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="gradient-red-text font-bold text-base uppercase tracking-wider mb-2">SIMPLE ET RAPIDE</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Décrivez votre projet, <span className="gradient-red-text">on s'occupe de tout</span></h2>
            <p className="text-muted-foreground text-base md:text-lg mb-12">Remplissez le formulaire en 2 minutes. Nous vous recontactons sous 48h pour planifier une visite gratuite et obtenir votre devis détaillé.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Map / Coverage + Google Maps */}
      <ParallaxSection className="bg-muted py-16 md:py-24" speed={0.1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="gradient-red-text font-bold text-base uppercase tracking-wider mb-2">Près de chez vous</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nous intervenons partout en <span className="gradient-red-text">Auvergne-Rhône-Alpes</span></h2>
            <p className="text-muted-foreground text-base md:text-lg mb-12 max-w-2xl">Où que vous soyez dans la région, vous bénéficiez de la même qualité de services.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {departments.map((d, i) => <ScrollReveal key={d.code} delay={i * 0.05}>
                <Link to={`/realisations?dept=${d.code}`}>
                  <motion.div whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)"
              }} className="bg-background rounded-3xl overflow-hidden shadow-sm border border-border group cursor-pointer p-6 text-center">
                    <span className="text-2xl font-black gradient-red-text">{d.code}</span>
                    <p className="text-sm text-muted-foreground mt-1">{d.name}</p>
                  </motion.div>
                </Link>
              </ScrollReveal>)}
          </div>
          {/* Google Maps */}
          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.509!2d5.5917!3d45.3629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af4818e91c82f%3A0x0!2s58+Rue+des+Tallifardi%C3%A8res%2C+38500+Voiron!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" width="100%" height="400" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="KF Services - Localisation" className="w-full" />
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </div>;
};
export default Home;