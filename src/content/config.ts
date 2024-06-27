import { z, defineCollection } from 'astro:content'

const tractCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    author: z.string(),
    city: z.string(),
    description: z.string(),
    image: z.object({
        url: z.string(),
        alt: z.string()
    }),
    layout: z.string(),
    link: z.string(),
    pubDate: z.date(),
    title: z.string(),

    tags: z.array(z.string())
  }),
})

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    author: z.string()
  })
});

export const collections = {
  'tract': tractCollection,
  'author': authors
}