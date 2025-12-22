import { getApprovedMemes } from "@/lib/memes"

export async function GET() {
  const memes = await getApprovedMemes()
  const siteUrl = "https://insanitywolf.com"

  // Only include memes from the last 48 hours for Google News
  const recentMemes = memes.filter(meme => {
    const memeDate = new Date(meme.createdAt)
    const twoDaysAgo = new Date(Date.now() - 48 * 60 * 60 * 1000)
    return memeDate > twoDaysAgo
  })

  const newsItems = recentMemes.map(meme => `
  <url>
    <loc>${siteUrl}/meme/${meme.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Insanity Wolf</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(meme.createdAt).toISOString()}</news:publication_date>
      <news:title><![CDATA[${meme.topText} / ${meme.bottomText}]]></news:title>
    </news:news>
    <image:image>
      <image:loc>${meme.imageUrl}</image:loc>
      <image:caption><![CDATA[Insanity Wolf: ${meme.topText} - ${meme.bottomText}]]></image:caption>
    </image:image>
  </url>`).join("")

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${newsItems}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  })
}
