"use client"

import { useState } from "react"
import Image from "next/image"
import { Download, Shuffle, ExternalLink } from "lucide-react"

const problems = [
  "ALARM DIDN'T GO OFF", "BOSS WANTS TO SEE ME", "WIFI IS DOWN", "TRAFFIC JAM",
  "OUT OF COFFEE", "SOMEONE ATE MY LUNCH", "MONDAY MORNING", "PHONE BATTERY AT 1%"
]

const solutions = [
  "BURN THE BUILDING DOWN", "FIGHT EVERYONE", "DECLARE WAR", "BECOME UNGOVERNABLE",
  "RELEASE THE WOLVES", "CHOOSE VIOLENCE", "SET IT ON FIRE", "ASSERT DOMINANCE"
]

export default function EmbedPage() {
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")

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

      if (topText) {
        ctx.strokeText(topText.toUpperCase(), canvas.width / 2, fontSize + 20)
        ctx.fillText(topText.toUpperCase(), canvas.width / 2, fontSize + 20)
      }

      if (bottomText) {
        ctx.strokeText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 40)
        ctx.fillText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 40)
      }

      // Watermark
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
      ctx.strokeStyle = "rgba(0, 0, 0, 0.5)"
      ctx.lineWidth = 2
      ctx.font = "bold 14px Arial, sans-serif"
      ctx.textAlign = "right"
      ctx.strokeText("insanitywolf.com", canvas.width - 10, canvas.height - 10)
      ctx.fillText("insanitywolf.com", canvas.width - 10, canvas.height - 10)

      const link = document.createElement("a")
      link.download = "insanity-wolf-meme.png"
      link.href = canvas.toDataURL()
      link.click()
    }
  }

  const randomize = () => {
    setTopText(problems[Math.floor(Math.random() * problems.length)])
    setBottomText(solutions[Math.floor(Math.random() * solutions.length)])
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-md mx-auto">
        {/* Preview */}
        <div className="relative aspect-square bg-black border border-red-900/50 mb-4">
          <Image
            src="/insanity-wolf-template.webp"
            alt="Insanity Wolf"
            fill
            className="object-cover"
          />
          {topText && (
            <div className="absolute top-4 left-0 right-0 px-4 text-center">
              <p
                className="text-lg font-black uppercase text-white"
                style={{
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                }}
              >
                {topText}
              </p>
            </div>
          )}
          {bottomText && (
            <div className="absolute bottom-4 left-0 right-0 px-4 text-center">
              <p
                className="text-lg font-black uppercase text-white"
                style={{
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                }}
              >
                {bottomText}
              </p>
            </div>
          )}
        </div>

        {/* Inputs */}
        <div className="space-y-3 mb-4">
          <input
            type="text"
            placeholder="TOP TEXT (problem)"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
            className="w-full bg-red-950/30 border border-red-900/50 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-red-500"
          />
          <input
            type="text"
            placeholder="BOTTOM TEXT (solution)"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
            className="w-full bg-red-950/30 border border-red-900/50 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            onClick={randomize}
            className="flex items-center justify-center gap-2 bg-red-950/50 border border-red-900/50 hover:bg-red-900/50 text-white text-sm font-bold uppercase px-4 py-2 transition-colors"
          >
            <Shuffle className="h-4 w-4" />
            Random
          </button>
          <button
            onClick={handleDownload}
            disabled={!topText && !bottomText}
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 disabled:bg-red-900/30 disabled:text-white/30 text-white text-sm font-bold uppercase px-4 py-2 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download
          </button>
        </div>

        {/* Branding */}
        <a
          href="https://insanitywolf.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-red-400 hover:text-red-300 text-xs transition-colors"
        >
          Powered by InsanityWolf.com
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  )
}
