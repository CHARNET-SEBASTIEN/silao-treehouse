import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { getPageSeo } from "@/lib/publicRoutes";

const seo = getPageSeo("/politique-de-confidentialite");

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <SEOHead {...seo} />
    <Navbar />
    <PageMain className="pt-16">
      <section className="px-4 py-20 paper-bg">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            Politique de confidentialité
          </h1>
          <div className="section-panel p-8">
            <p className="text-muted-foreground leading-8">
              Cette page formalise le cadre général de traitement des données collectées depuis les
              formulaires publics du site SILAO. Elle doit être complétée avec les informations
              juridiques définitives avant publication.
            </p>
            <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
              <div>
                <h2 className="text-xl font-bold text-foreground">Données collectées</h2>
                <p>
                  Les formulaires publics peuvent recueillir des données d&apos;identité, de contact,
                  d&apos;organisation et de qualification projet afin de répondre à une demande.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Finalités</h2>
                <p>
                  Réponse aux demandes de démonstration, de support, d&apos;information, d&apos;envoi de
                  documentation ou d&apos;orientation projet.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Durée et droits</h2>
                <p>
                  Les durées de conservation, la base légale et les modalités d&apos;exercice des droits
                  RGPD doivent être précisées avec le référent conformité de D2L Informatique.
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

export default PrivacyPolicyPage;
