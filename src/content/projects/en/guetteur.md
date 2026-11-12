---
title: "Guetteur"
kanji: "報"
kanjiMeaning: "news"
description: "A news aggregator (press, YouTube, Reddit) that uses AI to reveal the political lean of every article, so you can see the news' blind spots."
cover: "../../../assets/projects/guetteur/cover.png"
gallery:
  - "../../../assets/projects/guetteur/medias.png"
  - "../../../assets/projects/guetteur/couverture.png"
  - "../../../assets/projects/guetteur/fil.png"
year: 2026
tags: ["Vue 3", "Cloudflare Workers", "D1", "Hono", "Claude AI", "Stripe", "TypeScript"]
links:
  website: "https://guetteur.app"
  github: "https://github.com/AntoinePollet/feedwise"
featured: true
draft: false
---

## The idea

News is now consumed as a continuous stream, without always seeing where sources lean. **Guetteur** (formerly *Feedwise*) aggregates press, YouTube channels and subreddits, and goes beyond a plain reader: for every article, an AI analysis estimates its **political bias** and shows it as a badge, helping readers diversify their sources and keep perspective.

## Features

- **Multi-source aggregation** — RSS, YouTube and Reddit, organised by category and country
- **Source discovery** — search, add and remove feeds by topic
- **AI bias analysis** — political leaning score computed by Claude (Batch API)
- **Media barometer** — each outlet placed from left to right based on the analysis of its articles
- **Compared coverage** — one story, as told by outlets across the spectrum
- **Automatic ingestion** — cron every 15 minutes: fetch articles, then AI pipeline (clustering + bias analysis)
- **Authentication** — Google and email/password via Better Auth
- **Stripe subscription** — €4.99/month plan unlocking bias badges
- **Monitoring** — native Cloudflare Workers Logs + Sentry (front & worker)

## Tech stack

| Layer | Tool |
|-------|------|
| Frontend | Vue 3, Vite, Pinia, vite-ssg |
| UI | Tailwind CSS v4, daisyUI v5, Lucide |
| Backend | Cloudflare Workers, Hono, D1 (SQLite), Drizzle |
| AI | Claude Sonnet (Batch API) — clustering & bias analysis |
| Auth | Better Auth (Google + email) |
| Payments | Stripe (subscription) |
| Email | Resend |
| Monorepo | pnpm workspace |
| Language | TypeScript |
| Hosting | Cloudflare |
