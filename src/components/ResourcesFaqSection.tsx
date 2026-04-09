import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const resourcesFaqs = [
  {
    question: "Qu'est-ce qu'un dossier usager informatisé (DUI) pour un ESSMS ?",
    answerText:
      "Un dossier usager informatisé centralise les informations administratives, socio-éducatives, organisationnelles et de santé utiles au suivi d'une personne accompagnée dans un ESSMS. Il sert à structurer l'accompagnement, faciliter la coordination et sécuriser le partage d'information entre professionnels autorisés.",
    answer: (
      <>
        <p>
          Dans les secteurs social et médico-social, un DUI ne se limite pas à stocker des
          documents. Il organise le suivi de l&apos;usager, les écrits professionnels, les admissions,
          les échanges utiles, les échéances et les éléments nécessaires au projet personnalisé.
        </p>
        <p className="mt-3">
          Pour une équipe, l&apos;enjeu est double: retrouver l&apos;information plus vite et mieux
          coordonner les actions quotidiennes sans multiplier les ressaisies.
        </p>
      </>
    ),
    links: [
      { to: "/#services", label: "Voir les fonctionnalités Silao" },
      { to: "/offres", label: "Voir le déploiement du DUI" },
    ],
  },
  {
    question: "Quelle différence entre un DUI, un dossier médical et une GED ?",
    answerText:
      "Un DUI couvre l'ensemble du parcours d'accompagnement et de coordination dans un ESSMS, alors qu'un dossier médical se concentre sur les données de santé et qu'une GED sert surtout à classer et retrouver des documents. Le DUI relie documents, écrits, habilitations, agenda, alertes et pilotage métier.",
    answer: (
      <>
        <p>
          Un dossier médical ne couvre pas à lui seul les besoins d&apos;un ESSMS. Il traite
          principalement les informations de santé, tandis qu&apos;une GED sert d&apos;abord à classer et
          retrouver des pièces.
        </p>
        <p className="mt-3">
          Un DUI utile au terrain va plus loin: il relie les documents, le parcours, les
          transmissions, les droits d&apos;accès, les rappels, l&apos;agenda et les indicateurs nécessaires
          au pilotage.
        </p>
      </>
    ),
    links: [
      { to: "/#services", label: "Revenir aux modules principaux" },
      { to: "/secteur/handicap", label: "Voir un exemple côté médico-social" },
    ],
  },
  {
    question: "Pourquoi choisir un DUI référencé Ségur pour un ESSMS ?",
    answerText:
      "Un DUI référencé Ségur s'inscrit dans les exigences nationales d'interopérabilité, de sécurité et d'échanges documentaires attendues dans le numérique en santé. Pour un ESSMS, cela aide à sécuriser la trajectoire réglementaire et à mieux préparer les usages autour de l'INS, de MSSanté, du DMP et des autres services socles.",
    answer: (
      <>
        <p>
          Le référencement Ségur n&apos;est pas seulement un repère institutionnel. Il indique que la
          solution travaille sur des exigences précises de sécurité, d&apos;interopérabilité et de
          circulation des documents utiles au parcours.
        </p>
        <p className="mt-3">
          Pour un établissement, cela permet de réduire l&apos;écart entre les usages métier du
          quotidien et les attentes nationales autour du DUI communicant.
        </p>
      </>
    ),
    links: [
      { to: "/engagements", label: "Voir les engagements Silao" },
      { to: "/conformite-sons", label: "Voir la conformité Ségur" },
    ],
  },
  {
    question: "À quoi servent l'INS, MSSanté et Mon espace santé dans un logiciel DUI ?",
    answerText:
      "L'INS sert à fiabiliser l'identité de l'usager, MSSanté sécurise les échanges de documents et Mon espace santé, via le DMP, facilite le dépôt et la consultation d'informations utiles au parcours. Dans un DUI, ces briques visent surtout à éviter les erreurs d'identité, les ruptures d'information et les échanges non sécurisés.",
    answer: (
      <>
        <p>
          L&apos;INS réduit les risques d&apos;erreur d&apos;identité. MSSanté permet d&apos;échanger des documents
          et informations dans un cadre sécurisé. Mon espace santé, avec le DMP, facilite la
          circulation de documents de santé utiles au suivi.
        </p>
        <p className="mt-3">
          Pour les équipes, l&apos;intérêt est concret: moins de doublons, moins de ressaisies,
          davantage de continuité entre les acteurs autorisés du parcours.
        </p>
      </>
    ),
    links: [
      { to: "/conformite-sons", label: "Comprendre INS, MSSanté et DMP" },
      { to: "/abonnement", label: "Voir l'environnement SaaS et support" },
    ],
  },
  {
    question: "Comment préparer la reprise de données lors d'un changement de logiciel médico-social ?",
    answerText:
      "Une reprise de données efficace commence par un inventaire des informations existantes, un tri entre données à migrer, nettoyer ou archiver, puis des tests sur un périmètre pilote. Il faut aussi cadrer les règles d'habilitation, les documents prioritaires et les usages attendus après la bascule.",
    answer: (
      <>
        <p>
          Le point clé n&apos;est pas seulement de déplacer des données d&apos;un outil à un autre. Il faut
          d&apos;abord décider ce qui doit être repris, nettoyé, restructuré ou laissé dans un historique
          consultable.
        </p>
        <p className="mt-3">
          Les projets les plus solides prévoient des tests de migration, un périmètre pilote, des
          rôles clairement identifiés et une préparation des équipes avant la bascule.
        </p>
      </>
    ),
    links: [
      { to: "/offres", label: "Voir l'offre de déploiement" },
      { to: "/accompagnement", label: "Voir l'accompagnement projet" },
    ],
  },
  {
    question: "Combien de temps faut-il pour déployer un DUI dans un établissement ou une association ?",
    answerText:
      "Le délai dépend du nombre d'établissements, du secteur, de la reprise de données, des interfaces à activer et de la disponibilité des équipes. Un déploiement sérieux passe en général par un cadrage, du paramétrage, des tests, de la formation et un suivi après démarrage plutôt que par une simple mise en service technique.",
    answer: (
      <>
        <p>
          Il n&apos;existe pas de délai unique valable pour tous les ESSMS. Un établissement isolé avec
          peu d&apos;interfaces n&apos;a pas les mêmes contraintes qu&apos;une association multi-sites ou qu&apos;une
          structure avec de forts enjeux de confidentialité.
        </p>
        <p className="mt-3">
          Le bon indicateur est la qualité du cadrage: gouvernance, données, profils, formation,
          tests et accompagnement post-démarrage.
        </p>
      </>
    ),
    links: [
      { to: "/accompagnement", label: "Voir la méthode d'accompagnement" },
      { to: "/formations", label: "Voir la formation des équipes" },
    ],
  },
  {
    question: "Un DUI peut-il être mutualisé entre plusieurs établissements ou services ?",
    answerText:
      "Oui, à condition de bien gérer les habilitations, la confidentialité et les besoins métier locaux. Un DUI mutualisé peut permettre de partager des référentiels, d'harmoniser certains processus et de piloter plusieurs établissements, tout en conservant des accès différenciés et des spécificités par structure.",
    answer: (
      <>
        <p>
          La mutualisation intéresse particulièrement les associations, grappes d&apos;ESMS et
          organisations multi-sites. Elle permet de garder une vision commune sans gommer les
          réalités de terrain ni ouvrir les accès au-delà du nécessaire.
        </p>
        <p className="mt-3">
          Le sujet central est moins technique qu&apos;organisationnel: il faut définir les périmètres,
          les rôles, les circuits documentaires et les niveaux de confidentialité attendus.
        </p>
      </>
    ),
    links: [
      { to: "/grappes-esms", label: "Voir la page grappes ESMS" },
      { to: "/engagements", label: "Voir les garanties annoncées" },
    ],
  },
  {
    question:
      "Pourquoi l'interopérabilité avec ViaTrajectoire devient-elle importante pour certains ESSMS ?",
    answerText:
      "Pour les structures concernées, l'interopérabilité avec ViaTrajectoire aide à éviter des ressaisies, à mieux suivre les décisions d'orientation et à fluidifier l'admission. C'est un sujet croissant dans les parcours ESSMS, en particulier lorsqu'il faut articuler notifications, statuts et traitement des demandes dans le logiciel métier.",
    answer: (
      <>
        <p>
          Quand les équipes consultent une plateforme d&apos;orientation puis ressaisissent ensuite les
          mêmes informations dans leur DUI, elles perdent du temps et augmentent le risque d&apos;écart
          entre les statuts.
        </p>
        <p className="mt-3">
          L&apos;interopérabilité vise précisément à fluidifier cette chaîne, surtout pour les structures
          où l&apos;admission et le suivi des décisions d&apos;orientation sont des sujets sensibles.
        </p>
      </>
    ),
    links: [
      { to: "/conformite-sons", label: "Voir les enjeux d'interopérabilité" },
      { to: "/secteur/handicap", label: "Voir la page handicap" },
    ],
  },
  {
    question:
      "Comment choisir un logiciel médico-social adapté à la protection de l'enfance, au handicap, à l'AHI ou aux PDS ?",
    answerText:
      "Le bon choix dépend du vocabulaire métier, des circuits d'admission, des niveaux de confidentialité, des écrits à produire, des besoins de coordination et des indicateurs attendus dans chaque secteur. Un DUI pertinent doit s'adapter au terrain plutôt que forcer tous les établissements à fonctionner de la même manière.",
    answer: (
      <>
        <p>
          Un même logiciel peut servir plusieurs secteurs, mais il doit respecter leurs différences:
          protection de l&apos;enfance, handicap, accueil hébergement insertion ou personnes en
          difficultés spécifiques n&apos;ont pas les mêmes contraintes documentaires, organisationnelles
          ni réglementaires.
        </p>
        <p className="mt-3">
          Avant de choisir, il faut vérifier l&apos;adéquation entre les modules, les droits
          d&apos;accès, les parcours couverts et les usages réels des équipes.
        </p>
      </>
    ),
    links: [
      { to: "/secteur/protection-enfance", label: "Voir la page protection de l'enfance" },
      { to: "/secteur/handicap", label: "Voir la page médico-social" },
      { to: "/secteur/insertion-ahi", label: "Voir la page AHI" },
      { to: "/secteur/personnes-difficultes-specifiques", label: "Voir la page PDS" },
    ],
  },
];

export const resourcesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: resourcesFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answerText,
    },
  })),
};

const ResourcesFaqSection = () => (
  <section id="questions-dui" className="px-4 py-12">
    <div className="mx-auto max-w-4xl rounded-[1.9rem] border border-border/60 bg-card/90 p-6 shadow-sm md:p-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Questions complémentaires
        </p>
        <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
          Réponses utiles avant de choisir ou déployer un DUI
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          Une base discrète de questions fréquentes pour approfondir les sujets souvent recherchés
          autour du dossier usager informatisé, du Ségur et du déploiement en ESSMS.
        </p>
      </div>

      <Accordion type="single" collapsible className="mt-8 space-y-3">
        {resourcesFaqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`resources-faq-${index}`}
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

export default ResourcesFaqSection;
