import { motion } from "framer-motion";
import {
  BedDouble,
  BriefcaseBusiness,
  ClipboardPenLine,
  HeartPulse,
  Smartphone,
} from "lucide-react";

const teamBenefits = [
  {
    icon: BriefcaseBusiness,
    title: "Administratif",
    points: [
      "Dossier administratif unifié et documents centralisés.",
      "Suivi des financeurs, états, statistiques et facturation.",
      "Moins de doubles saisies et de tableaux dispersés.",
    ],
  },
  {
    icon: ClipboardPenLine,
    title: "Accompagnement",
    points: [
      "Projets personnalisés, transmissions et rendez-vous dans le même outil.",
      "Historique exploitable sans dépendre d'un classeur local ou d'un oral.",
      "Vision claire du parcours usager et des actions en cours.",
    ],
  },
  {
    icon: HeartPulse,
    title: "Médical et paramédical",
    points: [
      "Dossier santé, bilans, comptes rendus et coordination pluridisciplinaire.",
      "Traçabilité renforcée pour les structures à forte composante sanitaire.",
      "Interopérabilité et exigences Ségur intégrées à l'approche produit.",
    ],
  },
  {
    icon: Smartphone,
    title: "Équipes mobiles",
    points: [
      "Usage terrain sur tablette et téléphone.",
      "Alertes, cahier de liaison et accès rapide aux informations utiles.",
      "Continuité de service sans installation locale lourde.",
    ],
  },
  {
    icon: BedDouble,
    title: "Équipes de nuit",
    points: [
      "Transmissions lisibles et immédiates entre relèves.",
      "Accès rapide aux situations sensibles et consignes actives.",
      "Moins de rupture d'information sur les périodes critiques.",
    ],
  },
];

const BenefitsByTeamSection = () => (
  <section className="px-4 py-20 md:py-28 paper-bg">
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
          Bénéfices par métier
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Ce que SILAO change pour les <span className="text-primary sketch-underline">équipes</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Chaque usage est pensé pour répondre à une réalité terrain précise, de l&apos;administratif
          aux équipes mobiles en passant par les professionnels de santé.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {teamBenefits.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="sketch-border bg-card p-6"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-foreground">{item.title}</h3>
            <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsByTeamSection;
