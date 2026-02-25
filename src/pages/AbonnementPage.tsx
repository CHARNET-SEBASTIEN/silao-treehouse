import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import DemoRequestDialog from "@/components/DemoRequestDialog";
import { motion } from "framer-motion";
import { CreditCard, CheckCircle2, HelpCircle, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const includedItems = [
  "Accès complet à tous les modules Silao",
  "Mises à jour réglementaires incluses (Ségur, SERAFIN-PH…)",
  "Support technique par ticket et téléphone",
  "Hébergement sécurisé HDS (Hébergeur de Données de Santé)",
  "Sauvegardes automatiques quotidiennes",
  "Formation continue via le Club Utilisateurs",
  "Interopérabilité DMP, MSSanté, ViaTrajectoire",
  "Évolutions fonctionnelles régulières",
];

const faqItems = [
  {
    question: "Comment est calculé le tarif ?",
    answer: "Le tarif est basé sur le nombre d'établissements/services (FINESS) et le nombre d'utilisateurs. Nous proposons des tarifs dégressifs pour les associations multi-sites.",
  },
  {
    question: "Y a-t-il des frais cachés ?",
    answer: "Non. L'abonnement inclut l'hébergement, les mises à jour, le support et la maintenance. Le déploiement initial fait l'objet d'un devis séparé et transparent.",
  },
  {
    question: "Quelle est la durée d'engagement ?",
    answer: "Nous proposons des contrats de 3 ans alignés sur les CPOM, avec possibilité de reconduction. Pas de piège : nous misons sur la qualité de service pour fidéliser.",
  },
  {
    question: "Les mises à jour réglementaires sont-elles incluses ?",
    answer: "Oui, toutes les mises à jour liées aux évolutions réglementaires (Ségur, SERAFIN-PH, réformes tarifaires) sont incluses dans l'abonnement sans surcoût.",
  },
  {
    question: "Peut-on ajouter des utilisateurs en cours de contrat ?",
    answer: "Oui, l'ajout d'utilisateurs est possible à tout moment avec un ajustement proportionnel de l'abonnement.",
  },
];

const AbonnementPage = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background paper-grain">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 px-4 paper-bg">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-body"
            >
              <CreditCard className="w-4 h-4" />
              Modèle d'abonnement
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Un abonnement{" "}
              <span className="text-primary sketch-underline">tout compris</span>,{" "}
              sans surprise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground font-body max-w-2xl mx-auto"
            >
              Un modèle simple et transparent : un abonnement annuel qui couvre l'intégralité de la solution, de l'hébergement HDS aux mises à jour réglementaires.
            </motion.p>
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground text-center mb-12"
            >
              Tout est <span className="text-primary sketch-underline">inclus</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {includedItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 p-4 sketch-border-sm bg-card"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground font-body">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparence */}
        <section className="py-20 px-4 paper-bg">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="sketch-border bg-card p-8 md:p-10 text-center"
            >
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Notre engagement transparence
              </h2>
              <p className="text-muted-foreground font-body mb-6">
                Le déploiement (paramétrage, formation, reprise de données) fait l'objet d'un <strong>devis détaillé et séparé</strong>.
                L'abonnement annuel couvre ensuite <strong>tout le reste</strong> : hébergement, maintenance, support, mises à jour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" onClick={() => setDemoOpen(true)}>
                  Obtenir un devis personnalisé
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ abonnement */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground text-center mb-12"
            >
              Questions fréquentes
            </motion.h2>
            <div className="space-y-4">
              {faqItems.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="sketch-border bg-card p-6"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <h3 className="text-lg font-bold text-foreground">{faq.question}</h3>
                  </div>
                  <p className="text-muted-foreground font-body pl-8">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 paper-bg">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto sketch-border bg-primary/5 p-10 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Prêt à simplifier votre gestion ?
            </h2>
            <p className="text-muted-foreground font-body mb-6">
              Contactez-nous pour un devis adapté à votre taille et vos besoins. Sans engagement.
            </p>
            <Button variant="hero" size="xl" onClick={() => setDemoOpen(true)}>
              Demander un devis <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </section>
      </main>
      <FooterSection />
      <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default AbonnementPage;
