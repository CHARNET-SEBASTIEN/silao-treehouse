import { motion } from "framer-motion";
import { BookText, Briefcase, LifeBuoy, MessageSquareMore } from "lucide-react";
import { Link } from "react-router-dom";

import postiereIllustration from "@/assets/illustrations/postiere.webp";
import { useDemoRequestDialog } from "@/components/DemoRequestDialogProvider";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/site";

const contactCards = [
  {
    icon: MessageSquareMore,
    title: "Demande de démonstration",
    description:
      "Présenter SILAO sur votre secteur, qualifier le besoin et préparer le cadrage projet.",
    actionLabel: "Demander une démo",
    type: "dialog" as const,
  },
  {
    icon: LifeBuoy,
    title: "Support et contact public",
    description:
      "Orienter une question, un besoin d'information ou une prise de contact générale sans parcours complexe.",
    actionLabel: "Écrire à l'équipe",
    href: `mailto:${CONTACT_EMAIL}?subject=Demande%20d'information%20SILAO`,
    type: "link" as const,
  },
  {
    icon: BookText,
    title: "Plaquette et ressources",
    description:
      "Accéder au support, aux ressources publiques et aux entrées utiles avant un premier échange.",
    actionLabel: "Ouvrir l'aide",
    href: "/aide-support",
    type: "route" as const,
  },
  {
    icon: Briefcase,
    title: "Actualités D2L Informatique et SILAO",
    description:
      "Suivre les nouveautés produit, la vie de D2L Informatique, les prises de parole et les sujets de veille publiés par l'équipe.",
    actionLabel: "Voir les ressources",
    href: "/ressources",
    type: "route" as const,
  },
];

const ContactHubSection = () => {
  const { openDialog } = useDemoRequestDialog();

  return (
    <section id="contacts" className="px-4 py-20 md:py-28 tint-violet">
      <div className="mx-auto max-w-6xl section-panel px-6 py-10 md:px-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="marker-label mb-4">Entrées de contact</p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Un <span className="text-primary sketch-underline">point d&apos;entrée</span> clair pour chaque demande
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Démonstration, support, documentation ou prise de contact institutionnelle: chaque demande
            trouve ici un parcours simple et identifiable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div className="px-2 py-4 md:px-4 md:py-6">
            <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
              Échanges simplifiés
            </p>
            <h3 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
              Une prise de contact lisible, sans détour inutile
            </h3>
          </div>

          <figure className="relative overflow-hidden px-6 pb-4 pt-6">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-accent/15 blur-3xl" />
            <img
              src={postiereIllustration}
              alt="Illustration symbolisant la circulation des échanges et des messages vers les bons interlocuteurs"
              loading="lazy"
              decoding="async"
              width={1200}
              height={1200}
              className="relative z-10 mx-auto w-full max-w-sm"
            />
          </figure>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="surface-card relative flex h-full flex-col overflow-hidden rounded-[1.5rem] px-5 py-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">{card.title}</h3>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">{card.description}</p>

              {card.type === "dialog" ? (
                <Button variant="hero" size="lg" className="mt-auto w-full" onClick={openDialog}>
                  {card.actionLabel}
                </Button>
              ) : null}

              {card.type === "link" ? (
                <Button asChild variant="hero-outline" size="lg" className="mt-auto w-full">
                  <a href={card.href}>{card.actionLabel}</a>
                </Button>
              ) : null}

              {card.type === "route" ? (
                <Button asChild variant="hero-outline" size="lg" className="mt-auto w-full">
                  <Link to={card.href}>{card.actionLabel}</Link>
                </Button>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHubSection;
