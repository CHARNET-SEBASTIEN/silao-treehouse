import { motion } from "framer-motion";

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
          className="text-2xl font-bold text-foreground mb-8"
        >
          Ils nous font <span className="text-primary sketch-underline">confiance</span>
        </motion.h2>

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
