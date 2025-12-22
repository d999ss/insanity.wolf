"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Users, Eye, Share2, X } from "lucide-react"

export function ViralCelebration() {
  const [isVisible, setIsVisible] = useState(false)
  const [stats, setStats] = useState({ views: 0, shares: 0, trending: "" })

  useEffect(() => {
    const handleViralTrigger = () => {
      // Generate fake viral stats
      setStats({
        views: Math.floor(Math.random() * 50000) + 10000,
        shares: Math.floor(Math.random() * 5000) + 1000,
        trending: ["#1 in Memes", "#3 Trending", "Top 10 Today", "Going Viral!"][Math.floor(Math.random() * 4)],
      })
      setIsVisible(true)
    }

    window.addEventListener("insanity-viral-celebration" as any, handleViralTrigger)
    return () => window.removeEventListener("insanity-viral-celebration" as any, handleViralTrigger)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90" onClick={() => setIsVisible(false)} />

      <div className="relative w-full max-w-md animate-in zoom-in-95 duration-500">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 z-10 bg-white text-black p-1 hover:bg-gray-200"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 animate-pulse blur-xl opacity-50" />

        <div className="relative bg-black border-4 border-yellow-500 p-6 text-center">
          {/* Animated header */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 px-4 py-2 animate-bounce">
              <TrendingUp className="h-5 w-5 text-white" />
              <span className="text-white font-black uppercase text-sm">{stats.trending}</span>
            </div>
          </div>

          <h2 className="text-4xl font-black text-white uppercase mb-2" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textShadow: "0 0 20px rgba(255,0,0,0.5)" }}>
            🔥 YOUR MEME IS GOING VIRAL! 🔥
          </h2>

          <p className="text-red-300/80 mb-6">
            The internet is losing its mind over this one!
          </p>

          {/* Fake stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-red-950/50 border border-red-900/50 p-4">
              <Eye className="h-6 w-6 text-red-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-white">{stats.views.toLocaleString()}</div>
              <div className="text-red-400/60 text-xs uppercase">Views</div>
            </div>
            <div className="bg-red-950/50 border border-red-900/50 p-4">
              <Share2 className="h-6 w-6 text-red-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-white">{stats.shares.toLocaleString()}</div>
              <div className="text-red-400/60 text-xs uppercase">Shares</div>
            </div>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-2 mb-6 text-sm">
            <Users className="h-4 w-4 text-green-400" />
            <span className="text-green-400">{Math.floor(Math.random() * 200) + 50} people viewing right now</span>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <button
              onClick={() => {
                const text = encodeURIComponent("My Insanity Wolf meme is going VIRAL! 🔥🐺 Check it out at insanitywolf.com")
                window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank")
              }}
              className="w-full flex items-center justify-center gap-2 bg-black border-2 border-white text-white font-bold uppercase py-3 hover:bg-white hover:text-black transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              BRAG ON X
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold uppercase py-3 hover:from-red-500 hover:to-orange-500 transition-colors"
            >
              CREATE ANOTHER VIRAL HIT →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper to trigger viral celebration
export function triggerViralCelebration() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("insanity-viral-celebration"))
  }
}
