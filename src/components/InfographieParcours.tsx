import { motion } from "framer-motion";
import { FileText, Cog, BarChart3, Handshake } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "Étape 1",
    title: "Le Devis Transparent",
    description:
      "Application directe des financements disponibles. Séparation claire du reste à charge et de la dette technologique.",
    accent: "0€ de surprise",
  },
  {
    icon: Cog,
    step: "Étape 2",
    title: "Le Déploiement Métier",
    description:
      "Intégration de nos chefs de projet à votre COMOP. Formation sur site et accompagnement personnalisé.",
    accent: "Clé en main",
  },
  {
    icon: BarChart3,
    step: "Étape 3",
    title: "L'Atteinte des Cibles",
    description:
      "Suivi en temps réel de vos taux d'usage (INS, DMP) via nos indicateurs intégrés pour garantir vos financements.",
    accent: "100% piloté",
  },
  {
    icon: Handshake,
    step: "Étape 4",
    title: "Le Partenariat Durable",
    description:
      "Support réactif avec SLA formalisés et co-construction des futures versions via le Club Utilisateurs.",
    accent: "Sans limite de durée",
  },
];

const InfographieParcours = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-body mb-3">
            Infographie
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Le parcours{" "}
            <span className="text-primary sketch-underline">« Zéro Charge Mentale »</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            4 étapes simples pour un déploiement serein avec SILAO.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-1 md:gap-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className={`relative md:flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } md:gap-8 md:mb-12`}
                >
                  {/* Card */}
                  <div className={`md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div className="sketch-border bg-card p-6 hover:shadow-lg transition-shadow">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">
                            {step.step}
                          </p>
                          <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">
                        {step.description}
                      </p>
                      <span className="inline-block mt-3 text-xs font-body font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {step.accent}
                      </span>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center w-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.2 }}
                      className="w-4 h-4 rounded-full bg-primary border-2 border-background shadow-md"
                    />
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfographieParcours;
