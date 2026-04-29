import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import segurLogo from "@/assets/logos-segur-numerique.png";

const SegurHighlightSection = () => (
  <section className="px-4 pb-8 pt-2 md:pb-10">
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto grid max-w-6xl items-center gap-6 rounded-[1.5rem] border border-primary/20 bg-card/92 px-5 py-5 shadow-[0_22px_56px_-42px_hsl(var(--brand-violet)/0.24)] backdrop-blur md:grid-cols-[minmax(0,1fr)_18rem] md:px-7"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:flex">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <p className="marker-label mb-3">Référencement Ségur numérique</p>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Silao est référencé sur les périmètres Ségur ESSMS
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
            Le logiciel est référencé DSR Ségur MS2 PDE et DSR Ségur MS1 PH, avec une démarche
            suivie sur les autres secteurs médico-sociaux.
          </p>
          <Link
            to="/conformite-sons"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Voir la conformité Ségur
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Link
        to="/conformite-sons"
        className="flex justify-center rounded-xl bg-white p-4 shadow-sm ring-1 ring-border/70 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label="Voir la page conformité Ségur"
      >
        <img
          src={segurLogo}
          alt="Logo Ségur numérique et Référencé ANS"
          width={600}
          height={280}
          loading="lazy"
          decoding="async"
          className="h-auto w-full max-w-[16rem] object-contain"
        />
      </Link>
    </motion.div>
  </section>
);

export default SegurHighlightSection;
