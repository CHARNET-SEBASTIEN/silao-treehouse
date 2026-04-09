import { Link } from "react-router-dom";

import magicienneClesIllustration from "@/assets/illustrations/magicienne-cles.png";
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
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
                Politique de cookies
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                Cette page décrit les traceurs utilisés sur le site public Silao, le bandeau de
                choix et le fonctionnement du mode de consentement Google (Consent Mode).
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                  Google Ads (balise AW)
                </span>
                <span className="rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary">
                  Consent Mode v2
                </span>
                <span className="rounded-full border border-accent/25 bg-accent/90 px-3 py-1.5 text-xs font-semibold text-accent-foreground">
                  Refus aussi simple qu&apos;accepter
                </span>
              </div>
            </div>

            <figure className="relative overflow-hidden px-6 pb-3 pt-6">
              <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-primary/15 blur-3xl" />
              <img
                src={magicienneClesIllustration}
                alt="Illustration symbolisant le contrôle des accès et l'activation encadrée des traceurs"
                loading="lazy"
                className="relative z-10 mx-auto w-full max-w-xs"
              />
            </figure>
          </div>

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
                <h2 className="mb-2 text-xl font-bold text-foreground">Bandeau et choix</h2>
                <p>
                  Lors de votre première visite, un bandeau vous permet d&apos;accepter ou de refuser
                  les cookies et traceurs liés à la publicité et à la mesure d&apos;audience
                  (catégories couvertes par le mode de consentement Google). Le refus est proposé
                  avec le même degré de simplicité que l&apos;acceptation. Vous pouvez modifier votre
                  choix à tout moment via le lien « Choix cookies » en pied de page.
                </p>
                <p className="mt-3">
                  Votre décision est mémorisée localement dans votre navigateur (clé{" "}
                  <span className="font-mono text-xs text-foreground">silao-cookie-consent</span>
                  ).
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  Balise Google Ads et mode de consentement
                </h2>
                <p>
                  Le site charge la balise Google (gtag.js) associée à l&apos;identifiant{" "}
                  <span className="font-mono text-xs text-foreground">AW-18069760229</span>, fournie
                  par Google Ireland Limited dans le cadre de Google Ads. Avant tout accord de votre
                  part, le <strong className="text-foreground">mode de consentement</strong> (Consent
                  Mode) est configuré par défaut de façon à ne pas activer le stockage publicitaire ni
                  la personnalisation des annonces. Si vous acceptez, une mise à jour du consentement
                  est envoyée à Google pour autoriser ces finalités conformément à votre choix.
                </p>
                <p className="mt-3">
                  Pour en savoir plus sur la manière dont Google traite les données :{" "}
                  <a
                    className="text-primary underline underline-offset-4"
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Règles de confidentialité Google
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  Cookies strictement nécessaires
                </h2>
                <p>
                  Certains composants techniques peuvent, si une fonctionnalité interactive le
                  requiert, utiliser un stockage local strictement nécessaire au service demandé par
                  l&apos;utilisateur (par exemple mémorisation du thème d&apos;affichage). Ces
                  mécanismes ne sont pas utilisés à des fins publicitaires et ne servent pas à suivre
                  la navigation sur d&apos;autres sites.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">Évolution du site</h2>
                <p>
                  Si d&apos;autres traceurs ou partenaires techniques étaient ajoutés, cette politique
                  serait mise à jour et, le cas échéant, le bandeau ou les options de gestion du
                  consentement adaptés pour que vous restiez informé et puissiez exercer votre choix.
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
