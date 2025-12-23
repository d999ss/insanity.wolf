import { loadMemes } from "@/lib/memes"

export async function GET() {
  const memes = loadMemes()
  const siteUrl = "https://insanitywolf.com"

  const blogPosts = [
    {
      slug: "what-is-insanity-wolf",
      title: "What is Insanity Wolf? The Complete History of the Legendary Meme",
      description: "From 4chan's /b/ board to worldwide fame. The origin, evolution, and cultural impact of Insanity Wolf.",
      date: "2024-01-10T00:00:00.000Z"
    },
    {
      slug: "how-to-make-insanity-wolf-meme",
      title: "How to Make an Insanity Wolf Meme (Step-by-Step Guide)",
      description: "Complete tutorial on creating the perfect Insanity Wolf meme using our free generator.",
      date: "2024-01-15T00:00:00.000Z"
    },
    {
      slug: "best-insanity-wolf-memes",
      title: "Best Insanity Wolf Memes of All Time (Top 50 Ranked)",
      description: "The ultimate collection of the funniest Insanity Wolf memes ever created.",
      date: "2024-01-20T00:00:00.000Z"
    }
  ]

  const rssItems = [
    // Blog posts
    ...blogPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>Blog</category>
    </item>`),
    // Recent memes
    ...memes.slice(0, 20).map(meme => `
    <item>
      <title><![CDATA[${meme.topText} / ${meme.bottomText}]]></title>
      <link>${siteUrl}/meme/${meme.slug}</link>
      <guid isPermaLink="true">${siteUrl}/meme/${meme.slug}</guid>
      <description><![CDATA[Insanity Wolf meme: ${meme.topText} - ${meme.bottomText}]]></description>
      <pubDate>${new Date(meme.createdAt).toUTCString()}</pubDate>
      <enclosure url="${meme.imageUrl}" type="image/png" />
      <category>Meme</category>
    </item>`)
  ].join("")

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Insanity Wolf - Memes & Blog</title>
    <link>${siteUrl}</link>
    <description>The official Insanity Wolf meme generator and archive. Fresh memes and articles about meme culture.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/insanity-wolf-template.webp</url>
      <title>Insanity Wolf</title>
      <link>${siteUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  })
}
