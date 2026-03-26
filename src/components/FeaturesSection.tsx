import { motion } from "framer-motion";
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
  SlidersHorizontal,
  Users2,
} from "lucide-react";

import archivisteIllustration from "@/assets/illustrations/archiviste.webp";

const featureGroups = [
  {
    id: "parcours",
    title: "Suivi du parcours usager",
    description: "Le cœur du dossier, de la coordination quotidienne et des écrits partagés.",
    eyebrow: "Usager et coordination",
  },
  {
    id: "organisation",
    title: "Organisation et paramétrage",
    description: "Les briques qui structurent les documents, les droits, les contacts et les alertes.",
    eyebrow: "Configuration et circulation",
  },
  {
    id: "pilotage",
    title: "Pilotage et usages métier",
    description: "Les modules dédiés à l'activité, aux états, à la facturation et aux services socles.",
    eyebrow: "Activité et exploitation",
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
      "Des événements associés à l'usager, aux services ou aux professionnels, avec vues jour, semaine, mois, service et type d'événement.",
  },
  {
    group: "parcours",
    icon: BookMarked,
    title: "Cahier de liaison",
    description:
      "Un espace de transmissions sous forme de blog, avec brouillons, commentaires, verrouillage automatique et droits d'accès personnalisables.",
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
    title: "GED",
    description:
      "Stockage, classement et consultation de tous les documents usagers, avec génération de modèles et de rapports.",
  },
  {
    group: "organisation",
    icon: SlidersHorizontal,
    title: "Personnalisation",
    description:
      "Profils métiers, droits d'accès, listes déroulantes, arborescences documentaires, tableaux de bord et alertes s'adaptent à vos procédures.",
  },
  {
    group: "organisation",
    icon: Users2,
    title: "Annuaire centralisé",
    description:
      "Un annuaire des contacts et organismes pour relier facilement médecins, écoles, juges et partenaires à l'activité.",
  },
  {
    group: "organisation",
    icon: BellRing,
    title: "Alertes",
    description:
      "Des alertes sur les échéances, missions et renouvellements de documents, adaptables en autonomie selon vos pratiques.",
  },
  {
    group: "pilotage",
    icon: FolderKanban,
    title: "Pilotage, états et stats",
    description:
      "Des états filtrables, des statistiques par thème et des requêteurs pour produire vos exports et indicateurs d'activité.",
  },
  {
    group: "pilotage",
    icon: CreditCard,
    title: "Facturation",
    description:
      "Facturation à partir de l'agenda ou des présences, avec génération possible de factures rétroactives individuelles.",
  },
  {
    group: "pilotage",
    icon: Files,
    title: "Services socles et usages métier",
    description:
      "INS, DMP, MSSanté, Pro Santé Connect, budget usager, parc locatif, rappels de rendez-vous par mail ou SMS et autres modules adaptés au terrain.",
  },
];

const featureIconTone = "border border-border/70 bg-background text-primary";

const FeaturesSection = () => (
  <section className="relative overflow-hidden px-4 py-20 md:py-28 tint-primary">
    <div className="mx-auto max-w-6xl section-panel px-6 py-10 md:px-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <p className="marker-label mb-4">
          Fonctionnalités principales
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Les modules qui structurent le{" "}
          <span className="text-primary sketch-underline">quotidien métier</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Le dossier usager, l&apos;agenda, les transmissions, la GED, les alertes, le pilotage, la
          personnalisation et la facturation ont été conçus pour rester lisibles, configurables et
          réellement utiles aux équipes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"
      >
        <figure className="surface-card-tint relative overflow-hidden rounded-[1.8rem] px-6 pb-2 pt-6">
          <div className="pointer-events-none absolute left-8 top-0 h-24 w-40 rounded-full bg-secondary/15 blur-3xl" />
          <img
            src={archivisteIllustration}
            alt="Illustration évoquant l'organisation documentaire et la tenue du dossier usager"
            loading="lazy"
            decoding="async"
            width={1200}
            height={1200}
            className="relative z-10 mx-auto w-full max-w-xs"
          />
        </figure>

        <div className="surface-card rounded-[1.8rem] p-8">
          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
            Dossier, documents, coordination
          </p>
          <h3 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
            Un DUI conçu pour rendre l&apos;information <span className="text-primary">retrouvable</span>,
            partageable et exploitable
          </h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              Dossier usager structuré
            </span>
            <span className="rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary">
              GED et transmissions
            </span>
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              Pilotage et alertes
            </span>
          </div>
        </div>
      </motion.div>

      <div className="space-y-10">
        {featureGroups.map((group, groupIndex) => {
          const groupedFeatures = features.filter((feature) => feature.group === group.id);
          const groupSurface = groupIndex % 2 === 0 ? "surface-card-tint" : "surface-card";
          const gridClass =
            groupedFeatures.length >= 4
              ? "grid gap-5 md:grid-cols-2"
              : "grid gap-5 md:grid-cols-2 xl:grid-cols-3";

          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.05 }}
              className={`${groupSurface} rounded-[1.9rem] p-6 md:p-8`}
            >
              <div className="mb-6 flex flex-col gap-3 border-b border-border/70 pb-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {group.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">{group.title}</h3>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">{group.description}</p>
              </div>

              <div className={gridClass}>
                {groupedFeatures.map((feature) => {
                  return (
                    <article key={feature.title} className="surface-card rounded-[1.5rem] px-5 py-6">
                      <div
                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${featureIconTone}`}
                      >
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <h4 className="mb-2 text-xl font-bold text-foreground">{feature.title}</h4>
                      <p className="text-sm leading-7 text-muted-foreground">{feature.description}</p>
                    </article>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
