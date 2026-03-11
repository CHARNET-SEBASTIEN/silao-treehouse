import { motion } from "framer-motion";
import avatarClaire from "@/assets/avatar-claire.png";
import avatarMarianne from "@/assets/avatar-marianne.png";
import avatarStephane from "@/assets/avatar-stephane.png";

const testimonials = [
  {
    quote: "Le DUI est intuitif et la mise en conformité réglementaire s'est faite naturellement. Un vrai gain de temps au quotidien !",
    name: "Claire",
    role: "Assistante de direction — MECS",
    avatar: avatarClaire,
  },
  {
    quote: "Nous avons déployé Silao sur nos structures Handicap et Protection de l'Enfance. La gestion multi-sites est un vrai plus.",
    name: "Marianne",
    role: "Directrice générale — Association gestionnaire",
    avatar: avatarMarianne,
  },
  {
    quote: "Les projets personnalisés et les transmissions sont centralisés, je prépare mes synthèses deux fois plus vite.",
    name: "Stéphane",
    role: "Éducateur spécialisé — IME",
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
          Retours <span className="text-primary sketch-underline">terrain</span>
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
