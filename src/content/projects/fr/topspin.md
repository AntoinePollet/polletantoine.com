---
title: "Topspin"
kanji: "卓"
kanjiMeaning: "table"
description: "Tableau de bord pour pongistes : courbe de progression, historique de classement, statistiques de matchs et calendrier des tournois."
cover: "../../../assets/projects/topspin/cover.png"
gallery:
  - "../../../assets/projects/topspin/tournois.png"
  - "../../../assets/projects/topspin/vision.png"
year: 2026
tags: ["Vue 3", "Vite SSG", "Tailwind CSS", "daisyUI", "Cloudflare Workers", "KV", "TypeScript"]
links:
  website: "https://topspin.polletantoine.com"
  github: "https://github.com/AntoinePollet/pong-ping"
featured: false
draft: false
---

## L'idée

Au tennis de table, le classement officiel est un chiffre brut, figé et sans contexte : impossible de voir d'un coup d'œil si l'on progresse vraiment. **Topspin** transforme la vie de pongiste en un tableau de bord clair et vivant — courbe de progression, historique de classement, statistiques de matchs et calendrier des tournois. Le projet, indépendant et fait par des passionnés, est actuellement en bêta gratuite avec une liste d'attente.

## Fonctionnalités

- **Courbe de progression** — l'évolution du classement visualisée sur toute la saison
- **Historique de classement** — le suivi officiel enfin lisible dans le temps
- **Statistiques de matchs** — taux de victoire, meilleures performances, bilans
- **Calendrier des tournois** — les tournois regroupés au même endroit
- **Liste d'attente** — inscription à la bêta gratuite (stockée sur Cloudflare KV)

## Vision (feuille de route)

- **Configurateur de raquette** — questionnaire guidé recommandant des combinaisons bois + revêtements adaptées au jeu
- **Bibliothèque d'exercices** — entraînements ciblés selon les points faibles identifiés
- **Défis entre amis & club** — couplés aux vraies données de classement et de progression

## Stack technique

| Couche | Outil |
|--------|-------|
| Frontend | Vue 3, Vite, vite-ssg, Pinia |
| UI | Tailwind CSS, daisyUI, @vueuse/motion, Lucide |
| i18n | vue-i18n |
| Backend | Cloudflare Workers (Static Assets) + KV (waitlist) |
| Email | Resend |
| PWA | vite-plugin-pwa |
| Langage | TypeScript |
| Hébergement | Cloudflare |
