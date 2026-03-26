import { motion, AnimatePresence } from "framer-motion";
import {
  Accessibility,
  BedDouble,
  BriefcaseBusiness,
  Building2,
  ClipboardPenLine,
  Headset,
  HeartPulse,
  MonitorSmartphone,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

/* ─── "Pourquoi SILAO" reasons ─── */
const reasonGroups = [
  {
    id: "produit",
    eyebrow: "Produit et usage",
    title: "Une expérience pensée pour le terrain",
    description:
      "Des modules simples à prendre en main, configurables et capables d'évoluer avec les établissements.",
    dot: "bg-primary",
    eyebrowColor: "text-primary",
    activeTabTone:
      "data-[state=active]:border-primary/35 data-[state=active]:bg-[linear-gradient(180deg,hsl(var(--primary)/0.22),hsl(var(--primary)/0.12))] data-[state=active]:text-primary dark:data-[state=active]:border-primary/45 dark:data-[state=active]:bg-[linear-gradient(180deg,hsl(var(--primary)/0.34),hsl(var(--primary)/0.2))]",
    iconTone: "bg-primary/10 text-primary",
  },
  {
    id: "accompagnement",
    eyebrow: "Déploiement et continuité",
    title: "Un accompagnement qui tient dans la durée",
    description:
      "Le projet reste suivi dans le temps, sur tous les écrans et dans les contextes de mobilité.",
    dot: "bg-secondary",
    eyebrowColor: "text-secondary",
    activeTabTone:
      "data-[state=active]:border-secondary/38 data-[state=active]:bg-[linear-gradient(180deg,hsl(var(--secondary)/0.22),hsl(var(--secondary)/0.12))] data-[state=active]:text-secondary dark:data-[state=active]:border-secondary/45 dark:data-[state=active]:bg-[linear-gradient(180deg,hsl(var(--secondary)/0.3),hsl(var(--secondary)/0.18))]",
    iconTone: "bg-secondary/10 text-secondary",
  },
  {
    id: "confiance",
    eyebrow: "Fiabilité et expertise",
    title: "Un cadre robuste pour des usages sensibles",
    description:
      "Sécurité, expertise métier et connaissance du terrain structurent les choix produit.",
    dot: "bg-[hsl(var(--brand-violet))]",
    eyebrowColor: "text-[hsl(var(--brand-violet))]",
    activeTabTone:
      "data-[state=active]:border-[hsl(var(--brand-violet)/0.38)] data-[state=active]:bg-[linear-gradient(180deg,hsl(var(--brand-violet)/0.22),hsl(var(--brand-violet)/0.12))] data-[state=active]:text-[hsl(var(--brand-violet))] dark:data-[state=active]:border-[hsl(var(--brand-violet)/0.45)] dark:data-[state=active]:bg-[linear-gradient(180deg,hsl(var(--brand-violet)/0.3),hsl(var(--brand-violet)/0.18))]",
    iconTone: "bg-[hsl(var(--brand-violet)/0.1)] text-[hsl(var(--brand-violet))]",
  },
] as const;

const reasons = [
  { group: "produit", icon: Sparkles, title: "Intuitif", description: "Une attention particulière a été portée à la convivialité et à la simplicité d'utilisation pour une prise en main rapide." },
  { group: "produit", icon: Workflow, title: "Évolutif", description: "Silao s'enrichit au fil des besoins des établissements, en gardant comme ligne de conduite la simplicité et le respect des usages." },
  { group: "produit", icon: SlidersHorizontal, title: "Personnalisable", description: "Profils métiers, droits d'accès, listes, arborescences documentaires, tableaux de bord, thèmes et alertes se configurent selon votre organisation." },
  { group: "accompagnement", icon: Headset, title: "Accompagnement de proximité", description: "Le déploiement s'adapte à la taille de votre structure, avec un ou deux chefs de projet dédiés pour le paramétrage, la reprise et le suivi." },
  { group: "confiance", icon: ShieldCheck, title: "Sécurité", description: "Solution SaaS, Silao est installée, gérée et mise à jour par nos soins avec hébergement, sauvegardes, maintenance et veille réglementaire." },
  { group: "accompagnement", icon: MonitorSmartphone, title: "Disponible partout", description: "Silao est disponible sur ordinateur, tablette et smartphone pour les équipes sur site, en hébergement ou mobiles." },
  { group: "confiance", icon: Accessibility, title: "Expertise métier", description: "Chaque module est développé avec les clients et enrichi par des profils issus du secteur social et médico-social, au plus près du terrain." },
];

/* ─── Team benefits (ex-BenefitsByTeamSection) ─── */
const teamBenefits = [
  {
    icon: BriefcaseBusiness,
    title: "Équipes administratives",
    points: [
      "Centraliser toutes les informations et simplifier la gestion documentaire.",
      "Mettre en place des alertes sur les échéances et les renouvellements.",
      "Gagner du temps sur la rédaction des documents et rapports.",
    ],
  },
  {
    icon: ClipboardPenLine,
    title: "Équipes éducatives",
    points: [
      "Accéder en un clic au cahier de liaison et à l'agenda.",
      "Transmettre et recevoir des informations en temps réel.",
      "Gagner en visibilité sur les actions et en temps sur la rédaction.",
    ],
  },
  {
    icon: HeartPulse,
    title: "Équipes médicales",
    points: [
      "Suivre le dossier médical et le plan de soin.",
      "Assurer une coordination sécurisée autour des écrits liés à la santé.",
    ],
  },
  {
    icon: Smartphone,
    title: "Équipes mobiles",
    points: [
      "Gagner du temps en visite à domicile ou en déplacement.",
      "Réaliser plus simplement ses écrits, y compris avec la dictée vocale.",
    ],
  },
  {
    icon: Building2,
    title: "Équipes logement",
    points: [
      "Faciliter la gestion du parc locatif.",
      "Suivre les interventions avec alertes dédiées.",
    ],
  },
  {
    icon: BedDouble,
    title: "Équipes de nuit",
    points: [
      "Centraliser les informations utiles aux relèves.",
      "Réduire les ruptures d'information sur les périodes critiques.",
    ],
  },
];

const WhyChooseSection = () => (
  <section id="pourquoi-silao" className="px-4 py-20 md:py-28 tint-earth">
    <div className="mx-auto max-w-6xl section-panel px-6 py-10 md:px-10 md:py-14">
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
          Pourquoi nous choisir
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Les raisons concrètes de choisir{" "}
          <span className="text-primary sketch-underline">SILAO</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Simplicité d&apos;usage, personnalisation, sécurité, disponibilité sur tous les écrans,
          expertise métier et accompagnement de proximité.
        </p>
      </motion.div>

      {/* ── Reason groups (tabbed) ── */}
      <Tabs defaultValue="produit" className="space-y-6">
        <TabsList className="mx-auto inline-flex h-auto flex-wrap items-center justify-center gap-1 rounded-full border border-border/80 bg-[linear-gradient(180deg,hsl(var(--muted)/0.88),hsl(var(--muted)/0.62))] p-1 shadow-[inset_0_1px_0_hsl(0_0%_100%/0.92),0_14px_34px_-24px_hsl(var(--brand-violet)/0.28)] dark:bg-[linear-gradient(180deg,hsl(var(--muted)),hsl(var(--card)))]">
          {reasonGroups.map((group) => (
            <TabsTrigger
              key={group.id}
              value={group.id}
              className={`inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-2 text-sm font-semibold text-muted-foreground/88 transition-all duration-200 hover:bg-background/60 hover:text-foreground data-[state=active]:-translate-y-0.5 data-[state=active]:px-6 data-[state=active]:font-bold data-[state=active]:shadow-[0_18px_34px_-22px_hsl(var(--foreground)/0.34)] data-[state=active]:ring-1 data-[state=active]:ring-white/70 dark:text-muted-foreground dark:hover:bg-background/30 ${group.activeTabTone}`}
            >
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${group.dot} shadow-[0_0_0_3px_hsl(0_0%_100%/0.55)] dark:shadow-[0_0_0_3px_hsl(236_28%_14%/0.7)]`} />
              {group.eyebrow}
            </TabsTrigger>
          ))}
        </TabsList>

        {reasonGroups.map((group) => {
          const groupedReasons = reasons.filter((r) => r.group === group.id);

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

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {groupedReasons.map((reason) => (
                      <article key={reason.title} className="surface-card rounded-[1.5rem] px-5 py-6">
                        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${group.iconTone}`}>
                          <reason.icon className="h-5 w-5" />
                        </div>
                        <h4 className="mb-2 text-xl font-bold text-foreground">{reason.title}</h4>
                        <p className="text-sm leading-7 text-muted-foreground">{reason.description}</p>
                      </article>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          );
        })}
      </Tabs>

      {/* ── Team benefits (tabbed) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14"
      >
        <div className="mb-8 text-center">
          <p className="marker-label mb-4">Usages par équipe</p>
          <h3 className="text-2xl font-bold text-foreground md:text-3xl">
            Ce que SILAO change pour les{" "}
            <span className="text-primary sketch-underline">équipes</span>
          </h3>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teamBenefits.map((item) => (
            <article key={item.title} className="surface-card rounded-[1.5rem] p-5">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <item.icon className="h-5 w-5" />
              </div>
              <h4 className="mb-3 text-lg font-bold text-foreground">{item.title}</h4>
              <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseSection;
