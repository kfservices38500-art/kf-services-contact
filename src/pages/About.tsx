import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, FileCheck, Award, Scale, Target, Heart, Eye, User } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/animations/ScrollReveal";
import ParallaxSection from "../components/animations/ParallaxSection";
import KFButton from "../components/ui/KFButton";
import PoignetmainsIcon from "../assets/Poignetmains.svg";
import ChantierIcon from "../assets/Chantier.svg";
import WorkersIcon from "../assets/Workers.svg";
import FiveStarsIcon from "../assets/5stars.svg";
const stats = [{
  value: "Depuis\n2003",
  label: "Expérience des gérants\ndans le bâtiment",
  icon: PoignetmainsIcon
}, {
  value: "+\n300",
  label: "Projets livrés avec succès\ndepuis 2003",
  icon: ChantierIcon
}, {
  value: "+\n50",
  label: "Projets déjà livrés par\nKF Services depuis 2022",
  icon: WorkersIcon
}];
const timeline = [{
  number: "01",
  year: "2003",
  title: "Entrée dans le métier",
  desc: "Plus de 20 ans d'expérience à votre service."
}, {
  number: "02",
  year: "2010",
  title: "Spécialisation toiture",
  desc: "Charpente et couverture pour mieux protéger votre bien."
}, {
  number: "03",
  year: "2015",
  title: "Élargissement des compétences",
  desc: "Plomberie et chauffage intégrés à notre offre."
}, {
  number: "04",
  year: "2022",
  title: "Création de KF Services",
  desc: "Un interlocuteur unique pour tous vos travaux."
}, {
  number: "05",
  year: "2023",
  title: "3 équipes spécialisées",
  desc: "Des délais plus courts pour vos projets."
}, {
  number: "06",
  year: "2026",
  title: "+300 chantiers livrés",
  desc: "Autant de clients satisfaits."
}];
const values = [{
  icon: Target,
  title: "Résultat garanti",
  desc: "Votre chantier soigné dans les moindres détails, conforme à vos attentes."
}, {
  icon: Heart,
  title: "Engagement total",
  desc: "Chaque projet est traité comme s'il était le nôtre — pour que vous soyez fier du résultat."
}, {
  icon: Eye,
  title: "Transparence totale",
  desc: "Vous savez où en est votre chantier, combien il coûte et quand il sera terminé."
}, {
  icon: User,
  title: "Un seul interlocuteur",
  desc: "Nous coordonnons tous pour vous. Fini le casse-tête, un projet bien réalisé c'est avant tout un chantier serein."
}];
const certifications = [{
  icon: Shield,
  title: "Assurance Décennale",
  desc: "Vos travaux couverts et garantis pendant 10 ans."
}, {
  icon: FileCheck,
  title: "RC Professionnelle",
  desc: "Nous protégeons votre chantier du début à la fin de notre intervention."
}, {
  icon: Award,
  title: "Qualité certifiée",
  desc: "Des travaux réalisés par des professionnels qualifiés."
}, {
  icon: Scale,
  title: "Conformité DTU",
  desc: "Des travaux en conformité selon les règles pour garantir qualité, durabilité et sécurité de votre bien."
}];
const About = () => {
  useEffect(() => {
    document.title = "À propos de KF Services | Rénovation à Voiron (38)";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Découvrez KF Services : plus de 20 ans d'expérience en rénovation, maçonnerie et charpente à Voiron. Un interlocuteur unique pour tous vos travaux.");
  }, []);

  return <div>
      {/* Hero */}
      <section className="bg-muted py-16 md:py-24">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Un partenaire fiable pour des travaux <span className="gradient-red-text">sereins.</span></h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">Fort de plus de 20 ans d'expertise, vous profitez d'une équipe expérimentée qui coordonne tous les corps de métier pour que votre projet soit à votre image et sans stress.</p>
          </motion.div>
        </div>
      </section>

      {/* About + Timeline */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <p className="gradient-red-text font-bold text-base uppercase tracking-wider mb-2">Pourquoi nous faire confiance</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">+ de 20 ans d'expérience au service{"\n"}de <span className="gradient-red-text italic">votre tranquillité.</span></h2>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg">
              <p>
                Quand vous confiez votre chantier à KF Services, vous gagnez un avantage décisif : un seul interlocuteur qui maîtrise tous les métiers du bâtiment.
              </p>
              <p>Avec trois équipes spécialisées et plus de 300 chantiers à notre actif (dont plus de 50 avec KF Services) , vous disposez d'une réactivité et d'un savoir-faire concret.</p>
              <p>Notre promesse : vous accompagner du premier contact jusqu'à la réception finale.</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link to="/services" className="inline-flex items-center gap-2 gradient-red-text font-bold text-base hover:underline">
                  Découvrir nos services →
                </Link>
                <Link to="/realisations" className="inline-flex items-center gap-2 gradient-red-text font-bold text-base hover:underline">
                  Voir nos réalisations →
                </Link>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {timeline.map((item, i) => <motion.div key={item.number} initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: i * 0.08
              }} className="flex items-start gap-6">
                  <span className="text-2xl md:text-3xl font-black gradient-red-text whitespace-nowrap min-w-[80px]">{item.year}</span>
                  <div>
                    <h3 className="font-bold text-foreground text-base">{item.title} <span className="font-normal text-muted-foreground">– {item.desc.charAt(0).toLowerCase() + item.desc.slice(1)}</span></h3>
                  </div>
                </motion.div>)}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => <ScrollReveal key={stat.label} delay={i * 0.1}>
                <img src={stat.icon} alt={stat.label} className="w-[200px] h-[200px] mx-auto mb-2 opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(28%) sepia(82%) saturate(2476%) hue-rotate(346deg) brightness(91%) contrast(95%)" }} />
                <span className="text-4xl md:text-5xl font-black gradient-red-text whitespace-pre-line">{stat.value}</span>
                <p className="text-base text-muted-foreground mt-1 whitespace-pre-line">{stat.label}</p>
              </ScrollReveal>)}
          </div>
        </div>
      </section>

      {/* Values */}
      <ParallaxSection className="bg-muted py-16 md:py-24" speed={0.15}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="gradient-red-text font-bold text-base uppercase tracking-wider mb-2">Ce que vous gagnez avec nous</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Des engagements concrets, <span className="gradient-red-text">pas des promesses en l'air.</span></h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => <ScrollReveal key={v.title} delay={i * 0.1}>
                <motion.div whileHover={{
              y: -5,
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"
            }} className="bg-background rounded-3xl p-7 shadow-sm">
                  <v.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-base text-muted-foreground">{v.desc}</p>
                </motion.div>
              </ScrollReveal>)}
          </div>
        </div>
      </ParallaxSection>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Vos travaux protégés, <span className="gradient-red-text">votre esprit tranquille.</span></h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((c, i) => <ScrollReveal key={c.title} delay={i * 0.1}>
              <motion.div whileHover={{
            y: -5
          }} className="border-2 border-border rounded-3xl p-7">
                <c.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{c.title}</h3>
                <p className="text-base text-muted-foreground">{c.desc}</p>
              </motion.div>
            </ScrollReveal>)}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-red text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Prêt à lancer votre projet en toute sérénité ?</h2>
            <p className="text-white/70 text-base md:text-lg mb-8">Contactez-nous pour une visite gratuite et un devis détaillé sans engagement.</p>
            <KFButton to="/contact" variant="light">
              Obtenir mon devis gratuit
            </KFButton>
          </ScrollReveal>
        </div>
      </section>
    </div>;
};
export default About;