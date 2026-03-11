import { useEffect } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/**
 * FAQ construite à partir des questions réellement posées par les directeurs
 * d'ESMS (Google PAA, forums spécialisés, retours terrain).
 * Chaque réponse est autonome et citable par un moteur IA.
 */
const faqs = [
  {
    question: "Quelle est la différence entre un DUI et un simple logiciel de gestion ?",
    answer:
      "Un DUI (Dossier Usager Informatisé) centralise l'ensemble du parcours d'un usager — projet personnalisé, transmissions, bilans, prescriptions — dans un référentiel unique. Un logiciel de gestion classique couvre souvent la facturation ou la planification, mais pas le suivi éducatif, médical et social de bout en bout. D2L est un DUI complet : il remplace les tableaux Excel, les classeurs papier et les outils dispersés par une seule plateforme partagée entre tous les professionnels de l'ESMS.",
  },
  {
    question: "D2L est-il conforme au référentiel SONS (Socle des Objets Numériques en Santé) ?",
    answer:
      "Oui. D2L intègre nativement les exigences du référentiel SONS : identification nationale de santé (INS), messagerie sécurisée MSSanté, alimentation du DMP, et interopérabilité CI-SIS. Concrètement, vos devis sont acceptés sans rejet ni ambiguïté lors des appels à projets ARS ou CNSA. Silao assure une veille réglementaire continue pour anticiper chaque évolution.",
  },
  {
    question: "Peut-on utiliser D2L quand on gère plusieurs établissements avec des secteurs différents ?",
    answer:
      "C'est précisément le cas d'usage de l'architecture en grappes de D2L. Chaque ESMS conserve son propre paramétrage (Protection de l'Enfance, Handicap, Insertion…), ses droits d'accès et ses formulaires métier, tout en partageant une base commune au niveau de l'association. La direction dispose d'une vue consolidée — reporting, indicateurs, taux d'occupation — sans compromettre la confidentialité entre établissements.",
  },
  {
    question: "Combien de temps faut-il pour déployer D2L dans un établissement ?",
    answer:
      "Un déploiement standard prend entre 3 et 6 mois, selon la taille et la complexité de la structure. Le processus comprend un comité de pilotage (COMOP), la reprise de données depuis votre ancien logiciel, le paramétrage métier, la formation des équipes sur site, puis un accompagnement post-démarrage. Erreur fréquente : sous-estimer la phase de reprise de données. Silao la pilote intégralement pour éviter les pertes d'historique.",
  },
  {
    question: "Que se passe-t-il si on veut changer de DUI après s'être engagé avec D2L ?",
    answer:
      "Vos données vous appartiennent. D2L permet l'export intégral de vos dossiers dans des formats standards (CSV, XML interopérable). Il n'y a pas de clause de rétention de données. En pratique, la portabilité est un droit, pas une option. C'est aussi pour cela que Silao propose des SLA sans limite de durée : la confiance se construit dans la durée, pas dans l'enfermement.",
  },
  {
    question: "D2L gère-t-il les spécificités de la Protection de l'Enfance (mesures judiciaires, PPE) ?",
    answer:
      "Oui. D2L intègre la gestion des mesures judiciaires (OPP, AEMO, placement), le Projet Pour l'Enfant (PPE) conforme à la loi 2016, le cahier de vie numérique, la gestion des visites médiatisées et les rapports automatisés pour les magistrats. Les droits d'accès sont granulaires pour respecter la confidentialité renforcée exigée dans ce secteur. Une erreur fréquente : utiliser un DUI généraliste sans module PDE dédié — les formulaires et les workflows ne correspondent pas aux exigences terrain.",
  },
  {
    question: "Comment sont gérées les mises à jour et le support technique ?",
    answer:
      "Les mises à jour sont incluses dans l'abonnement et déployées automatiquement, sans intervention de votre équipe informatique. Le support est accessible via ticketing avec des temps de réponse garantis par SLA. Silao propose également un Club Utilisateurs où les structures co-construisent les évolutions fonctionnelles du produit. Le support n'est pas un centre d'appels externalisé : ce sont les mêmes consultants qui ont déployé votre projet.",
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
          text: faq.answer,
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
