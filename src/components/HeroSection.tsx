import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import heroTree from "@/assets/hero-tree.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center paper-bg overflow-hidden px-4 py-4">
      {/* Decorative leaf SVGs */}
      <svg className="absolute top-10 left-10 w-16 h-16 text-leaf opacity-30 animate-sway" viewBox="0 0 64 64" fill="currentColor">
        <path d="M32 2C32 2 10 20 10 40C10 52 20 62 32 62C44 62 54 52 54 40C54 20 32 2 32 2Z" />
      </svg>
      <svg className="absolute bottom-20 right-16 w-12 h-12 text-leaf opacity-20 animate-sway" style={{ animationDelay: "2s" }} viewBox="0 0 64 64" fill="currentColor">
        <path d="M32 2C32 2 10 20 10 40C10 52 20 62 32 62C44 62 54 52 54 40C54 20 32 2 32 2Z" />
      </svg>

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-6">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-2/5 shrink-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-1 leading-tight">
            Le DUI pensé pour
          </h1>
          <p className="text-2xl md:text-3xl font-sketch text-primary mb-3">
            le social & médico-social
          </p>
          <p className="text-base text-muted-foreground font-body max-w-xl mb-5">
            Dossier Usager Informatisé pour la Protection de l'Enfance, le Handicap, l'Insertion et le médico-social. Simple, collaboratif, conforme.
          </p>
          <Button variant="hero" size="xl">
            Demandez la démo
          </Button>
        </motion.div>

        {/* Tree image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:w-3/5 w-full"
        >
        <img
          src={heroTree}
          alt="Arbre éducatif avec enfants et éducateurs"
          className="w-full h-auto mix-blend-multiply"
          style={{
            maskImage: "radial-gradient(ellipse 65% 60% at 50% 48%, black 40%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 65% 60% at 50% 48%, black 40%, transparent 85%)",
          }}
        />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
