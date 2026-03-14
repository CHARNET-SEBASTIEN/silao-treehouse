import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  FolderSync,
  Handshake,
  Rocket,
  Settings2,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import DemoRequestDialog from "@/components/DemoRequestDialog";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { getPageSeo } from "@/lib/publicRoutes";

const offerBlocks = [
  {
    icon: Rocket,
    title: "Déploiement SILAO",
    description:
      "Cadrage, paramétrage, reprise de données et préparation du démarrage avec un projet structuré selon votre organisation.",
    points: [
      "Chef de projet dédié",
      "Périmètre et planning clarifiés",
      "Base de test et paramétrage",
      "Organisation de la reprise de données",
    ],
  },
  {
    icon: Handshake,
    title: "Accompagnement projet",
    description:
      "Gouvernance, conduite du changement, coordination métier et suivi des usages pour sécuriser la montée en charge.",
    points: [
      "COMOP et suivi projet",
      "Interlocuteur unique",
      "Accompagnement de proximité",
      "Pilotage des indicateurs d'usage",
    ],
  },
  {
    icon: BookOpenCheck,
    title: "Formation",
    description:
      "Formations avant, pendant et après déploiement, avec FOAD, visio, présentiel et modules thématiques selon les profils.",
    points: [
      "PAPSIL",
      "Art'Sil",
      "FOAD standard ou administrateur",
      "Sessions thématiques ciblées",
    ],
  },
];

const deploymentSteps = [
  {
    icon: Users,
    title: "Cadrer le projet",
    description:
      "Définition du périmètre, des interlocuteurs, des jalons et des points de vigilance propres à votre structure ou organisme gestionnaire.",
  },
  {
    icon: Settings2,
    title: "Paramétrer SILAO",
    description:
      "Ajustement des nomenclatures, droits, rôles, modules et outils collaboratifs en cohérence avec vos pratiques métier.",
  },
  {
    icon: FolderSync,
    title: "Préparer la reprise",
    description:
      "Identification des données à reprendre, contrôle qualité, organisation des imports et sécurisation du passage vers le nouveau DUI.",
  },
  {
    icon: BarChart3,
    title: "Piloter la mise en usage",
    description:
      "Suivi du démarrage, accompagnement des équipes, contrôle des usages et lecture des premiers indicateurs opérationnels.",
  },
];

const framingPoints = [
  "La proposition est construite selon votre périmètre, vos établissements et votre niveau de maturité numérique.",
  "Le déploiement, la formation et l'abonnement relèvent de briques distinctes, formalisées dans une documentation contractuelle claire.",
  "L'objectif n'est pas seulement d'installer SILAO, mais de rendre son usage durable et exploitable au quotidien.",
];

const seo = getPageSeo("/offres");

const OffresPage = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background paper-grain">
      <SEOHead {...seo} />
      <Navbar />
      <PageMain className="pt-16">
        <section className="px-4 py-20 paper-bg">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <Rocket className="h-4 w-4" />
              Offres SILAO
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
              Déployer SILAO avec une offre <span className="text-primary sketch-underline">structurée</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
              L&apos;offre SILAO articule trois dimensions complémentaires: le déploiement du DUI,
              l&apos;accompagnement projet et la formation des équipes. Chaque proposition est ajustée
              à votre contexte plutôt qu&apos;enfermée dans un pack standard.
            </p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {offerBlocks.map((block, index) => (
              <motion.article
                key={block.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="sketch-border bg-card p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <block.icon className="h-5 w-5" />
                </div>
                <h2 className="mb-3 text-2xl font-bold text-foreground">{block.title}</h2>
                <p className="mb-6 text-sm leading-7 text-muted-foreground">{block.description}</p>
                <ul className="space-y-3 text-sm text-foreground">
                  {block.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="px-4 py-20 paper-bg">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-14 text-center text-3xl font-bold text-foreground md:text-4xl">
              Le déploiement SILAO en <span className="text-primary sketch-underline">quatre temps</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {deploymentSteps.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="rounded-[1.6rem] border border-border/60 bg-card p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{step.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto max-w-4xl section-panel p-8 md:p-10">
            <h2 className="mb-5 text-3xl font-bold text-foreground">Comment l&apos;offre est cadrée</h2>
            <ul className="space-y-4 text-muted-foreground">
              {framingPoints.map((point) => (
                <li key={point} className="leading-7">
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="xl" onClick={() => setDemoOpen(true)}>
                Demander une démonstration
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/formations" className="gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Voir les formations
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/accompagnement" className="gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Voir l'accompagnement
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </PageMain>
      <FooterSection />
      <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default OffresPage;
