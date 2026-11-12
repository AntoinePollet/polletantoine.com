---
title: "Chape Expert"
kanji: "床"
kanjiMeaning: "floor"
description: "Showcase website and AI quote generator for a concrete screed company in the Paris region."
cover: "../../../assets/projects/chape-expert/cover.png"
gallery:
  - "../../../assets/projects/chape-expert/devis.png"
year: 2025
tags: ["Vue 3", "Vite SSG", "Tailwind CSS", "Netlify Functions", "Resend", "PWA", "SEO"]
links:
  website: "https://chape-expert.fr/"
  github: "https://github.com/AntoinePollet/chape-expert"
featured: false
draft: false
---

## The idea

**Chape Expert** is the website of a Paris-region company specialised in concrete screed installation. Beyond a classic commercial showcase, the site includes an **interactive AI-assisted quote generator**: customers describe their project, upload photos and instantly get a price range along with an AI visualisation of the finished floor.

## Features

- **Service catalogue** — 11 types of screeds and outdoor works (traditional, liquid, dry, fibre-reinforced, self-levelling…)
- **Multi-step AI quote** — service type, surface, thickness, site photos, instant estimate
- **AI visualisation** — image of the finished floor generated via Pollinations.ai
- **Transactional email** — quotes sent through the Resend API
- **Serverless rate limiting** — Netlify Blobs protecting the quote form
- **Technical SEO** — dedicated landing pages, JSON-LD, sitemap, 301 redirects, breadcrumbs
- **PWA** — installable, auto-updating
- **Project gallery** — portfolio of completed sites with surface areas

## Tech stack

| Layer | Tool |
|-------|------|
| Frontend | Vue 3, Vite, vite-ssg, Pinia |
| UI | Tailwind CSS, daisyUI, @vueuse/motion, Iconify |
| Routing | unplugin-vue-router (file-based) |
| Backend | Netlify Functions + Netlify Blobs |
| Email | Resend API |
| AI images | Pollinations.ai |
| SEO | @unhead/vue, vite-ssg-sitemap, JSON-LD |
| PWA | vite-plugin-pwa |
| Tests | Vitest, Cypress |
| Hosting | Netlify |
