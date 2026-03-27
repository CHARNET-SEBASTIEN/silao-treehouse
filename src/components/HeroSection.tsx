import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  Baby,
  CheckCircle2,
  Home,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroTreeBrand from "@/assets/hero-tree-brand.png";
import logoSilaoColor from "@/assets/logo-silao-color.svg";
import logoSilaoWhite from "@/assets/logo-silao-white.svg";
import { useDemoRequestDialog } from "@/components/DemoRequestDialogProvider";
import { Button } from "@/components/ui/button";
import { filiereThemes } from "@/lib/filiereThemes";
import { COMPANY_DISPLAY_NAME, PRODUCT_NAME } from "@/lib/site";

const secteurs = [
  {
    icon: Baby,
    label: "Protection de l'enfance",
    href: "/secteur/protection-enfance",
    theme: filiereThemes.pde,
  },
  {
    icon: Accessibility,
    label: "Médico-social",
    href: "/secteur/handicap",
    theme: filiereThemes.ph,
  },
  {
    icon: Home,
    label: "Accueil, hébergement et insertion",
    href: "/secteur/insertion-ahi",
    theme: filiereThemes.ahi,
  },
  {
    icon: Stethoscope,
    label: "Personnes en difficultés spécifiques",
    href: "/secteur/personnes-difficultes-specifiques",
    theme: filiereThemes.pds,
  },
];

const points = [
  "Des informations centralisées et accessibles pour les équipes",
  "4 secteurs couverts avec des usages adaptés au terrain",
  "Un accompagnement de proximité de la démo au déploiement",
];

const HeroSection = () => {
  const { openDialog } = useDemoRequestDialog();

  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-10 md:pb-10 md:pt-12">
      {/* Gradient hero background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_10%,hsl(var(--secondary)/0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_10%_20%,hsl(var(--accent)/0.10),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="section-panel overflow-hidden px-6 py-7 sm:px-8 md:px-10 md:py-9">
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
                {COMPANY_DISPLAY_NAME} présente
              </motion.p>

              <h1 className="text-4xl font-bold leading-[0.98] tracking-tight text-foreground md:text-5xl lg:text-[3.2rem]">
                <span className="mb-4 block">
                  <img
                    src={logoSilaoColor}
                    alt={PRODUCT_NAME}
                    width={220}
                    height={68}
                    className="block h-10 w-auto dark:hidden"
                  />
                  <img
                    src={logoSilaoWhite}
                    alt={PRODUCT_NAME}
                    width={220}
                    height={68}
                    className="hidden h-10 w-auto dark:block"
                  />
                </span>
                Le logiciel métier collaboratif pensé avec et pour les professionnels du social et
                du médico-social
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground md:text-[1.1rem]">
                {PRODUCT_NAME} aide les équipes de la protection de l&apos;enfance, du médico-social,
                de l&apos;accueil, hébergement et insertion (AHI) et des personnes en difficultés
                spécifiques (PDS) à centraliser les informations, partager les écrits utiles et
                suivre l&apos;activité sans complexifier le quotidien.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
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
                  Participe aux comités éditeurs DSR Ségur AHI
                </span>
              </div>

              <ul className="mt-5 space-y-3">
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

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="hero"
                  size="xl"
                  className="h-auto w-full whitespace-normal px-6 py-4 text-center leading-tight sm:w-auto sm:min-w-[16rem]"
                  onClick={openDialog}
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
              className="mx-auto w-full max-w-[18rem]"
            >
              <div className="flex flex-col items-center gap-5">
                <div className="flex justify-center bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.16),transparent_70%)] px-6 py-6">
                  <img
                    src={heroTreeBrand}
                    alt="Arbre Silao illustrant l'accompagnement social et medico-social"
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
    </section>
  );
};

export default HeroSection;
