import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import engagementStructures from "@/assets/engagement-structures.png";
import engagementAccompagnement from "@/assets/engagement-accompagnement.png";
import engagementIndependance from "@/assets/engagement-independance.png";

const axes = [
  {
    image: engagementStructures,
    title: "Adapté à toutes",
    titleLine2: "les structures",
    description: "Mutualisation technique simplifiée : gérez une seule BAL MSSanté pour tous vos établissements (FINESS).",
    href: "/grappes-esms",
    color: "from-primary/20 to-primary/5",
    hoverColor: "group-hover:from-primary/30 group-hover:to-primary/10",
  },
  {
    image: engagementAccompagnement,
    title: "Accompagnement",
    titleLine2: "clé en main",
    description: "Tableaux de bord intégrés pour piloter vos indicateurs d'usage et sécuriser vos financements.",
    href: "/accompagnement",
    color: "from-secondary/20 to-secondary/5",
    hoverColor: "group-hover:from-secondary/30 group-hover:to-secondary/10",
  },
  {
    image: engagementIndependance,
    title: "Indépendance &",
    titleLine2: "engagements durables",
    description: "Un éditeur indépendant et engagé. Solution pérenne, SLA formalisés, sans risque de migration forcée.",
    href: "/engagements",
    color: "from-accent/30 to-accent/10",
    hoverColor: "group-hover:from-accent/40 group-hover:to-accent/15",
  },
];

const AxesSummary = () => {
  return (
    <section className="pt-12 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Nos <span className="text-primary sketch-underline">3 engagements</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Des garanties concrètes pour sécuriser votre projet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {axes.map((axe, i) => (
            <motion.div
              key={axe.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <Link
                to={axe.href}
                className="group block text-center h-full"
              >
                {/* Illustrated avatar */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={`w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-to-br ${axe.color} ${axe.hoverColor} flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-xl`}
                >
                  <img
                    src={axe.image}
                    alt={axe.title}
                    className="w-24 h-24 object-contain drop-shadow-sm"
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground leading-snug mb-2">
                  <span className="block">{axe.title}</span>
                  <span className="block text-primary">{axe.titleLine2}</span>
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-[280px] mx-auto mb-3">
                  {axe.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-1 text-sm text-primary font-body font-medium group-hover:underline transition-all">
                  En savoir plus →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AxesSummary;
