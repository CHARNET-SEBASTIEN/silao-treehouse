import { motion, type Easing } from "framer-motion";
import { Users, Shield, FileText, Share2, ClipboardList, BarChart3 } from "lucide-react";

// Unique hand-drawn SVG illustrations per feature
const featureIllustrations: Record<string, React.ReactNode> = {
  dui: (
    // Child reading under a tree
    <g>
      <path d="M30 55 C30 55 28 35 30 25 C32 15 30 10 30 10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M30 25 C30 25 20 18 15 20" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M30 25 C30 25 40 18 45 20" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <ellipse cx="30" cy="12" rx="18" ry="12" fill="currentColor" opacity="0.15" />
      <ellipse cx="20" cy="16" rx="10" ry="8" fill="currentColor" opacity="0.1" />
      <ellipse cx="40" cy="16" rx="10" ry="8" fill="currentColor" opacity="0.1" />
      <circle cx="22" cy="50" r="3" fill="currentColor" opacity="0.3" />
      <path d="M22 53 L22 58 M20 55 L24 55" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <rect x="18" y="56" rx="1" width="8" height="5" fill="currentColor" opacity="0.15" />
    </g>
  ),
  coordination: (
    // Group of children holding hands
    <g>
      <circle cx="15" cy="22" r="3" fill="currentColor" opacity="0.3" />
      <path d="M15 25 L15 35 M12 28 L18 28 M13 35 L15 32 L17 35" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="30" cy="20" r="3.5" fill="currentColor" opacity="0.35" />
      <path d="M30 23.5 L30 35 M26 27 L34 27 M28 35 L30 31 L32 35" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="45" cy="22" r="3" fill="currentColor" opacity="0.3" />
      <path d="M45 25 L45 35 M42 28 L48 28 M43 35 L45 32 L47 35" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M18 28 C22 26 26 26 26 27" stroke="currentColor" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeDasharray="2 2" />
      <path d="M34 27 C38 26 42 26 42 28" stroke="currentColor" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeDasharray="2 2" />
      <path d="M10 42 Q30 38 50 42" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.2" />
    </g>
  ),
  segur: (
    // Shield with a small tree inside
    <g>
      <path d="M30 8 L48 16 L48 32 C48 42 30 52 30 52 C30 52 12 42 12 32 L12 16 Z" fill="currentColor" opacity="0.07" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 46 C30 46 29 30 30 24 C31 18 30 16 30 16" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
      <ellipse cx="30" cy="18" rx="8" ry="6" fill="currentColor" opacity="0.15" />
      <ellipse cx="25" cy="21" rx="5" ry="4" fill="currentColor" opacity="0.1" />
      <ellipse cx="35" cy="21" rx="5" ry="4" fill="currentColor" opacity="0.1" />
      <path d="M30 24 C30 24 24 22 22 24" stroke="currentColor" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M30 24 C30 24 36 22 38 24" stroke="currentColor" strokeWidth="0.8" fill="none" strokeLinecap="round" />
    </g>
  ),
  rapports: (
    // Child drawing on paper / notebook
    <g>
      <rect x="14" y="12" rx="2" width="32" height="40" fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="20" y1="26" x2="38" y2="26" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="20" y1="32" x2="35" y2="32" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <line x1="20" y1="38" x2="32" y2="38" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      <path d="M42 44 L46 36 L50 44" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
      <circle cx="46" cy="34" r="2" fill="currentColor" opacity="0.3" />
      <path d="M36 42 Q38 38 40 42" stroke="currentColor" strokeWidth="0.6" fill="currentColor" opacity="0.12" />
    </g>
  ),
  pilotage: (
    // Growing tree with chart bars
    <g>
      <rect x="10" y="40" width="6" height="14" rx="1" fill="currentColor" opacity="0.15" />
      <rect x="19" y="32" width="6" height="22" rx="1" fill="currentColor" opacity="0.2" />
      <rect x="28" y="24" width="6" height="30" rx="1" fill="currentColor" opacity="0.25" />
      <rect x="37" y="18" width="6" height="36" rx="1" fill="currentColor" opacity="0.3" />
      <path d="M43 16 C43 16 42 10 43 6" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
      <ellipse cx="43" cy="6" rx="6" ry="5" fill="currentColor" opacity="0.12" />
      <path d="M43 10 C43 10 48 8 50 10" stroke="currentColor" strokeWidth="0.7" fill="none" strokeLinecap="round" />
      <path d="M43 10 C43 10 38 8 36 10" stroke="currentColor" strokeWidth="0.7" fill="none" strokeLinecap="round" />
      <path d="M12 40 Q22 28 32 24 Q38 20 43 16" stroke="currentColor" strokeWidth="0.8" fill="none" strokeDasharray="3 2" opacity="0.4" />
    </g>
  ),
  web: (
    // Child with tablet under leaves
    <g>
      <circle cx="30" cy="14" r="4" fill="currentColor" opacity="0.3" />
      <path d="M30 18 L30 32 M26 22 L34 22 M27 32 L30 28 L33 32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="22" y="23" rx="2" width="16" height="10" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="0.8" />
      <path d="M8 8 Q14 4 20 10" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.08" />
      <path d="M40 6 Q46 2 52 8" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.08" />
      <path d="M46 14 Q50 10 54 14" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.06" />
      <path d="M6 14 Q10 10 14 14" stroke="currentColor" strokeWidth="0.8" fill="currentColor" opacity="0.06" />
      <circle cx="12" cy="40" r="1" fill="currentColor" opacity="0.15" />
      <circle cx="48" cy="38" r="1.5" fill="currentColor" opacity="0.12" />
      <circle cx="50" cy="44" r="1" fill="currentColor" opacity="0.1" />
    </g>
  ),
};

const features = [
  {
    icon: ClipboardList,
    title: "Dossier Usager Informatisé",
    description: "Centralisez les données administratives, sociales, éducatives et médicales dans un DUI unique et structuré.",
    illustrationKey: "dui",
  },
  {
    icon: Users,
    title: "Coordination pluridisciplinaire",
    description: "Facilitez le travail en équipe avec le cahier de transmissions, les projets personnalisés et le partage d'informations en temps réel.",
    illustrationKey: "coordination",
  },
  {
    icon: Shield,
    title: "Conformité Ségur & RGPD",
    description: "Solution compatible Ségur du Numérique avec traçabilité complète, gestion fine des droits d'accès et hébergement HDS.",
    illustrationKey: "segur",
  },
  {
    icon: FileText,
    title: "Synthèses & rapports",
    description: "Générez vos synthèses éducatives, rapports ANAP et tableaux de bord en quelques clics.",
    illustrationKey: "rapports",
  },
  {
    icon: BarChart3,
    title: "Pilotage d'activité",
    description: "Indicateurs de suivi, taux d'occupation, statistiques et reporting pour un pilotage éclairé de votre ESSMS.",
    illustrationKey: "pilotage",
  },
  {
    icon: Share2,
    title: "100% web & multi-sites",
    description: "Accessible depuis tout appareil, sans installation. Idéal pour les structures multi-établissements et les équipes mobiles.",
    illustrationKey: "web",
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
              <div className="sketch-border bg-card p-8 pt-20 relative overflow-hidden transition-shadow duration-300 group-hover:shadow-xl">
                {/* Unique hand-drawn illustration */}
                <motion.svg
                  className="absolute top-2 right-2 w-24 h-24 text-primary/20 group-hover:text-primary/30 transition-colors"
                  viewBox="0 0 60 60"
                  fill="none"
                  {...leafSway}
                >
                  {featureIllustrations[feature.illustrationKey]}
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
