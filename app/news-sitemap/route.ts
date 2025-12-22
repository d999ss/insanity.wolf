import { getNewestMemes } from "@/lib/memes"

export async function GET() {
  const memes = getNewestMemes(100)
  const siteUrl = "https://insanitywolf.com"

  // Only include memes from last 2 days (Google News requirement)
  const twoDaysAgo = new Date()
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)

  const recentMemes = memes.filter(
    (meme) => new Date(meme.createdAt) >= twoDaysAgo
  )

  const newsItems = recentMemes
    .map((meme) => {
      const pubDate = new Date(meme.createdAt).toISOString()
      const title = `Insanity Wolf: ${meme.topText} / ${meme.bottomText}`

      return `
  <url>
    <loc>${siteUrl}/meme/${meme.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Insanity Wolf</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title><![CDATA[${title}]]></news:title>
    </news:news>
    <image:image>
      <image:loc>${siteUrl}${meme.imageUrl}</image:loc>
      <image:title><![CDATA[${title}]]></image:title>
    </image:image>
  </url>`
    })
    .join("")

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${newsItems}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=1800, stale-while-revalidate",
    },
  })
}
