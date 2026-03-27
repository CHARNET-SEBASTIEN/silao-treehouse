import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  Cloud,
  Handshake,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useDemoRequestDialog } from "@/components/DemoRequestDialogProvider";
import { Button } from "@/components/ui/button";
import { COMPANY_DISPLAY_NAME, PRODUCT_NAME } from "@/lib/site";

const phases = [
  {
    title: `Accéder à ${PRODUCT_NAME} simplement`,
    icon: Cloud,
    points: [
      "Aucune installation locale, aucun matériel spécifique et aucune compétence technique requise.",
      "Une simple connexion internet et un navigateur suffisent pour accéder à l'application en mode SaaS.",
      "Hébergement sécurisé, sauvegardes, mises à jour et maintenance sont prises en charge par nos équipes.",
    ],
  },
  {
    title: "Un accompagnement de proximité",
    icon: Handshake,
    points: [
      "Chaque déploiement est adapté à la taille de votre organisation, à la maturité numérique des utilisateurs et au type de prise en charge.",
      "Un ou deux chefs de projet dédiés accompagnent le paramétrage, la reprise de données et le suivi.",
      "Les échanges sont centrés sur vos besoins métier, pas sur la technique.",
    ],
  },
  {
    title: "Une équipe qui connaît le terrain",
    icon: Users,
    points: [
      "Les équipes en lien avec les clients intègrent d'anciens responsables d'établissement, chefs de service et travailleurs sociaux.",
      "Cette connaissance du terrain permet une compréhension fine des contraintes et priorités métier.",
      "Les réponses apportées sont pensées pour vos pratiques professionnelles réelles.",
    ],
  },
];

const supportBlocks = [
  {
    icon: HeartHandshake,
    title: "Qualité et bienveillance",
    description:
      "Professionnalisme et bienveillance guident l'accompagnement des équipes de la protection de l'enfance, du médico-social et de l'insertion.",
  },
  {
    icon: ShieldCheck,
    title: "Hébergement sécurisé",
    description:
      "L'application est hébergée sur des serveurs certifiés répondant aux standards de sécurité et de confidentialité les plus exigeants.",
  },
  {
    icon: Accessibility,
    title: "Accessibilité",
    description:
      "Contenus, réunions et formations sont adaptés aux personnes en situation de handicap, avec sous-titres, typographies lisibles et aménagements individualisés.",
  },
];

const indicators = [
  "0 matériel spécifique",
  "0 compétence technique requise",
  "Sauvegarde automatique des données",
  "Mises à jour régulières à distance",
  "Maintenance sans interruption",
  "Accompagnement métier continu",
];

const AccompagnementSection = () => {
  const { openDialog } = useDemoRequestDialog();

  return (
    <section className="px-4 py-20 paper-bg">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm text-secondary">
            <Handshake className="h-4 w-4" />
            Accompagnement Silao
          </div>
          <h1 className="mb-5 text-4xl font-bold text-foreground md:text-6xl">
            Un accompagnement de proximité, pensé pour un déploiement{" "}
            <span className="text-primary sketch-underline">sur le long terme</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            {COMPANY_DISPLAY_NAME} a fait le choix d&apos;un accompagnement adapté à votre contexte,
            à la maturité informatique des utilisateurs et aux besoins des équipes, pour assurer un
            déploiement lisible et centré sur vos usages.
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
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
            <h2 className="mb-4 text-2xl font-bold text-foreground">Un cadre technique pris en charge</h2>
            <p className="mb-6 text-sm leading-7 text-muted-foreground">
              Avec {PRODUCT_NAME}, les équipes peuvent se concentrer sur leur métier : {COMPANY_DISPLAY_NAME}
              prend en charge l&apos;infrastructure, les mises à jour et la continuité technique de
              l&apos;outil.
            </p>
            <div className="space-y-3">
              {indicators.map((indicator) => (
                <div
                  key={indicator}
                  className="rounded-2xl bg-background/90 px-4 py-3 text-sm text-foreground"
                >
                  {indicator}
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        <div className="mx-auto max-w-4xl rounded-[2rem] border border-border/60 bg-card p-8 text-center shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Être bien accompagné, c&apos;est aussi être compris
          </h2>
          <p className="mx-auto max-w-2xl leading-7 text-muted-foreground">
            Notre objectif est de soutenir les professionnels avec des outils fiables, pensés pour
            alléger leur quotidien et renforcer l&apos;impact de leur accompagnement.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="hero" size="xl" onClick={openDialog}>
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
    </section>
  );
};

export default AccompagnementSection;
