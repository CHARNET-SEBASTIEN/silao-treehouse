import { motion } from "framer-motion";

const partners = [
  "Croix-Rouge française",
  "Fondation Grancher",
  "Maison d'Enfants à Caractère Social",
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
          className="text-4xl md:text-5xl font-bold text-foreground mb-12"
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
              className="sketch-border-sm px-6 py-3 bg-card text-foreground font-body text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
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
