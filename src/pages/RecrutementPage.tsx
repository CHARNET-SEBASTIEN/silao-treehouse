import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Compass,
  HeartHandshake,
  Rocket,
  Send,
} from "lucide-react";

import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { getPageSeo } from "@/lib/publicRoutes";
import { COMPANY_DISPLAY_NAME, CONTACT_EMAIL, PRODUCT_NAME } from "@/lib/site";

const companyValues = [
  {
    icon: HeartHandshake,
    title: "Un impact utile",
    description:
      `Nos équipes travaillent pour des structures où la qualité de coordination a un effet direct sur l'accompagnement des personnes.`,
  },
  {
    icon: Compass,
    title: "De l'autonomie réelle",
    description:
      "Chaque poste laisse de la place à l'initiative, à la prise de recul et à l'amélioration continue des pratiques.",
  },
  {
    icon: Rocket,
    title: "Un produit vivant",
    description:
      `Le terrain nourrit directement l'évolution de ${PRODUCT_NAME}, avec des échanges continus entre projet, formation, support et produit.`,
  },
];

const seo = getPageSeo("/recrutement");

const spontaneousApplyHref =
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Candidature spontanée - ${PRODUCT_NAME}`)}`;

const RecrutementPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <SEOHead {...seo} />
    <Navbar />
    <PageMain className="pt-16">
      <section className="px-4 py-20 paper-bg">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <BriefcaseBusiness className="h-4 w-4" />
            Recrutement {COMPANY_DISPLAY_NAME}
          </div>
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            Rejoindre une équipe qui fait avancer le{" "}
            <span className="text-primary sketch-underline">numérique utile</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            Nous recherchons des profils capables d&apos;allier rigueur, autonomie et sens du terrain
            pour accompagner les professionnels du social et du médico-social avec {PRODUCT_NAME}.
            Aucune annonce n&apos;est ouverte pour le moment : les candidatures spontanées restent
            les bienvenues.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              Télétravail
            </span>
            <span className="rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary">
              Candidatures spontanées
            </span>
            <span className="rounded-full border border-accent/25 bg-accent/90 px-3 py-1.5 text-xs font-semibold text-accent-foreground">
              ESSMS
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {companyValues.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[1.6rem] border border-border/60 bg-card p-8 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <value.icon className="h-5 w-5" />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-foreground">{value.title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">{value.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 paper-bg">
        <div className="mx-auto max-w-4xl section-panel p-8 md:p-10">
          <h2 className="text-3xl font-bold text-foreground">Envoyer une candidature spontanée</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            Vous pouvez nous écrire pour partager votre profil, poser une question ou nous adresser
            une candidature spontanée. Nous relisons chaque message avec attention.
          </p>

          <div className="mt-8 flex flex-col gap-3 lg:flex-row">
            <Button variant="hero" size="xl" className="w-full lg:w-auto" asChild>
              <a href={spontaneousApplyHref}>
                <Send className="h-4 w-4" />
                Envoyer une candidature spontanée
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" className="w-full lg:w-auto" asChild>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <ArrowRight className="h-4 w-4" />
                Nous écrire
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageMain>
    <FooterSection />
  </div>
);

export default RecrutementPage;
