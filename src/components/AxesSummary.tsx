import { motion } from "framer-motion";
import { ShieldCheck, Building2, Handshake, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const axes = [
  {
    icon: ShieldCheck,
    title: "Conformité SONS",
    description: "Des devis 100% conformes — zéro rejet, zéro ambiguïté.",
    href: "/conformite-sons",
  },
  {
    icon: Building2,
    title: "Grappes Multi-ESMS",
    description: "Architecture mutualisée pour associations multi-établissements.",
    href: "/grappes-esms",
  },
  {
    icon: Handshake,
    title: "Accompagnement",
    description: "Un partenariat opérationnel clé en main, du COMOP aux cibles Ségur.",
    href: "/accompagnement",
  },
  {
    icon: HeartHandshake,
    title: "Engagements 5 ans",
    description: "SLA formalisés, ticketing transparent et Club Utilisateurs.",
    href: "/engagements",
  },
];

const AxesSummary = () => {
  return (
    <section className="pt-8 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Nos <span className="text-primary sketch-underline">4 engagements</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Des garanties concrètes pour sécuriser votre projet Ségur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {axes.map((axe, i) => (
            <motion.div
              key={axe.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link
                to={axe.href}
                className="block sketch-border bg-card p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <axe.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{axe.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{axe.description}</p>
                <span className="inline-block mt-3 text-sm text-primary font-body font-medium group-hover:underline">
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
