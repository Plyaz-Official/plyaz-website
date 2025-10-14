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
  schema: (args) =>
    z.object({
      title: z.string(),
      author: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      // https://docs.astro.build/en/guides/images/#images-in-content-collections
      poster: args.image(),
    }),
});

export const collections = {
  legal,
  news,
};