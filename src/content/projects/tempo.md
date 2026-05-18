---
title: "Tempo"
description: "Application mobile et web pour suivre tous vos abonnements et dépenses récurrentes en un coup d'œil."
year: 2026
tags: ["Vue 3", "Capacitor", "iOS", "Android", "PWA", "Cloudflare Workers", "D1"]
links:
  website: "https://tempo.polletantoine.com"
  github: "https://github.com/polletantoine/track-recurring-spending"
featured: true
draft: false
---

## L'idée

Les abonnements s'empilent et il devient difficile de garder une vue claire de ce qu'on paie chaque mois. **Tempo** centralise tous vos abonnements (streaming, SaaS, assurances, salles de sport…) et affiche en temps réel votre coût mensuel et annuel, les prochaines échéances et la répartition par catégorie.

## Fonctionnalités

- **Suivi multi-fréquence** — mensuel, annuel, hebdomadaire, personnalisé
- **Prochaines échéances** — bannière des abonnements bientôt dus
- **Statistiques** — coût par catégorie, top des abonnements les plus coûteux, évolution
- **Multi-plateforme** — iOS, Android et web (PWA installable)
- **Multilingue** — français et anglais
- **Mode sombre** — natif
- **Hors-ligne** — toutes les données sont accessibles sans connexion

## Stack technique

| Couche | Outil |
|--------|-------|
| Frontend | Vue 3, Vite, Vitesse, Pinia, vite-ssg |
| UI | Tailwind CSS, daisyUI, Iconify |
| Mobile | Capacitor (iOS + Android) |
| Backend | Cloudflare Workers + D1 (SQLite) |
| Notifications | Firebase Cloud Messaging |
| i18n | vue-i18n (FR / EN) |
| Tests | Vitest, Cypress |

## En cours

- Publication sur l'App Store (en review)
- Publication sur le Play Store
