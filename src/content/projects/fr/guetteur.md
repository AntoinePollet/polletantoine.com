---
title: "Guetteur"
kanji: "報"
kanjiMeaning: "information"
description: "Agrégateur d'actualité (presse, YouTube, Reddit) qui révèle l'orientation politique de chaque article grâce à l'IA, pour voir les angles morts de l'info."
cover: "../../../assets/projects/guetteur/cover.png"
gallery:
  - "../../../assets/projects/guetteur/medias.png"
  - "../../../assets/projects/guetteur/couverture.png"
  - "../../../assets/projects/guetteur/fil.png"
year: 2026
tags: ["Vue 3", "Cloudflare Workers", "D1", "Hono", "Claude IA", "Stripe", "TypeScript"]
links:
  website: "https://guetteur.app"
  github: "https://github.com/AntoinePollet/feedwise"
featured: true
draft: false
---

## L'idée

L'information se consomme aujourd'hui en flux continu, sans toujours percevoir l'orientation des sources. **Guetteur** (anciennement *Feedwise*) agrège presse, chaînes YouTube et subreddits, et va plus loin qu'un simple lecteur : pour chaque article, une analyse IA estime le **biais politique** et le restitue sous forme de badge, afin d'aider le lecteur à diversifier ses sources et à garder du recul.

## Fonctionnalités

- **Agrégation multi-sources** — RSS, YouTube et Reddit, classés par catégorie et par pays
- **Découverte de sources** — recherche et ajout/retrait de flux par thématique
- **Analyse de biais par IA** — score d'orientation politique calculé par Claude (API Batch)
- **Baromètre des médias** — chaque média positionné de gauche à droite d'après l'analyse de ses articles
- **Couverture comparée** — un même sujet, vu par des médias de tous bords
- **Ingestion automatique** — cron toutes les 15 min : récupération des articles puis pipeline IA (clustering + analyse de biais)
- **Authentification** — Google et email/mot de passe via Better Auth
- **Abonnement Stripe** — formule à 4,99 €/mois débloquant les badges de biais
- **Monitoring** — Cloudflare Workers Logs natif + Sentry (front & worker)

## Stack technique

| Couche | Outil |
|--------|-------|
| Frontend | Vue 3, Vite, Pinia, vite-ssg |
| UI | Tailwind CSS v4, daisyUI v5, Lucide |
| Backend | Cloudflare Workers, Hono, D1 (SQLite), Drizzle |
| IA | Claude Sonnet (Batch API) — clustering & analyse de biais |
| Auth | Better Auth (Google + email) |
| Paiement | Stripe (abonnement) |
| Email | Resend |
| Monorepo | pnpm workspace |
| Langage | TypeScript |
| Hébergement | Cloudflare |
