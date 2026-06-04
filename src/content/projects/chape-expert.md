---
title: "Chape Expert"
description: "Site vitrine et générateur de devis IA pour une entreprise de chapes de béton en Île-de-France."
year: 2025
tags: ["Vue 3", "Vite SSG", "Tailwind CSS", "Netlify Functions", "Resend", "PWA", "SEO"]
links:
  website: "https://chape-expert.fr/"
  github: "https://github.com/AntoinePollet/chape-expert"
featured: false
draft: false
---

## L'idée

**Chape Expert** est le site d'une entreprise d'Île-de-France spécialisée dans l'installation de chapes de béton. Au-delà de la vitrine commerciale classique, le site intègre un **générateur de devis interactif assisté par IA** : le client décrit son projet, télécharge des photos et reçoit instantanément une fourchette de prix ainsi qu'une visualisation IA du sol fini.

## Fonctionnalités

- **Catalogue de services** — 11 types de chapes et travaux extérieurs (traditionnelle, fluide, sèche, fibrée, autonivelante…)
- **Devis IA multi-étapes** — type de service, surface, épaisseur, photos du site, estimation instantanée
- **Visualisation IA** — génération d'une image du sol fini via Pollinations.ai
- **Email transactionnel** — envoi des devis via l'API Resend
- **Rate-limiting serverless** — Netlify Blobs pour protéger le formulaire de devis
- **SEO technique** — landing pages dédiées, JSON-LD, sitemap, redirections 301, breadcrumbs
- **PWA** — installable, mise à jour automatique
- **Galerie de réalisations** — portfolio des chantiers avec métrages

## Stack technique

| Couche | Outil |
|--------|-------|
| Frontend | Vue 3, Vite, vite-ssg, Pinia |
| UI | Tailwind CSS, daisyUI, @vueuse/motion, Iconify |
| Routing | unplugin-vue-router (file-based) |
| Backend | Netlify Functions + Netlify Blobs |
| Email | Resend API |
| Images IA | Pollinations.ai |
| SEO | @unhead/vue, vite-ssg-sitemap, JSON-LD |
| PWA | vite-plugin-pwa |
| Tests | Vitest, Cypress |
| Hébergement | Netlify |
