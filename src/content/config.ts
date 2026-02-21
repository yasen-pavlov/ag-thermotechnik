import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),
      canonical: z.string().url().optional(),
      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),
      description: z.string().optional(),
      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),
      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const productCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/data/products' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    icon: z.string().optional(),
    image: z.string().optional(),
    features: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      )
      .optional(),
    order: z.number(),
    metadata: metadataDefinition(),
  }),
});

const serviceCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/data/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    icon: z.string().optional(),
    image: z.string().optional(),
    order: z.number(),
    metadata: metadataDefinition(),
  }),
});

const projectCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/data/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    products: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(),
    category: z.string().optional(),
    order: z.number().optional(),
    metadata: metadataDefinition(),
  }),
});

export const collections = {
  product: productCollection,
  service: serviceCollection,
  project: projectCollection,
};
