import { motion } from "framer-motion";
import { Accessibility, Heart, Home, ShieldCheck, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const filieres = [
  {
    icon: Accessibility,
    name: "Handicap — PH",
    structures: ["IME", "ITEP", "MAS", "FAM", "ESAT", "SESSAD"],
    clients: ["Croix-Rouge française", "ADSEA 80"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    name: "Grand Âge — PA",
    structures: ["EHPAD", "SSIAD", "Accueil de jour"],
    clients: ["L'Oustal"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Home,
    name: "Insertion / AHI",
    structures: ["CHRS", "SIAO", "CPH", "CADA"],
    clients: ["AJP"],
    color: "text-accent-foreground",
    bgColor: "bg-accent",
  },
  {
    icon: ShieldCheck,
    name: "PDS",
    structures: ["CSAPA", "CAARUD", "ACT"],
    clients: ["Fondation Grancher", "MECS La Cordée"],
    color: "text-primary",
    bgColor: "bg-primary/10",
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
            Silao couvre les{" "}
            <span className="text-primary sketch-underline">4 filières</span>{" "}
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
                className="sketch-border bg-card p-6 md:p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
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

                <div className="border-t border-border pt-3 mt-auto">
                  <p className="text-xs text-muted-foreground font-body mb-2">Références :</p>
                  <div className="flex flex-wrap gap-2">
                    {filiere.clients.map((c) => (
                      <span key={c} className="text-sm font-body font-medium text-foreground">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FilieresSection;
