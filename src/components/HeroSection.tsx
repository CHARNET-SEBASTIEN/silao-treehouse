import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import heroTree from "@/assets/hero-tree.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center paper-bg overflow-hidden px-4">
      {/* Decorative leaf SVGs */}
      <svg className="absolute top-10 left-10 w-16 h-16 text-leaf opacity-30 animate-sway" viewBox="0 0 64 64" fill="currentColor">
        <path d="M32 2C32 2 10 20 10 40C10 52 20 62 32 62C44 62 54 52 54 40C54 20 32 2 32 2Z" />
      </svg>
      <svg className="absolute bottom-20 right-16 w-12 h-12 text-leaf opacity-20 animate-sway" style={{ animationDelay: "2s" }} viewBox="0 0 64 64" fill="currentColor">
        <path d="M32 2C32 2 10 20 10 40C10 52 20 62 32 62C44 62 54 52 54 40C54 20 32 2 32 2Z" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl z-10"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-body px-4 py-1.5 rounded-full mb-6 sketch-border-sm">
          <Shield className="w-4 h-4" />
          Compatible Ségur du Numérique
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-2 leading-tight">
          Le DUI pensé pour
        </h1>
        <p className="text-3xl md:text-4xl font-sketch text-primary mb-6">
          le social & médico-social
        </p>
        <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto mb-8">
          Dossier Usager Informatisé pour la Protection de l'Enfance, le Handicap, l'Insertion et le médico-social. Simple, collaboratif, conforme.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="hero" size="xl">
            Demandez la démo
          </Button>
          <Button variant="hero-outline" size="xl">
            Demandez la plaquette
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-12 max-w-4xl w-full z-10"
      >
        <img
          src={heroTree}
          alt="Arbre éducatif avec enfants et éducateurs"
          className="w-full h-auto rounded-2xl"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
