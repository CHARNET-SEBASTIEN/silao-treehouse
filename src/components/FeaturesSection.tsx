import { motion, AnimatePresence } from "framer-motion";
import {
  BellRing,
  BookMarked,
  CalendarDays,
  CreditCard,
  FileArchive,
  Files,
  FolderKanban,
  HeartPulse,
  IdCard,
  Users2,
} from "lucide-react";

import silaoAppHeroModern from "@/assets/silao-app-hero-modern.png";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const featureGroups = [
  {
    id: "parcours",
    title: "Dossier usager",
    description: "Le cœur du dossier, des écrits partagés et du suivi du quotidien.",
    eyebrow: "Dossier usager",
    dot: "bg-primary",
    eyebrowColor: "text-primary",
    activeTabTone:
      "data-[state=active]:border-primary/35 data-[state=active]:bg-[linear-gradient(180deg,hsl(var(--primary)/0.22),hsl(var(--primary)/0.12))] data-[state=active]:text-primary dark:data-[state=active]:border-primary/45 dark:data-[state=active]:bg-[linear-gradient(180deg,hsl(var(--primary)/0.34),hsl(var(--primary)/0.2))]",
    iconTone: "bg-primary/10 text-primary",
  },
  {
    id: "organisation",
    title: "Documents et rappels",
    description: "Les fonctionnalités utiles pour organiser les documents et les échéances.",
    eyebrow: "Documents et rappels",
    dot: "bg-secondary",
    eyebrowColor: "text-secondary",
    activeTabTone:
      "data-[state=active]:border-secondary/38 data-[state=active]:bg-[linear-gradient(180deg,hsl(var(--secondary)/0.22),hsl(var(--secondary)/0.12))] data-[state=active]:text-secondary dark:data-[state=active]:border-secondary/45 dark:data-[state=active]:bg-[linear-gradient(180deg,hsl(var(--secondary)/0.3),hsl(var(--secondary)/0.18))]",
    iconTone: "bg-secondary/10 text-secondary",
  },
  {
    id: "pilotage",
    title: "Pilotage et usages métier",
    description: "Les modules dédiés à l'activité, aux états, à la facturation et aux services socles.",
    eyebrow: "Pilotage et usages métier",
    dot: "bg-[hsl(var(--brand-violet))]",
    eyebrowColor: "text-[hsl(var(--brand-violet))]",
    activeTabTone:
      "data-[state=active]:border-[hsl(var(--brand-violet)/0.38)] data-[state=active]:bg-[linear-gradient(180deg,hsl(var(--brand-violet)/0.22),hsl(var(--brand-violet)/0.12))] data-[state=active]:text-[hsl(var(--brand-violet))] dark:data-[state=active]:border-[hsl(var(--brand-violet)/0.45)] dark:data-[state=active]:bg-[linear-gradient(180deg,hsl(var(--brand-violet)/0.3),hsl(var(--brand-violet)/0.18))]",
    iconTone: "bg-[hsl(var(--brand-violet)/0.1)] text-[hsl(var(--brand-violet))]",
  },
] as const;

const features = [
  {
    group: "parcours",
    icon: IdCard,
    title: "Dossier usager",
    description:
      "Un dossier organisé par thèmes pour retrouver rapidement données administratives, famille, visites, parcours, informations juridiques et santé.",
  },
  {
    group: "parcours",
    icon: CalendarDays,
    title: "Agenda et planning",
    description:
      "Des vues adaptées aux équipes pour organiser rendez-vous, accompagnements, présences et échéances.",
  },
  {
    group: "parcours",
    icon: BookMarked,
    title: "Cahier de liaison",
    description:
      "Un espace de transmissions partagé, avec brouillons, commentaires, verrouillage automatique et droits d'accès personnalisables.",
  },
  {
    group: "parcours",
    icon: HeartPulse,
    title: "Dossier santé",
    description:
      "Historisation sécurisée des allergies, vaccins, diagnostics et éléments médicaux utiles à la coordination des équipes.",
  },
  {
    group: "organisation",
    icon: FileArchive,
    title: "Gestion documentaire (GED)",
    description:
      "Stockage, classement et consultation des documents usagers, avec génération de modèles et de rapports.",
  },
  {
    group: "organisation",
    icon: Users2,
    title: "Contacts et partenaires",
    description:
      "Un espace pour retrouver les contacts, organismes et partenaires utiles au suivi.",
  },
  {
    group: "organisation",
    icon: BellRing,
    title: "Rappels et échéances",
    description:
      "Des rappels sur les échéances, missions et renouvellements de documents pour ne rien laisser de côté.",
  },
  {
    group: "pilotage",
    icon: FolderKanban,
    title: "Pilotage, états et stats",
    description:
      "Des états, statistiques et requêteurs pour visualiser rapidement les indicateurs utiles à l'activité.",
  },
  {
    group: "pilotage",
    icon: CreditCard,
    title: "Facturation",
    description:
      "Une facturation accompagnée et adaptée à vos besoins, à partir de l'agenda ou des présences.",
  },
  {
    group: "pilotage",
    icon: Files,
    title: "Services socles et usages métier",
    description:
      "INS, DMP, MSSanté, Pro Santé Connect, budget usager, rappels de rendez-vous par mail ou SMS et autres modules adaptés au terrain.",
  },
];

