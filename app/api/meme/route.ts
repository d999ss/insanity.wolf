import { NextRequest, NextResponse } from "next/server"
import { generateSlug, generateFilename, saveMeme, type Meme } from "@/lib/memes"
import { generateMemeImage } from "@/lib/generate-image"

export async function POST(request: NextRequest) {
  try {
    const { topText, bottomText } = await request.json()

    if (!topText && !bottomText) {
      return NextResponse.json(
        { error: "At least one text field is required" },
        { status: 400 }
      )
    }

    const top = (topText || "").trim()
    const bottom = (bottomText || "").trim()

    // Generate slug and filename
    const slug = generateSlug(top, bottom)
    const filename = generateFilename(top, bottom)

    // Generate the meme image
    const { webpPath } = await generateMemeImage(top, bottom, filename)

    // Create meme record
    const meme: Meme = {
      id: slug,
      slug,
      topText: top,
      bottomText: bottom,
      imageUrl: webpPath,
      createdAt: new Date().toISOString(),
      views: 0,
      shares: 0,
    }

    // Save to database
    saveMeme(meme)

    // Return the meme URL
    const memeUrl = `/meme/${slug}`

    return NextResponse.json({
      success: true,
      slug,
      url: memeUrl,
      imageUrl: webpPath,
    })
  } catch (error) {
    console.error("Error creating meme:", error)
    return NextResponse.json(
      { error: "Failed to create meme" },
      { status: 500 }
    )
  }
}
