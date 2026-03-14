import { motion } from "framer-motion";
import {
  BellRing,
  BookMarked,
  CalendarDays,
  CreditCard,
  FileArchive,
  Files,
  FolderKanban,
  HeartPulse,
  IdCard,
  Users2,
} from "lucide-react";

const features = [
  {
    icon: IdCard,
    title: "Dossier usager",
    description:
      "Données administratives, éducatives, sociales et historiques de prise en charge dans un référentiel unique.",
  },
  {
    icon: CalendarDays,
    title: "Agenda et planning",
    description:
      "Organisation des rendez-vous, disponibilités, transports et séquences d'accompagnement au même endroit.",
  },
  {
    icon: BookMarked,
    title: "Cahier de liaison",
    description:
      "Transmissions, consignes et continuité d'information entre équipes de jour, de nuit ou mobiles.",
  },
  {
    icon: HeartPulse,
    title: "Dossier santé",
    description:
      "Bilans, compte-rendus, coordination pluridisciplinaire et éléments utiles aux structures à forte composante sanitaire.",
  },
  {
    icon: FileArchive,
    title: "GED",
    description:
      "Gestion électronique de documents avec centralisation, classement et accès maîtrisé aux pièces utiles.",
  },
  {
    icon: Users2,
    title: "Annuaire et coordination",
    description:
      "Contacts, rôles, droits d'accès et lecture partagée des parcours au sein de la structure ou d'une grappe.",
  },
  {
    icon: BellRing,
    title: "Alertes et personnalisation",
    description:
      "Alertes, paramétrages fonctionnels, profils métiers et interface ajustée à vos pratiques de terrain.",
  },
  {
    icon: FolderKanban,
    title: "Pilotage, états et stats",
    description:
      "Suivi d'activité, reporting, listes d'attente, taux d'occupation et indicateurs pour la direction et les financeurs.",
  },
  {
    icon: CreditCard,
    title: "Facturation",
    description:
      "Prise en charge des financeurs et gestion des éléments nécessaires à la facturation usagers ou dispositifs.",
  },
  {
    icon: Files,
    title: "Accompagnement documentaire",
    description:
      "Courriers, dossiers, exports et documents structurés pour sécuriser les échanges et les obligations métier.",
  },
];

const FeaturesSection = () => (
  <section className="relative overflow-hidden px-4 py-20 md:py-28">
    <div className="mx-auto max-w-6xl section-panel px-6 py-10 md:px-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
          Fonctionnalités principales
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Les modules qui structurent le <span className="text-primary sketch-underline">quotidien métier</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Dossier usager, agenda, transmissions, GED, alertes, pilotage et facturation sont pensés
          pour rester lisibles et exploitables par les équipes de terrain.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className="rounded-[1.5rem] border border-border/60 bg-card px-5 py-6 shadow-sm transition-transform hover:-translate-y-1"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <feature.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">{feature.title}</h3>
            <p className="text-sm leading-7 text-muted-foreground">{feature.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
