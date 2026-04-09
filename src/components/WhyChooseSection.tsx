import { motion } from "framer-motion";
import {
  Accessibility,
  Headset,
  MonitorSmartphone,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Workflow,
} from "lucide-react";

import voyageurIllustration from "@/assets/illustrations/voyageur.png";

const reasons = [
  {
    icon: Sparkles,
    title: "Simple à prendre en main",
    description:
      "Une interface conçue pour rester claire, même quand les usages sont nombreux.",
    tone: "bg-primary/10 text-primary",
  },
  {
    icon: Workflow,
    title: "Adapté aux pratiques",
    description:
      "Le suivi, les écrits et l'organisation restent alignés avec les réalités du terrain.",
    tone: "bg-primary/10 text-primary",
  },
  {
    icon: SlidersHorizontal,
    title: "Configurable",
    description:
      "Profils, droits, listes, arborescences et rappels s'ajustent à votre organisation.",
    tone: "bg-primary/10 text-primary",
  },
  {
    icon: Headset,
    title: "Interlocuteur unique",
    description:
      "Un même point de contact suit le projet pour garder une lecture continue de vos besoins.",
    tone: "bg-secondary/10 text-secondary",
  },
  {
    icon: Accessibility,
    title: "Formations adaptées",
    description:
      "Des formations organisées selon vos équipes, avec une attention spécifique portée à l'accessibilité.",
    tone: "bg-secondary/10 text-secondary",
  },
  {
    icon: MonitorSmartphone,
    title: "Disponible partout",
    description:
      "Silao reste accessible sur ordinateur, tablette et smartphone pour les équipes sur site ou mobiles.",
    tone: "bg-secondary/10 text-secondary",
  },
  {
    icon: ShieldCheck,
    title: "Référencé Ségur",
    description:
      "Silao répond aux exigences réglementaires sur les périmètres déjà référencés et poursuit ses démarches en cours.",
    tone: "bg-[hsl(var(--brand-violet)/0.1)] text-[hsl(var(--brand-violet))]",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité et hébergement",
    description:
      "Hébergement protégé, sauvegardes, maintenance et gestion fine des droits d'accès font partie du socle.",
    tone: "bg-[hsl(var(--brand-violet)/0.1)] text-[hsl(var(--brand-violet))]",
  },
];

const WhyChooseSection = () => (
  <section id="pourquoi-silao" className="px-4 py-6 md:py-8 tint-earth">
    <div className="mx-auto max-w-6xl section-panel px-6 py-5 md:px-10 md:py-6">
      <div className="mb-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left"
        >
          <p className="marker-label mb-4">Pourquoi choisir Silao ?</p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Les raisons concrètes de faire confiance à{" "}
            <span className="text-primary sketch-underline">Silao</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Simplicité d&apos;usage, accompagnement continu, sécurité et cadre réglementaire lisible.
          </p>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          className="surface-card mx-auto w-full max-w-[22rem] overflow-hidden rounded-[1.75rem] p-3"
        >
          <img
            src={voyageurIllustration}
            alt="Illustration personnage pour la section Pourquoi choisir Silao"
            width={960}
            height={960}
            loading="lazy"
            decoding="async"
            className="h-full w-full rounded-[1.25rem] object-cover"
          />
        </motion.figure>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason, index) => (
          <motion.article
            key={reason.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className="surface-card rounded-[1.5rem] px-5 py-6"
          >
            <div
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${reason.tone}`}
            >
              <reason.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">{reason.title}</h3>
            <p className="text-sm leading-7 text-muted-foreground">{reason.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
