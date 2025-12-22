"use client"

import { useState, useEffect } from "react"

const NEWS_ITEMS = [
  "🔥 BREAKING: Insanity Wolf memes trending #1 on Reddit right now",
  "📈 VIRAL ALERT: 50,000+ memes created in the last 24 hours",
  "🐺 JUST IN: New extreme mode unlocked - users going INSANE",
  "🏆 RECORD: Most memes created in a single day - join the chaos",
  "💥 TRENDING: Insanity Wolf spotted on Twitter's trending page",
  "⚡ HOT: Celebrities sharing Insanity Wolf memes on Instagram",
  "🎉 MILESTONE: Over 10 MILLION memes created on this site",
  "🔥 ALERT: Flash sale on merch - 50% claimed already",
  "📱 VIRAL: Insanity Wolf meme gets 1M views on TikTok",
  "⭐ NEW: Limited edition merch dropping in 2 hours",
]

export function BreakingNews() {
  const [currentNews, setCurrentNews] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentNews(prev => (prev + 1) % NEWS_ITEMS.length)
        setIsAnimating(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-10 left-0 right-0 z-[45] bg-gradient-to-r from-red-600 via-red-500 to-red-600 overflow-hidden h-6">
      <div className="absolute inset-0 flex items-center">
        {/* Breaking label */}
        <div className="flex-shrink-0 bg-black px-3 h-full flex items-center">
          <span className="text-white text-[10px] font-black uppercase animate-pulse">BREAKING</span>
        </div>

        {/* News ticker */}
        <div className="flex-1 overflow-hidden px-4">
          <p
            className={`text-white text-xs font-bold whitespace-nowrap transition-all duration-500 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {NEWS_ITEMS[currentNews]}
          </p>
        </div>

        {/* Live indicator */}
        <div className="flex-shrink-0 px-3 flex items-center gap-1.5">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-white text-[10px] font-bold uppercase">LIVE</span>
        </div>
      </div>
    </div>
  )
}
