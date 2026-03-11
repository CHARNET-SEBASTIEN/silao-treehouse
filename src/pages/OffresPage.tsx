import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import DemoRequestDialog from "@/components/DemoRequestDialog";
import { motion } from "framer-motion";
import { Rocket, Users, Settings, GraduationCap, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";

const deploymentSteps = [
  {
    icon: Users,
    step: "01",
    title: "Cadrage & gouvernance",
    description: "Nous intégrons un chef de projet dédié à votre COMOP. Ensemble, nous définissons le périmètre, le planning et les indicateurs de réussite.",
    details: ["Analyse de vos besoins métier", "Constitution du COMOP", "Planning de déploiement sur mesure", "Définition des objectifs"],
  },
  {
    icon: Settings,
    step: "02",
    title: "Paramétrage & reprise de données",
    description: "Nous configurons Silao selon vos process métier et assurons la reprise de vos données existantes en toute sécurité.",
    details: ["Configuration des modules par structure", "Reprise et migration des données", "Paramétrage des droits et profils", "Interconnexions SI (ViaTrajectoire, DMP…)"],
  },
  {
    icon: GraduationCap,
    step: "03",
    title: "Formation & accompagnement au changement",
    description: "Un plan de formation adapté à chaque profil utilisateur, du directeur à l'éducateur de terrain.",
    details: ["Formations par profil métier", "Supports pédagogiques personnalisés", "Sessions de prise en main sur site ou à distance", "Référents internes formés"],
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Pilotage & suivi post-déploiement",
    description: "Nous suivons les indicateurs d'usage pour vous aider à atteindre vos objectifs et sécuriser vos financements.",
    details: ["Tableaux de bord d'usage en temps réel", "Suivi des indicateurs clés (INS, DMP…)", "Comités de suivi réguliers", "Support et maintenance continues"],
  },
];

const offerTypes = [
  {
    name: "Déploiement Standard",
    description: "Pour les structures autonomes souhaitant un déploiement encadré.",
    features: ["Chef de projet SILAO dédié", "Paramétrage standard", "Formation initiale", "Support 5j/7"],
    highlighted: false,
  },
  {
    name: "Déploiement Premium",
    description: "Pour les associations multi-sites avec des besoins de mutualisation.",
    features: ["Chef de projet SILAO senior", "Paramétrage avancé & reprise de données", "Formation sur mesure par profil", "Accompagnement au changement renforcé", "Pilotage des indicateurs d'usage", "Support 7j/7 avec SLA renforcé"],
    highlighted: true,
  },
  {
    name: "Déploiement Sur Mesure",
    description: "Pour les grandes associations et groupements nécessitant un accompagnement complet.",
    features: ["Équipe projet SILAO dédiée", "Audit organisationnel préalable", "Paramétrage entièrement personnalisé", "Conduite du changement complète", "Formation certifiante", "Comité de pilotage mensuel", "SLA illimité"],
    highlighted: false,
  },
];

const OffresPage = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background paper-grain">
      <SEOHead
        title="Offres de déploiement SILAO | Méthode, reprise de données et formation"
        description="Découvrez les offres de déploiement SILAO : cadrage, paramétrage, reprise de données, formation et suivi post-démarrage pour les ESSMS."
        canonicalPath="/offres"
      />
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
              <Rocket className="w-4 h-4" />
              Offres de déploiement
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              Un déploiement{" "}
              <span className="text-primary sketch-underline">clé en main</span>,{" "}
              adapté à votre structure
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground font-body max-w-2xl mx-auto"
            >
              Pas de déploiement « brut ». Chez SILAO, chaque projet est accompagné de bout en bout par une équipe dédiée qui comprend vos enjeux métier.
            </motion.p>
          </div>
        </section>

        {/* Étapes de déploiement */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground text-center mb-16"
            >
              Notre méthodologie en{" "}
              <span className="text-primary sketch-underline">4 étapes</span>
            </motion.h2>
            <div className="space-y-12">
              {deploymentSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="sketch-border bg-card p-8 md:flex md:gap-8 md:items-start"
                  >
                    <div className="flex items-center gap-4 mb-4 md:mb-0 md:flex-col md:items-center md:min-w-[80px]">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="text-2xl font-sketch text-primary">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground font-body mb-4">{step.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.details.map((d) => (
                          <div key={d} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm text-foreground font-body">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Offres */}
        <section className="py-20 px-4 paper-bg">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground text-center mb-4"
            >
              Choisissez l'accompagnement adapté
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground font-body text-center mb-12 max-w-2xl mx-auto"
            >
              Chaque offre inclut la méthodologie SILAO. Seul le niveau d'accompagnement varie selon la complexité de votre organisation.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offerTypes.map((offer, i) => (
                <motion.div
                  key={offer.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`sketch-border bg-card p-8 flex flex-col ${
                    offer.highlighted ? "ring-2 ring-primary/30 relative" : ""
                  }`}
                >
                  {offer.highlighted && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      Recommandé
                    </Badge>
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-2">{offer.name}</h3>
                  <p className="text-sm text-muted-foreground font-body mb-6">{offer.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {offer.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground font-body">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={offer.highlighted ? "hero" : "hero-outline"}
                    className="w-full"
                    onClick={() => setDemoOpen(true)}
                  >
                    Nous contacter <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Différenciation */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto sketch-border bg-primary/5 p-10 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              La différence SILAO ?
            </h2>
            <p className="text-muted-foreground font-body mb-4">
              Chez SILAO, la <strong>chefferie de projet</strong> n'est pas un simple accompagnement technique.
              C'est un véritable <strong>partenariat métier</strong> : nos chefs de projet connaissent vos réalités terrain
              et s'intègrent à vos instances de gouvernance.
            </p>
            <p className="text-primary font-sketch text-xl">
              Formation ≠ Gestion de projet. Nous assurons les deux.
            </p>
          </motion.div>
        </section>
      </main>
      <FooterSection />
      <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default OffresPage;
