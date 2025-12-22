import { MetadataRoute } from "next"
import { loadMemes } from "@/lib/memes"
import { CLUSTERS } from "@/lib/clusters"

const BASE_URL = "https://insanitywolf.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const memes = loadMemes()
  const now = new Date()

  // High priority pages (SEO hubs)
  const hubPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/insanity-wolf-meme-generator`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/top-insanity-wolf-memes`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/new-insanity-wolf-memes`,
      lastModified: now,
      changeFrequency: "hourly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/memes`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
  ]

  // Standard pages
  const standardPages = [
    "/store",
    "/merch",
    "/blog/history",
    "/templates",
    "/examples",
    "/random",
  ]

  const standardEntries: MetadataRoute.Sitemap = standardPages.map((page) => ({
    url: `${BASE_URL}${page}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Theme cluster category pages (from cluster config)
  const categoryEntries: MetadataRoute.Sitemap = CLUSTERS.map((cluster) => ({
    url: `${BASE_URL}/memes/${cluster.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }))

  // Meme pages with images
  const memeEntries: MetadataRoute.Sitemap = memes.map((meme) => ({
    url: `${BASE_URL}/meme/${meme.slug}`,
    lastModified: new Date(meme.createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
    images: [`${BASE_URL}${meme.imageUrl}`],
  }))

  return [
    ...hubPages,
    ...categoryEntries,
    ...standardEntries,
    ...memeEntries,
  ]
}
