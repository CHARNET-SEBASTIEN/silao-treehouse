import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Le logiciel nous aide à accompagner les personnes. On part du besoin et le logiciel s'adapte.",
    name: "Sauvegarde 26",
    role: "Protection de l'enfance",
  },
  {
    quote:
      "Silao est intuitif, répond bien aux besoins, est personnalisable et l'accompagnement de proximité est réellement réactif.",
    name: "ARRAS",
    role: "Retour client",
  },
  {
    quote:
      "Les équipes de D2L sont à l'écoute de nos besoins et leur accompagnement nous permet d'aborder avec confiance les échéances réglementaires.",
    name: "Fondation Grancher",
    role: "Référente SILAO",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="paper-bg px-4 py-20 md:py-28">
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
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center bg-card p-8 text-center sketch-border-sm"
            >
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-border/60 bg-card text-2xl font-bold text-primary">
                {t.name.slice(0, 2).toUpperCase()}
              </div>
              <p className="mb-6 font-body italic leading-relaxed text-foreground">
                "{t.quote}"
              </p>
              <div>
                <p className="font-sketch text-xl text-primary">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
