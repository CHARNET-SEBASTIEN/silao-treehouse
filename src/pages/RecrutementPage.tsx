import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Compass,
  GraduationCap,
  HeartHandshake,
  Laptop,
  MapPinned,
  Plane,
  Rocket,
  Send,
  Users,
} from "lucide-react";

import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { getPageSeo } from "@/lib/publicRoutes";
import { COMPANY_DISPLAY_NAME, CONTACT_EMAIL, PRODUCT_NAME } from "@/lib/site";

type JobOffer = {
  slug: string;
  title: string;
  summary: string;
  salary: string;
  mobility: string;
  introduction: string;
  missions: string[];
  expectations: string[];
  experience: string[];
  softSkills: string[];
  hardSkills: string[];
  icon: typeof BriefcaseBusiness;
};

const companyValues = [
  {
    icon: HeartHandshake,
    title: "Un impact utile",
    description:
      `Nos équipes travaillent pour des structures où la qualité de coordination a un effet direct sur l'accompagnement des personnes.`,
  },
  {
    icon: Compass,
    title: "De l'autonomie réelle",
    description:
      "Chaque poste laisse de la place à l'initiative, à la prise de recul et à l'amélioration continue des pratiques.",
  },
  {
    icon: Rocket,
    title: "Un produit vivant",
    description:
      `Le terrain nourrit directement l'évolution de ${PRODUCT_NAME}, avec des échanges continus entre projet, formation, support et produit.`,
  },
];

const sharedQuickFacts = [
  { label: "Contrat", value: "CDI temps plein", icon: BriefcaseBusiness },
  { label: "Statut", value: "Employé(e) du secteur privé", icon: Users },
  { label: "Localisation", value: "Télétravail", icon: Laptop },
  { label: "Prise de poste", value: "Dès que possible", icon: ArrowRight },
];

