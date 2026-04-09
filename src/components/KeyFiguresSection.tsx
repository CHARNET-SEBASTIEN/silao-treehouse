import { motion } from "framer-motion";
import { BadgeCheck, Boxes, CalendarClock, Users2 } from "lucide-react";

import archivisteIllustration from "@/assets/illustrations/archiviste.webp";
import { COMPANY_DISPLAY_NAME, PRODUCT_NAME } from "@/lib/site";

const figures = [
  {
    icon: CalendarClock,
    value: "20 ans",
    label: "d'expérience",
    description: "dans l'édition de logiciel pour le social et le médico-social.",
  },
  {
    icon: Users2,
    value: "30",
    label: "collaborateurs",
    description: "mobilisés sur la solution, le projet, le support et la formation.",
  },
  {
    icon: Boxes,
    value: "1",
    label: "logiciel",
    description: `${PRODUCT_NAME}, solution logicielle éditée par ${COMPANY_DISPLAY_NAME}.`,
  },
  {
    icon: BadgeCheck,
    value: "4",
    label: "secteurs ciblés",
    description: "PDE, PH, AHI et PDS couverts avec des réponses métier distinctes.",
  },
];

const KeyFiguresSection = () => (
  <section className="px-4 py-6 md:py-8 tint-secondary">
    <div className="mx-auto max-w-6xl section-panel px-6 py-5 md:px-10 md:py-6">
      <div className="mb-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p className="marker-label mb-4">Nos chiffres clés</p>
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
            Qui se cache derrière Silao ?
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Quelques repères pour situer{" "}
            <span className="text-primary sketch-underline">{COMPANY_DISPLAY_NAME}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground lg:mx-0">
            Chez {COMPANY_DISPLAY_NAME}, nous nous consacrons entièrement au DUI depuis plus de 20
            ans, grâce à une équipe experte, dédiée aux usages du social et du médico-social.
          </p>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          className="surface-card mx-auto w-full max-w-[18rem] overflow-hidden rounded-[1.75rem] p-2"
        >
          <img
            src={archivisteIllustration}
            alt="Illustration Silao pour la section des chiffres clés"
            width={960}
            height={960}
            loading="lazy"
            decoding="async"
            className="h-full w-full rounded-[1.25rem] object-cover"
          />
        </motion.figure>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {figures.map((figure) => (
          <article
            key={figure.label}
            className="relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-card px-5 py-6 text-center shadow-sm"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)))]" />
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <figure.icon className="h-6 w-6" />
            </div>
            <p className="text-4xl font-extrabold tracking-tight text-brand-violet text-foreground">{figure.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {figure.label}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{figure.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default KeyFiguresSection;
