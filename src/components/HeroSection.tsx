import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Baby,
  CheckCircle2,
  Home,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroTree from "@/assets/hero-tree.png";
import DemoRequestDialog from "@/components/DemoRequestDialog";
import { Button } from "@/components/ui/button";

const secteurs = [
  {
    icon: ShieldCheck,
    label: "Protection de l'enfance",
    details: "MECS, milieu ouvert, accueil familial",
    href: "/secteur/protection-enfance",
    tone: "border-secondary/25 bg-secondary/8 text-secondary",
  },
  {
    icon: Baby,
    label: "Médico-social / PH",
    details: "IME, DITEP, SESSAD, CAMSP, CMPP",
    href: "/secteur/handicap",
    tone: "border-primary/25 bg-primary/8 text-primary",
  },
  {
    icon: Home,
    label: "AHI",
    details: "CHRS, CADA, HUDA, CPH",
    href: "/secteur/insertion-ahi",
    tone: "border-accent/25 bg-accent/8 text-accent",
  },
  {
    icon: Stethoscope,
    label: "PDS",
    details: "LHSS, ACT, CAARUD",
    href: "/secteur/personnes-difficultes-specifiques",
    tone: "border-primary/25 bg-primary/8 text-primary",
  },
];

const points = [
  "Référencé Ségur",
  "Pensé avec les professionnels depuis 2005",
  "Démo, support et ressources clairement accessibles",
];

const HeroSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative px-4 pt-6 pb-10 md:pb-14 overflow-hidden">
      {/* Gradient background for visual punch */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(var(--primary) / 0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 20%, hsl(var(--secondary) / 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-5xl">
        <div className="section-panel overflow-hidden px-6 py-8 sm:px-8 md:px-10 md:py-10">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              {/* Animated badge */}
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                </motion.span>
                D2L présente
              </motion.p>

              <h1 className="text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground md:text-5xl lg:text-[3.4rem]">
                SILAO, le dossier usager informatisé pour les établissements sociaux et médico-sociaux
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
                SILAO réunit dossier usager, coordination, pilotage et accompagnement projet dans
                une approche pensée pour les établissements sociaux et médico-sociaux.
              </p>

              <ul className="mt-6 space-y-3">
                {points.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-foreground/85"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="hero"
                  size="xl"
                  className="h-auto w-full whitespace-normal px-6 py-4 text-center leading-tight sm:w-auto sm:min-w-[16rem]"
                  onClick={() => setDemoOpen(true)}
                >
                  Demander une démonstration
                </Button>
                <Button
                  variant="hero-outline"
                  size="xl"
                  className="h-auto w-full whitespace-normal px-6 py-4 text-center leading-tight sm:w-auto"
                  asChild
                >
                  <Link to="/aide-support" className="gap-2 text-center">
                    <ArrowRight className="h-4 w-4" />
                    Voir les contacts
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right column — lighter: larger tree, compact sector pills */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mx-auto w-full max-w-sm"
            >
              <div className="rounded-[2rem] border border-border/60 bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--card)))] p-5 shadow-[0_24px_60px_-30px_hsl(var(--foreground)/0.25)]">
                {/* Larger tree illustration */}
                <div className="mb-4 flex justify-center">
                  <img
                    src={heroTree}
                    alt="Illustration symbolique de l'accompagnement social et médico-social"
                    className="h-48 w-auto mix-blend-multiply sm:h-56"
                    style={{
                      maskImage: "radial-gradient(circle at center, black 62%, transparent 96%)",
                      WebkitMaskImage: "radial-gradient(circle at center, black 62%, transparent 96%)",
                    }}
                  />
                </div>

                {/* Compact sector pills instead of full cards */}
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Secteurs couverts
                </p>

                <div className="flex flex-wrap gap-2">
                  {secteurs.map((secteur) => (
                    <Link
                      key={secteur.label}
                      to={secteur.href}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-card ${secteur.tone}`}
                    >
                      <secteur.icon className="h-3.5 w-3.5" />
                      {secteur.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <DemoRequestDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
};

export default HeroSection;
