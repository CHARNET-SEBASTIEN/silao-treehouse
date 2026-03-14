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
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl text-center section-panel px-6 py-10 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-2xl font-extrabold tracking-tight text-foreground md:text-4xl"
        >
          Ils nous font <span className="text-primary sketch-underline">confiance</span>
        </motion.h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Associations, établissements et directions métiers s'appuient déjà sur SILAO pour structurer leurs usages sans perdre leur réalité terrain.
        </p>

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
