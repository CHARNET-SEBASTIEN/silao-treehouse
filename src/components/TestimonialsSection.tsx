import { motion } from "framer-motion";
import avatarClaire from "@/assets/avatar-claire.png";
import avatarMarianne from "@/assets/avatar-marianne.png";
import avatarStephane from "@/assets/avatar-stephane.png";

const testimonials = [
  {
    quote: "SILAO se distingue par une prise en main simple et un accompagnement projet réellement structuré.",
    name: "Direction de MECS",
    role: "Structure protection de l'enfance",
    avatar: avatarClaire,
  },
  {
    quote: "La logique multi-établissements et la lecture par secteur sont des éléments décisifs pour une association gestionnaire.",
    name: "Association multi-sites",
    role: "Direction générale",
    avatar: avatarMarianne,
  },
  {
    quote: "Les bénéfices métier doivent être exprimés clairement: transmissions, agenda, dossiers, coordination et pilotage.",
    name: "Équipe médico-sociale",
    role: "Secteur PH",
    avatar: avatarStephane,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-body mb-3">
            Références et retours écrits
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Des retours <span className="text-primary sketch-underline">terrain</span> plus lisibles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="sketch-border-sm bg-background p-8 flex flex-col items-center text-center"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-5 sketch-border"
              />
              <p className="text-foreground font-body italic mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <p className="font-sketch text-xl text-primary">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
