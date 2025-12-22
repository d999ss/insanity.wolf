"use client"

import { useState, useEffect } from "react"
import { X, Star, ThumbsUp, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const FEATURED_MEMES = [
  { top: "BOSS SAYS WORK OVERTIME", bottom: "BURN THE BUILDING DOWN", votes: 12847 },
  { top: "ALARM DIDN'T GO OFF", bottom: "BECOME NOCTURNAL PERMANENTLY", votes: 9823 },
  { top: "SOMEONE ATE MY LUNCH", bottom: "EAT THEM INSTEAD", votes: 15234 },
  { top: "WIFI IS DOWN", bottom: "RETURN TO THE WILDERNESS", votes: 8756 },
  { top: "MONDAY MORNING", bottom: "DECLARE WAR ON TIME ITSELF", votes: 21345 },
  { top: "GROUP PROJECT", bottom: "DO IT ALL YOURSELF THEN CLAIM SOLE CREDIT", votes: 18923 },
  { top: "EX TEXTS YOU", bottom: "RESPOND IN ANCIENT SUMERIAN", votes: 7654 },
]

export function MemeOfTheDay() {
  const [isVisible, setIsVisible] = useState(false)
  const [meme, setMeme] = useState(FEATURED_MEMES[0])

  useEffect(() => {
    // Check if already dismissed today
    const lastDismissed = localStorage.getItem("insanity-motd-dismissed")
    const today = new Date().toDateString()

    if (lastDismissed === today) return

    // Show after 20 seconds
    const timer = setTimeout(() => {
      // Pick meme based on day of year for consistency
      const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)
      setMeme(FEATURED_MEMES[dayOfYear % FEATURED_MEMES.length])
      setIsVisible(true)
    }, 20000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("insanity-motd-dismissed", new Date().toDateString())
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80" onClick={handleDismiss} />

      <div className="relative w-full max-w-md bg-black border-2 border-yellow-500 shadow-2xl shadow-yellow-500/30 animate-in zoom-in-95">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 z-10 text-yellow-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-3 flex items-center gap-2">
          <Star className="h-5 w-5 text-white fill-white" />
          <span className="text-white font-black uppercase" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            MEME OF THE DAY
          </span>
        </div>

        {/* Meme Preview */}
        <div className="relative aspect-square bg-black">
          <Image
            src="/insanity-wolf-template.webp"
            alt="Insanity Wolf"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <p
              className="text-center text-xl font-black uppercase text-white"
              style={{
                fontFamily: 'Impact, "Arial Black", sans-serif',
                textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
              }}
            >
              {meme.top}
            </p>
            <p
              className="text-center text-xl font-black uppercase text-white"
              style={{
                fontFamily: 'Impact, "Arial Black", sans-serif',
                textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
              }}
            >
              {meme.bottom}
            </p>
          </div>
        </div>

        {/* Stats & CTA */}
        <div className="p-4 border-t border-yellow-900/50 bg-yellow-950/20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ThumbsUp className="h-4 w-4 text-yellow-400" />
              <span className="text-yellow-400 font-bold">{meme.votes.toLocaleString()}</span>
              <span className="text-yellow-400/60 text-sm">votes today</span>
            </div>
            <span className="text-white/50 text-xs">Featured by the pack</span>
          </div>

          <Link
            href="/"
            onClick={handleDismiss}
            className="block w-full text-center bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black uppercase py-3 hover:from-yellow-400 hover:to-orange-400 transition-all"
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            CREATE YOUR OWN <ExternalLink className="inline h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
