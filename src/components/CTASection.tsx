import { motion } from "framer-motion";
import { useDemoRequestDialog } from "@/components/DemoRequestDialogProvider";
import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";

const CTASection = () => {
  const { openDialog } = useDemoRequestDialog();

  return (
    <section className="px-4 py-20 md:py-28 tint-primary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-panel px-8 py-10 text-center md:px-14 md:py-16"
        >
          <div className="mb-5 flex justify-center">
            <span className="marker-label">Démo personnalisée</span>
          </div>
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_18px_40px_-24px_hsl(var(--accent)/0.95)]">
              <HeartHandshake className="h-7 w-7" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Demandez une <span className="title-sky font-sketch">démonstration personnalisée</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg font-body text-muted-foreground">
            30 minutes pour voir Silao en situation réelle, sur votre secteur d&apos;activité,
            avec un scénario adapté à votre organisation. Sans engagement.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl" onClick={openDialog}>
              Échangeons sur votre projet
            </Button>
          </div>
          <p className="mt-4 text-xs font-body text-muted-foreground">
            Sans engagement · Réponse sous 48 h
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
