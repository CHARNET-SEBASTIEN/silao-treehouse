import { motion } from "framer-motion";
import { Accessibility, ArrowRight, Baby, Home, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

import { filiereThemes } from "@/lib/filiereThemes";

const filieres = [
  {
    icon: Baby,
    name: "PDE",
    title: "Protection de l'enfance",
    description:
      "Hébergement, milieu ouvert, accueil familial, lieux de vie, SIE et MJIE avec un besoin fort de confidentialité et d'accompagnement projet.",
    structures: ["MECS", "AEMO", "SIE", "MJIE", "Accueil familial", "Lieux de vie"],
    theme: filiereThemes.pde,
    href: "/secteur/protection-enfance",
    cta: "Silao pour la PDE",
  },
  {
    icon: Accessibility,
    name: "PH",
    title: "Médico-social",
    description:
      "IME, DITEP, SESSAD, CAMSP, CMPP, MAS ou FAM, avec une forte culture de traçabilité, d'agenda et de listes d'attente.",
    structures: ["IME", "DITEP", "SESSAD", "CAMSP", "CMPP", "MAS / FAM"],
    theme: filiereThemes.ph,
    href: "/secteur/handicap",
    cta: "Silao pour le PH",
  },
  {
    icon: Home,
    name: "AHI",
    title: "Accueil, hébergement et insertion",
    description:
      "Accueil de jour, CHRS, HU, CPH, CADA, HUDA, AVDL et IML avec des parcours souvent multi-dispositifs.",
    structures: ["CHRS", "CADA", "HUDA", "CPH", "AVDL", "IML"],
    theme: filiereThemes.ahi,
    href: "/secteur/insertion-ahi",
    cta: "Silao pour l'AHI",
  },
  {
    icon: Stethoscope,
    name: "PDS",
    title: "Personnes en difficultés spécifiques",
    description:
      "LHSS, ACT, CAARUD et structures à la jonction entre le social, le médical et l'insertion.",
    structures: ["LHSS", "ACT", "CAARUD", "Prises en charge santé-social"],
    theme: filiereThemes.pds,
    href: "/secteur/personnes-difficultes-specifiques",
    cta: "Silao pour les PDS",
  },
];

const FilieresSection = () => (
  <section id="secteurs" className="px-4 py-6 md:py-8 tint-accent">
    <div className="mx-auto max-w-6xl section-panel px-6 py-5 md:px-10 md:py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-5 max-w-3xl text-center"
      >
        <p className="marker-label mb-4">Secteurs couverts</p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          <span className="text-primary sketch-underline">Silao au service de 4 secteurs</span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Silao s&apos;adapte aux réalités de la protection de l&apos;enfance, du médico-social, de
          l&apos;accueil, hébergement et insertion, et des personnes en difficultés spécifiques.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {filieres.map((filiere) => (
          <div key={filiere.name}>
            <Link
              to={filiere.href}
              className={`group flex h-full flex-col rounded-[1.7rem] border ${filiere.theme.border} ${filiere.theme.bg} px-5 py-6 transition-colors`}
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${filiere.theme.iconBg} ${filiere.theme.text}`}>
                <filiere.icon className="h-5 w-5" />
              </div>
              <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${filiere.theme.text}`}>
                {filiere.name}
              </p>
              <h3 className={`mt-1 text-2xl font-bold ${filiere.theme.text}`}>{filiere.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/90">{filiere.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {filiere.structures.map((structure) => (
                  <span
                    key={structure}
                    className="rounded-full border border-border/60 bg-card px-3 py-1 text-xs text-muted-foreground"
                  >
                    {structure}
                  </span>
                ))}
              </div>

              <div className={`mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold ${filiere.theme.text}`}>
                {filiere.cta}
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FilieresSection;
