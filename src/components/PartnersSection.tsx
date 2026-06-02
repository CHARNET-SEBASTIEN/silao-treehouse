import { motion } from "framer-motion";
import { partnerReferences } from "@/lib/partners";
import { defaultViewport, fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const PartnersSection = () => {
  return (
    <section className="px-4 py-6 md:py-8 tint-primary">
      <div className="mx-auto max-w-5xl text-center section-panel px-6 py-5 md:px-10 md:py-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          Structures <span className="text-primary sketch-underline">accompagnées</span>
        </motion.h2>
        <p className="mx-auto mb-4 max-w-2xl text-muted-foreground">
          Des structures qui utilisent Silao pour structurer leurs usages sans perdre leur réalité
          terrain.
        </p>

        <motion.div
          variants={staggerContainer(0.04, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 [&>*]:border-border/45 [&>*:not(:first-child)]:border-t sm:[&>*:not(:first-child)]:border-t-0 sm:[&>*]:border-l-0 sm:[&>*:nth-child(n+3)]:border-t sm:[&>*:nth-child(2n)]:border-l lg:[&>*]:border-t-0 lg:[&>*]:border-l-0 lg:[&>*:nth-child(n+4)]:border-t lg:[&>*:not(:nth-child(3n+1))]:border-l xl:[&>*]:border-t-0 xl:[&>*]:border-l-0 xl:[&>*:nth-child(n+5)]:border-t xl:[&>*:not(:nth-child(4n+1))]:border-l"
        >
          {partnerReferences.map((partner) => (
            <motion.article
              key={partner.name}
              variants={staggerItem}
              className="flex min-h-[140px] items-center justify-center text-center"
            >
              <div className="flex h-24 w-full items-center justify-center px-4">
                {partner.logo ? (
                  <div className="logo-plate flex h-full w-full max-w-[14rem] items-center justify-center rounded-[1.25rem] px-4 py-3 transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-26px_hsl(var(--brand-violet)/0.4)]">
                    <img
                      src={partner.logo}
                      alt={partner.logoAlt}
                      loading="lazy"
                      className={`w-auto max-w-full object-contain ${partner.logoClassName ?? "max-h-12"}`}
                    />
                  </div>
                ) : (
                  <span className="font-sketch text-2xl text-primary transition-transform duration-300 hover:scale-110">{partner.monogram}</span>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
