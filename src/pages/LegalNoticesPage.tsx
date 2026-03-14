import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { getPageSeo } from "@/lib/publicRoutes";

const seo = getPageSeo("/mentions-legales");

const LegalNoticesPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <SEOHead {...seo} />
    <Navbar />
    <PageMain className="pt-16">
      <section className="px-4 py-20 paper-bg">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            Mentions légales
          </h1>
          <div className="section-panel p-8">
            <p className="text-muted-foreground leading-8">
              Site vitrine SILAO édité par D2L Informatique. Les informations présentées sur cette
              page ont vocation à fournir un socle légal minimal et devront être complétées avec les
              coordonnées juridiques définitives de l&apos;éditeur, de l&apos;hébergeur et du directeur de
              publication avant mise en production.
            </p>
            <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
              <div>
                <h2 className="text-xl font-bold text-foreground">Éditeur</h2>
                <p>D2L Informatique</p>
                <p>Contact public: contact@silao.fr</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Hébergement</h2>
                <p>Le cahier des charges mentionne un hébergement OVH sous responsabilité de D2L Informatique.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Propriété intellectuelle</h2>
                <p>
                  Les contenus, illustrations, marques et éléments visuels du site restent réservés
                  à leurs titulaires respectifs. Toute réutilisation nécessite une autorisation.
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

export default LegalNoticesPage;
