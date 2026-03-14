import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, RotateCcw, Trophy, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PageMain from "@/components/PageMain";
import SEOHead from "@/components/SEOHead";
import { getPageSeo } from "@/lib/publicRoutes";

interface Question {
  question: string;
  correctAnswer: string;
  choices: string[];
}

const rawQuestions: Question[] = [
  {
    question: "Dans le secteur de la Protection de l'Enfance et du médico-social, que signifie l'acronyme DUI ?",
    correctAnswer: "Dossier Usager Informatisé",
    choices: ["Dossier Usager Informatisé", "Dossier Universel d'Information", "Document Unique d'Identification", "Dossier Unifié Interdisciplinaire"],
  },
  {
    question: "Quelle est la différence fondamentale entre un DPI (sanitaire) et un DUI (médico-social) ?",
    correctAnswer: "Le DPI est centré sur le soin médical ponctuel, le DUI sur l'accompagnement global (éducatif, social, soin)",
    choices: [
      "Le DPI est centré sur le soin médical ponctuel, le DUI sur l'accompagnement global (éducatif, social, soin)",
      "Le DPI est gratuit, le DUI est payant",
      "Le DPI est numérique, le DUI est papier",
      "Le DPI concerne les enfants, le DUI les adultes",
    ],
  },
  {
    question: "Quel carnet de santé numérique national les logiciels DUI doivent-ils alimenter automatiquement ?",
    correctAnswer: "Le DMP (Dossier Médical Partagé), intégré à « Mon espace santé »",
    choices: [
      "Le DMP (Dossier Médical Partagé), intégré à « Mon espace santé »",
      "Le Carnet de Vaccination Électronique (CVE)",
      "Le Dossier Pharmaceutique (DP)",
      "Le Registre National des Patients (RNP)",
    ],
  },
  {
    question: "Qu'est-ce que l'INS, prérequis indispensable à tout échange de données dans le Ségur ?",
    correctAnswer: "L'Identité Nationale de Santé, identifiant unique basé sur le NIR",
    choices: [
      "L'Identité Nationale de Santé, identifiant unique basé sur le NIR",
      "L'Interface Numérique Sécurisée pour les échanges inter-établissements",
      "L'Indice National de Sécurité des données médicales",
      "L'Identifiant Normé de Structure",
    ],
  },
  {
    question: "Quel format de fichier est imposé par le Ségur pour l'envoi de documents médicaux ou sociaux ?",
    correctAnswer: "Le format CDA R2 (Clinical Document Architecture)",
    choices: [
      "Le format CDA R2 (Clinical Document Architecture)",
      "Le format PDF/A-3",
      "Le format HL7 v2",
      "Le format JSON-LD",
    ],
  },
  {
    question: "Vers quel nouveau standard technologique la Vague 2 du Ségur prépare-t-elle la transition ?",
    correctAnswer: "Le FHIR (Fast Healthcare Interoperability Resources)",
    choices: [
      "Le FHIR (Fast Healthcare Interoperability Resources)",
      "Le GraphQL Santé",
      "Le DICOM 4.0",
      "Le REST-HL7",
    ],
  },
  {
    question: "À quoi sert une « BAL Applicative » paramétrée dans un DUI ?",
    correctAnswer: "Une boîte aux lettres MSSanté technique pour envoyer/recevoir des flux automatiques sans intervention humaine",
    choices: [
      "Une boîte aux lettres MSSanté technique pour envoyer/recevoir des flux automatiques sans intervention humaine",
      "Une boîte de réception pour les courriers papier numérisés",
      "Un système de messagerie interne entre professionnels",
      "Un outil de notification push pour les usagers",
    ],
  },
  {
    question: "Comment s'appelle la plateforme qui vérifie la conformité des documents lors de l'envoi depuis un DUI ?",
    correctAnswer: "La Plateforme d'Intermédiation (PFI)",
    choices: [
      "La Plateforme d'Intermédiation (PFI)",
      "Le Hub National de Santé (HNS)",
      "La Passerelle de Conformité Documentaire (PCD)",
      "Le Centre de Validation Ségur (CVS)",
    ],
  },
  {
    question: "Qu'est-ce qu'une « Grappe FINESS » pour un Organisme Gestionnaire multi-structures ?",
    correctAnswer: "Un regroupement technique de plusieurs établissements permettant de mutualiser les connexions",
    choices: [
      "Un regroupement technique de plusieurs établissements permettant de mutualiser les connexions",
      "Un classement qualité des établissements par zone géographique",
      "Un réseau de partage de personnel entre structures",
      "Un système de facturation groupée entre ESMS",
    ],
  },
  {
    question: "Quel dispositif de financement paie directement les éditeurs pour le déploiement du Ségur ?",
    correctAnswer: "Le dispositif SONS (Système Ouvert et Non Sélectif)",
    choices: [
      "Le dispositif SONS (Système Ouvert et Non Sélectif)",
      "Le Fonds National d'Investissement Numérique (FNIN)",
      "Le Crédit d'Impôt Transition Digitale (CITD)",
      "Le Programme d'Aide aux Éditeurs Santé (PAES)",
    ],
  },
  {
    question: "Quelle est la différence majeure entre la Vague 1 et la Vague 2 du Ségur ?",
    correctAnswer: "Vague 1 : émission (alimenter le DMP, envoyer via MSSanté). Vague 2 : réception et intégration automatique",
    choices: [
      "Vague 1 : émission (alimenter le DMP, envoyer via MSSanté). Vague 2 : réception et intégration automatique",
      "Vague 1 : secteur hospitalier. Vague 2 : secteur médico-social",
      "Vague 1 : formation des équipes. Vague 2 : déploiement technique",
      "Vague 1 : financement public. Vague 2 : financement privé",
    ],
  },
  {
    question: "Quel annuaire donne une identité numérique aux éducateurs et assistants sociaux ?",
    correctAnswer: "Le RPPS+",
    choices: [
      "Le RPPS+",
      "L'Annuaire National des Travailleurs Sociaux (ANTS)",
      "Le Répertoire Éducatif National (REN)",
      "Le Fichier Central des Professionnels (FCP)",
    ],
  },
  {
    question: "Quel service permet la connexion simplifiée et sécurisée au DUI via l'application mobile e-CPS ?",
    correctAnswer: "Pro Santé Connect (PSC)",
    choices: [
      "Pro Santé Connect (PSC)",
      "FranceConnect Santé",
      "Ameli Pro Connect",
      "CPS Mobile Auth",
    ],
  },
  {
    question: "L'identifiant FINESS se décline en deux catégories. Lesquelles ?",
    correctAnswer: "Le FINESS Juridique (entité gestionnaire) et le FINESS Géographique (lieu physique)",
    choices: [
      "Le FINESS Juridique (entité gestionnaire) et le FINESS Géographique (lieu physique)",
      "Le FINESS Principal et le FINESS Secondaire",
      "Le FINESS National et le FINESS Régional",
      "Le FINESS Public et le FINESS Privé",
    ],
  },
  {
    question: "Quel sigle désigne la certification obligatoire de l'hébergement des données de santé ?",
    correctAnswer: "HDS (Hébergeur certifié Données de Santé)",
    choices: [
      "HDS (Hébergeur certifié Données de Santé)",
      "RGPD Santé",
      "ISO 27001 Médical",
      "CSN (Certification Sécurité Numérique)",
    ],
  },
  {
    question: "Quand l'éditeur peut-il réclamer le solde final de 70 % du financement SONS ?",
    correctAnswer: "Après l'installation en production et mise en ordre de marche, validée par une preuve de réalisation",
    choices: [
      "Après l'installation en production et mise en ordre de marche, validée par une preuve de réalisation",
      "Dès la signature du contrat avec l'établissement",
      "Après 6 mois d'utilisation par l'établissement",
      "Après validation par l'ARS du territoire",
    ],
  },
  {
    question: "Un DUI moderne doit centraliser 4 grandes familles de données. Lesquelles ?",
    correctAnswer: "Administratives, sociales, éducatives et médicales",
    choices: [
      "Administratives, sociales, éducatives et médicales",
      "Financières, juridiques, médicales et logistiques",
      "Médicales, paramédicales, pharmaceutiques et biologiques",
      "Identité, parcours, facturation et conformité",
    ],
  },
  {
    question: "Que signifie l'acronyme MSSanté ?",
    correctAnswer: "Messagerie Sécurisée de Santé",
    choices: [
      "Messagerie Sécurisée de Santé",
      "Messagerie des Services de Santé",
      "Moniteur de Sécurité Sanitaire",
      "Module de Suivi Santé",
    ],
  },
  {
    question: "Quel programme national de subventions (600M€+) aide les structures médico-sociales dans leur transition numérique ?",
    correctAnswer: "Le programme ESMS Numérique",
    choices: [
      "Le programme ESMS Numérique",
      "Le plan France Relance Santé",
      "Le programme e-Médico-Social",
      "Le fonds Ségur Investissement",
    ],
  },
  {
    question: "Dans la Vague 2, quel prérequis permet le classement automatique d'un document reçu dans le bon dossier ?",
    correctAnswer: "L'INS du patient doit avoir été « qualifiée » chez l'émetteur et le destinataire",
    choices: [
      "L'INS du patient doit avoir été « qualifiée » chez l'émetteur et le destinataire",
      "Le document doit contenir un QR code de routage",
      "Les deux établissements doivent partager la même BAL Applicative",
      "Le patient doit avoir activé son espace Mon espace santé",
    ],
  },
];

