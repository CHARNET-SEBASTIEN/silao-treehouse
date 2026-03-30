import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";

const resources = [
  {
    title: "Fonctionnalités principales de Silao",
    category: "Solution logicielle",
    slug: "/#services",
  },
  {
    title: "Accompagnement et déploiement",
    category: "Projet",
    slug: "/accompagnement",
  },
  {
    title: "Engagements, sécurité et accessibilité",
    category: "Garanties",
    slug: "/engagements",
  },
];

type BlogSectionProps = {
  showResourcesLink?: boolean;
};

const BlogSection = ({ showResourcesLink = true }: BlogSectionProps) => {
  return (
    <section className="px-4 py-6 md:py-8 tint-accent">
      <div className="mx-auto max-w-6xl section-panel px-6 py-5 md:px-10 md:py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-center"
        >
          <p className="marker-label mb-4">Repères utiles</p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            D2L Informatique et Silao en bref
          </h2>
          <p className="mx-auto max-w-xl font-body text-muted-foreground">
            Les pages les plus utiles pour comprendre la solution, le déploiement et les engagements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {resources.map((resource, index) => (
            <motion.article
              key={resource.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="surface-card h-full rounded-[1.5rem] p-6"
            >
              <div className="group flex h-full flex-col">
                <Badge variant="secondary" className="mb-4 w-fit font-body text-xs">
                  {resource.category}
                </Badge>
                <h3 className="mb-6 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                  <Link to={resource.slug} className="hover:underline underline-offset-4">
                    {resource.title}
                  </Link>
                </h3>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                  <Link to={resource.slug} className="inline-flex items-center gap-1">
                    Ouvrir la page <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {showResourcesLink ? (
          <div className="mt-4 text-center">
            <Link
              to="/ressources"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              Voir les ressources
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default BlogSection;
