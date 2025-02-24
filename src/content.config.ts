import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const loader = (collection: string) => glob({ pattern: '**/[^_]*.json', base: `./src/data/${collection}` });

export const contributorsSchema = z.object({
  name: z.string(),
  link: z.string(),
});

export const resourcesSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().or(z.null()),
  inactive: z.boolean().default(false),
  link: z.string(),
  color: z.string(),
  contributors: z.array(
    z.object({
      contributor: z.string(),
      role: z.string(),
      maintainer: z.boolean(),
    })
  ),
  tags: z.array(z.string()),
});

const contributorsCollection = defineCollection({
  loader: loader('contributors'),
  schema: contributorsSchema,
});

const resourcesCollection = defineCollection({
  loader: loader('resources'),
  schema: resourcesSchema,
});

export const collections = {
  contributors: contributorsCollection,
  resources: resourcesCollection,
};
