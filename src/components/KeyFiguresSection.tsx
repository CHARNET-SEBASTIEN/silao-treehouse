import { motion } from "framer-motion";
import { Users, Building2, FileCheck, Clock } from "lucide-react";

const figures = [
  {
    icon: Users,
    value: "12 000+",
    label: "Usagers accompagnés",
    description: "dans toute la France",
  },
  {
    icon: Building2,
    value: "150+",
    label: "Établissements",
    description: "connectés à Silao",
  },
  {
    icon: FileCheck,
    value: "100%",
    label: "Conformité Ségur",
    description: "certifié SONS",
  },
  {
    icon: Clock,
    value: "5 ans",
    label: "Engagement contractuel",
    description: "partenariat durable",
  },
];

const KeyFiguresSection = () => {
  return (
    <section className="relative py-24 px-4 paper-grain overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-body mb-3">
            Silao en quelques chiffres
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Chiffres <span className="text-primary sketch-underline">clés</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {figures.map((fig, i) => (
            <motion.div
              key={fig.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <fig.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-3xl md:text-4xl font-sketch text-foreground mb-1">
                {fig.value}
              </span>
              <span className="text-sm font-body font-semibold text-foreground mb-0.5">
                {fig.label}
              </span>
              <span className="text-xs font-body text-muted-foreground">
                {fig.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFiguresSection;
