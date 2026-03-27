import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { getPageSeo } from "@/lib/publicRoutes";

const NotFound = () => {
  const location = useLocation();
  const seo = getPageSeo("/404");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background paper-grain">
      <SEOHead {...seo} />
      <Navbar />
      <PageMain className="px-4 pb-20 pt-24">
        <section className="mx-auto max-w-3xl section-panel px-6 py-12 text-center md:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Erreur 404
          </p>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Cette page est introuvable
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            L&apos;adresse <strong className="text-foreground">{location.pathname}</strong> ne correspond
            à aucune page publique Silao.
          </p>
          <nav
            aria-label="Liens de secours"
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
          >
            <Link className="text-primary underline underline-offset-4" to="/">
              Revenir à l&apos;accueil
            </Link>
            <Link className="text-primary underline underline-offset-4" to="/plan-du-site">
              Consulter le plan du site
            </Link>
            <Link className="text-primary underline underline-offset-4" to="/aide-support">
              Ouvrir l&apos;aide et le support
            </Link>
          </nav>
        </section>
      </PageMain>
      <FooterSection />
    </div>
  );
};

export default NotFound;
