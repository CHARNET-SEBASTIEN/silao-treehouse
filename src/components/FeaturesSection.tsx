import { motion } from "framer-motion";
import { Users, Shield, FileText, Share2 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Suivi collaboratif",
    description: "Partagez les informations entre équipes en temps réel, selon les droits d'accès de chacun.",
  },
  {
    icon: FileText,
    title: "Synthèses simplifiées",
    description: "Préparez vos synthèses éducatives en quelques clics grâce à des outils intuitifs.",
  },
  {
    icon: Shield,
    title: "Droits des usagers",
    description: "Respectez les droits des usagers avec un suivi conforme aux exigences réglementaires.",
  },
  {
    icon: Share2,
    title: "Accès web sécurisé",
    description: "Travaillez depuis n'importe où grâce à une application 100% web et sécurisée.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Un nouveau <span className="text-primary sketch-underline">confort de travail</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Silao accompagne vos équipes au quotidien avec des outils pensés pour le terrain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="sketch-border bg-card p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
