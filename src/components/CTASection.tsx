import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Prêt à moderniser la gestion de vos <span className="text-primary font-sketch">usagers</span> ?
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-8 text-lg">
            Rejoignez les établissements qui ont déjà fait le choix d'un DUI simple, conforme et pensé pour le terrain. Demandez votre démonstration personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={() => setDemoOpen(true)}>
              Demandez la démo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
