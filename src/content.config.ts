import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One file per language: src/content/projects/{fr,en}/<slug>.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Single kanji used as the project's visual mark (and placeholder art)
      kanji: z.string(),
      kanjiMeaning: z.string(),
      cover: image().optional(),
      gallery: z.array(image()).default([]),
      year: z.number(),
      tags: z.array(z.string()).default([]),
      links: z
        .object({
          website: z.string().url().optional(),
          appStore: z.string().url().optional(),
          playStore: z.string().url().optional(),
          github: z.string().url().optional(),
        })
        .default({}),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
