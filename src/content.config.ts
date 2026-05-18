import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image().optional(),
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
