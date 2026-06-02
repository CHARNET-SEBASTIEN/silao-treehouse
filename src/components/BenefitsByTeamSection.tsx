import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  ClipboardPenLine,
  ClipboardList,
  HeartPulse,
} from "lucide-react";

const teamBenefits = [
  {
    icon: BriefcaseBusiness,
    title: "Administratif",
    summary:
      "Centraliser les dossiers, documents, échéances et renouvellements dans un même espace.",
  },
  {
    icon: ClipboardPenLine,
    title: "Accompagnement",
    summary:
      "Partager les transmissions, suivre les actions et garder une vision claire du quotidien.",
  },
  {
    icon: HeartPulse,
    title: "Santé",
    summary:
      "Retrouver les informations médicales utiles et sécuriser la coordination autour du soin.",
  },
  {
    icon: ClipboardList,
    title: "Encadrement",
    summary:
      "Piloter l'activité, repérer les points de vigilance et partager une lecture commune.",
  },
];

const BenefitsByTeamSection = () => (
  <section className="px-4 py-6 md:py-8 tint-secondary">
    <div className="mx-auto max-w-6xl section-panel px-6 py-5 md:px-10 md:py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-5 max-w-3xl text-center"
      >
        <p className="marker-label mb-4">Usages par équipe</p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Des bénéfices lisibles pour chaque{" "}
          <span className="text-primary sketch-underline">équipe</span>
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
          Direction, administratif, accompagnement ou santé : chacun retrouve les informations utiles
          à son rôle, sans multiplier les outils.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {teamBenefits.map((item) => (
          <article
            key={item.title}
            className="surface-card rounded-[1.5rem] p-5"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">{item.title}</h3>
            <p className="text-sm leading-7 text-muted-foreground">{item.summary}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsByTeamSection;
