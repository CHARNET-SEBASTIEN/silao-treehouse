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
      "Centraliser toutes les informations et simplifier la gestion documentaire.",
      "Mettre en place des alertes sur les échéances et les renouvellements.",
      "Gagner du temps sur la rédaction des documents, rapports et circuits de validation.",
    ],
  },
  {
    icon: ClipboardPenLine,
    title: "Équipes éducatives et accompagnement",
    points: [
      "Accéder en un clic au cahier de liaison et à l'agenda.",
      "Recevoir des alertes sur les missions ou suivis choisis.",
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
      "Bénéficier de moyens de communication sécurisés autour du suivi médical.",
    ],
  },
  {
    icon: Smartphone,
    title: "Équipes mobiles",
    points: [
      "Gagner du temps en visite à domicile, en maraude ou en déplacement.",
      "Transmettre et recevoir des informations en temps réel.",
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
      "Suivre les interventions avec alertes dédiées.",
      "Produire des statistiques liées à la gestion locative.",
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
    <div className="mx-auto max-w-6xl section-panel px-6 py-10 md:px-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <p className="marker-label mb-4">Usages par équipe</p>
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
          Bénéfices par métier
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Ce que Silao change pour les{" "}
          <span className="text-primary sketch-underline">équipes</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Chaque usage est pensé pour une réalité terrain précise, de l&apos;administratif à
          l&apos;accompagnement, en passant par les équipes médicales, mobiles, logement, de nuit ou
          d&apos;astreinte.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {teamBenefits.map((item) => (
          <article
            key={item.title}
            className="surface-card rounded-[1.5rem] p-6"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-foreground">{item.title}</h3>
            <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsByTeamSection;
