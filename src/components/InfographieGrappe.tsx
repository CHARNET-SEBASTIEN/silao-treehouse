import { motion } from "framer-motion";
import { Building2, Server, Mail, ArrowDown } from "lucide-react";

const esmsCount = 10;

const InfographieGrappe = () => {
  return (
    <section className="py-24 px-4 paper-bg overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-body mb-3">
            Infographie
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            L'architecture en{" "}
            <span className="text-primary sketch-underline">Grappe</span>{" "}
            simplifiée
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Montrez aux grosses associations comment Silao rationalise leur infrastructure.
          </p>
        </motion.div>

        {/* Infographic */}
        <div className="relative flex flex-col items-center gap-6">
          {/* Top: Association / FINESS Juridique */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sketch-border bg-card px-8 py-5 text-center max-w-xs"
          >
            <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-2">
              <Building2 className="w-6 h-6 text-secondary" />
            </div>
            <p className="font-bold text-foreground text-lg">Organisme Gestionnaire</p>
            <p className="text-sm text-muted-foreground font-body">FINESS Juridique unique</p>
          </motion.div>

          {/* Arrow down */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </motion.div>

          {/* Center: Silao engine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="sketch-border bg-primary/5 border-primary/20 px-10 py-6 text-center max-w-md"
          >
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                <Server className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground">Moteur Silao</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-sm font-body text-primary bg-primary/10 px-3 py-1 rounded-full">
                <Mail className="w-3.5 h-3.5" /> 1 BAL MSSanté
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-body text-primary bg-primary/10 px-3 py-1 rounded-full">
                1 raccordement PFI
              </span>
            </div>
          </motion.div>

          {/* Arrows down */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-1"
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>

          {/* Bottom: ESMS buildings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {Array.from({ length: esmsCount }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.06 }}
                className="sketch-border-sm bg-card w-16 h-16 flex flex-col items-center justify-center gap-0.5"
              >
                <Building2 className="w-5 h-5 text-muted-foreground" />
                <span className="text-[10px] font-body text-muted-foreground">ESMS</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Key message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="sketch-border bg-primary/5 border-primary/20 p-6 md:p-8 text-center max-w-xl mt-4"
          >
            <p className="text-foreground font-body text-lg leading-relaxed">
              <strong>1 seule architecture technique</strong> pour piloter{" "}
              <span className="text-primary font-sketch text-xl">10, 20 ou 50 établissements.</span>
            </p>
            <p className="text-muted-foreground font-body text-sm mt-2">
              Réduisez vos coûts de maintenance et de pilotage.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfographieGrappe;
