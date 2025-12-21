"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Download, Sparkles } from "lucide-react"

export function MemeGenerator() {
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")

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

  return (
    <div className="w-full max-w-5xl">
      <div className="overflow-hidden rounded-2xl border-2 border-border bg-card shadow-2xl shadow-primary/5">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Left side - Inputs */}
          <div className="space-y-6 border-b border-border p-8 lg:border-b-0 lg:border-r">
            <div className="mb-6 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="font-sans text-lg font-black uppercase tracking-tight">Customize Your Meme</h3>
            </div>

            <div className="space-y-2">
              <Label htmlFor="top-text" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Top Text (The Problem)
              </Label>
              <Input
                id="top-text"
                placeholder="EVERYDAY PROBLEM..."
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
                className="h-12 text-base font-semibold"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bottom-text" className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Bottom Text (The Solution)
              </Label>
              <Input
                id="bottom-text"
                placeholder="EXTREME SOLUTION..."
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
                className="h-12 text-base font-semibold"
              />
            </div>

            <div className="space-y-4 pt-4">
              <Button
                onClick={handleDownload}
                size="lg"
                className="w-full gap-2 font-bold shadow-lg"
                disabled={!topText || !bottomText}
              >
                <Download className="h-4 w-4" />
                DOWNLOAD YOUR MEME
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                {topText || bottomText ? "Looking good! Keep going..." : "Enter text above to create your meme"}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">Quick Tips:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">•</span>
                  <span>Keep it short and punchy for maximum impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">•</span>
                  <span>Make the solution completely over the top</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-primary">•</span>
                  <span>Channel your inner chaos and absurdity</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Preview */}
          <div className="bg-muted/20 p-8">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Live Preview</p>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary"></div>
                <span className="text-xs font-semibold text-primary">LIVE</span>
              </div>
            </div>
            <div className="sticky top-24 overflow-hidden rounded-xl border-4 border-border bg-card shadow-2xl">
              <div className="relative">
                <Image
                  src="/insanity-wolf-template.webp"
                  alt="Insanity Wolf Meme Preview"
                  width={600}
                  height={600}
                  className="w-full"
                />
                {topText && (
                  <div className="absolute left-0 right-0 top-8 px-8 text-center">
                    <p
                      className="break-words text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-4xl"
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
                  <div className="absolute bottom-8 left-0 right-0 px-8 text-center">
                    <p
                      className="break-words text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-4xl"
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
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <p className="px-8 text-center text-lg font-bold uppercase tracking-wide text-white">
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
