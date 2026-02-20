import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    title: "Comment réussir sa transition vers le DUI dans le médico-social",
    excerpt: "Guide complet pour accompagner vos équipes dans l'adoption du Dossier Usager Informatisé : étapes clés, bonnes pratiques et retours d'expérience.",
    date: "15 février 2026",
    readTime: "8 min",
    category: "Guide",
    slug: "#",
  },
  {
    title: "Conformité SONS 2026 : ce qui change pour les ESMS",
    excerpt: "Décryptage des nouvelles exigences du référentiel SONS et comment D2L vous garantit une conformité totale sans effort supplémentaire.",
    date: "28 janvier 2026",
    readTime: "5 min",
    category: "Réglementation",
    slug: "#",
  },
  {
    title: "Grappes multi-ESMS : mutualiser sans complexifier",
    excerpt: "Retour d'expérience d'une association gérant 12 établissements avec une architecture mutualisée D2L. Résultats et enseignements après 18 mois.",
    date: "10 janvier 2026",
    readTime: "6 min",
    category: "Cas client",
    slug: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Ressources & <span className="text-primary sketch-underline">Actualités</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Guides pratiques, décryptages réglementaires et retours d'expérience pour le secteur social et médico-social.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <a
                href={article.slug}
                className="block sketch-border bg-card p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                <Badge variant="secondary" className="mb-4 font-body text-xs">
                  {article.category}
                </Badge>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground/70 font-body">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 mt-4 text-sm text-primary font-body font-medium group-hover:underline">
                  Lire l'article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
