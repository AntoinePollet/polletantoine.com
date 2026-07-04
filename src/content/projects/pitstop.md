---
title: "Pitstop"
description: "Le carnet d'entretien intelligent de vos véhicules : factures extraites automatiquement par IA, rappels et préconisations constructeur."
year: 2026
tags: ["Vue 3", "Cloudflare Workers", "D1", "R2", "Hono", "Claude IA", "Stripe", "TypeScript"]
links:
  website: "https://pitstop.polletantoine.com"
  github: "https://github.com/AntoinePollet/pitstop"
featured: true
draft: false
---

## L'idée

L'entretien d'un véhicule laisse une traînée de factures éparpillées : vidange, pneus, contrôle technique, révisions… Impossible de savoir ce qui a été fait, quand, et ce qui arrive. **Pitstop** centralise tout dans un carnet d'entretien numérique : on photographie une facture, l'IA en extrait automatiquement les prestations, les pièces et les montants, puis l'app génère des rappels et des préconisations d'entretien basées sur les recommandations constructeur.

## Fonctionnalités

- **Extraction IA des factures** — photo ou PDF analysé par Claude, les interventions et coûts sont saisis automatiquement
- **Carnet multi-véhicules** — historique complet d'entretien par véhicule, centralisé et consultable
- **Rappels intelligents** — alertes sur les prochaines échéances (kilométrage / date)
- **Préconisations constructeur** — plan d'entretien recommandé selon le modèle
- **Authentification** — email/mot de passe via Better Auth
- **Abonnement Stripe** — formule premium débloquant les fonctionnalités avancées
- **Multilingue** — interface disponible en de nombreuses langues
- **Monitoring** — Sentry (front & worker)

## Stack technique

| Couche | Outil |
|--------|-------|
| Frontend | Vue 3, Vite, Pinia, vue-i18n |
| UI | Tailwind CSS, daisyUI, Lucide |
| Backend | Cloudflare Workers, Hono, D1 (SQLite), Drizzle |
| Stockage | R2 (documents / factures) |
| IA | Claude (Anthropic SDK) — extraction des factures |
| Auth | Better Auth |
| Paiement | Stripe (abonnement) |
| Partage | workers-og (images Open Graph dynamiques) |
| Monitoring | Sentry |
| Monorepo | pnpm workspace |
| Langage | TypeScript |
| Hébergement | Cloudflare |
