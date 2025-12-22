"use client"

import { useState, useEffect } from "react"
import { TrendingUp, X, Flame, Eye } from "lucide-react"

const VIRAL_MESSAGES = [
  { type: "trending", message: "Your meme style is trending!", subtext: "3,847 people making similar memes" },
  { type: "views", message: "Memes like yours got 50K+ views today!", subtext: "Join the viral wave" },
  { type: "hot", message: "🔥 INSANITY WOLF IS TRENDING #4", subtext: "On social media right now!" },
  { type: "milestone", message: "The pack just hit 1M memes created!", subtext: "You're part of history" },
  { type: "surge", message: "Traffic surge detected!", subtext: "247% more visitors in the last hour" },
]

export function ViralAlert() {
  const [alert, setAlert] = useState<typeof VIRAL_MESSAGES[0] | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show random alert after 90 seconds
    const timer = setTimeout(() => {
      const randomAlert = VIRAL_MESSAGES[Math.floor(Math.random() * VIRAL_MESSAGES.length)]
      setAlert(randomAlert)
      setIsVisible(true)

      // Auto-dismiss after 8 seconds
      setTimeout(() => setIsVisible(false), 8000)
    }, 90000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible || !alert) return null

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[110] animate-in slide-in-from-top duration-500">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 shadow-xl shadow-orange-500/30 flex items-center gap-4 min-w-[300px]">
        <div className="flex-shrink-0">
          {alert.type === "trending" && <TrendingUp className="h-6 w-6 animate-pulse" />}
          {alert.type === "views" && <Eye className="h-6 w-6 animate-pulse" />}
          {alert.type === "hot" && <Flame className="h-6 w-6 animate-bounce" />}
          {alert.type === "milestone" && <span className="text-2xl">🎉</span>}
          {alert.type === "surge" && <TrendingUp className="h-6 w-6 animate-pulse" />}
        </div>

        <div className="flex-1">
          <p className="font-bold text-sm uppercase">{alert.message}</p>
          <p className="text-white/70 text-xs">{alert.subtext}</p>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-white/70 hover:text-white flex-shrink-0"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
