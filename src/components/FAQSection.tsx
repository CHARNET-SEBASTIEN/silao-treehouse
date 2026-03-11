import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/**
 * FAQ construite à partir des questions réellement posées par les directeurs
 * d'ESMS (Google PAA, forums spécialisés, retours terrain).
 * Chaque réponse est autonome et citable par un moteur IA.
 */
const faqs = [
  {
    question: "Quelle est la différence entre un DUI et un simple logiciel de gestion ?",
    answerText:
      "Un DUI (Dossier Usager Informatisé) centralise l'ensemble du parcours d'un usager — projet personnalisé, transmissions, bilans, prescriptions — dans un référentiel unique. Un logiciel de gestion classique couvre souvent la facturation ou la planification, mais pas le suivi éducatif, médical et social de bout en bout. SILAO est un DUI complet : il remplace les tableaux Excel, les classeurs papier et les outils dispersés par une seule plateforme partagée entre tous les professionnels de l'ESMS.",
    answer: (
      <>
        <p>
          Un DUI (Dossier Usager Informatisé) centralise l&apos;ensemble du parcours d&apos;un usager :
          projet personnalisé, transmissions, bilans, prescriptions, dans un référentiel unique.
          Un logiciel de gestion classique couvre souvent la facturation ou la planification,
          mais pas le suivi éducatif, médical et social de bout en bout.
        </p>
        <p className="mt-3">
          SILAO est un DUI complet : il remplace les tableaux Excel, les classeurs papier et
          les outils dispersés par une seule plateforme partagée entre tous les professionnels de l&apos;ESMS.
        </p>
      </>
    ),
    links: [
      { to: "/offres", label: "Voir les offres de déploiement SILAO" },
      { to: "/accompagnement", label: "Comprendre la méthode d'accompagnement projet" },
    ],
  },
  {
    question: "SILAO est-il conforme au référentiel SONS (Socle des Objets Numériques en Santé) ?",
    answerText:
      "Oui. SILAO intègre nativement les exigences du référentiel SONS : identification nationale de santé (INS), messagerie sécurisée MSSanté, alimentation du DMP, et interopérabilité CI-SIS. Concrètement, vos devis sont acceptés sans rejet ni ambiguïté lors des appels à projets ARS ou CNSA. Silao assure une veille réglementaire continue pour anticiper chaque évolution.",
    answer: (
      <>
        <p>
          Oui. SILAO intègre nativement les exigences du référentiel SONS :
          identification nationale de santé (INS), messagerie sécurisée MSSanté,
          alimentation du DMP et interopérabilité CI-SIS.
        </p>
        <p className="mt-3">
          Concrètement, vos devis sont acceptés sans rejet ni ambiguïté lors des appels à projets
          ARS ou CNSA. SILAO assure aussi une veille réglementaire continue pour anticiper les évolutions.
        </p>
      </>
    ),
    links: [
      { to: "/conformite-sons", label: "Consulter la page conformité SONS" },
      { to: "/offres", label: "Voir comment le déploiement intègre la conformité" },
    ],
  },
  {
    question: "Peut-on utiliser SILAO quand on gère plusieurs établissements avec des secteurs différents ?",
    answerText:
      "C'est précisément le cas d'usage de l'architecture en grappes de SILAO. Chaque ESMS conserve son propre paramétrage (Protection de l'Enfance, Handicap, Insertion…), ses droits d'accès et ses formulaires métier, tout en partageant une base commune au niveau de l'association. La direction dispose d'une vue consolidée — reporting, indicateurs, taux d'occupation — sans compromettre la confidentialité entre établissements.",
    answer: (
      <>
        <p>
          C&apos;est précisément le cas d&apos;usage de l&apos;architecture en grappes de SILAO.
          Chaque ESMS conserve son propre paramétrage, ses droits d&apos;accès et ses formulaires métier,
          tout en partageant une base commune au niveau de l&apos;association.
        </p>
        <p className="mt-3">
          La direction dispose ainsi d&apos;une vue consolidée sur le reporting, les indicateurs et
          les taux d&apos;occupation, sans compromettre la confidentialité entre établissements.
        </p>
      </>
    ),
    links: [
      { to: "/grappes-esms", label: "Découvrir le fonctionnement multi-établissements" },
      { to: "/secteur/protection-enfance", label: "Voir un exemple côté protection de l'enfance" },
    ],
  },
  {
    question: "Combien de temps faut-il pour déployer SILAO dans un établissement ?",
    answerText:
      "Un déploiement standard prend entre 3 et 6 mois, selon la taille et la complexité de la structure. Le processus comprend un comité de pilotage (COMOP), la reprise de données depuis votre ancien logiciel, le paramétrage métier, la formation des équipes sur site, puis un accompagnement post-démarrage. Erreur fréquente : sous-estimer la phase de reprise de données. Silao la pilote intégralement pour éviter les pertes d'historique.",
    answer: (
      <>
        <p>
          Un déploiement standard prend entre 3 et 6 mois, selon la taille et la complexité de la structure.
          Le processus comprend un comité de pilotage, la reprise de données, le paramétrage métier,
          la formation des équipes sur site puis un accompagnement post-démarrage.
        </p>
        <p className="mt-3">
          L&apos;erreur fréquente consiste à sous-estimer la phase de reprise de données.
          SILAO la pilote intégralement pour éviter les pertes d&apos;historique.
        </p>
      </>
    ),
    links: [
      { to: "/accompagnement", label: "Voir le déroulé d'un déploiement SILAO" },
      { to: "/offres", label: "Comparer les niveaux d'accompagnement" },
    ],
  },
  {
    question: "Que se passe-t-il si on veut changer de DUI après s'être engagé avec SILAO ?",
    answerText:
      "Vos données vous appartiennent. SILAO permet l'export intégral de vos dossiers dans des formats standards (CSV, XML interopérable). Il n'y a pas de clause de rétention de données. En pratique, la portabilité est un droit, pas une option. C'est aussi pour cela que Silao propose des SLA sans limite de durée : la confiance se construit dans la durée, pas dans l'enfermement.",
    answer: (
      <>
        <p>
          Vos données vous appartiennent. SILAO permet l&apos;export intégral des dossiers
          dans des formats standards, sans clause de rétention.
        </p>
        <p className="mt-3">
          En pratique, la portabilité est un droit, pas une option. C&apos;est aussi pour cela que
          SILAO propose des SLA sans limite de durée : la confiance se construit dans la durée,
          pas dans l&apos;enfermement.
        </p>
      </>
    ),
    links: [
      { to: "/engagements", label: "Lire les engagements durables de SILAO" },
      { to: "/abonnement", label: "Consulter le modèle d'abonnement" },
    ],
  },
  {
    question: "SILAO gère-t-il les spécificités de la Protection de l'Enfance (mesures judiciaires, PPE) ?",
    answerText:
      "Oui. SILAO intègre la gestion des mesures judiciaires (OPP, AEMO, placement), le Projet Pour l'Enfant (PPE) conforme à la loi 2016, le cahier de vie numérique, la gestion des visites médiatisées et les rapports automatisés pour les magistrats. Les droits d'accès sont granulaires pour respecter la confidentialité renforcée exigée dans ce secteur. Une erreur fréquente : utiliser un DUI généraliste sans module PDE dédié — les formulaires et les workflows ne correspondent pas aux exigences terrain.",
    answer: (
      <>
        <p>
          Oui. SILAO intègre la gestion des mesures judiciaires, le Projet Pour l&apos;Enfant (PPE),
          le cahier de vie numérique, les visites médiatisées et les rapports automatisés pour les magistrats.
        </p>
        <p className="mt-3">
          Les droits d&apos;accès sont granulaires pour respecter la confidentialité renforcée exigée
          dans ce secteur. Un DUI généraliste sans module PDE dédié couvre rarement correctement ces besoins.
        </p>
      </>
    ),
    links: [
      { to: "/secteur/protection-enfance", label: "Voir la page dédiée à la protection de l'enfance" },
      { to: "/grappes-esms", label: "Voir le cas des associations multi-établissements" },
    ],
  },
  {
    question: "Comment sont gérées les mises à jour et le support technique ?",
    answerText:
      "Les mises à jour sont incluses dans l'abonnement et déployées automatiquement, sans intervention de votre équipe informatique. Le support est accessible via ticketing avec des temps de réponse garantis par SLA. Silao propose également un Club Utilisateurs où les structures co-construisent les évolutions fonctionnelles du produit. Le support n'est pas un centre d'appels externalisé : ce sont les mêmes consultants qui ont déployé votre projet.",
    answer: (
      <>
        <p>
          Les mises à jour sont incluses dans l&apos;abonnement et déployées automatiquement,
          sans intervention de votre équipe informatique.
        </p>
        <p className="mt-3">
          Le support est accessible via ticketing avec des temps de réponse garantis par SLA.
          SILAO propose également un Club Utilisateurs où les structures co-construisent les évolutions du produit.
        </p>
      </>
    ),
    links: [
      { to: "/engagements", label: "Voir les engagements de support et de SLA" },
      { to: "/abonnement", label: "Comprendre ce qui est inclus dans l'abonnement" },
    ],
  },
];

const FAQSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answerText,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Questions <span className="text-primary sketch-underline">fréquentes</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Les vraies questions que se posent les directeurs d'ESMS avant de choisir un DUI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="sketch-border bg-card px-6 rounded-none border-b-0"
              >
                <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                  <div className="mt-4 border-t border-border/40 pt-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Pages liées
                    </p>
                    <div className="flex flex-col gap-2">
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
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
