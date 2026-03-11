import { motion } from "framer-motion";
import { Accessibility, Home, ShieldCheck, Baby, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const filieres = [
  {
    icon: Accessibility,
    name: "Handicap",
    subtitle: "PH",
    description: "Accompagner chaque personne en situation de handicap dans son parcours de vie.",
    structures: ["IME", "ITEP", "MAS", "FAM", "ESAT", "SESSAD"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    href: "/secteur/handicap",
    illustration: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
        <circle cx="40" cy="40" r="36" fill="hsl(var(--primary) / 0.08)" />
        <motion.path
          d="M30 55 C30 45 35 35 40 30 C45 35 50 45 50 55"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <motion.circle
          cx="40" cy="25" r="6"
          fill="hsl(var(--primary) / 0.15)"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <motion.path
          d="M28 42 L52 42"
          stroke="hsl(var(--primary) / 0.3)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </svg>
    ),
  },
  {
    icon: ShieldCheck,
    name: "Protection",
    subtitle: "de l'enfance",
    description: "Protéger, éduquer et accompagner chaque enfant vers son avenir.",
    structures: ["MECS", "SAE", "AEMO", "Lieux de vie"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    href: "/secteur/protection-enfance",
    illustration: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
        <circle cx="40" cy="40" r="36" fill="hsl(var(--secondary) / 0.08)" />
        <motion.path
          d="M40 18 L54 28 L54 45 C54 55 40 62 40 62 C40 62 26 55 26 45 L26 28 Z"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="hsl(var(--secondary) / 0.08)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <motion.path
          d="M34 42 L38 46 L48 36"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        />
      </svg>
    ),
  },
  {
    icon: Home,
    name: "Insertion",
    subtitle: "AHI",
    description: "Accueillir et accompagner vers l'autonomie les personnes en situation de précarité.",
    structures: ["CHRS", "SIAO", "CPH", "CADA"],
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    href: "/secteur/insertion-ahi",
    illustration: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
        <circle cx="40" cy="40" r="36" fill="hsl(var(--accent) / 0.08)" />
        <motion.path
          d="M22 45 L40 28 L58 45"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.rect
          x="30" y="45" width="20" height="14" rx="1"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          fill="hsl(var(--accent) / 0.08)"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ transformOrigin: "bottom" }}
        />
        <motion.rect
          x="37" y="50" width="6" height="9" rx="1"
          fill="hsl(var(--accent) / 0.2)"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1 }}
        />
      </svg>
    ),
  },
  {
    icon: Baby,
    name: "CAMSP",
    subtitle: "CMPP",
    description: "Dépister tôt, accompagner les familles et soutenir le développement de chaque enfant.",
    structures: ["CAMSP", "CMPP"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    href: "/secteur/camsp-cmpp",
    illustration: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
        <circle cx="40" cy="40" r="36" fill="hsl(var(--primary) / 0.08)" />
        <motion.circle
          cx="40" cy="32" r="10"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="hsl(var(--primary) / 0.06)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.path
          d="M30 55 C30 47 34 43 40 43 C46 43 50 47 50 55"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        <motion.path
          d="M36 30 Q40 26 44 30"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        />
      </svg>
    ),
  },
];

const FilieresSection = () => {
  return (
    <section className="py-24 px-4 paper-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-body mb-3">
            Un DUI par secteur d'activité
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Les <span className="text-primary sketch-underline">secteurs</span> couverts par SILAO
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            D2L s'adapte aux spécificités métier de chaque filière : formulaires, workflows, vocabulaire et obligations réglementaires.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {filieres.map((filiere, index) => (
            <motion.div
              key={filiere.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={filiere.href}
                className={`sketch-border bg-card p-5 md:p-6 flex flex-col items-center text-center gap-3 hover:shadow-lg transition-all duration-300 block h-full group border-2 ${filiere.borderColor} hover:-translate-y-1`}
              >
                {/* Illustrated SVG icon */}
                <div className="mb-1">
                  {filiere.illustration}
                </div>

                <div>
                  <h3 className={`text-xl md:text-2xl font-sketch font-bold ${filiere.color}`}>
                    {filiere.name}
                  </h3>
                  <p className="text-sm font-sketch text-muted-foreground">
                    {filiere.subtitle}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  {filiere.description}
                </p>

                <div className="flex flex-wrap gap-1 justify-center mt-auto pt-2">
                  {filiere.structures.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 text-[10px] font-body text-muted-foreground bg-muted/60 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex items-center gap-1 text-xs font-body text-muted-foreground group-hover:text-primary transition-colors">
                  Découvrir
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilieresSection;