const seo = getPageSeo("/quiz-segur");

/** Shuffle an array (Fisher-Yates) */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QuizPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(boolean | null)[]>(new Array(rawQuestions.length).fill(null));
  const [finished, setFinished] = useState(false);

  // Shuffle choices once per question visit (memoized per index)
  const shuffledChoices = useMemo(
    () => rawQuestions.map((q) => shuffle(q.choices)),
    [] // stable for entire quiz session
  );

  const current = rawQuestions[currentIndex];
  const choices = shuffledChoices[currentIndex];
  const progress = ((currentIndex + 1) / rawQuestions.length) * 100;

  const handleSelect = (choice: string) => {
    if (locked) return;
    setSelected(choice);
    setLocked(true);
    const isCorrect = choice === current.correctAnswer;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = isCorrect;
    setAnswers(newAnswers);
    if (isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentIndex < rawQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setLocked(false);
    } else {
      setFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      // Show previous answer state
      setSelected(null);
      setLocked(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setLocked(false);
    setScore(0);
    setAnswers(new Array(rawQuestions.length).fill(null));
    setFinished(false);
  };

  const scorePercent = Math.round((score / rawQuestions.length) * 100);

  const getChoiceStyle = (choice: string) => {
    if (!locked) {
      return "bg-card hover:bg-muted/60 border-border cursor-pointer";
    }
    if (choice === current.correctAnswer) {
      return "bg-green-50 border-green-400 text-green-800";
    }
    if (choice === selected && choice !== current.correctAnswer) {
      return "bg-destructive/10 border-destructive/40 text-destructive";
    }
    return "bg-card border-border opacity-50";
  };

  return (
    <div className="min-h-screen bg-background paper-grain">
      <SEOHead {...seo} />
      <Navbar />
      <PageMain className="pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-body px-4 py-1.5 rounded-full sketch-border-sm mb-4">
              <Brain className="w-4 h-4" />
              20 questions — QCM
            </div>
            <h1 className="text-3xl md:text-4xl font-sketch text-foreground mb-2">
              Quiz Ségur & Médico-Social
            </h1>
            <p className="text-muted-foreground font-body">
              Enfance / ESMS — Testez vos connaissances
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
              >
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm font-body text-muted-foreground mb-2">
                    <span>Question {currentIndex + 1} / {rawQuestions.length}</span>
                    <span>{score} bonne{score > 1 ? "s" : ""} réponse{score > 1 ? "s" : ""}</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                {/* Question card */}
                <div className="bg-card rounded-2xl sketch-border p-6 md:p-8 mb-6">
                  <p className="text-lg md:text-xl font-body text-foreground leading-relaxed">
                    {current.question}
                  </p>
                </div>

                {/* Choices */}
                <div className="space-y-3 mb-6">
                  {choices.map((choice, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(choice)}
                      disabled={locked}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all font-body text-sm md:text-base ${getChoiceStyle(choice)}`}
                    >
                      <span className="font-semibold mr-2 text-muted-foreground">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      {choice}
                    </button>
                  ))}
                </div>

                {/* Navigation after answer */}
                {locked && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-center"
                  >
                    <Button
                      variant="ghost"
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                      className="gap-1"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Précédent
                    </Button>
                    <div className={`text-sm font-body px-3 py-1 rounded-full ${
                      answers[currentIndex]
                        ? "bg-green-100 text-green-700"
                        : "bg-destructive/10 text-destructive"
                    }`}>
                      {answers[currentIndex] ? "✓ Correct" : "✗ Incorrect"}
                    </div>
                    <Button onClick={handleNext} className="gap-1">
                      {currentIndex < rawQuestions.length - 1 ? "Suivante" : "Résultats"}
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              /* Results screen */
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="bg-card rounded-2xl sketch-border p-8 md:p-12 mb-8">
                  <Trophy className={`w-16 h-16 mx-auto mb-4 ${
                    scorePercent >= 80 ? "text-secondary" : scorePercent >= 50 ? "text-primary" : "text-muted-foreground"
                  }`} />
                  <h2 className="text-4xl md:text-5xl font-sketch text-foreground mb-2">
                    {score} / {rawQuestions.length}
                  </h2>
                  <p className="text-lg text-muted-foreground font-body mb-6">
                    {scorePercent >= 80
                      ? "Excellent ! Vous maîtrisez le Ségur 🎉"
                      : scorePercent >= 50
                        ? "Bien joué ! Quelques notions à consolider."
                        : "Continuez à vous former, vous progresserez vite !"}
                  </p>

                  {/* Summary dots */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {answers.map((a, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-body ${
                          a ? "bg-green-100 text-green-700" : "bg-destructive/10 text-destructive"
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>

                  <Button onClick={handleRestart} size="lg" className="gap-2 font-sketch text-lg">
                    <RotateCcw className="w-4 h-4" />
                    Recommencer
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </PageMain>
      <FooterSection />
    </div>
  );
};

export default QuizPage;
