"use client"

import { useState } from "react"
import Image from "next/image"
import { Download, Share2, Shirt, Shuffle } from "lucide-react"
import { useRouter } from "next/navigation"

export function MemeGenerator() {
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")
  const router = useRouter()

  const memeReady = topText && bottomText

  const handleMakeMerch = () => {
    const params = new URLSearchParams({
      top: topText,
      bottom: bottomText,
    })
    router.push(`/merch?${params.toString()}`)
  }

  const problems = [
    "ALARM DIDN'T GO OFF",
    "BOSS WANTS TO SEE ME",
    "SOMEONE ATE MY LUNCH",
    "WIFI IS DOWN",
    "PHONE BATTERY AT 1%",
    "TRAFFIC JAM",
    "MONDAY MORNING",
    "DEADLINE TOMORROW",
    "OUT OF COFFEE",
    "NEIGHBOR'S DOG WON'T STOP BARKING",
    "FORGOT PASSWORD",
    "COMPUTER CRASHED",
    "RUNNING LATE",
    "CAN'T FIND PARKING",
    "ROOMMATE LEFT DISHES",
    "EX TEXTS YOU",
    "DENTIST APPOINTMENT",
    "CAR WON'T START",
    "PHONE DIES DURING UBER",
    "SOMEONE SPOILS THE MOVIE",
  ]

  const solutions = [
    "BURN THE BUILDING DOWN",
    "FIGHT EVERYONE",
    "SCREAM INTO THE VOID",
    "FLIP THE TABLE",
    "BECOME THE PROBLEM",
    "ASSERT DOMINANCE",
    "CHAOS IS THE ANSWER",
    "VIOLENCE IS ALWAYS AN OPTION",
    "SET IT ON FIRE",
    "RUN NAKED THROUGH THE STREETS",
    "FAKE YOUR OWN DEATH",
    "DESTROY ALL EVIDENCE",
    "EMBRACE THE DARKNESS",
    "ESTABLISH A NEW IDENTITY",
    "BURN ALL BRIDGES",
    "RELEASE THE WOLVES",
    "SUMMON ANCIENT DEMONS",
    "ACCEPT NO SURVIVORS",
    "MAKE THEM FEAR YOU",
    "BECOME UNGOVERNABLE",
  ]

  const generateProblem = () => {
    const randomProblem = problems[Math.floor(Math.random() * problems.length)]
    setTopText(randomProblem)
  }

  const generateSolution = () => {
    const randomSolution = solutions[Math.floor(Math.random() * solutions.length)]
    setBottomText(randomSolution)
  }

  const wrapText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number,
    fromBottom = false,
  ) => {
    const words = text.split(" ")
    let line = ""
    const lines: string[] = []

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " "
      const metrics = ctx.measureText(testLine)
      const testWidth = metrics.width

      if (testWidth > maxWidth && i > 0) {
        lines.push(line.trim())
        line = words[i] + " "
      } else {
        line = testLine
      }
    }
    lines.push(line.trim())

    const startY = fromBottom ? y - (lines.length - 1) * lineHeight : y

    lines.forEach((line, index) => {
      const lineY = startY + index * lineHeight
      ctx.strokeText(line, x, lineY)
      ctx.fillText(line, x, lineY)
    })

    return lines.length
  }

  const handleDownload = () => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new window.Image()
    img.crossOrigin = "anonymous"
    img.src = "/insanity-wolf-template.webp"

    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height

      ctx.drawImage(img, 0, 0)

      ctx.fillStyle = "white"
      ctx.strokeStyle = "black"
      ctx.lineWidth = 4
      ctx.textAlign = "center"
      const fontSize = Math.floor(canvas.width * 0.08)
      ctx.font = `bold ${fontSize}px Impact, 'Arial Black', sans-serif`

      const maxWidth = canvas.width - 120
      const lineHeight = fontSize * 1.15

      if (topText) {
        const topY = fontSize + 20
        wrapText(ctx, topText.toUpperCase(), canvas.width / 2, topY, maxWidth, lineHeight, false)
      }

      if (bottomText) {
        const bottomY = canvas.height - 40
        wrapText(ctx, bottomText.toUpperCase(), canvas.width / 2, bottomY, maxWidth, lineHeight, true)
      }

      const link = document.createElement("a")
      link.download = "insanity-wolf-meme.png"
      link.href = canvas.toDataURL()
      link.click()
    }
  }

  const handleShare = async () => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new window.Image()
    img.crossOrigin = "anonymous"
    img.src = "/insanity-wolf-template.webp"

    img.onload = async () => {
      canvas.width = img.width
      canvas.height = img.height

      ctx.drawImage(img, 0, 0)

      ctx.fillStyle = "white"
      ctx.strokeStyle = "black"
      ctx.lineWidth = 4
      ctx.textAlign = "center"
      const fontSize = Math.floor(canvas.width * 0.08)
      ctx.font = `bold ${fontSize}px Impact, 'Arial Black', sans-serif`

      const maxWidth = canvas.width - 120
      const lineHeight = fontSize * 1.15

      if (topText) {
        const topY = fontSize + 20
        wrapText(ctx, topText.toUpperCase(), canvas.width / 2, topY, maxWidth, lineHeight, false)
      }

      if (bottomText) {
        const bottomY = canvas.height - 40
        wrapText(ctx, bottomText.toUpperCase(), canvas.width / 2, bottomY, maxWidth, lineHeight, true)
      }

      try {
        const blob = await new Promise<Blob>((resolve) => {
          canvas.toBlob((b) => resolve(b!), "image/png")
        })

        if (navigator.share && navigator.canShare) {
          const file = new File([blob], "insanity-wolf-meme.png", { type: "image/png" })
          const shareData = {
            title: "Insanity Wolf Meme",
            text: "Check out this Insanity Wolf meme I made!",
            files: [file],
          }

          if (navigator.canShare(shareData)) {
            await navigator.share(shareData)
            return
          }
        }

        // Fallback: copy to clipboard
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob })
        ])
        alert("Meme copied to clipboard!")
      } catch (err) {
        console.error("Share failed:", err)
      }
    }
  }

  return (
    <div className="w-full">
      <div className="border border-red-900/30 bg-black">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Left side - Inputs */}
          <div className="space-y-4 md:space-y-6 border-b border-red-900/30 p-4 md:p-6 lg:border-b-0 lg:border-r">
            <div className="mb-4 md:mb-6">
              <h3 className="font-mono text-sm md:text-base font-medium uppercase text-white">
                GENERATE INSANITY
              </h3>
            </div>

            <div className="space-y-2">
              <label htmlFor="top-text" className="font-mono text-xs uppercase text-red-400/60">
                Top Text (The Problem)
              </label>
              <div className="flex gap-2">
                <input
                  id="top-text"
                  placeholder="EVERYDAY PROBLEM..."
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                  className="flex-1 h-12 px-4 font-mono text-base bg-red-950/20 border border-red-900/30 text-white placeholder:text-red-400/30 focus:outline-none focus:border-red-500/50"
                />
                <button
                  onClick={generateProblem}
                  className="h-12 px-4 font-mono text-xs uppercase bg-red-950/50 border border-red-900/30 text-red-400 hover:bg-red-950 hover:text-white transition-colors flex items-center gap-2"
                  title="Generate random problem"
                >
                  <Shuffle className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="bottom-text" className="font-mono text-xs uppercase text-red-400/60">
                Bottom Text (The Solution)
              </label>
              <div className="flex gap-2">
                <input
                  id="bottom-text"
                  placeholder="EXTREME SOLUTION..."
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                  className="flex-1 h-12 px-4 font-mono text-base bg-red-950/20 border border-red-900/30 text-white placeholder:text-red-400/30 focus:outline-none focus:border-red-500/50"
                />
                <button
                  onClick={generateSolution}
                  className="h-12 px-4 font-mono text-xs uppercase bg-red-950/50 border border-red-900/30 text-red-400 hover:bg-red-950 hover:text-white transition-colors flex items-center gap-2"
                  title="Generate random solution"
                >
                  <Shuffle className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              {memeReady ? (
                <>
                  <button
                    onClick={handleMakeMerch}
                    className="w-full flex items-center justify-center gap-2 font-mono text-sm font-medium text-black bg-white hover:bg-white/90 px-4 py-3 transition-colors"
                  >
                    <Shirt className="h-4 w-4" />
                    MAKE FUCKING MERCH
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex items-center justify-center gap-2 font-mono text-xs font-medium text-white bg-red-950/50 border border-red-900/30 hover:bg-red-950 px-4 py-2.5 transition-colors"
                    >
                      <Download className="h-3.5 w-3.5" />
                      DOWNLOAD
                    </button>
                    <button
                      onClick={handleShare}
                      className="flex items-center justify-center gap-2 font-mono text-xs font-medium text-white bg-red-950/50 border border-red-900/30 hover:bg-red-950 px-4 py-2.5 transition-colors"
                    >
                      <Share2 className="h-3.5 w-3.5" />
                      SHARE
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button
                    disabled
                    className="w-full flex items-center justify-center gap-2 font-mono text-sm font-medium text-white/40 bg-white/20 px-4 py-3 cursor-not-allowed"
                  >
                    <Shirt className="h-4 w-4" />
                    MAKE FUCKING MERCH
                  </button>
                  <p className="text-center font-mono text-xs text-white/50">
                    {topText || bottomText ? "Looking good! Keep going..." : "Enter text above to create your meme"}
                  </p>
                </>
              )}
            </div>

            <div className="bg-red-950/20 border border-red-900/30 p-4">
              <p className="mb-3 font-mono text-xs uppercase text-white/70">Quick Tips</p>
              <ul className="space-y-2 font-mono text-xs text-white/50">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Keep it short and punchy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Make the solution completely over the top</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Channel your inner chaos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Preview */}
          <div className="bg-red-950/10 p-4 md:p-6">
            <div className="mb-3 md:mb-4 flex items-center justify-between">
              <p className="font-mono text-xs uppercase text-white/70">Live Preview</p>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 animate-pulse bg-green-500"></div>
                <span className="font-mono text-xs text-green-500">LIVE</span>
              </div>
            </div>
            <div className="sticky top-24 overflow-hidden border border-red-900/30">
              <div className="relative">
                <Image
                  src="/insanity-wolf-template.webp"
                  alt="Insanity Wolf Meme Preview"
                  width={600}
                  height={600}
                  className="w-full"
                />
                {topText && (
                  <div className="absolute left-0 right-0 top-4 md:top-8 px-4 md:px-8 text-center">
                    <p
                      className="break-words text-xl md:text-3xl lg:text-4xl font-black uppercase leading-tight tracking-tight text-white"
                      style={{
                        fontFamily: "Impact, 'Arial Black', sans-serif",
                        textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 8px #000",
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {topText}
                    </p>
                  </div>
                )}
                {bottomText && (
                  <div className="absolute bottom-4 md:bottom-8 left-0 right-0 px-4 md:px-8 text-center">
                    <p
                      className="break-words text-xl md:text-3xl lg:text-4xl font-black uppercase leading-tight tracking-tight text-white"
                      style={{
                        fontFamily: "Impact, 'Arial Black', sans-serif",
                        textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 8px #000",
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {bottomText}
                    </p>
                  </div>
                )}
                {!topText && !bottomText && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <p className="px-4 md:px-8 text-center font-mono text-sm uppercase text-white/80">
                      Start typing to see your meme
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
