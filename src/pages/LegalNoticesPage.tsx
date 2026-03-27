import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { getPageSeo } from "@/lib/publicRoutes";
import {
  COMPANY_ADDRESS,
  COMPANY_ACTIVITY,
  COMPANY_CREATION_DATE,
  COMPANY_LEGAL_FORM,
  COMPANY_LEGAL_NAME,
  COMPANY_NAME,
  COMPANY_RCS,
  COMPANY_SHARE_CAPITAL,
  CONTACT_EMAIL,
  DPO_EMAIL,
  HOSTING_ADDRESS,
  HOSTING_PROVIDER,
  LEGAL_REPRESENTATIVE,
  RIGHTS_REQUEST_URL,
  SITE_URL,
} from "@/lib/site";

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
                <p>{COMPANY_LEGAL_NAME}</p>
                <p>
                  {COMPANY_LEGAL_FORM} au capital de {COMPANY_SHARE_CAPITAL}
                </p>
                <p>{COMPANY_RCS}</p>
                <p>Activité : {COMPANY_ACTIVITY}</p>
                <p>Siège social : {COMPANY_ADDRESS}</p>
                <p>Création : {COMPANY_CREATION_DATE}</p>
                <p>Représentant légal : {LEGAL_REPRESENTATIVE}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Hébergement</h2>
                <p>{HOSTING_PROVIDER}</p>
                <p>{HOSTING_ADDRESS}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Contact</h2>
                <p>
                  Vous pouvez nous écrire à <a className="text-primary underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
                <p>
                  Pour toute question relative à la protection des données personnelles, vous pouvez
                  également contacter notre référent RGPD à l&apos;adresse{" "}
                  <a className="text-primary underline underline-offset-4" href={`mailto:${DPO_EMAIL}`}>{DPO_EMAIL}</a>.
                </p>
                <p>
                  L&apos;exercice des droits peut aussi être effectué depuis{" "}
                  <a
                    className="text-primary underline underline-offset-4"
                    href={RIGHTS_REQUEST_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    notre formulaire dédié
                  </a>
                  .
                </p>
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
                  La création de liens hypertextes vers le site {SITE_URL} est soumise à
                  l&apos;accord préalable de {LEGAL_REPRESENTATIVE}.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Propriété intellectuelle</h2>
                <p>
                  {COMPANY_NAME} est seule titulaire des droits d&apos;auteur sur le contenu du site.
                  Toute reproduction ou représentation, totale ou partielle, faite
                  sans son consentement constitue une contrefaçon pénalement sanctionnée.
                </p>
                <p>
                  {COMPANY_NAME} est également titulaire des droits sur le logo Silao. Toute
                  reproduction totale ou partielle du logo sans consentement constitue une
                  contrefaçon pénalement sanctionnée.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Données personnelles</h2>
                <p>
                  Les informations relatives aux traitements de données à caractère personnel
                  réalisés depuis le site sont détaillées dans la politique de confidentialité.
                </p>
                <p>
                  Le site public Silao n&apos;embarque à ce jour aucun outil d&apos;analyse ou de publicité
                  nécessitant le recueil préalable du consentement. Les informations à jour sont
                  précisées dans la politique de cookies.
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
