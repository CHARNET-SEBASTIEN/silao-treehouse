import { Link } from "react-router-dom";

import voyageurIllustration from "@/assets/illustrations/voyageur.png";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { PUBLIC_ROUTES, getPageSeo } from "@/lib/publicRoutes";

const seo = getPageSeo("/plan-du-site");

const sitemapGroups = [
  {
    title: "Pages principales",
    paths: ["/", "/offres", "/formations", "/abonnement", "/ressources"],
  },
  {
    title: "Secteurs",
    paths: [
      "/secteur/handicap",
      "/secteur/camsp-cmpp",
      "/secteur/protection-enfance",
      "/secteur/insertion-ahi",
      "/secteur/personnes-difficultes-specifiques",
    ],
  },
  {
    title: "Expertise Silao",
    paths: ["/conformite-sons", "/grappes-esms", "/accompagnement", "/engagements"],
  },
  {
    title: "Informations pratiques",
    paths: [
      "/mentions-legales",
      "/politique-de-confidentialite",
      "/politique-de-cookies",
      "/plan-du-site",
    ],
  },
];

const SitemapPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <SEOHead {...seo} />
    <Navbar />
    <PageMain className="pt-16">
      <section className="px-4 py-20 paper-bg">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
              Plan du site <span className="text-primary sketch-underline">Silao</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground lg:mx-0">
              Cette page regroupe l&apos;ensemble des routes publiques du site pour faciliter l&apos;exploration,
              la navigation clavier et l&apos;indexation des contenus réellement ouverts.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                Navigation rapide
              </span>
              <span className="rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary">
                Vue d&apos;ensemble
              </span>
              <span className="rounded-full border border-accent/25 bg-accent/90 px-3 py-1.5 text-xs font-semibold text-accent-foreground">
                Routes publiques
              </span>
            </div>
          </div>

          <figure className="relative overflow-hidden px-6 pb-4 pt-6">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-secondary/15 blur-3xl" />
            <img
              src={voyageurIllustration}
              alt="Illustration symbolisant le repérage et l'orientation dans les pages du site"
              loading="lazy"
              className="relative z-10 mx-auto w-full max-w-xs"
            />
          </figure>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {sitemapGroups.map((group) => (
            <section key={group.title} className="section-panel p-6">
              <h2 className="mb-4 text-2xl font-bold text-foreground">{group.title}</h2>
              <ul className="space-y-3">
                {group.paths.map((path) => {
                  const page = PUBLIC_ROUTES.find((route) => route.path === path);
                  if (!page) return null;

                  return (
                    <li key={path}>
                      <Link className="text-primary underline underline-offset-4" to={path}>
                        {page.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </PageMain>
    <FooterSection />
  </div>
);

export default SitemapPage;