const offers: JobOffer[] = [
  {
    slug: "chef-de-projet",
    title: "Chef de projet",
    summary:
      `Vous pilotez les déploiements de ${PRODUCT_NAME} auprès des établissements sociaux et médico-sociaux, en lien direct avec les directions, cadres et équipes terrain.`,
    salary: "Entre 33K€ et 40K€ brut annuel",
    mobility: "Quelques déplacements à prévoir",
    introduction:
      `En tant que Chef de projet, vous accompagnez la transformation numérique des ESSMS en sécurisant le cadrage, la mise en oeuvre et l'appropriation de ${PRODUCT_NAME}. Vous intervenez dans une logique de confiance, de clarté et d'utilité concrète pour les professionnels qui utilisent l'outil au quotidien.`,
    missions: [
      `Piloter les projets de déploiement de ${PRODUCT_NAME} de la phase de cadrage jusqu'au démarrage.`,
      "Animer les réunions projet, arbitrer les priorités et sécuriser les engagements réciproques.",
      "Conseiller les établissements sur l'organisation, la conduite du changement et les bonnes pratiques d'usage.",
      "Coordonner les besoins de paramétrage, de reprise de données, de formation et d'assistance.",
      "Faire remonter les retours terrain pour contribuer à l'amélioration continue du produit.",
    ],
    expectations: [
      "Un cadre de travail autonome avec une relation de confiance et de responsabilité.",
      "Des projets utiles, dans un secteur où l'humain prime sur les effets d'annonce.",
      "Une collaboration étroite avec les équipes produit, formation et support.",
      "Un accompagnement à la prise de poste et du coaching pour progresser durablement.",
    ],
    experience: [
      "Formation Bac +2 minimum.",
      "Expérience appréciée en gestion de projet, déploiement logiciel ou transformation des organisations.",
      "Une connaissance du secteur social, médico-social ou sanitaire est un plus.",
    ],
    softSkills: ["Autonomie", "Écoute active", "Capacité d'adaptation", "Sens du collectif"],
    hardSkills: [
      "Management de projet",
      "Animation de réunions",
      "Conduite du changement",
      "Coordination multi-interlocuteurs",
    ],
    icon: BriefcaseBusiness,
  },
  {
    slug: "formateur",
    title: "Formateur",
    summary:
      `Vous formez les équipes à ${PRODUCT_NAME} et vous les aidez à transformer leurs pratiques avec pédagogie, exigence et proximité.`,
    salary: "Entre 33K€ et 40K€ brut annuel",
    mobility: "7 jours de déplacement / mois minimum",
    introduction:
      `En tant que Formateur, vous participez au déploiement de ${PRODUCT_NAME} au sein des établissements sociaux et médico-sociaux. Vous rendez le logiciel immédiatement utile pour les équipes en adaptant la formation à leurs réalités métier, à leurs contraintes et à leur niveau de maturité numérique.`,
    missions: [
      "Préparer et animer les formations utilisateurs à distance ou sur site.",
      `Conseiller les utilisateurs pour améliorer leur appropriation de ${PRODUCT_NAME} et la qualité des usages.`,
      "Piloter des séquences de déploiement en lien avec les chefs de projet et les référents côté client.",
      "Contribuer à l'évolution des supports et des parcours de formation.",
      "Prendre en charge certaines demandes d'assistance fonctionnelle hors intervention de formation.",
    ],
    expectations: [
      "Une forte autonomie dans l'organisation du travail et la préparation des interventions.",
      "Des missions qui ont du sens, auprès d'équipes engagées dans l'accompagnement des personnes.",
      `Une entreprise à taille humaine où le bien-être et l'entraide ne sont pas seulement affichés.`,
      "Une formation interne et un accompagnement concret pour développer vos compétences.",
    ],
    experience: [
      "Formation Bac +2 minimum.",
      "Débutants acceptés si vous avez une vraie appétence pour la pédagogie et le numérique.",
      "Une expérience en formation, accompagnement métier ou relation client B2B est un plus.",
    ],
    softSkills: ["Autonomie", "Pédagogie", "Capacité d'adaptation", "Sens du service"],
    hardSkills: [
      "Conduite de réunions et de formations",
      "Communication écrite et orale",
      "Structuration de contenus pédagogiques",
      "Maîtrise des outils numériques",
    ],
    icon: GraduationCap,
  },
  {
    slug: "support-relation-client",
    title: "Support / Relation Client",
    summary:
      `Vous accompagnez les utilisateurs de ${PRODUCT_NAME} au quotidien, en traitant leurs demandes avec clarté, méthode et sens du service.`,
    salary: "Entre 27K€ et 33K€ brut annuel",
    mobility: "Déplacements ponctuels possibles",
    introduction:
      `En tant que Support / Relation Client, vous êtes un point de contact essentiel pour les structures qui utilisent ${PRODUCT_NAME}. Vous qualifiez les demandes, apportez des réponses fiables, accompagnez les utilisateurs dans leurs usages et contribuez à maintenir une relation client fluide, réactive et attentive.`,
    missions: [
      "Réceptionner, qualifier et traiter les demandes d'assistance fonctionnelle des utilisateurs.",
      `Guider les clients dans l'utilisation de ${PRODUCT_NAME} avec pédagogie et précision.`,
      "Identifier les sujets récurrents et contribuer à l'amélioration des supports d'aide.",
      "Faire remonter les anomalies, irritants et besoins d'évolution aux équipes produit et projet.",
      "Participer au suivi de la satisfaction client et à la qualité de la relation dans la durée.",
    ],
    expectations: [
      "Un poste au contact direct des utilisateurs, avec un impact concret sur leur quotidien.",
      "Une équipe disponible pour partager les connaissances métier, produit et support.",
      "Un cadre de travail structuré, avec de l'autonomie dans la gestion des priorités.",
      "Une montée en compétence progressive sur le secteur ESSMS et les usages du DUI.",
    ],
    experience: [
      "Formation Bac +2 appréciée.",
      "Une première expérience en support logiciel, assistance utilisateurs ou relation client B2B est un plus.",
      "Une connaissance du secteur social, médico-social ou sanitaire est appréciée mais non obligatoire.",
    ],
    softSkills: ["Écoute active", "Rigueur", "Patience", "Sens du service"],
    hardSkills: [
      "Support utilisateurs",
      "Qualification de demandes",
      "Communication écrite",
      "Aisance avec les outils numériques",
    ],
    icon: HeartHandshake,
  },
];

const seo = getPageSeo("/recrutement");

