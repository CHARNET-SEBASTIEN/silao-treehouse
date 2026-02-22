import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle2, XCircle, RotateCcw, Trophy, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  { question: "Dans le secteur de la Protection de l'Enfance et du médico-social, l'acronyme DUI est utilisé à la place de DPI. Que signifie DUI ?", answer: "Dossier Usager Informatisé." },
  { question: "Quelle est la différence fondamentale de philosophie entre un DPI (sanitaire) et un DUI (médico-social) ?", answer: "Le DPI est centré sur une logique de « soin médical » ponctuel pour un patient, tandis que le DUI est centré sur une logique d'« accompagnement global » (éducatif, social, vie quotidienne et soin) pour un usager." },
  { question: "Quel est le nom du carnet de santé numérique national du patient, que les logiciels DUI ont l'obligation d'alimenter automatiquement ?", answer: "Le DMP (Dossier Médical Partagé), aujourd'hui intégré à « Mon espace santé »." },
  { question: "Qu'est-ce que l'INS, prérequis technique absolument indispensable à tout échange de données dans le Ségur ?", answer: "L'Identité Nationale de Santé. C'est l'identifiant unique du patient (basé sur son numéro de Sécurité Sociale / NIR) qui permet de référencer de manière fiable toutes ses données de santé." },
  { question: "Quel format de fichier informatique (standard structuré en XML) est imposé par le Ségur pour l'envoi de documents médicaux ou sociaux ?", answer: "Le format CDA R2 (Clinical Document Architecture)." },
  { question: "Quel est le nom du nouveau standard technologique (basé sur des API) vers lequel la Vague 2 du Ségur prépare la transition ?", answer: "Le FHIR (Fast Healthcare Interoperability Resources)." },
  { question: "À quoi sert concrètement une « BAL Applicative » paramétrée dans un DUI ?", answer: "C'est une boîte aux lettres MSSanté technique, non nominative. Elle est utilisée par le logiciel lui-même pour envoyer et recevoir des flux de données de manière automatique, sans intervention humaine." },
  { question: "Comment s'appelle la plateforme (PFI) qui vérifie la conformité des documents lors de l'envoi depuis un DUI vers l'extérieur ?", answer: "La Plateforme d'Intermédiation." },
  { question: "Dans le cadre d'un Organisme Gestionnaire possédant plusieurs structures, qu'est-ce qu'une « Grappe FINESS » ?", answer: "C'est un regroupement technique de plusieurs établissements géographiques (FINESS) sous une même architecture informatique, permettant de mutualiser les connexions (1 seule BAL Applicative et 1 seul raccordement PFI pour plusieurs établissements)." },
  { question: "Quel est le nom du dispositif de financement qui paie directement les éditeurs de logiciels pour le déploiement du Ségur ?", answer: "Le dispositif SONS (Système Ouvert et Non Sélectif)." },
  { question: "Quelle est la différence majeure d'objectif entre la Vague 1 et la Vague 2 du Ségur pour les logiciels ?", answer: "La Vague 1 était centrée sur l'émission (alimenter le DMP et envoyer via MSSanté). La Vague 2 est centrée sur la réception et l'intégration automatique des documents entrants." },
  { question: "Quel annuaire a été créé/étendu pour donner une identité numérique aux professionnels du médico-social (éducateurs, assistants sociaux) ?", answer: "Le RPPS+." },
  { question: "Quel service national permet aux professionnels de se connecter de façon simplifiée et sécurisée à leur DUI via une application mobile (e-CPS) ?", answer: "Pro Santé Connect (PSC)." },
  { question: "L'identifiant FINESS d'un établissement se décline en deux catégories distinctes. Lesquelles ?", answer: "Le FINESS Juridique (l'entité gestionnaire / l'association) et le FINESS Géographique (le lieu physique de l'établissement)." },
  { question: "Quel sigle désigne la certification obligatoire de l'hébergement des données de santé sur des serveurs cloud ?", answer: "HDS (Hébergeur certifié Données de Santé)." },
  { question: "Lors du paiement du financement SONS, quand l'éditeur peut-il réclamer le solde final de 70 % ?", answer: "Après la réalisation de la prestation (installation en production et mise en ordre de marche) validée par une preuve de réalisation. L'avance de 30 % est versée à la commande." },
  { question: "Un DUI moderne doit centraliser 4 grandes familles de données pour assurer une coordination pluridisciplinaire. Lesquelles ?", answer: "Les données administratives, sociales, éducatives et médicales." },
  { question: "Que signifie l'acronyme MSSanté ?", answer: "Messagerie Sécurisée de Santé. C'est l'espace de confiance national pour échanger des documents entre professionnels." },
  { question: "Quel est le nom du grand programme national de subventions (600M€+) destiné à aider les structures médico-sociales à rattraper leur retard numérique ?", answer: "Le programme ESMS Numérique." },
  { question: "Dans la Vague 2, quel prérequis d'identité doit être rempli pour qu'un document reçu se classe automatiquement dans le bon dossier usager ?", answer: "L'INS (Identité Nationale de Santé) du patient doit avoir été « qualifiée » des deux côtés (chez l'émetteur et chez le destinataire)." },
];

const QuizPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [selfAssessed, setSelfAssessed] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [answered, setAnswered] = useState<(boolean | null)[]>(new Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);

  const current = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleSelfAssess = (correct: boolean) => {
    const newAnswered = [...answered];
    newAnswered[currentIndex] = correct;
    setAnswered(newAnswered);
    const newAssessed = [...selfAssessed];
    newAssessed[currentIndex] = true;
    setSelfAssessed(newAssessed);
    if (correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setRevealed(false);
    } else {
      setFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setRevealed(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setRevealed(false);
    setScore(0);
    setSelfAssessed(new Array(questions.length).fill(false));
    setAnswered(new Array(questions.length).fill(null));
    setFinished(false);
  };

  const scorePercent = Math.round((score / questions.length) * 100);

  return (
    <div className="min-h-screen bg-background paper-grain">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-body px-4 py-1.5 rounded-full sketch-border-sm mb-4">
              <Brain className="w-4 h-4" />
              20 questions
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
                    <span>Question {currentIndex + 1} / {questions.length}</span>
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

                {/* Reveal / Answer */}
                {!revealed ? (
                  <div className="text-center">
                    <Button
                      variant="default"
                      size="lg"
                      onClick={() => setRevealed(true)}
                      className="font-sketch text-lg"
                    >
                      Voir la réponse
                    </Button>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-6">
                      <p className="text-sm uppercase tracking-widest text-primary font-body mb-3">Réponse</p>
                      <p className="text-foreground font-body leading-relaxed">
                        {current.answer}
                      </p>
                    </div>

                    {/* Self-assessment */}
                    {!selfAssessed[currentIndex] ? (
                      <div className="flex flex-col items-center gap-3">
                        <p className="text-sm text-muted-foreground font-body">Aviez-vous la bonne réponse ?</p>
                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            onClick={() => handleSelfAssess(true)}
                            className="gap-2 border-green-500/50 text-green-700 hover:bg-green-50 hover:text-green-800"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            Oui
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleSelfAssess(false)}
                            className="gap-2 border-destructive/50 text-destructive hover:bg-destructive/5"
                          >
                            <XCircle className="w-4 h-4" />
                            Non
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
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
                          answered[currentIndex] 
                            ? "bg-green-100 text-green-700" 
                            : "bg-destructive/10 text-destructive"
                        }`}>
                          {answered[currentIndex] ? "✓ Correct" : "✗ À revoir"}
                        </div>
                        <Button onClick={handleNext} className="gap-1">
                          {currentIndex < questions.length - 1 ? "Suivante" : "Résultats"}
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
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
                    {score} / {questions.length}
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
                    {answered.map((a, i) => (
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
      </main>
      <FooterSection />
    </div>
  );
};

export default QuizPage;
