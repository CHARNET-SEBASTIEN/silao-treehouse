import { motion } from "framer-motion";
import { Accessibility, ArrowRight, Home, ShieldCheck, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

import { filiereThemes } from "@/lib/filiereThemes";

const filieres = [
  {
    icon: ShieldCheck,
    name: "PDE",
    title: "Protection de l'enfance",
    description:
      "Hébergement, milieu ouvert, accueil familial, lieux de vie, SIE et MIJE avec un besoin fort de confidentialité et d'accompagnement projet.",
    structures: ["MECS", "AEMO", "Accueil familial", "Lieu de vie"],
    theme: filiereThemes.pde,
    href: "/secteur/protection-enfance",
  },
  {
    icon: Accessibility,
    name: "PH",
    title: "Médico-social",
    description:
      "IME, DITEP, SESSAD, CAMSP, CMPP, MAS ou FAM, avec une forte culture de traçabilité, d'agenda et de listes d'attente.",
    structures: ["IME", "DITEP", "SESSAD", "CAMSP / CMPP"],
    theme: filiereThemes.ph,
    href: "/secteur/handicap",
  },
  {
    icon: Home,
    name: "AHI",
    title: "Accueil, hébergement et insertion",
    description:
      "Accueil de jour, CHRS, HU, CPH, CADA, HUDA, AVDL et IML avec des parcours souvent multi-dispositifs.",
    structures: ["CHRS", "CADA", "HUDA", "CPH"],
    theme: filiereThemes.ahi,
    href: "/secteur/insertion-ahi",
  },
  {
    icon: Stethoscope,
    name: "PDS",
    title: "Personnes en difficultés spécifiques",
    description:
      "LHSS, ACT, CAARUD et structures à l'interface du social, du médical et de l'insertion.",
    structures: ["LHSS", "ACT", "CAARUD", "Prises en charge santé-social"],
    theme: filiereThemes.pds,
    href: "/secteur/personnes-difficultes-specifiques",
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
        <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
          Secteurs
        </p>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          <span className="text-primary sketch-underline">4 secteurs couverts</span>, 4 lectures métier
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          SILAO s&apos;adapte aux réalités de la protection de l&apos;enfance, du médico-social, de
          l&apos;insertion et des personnes en difficultés spécifiques.
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
                Découvrir le secteur
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
