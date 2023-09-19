import { defineCollection, z } from 'astro:content';

export const collections = {
	samples: defineCollection({
		schema: z.object({
			title: z.string(),
			prose: z.boolean().default(false),
			order: z.number(),
		}),
	}),
};
