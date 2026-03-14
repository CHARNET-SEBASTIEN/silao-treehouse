import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const author = {
  name: "Équipe Silao",
  role: "Consultants métier & produit",
};

const siteUrl = "https://d2l-silao.lovable.app";

const articles = [
  {
    title: "Comment réussir sa transition vers le DUI dans le médico-social",
    excerpt:
      "Les 5 étapes clés pour migrer vers un DUI sans perdre d'historique : cadrage, reprise de données, formation, démarrage assisté, bilan à 6 mois. Retour d'expérience d'une association de 8 ESMS.",
    date: "15 février 2026",
    readTime: "8 min",
    category: "Guide",
    slug: "/accompagnement",
    relatedLinks: [
      { to: "/offres", label: "Voir les offres de déploiement associées" },
      { to: "/abonnement", label: "Comprendre le modèle d'abonnement" },
    ],
  },
  {
    title: "Conformité SONS 2026 : ce qui change concrètement pour les ESMS",
    excerpt:
      "INS qualifiée, MSSanté, DMP, CI-SIS : décryptage des obligations techniques du référentiel SONS et erreurs fréquentes lors des appels à projets ARS.",
    date: "28 janvier 2026",
    readTime: "5 min",
    category: "Réglementation",
    slug: "/conformite-sons",
    relatedLinks: [
      { to: "/offres", label: "Voir comment SILAO intègre la conformité" },
      { to: "/engagements", label: "Consulter les engagements durables" },
    ],
  },
  {
    title: "Grappes multi-ESMS : mutualiser son DUI sans perdre en autonomie",
    excerpt:
      "Retour terrain d'une association gérant 12 établissements (PH + PDE) avec SILAO : gains de temps, pièges évités, et indicateurs consolidés après 18 mois.",
    date: "10 janvier 2026",
    readTime: "6 min",
    category: "Cas client",
    slug: "/grappes-esms",
    relatedLinks: [
      { to: "/secteur/protection-enfance", label: "Voir un secteur couvert : protection de l'enfance" },
      { to: "/secteur/handicap", label: "Voir un secteur couvert : handicap" },
    ],
  },
];

const BlogSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Ressources SILAO",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}${article.slug}`,
        name: article.title,
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl section-panel px-6 py-10 md:px-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Ressources & <span className="text-primary sketch-underline">Actualités</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Guides terrain, décryptages réglementaires et retours d'expérience pour les professionnels du social et médico-social.
          </p>
          <p className="text-sm text-muted-foreground font-body max-w-2xl mx-auto mt-3 leading-6">
            Chaque ressource ouvre ensuite vers les pages produit, méthode ou secteur directement liées au sujet traité, pour garder un parcours de lecture cohérent.
          </p>
          <p className="text-xs text-muted-foreground/60 font-body mt-2">
            Dernière mise à jour : mars 2026
          </p>
          <div className="mt-5">
            <Link
              to="/ressources"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              Voir le hub ressources
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="sketch-border bg-card p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="group h-full">
                <Badge variant="secondary" className="mb-4 font-body text-xs">
                  {article.category}
                </Badge>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  <Link to={article.slug} className="hover:underline underline-offset-4">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground/70 font-body mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
                {/* Author attribution */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground/60 font-body border-t border-border/40 pt-3">
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                    <User className="w-3 h-3 text-primary" />
                  </div>
                  <span>{author.name}</span>
                  <span className="text-muted-foreground/40">·</span>
                  <span>{author.role}</span>
                </div>
                <div className="mt-4 border-t border-border/40 pt-4">
                  <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    À explorer aussi
                  </p>
                  <div className="flex flex-col gap-2">
                    {article.relatedLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="text-sm font-medium text-primary hover:underline underline-offset-4"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 mt-3 text-sm text-primary font-body font-medium group-hover:underline">
                  <Link to={article.slug} className="inline-flex items-center gap-1">
                    Lire l'article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
