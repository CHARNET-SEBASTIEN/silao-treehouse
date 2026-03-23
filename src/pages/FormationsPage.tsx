import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  Award,
  CalendarClock,
  GraduationCap,
  Handshake,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import DemoRequestDialog from "@/components/DemoRequestDialog";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { getPageSeo } from "@/lib/publicRoutes";
import { CONTACT_EMAIL } from "@/lib/site";

const keyFigures = [
  { value: "1 à 2 mois", label: "pour organiser et réaliser la formation selon vos demandes" },
  { value: "Qualiopi", label: "certification qualité délivrée au titre des actions de formation" },
  { value: "Sur mesure", label: "plusieurs formules adaptées aux besoins de vos équipes" },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Des formations adaptées",
    description:
      "Nous proposons plusieurs formules de formation adaptées aux besoins de vos équipes. Le catalogue de formation peut être demandé à tout moment.",
  },
  {
    icon: Users,
    title: "Une équipe expérimentée",
    description:
      "Les formations sont assurées par une équipe maîtrisant le logiciel, l'accompagnement client et les réalités du secteur social et médico-social.",
  },
  {
    icon: Handshake,
    title: "Un interlocuteur unique",
    description:
      "Dans le cadre d'un déploiement, un même interlocuteur peut suivre la phase de paramétrage et la formation pour garder une lecture continue de votre projet.",
  },
];

const orderingSteps = [
  {
    title: "Demande de formation",
    icon: CalendarClock,
    summary:
      "Après réception de votre demande, un délai minimum d'un mois est nécessaire pour organiser la formation.",
  },
  {
    title: "Évaluation du besoin",
    icon: Handshake,
    summary:
      "Notre équipe vous contacte pour comprendre vos besoins et personnaliser la session de formation.",
  },
  {
    title: "Convention de formation",
    icon: Award,
    summary:
      "Une convention est ensuite établie pour cadrer l'organisation de la session.",
  },
];

const extraPoints = [
  "Notre équipe reste à l'écoute des besoins particuliers pour préparer la formation dans les meilleures conditions possibles.",
  "Des profils variés interviennent dans les formations: anciens professionnels du secteur social et médico-social, chefs de projet et spécialistes de Silao.",
  "Chaque situation de handicap peut être étudiée individuellement afin de proposer la solution la plus adaptée.",
];

const seo = getPageSeo("/formations");

const FormationsPage = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background paper-grain">
      <SEOHead {...seo} />
      <Navbar />
      <PageMain className="pt-16">
        <section className="px-4 py-20 paper-bg">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <GraduationCap className="h-4 w-4" />
              Formations SILAO
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
              Des formations adaptées à vos{" "}
              <span className="text-primary sketch-underline">équipes</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
              Nous proposons plusieurs formules de formation adaptées aux besoins de vos équipes.
              La mise en place et la réalisation des formations peuvent s&apos;effectuer entre un et
              deux mois selon vos demandes.
            </p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {keyFigures.map((item) => (
              <article
                key={item.label}
                className="rounded-[1.5rem] border border-border/60 bg-card p-6 text-center shadow-sm"
              >
                <p className="text-4xl font-bold text-foreground">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-20 paper-bg">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
              Une offre de formation construite pour vos usages
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[1.5rem] border border-border/60 bg-card p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-14 text-center text-3xl font-bold text-foreground md:text-4xl">
              Les modalités de commande
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {orderingSteps.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="sketch-border bg-card p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{step.summary}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 paper-bg">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
              Ce qui distingue l&apos;accompagnement D2L Informatique
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Une continuité de suivi",
                  details:
                    "Dans le cadre des formations liées au projet de déploiement, le même interlocuteur peut suivre votre parcours depuis le paramétrage du logiciel jusqu'à la formation.",
                },
                {
                  title: "Une approche globale",
                  details:
                    "L'équipe D2L Informatique associe expertise en formation, maîtrise du logiciel et connaissance du secteur pour proposer une réponse sur mesure.",
                },
              ].map((program, index) => (
                <motion.article
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-[1.5rem] border border-border/60 bg-card p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{program.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{program.details}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <article className="section-panel p-8">
              <h2 className="mb-5 text-3xl font-bold text-foreground">
                Conditions et organisation
              </h2>
              <ul className="space-y-4 text-sm leading-7 text-muted-foreground">
                {extraPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>

            <article className="section-panel p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Accessibility className="h-5 w-5" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Accessibilité et contact</h2>
              <p className="mb-4 text-sm leading-7 text-muted-foreground">
                Notre équipe est à l&apos;écoute de vos besoins. Chaque situation peut être examinée
                individuellement afin d&apos;envisager les aménagements les plus adaptés.
              </p>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">
                Pour commander une formation ou échanger sur les adaptations possibles, contactez
                votre chef de projet SILAO ou écrivez à <strong>{CONTACT_EMAIL}</strong>.
              </p>
              <div className="flex flex-col gap-3">
                <Button variant="hero" size="xl" onClick={() => setDemoOpen(true)}>
                  Demander une démonstration
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/offres" className="gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Revenir aux offres
                  </Link>
                </Button>
              </div>
            </article>
          </div>
        </section>
      </PageMain>
      <FooterSection />
      <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default FormationsPage;
