import { Link } from "react-router-dom";

import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { getPageSeo } from "@/lib/publicRoutes";
import { SITE_URL } from "@/lib/site";

const seo = getPageSeo("/politique-de-cookies");

const CookiePolicyPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <SEOHead {...seo} />
    <Navbar />
    <PageMain className="pt-16">
      <section className="px-4 py-20 paper-bg">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            Politique de cookies
          </h1>
          <div className="section-panel p-8">
            <div className="space-y-8 text-sm leading-7 text-muted-foreground">
              <p>
                Cette page décrit l&apos;usage actuel des cookies et autres traceurs sur le site{" "}
                <a className="text-primary underline underline-offset-4" href={SITE_URL}>
                  {SITE_URL}
                </a>
                .
              </p>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  État actuel du site
                </h2>
                <p>
                  À la date de publication de cette page, le site public SILAO n&apos;utilise pas de
                  traceur publicitaire, de cookie de personnalisation ou d&apos;outil de mesure
                  d&apos;audience nécessitant votre consentement préalable.
                </p>
                <p className="mt-3">
                  En conséquence, aucun bandeau de consentement n&apos;est affiché tant qu&apos;aucun
                  traceur non essentiel n&apos;est activé sur le site.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  Cookies strictement nécessaires
                </h2>
                <p>
                  Certains composants techniques peuvent, si une fonctionnalité interactive le
                  requiert, utiliser un stockage local strictement nécessaire au service demandé par
                  l&apos;utilisateur. Ces mécanismes ne sont pas utilisés à des fins publicitaires et ne
                  servent pas à suivre la navigation sur d&apos;autres sites.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  Évolution du site
                </h2>
                <p>
                  Si des cookies de statistiques, de personnalisation ou des contenus tiers
                  nécessitant un consentement étaient ajoutés à l&apos;avenir, cette politique serait
                  mise à jour et un dispositif de recueil du consentement serait activé avec un
                  refus aussi simple que l&apos;acceptation.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  Paramétrage du navigateur
                </h2>
                <p>
                  Vous pouvez également configurer votre navigateur pour bloquer ou supprimer les
                  cookies. Ce paramétrage peut toutefois dégrader certaines fonctionnalités strictement
                  nécessaires au fonctionnement de certains sites.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  En savoir plus
                </h2>
                <p>
                  Pour toute question relative au traitement de vos données personnelles, consultez
                  la{" "}
                  <Link
                    className="text-primary underline underline-offset-4"
                    to="/politique-de-confidentialite"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageMain>
    <FooterSection />
  </div>
);

export default CookiePolicyPage;
