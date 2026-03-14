import { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import heroTree from "@/assets/hero-tree.png";
import { Button } from "@/components/ui/button";
import DemoRequestDialog from "@/components/DemoRequestDialog";
import { Brain, Accessibility, ShieldCheck, Home, Baby, ArrowRight, CheckCircle2 } from "lucide-react";

const secteurs = [
  { icon: Accessibility, label: "Handicap", href: "/secteur/handicap", color: "bg-primary/12 text-primary border-primary/25 hover:bg-primary hover:text-primary-foreground" },
  { icon: ShieldCheck, label: "Protection enfance", href: "/secteur/protection-enfance", color: "bg-secondary/12 text-secondary border-secondary/25 hover:bg-secondary hover:text-secondary-foreground" },
  { icon: Home, label: "Insertion / AHI", href: "/secteur/insertion-ahi", color: "bg-accent/12 text-accent border-accent/25 hover:bg-accent hover:text-accent-foreground" },
  { icon: Baby, label: "CAMSP / CMPP", href: "/secteur/camsp-cmpp", color: "bg-primary/12 text-primary border-primary/25 hover:bg-primary hover:text-primary-foreground" },
];

const reassurancePoints = [
  "Déploiement cadré avec vos équipes métier",
  "Conformité et cybersécurité intégrées",
  "Accompagnement durable, sans migration forcée",
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
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 pt-8 pb-12 md:pb-16">
      <div className="relative z-10 w-full max-w-6xl">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:w-[50%] md:text-left shrink-0"
          >
            <h1 className="mb-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              <span className="block text-primary font-sketch md:text-7xl">SILAO</span>
              <span className="block mt-1">Le DUI qui clarifie le parcours usager</span>
            </h1>
            <p className="mb-5 text-xl text-primary/80 font-sketch md:text-3xl">
              pour le social et médico-social
            </p>

            <p className="mb-6 max-w-lg text-base leading-7 text-muted-foreground md:text-lg">
              Projets personnalisés, transmissions, bilans et pilotage dans un outil unique, partagé par toute l'équipe.
            </p>

            {/* Secteur badges */}
            <div className="mb-6 flex flex-wrap justify-center gap-2.5 md:justify-start">
              {secteurs.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 200 }}
                >
                  <Link
                    to={s.href}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border-2 text-xs font-bold transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-0.5 ${s.color}`}
                  >
                    <s.icon className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                    {s.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Reassurance */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mb-7 space-y-2 text-left"
            >
              {reassurancePoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col gap-3 md:items-start"
            >
              <Button variant="hero" size="xl" className="w-full sm:w-auto sm:min-w-[16rem]" onClick={() => setDemoOpen(true)}>
                Parlons de votre projet
              </Button>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button variant="hero-warm" size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/offres" className="gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Voir les offres
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/quiz-segur" className="gap-2">
                    <Brain className="w-4 h-4" />
                    Quiz Ségur
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Démo personnalisée · Premier retour sous 48 h
              </p>
            </motion.div>
            <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />
          </motion.div>

          {/* Hero illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative w-full md:w-[45%]"
          >
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
                className="origin-[50%_40%]"
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
                      className="mx-auto h-[18rem] w-auto max-w-none mix-blend-multiply sm:h-[22rem] md:h-[26rem] lg:h-[28rem]"
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
                  opacity: isHovered ? [0.3, 1, 0.5] : [0, 0.6, 0.2],
                  scale: isHovered ? [1, 1.25, 1.05] : [0.9, 1.1, 0.95],
                }}
                transition={{
                  duration: isHovered ? 2.5 : 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <FloatingLeaf delay={0} x="35%" size={12} />
              <FloatingLeaf delay={2.5} x="55%" size={10} />
              <FloatingLeaf delay={5} x="45%" size={14} />
              <FloatingLeaf delay={7} x="60%" size={9} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
