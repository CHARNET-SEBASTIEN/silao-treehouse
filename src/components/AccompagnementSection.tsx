import { motion } from "framer-motion";
import { Handshake, Users, GraduationCap, BarChart3, Target, Activity } from "lucide-react";

const accompagnementPoints = [
  { icon: Users, label: "Intégration des chefs de projet au COMOP" },
  { icon: Handshake, label: "Gouvernance partagée" },
  { icon: GraduationCap, label: "Accompagnement métier structuré" },
  { icon: GraduationCap, label: "Plan de formation adapté aux profils" },
  { icon: BarChart3, label: "Pilotage des indicateurs d'usage pour les financements" },
];

const pilotageIndicators = [
  { icon: Target, label: "Taux de qualification INS" },
  { icon: Activity, label: "Taux d'alimentation du DMP" },
  { icon: BarChart3, label: "Suivi des indicateurs d'usage" },
  { icon: BarChart3, label: "Tableaux de bord temps réel pour la direction" },
];

const AccompagnementSection = () => {
  return (
    <section className="py-24 px-4 paper-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-body font-medium">
            <Handshake className="w-4 h-4" />
            Axe 3 — Accompagnement
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Au-delà du logiciel :{" "}
            <span className="text-primary sketch-underline">un partenariat opérationnel</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Un accompagnement au changement réellement clé en main, du COMOP au suivi de vos indicateurs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Points d'accompagnement */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Accompagnement structuré</h3>
            <div className="space-y-4">
              {accompagnementPoints.map((point, i) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <point.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground font-body">{point.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pilotage intégré */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="sketch-border bg-card p-8"
          >
            <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Pilotage intégré
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pilotageIndicators.map((ind, i) => (
                <motion.div
                  key={ind.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-primary/5"
                >
                  <ind.icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground font-body">{ind.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Message fort */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="sketch-border bg-primary/5 border-primary/20 p-8 md:p-10 text-center max-w-3xl mx-auto"
        >
          <Target className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="text-foreground text-lg font-body leading-relaxed">
            <strong>Vos financements dépendent de l'atteinte de cibles d'usage.</strong>
          </p>
          <p className="text-primary font-sketch text-xl mt-3">
            Nous vous donnons les outils pour les atteindre et les prouver.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AccompagnementSection;
