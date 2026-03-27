import { motion } from "framer-motion";
import { BookText, GraduationCap, LifeBuoy, MessageSquareMore } from "lucide-react";
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
  },
  {
    icon: LifeBuoy,
    title: "Support et contact public",
    description: "Orienter une question, un besoin d'information ou une prise de contact générale.",
    actionLabel: "Ouvrir l'aide",
    href: "/aide-support",
    type: "route" as const,
  },
  {
    icon: GraduationCap,
    title: "Formations et accessibilité",
    description: "Retrouver les modalités de formation et les informations d'accessibilité.",
    actionLabel: "Voir les formations",
    href: "/formations",
    type: "route" as const,
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
          <p className="marker-label mb-4">Entrées de contact</p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Un <span className="text-primary sketch-underline">point d&apos;entrée</span> clair pour chaque demande
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Démonstration, plaquette, support ou formations: l&apos;essentiel est accessible sans détour.
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

        <article className="surface-card mt-4 rounded-[1.5rem] px-6 py-6">
          <h3 className="text-2xl font-bold text-foreground">Accessibilité et contact</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Notre équipe est à l&apos;écoute des besoins particuliers. Chaque situation peut être
            examinée individuellement afin d&apos;envisager les aménagements les plus adaptés.
          </p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Pour commander une formation ou échanger sur les adaptations possibles, écrivez à{" "}
            <strong>{CONTACT_EMAIL}</strong> ou consultez la page formations.
          </p>
        </article>
      </div>
    </section>
  );
};

export default ContactHubSection;
