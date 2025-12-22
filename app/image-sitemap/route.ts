import { loadMemes } from "@/lib/memes"

export async function GET() {
  const memes = loadMemes()
  const siteUrl = "https://insanitywolf.com"

  const imageItems = memes
    .map((meme) => {
      const title = `Insanity Wolf: ${meme.topText} / ${meme.bottomText}`
      const caption = `Insanity Wolf meme - ${meme.topText}. ${meme.bottomText}.`

      return `
  <url>
    <loc>${siteUrl}/meme/${meme.slug}</loc>
    <image:image>
      <image:loc>${siteUrl}${meme.imageUrl}</image:loc>
      <image:title><![CDATA[${title}]]></image:title>
      <image:caption><![CDATA[${caption}]]></image:caption>
      <image:license>${siteUrl}/terms</image:license>
    </image:image>
  </url>`
    })
    .join("")

  // Also include the main template
  const templateEntry = `
  <url>
    <loc>${siteUrl}</loc>
    <image:image>
      <image:loc>${siteUrl}/insanity-wolf-template.webp</image:loc>
      <image:title>Insanity Wolf Meme Template</image:title>
      <image:caption>The classic Insanity Wolf meme template - create your own Insanity Wolf memes</image:caption>
    </image:image>
  </url>`

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${templateEntry}
  ${imageItems}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  })
}