const buildApplyHref = (roleTitle: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Candidature ${roleTitle} - ${PRODUCT_NAME}`)}`;

const spontaneousApplyHref =
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Candidature spontanée - ${PRODUCT_NAME}`)}`;

const RecrutementPage = () => (
  <div className="min-h-screen bg-background paper-grain">
    <SEOHead {...seo} />
    <Navbar />
    <PageMain className="pt-16">
      <section className="px-4 py-20 paper-bg">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <BriefcaseBusiness className="h-4 w-4" />
            Recrutement {COMPANY_DISPLAY_NAME}
          </div>
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            Rejoindre une équipe qui fait avancer le{" "}
            <span className="text-primary sketch-underline">numérique utile</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
            Nous recrutons des profils capables d&apos;allier rigueur, autonomie et sens du terrain
            pour accompagner les professionnels du social et du médico-social avec {PRODUCT_NAME}.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              Télétravail
            </span>
            <span className="rounded-full border border-secondary/25 bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary">
              3 postes ouverts
            </span>
            <span className="rounded-full border border-accent/25 bg-accent/90 px-3 py-1.5 text-xs font-semibold text-accent-foreground">
              ESSMS
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {companyValues.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[1.6rem] border border-border/60 bg-card p-8 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <value.icon className="h-5 w-5" />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-foreground">{value.title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">{value.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 paper-bg">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Postes ouverts</p>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
                Trois rôles au service du terrain, des clients et du produit
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              Chaque poste combine relation humaine, exigence de mise en oeuvre et contribution à la
              progression continue de {PRODUCT_NAME}.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {offers.map((offer, index) => (
              <motion.article
                key={offer.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="section-panel p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <offer.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{offer.title}</h3>
                  </div>
                  <span className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-semibold text-muted-foreground">
                    CDI
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">{offer.summary}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.2rem] border border-border/70 bg-background/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Salaire</p>
                    <p className="mt-2 font-semibold text-foreground">{offer.salary}</p>
                  </div>
                  <div className="rounded-[1.2rem] border border-border/70 bg-background/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Localisation</p>
                    <p className="mt-2 font-semibold text-foreground">Télétravail</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                    <a href={`#${offer.slug}`}>Voir l&apos;annonce</a>
                  </Button>
                  <Button variant="hero-outline" size="xl" className="w-full sm:w-auto" asChild>
                    <a href={buildApplyHref(offer.title)}>
                      <Send className="h-4 w-4" />
                      Postuler
                    </a>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          {offers.map((offer, offerIndex) => (
            <motion.article
              key={offer.slug}
              id={offer.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: offerIndex * 0.04 }}
              className="scroll-mt-24 rounded-[2rem] border border-border/60 bg-card p-8 shadow-sm md:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
                <aside className="space-y-4">
                  <div className="rounded-[1.5rem] border border-border/70 bg-background/75 p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <offer.icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{offer.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{offer.summary}</p>
                  </div>

                  <div className="rounded-[1.5rem] border border-border/70 bg-background/75 p-6">
                    <h3 className="text-lg font-bold text-foreground">Informations clés</h3>
                    <ul className="mt-5 space-y-4">
                      {sharedQuickFacts.map((fact) => (
                        <li key={`${offer.slug}-${fact.label}`} className="flex gap-3 text-sm">
                          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <fact.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{fact.label}</p>
                            <p className="leading-6 text-muted-foreground">{fact.value}</p>
                          </div>
                        </li>
                      ))}
                      <li className="flex gap-3 text-sm">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Plane className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Mobilité</p>
                          <p className="leading-6 text-muted-foreground">{offer.mobility}</p>
                        </div>
                      </li>
                      <li className="flex gap-3 text-sm">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <MapPinned className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Rémunération</p>
                          <p className="leading-6 text-muted-foreground">{offer.salary}</p>
                        </div>
                      </li>
                    </ul>
                    <Button variant="hero" size="xl" className="mt-6 w-full" asChild>
                      <a href={buildApplyHref(offer.title)}>
                        <Send className="h-4 w-4" />
                        Postuler
                      </a>
                    </Button>
                  </div>
                </aside>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-2xl font-bold text-foreground">Descriptif du poste</h3>
                    <p className="mt-4 text-sm leading-8 text-muted-foreground">{offer.introduction}</p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-foreground">Vos missions</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                      {offer.missions.map((mission) => (
                        <li key={mission} className="rounded-[1.15rem] border border-border/60 bg-background/65 px-4 py-3">
                          {mission}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-foreground">Ce que vous pouvez attendre</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                      {offer.expectations.map((expectation) => (
                        <li key={expectation} className="rounded-[1.15rem] border border-border/60 bg-background/65 px-4 py-3">
                          {expectation}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-[1.5rem] border border-border/60 bg-background/65 p-5 md:col-span-3">
                      <h3 className="text-2xl font-bold text-foreground">Profil et compétences</h3>
                    </div>

                    <div className="rounded-[1.5rem] border border-border/60 bg-background/65 p-5">
                      <h4 className="text-lg font-bold text-foreground">Formation / expérience</h4>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                        {offer.experience.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[1.5rem] border border-border/60 bg-background/65 p-5">
                      <h4 className="text-lg font-bold text-foreground">Savoir-être</h4>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                        {offer.softSkills.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[1.5rem] border border-border/60 bg-background/65 p-5">
                      <h4 className="text-lg font-bold text-foreground">Savoir-faire</h4>
                      <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                        {offer.hardSkills.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 paper-bg">
        <div className="mx-auto max-w-4xl section-panel p-8 md:p-10">
          <h2 className="text-3xl font-bold text-foreground">Une question avant de candidater ?</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            Vous pouvez nous écrire directement pour partager votre profil, poser une question sur un poste
            ou nous adresser une candidature spontanée.
          </p>

          <div className="mt-8 flex flex-col gap-3 lg:flex-row">
            <Button variant="hero" size="xl" className="w-full lg:w-auto" asChild>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Send className="h-4 w-4" />
                Nous écrire
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" className="w-full lg:w-auto" asChild>
              <a href={spontaneousApplyHref}>
                <ArrowRight className="h-4 w-4" />
                Envoyer une candidature spontanée
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageMain>
    <FooterSection />
  </div>
);

export default RecrutementPage;
