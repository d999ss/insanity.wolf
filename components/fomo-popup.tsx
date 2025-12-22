"use client"

import { useState, useEffect } from "react"
import { AlertTriangle, X, Clock, Users, Flame, ArrowRight } from "lucide-react"
import Link from "next/link"

export function FOMOPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [stats, setStats] = useState({ created: 0, online: 0, trending: "" })

  useEffect(() => {
    const shown = sessionStorage.getItem("insanity-fomo-shown")
    if (shown) return

    // Don't show on first page - only after navigation
    const pageViews = parseInt(sessionStorage.getItem("insanity-page-views") || "0")
    if (pageViews < 1) return

    // Show after 40 seconds
    const timer = setTimeout(() => {
      setStats({
        created: Math.floor(Math.random() * 500) + 200,
        online: Math.floor(Math.random() * 300) + 100,
        trending: ["#1", "#2", "#3"][Math.floor(Math.random() * 3)],
      })
      setIsVisible(true)
      sessionStorage.setItem("insanity-fomo-shown", "true")
    }, 40000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsVisible(false)} />

      <div className="relative w-full max-w-md animate-in zoom-in-95 duration-300">
        {/* Pulsing border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-pulse blur-md opacity-50" />

        <div className="relative bg-black border-2 border-red-500">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 z-10 text-white/50 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertTriangle className="h-6 w-6 text-white animate-bounce" />
              <span className="text-white font-black text-xl uppercase">DON'T MISS OUT!</span>
              <AlertTriangle className="h-6 w-6 text-white animate-bounce" />
            </div>
          </div>

          <div className="p-6">
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-red-950/50 border border-red-900/50 p-3 text-center">
                <Flame className="h-5 w-5 text-orange-400 mx-auto mb-1" />
                <div className="text-xl font-black text-white">{stats.created}</div>
                <div className="text-[10px] text-red-400/60 uppercase">Created Today</div>
              </div>
              <div className="bg-red-950/50 border border-red-900/50 p-3 text-center">
                <Users className="h-5 w-5 text-green-400 mx-auto mb-1" />
                <div className="text-xl font-black text-white">{stats.online}</div>
                <div className="text-[10px] text-red-400/60 uppercase">Online Now</div>
              </div>
              <div className="bg-red-950/50 border border-red-900/50 p-3 text-center">
                <Clock className="h-5 w-5 text-yellow-400 mx-auto mb-1" />
                <div className="text-xl font-black text-white">{stats.trending}</div>
                <div className="text-[10px] text-red-400/60 uppercase">Trending</div>
              </div>
            </div>

            <p className="text-white text-center mb-6">
              <span className="text-red-400 font-bold">{stats.created} people</span> created memes in the last hour.
              <br />
              <span className="text-white/70 text-sm">Are you really going to let them have all the fun?</span>
            </p>

            {/* Urgency text */}
            <div className="bg-yellow-500/10 border border-yellow-500/50 p-3 mb-6 text-center">
              <p className="text-yellow-400 text-sm font-bold animate-pulse">
                ⚠️ Server capacity at 87% - Create yours before it's too late!
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/"
              onClick={() => setIsVisible(false)}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase py-4 text-lg transition-all hover:scale-105"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              CREATE MY MEME NOW
              <ArrowRight className="h-5 w-5" />
            </Link>

            <p className="text-center text-white/40 text-xs mt-4">
              Join 10,847,293 meme creators worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
