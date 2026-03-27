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

import { useDemoRequestDialog } from "@/components/DemoRequestDialogProvider";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { getPageSeo } from "@/lib/publicRoutes";
import { PRODUCT_NAME } from "@/lib/site";

const offerBlocks = [
  {
    icon: Rocket,
    title: `Déploiement de ${PRODUCT_NAME}`,
    description:
      "Cadrage, paramétrage et reprise de données sont planifiés en tenant compte des contraintes de votre organisation.",
    points: [
      "Chef de projet dédié",
      "Planning et périmètre clairs",
      "Accès à une base de test",
      "Reprise de données structurée",
    ],
  },
  {
    icon: Handshake,
    title: "Accompagnement des équipes",
    description:
      "Gouvernance, conduite du changement et suivi des usages permettent d'appréhender l'arrivée d'un nouvel outil.",
    points: [
      "Instances de suivi projet",
      "Interlocuteur unique",
      "Accompagnement de proximité",
      "Suivi des usages",
    ],
  },
  {
    icon: BookOpenCheck,
    title: "Formation des utilisateurs",
    description:
      "Formations adaptées aux besoins de vos équipes, organisées sur mesure par une équipe expérimentée.",
    points: [
      "Formules sur mesure",
      "Durée de formation adaptée",
      "Certification Qualiopi",
      "Accessibilité",
    ],
  },
];

const deploymentSteps = [
  {
    icon: Users,
    title: "Cadrer le projet",
    description:
      "Définition des interlocuteurs, du périmètre, des jalons et des points d'attention propres à votre organisation.",
  },
  {
    icon: Settings2,
    title: `Paramétrer ${PRODUCT_NAME}`,
    description:
      "Choix des fonctionnalités, ajustement des listes déroulantes, gestion des droits et définition des préférences globales en cohérence avec vos pratiques.",
  },
  {
    icon: FolderSync,
    title: "Préparer et intégrer vos données",
    description:
      "Identification des informations à reprendre, contrôle qualité et intégration progressive des données.",
  },
  {
    icon: BarChart3,
    title: "Piloter la mise en place et l'utilisation",
    description:
      "Suivi du démarrage, conseil pour l'adhésion des équipes et analyse des premiers usages.",
  },
];

const seo = getPageSeo("/offres");

const OffresPage = () => {
  const { openDialog } = useDemoRequestDialog();

  return (
    <div className="min-h-screen bg-background paper-grain">
      <SEOHead {...seo} />
      <Navbar />
      <PageMain className="pt-16">
        <section className="px-4 py-16 paper-bg">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <Rocket className="h-4 w-4" />
              Offres {PRODUCT_NAME}
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
              Notre offre de déploiement de{" "}
              <span className="text-primary sketch-underline">{PRODUCT_NAME}</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
              L&apos;offre de déploiement de {PRODUCT_NAME} s&apos;articule autour de trois dimensions
              complémentaires : le déploiement du logiciel, l&apos;accompagnement des équipes et la
              formation des utilisateurs. Chaque proposition commerciale est ajustée à votre
              contexte plutôt qu&apos;enfermée dans une offre standard.
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
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
                <ul className="space-y-3 text-sm leading-7 text-foreground">
                  {block.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="px-4 py-16 paper-bg">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
              L&apos;arrivée de {PRODUCT_NAME} en <span className="text-primary sketch-underline">4 étapes simples</span>
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

        <section className="px-4 py-12">
          <div className="mx-auto max-w-4xl section-panel p-8 md:p-10">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Aller plus loin sur le déploiement
            </h2>
            <p className="max-w-2xl leading-7 text-muted-foreground">
              Vous pouvez demander une démonstration, consulter les formations ou en savoir plus sur
              l&apos;accompagnement selon votre besoin.
            </p>

            <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:flex-wrap">
              <Button
                variant="hero"
                size="xl"
                className="h-auto w-full whitespace-normal px-6 py-4 text-center leading-tight lg:w-auto"
                onClick={openDialog}
              >
                Demander une démonstration
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                className="h-auto w-full whitespace-normal px-6 py-4 text-center leading-tight lg:w-auto"
                asChild
              >
                <Link to="/formations" className="gap-2 text-center">
                  <ArrowRight className="h-4 w-4" />
                  Voir les formations
                </Link>
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                className="h-auto w-full whitespace-normal px-6 py-4 text-center leading-tight lg:w-auto"
                asChild
              >
                <Link to="/accompagnement" className="gap-2 text-center">
                  <ArrowRight className="h-4 w-4" />
                  En savoir plus sur l&apos;accompagnement
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </PageMain>
      <FooterSection />
    </div>
  );
};

export default OffresPage;
