import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://insanitywolf.com"

  const staticPages = [
    "",
    "/gallery",
    "/store",
    "/merch",
    "/history",
    "/templates",
    "/examples",
    "/embed-code",
    "/api-docs",
    "/battle",
    "/leaderboard",
    "/meme-of-the-day",
  ]

  const staticEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" as const : "weekly" as const,
    priority: page === "" ? 1 : page === "/gallery" ? 0.9 : 0.8,
  }))

  return staticEntries
}
