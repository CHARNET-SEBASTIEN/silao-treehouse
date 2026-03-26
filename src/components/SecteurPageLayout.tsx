import { motion } from "framer-motion";
import { LucideIcon, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useDemoRequestDialog } from "@/components/DemoRequestDialogProvider";
import SEOHead from "@/components/SEOHead";
import { getPageSeo } from "@/lib/publicRoutes";
import { cn } from "@/lib/utils";

interface SecteurPageLayoutProps {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  structures: { name: string; description: string }[];
  benefits: string[];
  clients: { name: string; quote?: string }[];
  modules: string[];
  seoPath: string;
}

const SecteurPageLayout = ({
  icon: Icon,
  name,
  tagline,
  description,
  color,
  bgColor,
  borderColor,
  structures,
  benefits,
  clients,
  modules,
  seoPath,
}: SecteurPageLayoutProps) => {
  const { openDialog } = useDemoRequestDialog();
  const seo = getPageSeo(seoPath);

  return (
    <>
      <SEOHead {...seo} />
      {/* Hero */}
      <section className="py-20 px-4 paper-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border ${bgColor} ${borderColor}`}
          >
            <Icon className={`w-10 h-10 ${color}`} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            {name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`mb-4 text-xl font-sketch ${color}`}
          >
            {tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg font-body max-w-2xl mx-auto mb-8"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button variant="hero" size="xl" onClick={openDialog}>
              Demander une démo
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/offres">Voir nos offres <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Structures couvertes */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-12"
          >
            Structures <span className={cn("sketch-underline", color)}>couvertes</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {structures.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="sketch-border bg-card p-6"
              >
                <Badge variant="outline" className={cn("mb-3 border", bgColor, borderColor, color)}>{s.name}</Badge>
                <p className="text-sm text-muted-foreground font-body">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-20 px-4 paper-bg">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-12"
          >
            Pourquoi choisir Silao pour le secteur <span className={color}>{name}</span> ?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 p-4"
              >
                <CheckCircle2 className={`w-5 h-5 ${color} shrink-0 mt-0.5`} />
                <p className="text-foreground font-body">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules clés */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground mb-12"
          >
            Modules <span className={cn("sketch-underline", color)}>adaptés</span>
          </motion.h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {modules.map((m, i) => (
              <motion.span
                key={m}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="sketch-border-sm px-4 py-2 text-sm font-body text-foreground bg-card"
              >
                {m}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Références clients */}
      {clients.length > 0 && (
        <section className="py-20 px-4 paper-bg">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground text-center mb-12"
            >
              Ils utilisent Silao dans ce secteur
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clients.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="sketch-border bg-card p-6"
                >
                  <p className="text-lg font-bold text-foreground mb-2">{c.name}</p>
                  {c.quote && (
                    <p className="text-sm text-muted-foreground font-body italic">"{c.quote}"</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={cn("max-w-3xl mx-auto sketch-border p-10 text-center", bgColor, borderColor)}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Prêt à déployer Silao dans votre structure ?
          </h2>
          <p className="text-muted-foreground font-body mb-6">
            Notre équipe vous accompagne de A à Z, de l'étude de vos besoins au déploiement complet.
          </p>
          <Button variant="hero" size="xl" onClick={openDialog}>
            Demander une démo personnalisée
          </Button>
        </motion.div>
      </section>
    </>
  );
};

export default SecteurPageLayout;
