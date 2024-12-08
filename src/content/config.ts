import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['getting-started', 'core-concepts', 'advanced', 'api']),
    order: z.number(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  docs,
  blog,
};
