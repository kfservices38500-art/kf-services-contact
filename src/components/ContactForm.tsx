import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const projectTypes = [
  "Maçonnerie",
  "Charpente & Couverture",
  "Plomberie",
  "Gouttières",
  "Désamiantage",
  "Rénovation complète",
  "Autre",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci ! Votre demande a bien été envoyée. Nous vous rappelons sous 48h.");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl bg-background">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-base font-semibold mb-2">Prénom *</label>
          <input
            type="text"
            required
            placeholder="Votre prénom"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full px-5 py-3.5 rounded-2xl border-2 border-input bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
        </div>
        <div>
          <label className="block text-base font-semibold mb-2">Nom *</label>
          <input
            type="text"
            required
            placeholder="Votre nom"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full px-5 py-3.5 rounded-2xl border-2 border-input bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-base font-semibold mb-2">Email *</label>
          <input
            type="email"
            required
            placeholder="votre@email.fr"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-5 py-3.5 rounded-2xl border-2 border-input bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
        </div>
        <div>
          <label className="block text-base font-semibold mb-2">Téléphone *</label>
          <input
            type="tel"
            required
            placeholder="06 12 34 56 78"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-5 py-3.5 rounded-2xl border-2 border-input bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-base font-semibold mb-2">Type de projet *</label>
        <select
          required
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          className="w-full px-5 py-3.5 rounded-2xl border-2 border-input bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all"
        >
          <option value="">Sélectionnez le type de projet</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-base font-semibold mb-2">Décrivez votre projet *</label>
        <textarea
          required
          rows={4}
          placeholder="Surface, type de travaux, contraintes particulières, délais souhaités..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-5 py-3.5 rounded-2xl border-2 border-input bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all"
        />
      </div>
      <button
        type="submit"
        className="w-full btn-gradient py-4 rounded-2xl text-base font-bold group flex items-center justify-center gap-2"
      >
        Envoyer ma demande de devis
        <span className="relative w-5 h-5">
          <ArrowUpRight className="w-5 h-5 absolute inset-0 transition-all duration-300 group-hover:opacity-0" />
          <ArrowRight className="w-5 h-5 absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100" />
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
