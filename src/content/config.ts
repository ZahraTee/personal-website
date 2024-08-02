import { defineCollection, z } from "astro:content";

const blogPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().optional(),
});

export type BlogPostSchema = z.infer<typeof blogPostSchema>;

const blog = defineCollection({
  type: "content",
  schema: blogPostSchema,
});

export const collections = { blog };
