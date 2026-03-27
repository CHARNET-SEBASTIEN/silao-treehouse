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
      "Profils, droits, listes, arborescences et alertes s'ajustent à votre organisation.",
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
      "SILAO reste accessible sur ordinateur, tablette et smartphone pour les équipes sur site ou mobiles.",
    tone: "bg-secondary/10 text-secondary",
  },
  {
    icon: ShieldCheck,
    title: "Référencé Ségur",
    description:
      "SILAO répond aux exigences réglementaires sur les périmètres déjà référencés et poursuit ses démarches en cours.",
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-5 max-w-3xl text-center"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
          Pourquoi nous choisir
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Les raisons concrètes de choisir{" "}
          <span className="text-primary sketch-underline">SILAO</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Simplicité d&apos;usage, accompagnement continu, sécurité et cadre réglementaire lisible.
        </p>
      </motion.div>

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
