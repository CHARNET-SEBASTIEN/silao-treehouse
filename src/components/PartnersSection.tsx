import { motion } from "framer-motion";
import { partnerReferences } from "@/lib/partners";

const PartnersSection = () => {
  return (
    <section className="px-4 py-6 md:py-8 tint-primary">
      <div className="mx-auto max-w-5xl text-center section-panel px-6 py-5 md:px-10 md:py-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          Structures <span className="text-primary sketch-underline">accompagnées</span>
        </motion.h2>
        <p className="mx-auto mb-4 max-w-2xl text-muted-foreground">
          Des structures qui utilisent Silao pour structurer leurs usages sans perdre leur réalité
          terrain.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 [&>*]:border-border/45 [&>*:not(:first-child)]:border-t sm:[&>*:not(:first-child)]:border-t-0 sm:[&>*]:border-l-0 sm:[&>*:nth-child(n+3)]:border-t sm:[&>*:nth-child(2n)]:border-l lg:[&>*]:border-t-0 lg:[&>*]:border-l-0 lg:[&>*:nth-child(n+4)]:border-t lg:[&>*:not(:nth-child(3n+1))]:border-l xl:[&>*]:border-t-0 xl:[&>*]:border-l-0 xl:[&>*:nth-child(n+5)]:border-t xl:[&>*:not(:nth-child(4n+1))]:border-l"
        >
          {partnerReferences.map((partner) => (
            <article
              key={partner.name}
              className="flex min-h-[140px] flex-col items-center justify-center gap-4 text-center"
            >
              <div className="flex h-20 w-full items-center justify-center px-4">
                {partner.logo ? (
                  <div className="logo-plate flex h-full w-full max-w-[13rem] items-center justify-center rounded-[1.25rem] px-4 py-3">
                    <img
                      src={partner.logo}
                      alt={partner.logoAlt}
                      loading="lazy"
                      className="max-h-10 w-auto max-w-full object-contain"
                    />
                  </div>
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
