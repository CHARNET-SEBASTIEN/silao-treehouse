import { motion } from "framer-motion";
import { BookText, GraduationCap, Mail, MessageSquareMore } from "lucide-react";
import { Link } from "react-router-dom";

import { useDemoRequestDialog } from "@/components/DemoRequestDialogProvider";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/site";

const contactCards = [
  {
    icon: MessageSquareMore,
    title: "Demande de démonstration",
    description: "Présenter Silao sur votre secteur et qualifier le besoin.",
    actionLabel: "Demander une démo",
    type: "dialog" as const,
  },
  {
    icon: BookText,
    title: "Plaquette et ressources",
    description: "Recevoir la plaquette Silao ou consulter les pages utiles avant un échange.",
    actionLabel: "Demander une plaquette",
    href: `mailto:${CONTACT_EMAIL}?subject=Demande%20de%20plaquette%20SILAO`,
    type: "link" as const,
    secondaryLabel: "Voir les ressources",
    secondaryHref: "/ressources",
  },
  {
    icon: GraduationCap,
    title: "Formations et accessibilité",
    description: "Retrouver les modalités de formation et les informations d'accessibilité.",
    actionLabel: "Voir les formations",
    href: "/formations",
    type: "route" as const,
  },
  {
    icon: Mail,
    title: "Contact public",
    description:
      "Pour une question générale, une demande de support ou une orientation vers le bon interlocuteur.",
    actionLabel: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    type: "link" as const,
  },
];

const ContactHubSection = () => {
  const { openDialog } = useDemoRequestDialog();

  return (
    <section id="contacts" className="px-4 py-6 md:py-8 tint-violet">
      <div className="mx-auto max-w-6xl section-panel px-6 py-5 md:px-10 md:py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-5 max-w-3xl text-center"
        >
          <p className="marker-label mb-4">Vous souhaitez nous contacter ?</p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Un <span className="text-primary sketch-underline">point d&apos;entrée</span> clair pour chaque demande
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Démonstration, plaquette, formations ou contact public : un espace de contact adapté à
            chacune de vos questions.
          </p>
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
                <div className="mt-auto flex flex-col gap-3">
                  <Button asChild variant="hero-outline" size="lg" className="h-auto w-full whitespace-normal break-words py-4 text-center">
                    <a href={card.href}>{card.actionLabel}</a>
                  </Button>
                  {"secondaryHref" in card && card.secondaryHref ? (
                    <Link
                      to={card.secondaryHref}
                      className="text-center text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                      {card.secondaryLabel}
                    </Link>
                  ) : null}
                </div>
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
