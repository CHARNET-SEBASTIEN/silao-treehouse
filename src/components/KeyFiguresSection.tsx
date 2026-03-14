import { motion } from "framer-motion";
import { BadgeCheck, Boxes, CalendarClock, Users2 } from "lucide-react";

const figures = [
  {
    icon: CalendarClock,
    value: "20 ans",
    label: "d'expérience",
    description: "dans l'édition de logiciels pour le social et le médico-social.",
  },
  {
    icon: Users2,
    value: "30",
    label: "collaborateurs",
    description: "mobilisés sur le produit, le projet, le support et la R&D.",
  },
  {
    icon: Boxes,
    value: "1",
    label: "logiciel",
    description: "SILAO, unique produit mis au centre de l'organisation.",
  },
  {
    icon: BadgeCheck,
    value: "4",
    label: "secteurs ciblés",
    description: "PDE, PH, AHI et PDS couverts avec des réponses métier distinctes.",
  },
];

const KeyFiguresSection = () => (
  <section className="px-4 py-20 md:py-28">
    <div className="mx-auto max-w-5xl section-panel px-6 py-10 md:px-10 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
          Chiffres clés
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Des repères factuels pour situer <span className="text-primary sketch-underline">D2L et SILAO</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {figures.map((figure, index) => (
          <motion.article
            key={figure.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="rounded-[1.5rem] border border-border/60 bg-card px-5 py-6 text-center shadow-sm"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <figure.icon className="h-6 w-6" />
            </div>
            <p className="text-4xl font-extrabold text-foreground">{figure.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {figure.label}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{figure.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default KeyFiguresSection;
