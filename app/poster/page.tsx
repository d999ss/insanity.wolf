"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download, Printer, ArrowRight, FileImage, Maximize } from "lucide-react"

const POSTER_SIZES = [
  { name: "Letter", dimensions: "8.5\" x 11\"", pixels: "2550 x 3300", aspect: "portrait" },
  { name: "A4", dimensions: "210 x 297mm", pixels: "2480 x 3508", aspect: "portrait" },
  { name: "Square", dimensions: "12\" x 12\"", pixels: "3600 x 3600", aspect: "square" },
  { name: "Poster", dimensions: "18\" x 24\"", pixels: "5400 x 7200", aspect: "portrait" },
]

export default function PosterPage() {
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")
  const [selectedSize, setSelectedSize] = useState(POSTER_SIZES[0])

  const handleDownload = (size: typeof POSTER_SIZES[0]) => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const [w, h] = size.pixels.split(" x ").map(Number)
    canvas.width = w
    canvas.height = h

    const img = new window.Image()
    img.crossOrigin = "anonymous"
    img.src = "/insanity-wolf-template.webp"

    img.onload = () => {
      // Fill background
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, w, h)

      // Calculate image position (centered)
      const imgSize = Math.min(w, h) * 0.8
      const x = (w - imgSize) / 2
      const y = (h - imgSize) / 2
      ctx.drawImage(img, x, y, imgSize, imgSize)

      // Draw text
      ctx.fillStyle = "white"
      ctx.strokeStyle = "black"
      ctx.textAlign = "center"
      const fontSize = Math.floor(imgSize * 0.08)
      ctx.lineWidth = fontSize * 0.08
      ctx.font = "bold " + fontSize + "px Impact, 'Arial Black', sans-serif"

      const textTop = topText || "YOUR TEXT HERE"
      const textBottom = bottomText || "BOTTOM TEXT"

      // Top text
      const topY = y + fontSize + 20
      ctx.strokeText(textTop.toUpperCase(), w / 2, topY)
      ctx.fillText(textTop.toUpperCase(), w / 2, topY)

      // Bottom text
      const bottomY = y + imgSize - 30
      ctx.strokeText(textBottom.toUpperCase(), w / 2, bottomY)
      ctx.fillText(textBottom.toUpperCase(), w / 2, bottomY)

      // Watermark
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
      ctx.font = "bold 24px Arial, sans-serif"
      ctx.textAlign = "right"
      ctx.fillText("insanitywolf.com", w - 30, h - 30)

      // Download
      const link = document.createElement("a")
      link.download = "insanity-wolf-poster-" + size.name.toLowerCase() + ".png"
      link.href = canvas.toDataURL("image/png")
      link.click()
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600 text-white text-xs font-bold uppercase mb-4">
              <Printer className="h-4 w-4" />
              Print Ready
            </div>
            <h1
              className="text-4xl md:text-5xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Printable <span className="text-purple-400">Posters</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Download high-resolution Insanity Wolf posters for printing. Perfect for offices, dorms, and anywhere that needs more chaos.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Generator */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-black uppercase mb-4">Customize Your Poster</h2>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm text-white/70 mb-2">Top Text</label>
                <input
                  type="text"
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                  placeholder="YOUR PROBLEM"
                  className="w-full bg-black border border-red-900/50 px-4 py-3 text-white placeholder:text-white/30 focus:border-red-500 focus:outline-none uppercase"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Bottom Text</label>
                <input
                  type="text"
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                  placeholder="INSANE SOLUTION"
                  className="w-full bg-black border border-red-900/50 px-4 py-3 text-white placeholder:text-white/30 focus:border-red-500 focus:outline-none uppercase"
                />
              </div>
            </div>

            <h3 className="font-bold mb-3">Select Size</h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {POSTER_SIZES.map((size) => (
                <button
                  key={size.name}
                  onClick={() => setSelectedSize(size)}
                  className={"p-4 border text-left transition-all " + (
                    selectedSize.name === size.name
                      ? "border-purple-500 bg-purple-950/30"
                      : "border-red-900/30 hover:border-red-500"
                  )}
                >
                  <div className="font-bold">{size.name}</div>
                  <div className="text-white/50 text-sm">{size.dimensions}</div>
                  <div className="text-white/30 text-xs">{size.pixels}</div>
                </button>
              ))}
            </div>

            <button
              onClick={() => handleDownload(selectedSize)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black uppercase py-4 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Download className="h-5 w-5" />
              Download {selectedSize.name} Poster
            </button>
          </div>

          {/* Preview */}
          <div className="bg-red-950/20 border border-red-900/30 p-6 flex items-center justify-center">
            <div className={"relative bg-black " + (selectedSize.aspect === "square" ? "w-full aspect-square" : "w-3/4 aspect-[3/4]")}>
              <div className="absolute inset-[10%]">
                <div className="relative w-full h-full">
                  <Image
                    src="/insanity-wolf-template.webp"
                    alt="Poster Preview"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-[5%]">
                    <p
                      className="text-center text-sm md:text-lg font-black uppercase text-white"
                      style={{ textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000" }}
                    >
                      {topText || "YOUR TEXT HERE"}
                    </p>
                    <p
                      className="text-center text-sm md:text-lg font-black uppercase text-white"
                      style={{ textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000" }}
                    >
                      {bottomText || "BOTTOM TEXT"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-made Posters */}
        <div className="mb-12">
          <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
            <FileImage className="h-5 w-5 text-purple-400" />
            Popular Pre-Made Posters
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { top: "WIFI IS DOWN", bottom: "DECLARE WAR ON ISP" },
              { top: "DEADLINE TOMORROW", bottom: "FINISH IT NEXT WEEK" },
              { top: "COFFEE MACHINE BROKE", bottom: "SNORT THE GROUNDS" },
            ].map((poster, i) => (
              <div key={i} className="bg-red-950/20 border border-red-900/30 p-4">
                <div className="relative aspect-[3/4] bg-black mb-3">
                  <div className="absolute inset-[10%]">
                    <div className="relative w-full h-full">
                      <Image
                        src="/insanity-wolf-template.webp"
                        alt={poster.top}
                        fill
                        className="object-contain"
                      />
                      <div className="absolute inset-0 flex flex-col justify-between p-2">
                        <p className="text-center text-xs font-black uppercase text-white" style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000" }}>
                          {poster.top}
                        </p>
                        <p className="text-center text-xs font-black uppercase text-white" style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000" }}>
                          {poster.bottom}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => { setTopText(poster.top); setBottomText(poster.bottom) }}
                  className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase text-sm transition-colors"
                >
                  Use This Design
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <Maximize className="h-12 w-12 text-purple-400 mx-auto mb-4" />
          <h2
            className="text-3xl font-black uppercase mb-4"
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            Want More <span className="text-purple-400">Options</span>?
          </h2>
          <p className="text-white/70 mb-6">
            Use our full meme generator for more effects and customization.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-6 py-3 transition-colors"
          >
            Full Generator
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
