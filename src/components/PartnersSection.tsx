import { motion } from "framer-motion";

const sectors = [
  "Protection de l'Enfance",
  "Handicap (IME, ITEP, MAS, FAM)",
  "ESAT & Travail protégé",
  "Insertion (CHRS, SIAO)",
  "SESSAD & Services ambulatoires",
  "AEMO & Milieu ouvert",
  "Personnes Âgées",
];

const partners = [
  "Croix-Rouge française",
  "Fondation Grancher",
  "ADSEA 80",
  "MECS La Cordée",
  "L'Oustal",
  "AJP",
];

const PartnersSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-4"
        >
          Une solution <span className="text-primary sketch-underline">multi-secteurs</span>
        </motion.h2>
        <p className="text-muted-foreground text-lg font-body mb-12">
          Silao s'adapte à toutes les structures du social et médico-social.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {sectors.map((sector) => (
            <span
              key={sector}
              className="sketch-border-sm px-6 py-3 bg-card text-foreground font-body text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
            >
              {sector}
            </span>
          ))}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground mb-8"
        >
          Ils nous font <span className="text-primary sketch-underline">confiance</span>
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {partners.map((partner) => (
            <span
              key={partner}
              className="sketch-border-sm px-5 py-2 bg-card text-muted-foreground font-body text-sm cursor-default"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
