import { motion } from "framer-motion";
import {
  Accessibility,
  HeartHandshake,
  Leaf,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const commitments = [
  {
    icon: Sparkles,
    title: "Qualité et simplicité",
    description:
      "Silao est une solution SaaS entièrement installée, gérée et mise à jour par nos soins, avec une attention particulière portée à la protection des données et à la conformité CNIL.",
  },
  {
    icon: LockKeyhole,
    title: "Sécurité",
    description:
      "L'accès est strictement réservé aux personnes habilitées, avec des droits d'utilisation attribués selon les profils. Les données sont hébergées sur des serveurs sécurisés et certifiés HDS, tandis que les échanges sont systématiquement chiffrés. Des sauvegardes régulières sont effectuées pour garantir leur intégrité, et les équipes bénéficient d'une sensibilisation continue aux enjeux de la cybersécurité.",
  },
  {
    icon: ShieldCheck,
    title: "Référencement Ségur",
    description:
      "Silao est référencé Ségur et s'inscrit dans une démarche de sécurité et d'amélioration de la prise en charge de l'usager.",
  },
  {
    icon: Accessibility,
    title: "Accessibilité",
    description:
      "Nos accompagnements, contenus et formations sont adaptés aux personnes en situation de handicap, avec aménagements possibles selon les besoins.",
  },
  {
    icon: Leaf,
    title: "Démarche responsable",
    description:
      "Nous privilégions systématiquement la visioconférence pour nos réunions, limitons les déplacements en favorisant le train, et intégrons le développement durable dans toutes nos pratiques et solutions.",
  },
];

const EngagementsSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 paper-bg">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <HeartHandshake className="h-4 w-4" />
            Engagements
          </div>
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Des engagements <span className="text-primary sketch-underline">durables</span> sur la
            sécurité, l&apos;accessibilité et la qualité de service
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            La performance, la réglementation et la qualité de l&apos;accompagnement sont au cœur de
            nos actions, avec un cap clair sur la sécurité des données, le référencement Ségur,
            l&apos;accessibilité et une démarche responsable.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
          {commitments.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[1.5rem] border border-border/60 bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h2 className="mb-3 text-xl font-bold text-foreground">{item.title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto max-w-3xl border-primary/20 bg-primary/5 p-8 text-center sketch-border md:p-10"
        >
          <HeartHandshake className="mx-auto mb-4 h-10 w-10 text-primary" />
          <p className="font-sketch text-xl text-primary">
            <strong>Nous ne livrons pas seulement un logiciel.</strong>
          </p>
          <p className="mt-3 text-lg leading-relaxed text-foreground font-body">
            Nous portons une solution, un accompagnement et une responsabilité durable.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="lg">
              <Link to="/offres">Voir les offres</Link>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/#contacts">Contacter l&apos;équipe</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngagementsSection;
