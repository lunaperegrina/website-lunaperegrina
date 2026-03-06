import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	// loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		draft: z.boolean().optional(),
	}),
});

const work = defineCollection({
	type: "content",
	schema: z.object({
		locale: z.enum(["pt", "en"]),
		company: z.string(),
		role: z.string(),
		location: z.string(),
		dateStart: z.coerce.date(),
		dateEnd: z.union([z.coerce.date(), z.string()]),
		type: z.string().optional(),
		highlights: z.array(z.string()).min(1),
		tools: z.array(z.string()).optional(),
	}),
});

const education = defineCollection({
	type: "content",
	schema: z.object({
		institution: z.string(),
		degree: z.string(),
		location: z.string(),
		dateStart: z.coerce.date(),
		dateEnd: z.union([z.coerce.date(), z.string()]),
		highlights: z.array(z.string()).min(1).optional(),
	}),
});

const leadership = defineCollection({
	type: "content",
	schema: z.object({
		organization: z.string(),
		role: z.string(),
		location: z.string(),
		dateStart: z.coerce.date(),
		dateEnd: z.union([z.coerce.date(), z.string()]),
		highlights: z.array(z.string()).min(1),
	}),
});

const skills = defineCollection({
	type: "content",
	schema: z.object({
		category: z.string(),
		items: z.array(z.string()).min(1),
	}),
});

const projects = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		draft: z.boolean().optional(),
		demoURL: z.string().optional(),
		repoURL: z.string().optional(),
	}),
});

export const collections = { blog, work, education, leadership, skills, projects };
