import { motion } from "framer-motion";
import { Accessibility, Home, ShieldCheck, Users, Baby, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const filieres = [
  {
    icon: Accessibility,
    name: "Handicap — PH",
    description: "Accompagnement des personnes en situation de handicap, enfants et adultes.",
    structures: ["IME", "ITEP", "MAS", "FAM", "ESAT", "SESSAD"],
    clients: ["Croix-Rouge française", "ADSEA 80"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    href: "/secteur/handicap",
  },
  {
    icon: ShieldCheck,
    name: "Protection de l'enfance — PDE",
    description: "Prise en charge et suivi des mineurs confiés à l'Aide Sociale à l'Enfance.",
    structures: ["MECS", "SAE", "AEMO", "Lieux de vie"],
    clients: ["Fondation Grancher", "MECS La Cordée"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    href: "/secteur/protection-enfance",
  },
  {
    icon: Home,
    name: "Insertion / AHI",
    description: "Hébergement, insertion et accueil des personnes en précarité ou demandeurs d'asile.",
    structures: ["CHRS", "SIAO", "CPH", "CADA"],
    clients: ["AJP"],
    color: "text-accent-foreground",
    bgColor: "bg-accent",
    href: "/secteur/insertion-ahi",
  },
  {
    icon: Baby,
    name: "CAMSP / CMPP",
    description: "Dépistage et soins précoces pour les enfants présentant des troubles du développement.",
    structures: ["CAMSP", "CMPP"],
    clients: ["En déploiement"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    href: "/secteur/camsp-cmpp",
  },
];

const FilieresSection = () => {
  return (
    <section className="py-24 px-4 paper-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-body mb-3">
            Couverture complète
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Silao couvre{" "}
            <span className="text-primary sketch-underline">tous les secteurs</span>{" "}
            du médico-social
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Une solution unique déployée sur l'ensemble des filières, avec des clients actifs sur chacune d'entre elles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filieres.map((filiere, index) => {
            const Icon = filiere.icon;
            return (
              <motion.div
                key={filiere.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={filiere.href}
                  className="sketch-border bg-card p-6 md:p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 block h-full group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${filiere.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${filiere.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{filiere.name}</h3>
                      <Badge variant="outline" className="mt-1 text-xs gap-1">
                        <Users className="w-3 h-3" /> Clients actifs
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground font-body">{filiere.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {filiere.structures.map((s) => (
                      <span
                        key={s}
                        className="sketch-border-sm px-3 py-1 text-xs font-body text-muted-foreground bg-muted/50"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-border pt-3 mt-auto flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground font-body mb-1">Références :</p>
                      <div className="flex flex-wrap gap-2">
                        {filiere.clients.map((c) => (
                          <span key={c} className="text-sm font-body font-medium text-foreground">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FilieresSection;
