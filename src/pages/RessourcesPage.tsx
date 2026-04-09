import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpenText,
  FolderKanban,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import ResourcesFaqSection from "@/components/ResourcesFaqSection";
import { getPageSeo } from "@/lib/publicRoutes";
import { PRODUCT_NAME } from "@/lib/site";

const pillars = [
  {
    icon: Workflow,
    title: `Déployer ${PRODUCT_NAME}`,
    description:
      "Cadrage du projet, reprise de données, formation des équipes et suivi après démarrage.",
    links: [
      { to: "/offres", label: "Voir l'offre de déploiement" },
      { to: "/accompagnement", label: "Voir l'accompagnement" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Comprendre le cadre réglementaire",
    description:
      "Fonctionnalités comme l'INS, le DMP et MSSanté, et repères liés aux financements et exigences nationales.",
    links: [
      { to: "/conformite-sons", label: "Voir la page conformité Ségur" },
      { to: "/engagements", label: "Voir les engagements" },
    ],
  },
  {
    icon: FolderKanban,
    title: "Voir des exemples par secteur",
    description:
      "Cas d'usage, vocabulaire métier et pages sectorielles pour retrouver un contexte proche du vôtre.",
    links: [
      { to: "/secteur/protection-enfance", label: "Protection de l'enfance" },
      { to: "/secteur/handicap", label: "Médico-social" },
    ],
  },
];

const useCases = [
  {
    title: "Protection de l'enfance",
    description:
      "Confidentialité renforcée, accompagnements éducatifs, suivi du parcours et travail avec les partenaires institutionnels.",
    to: "/secteur/protection-enfance",
  },
  {
    title: "Médico-social",
    description:
      "Projet personnalisé, agenda, listes d'attente, coordination pluridisciplinaire et suivi administratif.",
    to: "/secteur/handicap",
  },
  {
    title: "Accueil, hébergement et insertion",
    description:
      "Suivi de parcours, gestion des places, accompagnement social et coordination multi-acteurs.",
    to: "/secteur/insertion-ahi",
  },
];

const officialLinks = [
  {
    href: "https://esante.gouv.fr/segur/medico-social",
    label: "ANS - Ségur du numérique en santé pour le médico-social",
  },
  {
    href: "https://esante.gouv.fr/webinaires/tout-comprendre-sur-le-dispositif-de-financement-sons-pour-le-secteur-medico-social",
    label: "ANS - Tout comprendre sur le dispositif SONS",
  },
  {
    href: "https://esante.gouv.fr/ens/segur-numerique-sante/vague-1/dispositif-dui-ms1-pa-ph-dom-couloir-social-medico-social",
    label: "ANS - Dispositif DUI MS1",
  },
  {
    href: "https://esante.gouv.fr/ens/segur-numerique-sante/vague-1/dispositif-dui-ms2-pde-couloir-social-medico-social",
    label: "ANS - Dispositif DUI MS2 PDE",
  },
  {
    href: "https://esante.gouv.fr/ens/segur-numerique-sante/vague-1/dispositif-dui-ms2-pds-couloir-social-medico-social",
    label: "ANS - Dispositif DUI MS2 PDS",
  },
];

const seo = getPageSeo("/ressources");

const RessourcesPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <SEOHead {...seo} />
    <Navbar />
    <PageMain className="pt-16">
      <section className="px-4 py-16 paper-bg">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary"
          >
            <BookOpenText className="h-4 w-4" />
            Ressources
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-bold text-foreground md:text-6xl"
          >
            Ressources <span className="text-primary sketch-underline">{PRODUCT_NAME}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground"
          >
            Cette page rassemble les thématiques clés à examiner avant de choisir un DUI :
            déploiement, cadre réglementaire, secteurs couverts et qualité de l&apos;accompagnement.
          </motion.p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground">
              Les sujets à explorer en priorité
            </h2>
            <p className="mt-3 text-muted-foreground">
              Trois entrées simples pour trouver les contenus vraiment utiles.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="section-panel flex h-full flex-col p-6">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{pillar.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                </div>
                <div className="mt-auto flex flex-col gap-2 pt-5">
                  {pillar.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                      {link.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 paper-bg">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Exemples de cas d&apos;usage
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Des exemples par secteur pour retrouver un contexte proche du vôtre.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((item) => (
              <article key={item.title} className="surface-card flex h-full flex-col rounded-[1.5rem] p-6">
                <div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
                <Link
                  to={item.to}
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  Ouvrir la page secteur
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-border/60 bg-card p-6 shadow-sm">
            <h3 className="mb-3 text-2xl font-bold text-foreground">
              Liens officiels utiles
            </h3>
            <p className="mb-4 text-sm leading-7 text-muted-foreground">
              Pour compléter les contenus du site, voici quelques ressources officielles de l&apos;ANS.
            </p>
            <div className="flex flex-col gap-3">
              {officialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BlogSection showResourcesLink={false} />

      <ResourcesFaqSection />
    </PageMain>
    <FooterSection />
  </div>
);

export default RessourcesPage;
