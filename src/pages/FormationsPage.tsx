import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  CalendarClock,
  GraduationCap,
  Handshake,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useDemoRequestDialog } from "@/components/DemoRequestDialogProvider";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import qualiopiLogo from "@/assets/qualiopi-logo.png";
import { getPageSeo } from "@/lib/publicRoutes";
import { COMPANY_DISPLAY_NAME, CONTACT_EMAIL, PRODUCT_NAME } from "@/lib/site";

const QUALIOPI_URL = "/docs/CertificatQualiopi2025.pdf";

type KeyFigure = {
  value: string;
  label: string;
  logo?: string;
  logoAlt?: string;
  hideValue?: boolean;
  href?: string;
};

const keyFigures: KeyFigure[] = [
  { value: "Temporalité adaptée", label: "pour organiser et réaliser la formation selon vos contraintes" },
  {
    value: "Qualiopi",
    label: "Certification qualité délivrée au titre des actions de formation",
    logo: qualiopiLogo,
    logoAlt: "Logo Qualiopi processus certifié République Française",
    hideValue: true,
    href: QUALIOPI_URL,
  },
  { value: "Sur mesure", label: "Plusieurs formules adaptées aux besoins de vos équipes" },
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
    title: "Une continuité de suivi",
    description:
      "Dans le cadre d'un déploiement, un même interlocuteur peut suivre la phase de paramétrage et la formation pour garder une lecture continue de votre projet.",
  },
];

const orderingSteps = [
  {
    title: "Demande et évaluation du besoin",
    icon: CalendarClock,
    summary:
      "Après réception de votre demande, notre équipe vous contacte pour analyser vos besoins et personnaliser la session de formation.",
  },
  {
    title: "Convention de formation",
    icon: Handshake,
    summary:
      "Une convention est ensuite établie pour cadrer l'organisation de la session.",
  },
  {
    title: "Organisation et accessibilité",
    icon: Accessibility,
    summary:
      "Notre équipe reste à l'écoute des besoins particuliers pour préparer la formation dans les meilleures conditions possibles.",
  },
];

const seo = getPageSeo("/formations");

const FormationsPage = () => {
  const { openDialog } = useDemoRequestDialog();

  return (
    <div className="min-h-screen bg-background paper-grain">
      <SEOHead {...seo} />
      <Navbar />
      <PageMain className="pt-16">
        <section className="px-4 py-20 paper-bg">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <GraduationCap className="h-4 w-4" />
              Formations {PRODUCT_NAME}
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
              Des formations adaptées à vos{" "}
              <span className="text-primary sketch-underline">équipes</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
              Nous proposons plusieurs formules de formation adaptées aux besoins de vos équipes.
              La mise en place et la réalisation des formations peuvent s&apos;effectuer selon une
              temporalité adaptée à vos contraintes.
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
                {!item.hideValue ? (
                  <p className="text-4xl font-bold text-foreground">{item.value}</p>
                ) : null}
                {item.logo ? (
                  <a
                    href={item.href}
                    download={item.href ? "CertificatQualiopi2025.pdf" : undefined}
                    title={item.href ? "Télécharger le certificat Qualiopi (PDF)" : undefined}
                  >
                    <img
                      src={item.logo}
                      alt={item.logoAlt}
                      loading="lazy"
                      className={`mx-auto w-full max-w-[190px] ${item.hideValue ? "" : "mt-4"}`}
                    />
                  </a>
                ) : null}
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    download="CertificatQualiopi2025.pdf"
                    className="mt-3 inline-flex text-sm font-medium text-primary hover:underline underline-offset-4"
                  >
                    Cliquez sur Qualiopi pour télécharger le certificat PDF
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-20 paper-bg">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
              Ce qui distingue l&apos;accompagnement de {COMPANY_DISPLAY_NAME}
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
            <div className="mx-auto mt-8 max-w-4xl rounded-[1.75rem] border border-border/60 bg-card p-8 shadow-sm">
              <p className="text-sm leading-7 text-muted-foreground">
                Chaque situation peut être examinée individuellement afin d&apos;envisager les
                aménagements les plus adaptés.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Pour commander une formation ou échanger sur les adaptations possibles, contactez
                votre chef de projet {PRODUCT_NAME} ou écrivez à <strong>{CONTACT_EMAIL}</strong>.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="xl" onClick={openDialog}>
                  Demander une démonstration
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/offres" className="gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Revenir aux offres
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </PageMain>
      <FooterSection />
    </div>
  );
};

export default FormationsPage;
