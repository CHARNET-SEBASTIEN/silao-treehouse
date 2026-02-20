import { motion } from "framer-motion";
import { Building2, Network, TrendingDown, Scale } from "lucide-react";

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

const GrappesSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-body font-medium">
            <Building2 className="w-4 h-4" />
            Axe 2 — Multi-ESMS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Une architecture pensée pour les{" "}
            <span className="text-primary sketch-underline">grappes ESMS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Associations et groupements multi-établissements : mutualisez votre infrastructure avec un FINESS Juridique unique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Points de mutualisation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Mutualisation optimisée</h3>
            {mutualisationPoints.map((point, i) => (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-body text-lg">{point.label}</p>
              </motion.div>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground font-body mt-4"
            >
              Scalabilité pour des associations de <strong className="text-foreground">5, 10, 20 établissements</strong> et plus.
            </motion.p>
          </div>

          {/* Exemple concret */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="sketch-border bg-card p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Exemple concret</h4>
            </div>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Une grappe de <strong className="text-foreground">10 établissements géographiques différents</strong> peut fonctionner avec une architecture mutualisée unique, réduisant significativement les coûts de maintenance et de pilotage.
            </p>

            {/* Visual diagram */}
            <div className="flex items-center justify-center gap-2 pt-4 border-t border-border">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="w-7 h-7 rounded bg-primary/15 flex items-center justify-center"
                >
                  <Building2 className="w-3.5 h-3.5 text-primary" />
                </motion.div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-2 font-body">
              10 ESMS → 1 architecture mutualisée
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GrappesSection;
