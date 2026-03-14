import { motion } from "framer-motion";
import { Leaf, Landmark, Users2, Wrench } from "lucide-react";

const markers = [
  {
    icon: Landmark,
    title: "Depuis 2005",
    description:
      "D2L Informatique conçoit et fait évoluer SILAO avec une logique de service durable et un engagement de long terme.",
  },
  {
    icon: Users2,
    title: "30 collaborateurs",
    description:
      "Une équipe mêlant expertise informatique, accompagnement projet et profils issus du secteur social et médico-social.",
  },
  {
    icon: Wrench,
    title: "Un produit, maîtrisé en interne",
    description:
      "Commercialisation, développement, support, formation, reprise de données et R&D sont gérés par la même organisation.",
  },
  {
    icon: Leaf,
    title: "Un numérique responsable",
    description:
      "Open source, sobriété technique et déplacements limités au profit du train et de la visio quand c'est pertinent.",
  },
];

const CompanyStorySection = () => (
  <section id="societe" className="px-4 py-20 md:py-28">
    <div className="mx-auto max-w-6xl section-panel px-6 py-10 md:px-10 md:py-14">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
            Qui sommes-nous
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            D2L Informatique, un éditeur impliqué dans toute la vie du projet
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Depuis 2005, D2L développe SILAO avec une logique de service durable: un seul produit,
            une forte proximité terrain et une maîtrise complète du projet dans le temps.
          </p>
          <div className="mt-8 rounded-[1.75rem] border border-border/60 bg-card px-6 py-6">
            <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
              Ce qu&apos;il faut retenir
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground/85">
              <li>20 ans d&apos;expérience dans les logiciels pour le social et le médico-social.</li>
              <li>SILAO est construit et ajusté en partenariat avec les clients.</li>
              <li>La couverture s&apos;étend aujourd&apos;hui à la PDE, au PH, à l&apos;AHI et au PDS.</li>
              <li>La logique de service inclut support, formation, conseils et reprise de données.</li>
            </ul>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {markers.map((marker, index) => (
            <motion.article
              key={marker.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[1.5rem] border border-border/60 bg-background/85 px-5 py-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <marker.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">{marker.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{marker.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CompanyStorySection;
