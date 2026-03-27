import { BookOpenText, Brain, FileText, GraduationCap, LifeBuoy, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

import postiereIllustration from "@/assets/illustrations/postiere.webp";
import { useDemoRequestDialog } from "@/components/DemoRequestDialogProvider";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { getPageSeo } from "@/lib/publicRoutes";
import { CONTACT_EMAIL } from "@/lib/site";

const seo = getPageSeo("/aide-support");

const supportLinks = [
  {
    title: "Découvrir les ressources",
    description: "Guides, repères réglementaires et exemples par secteur.",
    to: "/ressources",
    icon: BookOpenText,
  },
  {
    title: "Préparer un projet",
    description: "Offres de déploiement, accompagnement et méthodologie projet.",
    to: "/offres",
    icon: Rocket,
  },
  {
    title: "Consulter les formations",
    description: "Formules adaptées aux équipes, Qualiopi, accessibilité et organisation sur mesure.",
    to: "/formations",
    icon: GraduationCap,
  },
  {
    title: "Approfondir le cadre réglementaire",
    description: "Conformité SONS, interopérabilité et éléments de cadrage utiles aux équipes.",
    to: "/conformite-sons",
    icon: Brain,
  },
];

const HelpSupportPage = () => {
  const { openDialog } = useDemoRequestDialog();

  return (
    <div className="min-h-screen bg-background paper-grain">
      <SEOHead {...seo} />
      <Navbar />
      <PageMain className="pt-16">
        <section className="px-4 py-20 paper-bg">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
                <LifeBuoy className="h-4 w-4" />
                Aide, support et contacts
              </div>
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
                Démonstration, support et documentation dans un même <span className="text-primary sketch-underline">espace de contact</span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground lg:mx-0">
                Retrouvez les accès utiles pour contacter l&apos;équipe, préparer un projet Silao ou
                demander des informations complémentaires.
              </p>
            </div>

            <figure className="relative overflow-hidden px-6 pb-4 pt-6">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-24 rounded-full bg-accent/15 blur-3xl" />
              <img
                src={postiereIllustration}
                alt="Illustration symbolisant l'orientation des demandes vers les bons interlocuteurs"
                loading="lazy"
                decoding="async"
                width={1200}
                height={1200}
                className="relative z-10 mx-auto w-full max-w-sm"
              />
            </figure>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            <article className="section-panel flex h-full flex-col p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Demande de démonstration</h2>
              <p className="mb-6 text-muted-foreground">
                Pour qualifier un projet, identifier le secteur concerné et organiser une présentation ciblée de Silao.
              </p>
              <Button variant="hero" size="lg" className="mt-auto w-full" onClick={openDialog}>
                Demander une démo
              </Button>
            </article>

            <article className="section-panel flex h-full flex-col p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Contact public</h2>
              <p className="mb-6 text-muted-foreground">
                Pour une question générale, une demande de support ou une orientation vers le bon interlocuteur.
              </p>
              <Button asChild variant="hero-outline" size="lg" className="mt-auto w-full">
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </Button>
            </article>

            <article className="section-panel flex h-full flex-col p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Plaquette et ressources</h2>
              <p className="mb-6 text-muted-foreground">
                Pour demander une présentation synthétique et accéder aux contenus publics Silao.
              </p>
              <div className="mt-auto flex flex-col gap-3">
                <Button asChild variant="hero-outline" size="lg">
                  <a href={`mailto:${CONTACT_EMAIL}?subject=Demande%20de%20plaquette%20SILAO`}>
                    <FileText className="mr-2 h-4 w-4" />
                    Demander une plaquette
                  </a>
                </Button>
                <Button asChild variant="hero-outline" size="lg">
                  <Link to="/ressources">Voir les ressources</Link>
                </Button>
              </div>
            </article>
          </div>
        </section>

        <section className="px-4 py-16 paper-bg">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-3xl font-bold text-foreground">
              Ressources utiles pour aller <span className="text-primary sketch-underline">plus loin</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {supportLinks.map((item) => (
                <article key={item.to} className="section-panel flex h-full flex-col p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mb-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  <Button asChild variant="hero-outline" size="lg" className="mt-auto w-full">
                    <Link to={item.to}>Ouvrir la page</Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </PageMain>
      <FooterSection />
    </div>
  );
};

export default HelpSupportPage;
