import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type SectorFaqId = "pde" | "ph" | "ahi" | "pds";

interface SectorFaqItem {
  question: string;
  answerText: string;
  answer: JSX.Element;
  links: { to: string; label: string }[];
}

const sectorFaqs: Record<SectorFaqId, SectorFaqItem[]> = {
  pde: [
    {
      question:
        "Quel logiciel de protection de l'enfance choisir pour une MECS, une AEMO ou l'accueil familial ?",
      answerText:
        "Un logiciel de protection de l'enfance pertinent doit s'adapter aux réalités de la MECS, de l'AEMO, de l'accueil familial ou du milieu ouvert, avec des droits d'accès fins, des écrits partagés, un suivi du parcours et des fonctionnalités adaptées aux situations familiales.",
      answer: (
        <>
          <p>
            En protection de l&apos;enfance, les besoins varient fortement selon le type
            d&apos;accompagnement. Un outil utile doit couvrir l&apos;hébergement, le milieu ouvert, les
            fratries, les accueils et les circuits documentaires propres au secteur.
          </p>
          <p className="mt-3">
            Le bon choix repose surtout sur l&apos;adéquation au terrain\u00a0: confidentialité,
            coordination éducative, suivi des parcours et qualité des écrits.
          </p>
        </>
      ),
      links: [
        { to: "/offres", label: "Voir l'offre de déploiement" },
        { to: "/accompagnement", label: "Voir l'accompagnement projet" },
      ],
    },
    {
      question:
        "Un DUI protection de l'enfance peut-il gérer les fratries, les présences et l'argent de poche ?",
      answerText:
        "Oui, un DUI orienté protection de l'enfance peut structurer les liens entre fratries, suivre les présences, historiser les accueils et gérer certains besoins de la vie quotidienne comme l'argent de poche ou l'habillement selon l'organisation retenue.",
      answer: (
        <>
          <p>
            Ces sujets paraissent opérationnels, mais ils pèsent fortement dans la qualité du suivi
            quotidien. Quand ils restent dispersés entre plusieurs outils, les équipes perdent en
            visibilité et en traçabilité.
          </p>
          <p className="mt-3">
            Un DUI sectoriel doit permettre de retrouver ces informations rapidement, sans casser le
            lien entre vie quotidienne, écrits professionnels et pilotage.
          </p>
        </>
      ),
      links: [
        { to: "/offres", label: "Voir la reprise de besoins métier" },
        { to: "/formations", label: "Voir la formation des équipes" },
      ],
    },
    {
      question: "Comment renforcer la confidentialité dans un logiciel de protection de l'enfance ?",
      answerText:
        "La confidentialité en protection de l'enfance repose sur des habilitations précises, une traçabilité des accès, des circuits documentaires maîtrisés et une organisation claire des informations sensibles. Le logiciel doit soutenir ces règles plutôt que les contourner.",
      answer: (
        <>
          <p>
            Dans ce secteur, toutes les informations ne doivent pas être visibles par tous. Les
            droits d&apos;accès, les rôles, les historiques et les règles de partage sont donc des
            critères structurants, pas des options secondaires.
          </p>
          <p className="mt-3">
            Le cadre organisationnel reste essentiel, mais il doit être porté par un outil capable
            de l&apos;appliquer proprement au quotidien.
          </p>
        </>
      ),
      links: [
        { to: "/engagements", label: "Voir les engagements sécurité" },
        { to: "/conformite-sons", label: "Voir les sujets d'interopérabilité" },
      ],
    },
    {
      question:
        "Pourquoi un agenda et un cahier de liaison restent-ils centraux dans un DUI protection de l'enfance ?",
      answerText:
        "Parce qu'ils structurent la coordination quotidienne, la transmission d'information utile et le suivi des accompagnements. En protection de l'enfance, agenda et cahier de liaison sont souvent les deux points d'entrée les plus utilisés par les équipes.",
      answer: (
        <>
          <p>
            Les équipes ont besoin d&apos;un repère simple pour savoir quoi faire, quoi transmettre et
            ce qui a déjà été réalisé. L&apos;agenda donne la vue d&apos;action\u00a0; le cahier de liaison donne la
            continuité des écrits.
          </p>
          <p className="mt-3">
            Quand ces deux briques sont bien intégrées au DUI, la circulation de l&apos;information
            devient beaucoup plus lisible.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir les fonctionnalités liées" },
        { to: "/ressources", label: "Revenir aux ressources DUI" },
      ],
    },
  ],
  ph: [
    {
      question:
        "Quel logiciel médico-social choisir pour un IME, un SESSAD, une MAS ou un FAM ?",
      answerText:
        "Le bon logiciel médico-social dépend des parcours couverts, de l'organisation pluridisciplinaire, des besoins d'agenda, de projet personnalisé, de dossier santé et de reporting. Une structure avec hébergement n'a pas exactement les mêmes priorités qu'un service ambulatoire ou un SESSAD.",
      answer: (
        <>
          <p>
            Derrière la même étiquette de logiciel médico-social, les besoins diffèrent beaucoup
            entre IME, SESSAD, MAS, FAM, CAMSP ou CMPP. Le périmètre de suivi, les rythmes de prise
            en charge et les interlocuteurs ne sont pas les mêmes.
          </p>
          <p className="mt-3">
            Il faut donc regarder les usages réels\u00a0: agenda, attentes, santé, coordination,
            transports, documents et indicateurs.
          </p>
        </>
      ),
      links: [
        { to: "/offres", label: "Voir la méthode de déploiement" },
        { to: "/formations", label: "Voir la formation" },
      ],
    },
    {
      question:
        "Comment gérer la MDPH, les attentes et l'agenda dans un DUI pour le handicap ?",
      answerText:
        "Un DUI handicap doit aider à suivre les démarches MDPH, les listes d'attente, les rendez-vous, les transports et les ressources mobilisées. L'objectif est de lier l'administratif, le thérapeutique et l'organisationnel dans un même cadre.",
      answer: (
        <>
          <p>
            Dans beaucoup de structures PH, l&apos;enjeu n&apos;est pas seulement de stocker des données,
            mais d&apos;orchestrer une activité complexe\u00a0: attentes, bilans, notifications, plages
            horaires, transports et coordination entre intervenants.
          </p>
          <p className="mt-3">
            Le DUI devient utile quand il relie ces dimensions au lieu de les disperser dans des
            fichiers séparés.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir les fonctionnalités utiles" },
        { to: "/accompagnement", label: "Voir l'accompagnement projet" },
      ],
    },
    {
      question: "Un DUI médico-social peut-il aussi convenir à un CAMSP ou à un CMPP ?",
      answerText:
        "Oui, à condition qu'il gère correctement les suivis ambulatoires, les bilans, les attentes, l'agenda, les rapports et la coordination pluridisciplinaire. Les structures comme les CAMSP et les CMPP ont des besoins spécifiques qui doivent être pris en compte dès le cadrage.",
      answer: (
        <>
          <p>
            Un CAMSP ou un CMPP ne travaille pas comme une structure d&apos;hébergement. Les flux
            d&apos;activité, les comptes rendus, les bilans et l&apos;organisation des rendez-vous y sont
            centraux.
          </p>
          <p className="mt-3">
            Un DUI pertinent doit donc pouvoir servir ces usages sans forcer un modèle unique de
            fonctionnement.
          </p>
        </>
      ),
      links: [
        { to: "/secteur/camsp-cmpp", label: "Voir la page CAMSP / CMPP" },
        { to: "/ressources", label: "Revenir aux ressources" },
      ],
    },
    {
      question: "Pourquoi la fiche d'urgence et le dossier santé comptent-ils dans le secteur handicap ?",
      answerText:
        "Dans le secteur handicap, les informations de santé utiles au quotidien doivent être retrouvées rapidement et de façon sécurisée. Une fiche d'urgence et un dossier santé bien structurés aident les équipes à agir plus vite et à mieux coordonner les situations sensibles.",
      answer: (
        <>
          <p>
            Certaines situations demandent un accès rapide à des informations vitales, à des
            consignes ou à des antécédents utiles. Si ces données restent éparpillées, la coordination
            devient fragile.
          </p>
          <p className="mt-3">
            Le dossier santé et la fiche d&apos;urgence servent précisément à rendre cette information
            lisible, disponible et sécurisée.
          </p>
        </>
      ),
      links: [
        { to: "/conformite-sons", label: "Voir INS, MSSanté et DMP" },
        { to: "/engagements", label: "Voir les engagements sécurité" },
      ],
    },
  ],
  ahi: [
    {
      question: "Quel logiciel choisir pour un CHRS, un CADA, une HUDA, un CPH ou un accueil de jour ?",
      answerText:
        "Un logiciel AHI utile doit couvrir l'hébergement, l'accompagnement administratif et social, la gestion des places, le suivi des démarches, les situations familiales et les indicateurs d'activité. Le bon choix dépend du type de dispositif, de la volumétrie et du niveau de coordination attendu.",
      answer: (
        <>
          <p>
            Les structures AHI partagent des besoins communs, mais leurs contraintes concrètes ne se
            recouvrent pas totalement. Un CADA, un CHRS ou un accueil de jour n&apos;ont pas les mêmes
            priorités documentaires ni les mêmes rythmes de suivi.
          </p>
          <p className="mt-3">
            Il faut donc regarder la capacité du DUI à suivre les parcours, les démarches et les
            statuts sans multiplier la double saisie.
          </p>
        </>
      ),
      links: [
        { to: "/offres", label: "Voir l'offre de déploiement" },
        { to: "/accompagnement", label: "Voir l'accompagnement" },
      ],
    },
    {
      question:
        "Comment suivre l'hébergement, le logement et les démarches administratives dans un DUI AHI ?",
      answerText:
        "Un DUI AHI doit permettre de tracer les démarches sociales et juridiques, suivre les parcours d'hébergement et de logement, historiser les actions et produire des indicateurs utiles à l'activité. L'objectif est de garder une vision continue du parcours d'insertion.",
      answer: (
        <>
          <p>
            Dans l&apos;AHI, la qualité du suivi dépend souvent de la capacité à relier hébergement,
            logement, démarches, santé, emploi et droits sociaux dans une même chronologie.
          </p>
          <p className="mt-3">
            Le logiciel devient réellement utile quand il rend ces transitions lisibles pour tous les
            professionnels autorisés.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir les fonctionnalités DUI" },
        { to: "/ressources", label: "Voir les ressources liées" },
      ],
    },
    {
      question: "Un logiciel AHI peut-il gérer les situations familiales sans ressaisir les mêmes données ?",
      answerText:
        "Oui, un logiciel AHI bien conçu peut relier plusieurs usagers dans une même situation familiale, suivre des parcours communs et éviter certaines doubles saisies. C'est particulièrement important dans les dispositifs qui accompagnent des familles plutôt que des personnes seules.",
      answer: (
        <>
          <p>
            La gestion familiale est un vrai sujet dans les structures d&apos;hébergement et
            d&apos;insertion. Lorsque chaque membre doit être géré séparément sans lien fonctionnel, les
            équipes perdent du temps et de la cohérence.
          </p>
          <p className="mt-3">
            Un DUI adapté doit permettre de garder les individualités tout en rendant visibles les
            liens utiles entre les accompagnements.
          </p>
        </>
      ),
      links: [
        { to: "/formations", label: "Voir l'accompagnement au changement" },
        { to: "/offres", label: "Voir le cadrage projet" },
      ],
    },
    {
      question: "Quels indicateurs faut-il suivre dans un logiciel d'accueil, d'hébergement et d'insertion ?",
      answerText:
        "Les indicateurs les plus utiles dépendent du dispositif, mais on retrouve souvent les places, les délais, les motifs d'entrée et de sortie, les démarches, la rotation, les orientations et l'activité d'accompagnement. Un DUI doit aider à produire ces données sans surcharge de saisie.",
      answer: (
        <>
          <p>
            Un bon reporting AHI ne sert pas seulement à alimenter des tableaux. Il aide aussi les
            équipes à piloter les parcours, identifier les blocages et objectiver les volumes
            d&apos;activité.
          </p>
          <p className="mt-3">
            L&apos;enjeu est donc de transformer les saisies utiles au suivi en indicateurs exploitables.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir les modules de pilotage" },
        { to: "/grappes-esms", label: "Voir la mutualisation multi-sites" },
      ],
    },
  ],
  pds: [
    {
      question: "Quel DUI choisir pour un LHSS, un ACT, un CAARUD ou une structure PDS ?",
      answerText:
        "Un DUI pour les personnes en difficultés spécifiques doit articuler accompagnement social, santé, rappels, coordination pluridisciplinaire et suivi de parcours. Le bon choix dépend de la part médicale dans l'activité, des échanges documentaires attendus et du niveau de coordination recherché.",
      answer: (
        <>
          <p>
            Les structures PDS se situent souvent à la jonction entre le social et le médical. Elles
            ont donc besoin d&apos;un outil qui évite de cloisonner artificiellement les informations
            utiles au parcours.
          </p>
          <p className="mt-3">
            Le logiciel doit aider les équipes à suivre la personne dans sa globalité, sans perdre la
            lisibilité des rôles et des accès.
          </p>
        </>
      ),
      links: [
        { to: "/offres", label: "Voir l'offre de déploiement" },
        { to: "/accompagnement", label: "Voir l'accompagnement" },
      ],
    },
    {
      question: "Comment articuler le social et le médical dans un même dossier usager informatisé ?",
      answerText:
        "L'enjeu est de structurer un dossier qui relie les dimensions sociales, administratives et de santé tout en conservant des droits d'accès adaptés. Dans les structures PDS, cette articulation est essentielle pour éviter les ruptures de suivi et les pertes d'information utiles.",
      answer: (
        <>
          <p>
            Si les éléments sociaux, médicaux et administratifs vivent dans des silos séparés, le
            suivi devient difficile à coordonner. À l&apos;inverse, tout rendre indistinct fragilise la
            confidentialité.
          </p>
          <p className="mt-3">
            Un DUI pertinent doit donc permettre de relier les informations sans effacer les règles
            d&apos;accès ni les responsabilités métiers.
          </p>
        </>
      ),
      links: [
        { to: "/conformite-sons", label: "Voir DMP, MSSanté et interopérabilité" },
        { to: "/engagements", label: "Voir les engagements sécurité" },
      ],
    },
    {
      question: "Pourquoi les rappels et la coordination pluridisciplinaire sont-ils si importants en PDS ?",
      answerText:
        "Parce que les parcours PDS reposent souvent sur une succession d'actions courtes, de rendez-vous, de suivis médicaux et de démarches sociales. Les rappels et la coordination pluridisciplinaire permettent de garder une continuité de prise en charge dans des contextes parfois instables.",
      answer: (
        <>
          <p>
            Dans ce secteur, une information oubliée ou un rendez-vous manqué peut rapidement créer
            une rupture de parcours. Les rappels et la circulation d&apos;information utile ont donc un
            impact direct sur le suivi.
          </p>
          <p className="mt-3">
            Le DUI doit aider à coordonner les professionnels plutôt qu&apos;ajouter une couche
            administrative de plus.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir les modules de rappels et coordination" },
        { to: "/formations", label: "Voir la préparation des équipes" },
      ],
    },
    {
      question: "À quoi sert le DMP dans une structure à forte composante sociale et médicale ?",
      answerText:
        "Le DMP peut faciliter le partage et la consultation de documents de santé utiles au parcours, à condition que l'organisation et les habilitations soient bien définies. Dans les structures PDS, il contribue à mieux relier les épisodes de soins et les accompagnements sociaux autorisés.",
      answer: (
        <>
          <p>
            Le DMP n&apos;est pas un sujet purement technique. Il touche à la continuité du parcours, à
            la circulation des documents et à la capacité de travailler avec les bons repères
            d&apos;identité et de sécurité.
          </p>
          <p className="mt-3">
            Son intérêt est d&apos;autant plus fort lorsque plusieurs professionnels doivent partager une
            compréhension claire de la situation.
          </p>
        </>
      ),
      links: [
        { to: "/conformite-sons", label: "Voir la page conformité Ségur" },
        { to: "/abonnement", label: "Voir l'environnement SaaS" },
      ],
    },
  ],
};

export const getSectorFaqSchema = (sectorId: SectorFaqId) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sectorFaqs[sectorId].map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answerText,
    },
  })),
});

interface SectorFaqSectionProps {
  sectorId: SectorFaqId;
  title: string;
}

const SectorFaqSection = ({ sectorId, title }: SectorFaqSectionProps) => {
  const items = sectorFaqs[sectorId];

  return (
    <section className="px-4 py-12 paper-bg">
      <div className="mx-auto max-w-4xl rounded-[1.9rem] border border-border/60 bg-card/92 p-6 shadow-sm md:p-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            FAQ sectorielle
          </p>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
            Questions fréquentes sur le DUI pour {title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Un complément de réponses ciblées pour capter les recherches spécifiques à ce secteur,
            sans alourdir la page.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-8 space-y-3">
          {items.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`${sectorId}-faq-${index}`}
              className="rounded-[1.2rem] border border-border/50 bg-background/70 px-5"
            >
              <AccordionTrigger className="py-4 text-left font-body text-sm font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 font-body leading-7 text-muted-foreground">
                {faq.answer}
                <div className="mt-4 flex flex-col gap-2 border-t border-border/50 pt-4">
                  {faq.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SectorFaqSection;
