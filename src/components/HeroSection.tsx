import { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import heroTree from "@/assets/hero-tree.png";
import { Button } from "@/components/ui/button";
import DemoRequestDialog from "@/components/DemoRequestDialog";
import { Brain, Accessibility, ShieldCheck, Home, Baby, GraduationCap, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

const secteurs = [
  { icon: Accessibility, label: "Handicap", href: "/secteur/handicap", color: "bg-primary/15 text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground" },
  { icon: ShieldCheck, label: "Protection enfance", href: "/secteur/protection-enfance", color: "bg-secondary/15 text-secondary border-secondary/30 hover:bg-secondary hover:text-secondary-foreground" },
  { icon: Home, label: "Insertion / AHI", href: "/secteur/insertion-ahi", color: "bg-accent/15 text-accent border-accent/30 hover:bg-accent hover:text-accent-foreground" },
  { icon: Baby, label: "CAMSP / CMPP", href: "/secteur/camsp-cmpp", color: "bg-primary/15 text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground" },
];

const services = [
  { icon: Briefcase, label: "Aide à la MOA", description: "Pilotage de projet & gouvernance" },
  { icon: GraduationCap, label: "Formation", description: "Plans adaptés par profil métier" },
];

const reassurancePoints = [
  "Déploiement cadré avec vos équipes métier",
  "Conformité et cybersécurité intégrées au projet",
  "Accompagnement durable, sans migration forcée",
];

const illustrationHighlights = [
  {
    icon: Briefcase,
    title: "Déploiement accompagné",
    description: "Cadrage, paramétrage et formation portés avec vos équipes.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité intégrée",
    description: "Un cadre de travail pensé pour les exigences du terrain.",
  },
];

/* Floating leaf particle component */
const FloatingLeaf = ({ delay, x, size }: { delay: number; x: string; size: number }) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="absolute text-primary opacity-0"
    style={{ left: x, top: "20%", width: size, height: size }}
    animate={{
      y: [0, -30, -15, -45, -25],
      x: [0, 8, -6, 10, -4],
      opacity: [0, 0.35, 0.25, 0.3, 0],
      rotate: [0, 15, -10, 20, -5],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <path d="M12 1C12 1 5 8 5 14C5 18 8 21 12 21C16 21 19 18 19 14C19 8 12 1 12 1Z" />
  </motion.svg>
);

const HeroSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const glowX = useTransform(smoothX, (v) => `${v * 100}%`);
  const glowY = useTransform(smoothY, (v) => `${v * 100}%`);

  return (
    <section className="relative flex flex-col items-center justify-center paper-bg overflow-hidden px-4 pt-6 pb-8 md:pb-12">
      <div className="relative z-10 w-full max-w-6xl section-panel px-5 py-8 sm:px-8 md:px-10 md:py-10">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:w-[46%] md:text-left shrink-0"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            D2L présente
          </p>
          <h1 className="mb-2 text-4xl font-extrabold leading-[0.98] tracking-tight text-foreground md:text-6xl">
            <span className="block text-primary md:text-7xl">SILAO</span>
            <span className="block">Le DUI qui clarifie le parcours usager</span>
          </h1>
          <p className="mb-4 text-2xl text-primary font-sketch md:text-4xl">
            pour le social et médico-social
          </p>

          {/* 4 filières — playful rounded badges */}
          <div className="mb-6 flex flex-wrap justify-center gap-3 md:justify-start">
            {secteurs.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
              >
                <Link
                  to={s.href}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 text-sm font-bold transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-0.5 ${s.color}`}
                >
                  <s.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  {s.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="mb-6 max-w-xl text-lg leading-8 text-muted-foreground">
            <strong className="font-semibold text-foreground">SILAO</strong> réunit projets personnalisés, transmissions, bilans et pilotage dans un outil unique, partagé par toute l'équipe. Une lecture simple du terrain, sans ajouter de charge mentale au déploiement.
          </p>

          {/* Services — subtle chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-6 flex flex-wrap justify-center gap-3 md:justify-start"
          >
            {services.map((s) => (
              <div key={s.label} className="flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5 text-sm text-muted-foreground shadow-sm">
                <s.icon className="w-4 h-4 text-secondary" />
                <span><strong className="text-foreground">{s.label}</strong> — {s.description}</span>
              </div>
            ))}
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78 }}
            className="mb-7 space-y-2.5 text-left"
          >
            {reassurancePoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-col gap-3 md:items-start"
          >
            <Button variant="hero" size="xl" className="w-full sm:w-auto sm:min-w-[18rem]" onClick={() => setDemoOpen(true)}>
              Parlons de votre projet
            </Button>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button variant="hero-warm" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/offres" className="gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Voir les offres
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/quiz-segur" className="gap-2">
                  <Brain className="w-5 h-5" />
                  Quiz Ségur
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Démo personnalisée, cadrage métier et premier retour sous 48 h.
            </p>
          </motion.div>
          <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />
        </motion.div>

        {/* Animated Tree */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative w-full md:w-[47%] md:pt-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mb-4 text-center md:mb-5 md:text-left"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Une vision métier unifiée
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              Parcours, transmissions, bilans et pilotage rassemblés dans une seule interface partagée par les équipes.
            </p>
          </motion.div>

          <div
            className="relative flex items-center justify-center overflow-visible cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-[2.5rem] opacity-80"
              style={{
                background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.06), transparent 62%)",
              }}
            />

            <motion.div
              animate={{
                scale: isHovered ? [1.08, 1.12, 1.1] : [1, 1.06, 1.03, 1.06],
              }}
              transition={{
                duration: isHovered ? 3 : 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="origin-[50%_40%] scale-[0.98] md:scale-100"
            >
              <motion.div
                animate={{
                  rotate: isHovered
                    ? [0, 1.2, -0.8, 0.6, -0.4, 0]
                    : [0, 0.4, -0.3, 0.2, 0],
                }}
                transition={{
                  duration: isHovered ? 3 : 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="origin-[50%_85%]"
              >
                <motion.div
                  animate={{
                    filter: isHovered
                      ? "brightness(1.15) saturate(1.2)"
                      : "brightness(1) saturate(1)",
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={heroTree}
                    alt="Arbre éducatif avec enfants et éducateurs"
                    className="mx-auto h-[16rem] w-auto max-w-none mix-blend-multiply sm:h-[20rem] md:h-[25rem] lg:h-[28rem] xl:h-[31rem]"
                    style={{
                      maskImage: "radial-gradient(ellipse 65% 60% at 50% 48%, black 40%, transparent 85%)",
                      WebkitMaskImage: "radial-gradient(ellipse 65% 60% at 50% 48%, black 40%, transparent 85%)",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              style={{
                background: useTransform(
                  [glowX, glowY],
                  ([x, y]) =>
                    `radial-gradient(circle 180px at ${x} ${y}, hsl(var(--secondary) / 0.25), transparent 70%)`
                ),
              }}
            />

            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[25%] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 80%, hsl(var(--primary) / 0.15), transparent 70%)",
                borderRadius: "50%",
              }}
              animate={{
                opacity: isHovered ? [0.3, 1, 0.5, 0.9, 0.3] : [0, 0.6, 0.2, 0.7, 0],
                scale: isHovered ? [1, 1.25, 1.05, 1.2, 1] : [0.9, 1.1, 0.95, 1.05, 0.9],
              }}
              transition={{
                duration: isHovered ? 2.5 : 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[40%] h-[15%] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 70%, hsl(var(--secondary) / 0.12), transparent 70%)",
                borderRadius: "50%",
              }}
              animate={{
                opacity: isHovered ? [0.4, 0.9, 0.3, 0.85, 0.4] : [0.1, 0.5, 0.15, 0.45, 0.1],
                scale: isHovered ? [1, 1.3, 1.1, 1.25, 1] : [1, 1, 1, 1, 1],
              }}
              transition={{
                duration: isHovered ? 2 : 3.5,
                delay: isHovered ? 0 : 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <FloatingLeaf delay={0} x="35%" size={12} />
            <FloatingLeaf delay={2.5} x="55%" size={10} />
            <FloatingLeaf delay={5} x="45%" size={14} />
            <FloatingLeaf delay={7} x="60%" size={9} />
            <FloatingLeaf delay={3.5} x="38%" size={11} />

            {[
              { x: "42%", y: "30%", d: 0 },
              { x: "55%", y: "25%", d: 1.5 },
              { x: "48%", y: "38%", d: 3 },
              { x: "38%", y: "22%", d: 4.5 },
              { x: "52%", y: "35%", d: 2 },
              { x: "60%", y: "32%", d: 1 },
              { x: "35%", y: "28%", d: 3.5 },
            ].map((dot, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: dot.x,
                  top: dot.y,
                  width: isHovered ? 6 : 5,
                  height: isHovered ? 6 : 5,
                  background: `hsl(var(--secondary) / ${isHovered ? 0.8 : 0.6})`,
                  boxShadow: `0 0 ${isHovered ? 12 : 6}px ${isHovered ? 4 : 2}px hsl(var(--secondary) / ${isHovered ? 0.5 : 0.3})`,
                }}
                animate={{
                  opacity: isHovered
                    ? [0.2, 1, 0.4, 1, 0.2]
                    : [0, 0.8, 0, 0.6, 0],
                  scale: isHovered
                    ? [0.8, 1.5, 0.8, 1.3, 0.8]
                    : [0.5, 1.2, 0.5, 1, 0.5],
                }}
                transition={{
                  duration: isHovered ? 2 : 4,
                  delay: dot.d * (isHovered ? 0.3 : 1),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {illustrationHighlights.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/60 bg-background/70 px-4 py-4 shadow-sm backdrop-blur"
              >
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <item.icon className="h-4 w-4" />
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
