import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";

const resources = [
  {
    title: "Fonctionnalités principales de SILAO",
    excerpt:
      "Dossier usager, agenda, cahier de liaison, GED, dossier santé, alertes, états, statistiques, facturation et services socles.",
    category: "Produit",
    slug: "/#services",
  },
  {
    title: "Accompagnement et déploiement",
    excerpt:
      "Déploiement SaaS, chefs de projet dédiés, expertise métier, proximité terrain et continuité entre paramétrage, formation et suivi.",
    category: "Projet",
    slug: "/accompagnement",
  },
  {
    title: "Engagements, sécurité et accessibilité",
    excerpt:
      "Protection des données, hébergement HDS, chiffrement, référencement Ségur, accessibilité des contenus et démarche responsable.",
    category: "Garanties",
    slug: "/engagements",
  },
];

const BlogSection = () => {
  return (
    <section className="px-4 py-20 md:py-28 tint-accent">
      <div className="mx-auto max-w-6xl section-panel px-6 py-10 md:px-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Repères & <span className="text-primary sketch-underline">contenus clés</span>
          </h2>
          <p className="mx-auto max-w-xl font-body text-muted-foreground">
            Les entrées essentielles du site pour comprendre le produit, la méthode de déploiement
            et les engagements portés par D2L Informatique.
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="surface-card h-full rounded-[1.5rem] p-6"
            >
              <div className="group flex h-full flex-col">
                <Badge variant="secondary" className="mb-4 font-body text-xs">
                  {resource.category}
                </Badge>
                <h3 className="mb-2 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                  <Link to={resource.slug} className="hover:underline underline-offset-4">
                    {resource.title}
                  </Link>
                </h3>
                <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
                  {resource.excerpt}
                </p>
                <span className="mt-auto pt-3 inline-flex items-center gap-1 text-sm font-medium text-primary font-body group-hover:underline">
                  <Link to={resource.slug} className="inline-flex items-center gap-1">
                    Ouvrir la page <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
