import { motion } from "framer-motion";
import { ShieldCheck, SplitSquareVertical, FileCheck, BadgeEuro } from "lucide-react";

const points = [
  {
    icon: SplitSquareVertical,
    title: "Séparation stricte des coûts",
    description:
      'Distinction claire entre financements publics et reste à charge établissement. Transparence totale sur chaque ligne de nos devis.',
  },
  {
    icon: BadgeEuro,
    title: "Gestion de la dette technologique",
    description:
      "Facturation sur ligne distincte, conformité aux exigences réglementaires et prévention des rejets de financement.",
  },
  {
    icon: FileCheck,
    title: "Conformité réglementaire",
    description:
      "Chaque ligne de nos devis répond aux critères de recevabilité pour sécuriser vos dossiers de financement.",
  },
];

const SONSComplianceSection = () => {
  return (
    <section className="py-24 px-4 paper-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-body font-medium">
            <ShieldCheck className="w-4 h-4" />
            Transparence & conformité
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Des devis <span className="text-primary sketch-underline">100% transparents</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Zéro rejet, zéro ambiguïté — votre financement sécurisé avant le démarrage du projet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="sketch-border bg-card p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Encadré preuve */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="sketch-border bg-primary/5 border-primary/20 p-8 md:p-10 text-center max-w-3xl mx-auto"
        >
          <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="text-foreground text-lg font-body leading-relaxed">
            <strong>Nos devis sont structurés pour répondre précisément aux exigences réglementaires en vigueur.</strong>
          </p>
          <p className="text-primary font-sketch text-xl mt-3">
            Nous sécurisons votre financement avant même le démarrage du projet.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SONSComplianceSection;
