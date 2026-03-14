import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Baby,
  CheckCircle2,
  Home,
  ShieldCheck,
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
    <section className="px-4 pt-6 pb-10 md:pb-14">
      <div className="mx-auto max-w-5xl">
        <div className="section-panel overflow-hidden px-6 py-8 sm:px-8 md:px-10 md:py-10">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_24rem]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <p className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                D2L Informatique
              </p>

              <h1 className="text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground md:text-5xl lg:text-[3.4rem]">
                SILAO, le dossier usager informatisé pour les établissements sociaux et médico-sociaux
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
                SILAO réunit dossier usager, coordination, pilotage et accompagnement projet dans
                une approche pensée pour les établissements sociaux et médico-sociaux.
              </p>

              <ul className="mt-6 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
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

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mx-auto w-full max-w-sm"
            >
              <div className="rounded-[2rem] border border-border/60 bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--card)))] p-5 shadow-[0_24px_60px_-30px_hsl(var(--foreground)/0.25)]">
                <div className="mb-5 flex justify-center">
                  <img
                    src={heroTree}
                    alt="Illustration symbolique de l'accompagnement social et médico-social"
                    className="h-40 w-auto mix-blend-multiply sm:h-44"
                    style={{
                      maskImage: "radial-gradient(circle at center, black 62%, transparent 96%)",
                      WebkitMaskImage: "radial-gradient(circle at center, black 62%, transparent 96%)",
                    }}
                  />
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Secteurs couverts
                  </p>
                </div>

                <div className="grid gap-3">
                  {secteurs.map((secteur) => (
                    <Link
                      key={secteur.label}
                      to={secteur.href}
                      className={`rounded-[1.25rem] border px-4 py-3 transition-colors hover:bg-card ${secteur.tone}`}
                    >
                      <div className="flex items-center gap-2">
                        <secteur.icon className="h-4 w-4" />
                        <p className="text-sm font-semibold">{secteur.label}</p>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-current/80">{secteur.details}</p>
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
