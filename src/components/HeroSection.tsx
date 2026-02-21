import { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import heroTree from "@/assets/hero-tree.png";
import { Button } from "@/components/ui/button";
import DemoRequestDialog from "@/components/DemoRequestDialog";

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
      {/* Decorative leaf SVGs */}
      <svg className="absolute top-10 left-10 w-16 h-16 text-leaf opacity-30 animate-sway" viewBox="0 0 64 64" fill="currentColor">
        <path d="M32 2C32 2 10 20 10 40C10 52 20 62 32 62C44 62 54 52 54 40C54 20 32 2 32 2Z" />
      </svg>
      <svg className="absolute bottom-20 right-16 w-12 h-12 text-leaf opacity-20 animate-sway" style={{ animationDelay: "2s" }} viewBox="0 0 64 64" fill="currentColor">
        <path d="M32 2C32 2 10 20 10 40C10 52 20 62 32 62C44 62 54 52 54 40C54 20 32 2 32 2Z" />
      </svg>

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-6">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-2/5 shrink-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-1 leading-tight">
            SILAO, DUI pensé pour
          </h1>
          <p className="text-2xl md:text-3xl font-sketch text-primary mb-3">
            le social & médico-social
          </p>
          <p className="text-base text-muted-foreground font-body max-w-xl mb-4">
            Dossier Usager Informatisé pour la Protection de l'Enfance, le Handicap, l'Insertion et le médico-social. Simple, collaboratif, conforme.
          </p>
          <div className="flex flex-col gap-2 mb-5 max-w-xl">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
              <p className="text-sm text-foreground font-body">
                <strong>Une équipe agile et proche</strong> — qui va à la rencontre de ses clients et partage leurs valeurs.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
              <p className="text-sm text-foreground font-body">
                <strong>Mobilisés auprès des instances</strong> — pour des mises en conformité sécurisées et au bon moment.
              </p>
            </div>
          </div>
          <Button variant="hero" size="xl" onClick={() => setDemoOpen(true)}>
            Demandez la démo
          </Button>
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
