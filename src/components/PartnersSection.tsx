import { motion } from "framer-motion";

const partners = [
  "Croix-Rouge française",
  "Action Enfance",
  "Sauvegarde 26",
  "ARRAS",
  "ADSEA02",
  "Fondation Grancher",
  "MDEF Calvados",
];

const PartnersSection = () => {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl text-center section-panel px-6 py-10 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          Quelques structures <span className="text-primary sketch-underline">accompagnées</span>
        </motion.h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Des associations, établissements et directions métiers s&apos;appuient sur SILAO pour
          structurer leurs usages sans perdre leur réalité terrain.
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
              className="cursor-default bg-card px-5 py-2 font-body text-sm text-muted-foreground sketch-border-sm"
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
