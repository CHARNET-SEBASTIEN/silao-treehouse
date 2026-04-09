import { motion } from "framer-motion";
import { Building2, Network, Scale, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const mutualisationPoints = [
  {
    icon: Network,
    label: "Une seule BAL applicative MSSanté",
  },
  {
    icon: Building2,
    label: "Un seul raccordement PFI",
  },
  {
    icon: TrendingDown,
    label: "Réduction des coûts d'exploitation",
  },
  {
    icon: Scale,
    label: "Justification technique de la mutualisation des flux",
  },
];

const governancePoints = [
  "Paramétrages et usages adaptés à chaque établissement ou service.",
  "Lecture consolidée pour les directions multi-sites et les associations.",
  "Confidentialité préservée malgré une architecture technique mutualisée.",
];

const GrappesSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-body font-medium text-secondary">
            <Building2 className="h-4 w-4" />
            Axe 2 — Multi-ESMS
          </div>
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Un DUI mutualisé pour les <span className="text-primary sketch-underline">grappes ESMS</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
            Associations et groupements multi-établissements : mutualisez votre infrastructure avec
            un FINESS juridique unique tout en gardant des usages, des droits et une gouvernance
            lisibles pour chaque structure.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Mutualisation optimisée</h2>
            {mutualisationPoints.map((point, index) => (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <point.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-lg text-foreground font-body">{point.label}</p>
              </motion.div>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-muted-foreground font-body"
            >
              Scalabilité pour des associations de{" "}
              <strong className="text-foreground">5, 10, 20 établissements</strong> et plus.
            </motion.p>

            <div className="rounded-[1.5rem] border border-border/60 bg-card p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Ce que la mutualisation ne doit pas effacer
              </h3>
              <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                {governancePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="sketch-border bg-card p-8 md:p-10"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15">
                <Building2 className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="text-lg font-bold text-foreground">Exemple concret</h2>
            </div>
            <p className="mb-4 text-muted-foreground font-body leading-relaxed">
              Une grappe de <strong className="text-foreground">10 établissements géographiques différents</strong> peut fonctionner avec une architecture mutualisée unique, réduisant significativement les coûts de maintenance et de pilotage.
            </p>

            <div className="flex items-center justify-center gap-2 border-t border-border pt-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="flex h-7 w-7 items-center justify-center rounded bg-primary/15"
                >
                  <Building2 className="h-3.5 w-3.5 text-primary" />
                </motion.div>
              ))}
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground font-body">
              10 ESMS → 1 architecture mutualisée
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="hero" size="lg">
            <Link to="/offres">Voir l&apos;offre de déploiement</Link>
          </Button>
          <Button asChild variant="hero-outline" size="lg">
            <Link to="/#contacts">Poser une question projet</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GrappesSection;
