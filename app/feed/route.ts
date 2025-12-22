import { NextResponse } from "next/server"

const SAMPLE_MEMES = [
  { top: "WIFI IS DOWN", bottom: "DECLARE WAR ON ISP", date: new Date(Date.now() - 1000 * 60 * 60) },
  { top: "BOSS SAYS WORK LATE", bottom: "BURN DOWN THE OFFICE", date: new Date(Date.now() - 1000 * 60 * 60 * 24) },
  { top: "PIZZA ARRIVES COLD", bottom: "SUE ENTIRE COUNTRY OF ITALY", date: new Date(Date.now() - 1000 * 60 * 60 * 48) },
  { top: "ALARM DIDN'T GO OFF", bottom: "BLAME TIMEZONE CONSPIRACY", date: new Date(Date.now() - 1000 * 60 * 60 * 72) },
  { top: "COFFEE MACHINE BROKE", bottom: "SNORT THE GROUNDS", date: new Date(Date.now() - 1000 * 60 * 60 * 96) },
]

export async function GET() {
  const baseUrl = "https://insanitywolf.com"
  
  const items = SAMPLE_MEMES.map((meme) => {
    const memeId = Buffer.from(JSON.stringify({ top: meme.top, bottom: meme.bottom })).toString("base64")
    const memeUrl = baseUrl + "/meme/" + memeId
    
    return "<item><title><![CDATA[" + meme.top + " / " + meme.bottom + "]]></title><link>" + memeUrl + "</link><guid isPermaLink="true">" + memeUrl + "</guid><description><![CDATA[Insanity Wolf meme. Create your own at insanitywolf.com!]]></description><pubDate>" + meme.date.toUTCString() + "</pubDate></item>"
  }).join("")

  const feed = "<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Insanity Wolf - Latest Memes</title><link>" + baseUrl + "</link><description>The most insane Insanity Wolf memes</description><language>en-us</language><lastBuildDate>" + new Date().toUTCString() + "</lastBuildDate>" + items + "</channel></rss>"

  return new NextResponse(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
