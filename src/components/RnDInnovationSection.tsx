import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  BrainCircuit,
  Database,
  FlaskConical,
  HeartHandshake,
  Mic,
  ScanLine,
  ShieldCheck,
  TextSearch,
  Users,
} from "lucide-react";

import magicienneClesIllustration from "@/assets/illustrations/magicienne-cles.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const rdTabGroups = [
  { id: "leviers", label: "Ambition & leviers", dot: "bg-primary" },
  { id: "usages", label: "Usages & prudence", dot: "bg-secondary" },
  { id: "principes", label: "Principes", dot: "bg-accent" },
] as const;

/** Axes d’innovation alignés sur les besoins du médico-social (documentation, recherche, temps utile). */
const innovationAxes = [
  {
    icon: Mic,
    title: "Dictée vocale",
    description:
      "Alléger la saisie et capturer les observations de terrain plus naturellement, pour garder du temps pour l’accompagnement.",
  },
  {
    icon: BrainCircuit,
    title: "Apprentissage automatique",
    description:
      "Des assistances contextualisées et des traitements de données utiles au quotidien — toujours sous contrôle des professionnels, jamais à la place d’eux.",
  },
  {
    icon: TextSearch,
    title: "Prompts d’aide à la recherche",
    description:
      "Rechercher et croiser l’information dans le dossier avec des formulations guidées, pour répondre aux exigences de traçabilité et de clarté des écrits.",
  },
  {
    icon: Database,
    title: "Données sensibles, accès simples et sécurisés",
    description:
      "Parcours d’accès maîtrisés, droits par profil et protection des données au cœur du produit : la facilité d’usage ne se fait pas au détriment du cadre légal.",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Supervision humaine et responsabilité",
    description:
      "L’IA peut aider à structurer, synthétiser ou gagner du temps sur des tâches à faible valeur ajoutée : la décision professionnelle, l’évaluation des situations et le lien avec les personnes accompagnées restent toujours assumés par des humains formés.",
  },
  {
    icon: Users,
    title: "Ni déshumanisation, ni uniformisation du regard",
    description:
      "Nous veillons à ce que l’outil renforce la qualité du travail sans lisser la singularité des parcours. L’objectif est de libérer du temps pour la relation, pas de substituer le jugement clinique ou éducatif.",
  },
  {
    icon: BookOpen,
    title: "Transparence, formation et cadre d’usage",
    description:
      "Comprendre les limites des modèles (biais, hallucinations), protéger les données sensibles et cadrer les usages au sein des équipes : l’innovation se déploie avec des repères clairs, pas en usage isolé.",
  },
  {
    icon: HeartHandshake,
    title: "À mesure du médico-social",
    description:
      "La technologie est pensée au service des missions de terrain — protection de l’enfance, handicap, insertion — et des exigences de conformité, sans promesse de « solution magique » ni pression à la seule performance administrative.",
  },
];

type RnDInnovationSectionProps = {
  /** Permet l’ancrage profond (recherche, liens internes). */
  id?: string;
};

