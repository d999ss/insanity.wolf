import { NextRequest, NextResponse } from "next/server"

// Pre-defined problems and solutions for auto-generation
const PROBLEMS = [
  "ALARM DIDN'T GO OFF", "BOSS WANTS TO SEE ME", "WIFI IS DOWN", "TRAFFIC JAM",
  "OUT OF COFFEE", "SOMEONE ATE MY LUNCH", "MONDAY MORNING", "PHONE BATTERY AT 1%",
  "MEETING COULD'VE BEEN EMAIL", "DEADLINE TOMORROW", "PRINTER JAMMED",
  "PASSWORD EXPIRED", "COMPUTER CRASHED", "SLOW WALKER IN FRONT",
  "SOMEONE CHEWS LOUDLY", "LEFT ON READ", "FLIGHT DELAYED", "PACKAGE SAYS DELIVERED",
]

const SOLUTIONS = [
  "BURN THE BUILDING DOWN", "FIGHT EVERYONE", "DECLARE WAR", "BECOME UNGOVERNABLE",
  "RELEASE THE WOLVES", "CHOOSE VIOLENCE", "SET IT ON FIRE", "ASSERT DOMINANCE",
  "FLIP THE TABLE", "FAKE YOUR OWN DEATH", "BECOME THE PROBLEM", "SCREAM INTO THE VOID",
  "EMBRACE THE DARKNESS", "WATCH THE WORLD BURN", "SUMMON ANCIENT DEMONS",
  "ACTIVATE GOBLIN MODE", "OUTLIVE YOUR ENEMIES", "ACHIEVE FINAL FORM",
]

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const top = searchParams.get("top")
  const bottom = searchParams.get("bottom")
  const random = searchParams.get("random") === "true"

  let topText = top || ""
  let bottomText = bottom || ""

  // Auto-generate if random requested
  if (random || (!top && !bottom)) {
    topText = PROBLEMS[Math.floor(Math.random() * PROBLEMS.length)]
    bottomText = SOLUTIONS[Math.floor(Math.random() * SOLUTIONS.length)]
  }

  // Generate shareable URL
  const memeId = Buffer.from(JSON.stringify({ top: topText, bottom: bottomText })).toString("base64")
  const shareUrl = `https://insanitywolf.com/meme/${memeId}`

  return NextResponse.json({
    success: true,
    meme: {
      top: topText,
      bottom: bottomText,
      shareUrl,
      embedCode: `<a href="${shareUrl}" target="_blank"><img src="https://insanitywolf.com/insanity-wolf-template.webp" alt="${topText} / ${bottomText}" /></a>`,
    },
    generator: "https://insanitywolf.com",
    api: {
      random: "https://insanitywolf.com/api/generate?random=true",
      custom: "https://insanitywolf.com/api/generate?top=YOUR_TEXT&bottom=YOUR_TEXT",
    }
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { top, bottom } = body

    if (!top || !bottom) {
      return NextResponse.json(
        { error: "Both 'top' and 'bottom' text are required" },
        { status: 400 }
      )
    }

    const memeId = Buffer.from(JSON.stringify({ top, bottom })).toString("base64")
    const shareUrl = `https://insanitywolf.com/meme/${memeId}`

    return NextResponse.json({
      success: true,
      meme: {
        top,
        bottom,
        shareUrl,
      }
    })
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    )
  }
}
