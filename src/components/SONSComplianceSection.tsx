import { motion } from "framer-motion";
import {
  BadgeEuro,
  FileCheck,
  MailCheck,
  ShieldCheck,
  SplitSquareVertical,
  Waypoints,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const points = [
  {
    icon: SplitSquareVertical,
    title: "INS qualifiée et identité fiable",
    description:
      "Structurer l'identité de l'usager, qualifier l'INS et réduire les risques d'erreur dans les échanges ou les usages aval.",
  },
  {
    icon: MailCheck,
    title: "MSSanté et échanges sécurisés",
    description:
      "Faciliter les échanges sécurisés avec les partenaires et organiser les flux autour d'une BAL applicative adaptée à votre périmètre.",
  },
  {
    icon: FileCheck,
    title: "DMP et continuité du parcours",
    description:
      "Préparer l'alimentation et la consultation des informations utiles dans le parcours, avec une logique de traçabilité et d'usage partagé.",
  },
  {
    icon: Waypoints,
    title: "Interopérabilité CI-SIS",
    description:
      "Aligner le dossier usager, les flux et les usages avec le cadre d'interopérabilité attendu dans les projets SONS et Ségur.",
  },
];

const projectImpacts = [
  {
    icon: ShieldCheck,
    title: "Un cadrage plus concret",
    description:
      "La conformité SONS ne se résume pas à une ligne de financement: elle influence l'identité, les échanges, les droits d'accès et les pratiques à déployer.",
  },
  {
    icon: SplitSquareVertical,
    title: "Des usages à piloter",
    description:
      "INS, MSSanté ou DMP demandent un pilotage dans la durée pour suivre les usages réels, préparer les équipes et sécuriser les indicateurs attendus.",
  },
  {
    icon: BadgeEuro,
    title: "Un projet mieux documenté",
    description:
      "Le cadrage technique, organisationnel et financier gagne en lisibilité lorsque le périmètre d'interopérabilité est expliqué clairement dès le départ.",
  },
];

const SONSComplianceSection = () => {
  return (
    <section className="px-4 py-24 paper-bg">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-body font-medium text-primary">
            <ShieldCheck className="h-4 w-4" />
            Cadre réglementaire
          </div>
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Conformité <span className="text-primary sketch-underline">SONS</span>, INS, MSSanté,
            DMP et interopérabilité
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
            Cette page donne un repère simple sur les sujets à cadrer dans un projet DUI ESSMS:
            identité, messagerie sécurisée, DMP, interopérabilité CI-SIS et organisation du
            déploiement.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {points.map((point, index) => (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="sketch-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <point.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-xl font-bold text-foreground">{point.title}</h2>
              <p className="font-body leading-relaxed text-muted-foreground">{point.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projectImpacts.map((impact, index) => (
            <motion.article
              key={impact.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-border/60 bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <impact.icon className="h-5 w-5" />
              </div>
              <h2 className="mb-3 text-xl font-bold text-foreground">{impact.title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">{impact.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto max-w-3xl border-primary/20 bg-primary/5 p-8 text-center sketch-border md:p-10"
        >
          <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-primary" />
          <p className="text-lg leading-relaxed text-foreground font-body">
            <strong>Le sujet SONS est d'abord un sujet d'usage, d'interopérabilité et de cadrage
            projet.</strong>
          </p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground font-body">
            Si vous devez préparer un déploiement, clarifier le périmètre ou retrouver les pages les
            plus utiles, poursuivez vers les ressources ou contactez l&apos;équipe.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="lg">
              <Link to="/ressources">Voir les ressources</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/aide-support">Ouvrir l&apos;aide et support</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SONSComplianceSection;
