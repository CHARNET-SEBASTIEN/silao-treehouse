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
            <div className="mt-2 space-y-6 text-sm leading-7 text-muted-foreground">
              <div>
                <h2 className="text-xl font-bold text-foreground">Éditeur</h2>
                <p>D2L INFORMATIQUE</p>
                <p>SARL au capital de 21.000 €</p>
                <p>483 422 010 RCS Tours</p>
                <p>Siège social : 9 rue Saint Sébastien, 37330 Marcilly-sur-Maulne</p>
                <p>Directrice de la publication : Mme Laure Morin</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Hébergement</h2>
                <p>OVH SARL</p>
                <p>140 Quai du Sartel, 59100 Roubaix, France</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Informations techniques</h2>
                <p>
                  L&apos;utilisation du site implique la connaissance et l&apos;acceptation des
                  caractéristiques et limites d&apos;internet, notamment en ce qui concerne les
                  performances techniques, les temps de réponse et l&apos;absence de protection absolue
                  contre les risques de détournement ou de contamination.
                </p>
                <p>
                  D2L Informatique ne peut être tenue responsable du mauvais fonctionnement du site
                  pour un navigateur donné et ne garantit pas un fonctionnement sans interruption ni
                  l&apos;absence totale d&apos;erreur informatique.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Liens hypertextes</h2>
                <p>
                  La création de liens hypertextes vers le site www.silao.fr est soumise à
                  l&apos;accord préalable de la directrice de publication.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Propriété intellectuelle</h2>
                <p>
                  D2L Informatique est seule titulaire des droits d&apos;auteur sur le contenu du site
                  www.silao.fr. Toute reproduction ou représentation, totale ou partielle, faite
                  sans son consentement constitue une contrefaçon pénalement sanctionnée.
                </p>
                <p>
                  D2L Informatique est également titulaire des droits sur le logo Silao. Toute
                  reproduction totale ou partielle du logo sans consentement constitue une
                  contrefaçon pénalement sanctionnée.
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
