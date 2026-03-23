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
      "Un dossier organisé par thèmes pour retrouver rapidement données administratives, famille, visites, parcours, informations juridiques et santé.",
  },
  {
    icon: CalendarDays,
    title: "Agenda et planning",
    description:
      "Des événements associés à l'usager, aux services ou aux professionnels, avec vues jour, semaine, mois, service et type d'événement.",
  },
  {
    icon: BookMarked,
    title: "Cahier de liaison",
    description:
      "Un espace de transmissions sous forme de blog, avec brouillons, commentaires, verrouillage automatique et droits d'accès personnalisables.",
  },
  {
    icon: HeartPulse,
    title: "Dossier santé",
    description:
      "Historisation sécurisée des allergies, vaccins, diagnostics et éléments médicaux utiles à la coordination des équipes.",
  },
  {
    icon: FileArchive,
    title: "GED",
    description:
      "Stockage, classement et consultation de tous les documents usagers, avec génération de modèles et de rapports.",
  },
  {
    icon: Users2,
    title: "Annuaire centralisé",
    description:
      "Un annuaire des contacts et organismes pour relier facilement médecins, écoles, juges et partenaires à l'activité.",
  },
  {
    icon: BellRing,
    title: "Alertes",
    description:
      "Des alertes sur les échéances, missions et renouvellements de documents, adaptables en autonomie selon vos pratiques.",
  },
  {
    icon: FolderKanban,
    title: "Pilotage, états et stats",
    description:
      "Des états filtrables, des statistiques par thème et des requêteurs pour produire vos exports et indicateurs d'activité.",
  },
  {
    icon: CreditCard,
    title: "Facturation",
    description:
      "Facturation à partir de l'agenda ou des présences, avec génération possible de factures rétroactives individuelles.",
  },
  {
    icon: Files,
    title: "Services socles et usages métier",
    description:
      "INS, DMP, MSSanté, Pro Santé Connect, budget usager, parc locatif, rappels de rendez-vous et autres modules adaptés au terrain.",
  },
];

const tones = [
  "bg-primary/12 text-primary",
  "bg-secondary/12 text-secondary",
  "bg-accent/90 text-accent-foreground",
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
        <p className="marker-label mb-4">
          Fonctionnalités principales
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Les modules qui structurent le{" "}
          <span className="text-primary sketch-underline">quotidien métier</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Le dossier usager, l&apos;agenda, les transmissions, la GED, les alertes, le pilotage et
          la facturation ont été conçus pour rester lisibles, personnalisables et réellement utiles
          aux équipes.
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
            className="brand-card rounded-[1.5rem] px-5 py-6 transition-transform hover:-translate-y-1"
          >
            <div
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${tones[index % tones.length]}`}
            >
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
