import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, CalendarCheck, FileText, Shield } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import ScrollReveal from "../components/animations/ScrollReveal";
import contactIcon from "@/assets/contact-icon.svg";
const Contact = () => {
  useEffect(() => {
    document.title = "Contact & devis gratuit | KF Services – Voiron (38)";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Demandez un devis gratuit sous 48 h à KF Services. Rénovation et travaux BTP à Voiron et en Auvergne–Rhône-Alpes. Appelez le 06 69 20 97 88.");
  }, []);

  return <div>
      {/* Hero */}
      <section className="gradient-red pt-16 md:pt-24 pb-8 md:pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7
          }} className="flex-1 text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">Lancez votre projet <span className="text-white/80">en 2 minutes</span></h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8">
                Décrivez votre projet et vos besoins, nous vous contacterons dans les 48h pour une visite gratuite et un devis détaillé sans engagement.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-5 py-3 bg-white/15 rounded-full text-base font-semibold shadow-sm border-2 border-white/30 text-white">
                  <CalendarCheck className="w-5 h-5 text-white" />
                  Réponse sous 48h garantie
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-3 bg-white/15 rounded-full text-base font-semibold shadow-sm border-2 border-white/30 text-white">
                  <FileText className="w-5 h-5 text-white" />
                  Devis détaillé et gratuit
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-3 bg-white/15 rounded-full text-base font-semibold shadow-sm border-2 border-white/30 text-white">
                  <Shield className="w-5 h-5 text-white" />
                  Assurance décennale & RC Pro
                </span>
              </div>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0]
          }} transition={{
            duration: 0.8,
            delay: 0.2,
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }} className="hidden lg:block flex-shrink-0">
              <img src={contactIcon} alt="Icône contact – demandez un devis gratuit à KF Services" className="w-[500px] h-[500px] object-contain brightness-0 invert" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Comment ça <span className="gradient-red-text">se passe ?</span></h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8">
              Vous remplissez le formulaire, nous vous recontactons pour comprendre votre projet, puis nous nous déplaçons chez vous pour établir un devis précis.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-base">Appelez-nous directement</p>
                  <a href="tel:+33669209788" className="text-base text-muted-foreground hover:text-foreground transition-colors">06 69 20 97 88</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-base">Écrivez-nous</p>
                  <a href="mailto:contact@kf-services.fr" className="text-base text-muted-foreground hover:text-foreground transition-colors">contact@kf-services.fr</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-base">Siège</p>
                  <p className="text-base text-muted-foreground">58 Rue des Tallifardières</p>
                  <p className="text-base text-muted-foreground">38500 Voiron</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-base">Disponibilité</p>
                  <p className="text-base text-muted-foreground">Lun – Ven : 8h00 – 18h00</p>
                  <p className="text-base text-muted-foreground">Sam : 9h00 – 12h00</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 gradient-red rounded-3xl">
              <h3 className="font-bold text-base text-white mb-2">Où que vous soyez, nous nous déplaçons chez vous</h3>
              <p className="text-sm text-white/80">
                Intervention dans toute la région Auvergne-Rhône-Alpes : Isère, Savoie, Haute-Savoie, Rhône, Drôme, Ain et tous les départements de la région. 
              </p>
            </div>
            <div className="mt-4">
              <Link to="/realisations" className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:underline">
                Voir nos réalisations →
              </Link>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="bg-background border-2 border-border rounded-3xl p-6 md:p-10">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Décrivez votre <span className="gradient-red-text">projet</span></h2>
              <p className="text-base text-muted-foreground mb-6">
                Plus vous êtes précis, plus notre devis sera adapté à vos besoins réels.
              </p>
              <ContactForm />
              <p className="text-sm text-muted-foreground mt-4">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité. Aucun engagement, aucun frais.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Retrouvez-nous <span className="gradient-red-text">ici</span></h2>
            <p className="text-base text-muted-foreground mb-8 text-center">Nous intervenons dans toute la région Auvergne-Rhône-Alpes</p>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.509!2d5.5917!3d45.3629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af4818e91c82f%3A0x0!2s58+Rue+des+Tallifardi%C3%A8res%2C+38500+Voiron!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" width="100%" height="400" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" sandbox="allow-scripts allow-same-origin" title="KF Services - Localisation" className="w-full" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>;
};
export default Contact;