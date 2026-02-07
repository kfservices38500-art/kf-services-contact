import { motion } from "framer-motion";
import KFButton from "../components/ui/KFButton";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-muted">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-7xl md:text-8xl font-black gradient-red-text mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oups ! Cette page n'existe pas</p>
        <KFButton to="/" variant="gradient">
          Retour à l'accueil
        </KFButton>
      </motion.div>
    </div>
  );
};

export default NotFound;
