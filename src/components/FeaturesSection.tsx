import { motion, type Easing } from "framer-motion";
import { Users, Shield, FileText, Share2, ClipboardList, BarChart3 } from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Dossier Usager Informatisé",
    description: "Centralisez les données administratives, sociales, éducatives et médicales dans un DUI unique et structuré.",
    leaf: "M20 2C20 2 8 12 8 24C8 32 14 38 20 38C26 38 32 32 32 24C32 12 20 2 20 2Z",
  },
  {
    icon: Users,
    title: "Coordination pluridisciplinaire",
    description: "Facilitez le travail en équipe avec le cahier de transmissions, les projets personnalisés et le partage d'informations en temps réel.",
    leaf: "M20 2C20 2 8 12 8 24C8 32 14 38 20 38C26 38 32 32 32 24C32 12 20 2 20 2Z",
  },
  {
    icon: Shield,
    title: "Conformité Ségur & RGPD",
    description: "Solution compatible Ségur du Numérique avec traçabilité complète, gestion fine des droits d'accès et hébergement HDS.",
    leaf: "M20 2C20 2 8 12 8 24C8 32 14 38 20 38C26 38 32 32 32 24C32 12 20 2 20 2Z",
  },
  {
    icon: FileText,
    title: "Synthèses & rapports",
    description: "Générez vos synthèses éducatives, rapports ANAP et tableaux de bord en quelques clics.",
    leaf: "M20 2C20 2 8 12 8 24C8 32 14 38 20 38C26 38 32 32 32 24C32 12 20 2 20 2Z",
  },
  {
    icon: BarChart3,
    title: "Pilotage d'activité",
    description: "Indicateurs de suivi, taux d'occupation, statistiques et reporting pour un pilotage éclairé de votre ESSMS.",
    leaf: "M20 2C20 2 8 12 8 24C8 32 14 38 20 38C26 38 32 32 32 24C32 12 20 2 20 2Z",
  },
  {
    icon: Share2,
    title: "100% web & multi-sites",
    description: "Accessible depuis tout appareil, sans installation. Idéal pour les structures multi-établissements et les équipes mobiles.",
    leaf: "M20 2C20 2 8 12 8 24C8 32 14 38 20 38C26 38 32 32 32 24C32 12 20 2 20 2Z",
  },
];

const easeOut: Easing = "easeOut";
const easeInOut: Easing = "easeInOut";

const branchVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.15, ease: easeOut },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 + 0.4, ease: easeOut },
  }),
};

const leafSway = {
  animate: {
    rotate: [0, -3, 3, -2, 0],
    transition: { duration: 4, repeat: Infinity, ease: easeInOut },
  },
};

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background tree trunk SVG */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-40 opacity-[0.06] pointer-events-none"
        viewBox="0 0 160 800"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M80 800 C80 800 60 600 65 400 C68 300 50 200 80 50 C110 200 92 300 95 400 C100 600 80 800 80 800Z"
          fill="hsl(var(--foreground))"
        />
        <path d="M80 350 C80 350 30 280 10 250" stroke="hsl(var(--foreground))" strokeWidth="3" fill="none" />
        <path d="M80 350 C80 350 130 280 150 250" stroke="hsl(var(--foreground))" strokeWidth="3" fill="none" />
        <path d="M80 500 C80 500 20 450 5 420" stroke="hsl(var(--foreground))" strokeWidth="2.5" fill="none" />
        <path d="M80 500 C80 500 140 450 155 420" stroke="hsl(var(--foreground))" strokeWidth="2.5" fill="none" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative group"
            >
              {/* Decorative branch line connecting to card */}
              <svg
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-8 overflow-visible"
                viewBox="0 0 80 32"
                fill="none"
              >
                <motion.path
                  d="M40 32 C40 20 40 10 40 0"
                  stroke="hsl(var(--primary) / 0.3)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  custom={index}
                  variants={branchVariants}
                />
              </svg>

              {/* Card */}
              <div className="sketch-border bg-card p-8 relative overflow-hidden transition-shadow duration-300 group-hover:shadow-xl">
                {/* Floating leaf decoration */}
                <motion.svg
                  className="absolute -top-2 -right-2 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  {...leafSway}
                >
                  <path d={feature.leaf} />
                </motion.svg>

                {/* Second small leaf */}
                <motion.svg
                  className="absolute bottom-3 left-3 w-6 h-6 text-secondary/10 group-hover:text-secondary/20 transition-colors"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  animate={{
                    rotate: [0, 4, -4, 2, 0],
                    transition: { duration: 5, repeat: Infinity, ease: easeInOut as Easing, delay: index * 0.3 },
                  }}
                >
                  <path d={feature.leaf} />
                </motion.svg>

                {/* Icon with sketch circle */}
                <div className="relative w-16 h-16 mb-5">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64">
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="hsl(var(--primary) / 0.08)"
                      stroke="hsl(var(--primary) / 0.25)"
                      strokeWidth="2"
                      strokeDasharray="4 3"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{feature.description}</p>

                {/* Bottom sketch line */}
                <motion.div
                  className="absolute bottom-0 left-4 right-4 h-[2px]"
                  style={{ background: "hsl(var(--primary) / 0.15)" }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