const RnDInnovationSection = ({ id = "recherche-innovation" }: RnDInnovationSectionProps) => {
  return (
    <section id={id} className="relative overflow-hidden px-4 py-20 md:py-28 tint-primary">
      <div className="mx-auto max-w-6xl section-panel px-6 py-10 md:px-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 grid gap-8 lg:grid-cols-[1.05fr_0.92fr] lg:items-center"
        >
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <FlaskConical className="h-4 w-4" />
              R&amp;D &amp; IA
              <ScanLine className="h-4 w-4 opacity-80" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
              <span className="text-primary sketch-underline">Innover</span> pour les professionnels,{" "}
              <span className="text-primary sketch-underline">sans déshumaniser</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
              Dans un secteur où la nuance du mot, la confidentialité et la qualité du lien font la
              différence, nous explorons l’intelligence artificielle et la recherche au service des
              usages réels — pour soulager les tâches lourdes, améliorer la lisibilité des outils et
              ouvrir des pistes utiles, tout en refusant de confier aux algorithmes ce qui relève du
              discernement et de la relation.
            </p>
          </div>

          <figure className="surface-card-tint relative overflow-hidden rounded-[1.8rem] px-6 pb-2 pt-6">
            <div className="pointer-events-none absolute right-6 top-4 h-28 w-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-6 left-4 h-20 w-36 rounded-full bg-secondary/15 blur-2xl" />
            <img
              src={magicienneClesIllustration}
              alt="Illustration évoquant l’innovation au service des équipes : des usages utiles, encadrés et gardés entre les mains des professionnels"
              loading="lazy"
              decoding="async"
              width={800}
              height={800}
              className="relative z-10 mx-auto w-full max-w-[14rem] drop-shadow-sm sm:max-w-xs"
            />
          </figure>
        </motion.div>

        <Tabs defaultValue="leviers" className="mb-10 space-y-6">
          <TabsList className="mx-auto flex h-auto w-full max-w-3xl flex-wrap items-center justify-center gap-1 rounded-full border border-border bg-muted p-1 shadow-inner sm:w-auto sm:max-w-none sm:flex-nowrap sm:gap-0">
            {rdTabGroups.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-muted-foreground transition-all hover:text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow sm:flex-initial sm:px-5 sm:text-sm"
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${tab.dot}`} />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent
            value="leviers"
            forceMount
            className="mt-2 data-[state=inactive]:hidden sm:mt-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key="leviers"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="rounded-[1.75rem] border border-border/70 bg-card/80 p-6 shadow-sm md:p-8"
              >
                <div className="mb-8 border border-primary/20 bg-primary/5 p-6 sketch-border md:p-8">
                  <p className="mb-2 text-center text-sm font-semibold uppercase tracking-wide text-primary">
                    Ambition pour le médico-social
                  </p>
                  <p className="mx-auto max-w-4xl text-center text-sm leading-relaxed text-foreground md:text-base">
                    Nous voulons porter une{" "}
                    <strong className="font-semibold text-foreground">démarche de leader</strong> sur
                    ces enjeux dans le médico-social, en nous appuyant sur les attentes du terrain et
                    les propositions du secteur&nbsp;: gagner du temps sur l’administratif pour
                    investir la relation, sécuriser les pratiques numériques et offrir des fonctions
                    qui parlent vraiment aux équipes —{" "}
                    <strong className="font-semibold text-foreground">
                      dictée vocale, apprentissage automatique au service d’assistances encadrées
                    </strong>
                    , prompts d’aide à la recherche dans le dossier et{" "}
                    <strong className="font-semibold text-foreground">
                      accès aux données sensibles simples et sécurisés
                    </strong>{" "}
                    — sans jamais confondre outil d’aide et décision professionnelle.
                  </p>
                </div>
                <h3 className="mb-6 text-center text-xl font-bold text-foreground md:text-2xl">
                  Quatre leviers concrets de notre R&amp;D
                </h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {innovationAxes.map((item) => (
                    <article
                      key={item.title}
                      className="flex flex-col rounded-2xl border border-border/60 bg-background p-5 shadow-sm"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h4 className="mb-2 text-lg font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </article>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          <TabsContent
            value="usages"
            forceMount
            className="mt-2 data-[state=inactive]:hidden sm:mt-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key="usages"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="rounded-[1.75rem] border border-border/70 bg-card/80 p-6 shadow-sm md:p-8"
              >
                <h3 className="mb-4 text-center text-xl font-bold text-foreground md:text-2xl">
                  Deux familles d&apos;usages, un même fil de prudence
                </h3>
                <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
                  Notre charte distingue l&apos;
                  <strong className="font-medium text-foreground">
                    assistance et l&apos;optimisation
                  </strong>{" "}
                  (recherche facilitée dans le dossier, parcours plus fluides, dictée, suggestions
                  contextualisées) de la{" "}
                  <strong className="font-medium text-foreground">
                    génération et la reformulation
                  </strong>{" "}
                  de textes (brouillons, synthèses, mise en forme). Les deux sont pertinentes pour
                  le médico-social lorsqu&apos;elles sont maîtrisées&nbsp;:{" "}
                  <strong className="font-medium text-foreground">
                    moins de temps perdu sur l&apos;administratif
                  </strong>
                  , une information plus rapidement disponible, des écrits souvent plus clairs pour
                  les partenaires institutionnels — avec, dans tous les cas, une{" "}
                  <strong className="font-medium text-foreground">
                    exigence de relecture humaine, de traçabilité et de protection des données
                  </strong>
                  , et sans jamais confier à un outil l&apos;appréciation d&apos;une situation ou le
                  sens du projet auprès des personnes accompagnées.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <article className="rounded-[1.5rem] border border-border/60 bg-background p-6 shadow-sm md:p-7">
                    <h4 className="mb-3 text-lg font-bold text-foreground">
                      Assistance et optimisation
                    </h4>
                    <p className="mb-3 text-sm leading-7 text-muted-foreground">
                      <span className="font-medium text-foreground">Intérêt :</span> fluidifier le
                      travail quotidien — retrouver l&apos;info utile au bon moment, réduire les
                      frictions et les doubles saisies, sécuriser les accès tout en simplifiant les
                      parcours pour les équipes habilitées.
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground">
                      <span className="font-medium text-foreground">Prudence :</span> être
                      transparent sur ce qui est suggéré ou mis en avant par un modèle ; rappeler
                      qu&apos;une aide à la recherche ou au classement n&apos;équivaut pas à un avis
                      professionnel sur le fond.
                    </p>
                  </article>
                  <article className="rounded-[1.5rem] border border-border/60 bg-background p-6 shadow-sm md:p-7">
                    <h4 className="mb-3 text-lg font-bold text-foreground">
                      Génération et reformulation
                    </h4>
                    <p className="mb-3 text-sm leading-7 text-muted-foreground">
                      <span className="font-medium text-foreground">Intérêt :</span> soulager la
                      charge rédactionnelle (formulation, structure, premiers jets) pour que le temps
                      revienne à l&apos;analyse et au lien, tout en gardant la responsabilité du
                      contenu sur le professionnel qui valide.
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground">
                      <span className="font-medium text-foreground">Prudence :</span> les modèles
                      peuvent se tromper ou lisser le regard — relecture obligatoire sur les écrits
                      engageants, vigilance aux biais et signaler l&apos;assistance par l&apos;IA
                      lorsque le document compte pour le parcours de la personne.
                    </p>
                  </article>
                </div>
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          <TabsContent
            value="principes"
            forceMount
            className="mt-2 data-[state=inactive]:hidden sm:mt-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key="principes"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="rounded-[1.75rem] border border-border/70 bg-card/80 p-6 shadow-sm md:p-8"
              >
                <h3 className="mb-8 text-center text-xl font-bold text-foreground md:text-2xl">
                  Principes qui cadrent nos usages
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {principles.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-border/60 bg-background p-7 shadow-sm"
                    >
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h4 className="mb-3 text-xl font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                    </article>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        </Tabs>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-2 max-w-3xl text-center text-sm leading-7 text-muted-foreground"
        >
          Notre feuille de route mêle expérimentation prudente, veille réglementaire et échanges
          avec le terrain : l’enjeu n’est pas d’aller plus vite n’importe comment, mais de
          préserver le sens du travail social et médico-social tout en élargissant les moyens des
          équipes.
        </motion.p>
      </div>
    </section>

  );
};

export default RnDInnovationSection;
