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
      "Les moteurs IA citent plus facilement des pages qui relient un problème clair à une structure précise, un vocabulaire métier et une réponse produit explicite.",
    links: [
      { to: "/secteur/handicap", label: "Explorer le secteur handicap" },
      { to: "/secteur/protection-enfance", label: "Explorer la protection de l'enfance" },
    ],
  },
];

const questions = [
  {
    question: "Quel contenu un site DUI doit-il publier pour être bien compris par les moteurs IA ?",
    answer:
      "Des pages complètes, structurées par question, avec un vocabulaire métier précis, des réponses courtes puis approfondies, et des liens explicites vers les pages produit, secteur et méthode associées.",
  },
  {
    question: "Pourquoi un hub ressources est-il utile pour SILAO ?",
    answer:
      "Parce qu'il relie les sujets informationnels, réglementaires et sectoriels aux pages commerciales. Cela améliore la compréhension du site par les moteurs et évite de laisser des contenus isolés sans lien sémantique fort.",
  },
  {
    question: "Quels sujets sont prioritaires pour SILAO ?",
    answer:
      "Le déploiement du DUI, la conformité SONS, la reprise de données, l'usage en multi-établissements et les spécificités de chaque filière sociale ou médico-sociale.",
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
              Chaque bloc répond à une intention de recherche claire et renvoie vers les pages les plus pertinentes du site.
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
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Questions qui reviennent <span className="text-primary sketch-underline">souvent</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Un contenu AI-search friendly répond rapidement, puis ouvre vers des pages détaillées et reliées entre elles.
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
                className="sketch-border bg-card p-6"
              >
                <h3 className="mb-3 text-lg font-bold text-foreground">{item.question}</h3>
                <p className="leading-7 text-muted-foreground">{item.answer}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageMain>
    <FooterSection />
  </div>
);

export default RessourcesPage;
