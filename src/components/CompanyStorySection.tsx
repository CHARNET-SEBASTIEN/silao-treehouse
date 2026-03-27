import { motion } from "framer-motion";
import { Headset, Users2, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

import teamTous from "@/assets/illustrations/team-tous.webp";
import { Button } from "@/components/ui/button";
import { COMPANY_DISPLAY_NAME, PRODUCT_NAME } from "@/lib/site";

const markers = [
  {
    icon: Headset,
    title: "Un interlocuteur unique",
    description:
      "Le projet est suivi par un même contact pour garder une lecture continue de vos besoins.",
  },
  {
    icon: Users2,
    title: "Des profils issus du terrain",
    description:
      "L'équipe réunit des compétences informatiques, projet et des profils connaissant le secteur social et médico-social.",
  },
  {
    icon: Wrench,
    title: "Une approche globale",
    description:
      "Déploiement, support, formation, reprise de données et évolutions produit restent portés dans la même organisation.",
  },
];

const CompanyStorySection = () => (
  <section id="societe" className="px-4 py-6 md:py-8 tint-violet">
    <div className="mx-auto max-w-6xl section-panel px-6 py-5 md:px-10 md:py-6">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
            Qui sommes-nous ?
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {COMPANY_DISPLAY_NAME}, l&apos;éditeur de {PRODUCT_NAME}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground lg:mx-0">
            Ce qui distingue l&apos;accompagnement de {COMPANY_DISPLAY_NAME}, c&apos;est la continuité de
            suivi et une réponse sur mesure portée par une équipe qui connaît le terrain.
          </p>
          <div className="mt-6">
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/accompagnement">Voir l&apos;accompagnement</Link>
            </Button>
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden px-6 pb-2 pt-4"
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-24 rounded-full bg-primary/10 blur-3xl" />
          <img
            src={teamTous}
            alt={`Illustration d'une équipe réunie, en écho au travail collectif de ${COMPANY_DISPLAY_NAME}`}
            loading="lazy"
            decoding="async"
            width={1600}
            height={954}
            className="relative z-10 mx-auto w-full max-w-md"
          />
        </motion.figure>
      </div>

      <div className="mt-4 grid gap-5 md:grid-cols-3">
        {markers.map((marker, index) => (
          <motion.article
            key={marker.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="surface-card rounded-[1.5rem] px-5 py-6"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <marker.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">{marker.title}</h3>
            <p className="text-sm leading-7 text-muted-foreground">{marker.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default CompanyStorySection;
