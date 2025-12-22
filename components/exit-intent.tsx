"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Flame, Zap, Trophy, TrendingUp } from "lucide-react"

const PREVIEW_MEMES = [
  { top: "WIFI IS DOWN", bottom: "DECLARE WAR ON ISP" },
  { top: "BOSS SAYS WORK LATE", bottom: "BURN DOWN THE OFFICE" },
  { top: "PIZZA ARRIVES COLD", bottom: "SUE ENTIRE COUNTRY OF ITALY" },
  { top: "COFFEE MACHINE BROKE", bottom: "SNORT THE GROUNDS" },
]

export function ExitIntent() {
  const [isVisible, setIsVisible] = useState(false)
  const [previewMeme, setPreviewMeme] = useState(PREVIEW_MEMES[0])

  useEffect(() => {
    // Pick random preview meme
    setPreviewMeme(PREVIEW_MEMES[Math.floor(Math.random() * PREVIEW_MEMES.length)])
  }, [])

  useEffect(() => {
    const shown = sessionStorage.getItem("exit-intent-shown")
    if (shown) return

    // Don't show on first page - only after navigation
    const pageViews = parseInt(sessionStorage.getItem("insanity-page-views") || "0")
    if (pageViews < 1) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true)
        sessionStorage.setItem("exit-intent-shown", "true")
        document.removeEventListener("mouseleave", handleMouseLeave)
      }
    }

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95" onClick={() => setIsVisible(false)} />

      <div className="relative w-full max-w-2xl bg-gradient-to-br from-red-950 to-black border-2 border-red-500 shadow-2xl shadow-red-500/30 animate-in zoom-in-95 duration-300 overflow-hidden">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 z-10 text-red-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Meme Preview */}
          <div className="relative aspect-square md:aspect-auto bg-black">
            <Image
              src="/insanity-wolf-template.webp"
              alt="Insanity Wolf Preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <p
                className="text-center text-lg md:text-xl font-black uppercase text-white"
                style={{
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                }}
              >
                {previewMeme.top}
              </p>
              <p
                className="text-center text-lg md:text-xl font-black uppercase text-white"
                style={{
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                }}
              >
                {previewMeme.bottom}
              </p>
            </div>
            <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-orange-500 text-black text-xs font-bold">
              <TrendingUp className="h-3 w-3" />
              TRENDING
            </div>
          </div>

          {/* CTA Content */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 text-sm font-bold uppercase">Before you go...</span>
            </div>

            <h3
              className="text-2xl md:text-3xl font-black uppercase text-white mb-3"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              THIS COULD BE <span className="text-red-500">YOUR</span> MEME
            </h3>

            <p className="text-white/70 mb-6 text-sm">
              Thousands of people are creating memes right now. Don't miss out on the chaos!
            </p>

            <div className="flex items-center gap-4 mb-6 text-xs text-white/50">
              <span className="flex items-center gap-1">
                <Flame className="h-4 w-4 text-orange-400" />
                15.4k created today
              </span>
              <span className="flex items-center gap-1">
                <Trophy className="h-4 w-4 text-yellow-400" />
                Top memes featured
              </span>
            </div>

            <div className="space-y-3">
              <a
                href="/#forge"
                onClick={() => setIsVisible(false)}
                className="w-full h-12 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase flex items-center justify-center gap-2 transition-all hover:scale-105"
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                <Flame className="h-5 w-5" />
                CREATE MY MEME
              </a>

              <button
                onClick={() => setIsVisible(false)}
                className="w-full py-2 text-red-400/50 hover:text-red-400 text-xs transition-colors"
              >
                No thanks, I prefer being boring
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
