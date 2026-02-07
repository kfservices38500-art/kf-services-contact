import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface KFButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "gradient" | "dark" | "light" | "outline";
  className?: string;
  external?: boolean;
}

const KFButton = ({ to, children, variant = "gradient", className = "", external = false }: KFButtonProps) => {
  const baseClasses = "inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold transition-all duration-300 group";

  const variantClasses = {
    gradient: "btn-gradient",
    dark: "bg-foreground text-background hover:bg-foreground/90",
    light: "btn-light",
    outline: "border-2 border-border text-foreground hover:bg-muted",
  };

  const iconColor = variant === "light" ? "text-foreground" : variant === "outline" ? "text-foreground" : "";

  const content = (
    <>
      {children}
      <span className={`relative w-5 h-5 ${iconColor}`}>
        <ArrowUpRight className="w-5 h-5 absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-1 group-hover:-translate-y-1" />
        <ArrowRight className="w-5 h-5 absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" />
      </span>
    </>
  );

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {content}
    </Link>
  );
};

export default KFButton;
