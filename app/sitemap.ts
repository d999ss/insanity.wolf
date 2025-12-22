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
    "/contest",
    "/memes",
    "/memes/work",
    "/memes/relationship",
    "/memes/gaming",
    "/memes/monday",
    "/memes/coffee",
    "/poster",
    "/vs",
    "/vs/imgflip",
    "/vs/kapwing",
    "/vs/makeameme",
    "/vs/memegenerator",
    "/tools/bookmarklet",
    "/discord-bot",
    "/chrome-extension",
    "/widget",
    "/ai-generator",
    "/random",
    "/testimonials",
  ]

  const staticEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" as const : "weekly" as const,
    priority: page === "" ? 1 : page === "/gallery" ? 0.9 : 0.8,
  }))

  return staticEntries
}
