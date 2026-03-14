import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  BookOpenCheck,
  GraduationCap,
  LaptopMinimal,
  MonitorPlay,
  Presentation,
} from "lucide-react";
import { Link } from "react-router-dom";

import DemoRequestDialog from "@/components/DemoRequestDialog";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { getPageSeo } from "@/lib/publicRoutes";
import { CONTACT_EMAIL } from "@/lib/site";

const keyFigures = [
  { value: "2 434", label: "personnes formées en 2024" },
  { value: "94 %", label: "des apprenants ont jugé la formation utile au quotidien" },
  { value: "Qualiopi", label: "certification actions de formation" },
];

const modalities = [
  {
    icon: MonitorPlay,
    title: "Distanciel en visioconférence",
    description: "Classes à distance avec formateur, sur Zoom, pour des groupes resserrés.",
  },
  {
    icon: LaptopMinimal,
    title: "E-learning / FOAD",
    description: "Parcours ouverts à distance sur une plateforme dédiée, avec suivi et contenus sur mesure.",
  },
  {
    icon: Presentation,
    title: "Présentiel",
    description: "Sur site ou dans un lieu validé par D2L Informatique, selon la nature de la session.",
  },
];

const corePrograms = [
  {
    title: "PAPSIL",
    timing: "Avant le déploiement",
    audience: "Personnels encadrants et équipe projet",
    format: "1 journée + 1/2 journée en présentiel, 10 à 30 personnes",
    summary:
      "Préparer le changement, structurer l'équipe projet, identifier les risques et poser les bases d'un déploiement réussi.",
  },
  {
    title: "Art'Sil",
    timing: "Pendant le déploiement",
    audience: "Professionnels en charge du paramétrage et de la reprise de données",
    format: "5 x 1h30 en visio + environ 12 h de FOAD, 12 à 20 personnes",
    summary:
      "Comprendre les mécanismes de SILAO pour administrer le logiciel, travailler la reprise des données et construire les usages collaboratifs.",
  },
  {
    title: "FOAD SILAO",
    timing: "Après le déploiement",
    audience: "Utilisateurs standard ou administrateurs",
    format: "100 % e-learning ou formule hybride avec 2 visios, minimum 5 personnes",
    summary:
      "Apprendre à utiliser SILAO au quotidien, avec un parcours sur mesure selon les fonctionnalités réellement activées dans votre plateforme.",
  },
];

const thematicPrograms = [
  {
    title: "Découverte de SILAO",
    details: "Formation incontournable pour les équipes éducatives ou nouveaux collaborateurs. 3h en visio ou 3h30 en présentiel.",
  },
  {
    title: "Paramétrage & administration",
    details: "Deux sessions de 3h pour les profils ayant besoin d'utiliser les fonctionnalités avancées et les droits d'administration.",
  },
  {
    title: "Agenda classique",
    details: "Session de 1h30 pour les équipes qui utilisent l'agenda au quotidien et doivent maîtriser saisie, vues et liaisons avec les écrits.",
  },
  {
    title: "Agenda avancé",
    details: "Session orientée planification avancée, paramétrage métier, rappels et exploitation des données d'activité.",
  },
  {
    title: "États et statistiques",
    details: "Formation thématique pour extraire, filtrer et exploiter les données qualitatives ou quantitatives dans SILAO.",
  },
];

const extraPoints = [
  "Les contenus sont ajustés selon les fonctionnalités activées dans votre SILAO.",
  "Les documents de formation, guides et justificatifs sont transmis à la personne référente côté client.",
  "Les formations sont éligibles à une prise en charge OPCO.",
  "Des aménagements spécifiques peuvent être organisés pour les personnes en situation de handicap.",
];

const seo = getPageSeo("/formations");

const FormationsPage = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background paper-grain">
      <SEOHead {...seo} />
      <Navbar />
      <PageMain className="pt-16">
        <section className="px-4 py-20 paper-bg">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <GraduationCap className="h-4 w-4" />
              Formations SILAO
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
              Des formations pensées selon le <span className="text-primary sketch-underline">moment du projet</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
              Avant, pendant ou après le déploiement, l&apos;offre de formation SILAO combine
              présentiel, visio et FOAD pour s&apos;adapter aux profils, aux usages et aux
              fonctionnalités réellement activées.
            </p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {keyFigures.map((item) => (
              <article key={item.label} className="rounded-[1.5rem] border border-border/60 bg-card p-6 text-center shadow-sm">
                <p className="text-4xl font-bold text-foreground">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-20 paper-bg">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
              Trois modalités pédagogiques complémentaires
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {modalities.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[1.5rem] border border-border/60 bg-card p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-14 text-center text-3xl font-bold text-foreground md:text-4xl">
              Les trois parcours structurants
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {corePrograms.map((program, index) => (
                <motion.article
                  key={program.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="sketch-border bg-card p-8"
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {program.timing}
                  </p>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">{program.title}</h3>
                  <p className="mb-4 text-sm leading-7 text-muted-foreground">{program.summary}</p>
                  <div className="space-y-2 text-sm text-foreground">
                    <p><strong>Public :</strong> {program.audience}</p>
                    <p><strong>Format :</strong> {program.format}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 paper-bg">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
              Formations incontournables et modules thématiques
            </h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {thematicPrograms.map((program, index) => (
                <motion.article
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-[1.5rem] border border-border/60 bg-card p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <BookOpenCheck className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{program.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{program.details}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <article className="section-panel p-8">
              <h2 className="mb-5 text-3xl font-bold text-foreground">Conditions et organisation</h2>
              <ul className="space-y-4 text-sm leading-7 text-muted-foreground">
                {extraPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>

            <article className="section-panel p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Accessibility className="h-5 w-5" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Accessibilité et contact</h2>
              <p className="mb-4 text-sm leading-7 text-muted-foreground">
                Les situations de handicap peuvent être étudiées individuellement pour organiser les
                aménagements les plus adaptés.
              </p>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">
                Pour commander une formation ou demander un cadrage, contactez votre chef de projet
                SILAO ou l&apos;équipe commerciale à <strong>{CONTACT_EMAIL}</strong>.
              </p>
              <div className="flex flex-col gap-3">
                <Button variant="hero" size="xl" onClick={() => setDemoOpen(true)}>
                  Demander une démonstration
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/offres" className="gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Revenir aux offres
                  </Link>
                </Button>
              </div>
            </article>
          </div>
        </section>
      </PageMain>
      <FooterSection />
      <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default FormationsPage;
