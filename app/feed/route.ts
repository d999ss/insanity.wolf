import { getNewestMemes } from "@/lib/memes"

export async function GET() {
  const memes = getNewestMemes(50)
  const siteUrl = "https://insanitywolf.com"

  const rssItems = memes
    .map((meme) => {
      const pubDate = new Date(meme.createdAt).toUTCString()
      const title = `${meme.topText} / ${meme.bottomText}`
      const description = `Insanity Wolf: ${meme.topText}. ${meme.bottomText}.`
      const link = `${siteUrl}/meme/${meme.slug}`
      const imageUrl = `${siteUrl}${meme.imageUrl}`

      return `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${imageUrl}" type="image/webp" />
      <media:content url="${imageUrl}" type="image/webp" medium="image" />
      <media:thumbnail url="${imageUrl}" />
    </item>`
    })
    .join("")

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Insanity Wolf - Latest Memes</title>
    <link>${siteUrl}</link>
    <description>The latest Insanity Wolf memes. Extreme solutions to everyday problems since 2009.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/insanity-wolf-template.webp</url>
      <title>Insanity Wolf</title>
      <link>${siteUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  })
}
