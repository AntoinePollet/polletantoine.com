---
title: "Topspin"
kanji: "卓"
kanjiMeaning: "table"
description: "A dashboard for table tennis players: progress curve, ranking history, match statistics and tournament calendar."
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

## The idea

In table tennis, the official ranking is a raw number, frozen and without context: there's no way to see at a glance whether you're really improving. **Topspin** turns a player's season into a clear, living dashboard — progress curve, ranking history, match statistics and tournament calendar. The project, independent and built by enthusiasts, is currently in free beta with a waiting list.

## Features

- **Progress curve** — ranking evolution visualised over the whole season
- **Ranking history** — official tracking, finally readable over time
- **Match statistics** — win rate, best performances, season summaries
- **Tournament calendar** — all tournaments in one place
- **Waiting list** — sign-up for the free beta (stored on Cloudflare KV)

## Vision (roadmap)

- **Racket configurator** — guided questionnaire recommending blade + rubber combinations suited to your game
- **Drill library** — targeted training based on identified weak spots
- **Friend & club challenges** — tied to real ranking and progress data

## Tech stack

| Layer | Tool |
|-------|------|
| Frontend | Vue 3, Vite, vite-ssg, Pinia |
| UI | Tailwind CSS, daisyUI, @vueuse/motion, Lucide |
| i18n | vue-i18n |
| Backend | Cloudflare Workers (Static Assets) + KV (waitlist) |
| Email | Resend |
| PWA | vite-plugin-pwa |
| Language | TypeScript |
| Hosting | Cloudflare |
