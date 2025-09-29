import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const legal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: z.object({
    title: z.object({
      firstLine: z.string(),
      secondLine: z.string().optional(),
    }),
    lastUpdated: z.string(),
  }) 
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    poster: z.string(),
    tags: z.array(z.string()).optional(),
  })
});

export const collections = {
  legal,
  news,
};