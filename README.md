# 🖨️ Print-it

> Site vitrine d'imprimerie avec carrousel interactif développé en JavaScript vanilla. Premier projet JavaScript de la formation Intégrateur Web chez OpenClassrooms.

## 🚀 Démo en ligne

👉 [Voir le site](https://leaspadea.github.io/print-it/)

## 🎯 Contexte du projet

Print-it est une imprimerie qui souhaite dynamiser son site vitrine en y intégrant un carrousel d'images interactif sur sa bannière d'accueil.

**Mission :** transformer un site statique en site interactif via la **manipulation du DOM** en JavaScript vanilla, en implémentant un carrousel avec navigation par flèches, bullets de pagination synchronisés et défilement infini bidirectionnel.

## 🛠️ Technologies utilisées

- **HTML5** — structure sémantique
- **CSS3** — design existant adapté
- **JavaScript (ES6+)** — vanilla, sans framework
- **Git / GitHub** — versioning et déploiement

## ✨ Fonctionnalités principales

- 🎠 **Carrousel d'images interactif** avec navigation par flèches gauche/droite
- 🔘 **Bullets de pagination dynamiques** générés en JS et synchronisés avec l'image active
- ♾️ **Défilement infini bidirectionnel** (de la dernière image à la première et inversement)
- 📝 Mise à jour du **texte associé** à chaque slide en synchronisation avec l'image
- ⚡ **Chargement optimisé** avec attribut `defer` sur le script

## 💡 Logique technique

Le carrousel repose sur :

- Un **tableau de données** (`slides`) contenant les images et leurs textes associés
- Une **génération dynamique** des bullets avec création d'éléments DOM
- Une **gestion modulo** pour le défilement infini :
```javascript
  currentIndex = (currentIndex + 1) % slides.length        // suivant
  currentIndex = (currentIndex - 1 + slides.length) % slides.length  // précédent
```
- Des **event listeners** sur les flèches pour déclencher la navigation

## 📐 Structure du projet

```
print-it/
├── index.html
├── assets/
│   ├── style.css
│   ├── script.js
│   └── images/
└── README.md
```
## 🎓 Compétences travaillées

- Manipulation du **DOM** en JavaScript vanilla
- Gestion des **événements utilisateur** (event listeners)
- Implémentation d'une **logique de navigation circulaire** (modulo)
- **Génération dynamique d'éléments HTML** depuis un tableau de données
- Séparation **données / logique** dans le code
- Documentation du code via **JSDoc**

## 👤 Auteur

**Léa Spadea** — Étudiante Intégratrice Web @ OpenClassrooms
🔗 [LinkedIn](https://www.linkedin.com/in/lea-spadea/) · 💻 [GitHub](https://github.com/leaspadea)

---

*Projet réalisé dans le cadre de la formation Intégrateur Web (RNCP niveau 5) chez OpenClassrooms.*
