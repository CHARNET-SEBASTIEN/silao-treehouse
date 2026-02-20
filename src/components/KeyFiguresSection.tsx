import { motion } from "framer-motion";

/* Animated stroke-drawing variants */
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.15, type: "spring" as const, duration: 1.8, bounce: 0 },
      opacity: { delay: i * 0.15, duration: 0.3 },
    },
  }),
};

const fillIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.6 + i * 0.15, duration: 0.5 },
  }),
};

/* Each illustration is its own component so framer-motion can animate strokes */
const IllustrationUsagers = () => (
  <motion.svg viewBox="0 0 80 80" fill="none" className="w-full h-full" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.circle cx="28" cy="18" r="7" stroke="currentColor" strokeWidth="2" variants={draw} custom={0} />
    <motion.circle cx="28" cy="18" r="7" variants={fillIn} custom={0} fill="hsl(var(--primary) / 0.12)" stroke="none" />
    <motion.path d="M28 25 C28 25 24 32 24 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={draw} custom={1} />
    <motion.path d="M28 25 C28 25 32 32 32 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={draw} custom={1} />
    <motion.path d="M20 35 L24 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={draw} custom={2} />
    <motion.path d="M36 35 L32 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={draw} custom={2} />
    <motion.circle cx="52" cy="28" r="5.5" stroke="currentColor" strokeWidth="2" variants={draw} custom={3} />
    <motion.circle cx="52" cy="28" r="5.5" variants={fillIn} custom={3} fill="hsl(var(--secondary) / 0.15)" stroke="none" />
    <motion.path d="M52 33.5 C52 33.5 49 38 49 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={draw} custom={4} />
    <motion.path d="M52 33.5 C52 33.5 55 38 55 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={draw} custom={4} />
    <motion.path d="M36 35 C40 37 44 37 46 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={draw} custom={5} />
    <motion.path d="M42 20 C42 18 44 17 45 18.5 C46 17 48 18 48 20 C48 22 45 24 45 24 C45 24 42 22 42 20Z" stroke="hsl(var(--destructive) / 0.5)" strokeWidth="1" variants={draw} custom={6} />
    <motion.path d="M42 20 C42 18 44 17 45 18.5 C46 17 48 18 48 20 C48 22 45 24 45 24 C45 24 42 22 42 20Z" variants={fillIn} custom={6} fill="hsl(var(--destructive) / 0.3)" stroke="none" />
    <motion.path d="M12 55 C20 53 35 56 50 53 C58 52 68 54 72 53" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" variants={draw} custom={7} />
  </motion.svg>
);

const IllustrationEtablissements = () => (
  <motion.svg viewBox="0 0 80 80" fill="none" className="w-full h-full" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.rect x="18" y="22" width="26" height="30" rx="2" stroke="currentColor" strokeWidth="2" variants={draw} custom={0} />
    <motion.rect x="18" y="22" width="26" height="30" rx="2" variants={fillIn} custom={0} fill="hsl(var(--primary) / 0.08)" stroke="none" />
    <motion.path d="M16 22 L31 12 L46 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" variants={draw} custom={1} />
    <motion.rect x="23" y="27" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" variants={draw} custom={2} />
    <motion.rect x="23" y="27" width="5" height="5" rx="1" variants={fillIn} custom={2} fill="hsl(var(--accent) / 0.15)" stroke="none" />
    <motion.rect x="34" y="27" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" variants={draw} custom={3} />
    <motion.rect x="34" y="27" width="5" height="5" rx="1" variants={fillIn} custom={3} fill="hsl(var(--accent) / 0.15)" stroke="none" />
    <motion.rect x="23" y="37" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" variants={draw} custom={4} />
    <motion.rect x="23" y="37" width="5" height="5" rx="1" variants={fillIn} custom={4} fill="hsl(var(--accent) / 0.15)" stroke="none" />
    <motion.rect x="33" y="40" width="7" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" variants={draw} custom={5} />
    <motion.rect x="33" y="40" width="7" height="12" rx="1" variants={fillIn} custom={5} fill="hsl(var(--secondary) / 0.12)" stroke="none" />
    <motion.circle cx="38" cy="47" r="0.8" variants={fillIn} custom={6} fill="currentColor" />
    <motion.path d="M58 52 L58 38" stroke="hsl(var(--warm-earth))" strokeWidth="2" strokeLinecap="round" variants={draw} custom={6} />
    <motion.circle cx="58" cy="33" r="8" stroke="hsl(var(--primary) / 0.4)" strokeWidth="1.5" variants={draw} custom={7} />
    <motion.circle cx="58" cy="33" r="8" variants={fillIn} custom={7} fill="hsl(var(--primary) / 0.15)" stroke="none" />
    <motion.path d="M10 55 C25 53 45 56 70 53" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" variants={draw} custom={8} />
  </motion.svg>
);

