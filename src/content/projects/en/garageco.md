---
title: "Garageco"
kanji: "車"
kanjiMeaning: "vehicle"
description: "The smart service logbook for independent garages: AI-extracted invoices, automatically computed service due dates and customer follow-ups."
cover: "../../../assets/projects/garageco/cover.png"
gallery:
  - "../../../assets/projects/garageco/statistiques.png"
  - "../../../assets/projects/garageco/planning.png"
year: 2026
tags: ["Vue 3", "Cloudflare Workers", "D1", "R2", "Queues", "Hono", "Claude AI", "Stripe", "TypeScript"]
links:
  website: "https://garageco.fr"
  github: "https://github.com/AntoinePollet/garageco"
featured: true
draft: false
---

## The idea

An independent garage loses customers without noticing. A customer's oil change is due in March; nobody knows, nobody calls, the customer goes elsewhere — or nowhere. Yet the information exists: it's on the invoices, in a binder.

**Garageco** (born under the codename *Pitstop*) turns that binder into a workload plan: the garage imports its customers' invoices, AI extracts the operations, the app computes the next service due dates on its own, helps follow up with the right customers and measures what it brings in.

## Features

- **Customer fleet** — vehicles (cars, motorbikes, scooters), bulk CSV import, AI registration-document scan
- **AI invoice extraction** — direct upload or Google Drive import, automatic matching by licence plate
- **Manufacturer schedules** — service intervals generated once per model and cached across all garages
- **Reminders** — due dates computed by mileage and by calendar, recalculated every night
- **Follow-ups** — ready-to-send messages, emails sent by the app, logged calls and texts
- **Analytics** — revenue, average ticket, retention, dormant customers, follow-up conversion rate
- **Team** — garages as organisations, owner / admin / member roles
- **Billing** — 14-day trial, 3 Stripe tiers, AI credit packs and extra seats
- **SEO & sharing** — server-rendered maintenance pages per model, shareable logbook links, generated Open Graph images
- **PWA** — installable, fleet available offline

## Architecture

A single Cloudflare Worker serves both the API **and** the SPA: same origin, no CORS, uncompromised session cookies. Heavy work (invoice extraction, reminder recalculation) runs through Queues, and deployment is continuous: lint, typecheck, unit tests and integration tests in workerd gate every release.

## Tech stack

| Layer | Tool |
|-------|------|
| Frontend | Vue 3, Vite, Pinia, vue-i18n, Chart.js |
| UI | Tailwind CSS, daisyUI |
| API | Cloudflare Workers, Hono, Zod |
| Data | Cloudflare D1 (SQLite), Drizzle ORM |
| Files | Cloudflare R2 |
| Async | Cloudflare Queues |
| AI | Claude (Haiku first, Sonnet as escalation) |
| Auth | Better Auth (organisations) |
| Payments | Stripe (subscriptions, packs, seats) |
| Email | Resend |
| Observability | Sentry, PostHog |
| Monorepo | pnpm workspace |
| Hosting | Cloudflare |
