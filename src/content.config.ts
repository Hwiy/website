import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    order: z.number().default(0),   // controls position in nav + gallery
    cover: z.string(),              // path to the gallery thumbnail
    intro: z.string(),              // short paragraph under the title
    images: z.array(z.string()),    // the photos shown in the column
  }),
});

export const collections = { projects };
