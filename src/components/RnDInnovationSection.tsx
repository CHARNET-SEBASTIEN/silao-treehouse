import { motion } from "framer-motion";
import {
  BookOpen,
  BrainCircuit,
  Database,
  FlaskConical,
  ShieldCheck,
  TextSearch,
} from "lucide-react";
import { Link } from "react-router-dom";

import magicienneClesIllustration from "@/assets/illustrations/magicienne-cles.png";
import { Button } from "@/components/ui/button";

const innovationAxes = [
  {
    icon: TextSearch,
    title: "Assistance à la recherche",
    description: "Retrouver plus vite l'information utile dans le dossier.",
  },
  {
    icon: BookOpen,
    title: "Aides à la rédaction",
    description: "Structurer certains écrits avec des assistances relues par les professionnels.",
  },
  {
    icon: BrainCircuit,
    title: "Assistances encadrées",
    description: "Explorer des usages utiles sans confondre aide logicielle et décision professionnelle.",
  },
  {
    icon: Database,
    title: "Données sensibles sécurisées",
    description: "Simplifier les accès autorisés tout en gardant un cadre strict sur les données.",
  },
];

type RnDInnovationSectionProps = {
  id?: string;
};

const RnDInnovationSection = ({ id = "recherche-innovation" }: RnDInnovationSectionProps) => {
  return (
    <section id={id} className="relative overflow-hidden px-4 py-6 md:py-8 tint-primary">
      <div className="mx-auto max-w-6xl section-panel px-6 py-5 md:px-10 md:py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 grid gap-5 lg:grid-cols-[1.05fr_0.92fr] lg:items-center"
        >
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <FlaskConical className="h-4 w-4" />
              R&amp;D &amp; IA
              <ShieldCheck className="h-4 w-4 opacity-80" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-primary sketch-underline">Innover</span> pour les professionnels
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground lg:mx-0">
              Nous explorons des usages utiles pour alléger certaines tâches administratives,
              améliorer la recherche d&apos;information et garder un cadre strict sur les données et
              la responsabilité humaine.
            </p>
            <div className="mt-6">
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/engagements">Voir nos engagements</Link>
              </Button>
            </div>
          </div>

          <figure className="relative overflow-hidden px-6 pb-2 pt-6">
            <div className="pointer-events-none absolute right-6 top-4 h-28 w-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-6 left-4 h-20 w-36 rounded-full bg-secondary/15 blur-2xl" />
            <img
              src={magicienneClesIllustration}
              alt="Illustration évoquant l’innovation au service des équipes"
              loading="lazy"
              decoding="async"
              width={800}
              height={800}
              className="relative z-10 mx-auto w-full max-w-[14rem] drop-shadow-sm sm:max-w-xs"
            />
          </figure>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {innovationAxes.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="surface-card rounded-[1.5rem] px-5 py-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RnDInnovationSection;
