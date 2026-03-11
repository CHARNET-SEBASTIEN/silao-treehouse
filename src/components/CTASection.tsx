import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";
import DemoRequestDialog from "@/components/DemoRequestDialog";

const CTASection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="sketch-border bg-primary/5 p-10 md:p-16 text-center"
        >
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center">
              <HeartHandshake className="w-7 h-7 text-secondary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Demandez une <span className="text-primary font-sketch">démonstration personnalisée</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-8 text-lg">
            30 minutes pour voir D2L en situation réelle, sur votre secteur d'activité. Sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={() => setDemoOpen(true)}>
              Échangeons sur votre projet
            </Button>
          </div>
          <p className="text-xs text-muted-foreground font-body mt-4">
            Sans engagement · Réponse sous 48 h
          </p>
          <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
