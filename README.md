# WorkSet ![License](https://img.shields.io/badge/license-GPLv3-blue.svg)
## 🚀 Gestionnaire d'Espaces de Travail  

**WorkSet** est une application de bureau intuitive qui vous permet de démarrer votre espace de travail en quelques secondes. Fini les routines d’ouverture fastidieuses : avec WorkSet, vous regroupez tous vos outils, dossiers, sites et éditeurs préférés en un seul endroit.
Créez des tâches personnalisées, organisez-les en espaces de travail, et concentrez-vous sur l’essentiel : **votre productivité**.

**Statut** : _En cours de développement_

---

## 🛠️ Technologies utilisées

- **Electron** – Pour créer une application de bureau multiplateforme avec des technologies web.
- **JavaScript** – Langage principal pour la logique de l’application.
- **HTML / CSS** – Pour la structure et le style des interfaces utilisateur.

---

## 📌 Fonctionnalités  

- **Création de tâches personnalisées** - Permet de créer des tâches adaptées à vos besoins (Terminal, Pages Web, VS Code, etc.).
- **Modification et suppression des tâches** - Possibilité d’éditer facilement les paramètres d’une tâche existante ou de la supprimer si elle n’est plus utile.
- **Lancement rapide des tâches** - Un simple clic permet de lancer instantanément n'importe quelle tâche configurée, ouvrant directement les outils ou emplacements définis.
- **Création de workspaces** : Regroupez plusieurs tâches sous un même espace pour lancer toutes les tâches d’un coup.
- **Sauvegarde automatique** - Toutes les tâches sont enregistrées localement dans un fichier JSON, assurant une persistance même après fermeture de l’application.
- **Interface intuitive et réactive** - Une interface simple, dynamique, pensée pour l’efficacité : chaque page (accueil, tâches, workspaces) est intégrée dans une architecture monopage.


---

## 📸 Aperçu

### 🎨 Maquette de l'application
![Maquette](./docs/mockup.png)

### 💻 Application en fonctionnement
![App Screenshot](./docs/app.png)

---

## 🔧 Exemple de Tâche Personnalisée

### 🖥️ Terminal
```json
{
  "id": 1714588395471,
  "type": "Terminal",
  "nom": "Terminal de mon-projet",
  "projectPath": "C:/Users/Pseudo/Projects/mon-projet"
}
```
Ouvre un terminal dans le dossier du projet, prêt à exécuter des commandes.

### 🌐 Page Web
```json
{
  "id": 1714588438123,
  "type": "WebPage",
  "nom": "Youtube",
  "url": "https://www.youtube.com/"
}
```
Lance votre navigateur par défaut et ouvre la page spécifiée.

### 🧑‍💻 VS Code
```json
{
  "id": 1714588470045,
  "type": "VsCode",
  "nom": "VsCode de mon-projet",
  "projectPath": "C:/Users/Pseudo/Projects/mon-projet"
}
```
Ouvre automatiquement Visual Studio Code dans le dossier du projet.

---

## 🎯 Objectifs pour la version 1  
- Créer, modifier et supprimer des tâches (tasks)
- Créer, modifier et supprimer des espaces de travail (workspaces)
- Lancer des tâches individuellement
- Lancer un workspace (exécuter toutes ses tâches d’un coup)
- Interface claire et intuitive
- Persistance des données via un fichier JSON local
- Prise en charge des types de tâches principaux : Terminal, Page Web, VS Code, Explorateur de fichiers
- Compatible Windows (avec gestion correcte des chemins et commandes)

---

## 🚀 Objectifs pour la suite
- **Scanner les fenêtres ouvertes** pour générer un espace de travail (workspaces) automatiquement
- **Ouvrir n'importe quelle application** via un espace de travail (pas limité aux tâches définies actuellement)
- **Compatibilité Linux** : s'assurer que l'application fonctionne également sur Linux (gestion des commandes spécifiques, chemins de fichiers, etc.)
- **Ajout de nouvelles tâches par défaut** dans l'application pour étendre les possibilités d'utilisation sans configuration manuelle
- **Page de paramètres** : permettre aux utilisateurs de personnaliser des paramètres tels que :
  - Navigateur par défaut
  - Terminal utilisé (PowerShell, bash, etc.)
  - Autres préférences personnalisées
- **Exportation et importation de workspaces et tâches** : permettre aux utilisateurs d'exporter leurs workspaces et tâches au format JSON ou autre, et de les importer facilement sur une autre machine
- **Gestion des processus** : ajouter la possibilité de gérer et de fermer les processus liés à un espace de travail, permettant de stopper toutes les applications lancées dans un workspace en un clic

---

## 📬 Contact  

Créé par **Rafael.D**  
📌 GitHub : [RafaelD](https://github.com/RafaelD135)
