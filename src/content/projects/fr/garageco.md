---
title: "Garageco"
kanji: "車"
kanjiMeaning: "véhicule"
description: "Le carnet d'entretien intelligent des garages indépendants : factures extraites par IA, échéances calculées automatiquement et relances clients."
cover: "../../../assets/projects/garageco/cover.png"
gallery:
  - "../../../assets/projects/garageco/statistiques.png"
  - "../../../assets/projects/garageco/planning.png"
year: 2026
tags: ["Vue 3", "Cloudflare Workers", "D1", "R2", "Queues", "Hono", "Claude IA", "Stripe", "TypeScript"]
links:
  website: "https://garageco.fr"
  github: "https://github.com/AntoinePollet/garageco"
featured: true
draft: false
---

## L'idée

Un garage indépendant perd des clients sans le voir. La vidange d'un client est due en mars ; personne ne le sait, personne n'appelle, le client va ailleurs — ou n'y va pas. L'information existe pourtant : elle est sur les factures, dans un classeur.

**Garageco** (né sous le nom de code *Pitstop*) transforme ce classeur en plan de charge : le garage importe les factures de ses clients, l'IA en extrait les opérations, l'application calcule seule les prochaines échéances d'entretien, aide à relancer les clients concernés et mesure ce que ça rapporte.

## Fonctionnalités

- **Parc client** — véhicules (voiture, moto, scooter), import CSV en masse, scan de carte grise par IA
- **Extraction IA des factures** — upload direct ou import Google Drive, rattachement automatique par plaque
- **Préconisations constructeur** — intervalles générés une fois par modèle et mis en cache partagé entre tous les garages
- **Rappels** — échéances calculées au kilométrage et au calendrier, recalculées chaque nuit
- **Relances** — message prêt à l'envoi, emails expédiés par l'application, appels et SMS journalisés
- **Statistiques** — CA, panier moyen, rétention, clients dormants, taux de transformation des relances
- **Équipe** — garages en organisations, rôles propriétaire / administrateur / collaborateur
- **Facturation** — essai de 14 jours, 3 paliers Stripe, packs de crédits IA et sièges à la carte
- **SEO & partage** — pages d'entretien par modèle rendues côté serveur, partage du carnet par lien, images Open Graph générées
- **PWA** — installable, consultation du parc hors-ligne

## Architecture

Un seul Worker Cloudflare sert l'API **et** la SPA : même origine, pas de CORS, cookies de session sans compromis. Les traitements lourds (extraction de factures, recalcul des rappels) passent par des Queues, et le déploiement est continu : lint, typecheck, tests unitaires et tests d'intégration dans workerd conditionnent chaque mise en production.

## Stack technique

| Couche | Outil |
|--------|-------|
| Frontend | Vue 3, Vite, Pinia, vue-i18n, Chart.js |
| UI | Tailwind CSS, daisyUI |
| API | Cloudflare Workers, Hono, Zod |
| Données | Cloudflare D1 (SQLite), Drizzle ORM |
| Fichiers | Cloudflare R2 |
| Asynchrone | Cloudflare Queues |
| IA | Claude (Haiku en primaire, Sonnet en escalade) |
| Auth | Better Auth (organisations) |
| Paiement | Stripe (abonnements, packs, sièges) |
| Email | Resend |
| Observabilité | Sentry, PostHog |
| Monorepo | pnpm workspace |
| Hébergement | Cloudflare |
