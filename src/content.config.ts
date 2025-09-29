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

export const collections = { legal };
