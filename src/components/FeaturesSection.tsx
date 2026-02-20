import { motion } from "framer-motion";
import { Users, Shield, FileText, Share2, ClipboardList, BarChart3 } from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Dossier Usager Informatisé",
    description: "Centralisez les données administratives, sociales, éducatives et médicales dans un DUI unique et structuré.",
  },
  {
    icon: Users,
    title: "Coordination pluridisciplinaire",
    description: "Facilitez le travail en équipe avec le cahier de transmissions, les projets personnalisés et le partage d'informations en temps réel.",
  },
  {
    icon: Shield,
    title: "Conformité Ségur & RGPD",
    description: "Solution compatible Ségur du Numérique avec traçabilité complète, gestion fine des droits d'accès et hébergement HDS.",
  },
  {
    icon: FileText,
    title: "Synthèses & rapports",
    description: "Générez vos synthèses éducatives, rapports ANAP et tableaux de bord en quelques clics.",
  },
  {
    icon: BarChart3,
    title: "Pilotage d'activité",
    description: "Indicateurs de suivi, taux d'occupation, statistiques et reporting pour un pilotage éclairé de votre ESSMS.",
  },
  {
    icon: Share2,
    title: "100% web & multi-sites",
    description: "Accessible depuis tout appareil, sans installation. Idéal pour les structures multi-établissements et les équipes mobiles.",
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
            Une solution <span className="text-primary sketch-underline">complète</span> pour le terrain
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Silao accompagne les MECS, IME, ITEP, ESAT, SESSAD, CHRS et bien d'autres structures au quotidien.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