const FeaturesSection = () => (
  <section className="relative overflow-hidden px-4 py-6 md:py-8 tint-primary">
    <div className="mx-auto max-w-6xl section-panel px-6 py-5 md:px-10 md:py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-5 max-w-3xl text-center"
      >
        <p className="marker-label mb-4">
          Fonctionnalités principales
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Des fonctionnalités adaptées au{" "}
          <span className="text-primary sketch-underline">quotidien des équipes</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Dossier usager, agenda, transmissions, gestion documentaire (GED), rappels, pilotage et
          facturation: les fonctionnalités sont pensées pour accompagner les usages réels du
          terrain.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-5 grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-center"
      >
        <figure className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,hsl(var(--background)/0.96),hsl(var(--muted)/0.72))] p-4 shadow-[0_28px_60px_-32px_hsl(var(--foreground)/0.24)]">
          <div className="pointer-events-none absolute left-6 top-6 h-24 w-40 rounded-full bg-secondary/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-4 right-4 h-28 w-44 rounded-full bg-primary/10 blur-3xl" />
          <img
            src={silaoAppHeroModern}
            alt="Montage moderne de l'interface Silao avec tableau de bord et dossier usager"
            loading="lazy"
            decoding="async"
            width={1520}
            height={1040}
            className="relative z-10 w-full rounded-[1.5rem]"
          />
        </figure>

        <div className="px-2 py-4 md:px-4 md:py-6">
          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
            Interface, coordination, pilotage
          </p>
          <h3 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
            Un DUI pour <span className="text-primary">centraliser</span>, partager et exploiter les
            informations
          </h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              Dossier usager structuré
            </span>
            <span className="rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary">
              Tableaux de bord et transmissions
            </span>
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              Pilotage et rappels
            </span>
            <span className="rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary">
              Mobilité smartphone native
            </span>
          </div>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Un dossier organisé par thèmes pour retrouver rapidement les données administratives,
            juridiques et le suivi de l&apos;accompagnement.
          </p>
        </div>
      </motion.div>

      <Tabs defaultValue="parcours" className="space-y-6">
          <TabsList className="mx-auto inline-flex h-auto flex-wrap items-center justify-center gap-2 rounded-[1.4rem] border border-border/80 bg-[linear-gradient(180deg,hsl(var(--muted)/0.88),hsl(var(--muted)/0.62))] p-2 shadow-[inset_0_1px_0_hsl(0_0%_100%/0.92),0_14px_34px_-24px_hsl(var(--brand-violet)/0.28)] dark:bg-[linear-gradient(180deg,hsl(var(--muted)),hsl(var(--card)))]">
            {featureGroups.map((group) => (
              <TabsTrigger
                key={group.id}
                value={group.id}
              className={`inline-flex min-h-12 items-center gap-2 rounded-[1.1rem] border border-transparent px-5 py-3 text-sm font-semibold text-muted-foreground/88 transition-all duration-200 hover:bg-background/60 hover:text-foreground data-[state=active]:font-bold data-[state=active]:shadow-[0_18px_34px_-22px_hsl(var(--foreground)/0.34)] data-[state=active]:ring-1 data-[state=active]:ring-white/70 dark:text-muted-foreground dark:hover:bg-background/30 ${group.activeTabTone}`}
              >
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${group.dot} shadow-[0_0_0_3px_hsl(0_0%_100%/0.55)] dark:shadow-[0_0_0_3px_hsl(236_28%_14%/0.7)]`} />
              {group.eyebrow}
            </TabsTrigger>
          ))}
        </TabsList>

        {featureGroups.map((group) => {
          const groupedFeatures = features.filter((f) => f.group === group.id);
          const gridClass =
            groupedFeatures.length >= 4
              ? "grid gap-5 md:grid-cols-2"
              : "grid gap-5 md:grid-cols-2 xl:grid-cols-3";

          return (
            <TabsContent key={group.id} value={group.id} forceMount className="mt-6 data-[state=inactive]:hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="px-2 py-2 md:px-4"
                >
                  <div className="mb-6 flex flex-col gap-3 border-b border-border/70 pb-5 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${group.eyebrowColor}`}>
                        {group.eyebrow}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-foreground">{group.title}</h3>
                    </div>
                    <p className="max-w-2xl text-sm leading-6 text-muted-foreground">{group.description}</p>
                  </div>

                  <div className={gridClass}>
                    {groupedFeatures.map((feature) => (
                      <article key={feature.title} className="surface-card rounded-[1.5rem] px-5 py-6">
                        <div
                          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${group.iconTone}`}
                        >
                          <feature.icon className="h-5 w-5" />
                        </div>
                        <h4 className="mb-2 text-xl font-bold text-foreground">{feature.title}</h4>
                        <p className="text-sm leading-7 text-muted-foreground">{feature.description}</p>
                      </article>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  </section>
);

export default FeaturesSection;
