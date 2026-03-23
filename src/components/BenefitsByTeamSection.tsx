import { motion } from "framer-motion";
import {
  BedDouble,
  BriefcaseBusiness,
  Building2,
  ClipboardPenLine,
  HeartPulse,
  Smartphone,
} from "lucide-react";

const teamBenefits = [
  {
    icon: BriefcaseBusiness,
    title: "Équipes administratives",
    points: [
      "Accéder facilement et rapidement à toutes les informations.",
      "Centraliser les documents et mieux gérer les échéances grâce aux alertes.",
      "Gagner du temps sur la rédaction des documents, rapports et circuits de validation.",
    ],
  },
  {
    icon: ClipboardPenLine,
    title: "Équipes éducatives et accompagnement",
    points: [
      "Accéder en un clic au cahier de liaison et à l'agenda.",
      "Transmettre et recevoir des informations en temps réel.",
      "Gagner en visibilité sur les actions et en temps sur la rédaction des rapports.",
    ],
  },
  {
    icon: HeartPulse,
    title: "Équipes médicales",
    points: [
      "Suivre le dossier médical et le plan de soin.",
      "Consulter les ordonnances et centraliser les informations de santé de l'usager.",
      "Assurer une coordination sécurisée des équipes autour des écrits liés à la santé.",
    ],
  },
  {
    icon: Smartphone,
    title: "Équipes mobiles",
    points: [
      "Gagner du temps en visite à domicile, en maraude ou en déplacement.",
      "Avoir facilement accès au dossier usager et à l'agenda.",
      "Réaliser plus simplement ses écrits et coordonner l'action avec les équipes sur site.",
    ],
  },
  {
    icon: Building2,
    title: "Équipes logement",
    points: [
      "Faciliter la gestion du parc locatif.",
      "Centraliser les informations administratives et financières liées au logement.",
      "Suivre les interventions et produire des statistiques dédiées.",
    ],
  },
  {
    icon: BedDouble,
    title: "Équipes de nuit et d'astreinte",
    points: [
      "Centraliser les informations utiles aux relèves.",
      "Retrouver immédiatement les consignes et situations sensibles.",
      "Réduire les ruptures d'information sur les périodes critiques.",
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
          Ce que SILAO change pour les{" "}
          <span className="text-primary sketch-underline">équipes</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Chaque usage est pensé pour une réalité terrain précise, de l&apos;administratif à
          l&apos;accompagnement, en passant par les équipes médicales, mobiles, logement ou de nuit.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
