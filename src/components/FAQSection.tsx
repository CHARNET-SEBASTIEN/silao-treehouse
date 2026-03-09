import { useEffect } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qu'est-ce que le DUI D2L et à qui s'adresse-t-il ?",
    answer: "D2L est un Dossier Usager Informatisé conçu spécifiquement pour les établissements et services sociaux et médico-sociaux (ESMS). Il couvre la Protection de l'Enfance, le Handicap, l'Insertion et le secteur médico-social. Il s'adresse aux associations, fondations et collectivités gérant un ou plusieurs établissements.",
  },
  {
    question: "D2L est-il conforme aux exigences réglementaires en vigueur ?",
    answer: "Oui, D2L garantit une conformité totale aux référentiels réglementaires en vigueur. Nos devis sont 100% conformes, zéro rejet, zéro ambiguïté. Nous assurons une veille réglementaire permanente pour anticiper les évolutions.",
  },
  {
    question: "Comment fonctionne l'architecture en grappes multi-ESMS ?",
    answer: "L'architecture en grappes permet de mutualiser votre DUI entre plusieurs établissements tout en conservant l'autonomie de chacun. Chaque ESMS dispose de son propre espace tout en bénéficiant d'une vue consolidée au niveau de l'association. Cela simplifie la gestion, réduit les coûts et facilite le reporting.",
  },
  {
    question: "Quel accompagnement proposez-vous lors du déploiement ?",
    answer: "Nous proposons un partenariat opérationnel clé en main : du comité de pilotage (COMOP) aux cibles Ségur. Cela inclut la formation des équipes, la migration des données, le paramétrage personnalisé et un support dédié pendant toute la phase de déploiement.",
  },
  {
    question: "Quels sont vos engagements de service ?",
    answer: "Nos engagements sont formalisés par des SLA (Service Level Agreements) sans limite de durée : disponibilité garantie, temps de réponse du support, ticketing transparent, mises à jour régulières et accès au Club Utilisateurs pour co-construire les évolutions du produit. Un partenariat durable avec Silao.",
  },
  {
    question: "Comment demander une démonstration de D2L ?",
    answer: "Cliquez sur le bouton « Demandez la démo » présent sur notre site. Remplissez le formulaire avec vos coordonnées et notre équipe vous recontactera sous 48h pour organiser une démonstration personnalisée adaptée à votre secteur d'activité.",
  },
];

const FAQSection = () => {
  useEffect(() => {
    // Inject JSON-LD structured data for SEO
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
    <section className="py-20 px-4">
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
            Tout ce que vous devez savoir sur D2L et le Dossier Usager Informatisé.
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
