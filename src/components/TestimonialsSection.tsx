import { motion } from "framer-motion";
import avatarClaire from "@/assets/avatar-claire.png";
import avatarMarianne from "@/assets/avatar-marianne.png";
import avatarStephane from "@/assets/avatar-stephane.png";

const testimonials = [
  {
    quote: "La saisie et la mise à jour des informations sont rapides, simples, et conviviales !",
    name: "Claire",
    role: "Assistante de direction",
    avatar: avatarClaire,
  },
  {
    quote: "Je respecte les droits des usagers et c'est un gage de qualité pour l'évaluation externe !",
    name: "Marianne",
    role: "Directrice",
    avatar: avatarMarianne,
  },
  {
    quote: "Je passe beaucoup moins de temps à préparer mes synthèses.",
    name: "Stéphane",
    role: "Éducateur",
    avatar: avatarStephane,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16"
        >
          Ce qu'ils en <span className="text-primary sketch-underline">disent</span>
        </motion.h2>

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
