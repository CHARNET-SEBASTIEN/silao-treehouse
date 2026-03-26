import { motion } from "framer-motion";
import { partnerReferencesByName } from "@/lib/partners";

const testimonials = [
  {
    quote:
      "Le logiciel nous aide à accompagner les personnes. On part du besoin des équipes et le logiciel s'adapte à nos pratiques.",
    name: "Sauvegarde 26",
    role: "Protection de l'enfance",
  },
  {
    quote:
      "Silao est intuitif, répond bien aux besoins, il est personnalisable et l'accompagnement de proximité de D2L est réellement réactif.",
    name: "ARRAS",
    role: "Retour client",
  },
  {
    quote:
      "Les équipes de D2L Informatique sont à l'écoute de nos besoins et leur accompagnement nous permet d'aborder avec confiance les échéances réglementaires.",
    name: "Fondation Grancher",
    role: "Référente SILAO",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="px-4 py-20 md:py-28 tint-secondary">
      <div className="mx-auto max-w-6xl section-panel px-6 py-10 md:px-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-body text-sm uppercase tracking-widest text-muted-foreground">
            Retours clients
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Des retours <span className="text-primary sketch-underline">terrain</span> partagés par
            nos clients
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
            Proximité, personnalisation, soutien au déploiement et amélioration continue reviennent
            de manière récurrente dans les témoignages transmis par les équipes clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => {
            const partner = partnerReferencesByName[testimonial.name];

            return (
              <div
                key={testimonial.name}
                className="flex flex-col items-center bg-card p-8 text-center sketch-border-sm"
              >
                <div className="logo-plate mb-5 flex h-20 w-20 items-center justify-center rounded-3xl px-3">
                  {partner?.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.logoAlt}
                      loading="lazy"
                      className="max-h-12 w-auto max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-primary">
                      {partner?.monogram ?? testimonial.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <p className="mb-6 font-body italic leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-sketch text-xl text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
