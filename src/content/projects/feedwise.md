---
title: "Feedwise"
description: "Lecteur de flux RSS qui analyse le biais politique de chaque article grâce à l'IA, pour s'informer en gardant du recul."
year: 2026
tags: ["Vue 3", "Cloudflare Workers", "D1", "Hono", "Claude IA", "Stripe", "TypeScript"]
links:
  website: "https://app.feedwise.polletantoine.com"
  github: "https://github.com/AntoinePollet/feedwise"
featured: true
draft: false
---

## L'idée

L'information se consomme aujourd'hui en flux continu, sans toujours percevoir l'orientation des sources. **Feedwise** est un agrégateur de flux RSS qui va plus loin qu'un simple lecteur : pour chaque article, une analyse IA estime le **biais politique** et le restitue sous forme de badge, afin d'aider le lecteur à diversifier ses sources et à garder du recul.

## Fonctionnalités

- **Agrégation de flux RSS** — abonnement à un catalogue de sources classées par catégorie
- **Découverte de sources** — recherche et ajout/retrait de flux par thématique
- **Analyse de biais par IA** — score d'orientation politique calculé par Claude (API Batch)
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
