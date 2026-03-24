import { motion } from "framer-motion";
import {
  Accessibility,
  Headset,
  MonitorSmartphone,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Workflow,
} from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Intuitif",
    description:
      "Une attention particulière a été portée à la convivialité et à la simplicité d'utilisation pour une prise en main rapide.",
  },
  {
    icon: Workflow,
    title: "Évolutif",
    description:
      "Silao s'enrichit au fil des besoins des établissements, en gardant comme ligne de conduite la simplicité et le respect des usages.",
  },
  {
    icon: SlidersHorizontal,
    title: "Personnalisable",
    description:
      "Profils métiers, droits d'accès, listes, arborescences documentaires, tableaux de bord, thèmes et alertes se configurent selon votre organisation.",
  },
  {
    icon: Headset,
    title: "Accompagnement de proximité",
    description:
      "Le déploiement s'adapte à la taille de votre structure, avec un ou deux chefs de projet dédiés pour le paramétrage, la reprise et le suivi.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité",
    description:
      "Solution SaaS, Silao est installée, gérée et mise à jour par nos soins avec hébergement, sauvegardes, maintenance et veille réglementaire.",
  },
  {
    icon: MonitorSmartphone,
    title: "Disponible partout",
    description:
      "Silao est disponible sur ordinateur, tablette et smartphone pour les équipes sur site, en hébergement ou mobiles.",
  },
  {
    icon: Accessibility,
    title: "Expertise métier",
    description:
      "Chaque module est développé avec les clients et enrichi par des profils issus du secteur social et médico-social, au plus près du terrain.",
  },
];

const WhyChooseSection = () => (
  <section id="pourquoi-silao" className="px-4 py-20 md:py-28">
    <div className="mx-auto max-w-6xl section-panel px-6 py-10 md:px-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
          Pourquoi nous choisir
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Sept raisons concrètes de choisir{" "}
          <span className="text-primary sketch-underline">SILAO</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Simplicité d&apos;usage, personnalisation, sécurité, disponibilité sur tous les écrans,
          expertise métier et accompagnement de proximité forment le socle de l&apos;offre SILAO.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {reasons.map((reason, index) => (
          <motion.article
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="rounded-[1.5rem] border border-border/60 bg-card px-5 py-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <reason.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">{reason.title}</h3>
            <p className="text-sm leading-7 text-muted-foreground">{reason.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
