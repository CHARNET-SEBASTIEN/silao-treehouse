import { LifeBuoy, Mail, BookOpenText, Rocket, Brain } from "lucide-react";
import { Link } from "react-router-dom";

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
    description: "Retrouvez les contenus de cadrage DUI, conformité SONS et déploiement.",
    to: "/ressources",
    icon: BookOpenText,
  },
  {
    title: "Préparer un projet",
    description: "Consultez les offres de déploiement et l'accompagnement associé.",
    to: "/offres",
    icon: Rocket,
  },
  {
    title: "Évaluer vos connaissances",
    description: "Utilisez le quiz Ségur pour identifier les notions à clarifier.",
    to: "/quiz-segur",
    icon: Brain,
  },
];

const HelpSupportPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <SEOHead {...seo} />
    <Navbar />
    <PageMain className="pt-16">
      <section className="px-4 py-20 paper-bg">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <LifeBuoy className="h-4 w-4" />
            Aide et support
          </div>
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            Besoin d&apos;aide pour votre projet <span className="text-primary sketch-underline">SILAO</span> ?
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            Cette page regroupe les accès utiles pour orienter un projet DUI, retrouver les contenus
            publics du site et joindre l&apos;équipe SILAO sans passer par un parcours opaque.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <article className="section-panel p-8">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Contacter l&apos;équipe</h2>
            <p className="mb-6 text-muted-foreground">
              Pour une question produit, un besoin de cadrage ou une demande de démonstration, le
              point de contact public actuellement disponible est l&apos;e-mail ci-dessous.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-left text-foreground"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span>
                <span className="block text-sm text-muted-foreground">Contact public</span>
                <span className="font-semibold">{CONTACT_EMAIL}</span>
              </span>
            </a>
          </article>

          <aside className="section-panel p-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Avant de nous écrire</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>Précisez votre type de structure ou votre secteur d&apos;activité.</li>
              <li>Indiquez si la demande concerne le déploiement, la conformité ou l&apos;usage.</li>
              <li>Ajoutez le nombre d&apos;établissements concernés si le projet est multi-sites.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-4 py-16 paper-bg">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-3xl font-bold text-foreground">
            Parcours utiles <span className="text-primary sketch-underline">depuis le support</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {supportLinks.map((item) => (
              <article key={item.to} className="section-panel p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mb-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                <Button asChild variant="hero-outline" size="lg" className="w-full">
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

export default HelpSupportPage;