const IllustrationConformite = () => (
  <motion.svg viewBox="0 0 80 80" fill="none" className="w-full h-full" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d="M40 10 C40 10 20 18 20 18 L20 38 C20 52 40 65 40 65 C40 65 60 52 60 38 L60 18 C60 18 40 10 40 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" variants={draw} custom={0} />
    <motion.path d="M40 10 C40 10 20 18 20 18 L20 38 C20 52 40 65 40 65 C40 65 60 52 60 38 L60 18 C60 18 40 10 40 10Z" variants={fillIn} custom={0} fill="hsl(var(--primary) / 0.08)" stroke="none" />
    <motion.path d="M28 38 L36 46 L52 28" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" variants={draw} custom={2} />
    <motion.path d="M14 28 C14 24 18 22 18 22 C18 22 16 26 18 28 C16 28 14 28 14 28Z" stroke="hsl(var(--primary) / 0.4)" strokeWidth="1" variants={draw} custom={3} />
    <motion.path d="M14 28 C14 24 18 22 18 22 C18 22 16 26 18 28 C16 28 14 28 14 28Z" variants={fillIn} custom={3} fill="hsl(var(--primary) / 0.25)" stroke="none" />
    <motion.path d="M66 28 C66 24 62 22 62 22 C62 22 64 26 62 28 C64 28 66 28 66 28Z" stroke="hsl(var(--primary) / 0.4)" strokeWidth="1" variants={draw} custom={4} />
    <motion.path d="M66 28 C66 24 62 22 62 22 C62 22 64 26 62 28 C64 28 66 28 66 28Z" variants={fillIn} custom={4} fill="hsl(var(--primary) / 0.25)" stroke="none" />
    <motion.circle cx="12" cy="45" r="1.5" variants={fillIn} custom={5} fill="hsl(var(--secondary) / 0.5)" />
    <motion.circle cx="68" cy="45" r="1.5" variants={fillIn} custom={5} fill="hsl(var(--secondary) / 0.5)" />
    <motion.circle cx="40" cy="72" r="1.5" variants={fillIn} custom={6} fill="hsl(var(--secondary) / 0.5)" />
  </motion.svg>
);

