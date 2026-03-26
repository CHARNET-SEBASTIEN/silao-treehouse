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

import heroTreeBrand from "@/assets/hero-tree-brand.png";
import DemoRequestDialog from "@/components/DemoRequestDialog";
import { Button } from "@/components/ui/button";
import { filiereThemes } from "@/lib/filiereThemes";

const secteurs = [
  {
    icon: ShieldCheck,
    label: "Protection de l'enfance",
    href: "/secteur/protection-enfance",
    theme: filiereThemes.pde,
  },
  {
    icon: Baby,
    label: "Médico-social / PH",
    href: "/secteur/handicap",
    theme: filiereThemes.ph,
  },
  {
    icon: Home,
    label: "AHI",
    href: "/secteur/insertion-ahi",
    theme: filiereThemes.ahi,
  },
  {
    icon: Stethoscope,
    label: "PDS",
    href: "/secteur/personnes-difficultes-specifiques",
    theme: filiereThemes.pds,
  },
];

const points = [
  "Pensé avec les professionnels du social et du médico-social depuis 2005",
  "Référencé DSR Ségur MS2 PE et DSR Ségur MS1 PH",
  "15 ans d'expertise terrain et DSR Ségur MS1 AHI en cours",
];

const HeroSection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-14 md:pb-16 md:pt-16">
      {/* Gradient hero background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_10%,hsl(var(--secondary)/0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_10%_20%,hsl(var(--accent)/0.10),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="section-panel overflow-hidden px-6 py-8 sm:px-8 md:px-10 md:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_18rem]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="marker-label mb-5"
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                </motion.span>
                D2L Informatique présente
              </motion.p>

              <h1 className="text-4xl font-bold leading-[0.98] tracking-tight text-foreground md:text-5xl lg:text-[3.2rem]">
                <span className="mb-2 block text-secondary">SILAO</span>
                Le dossier usager informatisé pensé avec et pour les professionnels du social et
                du médico-social
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground md:text-[1.15rem]">
                Silao est un outil résolument moderne conçu en partenariat avec des établissements
                pour répondre aux besoins de la protection de l&apos;enfance, du médico-social, de
                l&apos;accueil-hébergement-insertion et des PDS. Solution collaborative simple,
                intuitive et complète.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <span
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold ${filiereThemes.pde.border} ${filiereThemes.pde.bg} ${filiereThemes.pde.text}`}
                >
                  Référencé DSR Ségur MS2 PE
                </span>
                <span
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold ${filiereThemes.ph.border} ${filiereThemes.ph.bg} ${filiereThemes.ph.text}`}
                >
                  Référencé DSR Ségur MS1 PH
                </span>
                <span
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold ${filiereThemes.ahi.border} ${filiereThemes.ahi.bg} ${filiereThemes.ahi.text}`}
                >
                  AHI en cours
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {points.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-foreground/95"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
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

            {/* Right column — simplified: tree + sector pills only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mx-auto w-full max-w-[18rem]"
            >
              <div className="flex flex-col items-center gap-5">
                <div className="flex justify-center bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.16),transparent_70%)] px-6 py-6">
                  <img
                    src={heroTreeBrand}
                    alt="Arbre SILAO illustrant l'accompagnement social et medico-social"
                    width={1668}
                    height={1758}
                    loading="eager"
                    decoding="async"
                    className="h-64 w-auto drop-shadow-[0_24px_36px_hsl(var(--primary)/0.14)] sm:h-72"
                  />
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {secteurs.map((secteur) => (
                    <Link
                      key={secteur.label}
                      to={secteur.href}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-primary/10 ${secteur.theme.border} ${secteur.theme.bg} ${secteur.theme.text}`}
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
