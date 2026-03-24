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

const reasonGroups = [
  {
    id: "produit",
    eyebrow: "Produit et usage",
    title: "Une expérience pensée pour le terrain",
    description:
      "Des modules simples à prendre en main, configurables et capables d'évoluer avec les établissements.",
  },
  {
    id: "accompagnement",
    eyebrow: "Déploiement et continuité",
    title: "Un accompagnement qui tient dans la durée",
    description:
      "Le projet reste suivi dans le temps, sur tous les écrans et dans les contextes de mobilité.",
  },
  {
    id: "confiance",
    eyebrow: "Fiabilité et expertise",
    title: "Un cadre robuste pour des usages sensibles",
    description:
      "Sécurité, expertise métier et connaissance du terrain structurent les choix produit.",
  },
] as const;

const reasons = [
  {
    group: "produit",
    icon: Sparkles,
    title: "Intuitif",
    description:
      "Une attention particulière a été portée à la convivialité et à la simplicité d'utilisation pour une prise en main rapide.",
  },
  {
    group: "produit",
    icon: Workflow,
    title: "Évolutif",
    description:
      "Silao s'enrichit au fil des besoins des établissements, en gardant comme ligne de conduite la simplicité et le respect des usages.",
  },
  {
    group: "produit",
    icon: SlidersHorizontal,
    title: "Personnalisable",
    description:
      "Profils métiers, droits d'accès, listes, arborescences documentaires, tableaux de bord, thèmes et alertes se configurent selon votre organisation.",
  },
  {
    group: "accompagnement",
    icon: Headset,
    title: "Accompagnement de proximité",
    description:
      "Le déploiement s'adapte à la taille de votre structure, avec un ou deux chefs de projet dédiés pour le paramétrage, la reprise et le suivi.",
  },
  {
    group: "confiance",
    icon: ShieldCheck,
    title: "Sécurité",
    description:
      "Solution SaaS, Silao est installée, gérée et mise à jour par nos soins avec hébergement, sauvegardes, maintenance et veille réglementaire.",
  },
  {
    group: "accompagnement",
    icon: MonitorSmartphone,
    title: "Disponible partout",
    description:
      "Silao est disponible sur ordinateur, tablette et smartphone pour les équipes sur site, en hébergement ou mobiles.",
  },
  {
    group: "confiance",
    icon: Accessibility,
    title: "Expertise métier",
    description:
      "Chaque module est développé avec les clients et enrichi par des profils issus du secteur social et médico-social, au plus près du terrain.",
  },
];

const WhyChooseSection = () => (
  <section id="pourquoi-silao" className="px-4 py-20 md:py-28">
    <div className="mx-auto max-w-6xl section-panel px-6 py-10 md:px-10 md:py-14">
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
          Sept raisons concrètes de choisir{" "}
          <span className="text-primary sketch-underline">SILAO</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Simplicité d&apos;usage, personnalisation, sécurité, disponibilité sur tous les écrans,
          expertise métier et accompagnement de proximité forment le socle de l&apos;offre SILAO.
        </p>
      </motion.div>

      <div className="space-y-10">
        {reasonGroups.map((group, groupIndex) => {
          const groupedReasons = reasons.filter((reason) => reason.group === group.id);
          const groupSurface = groupIndex % 2 === 0 ? "surface-card-tint" : "surface-card";

          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
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

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {groupedReasons.map((reason) => (
                  <article
                    key={reason.title}
                    className="surface-card rounded-[1.5rem] px-5 py-6"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <reason.icon className="h-5 w-5" />
                    </div>
                    <h4 className="mb-2 text-xl font-bold text-foreground">{reason.title}</h4>
                    <p className="text-sm leading-7 text-muted-foreground">{reason.description}</p>
                  </article>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