const IllustrationEngagement = () => (
  <motion.svg viewBox="0 0 80 80" fill="none" className="w-full h-full" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <motion.path d="M40 70 L40 40 C40 35 38 30 40 28" stroke="hsl(var(--warm-earth))" strokeWidth="3" strokeLinecap="round" variants={draw} custom={0} />
    <motion.path d="M40 45 C40 45 32 40 28 42" stroke="hsl(var(--warm-earth))" strokeWidth="2" strokeLinecap="round" variants={draw} custom={1} />
    <motion.path d="M40 38 C40 38 48 33 52 35" stroke="hsl(var(--warm-earth))" strokeWidth="2" strokeLinecap="round" variants={draw} custom={2} />
    <motion.circle cx="40" cy="22" r="12" stroke="hsl(var(--primary) / 0.35)" strokeWidth="1.5" variants={draw} custom={3} />
    <motion.circle cx="40" cy="22" r="12" variants={fillIn} custom={3} fill="hsl(var(--primary) / 0.15)" stroke="none" />
    <motion.circle cx="30" cy="28" r="9" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1" variants={draw} custom={4} />
    <motion.circle cx="30" cy="28" r="9" variants={fillIn} custom={4} fill="hsl(var(--primary) / 0.12)" stroke="none" />
    <motion.circle cx="50" cy="28" r="9" stroke="hsl(var(--primary) / 0.3)" strokeWidth="1" variants={draw} custom={4} />
    <motion.circle cx="50" cy="28" r="9" variants={fillIn} custom={4} fill="hsl(var(--primary) / 0.12)" stroke="none" />
    <motion.circle cx="35" cy="16" r="7" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1" variants={draw} custom={5} />
    <motion.circle cx="35" cy="16" r="7" variants={fillIn} custom={5} fill="hsl(var(--primary) / 0.1)" stroke="none" />
    <motion.circle cx="46" cy="18" r="6" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1" variants={draw} custom={5} />
    <motion.circle cx="46" cy="18" r="6" variants={fillIn} custom={5} fill="hsl(var(--primary) / 0.1)" stroke="none" />
    <motion.path d="M40 70 C36 72 30 72 26 70" stroke="hsl(var(--warm-earth))" strokeWidth="1.5" strokeLinecap="round" variants={draw} custom={6} />
    <motion.path d="M40 70 C44 72 50 72 54 70" stroke="hsl(var(--warm-earth))" strokeWidth="1.5" strokeLinecap="round" variants={draw} custom={6} />
    <motion.circle cx="48" cy="22" r="2.5" variants={fillIn} custom={7} fill="hsl(var(--destructive) / 0.35)" stroke="hsl(var(--destructive) / 0.5)" strokeWidth="1" />
    <motion.circle cx="33" cy="25" r="2" variants={fillIn} custom={7} fill="hsl(var(--secondary) / 0.4)" stroke="hsl(var(--secondary) / 0.5)" strokeWidth="1" />
  </motion.svg>
);

const illustrations: Record<string, React.ReactNode> = {
  usagers: <IllustrationUsagers />,
  etablissements: <IllustrationEtablissements />,
  conformite: <IllustrationConformite />,
  engagement: <IllustrationEngagement />,
};

const figures = [
  {
    key: "usagers",
    value: "12 000+",
    label: "Usagers accompagnés",
    description: "dans toute la France",
  },
  {
    key: "etablissements",
    value: "150+",
    label: "Établissements",
    description: "connectés à Silao",
  },
  {
    key: "conformite",
    value: "100%",
    label: "Conformité Ségur",
    description: "certifié SONS",
  },
  {
    key: "engagement",
    value: "5 ans",
    label: "Engagement contractuel",
    description: "partenariat durable",
  },
];

const leafSway = {
  animate: { rotate: [0, 3, -2, 1, 0] },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
};

const KeyFiguresSection = () => {
  return (
    <section className="relative py-24 px-4 paper-grain overflow-hidden">
      {/* Decorative floating leaves */}
      <motion.svg {...leafSway} className="absolute top-12 left-[8%] w-10 h-10 text-primary opacity-20" viewBox="0 0 64 64" fill="currentColor">
        <path d="M32 2C32 2 10 20 10 40C10 52 20 62 32 62C44 62 54 52 54 40C54 20 32 2 32 2Z" />
      </motion.svg>
      <motion.svg {...leafSway} style={{ animationDelay: "3s" }} className="absolute bottom-16 right-[10%] w-8 h-8 text-secondary opacity-15" viewBox="0 0 64 64" fill="currentColor">
        <path d="M32 2C32 2 10 20 10 40C10 52 20 62 32 62C44 62 54 52 54 40C54 20 32 2 32 2Z" />
      </motion.svg>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-body mb-3">
            Silao en quelques chiffres
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Chiffres <span className="text-primary sketch-underline">clés</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {figures.map((fig, i) => (
            <motion.div
              key={fig.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <motion.div
                className="w-24 h-24 mb-3 text-foreground"
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {illustrations[fig.key]}
              </motion.div>
              <span className="text-3xl md:text-4xl font-sketch text-foreground mb-1">
                {fig.value}
              </span>
              <span className="text-sm font-body font-semibold text-foreground mb-0.5">
                {fig.label}
              </span>
              <span className="text-xs font-body text-muted-foreground">
                {fig.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFiguresSection;
