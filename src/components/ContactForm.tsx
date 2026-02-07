import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { z } from "zod";

const projectTypes = [
  "Maçonnerie",
  "Charpente & Couverture",
  "Plomberie",
  "Gouttières",
  "Désamiantage",
  "Rénovation complète",
  "Autre",
];

const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Le prénom est requis")
    .max(50, "Le prénom ne doit pas dépasser 50 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le prénom contient des caractères invalides"),
  lastName: z
    .string()
    .trim()
    .min(1, "Le nom est requis")
    .max(50, "Le nom ne doit pas dépasser 50 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le nom contient des caractères invalides"),
  email: z
    .string()
    .trim()
    .min(1, "L'email est requis")
    .email("L'adresse email est invalide")
    .max(255, "L'email ne doit pas dépasser 255 caractères"),
  phone: z
    .string()
    .trim()
    .min(1, "Le téléphone est requis")
    .max(20, "Le numéro de téléphone est trop long")
    .regex(/^[0-9\s+()-]+$/, "Le numéro de téléphone est invalide"),
  projectType: z
    .string()
    .min(1, "Le type de projet est requis")
    .refine((val) => projectTypes.includes(val), "Type de projet invalide"),
  description: z
    .string()
    .trim()
    .min(1, "La description est requise")
    .max(2000, "La description ne doit pas dépasser 2000 caractères"),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check – bots fill hidden fields
    if (honeypot) return;

    // Rate limiting – 30s between submissions
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      alert("Veuillez patienter avant de renvoyer le formulaire.");
      return;
    }

    // Validate with zod
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormErrors;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setLastSubmitTime(now);

    // Simulate submission (no backend connected)
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Merci ! Votre demande a bien été envoyée. Nous vous rappelons sous 48h.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectType: "",
        description: "",
      });
    }, 500);
  };

  const clearError = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-background text-left" noValidate>
      {/* Honeypot – hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-base font-semibold mb-2">Prénom *</label>
          <input
            type="text"
            required
            maxLength={50}
            placeholder="Votre prénom"
            value={formData.firstName}
            onChange={(e) => {
              setFormData({ ...formData, firstName: e.target.value });
              clearError("firstName");
            }}
            className={`w-full px-5 py-3.5 rounded-2xl border-2 bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all ${errors.firstName ? "border-red-500" : "border-input"}`}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-base font-semibold mb-2">Nom *</label>
          <input
            type="text"
            required
            maxLength={50}
            placeholder="Votre nom"
            value={formData.lastName}
            onChange={(e) => {
              setFormData({ ...formData, lastName: e.target.value });
              clearError("lastName");
            }}
            className={`w-full px-5 py-3.5 rounded-2xl border-2 bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all ${errors.lastName ? "border-red-500" : "border-input"}`}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-base font-semibold mb-2">Email *</label>
          <input
            type="email"
            required
            maxLength={255}
            placeholder="votre@email.fr"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              clearError("email");
            }}
            className={`w-full px-5 py-3.5 rounded-2xl border-2 bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all ${errors.email ? "border-red-500" : "border-input"}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-base font-semibold mb-2">Téléphone *</label>
          <input
            type="tel"
            required
            maxLength={20}
            placeholder="06 12 34 56 78"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              clearError("phone");
            }}
            className={`w-full px-5 py-3.5 rounded-2xl border-2 bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all ${errors.phone ? "border-red-500" : "border-input"}`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-base font-semibold mb-2">Type de projet *</label>
        <select
          required
          value={formData.projectType}
          onChange={(e) => {
            setFormData({ ...formData, projectType: e.target.value });
            clearError("projectType");
          }}
          className={`w-full px-5 py-3.5 rounded-2xl border-2 bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all ${errors.projectType ? "border-red-500" : "border-input"}`}
        >
          <option value="">Sélectionnez le type de projet</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-base font-semibold mb-2">Décrivez votre projet *</label>
        <textarea
          required
          rows={4}
          maxLength={2000}
          placeholder="Surface, type de travaux, contraintes particulières, délais souhaités..."
          value={formData.description}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
            clearError("description");
          }}
          className={`w-full px-5 py-3.5 rounded-2xl border-2 bg-background text-base focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all ${errors.description ? "border-red-500" : "border-input"}`}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-gradient py-4 rounded-full text-base font-bold group flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de devis"}
        {!isSubmitting && (
          <span className="relative w-5 h-5">
            <ArrowUpRight className="w-5 h-5 absolute inset-0 transition-all duration-300 group-hover:opacity-0" />
            <ArrowRight className="w-5 h-5 absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100" />
          </span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
