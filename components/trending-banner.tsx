"use client"

import { useState, useEffect } from "react"
import { TrendingUp, X, Flame } from "lucide-react"

const trendingMessages = [
  { text: "TRENDING ON REDDIT", count: "2.4K upvotes today" },
  { text: "GOING VIRAL ON X", count: "847 shares this hour" },
  { text: "TOP MEME SITE", count: "#1 on meme rankings" },
  { text: "USERS ONLINE NOW", count: "1,247 creating memes" },
]

export function TrendingBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentMessage, setCurrentMessage] = useState(0)

  useEffect(() => {
    // Check if banner was dismissed in this session
    const dismissed = sessionStorage.getItem("banner-dismissed")
    if (dismissed) {
      setIsVisible(false)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % trendingMessages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem("banner-dismissed", "true")
  }

  if (!isVisible) return null

  const message = trendingMessages[currentMessage]

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white py-2 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-3 relative">
        <div className="flex items-center gap-2 animate-pulse">
          <Flame className="h-4 w-4" />
          <TrendingUp className="h-4 w-4" />
        </div>

        <div className="flex items-center gap-2 text-sm font-bold uppercase">
          <span className="hidden sm:inline">{message.text}:</span>
          <span className="bg-white/20 px-2 py-0.5 rounded text-xs tabular-nums">
            {message.count}
          </span>
          <span className="hidden md:inline text-white/80">- Join the chaos!</span>
        </div>

        <button
          onClick={handleDismiss}
          className="absolute right-0 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
