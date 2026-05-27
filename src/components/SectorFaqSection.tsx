import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type SectorFaqId = "pde" | "ph" | "ahi" | "pds" | "camsp";

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
    {
      question: "Ségur MS2 PDE : quels changements réglementaires pour les logiciels de protection enfance ?",
      answerText:
        "Ségur MS2 impose une interopérabilité stricte, une traçabilité des données, une confidentialité renforcée et des exports formatés pour les ASE. Un logiciel non-adapté crée du travail manuel en doublons. Silao intègre nativement ces obligations.",
      answer: (
        <>
          <p>
            Le référentiel Ségur MS2 PDE impose des obligations techniques précises : identification
            INS qualifiée, traçabilité des accès et modifications, confidentialité par rôles, exports
            standardisés vers les ASE et les bases de données nationales. Ces exigences ne sont pas
            optionnelles.
          </p>
          <p className="mt-3">
            Un logiciel qui ne les intègre pas oblige les équipes à gérer manuellement les exports,
            les contrôles de conformité et les mises à jour réglementaires. Silao est référencé DSR
            Ségur MS2 PDE, ce qui épargne à vos équipes ces migrations ultérieures.
          </p>
        </>
      ),
      links: [
        { to: "/engagements", label: "Voir les engagements Ségur" },
        { to: "/conformite-sons", label: "Voir la conformité numérique" },
      ],
    },
    {
      question: "Quelle différence entre MECS, AEMO, accueil familial et milieu ouvert dans Silao ?",
      answerText:
        "Silao adapte ses fonctionnalités aux contraintes de chaque dispositif : hébergement collectif pour les MECS, suivi distant pour l'AEMO, gestion des assistants familiaux pour l'accueil familial. Le même outil couvre ces réalités différentes sans forcer un modèle unique.",
      answer: (
        <>
          <p>
            Une MECS fonctionne avec hébergement collectif, présences quotidiennes, argent de poche
            et habillement. Une AEMO suit les enfants à distance, sans colocalisation, avec des
            rendez-vous, visio ou appels documentés. L&apos;accueil familial ajoute la gestion des
            assistants familiaux, des agréments et des places disponibles.
          </p>
          <p className="mt-3">
            Silao reconnaît ces différences. L&apos;agenda, le cahier de liaison et le dossier usager
            s&apos;adaptent au type de structure. Vous n&apos;êtes pas forcés d&apos;utiliser toutes
            les fonctionnalités : chaque organisation active ce qui lui est utile.
          </p>
        </>
      ),
      links: [
        { to: "/offres", label: "Voir le cadrage projet" },
        { to: "/formations", label: "Voir l'accompagnement métier" },
      ],
    },
    {
      question: "Comment un logiciel DUI aide à la coordination avec les parents et intervenants externes ?",
      answerText:
        "Un DUI bien conçu permet de partager des informations ciblées avec les parents et intervenants externes via un agenda partagé, des droits d'accès adaptés et des espaces dédiés dans le cahier de liaison. L'objectif est de renforcer la coordination sans compromettre la confidentialité.",
      answer: (
        <>
          <p>
            Dans la protection de l&apos;enfance, les parents, les référents ASE, les magistrats et
            les autres intervenants doivent parfois accéder à certaines informations sans voir
            l&apos;ensemble du dossier. Un logiciel adapté structure ces accès : qui peut voir quoi,
            à quel moment, dans quel contexte.
          </p>
          <p className="mt-3">
            Silao permet de partager l&apos;agenda avec les parents pour les rendez-vous, de
            transmettre des notes ciblées dans le cahier de liaison et de tracer ces échanges. La
            coordination devient plus fluide sans perdre le contrôle des informations sensibles.
          </p>
        </>
      ),
      links: [
        { to: "/engagements", label: "Voir les engagements sécurité" },
        { to: "/#services", label: "Voir les fonctionnalités de coordination" },
      ],
    },
    {
      question: "Interopérabilité : comment Silao partage les données avec l'ASE et les tutelles de gestion ?",
      answerText:
        "Silao intègre des exports standardisés vers les ASE départementales et les bases de données nationales, conformes aux exigences Ségur MS2 PDE. Ces exports automatisés évitent la double saisie et garantissent la cohérence des données transmises.",
      answer: (
        <>
          <p>
            Les ASE régionales et les organismes de tutelle ont besoin de données standardisées :
            statistiques d&apos;activité, présences, parcours, fratries, mesures judiciaires. Si ces
            données doivent être ressaisies manuellement dans d&apos;autres outils, les équipes
            perdent du temps et risquent des incohérences.
          </p>
          <p className="mt-3">
            Silao génère ces exports directement depuis les saisies quotidiennes. Vous n&apos;avez
            pas à maintenir des fichiers parallèles. L&apos;interopérabilité est intégrée au
            fonctionnement normal de l&apos;outil.
          </p>
        </>
      ),
      links: [
        { to: "/conformite-sons", label: "Voir l'interopérabilité Ségur" },
        { to: "/offres", label: "Voir la reprise de données" },
      ],
    },
    {
      question: "Coût moyen d'un logiciel DUI protection enfance : que faut-il anticiper ?",
      answerText:
        "Le coût d'un DUI protection enfance dépend du nombre d'usagers, du nombre de structures, de la reprise de données existantes et de l'accompagnement souhaité. Silao fonctionne sur abonnement annuel, incluant hébergement, support, mises à jour et conformité Ségur.",
      answer: (
        <>
          <p>
            Un DUI protection enfance n&apos;est pas un achat ponctuel mais un abonnement annuel qui
            couvre l&apos;hébergement sécurisé, le support technique, les mises à jour
            réglementaires, les nouvelles fonctionnalités et la maintenance. Ce modèle SaaS évite les
            coûts cachés d&apos;infrastructure et de maintenance interne.
          </p>
          <p className="mt-3">
            Le déploiement initial inclut le cadrage projet, le paramétrage de l&apos;outil, la
            reprise des données depuis votre ancien système et la formation des équipes. Contactez-nous
            pour un chiffrage adapté à votre organisation.
          </p>
        </>
      ),
      links: [
        { to: "/abonnement", label: "Voir le modèle d'abonnement" },
        { to: "/offres", label: "Voir l'offre de déploiement" },
      ],
    },
    {
      question: "Combien de temps faut-il pour migrer vers Silao depuis un autre DUI ?",
      answerText:
        "La migration vers Silao prend généralement entre 3 et 6 mois selon la volumétrie de données, le nombre de structures et la complexité de votre organisation actuelle. Le processus inclut le cadrage, la reprise de données, le paramétrage, la formation et le démarrage accompagné.",
      answer: (
        <>
          <p>
            Une migration ne se résume pas à transférer des données. Il faut comprendre vos workflows
            actuels, reprendre proprement les dossiers usagers et les historiques, paramétrer
            l&apos;outil selon vos besoins, former les équipes et accompagner le démarrage.
          </p>
          <p className="mt-3">
            Silao suit une méthode structurée : cadrage initial, reprise de données par lot,
            paramétrage testé, formation progressive et démarrage par phases si nécessaire. Cette
            approche limite les ruptures de service et garantit que vos équipes sont opérationnelles
            dès le démarrage.
          </p>
        </>
      ),
      links: [
        { to: "/offres", label: "Voir la méthode de déploiement" },
        { to: "/accompagnement", label: "Voir l'accompagnement projet" },
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
    {
      question: "Ségur MS1 PH : quelles obligations réglementaires pour les logiciels médico-sociaux handicap ?",
      answerText:
        "Ségur MS1 PH impose une identification INS qualifiée, une interopérabilité stricte, une traçabilité des accès et des modifications, et des exports standardisés. Silao est référencé DSR Ségur MS1 PH, ce qui garantit la conformité sans surcharge pour vos équipes.",
      answer: (
        <>
          <p>
            Le référentiel Ségur MS1 PH définit des obligations techniques précises pour les
            logiciels du secteur handicap : identification nationale de santé (INS) qualifiée,
            traçabilité des opérations, confidentialité par rôles, interopérabilité avec les SI de
            santé et exports vers les autorités de tutelle.
          </p>
          <p className="mt-3">
            Un logiciel non conforme oblige les équipes à gérer manuellement ces exigences, avec des
            risques de non-conformité et des surcharges administratives. Silao intègre nativement
            ces obligations, ce qui épargne à vos équipes les mises à jour réglementaires et les
            contrôles manuels.
          </p>
        </>
      ),
      links: [
        { to: "/conformite-sons", label: "Voir la conformité Ségur" },
        { to: "/engagements", label: "Voir les engagements Silao" },
      ],
    },
    {
      question: "Comment coordonner les interventions pluridisciplinaires dans un IME ou SESSAD avec un DUI ?",
      answerText:
        "Un DUI handicap doit centraliser l'agenda des interventions, tracer les actions de chaque professionnel (éducateur, psychologue, orthophoniste), et faciliter la transmission d'informations entre équipes. Silao structure cette coordination via l'agenda partagé et le cahier de liaison.",
      answer: (
        <>
          <p>
            Dans un IME ou SESSAD, plusieurs professionnels interviennent sur le même enfant :
            éducateur spécialisé, psychologue, orthophoniste, enseignant, psychomotricien. Si chacun
            travaille dans son coin, la coordination devient impossible. Les informations se
            perdent, les interventions se chevauchent, le projet personnalisé n&apos;est plus lisible.
          </p>
          <p className="mt-3">
            Silao centralise l&apos;agenda des interventions, le cahier de liaison pour les
            transmissions, et le dossier usager pour le projet personnalisé. Chaque professionnel
            voit les actions des autres, les échéances communes et les objectifs partagés. La
            coordination devient fluide sans multiplier les réunions.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir l'agenda et le cahier de liaison" },
        { to: "/formations", label: "Voir la formation des équipes" },
      ],
    },
    {
      question: "Projet personnalisé handicap : comment le structurer dans un logiciel DUI ?",
      answerText:
        "Le projet personnalisé structure les objectifs de l'accompagnement, les actions planifiées, les professionnels mobilisés et les échéances. Un DUI handicap doit relier le projet aux interventions quotidiennes, aux bilans et aux rapports. Silao centralise ces éléments dans le dossier usager.",
      answer: (
        <>
          <p>
            Le projet personnalisé n&apos;est pas un document isolé. Il doit être relié aux
            interventions quotidiennes, aux bilans réguliers, aux rapports MDPH et aux évaluations
            pluridisciplinaires. Si le projet vit dans un fichier Word séparé, il perd son utilité
            opérationnelle.
          </p>
          <p className="mt-3">
            Silao intègre le projet personnalisé dans le dossier usager. Les objectifs sont
            visibles, les actions tracées, les échéances suivies. Les professionnels voient le lien
            entre leurs interventions et les objectifs du projet. Le pilotage devient plus lisible
            pour les équipes et les tutelles.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir le dossier usager" },
        { to: "/offres", label: "Voir le cadrage projet" },
      ],
    },
    {
      question: "Multi-structures handicap : gérer un IME et un SESSAD depuis le même DUI, comment ?",
      answerText:
        "Silao permet de gérer plusieurs structures médico-sociales dans la même instance : un IME, un SESSAD, un CAMSP. Chaque structure garde ses spécificités métier, ses droits d'accès et ses exports statistiques, tout en mutualisant l'outil et le support.",
      answer: (
        <>
          <p>
            Beaucoup d&apos;associations gèrent plusieurs structures médico-sociales : un IME, un
            SESSAD, un CAMSP, une MAS. Si chaque structure utilise un logiciel différent, les
            équipes perdent du temps, les données sont fragmentées et les coûts se multiplient.
          </p>
          <p className="mt-3">
            Silao permet de mutualiser l&apos;outil entre plusieurs structures tout en conservant
            l&apos;autonomie de chacune. Les droits d&apos;accès sont configurés par structure, les
            exports statistiques séparés, mais l&apos;administration, le support et les mises à jour
            sont unifiés. Cette approche réduit les coûts et facilite la coordination.
          </p>
        </>
      ),
      links: [
        { to: "/grappes-esms", label: "Voir les grappes multi-ESMS" },
        { to: "/abonnement", label: "Voir le modèle d'abonnement" },
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
    {
      question: "Qu'est-ce qu'un logiciel AHI insertion et comment diffère-t-il d'un DUI classique ?",
      answerText:
        "Un logiciel AHI insertion se concentre sur les parcours d'hébergement, d'insertion sociale et professionnelle, avec une traçabilité forte des démarches administratives, juridiques et d'accès aux droits. Il diffère d'un DUI générique par sa capacité à gérer les situations familiales, les rotations d'hébergement et la coordination multi-acteurs.",
      answer: (
        <>
          <p>
            Un DUI classique centralise le dossier usager, mais un logiciel AHI va plus loin : il
            structure les parcours d&apos;insertion, trace les démarches vers le logement ou
            l&apos;emploi, suit les places disponibles, coordonne les acteurs sociaux et produit les
            indicateurs attendus par les tutelles.
          </p>
          <p className="mt-3">
            Silao a été conçu pour ces besoins spécifiques : plan d&apos;accompagnement, gestion des
            hébergements, suivi des droits sociaux, accompagnement au logement et exports
            statistiques. Ce n&apos;est pas un DUI adapté, c&apos;est un DUI pensé pour l&apos;AHI.
          </p>
        </>
      ),
      links: [
        { to: "/offres", label: "Voir l'offre de déploiement" },
        { to: "/#services", label: "Voir les fonctionnalités AHI" },
      ],
    },
    {
      question: "Ségur numérique AHI 2025 : qu'est-ce qui change pour les logiciels ESSMS ?",
      answerText:
        "Le référentiel Ségur impose aux logiciels ESSMS une interopérabilité stricte, des exports standardisés, une traçabilité des accès et des données, et des droits d'accès fins. Un logiciel non conforme impose du travail manuel supplémentaire et des risques de non-conformité.",
      answer: (
        <>
          <p>
            Ségur numérique définit des obligations techniques pour les logiciels du médico-social :
            identification INS qualifiée, traçabilité des opérations, confidentialité par rôles,
            exports vers les autorités de tutelle. Ces exigences ne sont pas facultatives.
          </p>
          <p className="mt-3">
            Silao intègre ces obligations dans sa conception. Vous n&apos;avez pas à gérer
            manuellement les exports, les contrôles de conformité ou les mises à jour
            réglementaires. L&apos;outil suit les évolutions du référentiel Ségur sans surcharge pour
            vos équipes.
          </p>
        </>
      ),
      links: [
        { to: "/conformite-sons", label: "Voir la conformité Ségur" },
        { to: "/engagements", label: "Voir les engagements Silao" },
      ],
    },
    {
      question: "Comment gérer les parcours d'insertion avec bilan, plan et suivi dans un même outil ?",
      answerText:
        "Un logiciel AHI bien conçu structure le parcours d'insertion en trois temps : le bilan initial (situation, besoins, freins), le plan d'accompagnement (objectifs, actions, échéances) et le suivi des démarches (logement, emploi, santé, droits sociaux). Silao relie ces trois dimensions dans le dossier usager.",
      answer: (
        <>
          <p>
            Un parcours d&apos;insertion ne se résume pas à une succession d&apos;actions. Il faut
            d&apos;abord comprendre la situation (bilan), définir des objectifs réalistes (plan), puis
            tracer les démarches et ajuster le plan si nécessaire (suivi). Si ces étapes vivent dans
            des outils séparés, la coordination devient difficile.
          </p>
          <p className="mt-3">
            Silao centralise le bilan, le plan d&apos;accompagnement et le suivi des actions dans le
            dossier usager. Les travailleurs sociaux voient la progression, les échéances et les
            blocages. Le pilotage devient plus lisible pour les équipes et les tutelles.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir le plan d'accompagnement" },
        { to: "/formations", label: "Voir la formation des équipes" },
      ],
    },
    {
      question: "Logiciel ESSMS : pourquoi choisir une solution orientée médico-social plutôt que générique ?",
      answerText:
        "Un logiciel ESSMS spécialisé intègre les contraintes réglementaires du secteur (Ségur, confidentialité, exports), les workflows métier (plan d'accompagnement, coordination, droits sociaux) et les besoins de pilotage propres aux ESSMS. Un logiciel générique impose des adaptations manuelles coûteuses.",
      answer: (
        <>
          <p>
            Les ESSMS ont des obligations spécifiques : conformité Ségur, exports vers les autorités
            de tutelle, confidentialité renforcée, gestion des droits sociaux, traçabilité des
            démarches. Un logiciel générique ne connaît pas ces contraintes. Vous devez les gérer
            manuellement ou via des développements spécifiques.
          </p>
          <p className="mt-3">
            Silao a été conçu pour le médico-social. Les exports statistiques sont intégrés, la
            conformité Ségur native, les workflows adaptés aux réalités terrain. Vous n&apos;achetez
            pas un outil à adapter, vous déployez un outil déjà pensé pour votre secteur.
          </p>
        </>
      ),
      links: [
        { to: "/offres", label: "Voir le cadrage projet" },
        { to: "/accompagnement", label: "Voir l'accompagnement métier" },
      ],
    },
    {
      question: "Comment Silao aide à la traçabilité des heures, des interventions et des droits sociaux ?",
      answerText:
        "Silao trace automatiquement les interventions dans le cahier de liaison, historise les actions d'accompagnement et suit les droits sociaux (AAH, RSA, CMU, AME). Cette traçabilité évite la double saisie et facilite le reporting d'activité vers les tutelles.",
      answer: (
        <>
          <p>
            Dans l&apos;AHI, la traçabilité n&apos;est pas un luxe : elle sert au reporting
            d&apos;activité, aux statistiques nationales, à la facturation et au pilotage interne. Si
            les équipes doivent ressaisir manuellement leurs interventions dans un outil parallèle,
            elles perdent du temps et risquent des incohérences.
          </p>
          <p className="mt-3">
            Silao trace les interventions depuis le cahier de liaison et l&apos;agenda. Les heures
            d&apos;accompagnement, les démarches, les rendez-vous et les droits sociaux sont
            automatiquement historisés. Les exports vers les tutelles sont générés sans ressaisie.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir la gestion des interventions" },
        { to: "/offres", label: "Voir la reprise de données" },
      ],
    },
    {
      question: "Interopérabilité AHI : qui peut accéder à quoi entre usager, famille et travailleur social ?",
      answerText:
        "Silao structure les droits d'accès par rôle et par type d'information. Les travailleurs sociaux accèdent aux données nécessaires à leur mission, les familles voient les informations partagées, les usagers consultent leur parcours. La confidentialité est garantie par paramétrage.",
      answer: (
        <>
          <p>
            Dans l&apos;AHI, toutes les informations ne doivent pas être visibles par tous. Un
            travailleur social juridique n&apos;a pas besoin d&apos;accéder au dossier de santé. Une
            famille ne doit pas voir les notes internes d&apos;équipe. Un usager doit pouvoir
            consulter son parcours sans accéder aux informations sensibles.
          </p>
          <p className="mt-3">
            Silao permet de définir des droits d&apos;accès fins : qui peut lire, modifier, exporter
            quelles informations. Cette interopérabilité contrôlée garantit la coordination sans
            compromettre la confidentialité.
          </p>
        </>
      ),
      links: [
        { to: "/engagements", label: "Voir les engagements sécurité" },
        { to: "/conformite-sons", label: "Voir la conformité numérique" },
      ],
    },
    {
      question: "Multi-structures AHI : gérer un CHRS et un CADA depuis le même logiciel, comment ?",
      answerText:
        "Silao permet de gérer plusieurs structures ESSMS dans la même instance : un CHRS, un CADA, un accueil de jour. Chaque structure garde ses spécificités métier, ses droits d'accès et ses exports statistiques, tout en mutualisant l'outil et le support.",
      answer: (
        <>
          <p>
            Beaucoup d&apos;associations gèrent plusieurs dispositifs AHI : un CHRS, un CADA, un
            accueil de jour, un dispositif HUDA. Si chaque structure utilise un logiciel différent,
            les équipes perdent du temps, les données sont fragmentées et les coûts se multiplient.
          </p>
          <p className="mt-3">
            Silao permet de mutualiser l&apos;outil entre plusieurs structures tout en conservant
            l&apos;autonomie de chacune. Les droits d&apos;accès sont configurés par structure, les
            exports statistiques séparés, mais l&apos;administration, le support et les mises à jour
            sont unifiés.
          </p>
        </>
      ),
      links: [
        { to: "/grappes-esms", label: "Voir les grappes multi-ESMS" },
        { to: "/offres", label: "Voir le cadrage projet" },
      ],
    },
    {
      question: "Comment garantir la confidentialité entre équipes d'insertion et d'accompagnement social ?",
      answerText:
        "Silao structure les droits d'accès par équipe, par rôle et par type d'information. Une équipe d'insertion voit les démarches emploi et formation, une équipe sociale voit les droits sociaux et le logement. Les informations partagées sont configurables, les accès tracés.",
      answer: (
        <>
          <p>
            Dans les structures AHI, plusieurs équipes interviennent sur le même usager : insertion
            professionnelle, accompagnement social, suivi juridique, santé. Si toutes les équipes
            voient toutes les informations, la confidentialité est fragilisée. Si rien n&apos;est
            partagé, la coordination devient impossible.
          </p>
          <p className="mt-3">
            Silao permet de définir ce qui est partagé entre équipes et ce qui reste cloisonné. Les
            droits d&apos;accès sont configurés par rôle et par type de données. Cette granularité
            garantit la confidentialité sans casser la coordination.
          </p>
        </>
      ),
      links: [
        { to: "/engagements", label: "Voir les engagements sécurité" },
        { to: "/formations", label: "Voir la formation des équipes" },
      ],
    },
  ],
  camsp: [
    {
      question: "Quel logiciel choisir pour un CAMSP ou un CMPP : DUI générique ou spécialisé ?",
      answerText:
        "Un logiciel CAMSP-CMPP spécialisé intègre les workflows ambulatoires, les bilans standardisés, la coordination pluridisciplinaire, les listes d'attente et les exports CPAM/ARS. Un DUI générique impose des adaptations manuelles coûteuses.",
      answer: (
        <>
          <p>
            Un CAMSP ou CMPP ne fonctionne pas comme une structure d&apos;hébergement. Les besoins
            sont spécifiques : suivi ambulatoire, bilans standardisés (Brunet-Lézine, WPPSI, etc.),
            agenda pluridisciplinaire, séances thérapeutiques, comptes-rendus aux familles, listes
            d&apos;attente et exports vers CPAM et ARS.
          </p>
          <p className="mt-3">
            Un logiciel générique ne connaît pas ces contraintes. Vous devez les gérer manuellement
            ou via des fichiers parallèles. Silao a été pensé pour les CAMSP et CMPP : bilans
            tracés, agenda pluridisciplinaire, exports prêts, conformité Ségur native.
          </p>
        </>
      ),
      links: [
        { to: "/offres", label: "Voir l'offre de déploiement" },
        { to: "/#services", label: "Voir les fonctionnalités CAMSP" },
      ],
    },
    {
      question: "Comment gérer les bilans et évaluations standardisées dans un DUI CAMSP-CMPP ?",
      answerText:
        "Un DUI CAMSP-CMPP doit tracer les bilans standardisés (Brunet-Lézine, WPPSI, WISC), historiser les résultats, suivre les évolutions et faciliter les comptes-rendus. Silao centralise ces bilans dans le dossier usager avec l'historique des résultats.",
      answer: (
        <>
          <p>
            Les bilans standardisés sont structurants dans un CAMSP ou CMPP : ils mesurent les
            progrès, orientent les prises en charge et alimentent les comptes-rendus. Si ces bilans
            vivent dans des fichiers Word séparés, ils perdent leur utilité opérationnelle.
          </p>
          <p className="mt-3">
            Silao trace les bilans dans le dossier usager : date, professionnel, résultats, synthèse.
            L&apos;historique des bilans permet de suivre les évolutions et d&apos;objectiver les
            progrès. Les comptes-rendus peuvent être générés depuis l&apos;outil, prêts à être
            partagés avec les familles.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir la gestion des bilans" },
        { to: "/formations", label: "Voir la formation des équipes" },
      ],
    },
    {
      question: "Agenda pluridisciplinaire CAMSP : comment coordonner les séances entre professionnels ?",
      answerText:
        "Un agenda pluridisciplinaire doit centraliser les séances de chaque professionnel (médecin, psychologue, orthophoniste, psychomotricien), gérer les plages horaires, les ressources mobilisées et les rappels. Silao structure cette coordination via l'agenda partagé.",
      answer: (
        <>
          <p>
            Dans un CAMSP ou CMPP, plusieurs professionnels interviennent sur le même enfant. Si
            chaque professionnel gère son agenda séparément, les familles reçoivent des informations
            fragmentées, les séances se chevauchent et la coordination devient chaotique.
          </p>
          <p className="mt-3">
            Silao centralise l&apos;agenda pluridisciplinaire : qui intervient quand, dans quelle
            salle, avec quelles ressources. Les familles reçoivent des rappels automatiques, les
            professionnels voient les autres interventions, la coordination devient fluide.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir l'agenda pluridisciplinaire" },
        { to: "/accompagnement", label: "Voir l'accompagnement projet" },
      ],
    },
    {
      question: "Listes d'attente CAMSP-CMPP : comment les gérer efficacement dans un DUI ?",
      answerText:
        "La gestion des listes d'attente doit suivre les demandes, les délais, la criticité, le praticien disponible et les priorités. Un DUI CAMSP-CMPP doit faciliter l'organisation des admissions et le suivi des délais. Silao structure ces listes d'attente.",
      answer: (
        <>
          <p>
            Les CAMSP et CMPP font face à des listes d&apos;attente importantes. Si ces listes
            vivent dans des fichiers Excel séparés, les admissions deviennent difficiles à piloter :
            qui attend depuis quand, pour quel praticien, avec quelle criticité ?
          </p>
          <p className="mt-3">
            Silao centralise les listes d&apos;attente dans l&apos;outil : date de demande, motif,
            praticien souhaité, criticité. Les équipes peuvent organiser les admissions selon les
            priorités, suivre les délais et produire des statistiques pour les tutelles.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir la gestion des attentes" },
        { to: "/offres", label: "Voir le cadrage projet" },
      ],
    },
    {
      question: "Ségur numérique CAMSP-CMPP : quelles obligations pour les logiciels de soins précoces ?",
      answerText:
        "Ségur impose une identification INS qualifiée, un partage sécurisé via MSSanté, une alimentation du DMP et des exports formatés vers CPAM et ARS. Un logiciel non conforme impose du travail manuel et des risques de non-conformité. Silao intègre ces obligations.",
      answer: (
        <>
          <p>
            Le référentiel Ségur définit des obligations techniques pour les structures de soins :
            identification nationale de santé (INS) qualifiée, messagerie sécurisée MSSanté,
            alimentation du Dossier Médical Partagé (DMP), exports vers les CPAM et ARS. Ces
            exigences ne sont pas facultatives.
          </p>
          <p className="mt-3">
            Un logiciel non conforme oblige les équipes à gérer manuellement ces exports, avec des
            risques de non-conformité et des surcharges administratives. Silao intègre nativement
            ces obligations Ségur, ce qui épargne à vos équipes les contrôles manuels et les mises à
            jour réglementaires.
          </p>
        </>
      ),
      links: [
        { to: "/conformite-sons", label: "Voir la conformité Ségur" },
        { to: "/engagements", label: "Voir les engagements Silao" },
      ],
    },
    {
      question: "Comment partager les comptes-rendus de consultations avec les familles en toute sécurité ?",
      answerText:
        "Un DUI CAMSP-CMPP doit faciliter la génération de comptes-rendus de consultations, leur partage sécurisé avec les familles et leur traçabilité. Silao génère les comptes-rendus depuis le dossier usager et les partage via des accès sécurisés.",
      answer: (
        <>
          <p>
            Les familles doivent recevoir régulièrement des comptes-rendus de consultations : bilans,
            observations, recommandations. Si ces comptes-rendus sont envoyés par email non sécurisé
            ou courrier postal, la confidentialité est fragilisée et les délais rallongés.
          </p>
          <p className="mt-3">
            Silao génère les comptes-rendus depuis le dossier usager, avec les informations
            structurées et les observations des professionnels. Les familles peuvent y accéder via un
            espace sécurisé, ou recevoir les documents par MSSanté si elles disposent d&apos;une
            adresse certifiée. La traçabilité est automatique.
          </p>
        </>
      ),
      links: [
        { to: "/conformite-sons", label: "Voir MSSanté et DMP" },
        { to: "/engagements", label: "Voir les engagements sécurité" },
      ],
    },
    {
      question: "Reporting CAMSP-CMPP : comment produire les statistiques d'activité pour les tutelles ?",
      answerText:
        "Les CAMSP et CMPP doivent produire des statistiques d'activité pour les ARS et CPAM : file active, nombre de séances, délais d'attente, types de troubles. Un DUI adapté génère ces exports automatiquement. Silao intègre ces exports statistiques.",
      answer: (
        <>
          <p>
            Les tutelles (ARS, CPAM) demandent régulièrement des statistiques d&apos;activité : file
            active, nombre de séances par professionnel, délais d&apos;attente, répartition des
            troubles. Si ces statistiques doivent être produites manuellement, les équipes perdent du
            temps et risquent des incohérences.
          </p>
          <p className="mt-3">
            Silao génère ces exports automatiquement depuis les saisies quotidiennes : bilans,
            séances, listes d&apos;attente. Les statistiques sont prêtes pour les tutelles sans
            ressaisie. Le reporting devient un sous-produit de l&apos;activité normale, pas une
            surcharge administrative.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir le pilotage et reporting" },
        { to: "/offres", label: "Voir la reprise de données" },
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
    {
      question: "Ségur numérique PDS : quelles obligations pour les logiciels à composante médicale ?",
      answerText:
        "Ségur impose une identification INS qualifiée, un partage sécurisé via MSSanté, une alimentation du DMP et une traçabilité des accès et modifications. Silao intègre ces obligations pour les structures PDS à forte composante médicale.",
      answer: (
        <>
          <p>
            Les structures PDS à forte composante médicale (LHSS, ACT, CAARUD) sont soumises aux
            exigences Ségur : identification nationale de santé (INS) qualifiée, messagerie sécurisée
            MSSanté, alimentation du Dossier Médical Partagé (DMP), traçabilité des accès et
            modifications. Ces obligations garantissent la sécurité et l&apos;interopérabilité.
          </p>
          <p className="mt-3">
            Un logiciel non conforme impose aux équipes de gérer manuellement ces exigences, avec des
            risques de non-conformité et des surcharges administratives. Silao intègre nativement ces
            obligations Ségur, ce qui épargne à vos équipes les contrôles manuels et les mises à jour
            réglementaires.
          </p>
        </>
      ),
      links: [
        { to: "/conformite-sons", label: "Voir la conformité Ségur" },
        { to: "/engagements", label: "Voir les engagements sécurité" },
      ],
    },
    {
      question: "Comment gérer les droits d'accès entre équipes médicales et sociales dans un DUI PDS ?",
      answerText:
        "Un DUI PDS doit structurer les droits d'accès par rôle et par type d'information. Les équipes médicales accèdent au dossier de santé, les équipes sociales aux démarches et droits sociaux. Les informations partagées sont configurables. Silao structure ces droits d'accès.",
      answer: (
        <>
          <p>
            Dans une structure PDS, les équipes médicales et sociales interviennent sur la même
            personne. Si toutes les équipes voient toutes les informations, la confidentialité est
            fragilisée. Si rien n&apos;est partagé, la coordination devient impossible.
          </p>
          <p className="mt-3">
            Silao permet de définir des droits d&apos;accès fins : qui peut lire, modifier, exporter
            quelles informations. Une équipe médicale voit le dossier de santé, les traitements et les
            rappels. Une équipe sociale voit les démarches, le logement et les droits sociaux. Les
            zones partagées sont configurables. Cette granularité garantit la confidentialité sans
            casser la coordination.
          </p>
        </>
      ),
      links: [
        { to: "/engagements", label: "Voir les engagements sécurité" },
        { to: "/formations", label: "Voir la formation des équipes" },
      ],
    },
    {
      question: "Accompagnement au logement PDS : comment tracer les démarches dans un DUI ?",
      answerText:
        "Un DUI PDS doit tracer les démarches d'accès au logement (demandes, refus, affectations), suivre les parcours et produire des statistiques. Silao centralise ces démarches dans le dossier usager avec l'historique des actions et les délais.",
      answer: (
        <>
          <p>
            L&apos;accompagnement au logement est un enjeu central dans les structures PDS. Les
            démarches sont multiples : demandes de logement social, dossiers FSL, garanties Visale,
            relations avec les bailleurs. Si ces démarches vivent dans des fichiers séparés, la
            traçabilité est perdue et les statistiques impossibles.
          </p>
          <p className="mt-3">
            Silao centralise l&apos;accompagnement au logement dans le dossier usager : demandes en
            cours, refus, affectations, délais, bailleurs contactés. Les équipes voient l&apos;historique
            des démarches, les blocages et les succès. Les statistiques vers les tutelles sont générées
            sans ressaisie.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir l'accompagnement au logement" },
        { to: "/offres", label: "Voir la reprise de données" },
      ],
    },
    {
      question: "Reporting PDS : comment produire les statistiques d'activité pour les tutelles ARS ?",
      answerText:
        "Les structures PDS doivent produire des statistiques d'activité pour les ARS : file active, nombre de consultations, délais, pathologies suivies. Un DUI adapté génère ces exports automatiquement. Silao intègre ces exports statistiques.",
      answer: (
        <>
          <p>
            Les tutelles (ARS, CPAM, départements) demandent régulièrement des statistiques
            d&apos;activité : file active, nombre de consultations médicales, délais d&apos;accès,
            pathologies suivies, parcours de sortie. Si ces statistiques doivent être produites
            manuellement, les équipes perdent du temps et risquent des incohérences.
          </p>
          <p className="mt-3">
            Silao génère ces exports automatiquement depuis les saisies quotidiennes : consultations,
            traitements, rappels, démarches sociales. Les statistiques sont prêtes pour les tutelles
            sans ressaisie. Le reporting devient un sous-produit de l&apos;activité normale, pas une
            surcharge administrative.
          </p>
        </>
      ),
      links: [
        { to: "/#services", label: "Voir le pilotage et reporting" },
        { to: "/abonnement", label: "Voir le modèle d'abonnement" },
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
