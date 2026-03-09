import { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import heroTree from "@/assets/hero-tree.png";
import { Button } from "@/components/ui/button";
import DemoRequestDialog from "@/components/DemoRequestDialog";
import { Accessibility, ShieldCheck, Home, Baby, GraduationCap, Briefcase, ArrowRight } from "lucide-react";

const secteurs = [
  { icon: Accessibility, label: "Handicap (PH)", href: "/secteur/handicap" },
  { icon: ShieldCheck, label: "Protection enfance", href: "/secteur/protection-enfance" },
  { icon: Home, label: "Insertion / AHI", href: "/secteur/insertion-ahi" },
  { icon: Baby, label: "CAMSP / CMPP", href: "/secteur/camsp-cmpp" },
];

const services = [
  { icon: Briefcase, label: "Aide à la MOA", description: "Pilotage de projet & gouvernance" },
  { icon: GraduationCap, label: "Formation", description: "Plans adaptés par profil métier" },
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

  // Mouse position tracking for radial glow follow
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  // Glow position as CSS values
  const glowX = useTransform(smoothX, (v) => `${v * 100}%`);
  const glowY = useTransform(smoothY, (v) => `${v * 100}%`);

  return (
    <section className="relative flex flex-col items-center justify-center paper-bg overflow-hidden px-4 pt-4 pb-0">

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-6">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-2/5 shrink-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-1 leading-tight">
            SILAO, le DUI qui vous
          </h1>
          <p className="text-2xl md:text-3xl font-sketch text-primary mb-3">
            accompagne au quotidien
          </p>
          <p className="text-base text-muted-foreground font-body max-w-xl mb-5">
            Un logiciel conçu avec et pour les professionnels du social et du médico-social. Simple, humain, à vos côtés.
          </p>

          {/* 4 filières badges */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
            {secteurs.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.08 }}
              >
                <Link
                  to={s.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full sketch-border-sm bg-card text-sm font-body text-foreground hover:bg-primary/10 hover:text-primary transition-colors group"
                >
                  <s.icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  {s.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start mb-5"
          >
            {services.map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                <s.icon className="w-4 h-4 text-primary" />
                <span><strong className="text-foreground">{s.label}</strong> — {s.description}</span>
              </div>
            ))}
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Button variant="hero" size="xl" onClick={() => setDemoOpen(true)}>
              Parlons de votre projet
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/offres" className="gap-2">
                <ArrowRight className="w-5 h-5" />
                Découvrir nos offres
              </Link>
            </Button>
          </div>
          <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />
        </motion.div>

        {/* Animated Tree */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="md:w-3/5 w-full relative"
        >
          <div
            className="relative overflow-hidden rounded-2xl cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Slow zoom — intensifies on hover */}
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
              {/* Breeze sway — stronger on hover */}
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
                {/* Brightness boost on hover */}
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
                    className="w-full h-auto mix-blend-multiply"
                    style={{
                      maskImage: "radial-gradient(ellipse 65% 60% at 50% 48%, black 40%, transparent 85%)",
                      WebkitMaskImage: "radial-gradient(ellipse 65% 60% at 50% 48%, black 40%, transparent 85%)",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Cursor-following radial glow */}
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

            {/* Root pulse — much stronger on hover */}
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

            {/* Secondary warm glow — stronger on hover */}
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

            {/* Floating leaf particles */}
            <FloatingLeaf delay={0} x="35%" size={12} />
            <FloatingLeaf delay={2.5} x="55%" size={10} />
            <FloatingLeaf delay={5} x="45%" size={14} />
            <FloatingLeaf delay={7} x="60%" size={9} />
            <FloatingLeaf delay={3.5} x="38%" size={11} />

            {/* Sparkle dots — brighter on hover */}
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
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
