

## Plan : Mettre en avant les 4 filières et supprimer l'infographie Grappe

### Contexte

Les 4 filières du médico-social couvertes par Silao sont : **Handicap (PH)**, **Grand Âge (PA)**, **Insertion / AHI**, et **Personnes en Difficultés Spécifiques (PDS)**. Actuellement, la section "PartnersSection" liste des sous-secteurs de manière plate (badges simples) et l'infographie Grappe occupe une section dédiée.

### Modifications prévues

#### 1. Supprimer l'InfographieGrappe de la page d'accueil
- **Fichier** : `src/pages/Index.tsx`
- Retirer l'import et le composant `<InfographieGrappe />` (ligne 26)

#### 2. Créer une nouvelle section "FilieresSection"
- **Nouveau fichier** : `src/components/FilieresSection.tsx`
- 4 cartes visuelles, une par filière, chacune contenant :
  - Une icône dédiée (lucide-react)
  - Le nom de la filière (ex: "Handicap — PH")
  - Une courte description des types de structures couvertes (IME, ITEP, MAS, FAM, etc.)
  - Des noms de clients références sur cette filière (issus de la liste actuelle : Croix-Rouge, ADSEA 80, etc.)
  - Un badge "Clients actifs" pour montrer la présence terrain
- Animations framer-motion (apparition progressive des cartes)
- Titre de section : "Silao couvre les 4 filières du médico-social"
- Sous-titre insistant sur la couverture complète et les clients actifs

#### 3. Intégrer la nouvelle section dans la page d'accueil
- **Fichier** : `src/pages/Index.tsx`
- Placer `<FilieresSection />` à la place de l'ancienne `<InfographieGrappe />`, avant l'InfographieParcours

#### 4. Simplifier PartnersSection
- **Fichier** : `src/components/PartnersSection.tsx`
- Retirer la liste des secteurs (déplacée dans FilieresSection)
- Conserver uniquement la partie "Ils nous font confiance" avec les logos/noms de partenaires

### Structure des 4 filières

| Filière | Icône | Structures couvertes | Clients exemples |
|---------|-------|---------------------|------------------|
| Handicap (PH) | `Accessibility` | IME, ITEP, MAS, FAM, ESAT, SESSAD | Croix-Rouge française, ADSEA 80 |
| Grand Âge (PA) | `Heart` | EHPAD, SSIAD, Accueil de jour | L'Oustal |
| Insertion / AHI | `Home` | CHRS, SIAO, CPH, CADA | AJP |
| PDS | `ShieldCheck` | CSAPA, CAARUD, ACT | Fondation Grancher, MECS La Cordée |

### Rendu visuel attendu

Grille 2x2 sur desktop, empilée sur mobile. Chaque carte avec bordure "sketch-border", icône colorée, et un petit indicateur "Clients actifs" pour renforcer la crédibilité terrain.

