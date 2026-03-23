import { Link } from "react-router-dom";

import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { getPageSeo } from "@/lib/publicRoutes";
import {
  COMPANY_ADDRESS,
  COMPANY_NAME,
  CONTACT_EMAIL,
  DPO_EMAIL,
  RIGHTS_REQUEST_URL,
  SITE_URL,
} from "@/lib/site";

const seo = getPageSeo("/politique-de-confidentialite");

const retentionRows = [
  {
    purpose: "Répondre à une demande de démonstration, d'information ou de rappel",
    retention: "3 ans à compter du dernier contact émanant de la personne concernée.",
  },
  {
    purpose: "Traiter une demande d'exercice des droits RGPD",
    retention: "5 ans à compter de la clôture de la demande, à des fins de preuve et de suivi.",
  },
];

const rights = [
  "droit d'accès",
  "droit de rectification",
  "droit d'effacement",
  "droit à la limitation du traitement",
  "droit d'opposition, lorsque le traitement repose sur l'intérêt légitime",
  "droit à la portabilité pour les données fournies par la personne concernée, lorsque les conditions légales sont réunies",
];

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
            <div className="space-y-8 text-sm leading-7 text-muted-foreground">
              <p>
                {COMPANY_NAME} veille au respect du règlement (UE) 2016/679 du 27 avril 2016
                relatif à la protection des données personnelles et de la loi Informatique et
                Libertés modifiée. La présente politique décrit les traitements réalisés via le site{" "}
                <a className="text-primary underline underline-offset-4" href={SITE_URL}>
                  {SITE_URL}
                </a>
                .
              </p>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  Responsable du traitement
                </h2>
                <p>{COMPANY_NAME}</p>
                <p>{COMPANY_ADDRESS}</p>
                <p>
                  Pour plus d&apos;informations sur l&apos;éditeur du site, consultez les{" "}
                  <Link className="text-primary underline underline-offset-4" to="/mentions-legales">
                    mentions légales
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">Données collectées</h2>
                <p>
                  Lorsque vous utilisez le formulaire public de demande de démonstration, nous
                  pouvons collecter les catégories de données suivantes :
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>données d&apos;identification : nom, prénom ;</li>
                  <li>données de contact : adresse e-mail professionnelle, téléphone ;</li>
                  <li>données professionnelles : organisation ou établissement ;</li>
                  <li>données de contexte libre : message transmis via le formulaire ;</li>
                  <li>
                    en cas d&apos;exercice de droits, une pièce d&apos;identité peut être demandée si un
                    doute raisonnable subsiste sur l&apos;identité du demandeur.
                  </li>
                </ul>
                <p className="mt-3">
                  Les champs marqués d&apos;un astérisque dans le formulaire sont nécessaires pour
                  traiter votre demande. À défaut, nous pourrions ne pas être en mesure d&apos;y
                  répondre.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  Finalités et bases légales
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-border text-foreground">
                        <th className="px-3 py-3 font-semibold">Finalité</th>
                        <th className="px-3 py-3 font-semibold">Base légale</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/70 align-top">
                        <td className="px-3 py-3">
                          Répondre à une demande de démonstration, d&apos;information ou de rappel
                          envoyée depuis le site.
                        </td>
                        <td className="px-3 py-3">
                          Exécution de mesures précontractuelles prises à votre demande.
                        </td>
                      </tr>
                      <tr className="align-top">
                        <td className="px-3 py-3">
                          Recevoir et traiter une demande liée à l&apos;exercice de vos droits en
                          matière de protection des données.
                        </td>
                        <td className="px-3 py-3">Respect d&apos;une obligation légale.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  Destinataires des données
                </h2>
                <p>
                  Les données sont destinées aux personnes habilitées au sein de {COMPANY_NAME},
                  notamment les équipes commerciales, projet, support ou communication selon la
                  nature de votre demande. Elles peuvent également être transmises à des
                  sous-traitants techniques intervenant pour l&apos;hébergement, la maintenance du site
                  ou la gestion des demandes de droits, strictement dans la limite de leurs
                  attributions.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  Hébergement et transferts hors Union européenne
                </h2>
                <p>
                  Le site est exploité avec une priorité donnée à des prestataires situés dans
                  l&apos;Union européenne. À la date de publication de cette page, le site public SILAO
                  n&apos;utilise pas d&apos;outil d&apos;analyse d&apos;audience ou de publicité impliquant un dépôt
                  de traceurs non essentiels. Si un transfert hors de l&apos;Union européenne devait
                  intervenir à l&apos;avenir, il ne serait réalisé qu&apos;avec un encadrement juridique
                  approprié au sens du RGPD.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  Durées de conservation
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-border text-foreground">
                        <th className="px-3 py-3 font-semibold">Traitement</th>
                        <th className="px-3 py-3 font-semibold">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      {retentionRows.map((row) => (
                        <tr key={row.purpose} className="border-b border-border/70 align-top last:border-0">
                          <td className="px-3 py-3">{row.purpose}</td>
                          <td className="px-3 py-3">{row.retention}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">Sécurité</h2>
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour
                  protéger les données contre toute destruction, perte, altération, divulgation ou
                  accès non autorisé. Cela comprend notamment le chiffrement des échanges via HTTPS
                  et la limitation des accès aux seules personnes habilitées.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">
                  Vos droits et leur exercice
                </h2>
                <p>Vous disposez, selon les cas, des droits suivants :</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  {rights.map((right) => (
                    <li key={right}>{right} ;</li>
                  ))}
                </ul>
                <p className="mt-3">
                  Vous pouvez exercer vos droits :
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>
                    par e-mail à{" "}
                    <a className="text-primary underline underline-offset-4" href={`mailto:${DPO_EMAIL}`}>
                      {DPO_EMAIL}
                    </a>
                    ;
                  </li>
                  <li>
                    via{" "}
                    <a
                      className="text-primary underline underline-offset-4"
                      href={RIGHTS_REQUEST_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      le formulaire de gestion des droits
                    </a>
                    ;
                  </li>
                  <li>par courrier postal à l&apos;adresse du siège social indiquée ci-dessus.</li>
                </ul>
                <p className="mt-3">
                  En cas de doute raisonnable sur votre identité, un justificatif pourra être
                  demandé afin de sécuriser la communication de vos données.
                </p>
                <p className="mt-3">
                  Si vous estimez, après nous avoir contactés, que vos droits ne sont pas
                  respectés, vous pouvez adresser une réclamation à la CNIL.
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">Cookies</h2>
                <p>
                  Le détail du fonctionnement actuel du site en matière de traceurs est disponible
                  dans la{" "}
                  <Link className="text-primary underline underline-offset-4" to="/politique-de-cookies">
                    politique de cookies
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-bold text-foreground">Contact</h2>
                <p>
                  Pour toute question sur cette politique, vous pouvez écrire à{" "}
                  <a className="text-primary underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>{" "}
                  ou à{" "}
                  <a className="text-primary underline underline-offset-4" href={`mailto:${DPO_EMAIL}`}>
                    {DPO_EMAIL}
                  </a>
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

export default PrivacyPolicyPage;
