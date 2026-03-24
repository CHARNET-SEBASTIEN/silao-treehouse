import { motion } from "framer-motion";
import { partnerReferences } from "@/lib/partners";

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
          Structures <span className="text-primary sketch-underline">accompagnées</span>
        </motion.h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Des associations, établissements et directions métiers s&apos;appuient sur SILAO pour
          structurer leurs usages sans perdre leur réalité terrain.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {partnerReferences.map((partner) => (
            <article
              key={partner.name}
              className="flex min-h-[170px] flex-col items-center justify-between gap-4 rounded-[28px] bg-card/95 p-5 text-center shadow-sm sketch-border-sm"
            >
              <div className="flex h-16 w-full items-center justify-center rounded-2xl border border-border/50 bg-background/80 px-4">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.logoAlt}
                    loading="lazy"
                    className="max-h-11 w-auto max-w-full object-contain"
                  />
                ) : (
                  <span className="font-sketch text-2xl text-primary">{partner.monogram}</span>
                )}
              </div>

              <p className="text-sm font-medium leading-snug text-foreground">{partner.name}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
