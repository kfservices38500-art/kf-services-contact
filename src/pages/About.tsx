import { Link } from "react-router-dom";
import { ArrowUpRight, Shield, FileCheck, Award, Scale, Target, Heart, Eye, Users } from "lucide-react";

const stats = [
  { value: "20+", label: "Années à votre service" },
  { value: "500+", label: "Projets livrés avec succès" },
  { value: "3", label: "Équipes dédiées à votre chantier" },
  { value: "98%", label: "De clients satisfaits" },
];

const timeline = [
  { year: "2003", desc: "Notre gérant entre dans le métier — 20 ans d'expérience à votre service" },
  { year: "2010", desc: "Spécialisation charpente-couverture pour mieux protéger votre toiture" },
  { year: "2015", desc: "Certification SS4 — votre sécurité en désamiantage assurée" },
  { year: "2018", desc: "Création de KF Services — un interlocuteur unique pour tous vos travaux" },
  { year: "2020", desc: "3 équipes spécialisées — des délais plus courts pour vos projets" },
  { year: "2024", desc: "+500 chantiers livrés — autant de clients satisfaits" },
];

const values = [
  { icon: Target, title: "Résultat garanti", desc: "Vous obtenez un chantier soigné dans les moindres détails, conforme à vos attentes." },
  { icon: Heart, title: "Engagement total", desc: "Chaque projet est traité comme s'il était le nôtre — pour que vous soyez fier du résultat." },
  { icon: Eye, title: "Transparence totale", desc: "Vous savez où en est votre chantier, combien il coûte et quand il sera terminé." },
  { icon: Users, title: "Un seul interlocuteur", desc: "Vous évitez de jongler entre plusieurs artisans : on coordonne tout pour vous." },
];

const certifications = [
  { icon: Shield, title: "Assurance Décennale", desc: "Vos travaux garantis 10 ans — en cas de problème, vous êtes couvert." },
  { icon: FileCheck, title: "RC Professionnelle", desc: "En cas d'imprévu sur le chantier, votre patrimoine est protégé." },
  { icon: Award, title: "Certification SS4", desc: "Désamiantage réalisé en toute sécurité par une équipe certifiée." },
  { icon: Scale, title: "Conformité DTU", desc: "Des travaux aux normes qui sécurisent la valeur de votre bien." },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Un partenaire fiable pour des travaux qui durent</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Depuis 2003, vous bénéficiez d'une équipe expérimentée qui coordonne tous les corps de métier pour que votre projet se déroule sans stress, dans les délais et dans votre budget.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="text-3xl md:text-4xl font-black text-primary">{stat.value}</span>
                <p className="text-sm text-background/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Pourquoi nous faire confiance</p>
            <h2 className="text-3xl font-bold mb-6">20 ans d'expérience au service de votre tranquillité</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Quand vous confiez votre chantier à KF Services, vous gagnez un avantage décisif : un seul interlocuteur qui maîtrise tous les métiers du bâtiment. Plus besoin de coordonner maçon, charpentier et plombier — on s'en charge.
              </p>
              <p>
                Avec trois équipes spécialisées et plus de 500 chantiers à notre actif, vous bénéficiez d'une réactivité et d'un savoir-faire qui se traduisent concrètement : des délais tenus, des finitions soignées et un budget respecté.
              </p>
              <p>
                Notre promesse est simple : vous accompagner du premier appel jusqu'à la réception finale, pour que votre projet devienne exactement ce que vous aviez imaginé.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-4">
                <span className="text-lg font-black text-primary min-w-[60px]">{item.year}</span>
                <p className="text-muted-foreground text-sm pt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Ce que vous gagnez avec nous</p>
          <h2 className="text-3xl font-bold mb-12">Des engagements concrets, pas des promesses en l'air</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-background rounded-2xl p-6 shadow-sm">
                <v.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl font-bold mb-12">Vos travaux protégés, votre esprit tranquille</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((c) => (
            <div key={c.title} className="border border-border rounded-xl p-6">
              <c.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à lancer votre projet en toute sérénité ?</h2>
          <p className="text-background/70 mb-8">Contactez-nous pour une visite gratuite et un devis détaillé sans engagement.</p>
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

export default About;
