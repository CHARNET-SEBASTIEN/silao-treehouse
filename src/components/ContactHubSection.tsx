import { useState } from "react";
import { motion } from "framer-motion";
import { BookText, Briefcase, LifeBuoy, MessageSquareMore } from "lucide-react";
import { Link } from "react-router-dom";

import DemoRequestDialog from "@/components/DemoRequestDialog";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/site";

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
    title: "Partenariat, recrutement, veille",
    description:
      "Préparer un contact autour d'un partenariat, d'un recrutement ou d'une prise de parole plus institutionnelle.",
    actionLabel: "Voir LinkedIn",
    href: LINKEDIN_URL,
    type: "external" as const,
  },
];

const ContactHubSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section id="contacts" className="px-4 py-20 md:py-28 paper-bg">
      <div className="mx-auto max-w-6xl section-panel px-6 py-10 md:px-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
        <p className="marker-label mb-4">Entrées de contact</p>
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
          Contacts
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Un point d&apos;entrée clair pour chaque <span className="text-primary sketch-underline">demande</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Démonstration, support, documentation ou prise de contact institutionnelle: chaque demande
          trouve ici un parcours simple et identifiable.
        </p>
      </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="relative overflow-hidden rounded-[1.5rem] border border-border/70 bg-card px-5 py-6 shadow-sm"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--secondary)))]" />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">{card.title}</h3>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">{card.description}</p>

              {card.type === "dialog" ? (
                <Button variant="hero" size="lg" className="mt-auto w-full" onClick={() => setDemoOpen(true)}>
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

              {card.type === "external" ? (
                <Button asChild variant="hero-outline" size="lg" className="mt-auto w-full">
                  <a href={card.href} target="_blank" rel="noreferrer">
                    {card.actionLabel}
                  </a>
                </Button>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>

      <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
};

export default ContactHubSection;
