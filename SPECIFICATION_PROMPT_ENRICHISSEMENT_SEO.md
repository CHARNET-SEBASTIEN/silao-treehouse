# 📋 SPECIFICATION PROMPT — Enrichissement SEO Pages Secteurs Silao.fr

## Contexte & Objectif

**Objectif principal** : Augmenter le CTR et la position sur les requêtes génériques "logiciel DUI" + secteur (ex: "logiciel DUI AHI", "logiciel protection enfance").

**Situation actuelle** :
- Domination de marque ("silao" : 957 clics) mais invisibilité sur requêtes cibles
- Pages secteurs trop courtes (~300-400 mots) → Google ne les voit pas comme pertinentes
- Meta descriptions peu convaincantes → CTR faible même quand Google affiche la page

**Cible** :
- Augmenter le contenu de **1,500 à 2,000 mots par page secteur** (au lieu de 300-400 actuellement)
- Améliorer la conversion de requêtes "impression → clic" (0% → 5-10%)
- Monter en position sur 5-10 requêtes clés par secteur en 6-8 semaines

---

## Style & Ton Attendu

**IMPORTANT** : Respecter le style actuel du site Silao.

### Caractéristiques du style Silao :

- ✅ **Professionnel mais accessible** : pas de jargon inutile, explications simples
- ✅ **Concis mais riche** : pas de verbosité, chaque phrase apporte de l'info
- ✅ **Orienté métier** : parle des vrais problèmes du terrain (confidentialité, travail d'équipe, suivi usager)
- ✅ **Honnête et prudent** : ne promet rien d'exagéré, reconnaît les limites
- ✅ **Axé cas d'usage** : montre COMMENT le logiciel aide, pas juste QUOI il fait
- ✅ **Inclusif des nuances** : reconnaît que différents établissements ont des besoins différents

### Exemple de ton Silao ACTUEL (bon modèle) :

> "La protection de l'enfance est le tout premier secteur pour lequel Silao a dédié ses fonctionnalités. L'outil couvre les besoins de l'hébergement, du milieu ouvert, de l'accueil familial et des accompagnements spécifiques, avec une adaptation continue aux réalités terrain."

**Ce qui marche** : direct, "réalités terrain", reconnaissance de la complexité.

### Exemple de ton MAUVAIS (à éviter) :

❌ "Silao révolutionne la gestion des établissements médico-sociaux grâce à son IA de pointe..." (trop marketing)
❌ "Un logiciel DUI performance pour une meilleure traçabilité..." (vague, clichés)
❌ "Découvrez comment nos 15 années d'expertise..." (trop centré sur Silao)

---

## Structure du Contenu à Enrichir

Chaque page secteur doit avoir cette structure (ordre d'apparition dans le code React) :

### 1️⃣ **TITLE TAG** (Google SERP, 50-60 caractères)

**Format** : `[Type logiciel] [Secteur clé] | [Sigle métier] | Silao`

**Exemples par secteur** :

| Secteur | Title Tag Actuel | Title Tag Nouveau |
|---------|-----------------|-------------------|
| **PDE** | (défaut) | `Logiciel DUI Protection Enfance \| MECS AEMO FAM \| Silao` |
| **Handicap** | (défaut) | `Logiciel DUI Handicap \| IME ESAT FAM \| Silao` |
| **AHI** | (défaut) | `Logiciel DUI Insertion Adaptation \| ESSMS EPCI \| Silao` |
| **CAMSP-CMPP** | (défaut) | `Logiciel CAMSP-CMPP \| Ségur Conformité \| Silao` |

### 2️⃣ **META DESCRIPTION** (Google SERP, 150-160 caractères)

**Format** : `[Brève description] pour [structures clés]. [2-3 fonctionnalités clés]. [Élément différenciant]. Démo gratuite.`

**Exemples** :

| Secteur | Meta Description |
|---------|------------------|
| **PDE** | `Logiciel DUI protection enfance pour MECS, AEMO, accueil familial, milieu ouvert. Gestion usager, fratries, argent poche, présences. Ségur MS2 PDE référencé. Démo gratuite.` |
| **AHI** | `Logiciel AHI insertion adaptation pour ESSMS. Gestion insertion, suivi usager, droits sociaux. Ségur conformité. Démo gratuite.` |

### 3️⃣ **DESCRIPTION ENRICHIE** (lieu du composant SecteurPageLayout)

**Actuel** : ~60 mots  
**Cible** : 400-500 mots

**Structure interne** :

```
[Intro existante] 

Contexte du secteur (100 mots) :
- Qu'est-ce qui rend ce secteur unique ?
- Quels sont les défis principaux (travail d'équipe, confidentialité, flux de données) ?
- Pourquoi un logiciel générique ne suffit pas ?

Couverture Silao par type de structure (150 mots) :
- Pour [structure 1] : les enjeux spécifiques + comment Silao y répond
- Pour [structure 2] : idem
- Pour [structure 3] : idem
[Minimum 2-3 types de structures]

Conformité & normes (100 mots) :
- Ségur MS2 ou réglementation spécifique
- Confidentialité & droits d'accès dans ce secteur
- Interopérabilité (si pertinent)

Approche Silao (100-150 mots) :
- Philosophie ("adaptation continue aux réalités terrain")
- Focus sur travail d'équipe, écrits partagés, suivi du parcours
- Pas d'overselling, juste les faits
```

**Exemple pour Protection Enfance** :

```
La protection de l'enfance est le tout premier secteur pour lequel Silao a dédié ses fonctionnalités. L'outil couvre les besoins de l'hébergement, du milieu ouvert, de l'accueil familial et des accompagnements spécifiques, avec une adaptation continue aux réalités terrain.

Dans ce secteur, les enjeux sont multiples. Les MECS doivent gérer quotidiennement l'hébergement, les présences, les accueils réguliers, mais aussi coordonner avec les parents et les intervenants externes. Les structures de milieu ouvert (AEMO, AASC) travaillent sans colocalisation : le suivi se fait sur rendez-vous, en visio, par appel ou email. L'accueil familial ajoute une couche : les assistants familiaux doivent être suivis, leurs agréments validés, les places coordonnées avec les demandes ASE. Aucune de ces réalités n'est simple ; aucune n'est isolée. Un logiciel générique ne peut pas le comprendre.

Silao s'est construit autour de ces trois mondes. Pour les MECS, l'agenda devient le repère central (qui fait quoi, quand, avec qui), et le cahier de liaison l'espace d'écrits partagés (observations, demandes parents, notes éducatives). La gestion des fratries permet de lier les dossiers des enfants placés ensemble, sans perdre la confidentialité. Pour le milieu ouvert, ces mêmes outils s'adaptent : l'agenda affiche les rendez-vous et les appels documentés, le cahier de liaison centralise les écrits sans surcharge. Pour l'accueil familial, la gestion des assistants et des agréments devient structurante.

Ségur MS2 impose que les logiciels de ce secteur respectent un cadre strict de confidentialité, de traçabilité et de partage de données avec les ASE régionales. Silao a été conçu en tenant compte de ces obligations. Les droits d'accès sont fins, la traçabilité des opérations automatisée, les exports vers les statistiques nationales programmés.

Notre approche reste pragmatique : l'outil doit supporter les workflows réels, pas transformer les organisations pour s'adapter au logiciel. C'est pourquoi Silao écoute et évolue en continu avec ses utilisateurs du secteur.
```

### 4️⃣ **SECTIONS EXISTANTES — À LAISSER INTACTES**

- ❌ NE PAS MODIFIER : name, tagline, icon, color, structures (cards), modules (badges), clients
- ✅ À COMPLÉTER : benefits, FAQ

### 5️⃣ **BENEFITS — Enrichir le contenu**

**Actuel** : 5 items génériques  
**Cible** : 6-8 items plus contextuels et orientés métier

**Format par item** : 1 ligne claire + orientée résultat (pas feature)

**Exemple pour PDE (actuel)** :
- "L'agenda et le cahier de liaison constituent deux des piliers de l'activité."
- "Les fonctionnalités ont été conçues pour répondre aux besoins de l'hébergement comme du milieu ouvert."

**Exemple pour PDE (enrichi)** :
```
Existants :
- "L'agenda et le cahier de liaison constituent deux des piliers de l'activité." ✅

Nouveaux à ajouter :
- "Ségur MS2 : droits d'accès fins et traçabilité des opérations intégrés par défaut."
- "Les fratries restent centralisées pour les placements multiples, sans isolation de dossiers."
- "Exports statistiques et facturation prêts pour l'ASE et les tutelles de gestion."
- "Intégration des visio, appels, emails dans le cahier de liaison sans casser la confidentialité."
- "Agenda partagé avec les parents et intervenants externes (pas de surprises d'accès)."
- "Multi-structures : gérer une MECS ET un placement familial depuis le même outil."
```

### 6️⃣ **FAQ — Complètement refondre**

**Actuel** : 4 questions génériques  
**Cible** : 8-10 questions, dont 50% nouvelles et ciblées

**Structure d'une question FAQ** :

```json
{
  "question": "[Question utilisateur, pas marketing. Commence par 'Comment', 'Quel', 'Pourquoi']",
  "answerText": "[Résumé 1 ligne pour le snippet Google]",
  "answer": "[Contenu HTML/JSX, 100-200 mots, incluant 2-3 mots-clés cibles]",
  "links": "[2-3 liens contextuels internes]"
}
```

**Exemple de BONNE question** :
```
Q: "Ségur MS2 PDE : quels sont les changements réglementaires pour les logiciels ?"
A: "Ségur MS2 impose une interopérabilité stricte, une traçabilité des données, une confidentialité renforcée et des exports formatés pour les ASE. Un logiciel non-adapté crée du travail manuel en doublons. Silao intègre nativement ces obligations, ce qui épargne à vos équipes des migrations ultérieures."
Links: [/engagements, /conformite-sons]
```

**Exemple de MAUVAISE question** :
```
❌ Q: "Pourquoi Silao est meilleur que ses concurrents ?" (marketing)
❌ Q: "Comment accéder au support technique ?" (pas pertinent pour SEO PDE)
```

**Questions à générer par secteur** :

#### Pour PDE (Protection Enfance) :
1. ✅ Quel logiciel choisir pour une MECS, une AEMO ou l'accueil familial ? (existante)
2. ✅ Un DUI protection enfance peut-il gérer les fratries, les présences et l'argent de poche ? (existante)
3. ✅ Comment renforcer la confidentialité dans un logiciel de protection enfance ? (existante)
4. ✅ Pourquoi un agenda et un cahier de liaison restent-ils centraux dans un DUI protection enfance ? (existante)
5. ❌ **NEW** Ségur MS2 PDE : quels changements pour les logiciels de protection enfance ?
6. ❌ **NEW** Quelle différence entre MECS, AEMO, accueil familial et milieu ouvert dans Silao ?
7. ❌ **NEW** Comment un logiciel DUI aide à la coordination avec les parents et intervenants externes ?
8. ❌ **NEW** Interopérabilité : comment Silao partage les données avec l'ASE et les tutelles ?
9. ❌ **NEW** Coût moyen d'un logiciel DUI PDE vs alternatives (logiciels génériques) ?
10. ❌ **NEW** Combien de temps pour migrer vers Silao depuis un autre DUI ?

#### Pour AHI (Handicap/Insertion) :
1. ❌ **NEW** Qu'est-ce qu'un logiciel AHI/insertion et comment diffère-t-il d'un DUI classique ?
2. ❌ **NEW** Ségur numérique AHI 2025 : qu'est-ce qui change pour les logiciels ?
3. ❌ **NEW** Comment gérer les parcours d'insertion (bilan, plan, suivi) dans un même outil ?
4. ❌ **NEW** Logiciel ESSMS : pourquoi choisir une solution orientée médico-sociale ?
5. ❌ **NEW** Comment Silao aide à la traçabilité des heures, des interventions et des droits sociaux ?
6. ❌ **NEW** Interopérabilité : qui peut accéder à quoi (usager, famille, travailleur social) ?
7. ❌ **NEW** Multi-structures : gérer une ESAT et un CHRS depuis le même logiciel, comment ?
8. ❌ **NEW** Comment garantir la confidentialité entre équipes d'insertion et accompagnement ?

---

## Mots-clés à intégrer NATURELLEMENT

**Par secteur** (à sprinkler dans le texte, pas forcer) :

### PDE (Protection Enfance)
- MECS, AEMO, FAM, accueil familial, milieu ouvert, ASE, fratries, argent poche, présences, habillement, cahier de liaison, agenda, confidentialité, droits d'accès, Ségur MS2 PDE

### Handicap
- IME, ESAT, FAM, CAMSP, CMPP, FAM, traçabilité, accompagnement, droits sociaux, interopérabilité, Ségur numérique

### AHI (Insertion/Adaptation)
- ESSMS, EPCI, Ségur AHI, suivi insertion, parcours professionnel, droits sociaux, traçabilité, CHRS, ULIS, AIVS

### CAMSP-CMPP
- Ségur, interopérabilité, suivi enfant, parents, confidentialité, dossier de suivi, observations

---

## Exemple Complet : Comment Enrichir SecteurPDEPage.tsx

**Fichier source** : `src/pages/SecteurPDEPage.tsx`

**Modificación** :

```typescript
// AVANT
const SecteurPDEPage = () => (
  <SecteurPageLayout
    name="Protection de l'enfance — PDE"
    tagline="Le secteur historique de Silao, pensé pour l'hébergement comme pour le milieu ouvert"
    description="La protection de l'enfance est le tout premier secteur pour lequel Silao a dédié ses fonctionnalités..."
    // ... reste inchangé
  />
);

// APRÈS
const SecteurPDEPage = () => (
  <SecteurPageLayout
    name="Protection de l'enfance — PDE"
    tagline="Le secteur historique de Silao, pensé pour l'hébergement comme pour le milieu ouvert"
    description="La protection de l'enfance est le tout premier secteur pour lequel Silao a dédié ses fonctionnalités. L'outil couvre les besoins de l'hébergement, du milieu ouvert, de l'accueil familial et des accompagnements spécifiques, avec une adaptation continue aux réalités terrain.

    [+ 400 mots contexte/couverture/conformité]"
    
    benefits={[
      "L'agenda et le cahier de liaison constituent deux des piliers de l'activité.",
      "Les fonctionnalités ont été conçues pour répondre aux besoins de l'hébergement comme du milieu ouvert.",
      "Les liens entre membres d'une fratrie permettent de mutualiser les informations utiles entre plusieurs fiches usagers.",
      "Le suivi des présences intègre un circuit de validation sur deux niveaux et des exports pour la facturation ou les statistiques.",
      "Silao est aujourd'hui référencé DSR Ségur MS2 PDE.",
      // NEW
      "Ségur MS2 : droits d'accès fins et traçabilité des opérations intégrés par défaut.",
      "Exports statistiques et facturation prêts pour l'ASE et les tutelles de gestion.",
      "Intégration des visio, appels, emails dans le cahier de liaison sans isolation.",
    ]}
    
    faqSectorId="pde"
    faqTitle="la protection de l'enfance"
    
    // ... reste inchangé
  />
);
```

---

## Règles de Vérification Qualité

Avant de valider un enrichissement, vérifier :

- ✅ **Longueur** : description 400-500 mots, FAQ 100-200 mots/réponse
- ✅ **Mots-clés** : au minimum 5-7 mots-clés cibles intégrés naturellement (pas répétés > 2x)
- ✅ **Ton** : cohérent avec le style Silao (professionnel, cas d'usage, reconnaissance des nuances)
- ✅ **Liens internes** : 2-3 par FAQ (vers /offres, /engagements, /formations, /accompagnement, /conformite-sons)
- ✅ **Pas de marketing** : pas de "révolutionne", "leader", "meilleur", "unique", etc.
- ✅ **Inclusivité** : reconnaît la pluralité des structures (pas une approche one-size-fits-all)
- ✅ **Accessibilité** : explique les acronymes à la première occurrence (ex: "MECS (Maison d'Enfants à Caractère Social)")

---

## Calendrier Proposé

| Phase | Durée | Pages | Livrables |
|-------|-------|-------|-----------|
| **Phase 1** | Semaine 1 | PDE + AHI | Descriptions enrichies + Metas + 8 FAQ/page |
| **Phase 2** | Semaine 2 | Handicap + CAMSP | Idem |
| **Phase 3** | Semaine 3 | PDS + Offres | Idem |
| **Phase 4** | Semaine 4-8 | Homepage + Ressources | Sections DUI génériques + FAQ |

---

## Template de Prompt à Utiliser

Pour chaque page secteur, utiliser ce prompt :

```
Context:
- Site médico-social français (Silao)
- Secteur cible: [PDE/Handicap/AHI/CAMSP]
- Structures couvertes: [énumérer]
- Current word count: ~300 words
- Target word count: 1,500-2,000 words (description + FAQ)

Task:
1. Enrichir la description existante (ajouter 400-500 mots)
2. Créer/améliorer 8-10 FAQ pertinentes
3. Nouvelles meta title et description
4. Intégrer naturellement ces mots-clés: [liste]

Style:
- Professional but accessible
- Oriented toward real-world use cases
- Acknowledge sector complexity
- Avoid marketing language
- French language, formal tone

Target queries:
- "logiciel dui [secteur]"
- "logiciel [structure type] ségur"
- "[acronyme] logiciel"
- etc.

Existing content to keep:
- Tagline (unchanged)
- Structure cards (unchanged)
- Module badges (unchanged)

Output format:
- Enhanced description text
- 8-10 FAQ items (question, answerText, answer HTML, links)
- New meta title
- New meta description
```

---

## Checklist Finale

Avant de déployer, vérifier :

- [ ] Description >= 400 mots
- [ ] FAQ >= 8 questions
- [ ] Mots-clés Google cibles présents dans description + FAQ
- [ ] Ton cohérent avec style Silao
- [ ] Pas de marketing excessif
- [ ] Liens internes pertinents
- [ ] Accronymes expliqués
- [ ] Cas d'usage concrets
- [ ] Reconnaissance des nuances (plusieurs types de structures)
- [ ] Meta title/desc optimisés pour CTR + SEO

---

**Document créé** : 27 mai 2026  
**Prochaine étape** : Appliquer ce prompt à SecteurPDEPage.tsx et SecteurAHIPage.tsx en priorité
