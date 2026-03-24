import { motion } from "framer-motion";
import { Leaf, Landmark, Users2, Wrench } from "lucide-react";

import teamTous from "@/assets/illustrations/team-tous.webp";
import {
  COMPANY_ACTIVITY,
  COMPANY_CREATION_DATE,
  COMPANY_NAME,
} from "@/lib/site";

const markers = [
  {
    icon: Landmark,
    title: COMPANY_CREATION_DATE,
    description:
      `${COMPANY_NAME} conçoit des logiciels pour le secteur social et fait évoluer SILAO avec une logique de service durable depuis sa création.`,
  },
  {
    icon: Users2,
    title: "30 collaborateurs",
    description:
      "Un effectif qui mêle expertise informatique, accompagnement projet et profils issus du social et du médico-social.",
  },
  {
    icon: Wrench,
    title: COMPANY_ACTIVITY,
    description:
      "Commercialisation, développement, support, formation, reprise de données et R&D sont portés par la même organisation.",
  },
  {
    icon: Leaf,
    title: "Depuis le 1er janvier 2024",
    description:
      "Une organisation horizontale inspirée du modèle Opale, alignée avec la raison d'être et les valeurs de D2L.",
  },
];

const CompanyStorySection = () => (
  <section id="societe" className="px-4 py-20 md:py-28">
    <div className="mx-auto max-w-6xl section-panel px-6 py-10 md:px-10 md:py-14">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
            Qui sommes-nous
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {COMPANY_NAME}, un éditeur impliqué dans toute la vie du projet
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            « Concevoir un logiciel n&apos;est pas seulement l&apos;exercice de nos compétences
            techniques, mais également la conscience profonde de l&apos;importance qu&apos;il va revêtir
            dans le quotidien des personnes qui vont l&apos;utiliser. »
          </p>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            Créée le {COMPANY_CREATION_DATE}, {COMPANY_NAME} couvre toute la vie de ses outils:
            commercialisation, développement, tests, documentation, mise en œuvre technique, suivi
            de production, accompagnement fonctionnel, reprise de données, formation, conseil et
            R&amp;D.
          </p>
          <div className="surface-card mt-8 rounded-[1.75rem] px-6 py-6">
            <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
              Raison d&apos;être
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground/92">
              <li>Mettre la technologie au service des personnes et non l&apos;inverse.</li>
              <li>S&apos;appuyer sur l&apos;intelligence collective et le travail réellement ensemble.</li>
              <li>Aider les professionnels qui accompagnent quotidiennement les personnes en difficulté.</li>
              <li>Faire vivre des valeurs de respect, solidarité, confiance, responsabilité et honnêteté.</li>
            </ul>
          </div>
        </motion.div>

        <div className="space-y-5">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-card-tint relative overflow-hidden rounded-[1.8rem] px-6 pb-6 pt-8"
          >
            <div className="pointer-events-none absolute inset-x-8 top-0 h-24 rounded-full bg-primary/10 blur-3xl" />
            <img
              src={teamTous}
              alt="Illustration d'une équipe réunie, en écho au travail collectif de D2L Informatique"
              loading="lazy"
              decoding="async"
              width={1600}
              height={954}
              className="relative z-10 mx-auto w-full max-w-md"
            />
          </motion.figure>

          <div className="grid gap-5 sm:grid-cols-2">
            {markers.map((marker) => (
              <article
                key={marker.title}
                className="surface-card rounded-[1.5rem] px-5 py-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <marker.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{marker.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{marker.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="surface-card rounded-[1.75rem] px-6 py-6">
          <h3 className="text-2xl font-bold text-foreground">
            Une organisation alignée avec ses valeurs
          </h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Le 1er janvier 2024, D2L Informatique a fait évoluer son fonctionnement pour mettre fin
            aux hiérarchies classiques et adopter une organisation horizontale. Chacun peut porter
            une initiative, participer à un projet et contribuer à des décisions prises
            collégialement.
          </p>
        </article>

        <article className="surface-card rounded-[1.75rem] px-6 py-6">
          <h3 className="text-2xl font-bold text-foreground">Ce qui nous caractérise</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Le sens du service, l&apos;envie d&apos;apporter des réponses de qualité, simples,
            efficaces et complètes, ainsi qu&apos;un profond respect des clients, de leur métier et de
            chaque membre de l&apos;équipe.
          </p>
        </article>
      </div>
    </div>
  </section>
);

export default CompanyStorySection;
