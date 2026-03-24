import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Que permet de faire SILAO au quotidien ?",
    answerText:
      "SILAO réunit dans un même environnement le dossier usager, l'agenda, le cahier de liaison, la gestion documentaire, le dossier santé, les alertes, les états et statistiques, ainsi que la facturation et les services socles du numérique en santé.",
    answer: (
      <>
        <p>
          SILAO réunit dans un même environnement le dossier usager, l&apos;agenda, le cahier de
          liaison, la gestion documentaire, le dossier santé, les alertes, les états et
          statistiques ainsi que la facturation.
        </p>
        <p className="mt-3">
          L&apos;outil intègre également les services socles comme Pro Santé Connect, l&apos;INS, le DMP
          et la MSS, pour sécuriser et fluidifier les usages métier.
        </p>
      </>
    ),
    links: [
      { to: "/#services", label: "Voir les fonctionnalités mises en avant" },
      { to: "/secteur/protection-enfance", label: "Explorer un secteur couvert" },
    ],
  },
  {
    question: "Pour quels secteurs SILAO est-il conçu ?",
    answerText:
      "SILAO est conçu pour la protection de l'enfance, le médico-social, l'accueil hébergement insertion et les personnes en difficultés spécifiques, avec des fonctionnalités adaptées à chaque réalité de terrain.",
    answer: (
      <>
        <p>
          SILAO couvre la protection de l&apos;enfance, le médico-social, l&apos;accueil hébergement
          insertion et les personnes en difficultés spécifiques.
        </p>
        <p className="mt-3">
          Les usages sont adaptés aux structures du secteur: hébergement, milieu ouvert, accueil
          familial, IME, SESSAD, CAMSP, CMPP, CHRS, CADA, HUDA, LHSS, ACT et autres organisations
          à forte coordination.
        </p>
      </>
    ),
    links: [
      { to: "/secteur/handicap", label: "Voir la page médico-social" },
      { to: "/secteur/insertion-ahi", label: "Voir la page AHI" },
    ],
  },
  {
    question: "Comment se passe le déploiement de SILAO ?",
    answerText:
      "SILAO fonctionne en mode SaaS: aucune installation locale n'est nécessaire. Le déploiement est accompagné par des chefs de projet dédiés qui prennent en charge le paramétrage, la reprise de données, la formation et le suivi.",
    answer: (
      <>
        <p>
          SILAO fonctionne en mode SaaS: aucune installation locale n&apos;est nécessaire et une
          simple connexion internet avec un navigateur suffit pour accéder à l&apos;outil.
        </p>
        <p className="mt-3">
          Le déploiement est accompagné par un ou deux chefs de projet dédiés qui interviennent sur
          le paramétrage, la reprise de données, la formation et le suivi des usages.
        </p>
      </>
    ),
    links: [
      { to: "/accompagnement", label: "Lire la page accompagnement" },
      { to: "/formations", label: "Découvrir les formations" },
    ],
  },
  {
    question: "Quelles garanties de sécurité et de conformité sont annoncées ?",
    answerText:
      "SILAO s'appuie sur un hébergement protégé HDS, des échanges chiffrés, des droits d'accès par profil, une gestion des sauvegardes et une veille réglementaire continue. L'outil est référencé Ségur sur plusieurs périmètres.",
    answer: (
      <>
        <p>
          L&apos;accès à Silao est réservé aux personnes autorisées, les droits sont définis selon les
          profils et les informations sont hébergées sur des serveurs protégés HDS.
        </p>
        <p className="mt-3">
          Les échanges circulant via internet sont chiffrés, les sauvegardes sont prises en charge
          et Silao est référencé DSR Ségur MS2 PE et DSR Ségur MS1 PH, avec DSR Ségur MS1 AHI en cours.
        </p>
      </>
    ),
    links: [
      { to: "/engagements", label: "Consulter les engagements" },
      { to: "/conformite-sons", label: "Voir la page conformité" },
    ],
  },
  {
    question: "Les formations sont-elles adaptées aux équipes et aux situations de handicap ?",
    answerText:
      "Oui. D2L Informatique propose plusieurs formules de formation adaptées aux besoins des équipes, organisables entre un et deux mois selon les demandes, avec une attention spécifique portée à l'accessibilité.",
    answer: (
      <>
        <p>
          D2L Informatique propose plusieurs formules de formation adaptées aux besoins des équipes,
          avec un délai d&apos;organisation et de réalisation compris entre un et deux mois selon les demandes.
        </p>
        <p className="mt-3">
          Chaque situation de handicap peut être étudiée individuellement afin d&apos;organiser les
          aménagements les plus adaptés, avec écoute des besoins et échange direct avec l&apos;équipe.
        </p>
      </>
    ),
    links: [
      { to: "/formations", label: "Consulter la page formations" },
      { to: "/engagements", label: "Voir l'engagement accessibilité" },
    ],
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answerText,
    },
  })),
};

const FAQSection = () => (
  <section id="faq" className="px-4 py-20 md:py-28 paper-grain">
    <div className="mx-auto max-w-3xl section-panel px-6 py-10 md:px-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="marker-label mb-4">FAQ</p>
        <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
          Questions <span className="text-primary sketch-underline">fréquentes</span>
        </h2>
        <p className="mx-auto max-w-xl font-body text-muted-foreground">
          Les questions les plus directes pour comprendre SILAO, son périmètre et son accompagnement.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${i}`}
              className="rounded-[1.4rem] border-b-0 bg-card px-6 sketch-border"
            >
              <AccordionTrigger className="py-5 text-left font-body font-semibold text-foreground transition-colors hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 font-body leading-relaxed text-muted-foreground">
                {faq.answer}
                <div className="mt-4 border-t border-border/40 pt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Pages liées
                  </p>
                  <div className="flex flex-col gap-2">
                    {faq.links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="text-sm font-medium text-primary hover:underline underline-offset-4"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
