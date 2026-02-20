import { motion } from "framer-motion";
import { Clock, TicketCheck, Timer, Users, HeartHandshake, AlertTriangle } from "lucide-react";

const slaItems = [
  { icon: AlertTriangle, label: "24h pour anomalie bloquante", highlight: true },
  { icon: Timer, label: "5 jours pour anomalie non bloquante", highlight: false },
  { icon: TicketCheck, label: "Outil de ticketing transparent", highlight: false },
  { icon: Clock, label: "Traçabilité complète des demandes", highlight: false },
];

const clubPoints = [
  "Co-construction des évolutions",
  "Anticipation réglementaire",
  "Participation active des ESMS",
];

const EngagementsSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-body font-medium">
            <HeartHandshake className="w-4 h-4" />
            Axe 4 — Engagements
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Des engagements écrits sur{" "}
            <span className="text-primary sketch-underline">5 ans</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Performance et transparence : des SLA formalisés pour une relation de confiance durable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* SLA */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">SLA formalisés</h3>
            <div className="space-y-4">
              {slaItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className={`flex items-center gap-4 p-4 rounded-lg ${
                    item.highlight ? "bg-primary/10 sketch-border-sm" : "bg-card"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      item.highlight ? "bg-primary/20" : "bg-primary/10"
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${item.highlight ? "text-primary" : "text-primary"}`} />
                  </div>
                  <p className={`font-body text-lg ${item.highlight ? "text-foreground font-semibold" : "text-foreground"}`}>
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Club Utilisateurs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="sketch-border bg-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Club Utilisateurs</h4>
            </div>
            <div className="space-y-4">
              {clubPoints.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  <p className="text-foreground font-body">{point}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Un club formalisé pour co-construire les évolutions et anticiper les changements réglementaires avec vos équipes.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Message différenciant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="sketch-border bg-primary/5 border-primary/20 p-8 md:p-10 text-center max-w-3xl mx-auto"
        >
          <HeartHandshake className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="text-foreground text-lg font-body leading-relaxed">
            <strong>Nous ne livrons pas un logiciel.</strong>
          </p>
          <p className="text-primary font-sketch text-xl mt-3">
            Nous construisons une relation durable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EngagementsSection;
