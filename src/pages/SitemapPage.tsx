import { Link } from "react-router-dom";

import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { PUBLIC_ROUTES, getPageSeo } from "@/lib/publicRoutes";

const seo = getPageSeo("/plan-du-site");

const sitemapGroups = [
  {
    title: "Pages principales",
    paths: ["/", "/offres", "/formations", "/abonnement", "/ressources", "/aide-support"],
  },
  {
    title: "Secteurs",
    paths: [
      "/secteur/handicap",
      "/secteur/protection-enfance",
      "/secteur/insertion-ahi",
      "/secteur/personnes-difficultes-specifiques",
    ],
  },
  {
    title: "Expertise SILAO",
    paths: ["/conformite-sons", "/grappes-esms", "/accompagnement", "/engagements", "/quiz-segur"],
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
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            Plan du site <span className="text-primary sketch-underline">SILAO</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            Cette page regroupe l&apos;ensemble des routes publiques du site pour faciliter l&apos;exploration,
            la navigation clavier et l&apos;indexation des contenus réellement ouverts.
          </p>
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
