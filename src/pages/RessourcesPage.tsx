import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpenText, FolderKanban, ShieldCheck, Workflow } from "lucide-react";
import { getPageSeo } from "@/lib/publicRoutes";

const pillars = [
  {
    icon: Workflow,
    title: "Déployer un DUI sans perdre l'historique",
    description:
      "Le sujet ne se limite pas au paramétrage. Les points critiques sont le cadrage, la reprise de données, la formation et le suivi de l'usage après démarrage.",
    links: [
      { to: "/accompagnement", label: "Voir la méthode d'accompagnement SILAO" },
      { to: "/offres", label: "Comparer les offres de déploiement" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Rendre la conformité compréhensible",
    description:
      "Les contenus les plus utiles répondent directement aux questions sur SONS, l'INS, MSSanté, le DMP et les impacts concrets sur les appels à projets.",
    links: [
      { to: "/conformite-sons", label: "Consulter la page conformité SONS" },
      { to: "/engagements", label: "Lire les engagements de support et de pérennité" },
    ],
  },
  {
    icon: FolderKanban,
    title: "Montrer les cas d'usage par structure",
    description:
      "Les ressources les plus utiles relient une problématique concrète à une structure précise, à un vocabulaire métier partagé et à des réponses opérationnelles pour les équipes.",
    links: [
      { to: "/secteur/handicap", label: "Explorer le secteur handicap" },
      { to: "/secteur/protection-enfance", label: "Explorer la protection de l'enfance" },
    ],
  },
];

const questions = [
  {
    question: "Par où commencer quand on prépare un projet DUI ?",
    answer:
      "Commencez par les ressources sur le cadrage, la reprise de données, l'organisation cible, les rôles projet, la formation et le démarrage. Ce sont les contenus les plus utiles pour comprendre ce qui change dans les pratiques et ce qu'il faut sécuriser avant la bascule.",
  },
  {
    question: "Que faut-il regarder pour comprendre SONS, Ségur, vague 1, vague 2 et ANS ?",
    answer:
      "Cherchez des ressources qui relient les exigences nationales aux usages du quotidien: identité, échanges sécurisés, partage documentaire, conformité, calendrier projet et impacts organisationnels. L'enjeu est de comprendre ce que ces cadres changent concrètement pour un établissement.",
  },
  {
    question: "Quels sujets explorer autour de la messagerie sécurisée, du DMP, du DSR, de l'HDS et de Blue ?",
    answer:
      "Les ressources les plus utiles expliquent quels documents circulent, dans quelles conditions, avec quel niveau de sécurité, et comment l'hébergement est organisé. Ce sont de bons repères pour comprendre l'environnement technique et réglementaire du DUI.",
  },
  {
    question: "Comment trouver des ressources adaptées à sa structure ou à sa filière ?",
    answer:
      "Il faut privilégier les contenus qui parlent du même contexte métier que le vôtre: handicap, protection de l'enfance, AHI, PDS ou multi-établissements. Plus les exemples, le vocabulaire et les contraintes ressemblent à votre organisation, plus la ressource sera utile.",
  },
];

const resourceGuides = [
  {
    icon: Workflow,
    eyebrow: "Préparer un projet",
    title: "Déploiement, reprise de données, organisation et conduite du changement",
    description:
      "Si vous cherchez à cadrer un DUI, commencez par les ressources sur la reprise de données, les ateliers projet, les rôles des équipes, la formation et le suivi après démarrage.",
    tags: ["cadrage projet DUI", "reprise de données", "formation utilisateurs", "démarrage"],
  },
  {
    icon: ShieldCheck,
    eyebrow: "Comprendre le cadre",
    title: "SONS, Ségur, ANS, vagues et exigences d'interopérabilité",
    description:
      "Pour comprendre les obligations et les jalons, recherchez des contenus qui expliquent le rôle de l'ANS, la logique Ségur, les vagues et les impacts sur le partage et la qualité des données.",
    tags: ["ANS", "SONS", "Ségur numérique", "vague 1", "vague 2"],
  },
  {
    icon: FolderKanban,
    eyebrow: "Aller au bon niveau métier",
    title: "Messagerie sécurisée, DMP, DSR, HDS, Blue et cas d'usage par filière",
    description:
      "Privilégiez les ressources qui relient sécurité, échanges documentaires, hébergement et fonctionnement des structures à des situations concrètes dans votre filière ou votre organisation.",
    tags: ["messagerie sécurisée", "DMP", "DSR", "HDS", "multi-établissements"],
  },
];

const seo = getPageSeo("/ressources");

const RessourcesPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <SEOHead {...seo} />
    <Navbar />
    <PageMain className="pt-16">
      <section className="px-4 py-20 paper-bg">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary"
          >
            <BookOpenText className="h-4 w-4" />
            Hub ressources
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-bold text-foreground md:text-6xl"
          >
            Ressources <span className="text-primary sketch-underline">SILAO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground"
          >
            Cette page regroupe les sujets que les décideurs ESSMS recherchent réellement
            avant de choisir un DUI : déploiement, conformité, multi-établissements,
            secteurs couverts et niveau d&apos;accompagnement.
          </motion.p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground">
              Les sujets à traiter <span className="text-primary sketch-underline">en profondeur</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Chaque bloc couvre un besoin métier identifié et renvoie vers les pages les plus utiles du site.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="section-panel p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{pillar.title}</h3>
                <p className="mb-4 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                <div className="flex flex-col gap-2">
                  {pillar.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                    >
                      {link.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 paper-bg">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-[linear-gradient(135deg,hsl(var(--brand-violet)/0.06),hsl(var(--primary)/0.05)_42%,hsl(var(--accent)/0.08))] p-8 shadow-[0_32px_90px_-42px_hsl(var(--brand-violet)/0.35)] md:p-10">
            <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  Trouver les bonnes <span className="text-primary sketch-underline">ressources DUI</span>
                  {" "}selon votre besoin
                </h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                  Que vous cherchiez à préparer un déploiement, comprendre le cadre SONS ou Ségur,
                  sécuriser les échanges ou trouver des repères adaptés à votre filière, ce bloc
                  vous aide à repérer les sujets qui comptent vraiment dans une recherche métier DUI.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["déploiement", "reprise de données", "SONS", "Ségur", "MSSanté", "DMP", "HDS", "filières ESSMS"].map(
                    (keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-border/70 bg-card/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/80"
                      >
                        {keyword}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {resourceGuides.map((topic, index) => (
                  <motion.article
                    key={topic.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-[1.5rem] border border-border/60 bg-card/90 p-5 shadow-sm backdrop-blur-sm"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <topic.icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      {topic.eyebrow}
                    </p>
                    <h3 className="mt-3 text-lg font-bold text-foreground">{topic.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {topic.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {topic.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                Questions qui reviennent <span className="text-primary sketch-underline">souvent</span>
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Ces repères aident à orienter une recherche métier sur le DUI, à identifier les bons
                sujets et à prioriser les ressources vraiment utiles.
              </p>
            </div>
            <div className="space-y-4">
              {questions.map((item, index) => (
                <motion.article
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[1.5rem] border border-border/60 bg-card/95 p-6 shadow-[0_20px_60px_-42px_hsl(var(--brand-violet)/0.35)]"
                >
                  <h3 className="mb-3 text-lg font-bold text-foreground">{item.question}</h3>
                  <p className="leading-7 text-muted-foreground">{item.answer}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageMain>
    <FooterSection />
  </div>
);

export default RessourcesPage;
