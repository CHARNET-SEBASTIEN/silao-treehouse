import { motion } from "framer-motion";

import { partnerReferences, partnerReferencesByName } from "@/lib/partners";

const testimonials = [
  {
    quote:
      "Le logiciel nous aide à accompagner les personnes. On part du besoin des équipes et le logiciel s'adapte à nos pratiques.",
    name: "Sauvegarde 26",
    role: "Protection de l'enfance",
  },
  {
    quote:
      "Les équipes de D2L Informatique sont à l'écoute de nos besoins et leur accompagnement nous permet d'aborder avec confiance les échéances réglementaires.",
    name: "Fondation Grancher",
    role: "Référente Silao",
  },
];

const ReferencesSection = () => (
  <section id="references" className="px-4 py-6 md:py-8 tint-secondary">
    <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-panel px-6 py-5 md:px-8 md:py-6"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
          Ils ont choisi de nous faire confiance
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Des structures qui utilisent{" "}
          <span className="text-primary sketch-underline">Silao au quotidien</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Des structures qui utilisent Silao au quotidien dans le respect de leur réalité de terrain.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {partnerReferences.map((partner) => (
            <article
              key={partner.name}
              className="surface-card flex min-h-[120px] flex-col items-center justify-center gap-4 rounded-[1.5rem] px-5 py-5 text-center"
            >
              <div className="flex h-16 w-full items-center justify-center">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.logoAlt}
                    loading="lazy"
                    className={`w-auto max-w-full object-contain ${partner.logoClassName ?? "max-h-10"}`}
                  />
                ) : (
                  <span className="font-sketch text-2xl text-primary">{partner.monogram}</span>
                )}
              </div>
              <p className="text-sm font-medium leading-snug text-foreground">{partner.name}</p>
            </article>
          ))}
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="section-panel px-6 py-5 md:px-8 md:py-6"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
          Des retours terrain partagés par nos clients
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Quelques retours qui mettent en avant{" "}
          <span className="text-primary sketch-underline">l'adaptation au terrain</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Quelques retours qui mettent en avant l'adaptation au terrain et la qualité de l'accompagnement.
        </p>

        <div className="mt-6 grid gap-4">
          {testimonials.map((testimonial) => {
            const partner = partnerReferencesByName[testimonial.name];

            return (
              <article
                key={testimonial.name}
                className="surface-card rounded-[1.5rem] px-5 py-6"
              >
                <div className="mb-5 flex items-center gap-4">
                  {partner?.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.logoAlt}
                      loading="lazy"
                      className={`w-auto max-w-[8rem] object-contain ${partner.logoClassName ?? "max-h-10"}`}
                    />
                  ) : null}
                  <div>
                    <p className="font-sketch text-xl text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="font-body italic leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </p>
              </article>
            );
          })}
        </div>
      </motion.article>
    </div>
  </section>
);

export default ReferencesSection;
