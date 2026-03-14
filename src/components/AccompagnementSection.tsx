import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  Settings2,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import DemoRequestDialog from "@/components/DemoRequestDialog";
import { Button } from "@/components/ui/button";

const phases = [
  {
    title: "Avant le déploiement",
    icon: BriefcaseBusiness,
    points: [
      "Qualification du contexte, des établissements concernés et des contraintes métier.",
      "Cadrage du projet, des interlocuteurs et des décisions à porter en gouvernance.",
      "Préparation au changement avec les encadrants et l'équipe projet.",
    ],
  },
  {
    title: "Pendant le déploiement",
    icon: Settings2,
    points: [
      "Paramétrage du DUI avec les profils en charge de la construction et de la reprise des données.",
      "Accompagnement sur les rôles, nomenclatures, cycle de vie du dossier et outils collaboratifs.",
      "Coordination continue entre projet, paramétrage, formation et démarrage.",
    ],
  },
  {
    title: "Après le déploiement",
    icon: GraduationCap,
    points: [
      "Formation des équipes selon les profils, les droits et les usages réellement activés.",
      "Renfort sur les fonctionnalités avancées ou les modules thématiques.",
      "Suivi des usages et consolidation des pratiques dans la durée.",
    ],
  },
];

const supportBlocks = [
  {
    icon: Users,
    title: "Interlocuteur unique",
    description:
      "Un même référent suit le projet du paramétrage à la formation afin de garder une lecture continue du contexte client.",
  },
  {
    icon: Handshake,
    title: "Proximité terrain",
    description:
      "L'accompagnement s'ajuste à la taille de la structure, aux profils en place et au niveau de maturité numérique des équipes.",
  },
  {
    icon: BarChart3,
    title: "Pilotage des usages",
    description:
      "Les indicateurs aident à suivre l'appropriation, à corriger les points de friction et à objectiver la progression.",
  },
  {
    icon: Activity,
    title: "Continuité opérationnelle",
    description:
      "Formation, support et suivi projet sont pensés comme un ensemble cohérent plutôt que comme des actions isolées.",
  },
];

const indicators = [
  "Qualification INS",
  "Alimentation DMP",
  "Progression des usages",
  "Lecture de l'activité par établissement",
];

const AccompagnementSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="px-4 py-20 paper-bg">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm text-accent">
            <Handshake className="h-4 w-4" />
            Accompagnement SILAO
          </div>
          <h1 className="mb-5 text-4xl font-bold text-foreground md:text-6xl">
            Un accompagnement projet qui reste <span className="text-primary sketch-underline">continu</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            Chez D2L Informatique, l&apos;accompagnement ne se limite pas à la mise en route du
            logiciel. Il couvre la préparation du projet, la construction du DUI, la formation des
            équipes et la lecture des usages après démarrage.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {phases.map((phase, index) => (
            <motion.article
              key={phase.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="sketch-border bg-card p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <phase.icon className="h-5 w-5" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">{phase.title}</h2>
              <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                {phase.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mb-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {supportBlocks.map((block, index) => (
              <motion.article
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[1.5rem] border border-border/60 bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <block.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{block.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{block.description}</p>
              </motion.article>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.75rem] border border-border/60 bg-primary/5 p-8"
          >
            <h2 className="mb-4 text-2xl font-bold text-foreground">Pilotage des usages</h2>
            <p className="mb-6 text-sm leading-7 text-muted-foreground">
              L&apos;accompagnement intègre aussi la lecture des premiers usages pour aider les
              établissements à consolider leurs pratiques et à objectiver leur progression.
            </p>
            <div className="space-y-3">
              {indicators.map((indicator) => (
                <div key={indicator} className="rounded-2xl bg-background/90 px-4 py-3 text-sm text-foreground">
                  {indicator}
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        <div className="mx-auto max-w-4xl rounded-[2rem] border border-border/60 bg-card p-8 text-center shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Projet, formation et usage forment un même parcours
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-7">
            L&apos;efficacité de SILAO repose sur cette continuité: un projet bien préparé, une
            formation cohérente avec le paramétrage réel, puis un accompagnement qui aide les
            équipes à tenir dans la durée.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="hero" size="xl" onClick={() => setDemoOpen(true)}>
              Échanger sur votre projet
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/formations" className="gap-2">
                <ArrowRight className="h-4 w-4" />
                Voir les formations
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
};

export default AccompagnementSection;
