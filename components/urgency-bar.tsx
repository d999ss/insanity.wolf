"use client"

import { useState, useEffect } from "react"
import { Clock, Users, Flame, TrendingUp } from "lucide-react"
import Link from "next/link"

export function UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const [viewers, setViewers] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after scrolling 200px
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    // Calculate time until midnight
    const updateTime = () => {
      const now = new Date()
      const midnight = new Date(now)
      midnight.setHours(24, 0, 0, 0)
      const diff = midnight.getTime() - now.getTime()

      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)

    // Simulate viewer count
    setViewers(Math.floor(Math.random() * 150) + 100)
    const viewerInterval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 5) - 2)
    }, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(timer)
      clearInterval(viewerInterval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-12 left-0 right-0 z-[35] animate-in slide-in-from-bottom duration-500">
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-4 text-xs sm:text-sm">
          {/* Left - Timer */}
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 animate-pulse" />
            <span className="font-bold">DEAL ENDS:</span>
            <div className="flex items-center gap-1 font-mono font-bold">
              <span className="bg-black/30 px-1.5 py-0.5">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span>:</span>
              <span className="bg-black/30 px-1.5 py-0.5">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span>:</span>
              <span className="bg-black/30 px-1.5 py-0.5">{String(timeLeft.seconds).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Center - Viewers */}
          <div className="hidden md:flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="font-bold">{viewers} viewing</span>
            <span className="text-white/70">|</span>
            <Flame className="h-4 w-4" />
            <span className="font-bold">47 created in last hour</span>
          </div>

          {/* Right - CTA */}
          <Link
            href="/"
            className="flex items-center gap-2 bg-white text-red-600 font-bold px-4 py-1.5 hover:bg-yellow-300 transition-colors"
          >
            <TrendingUp className="h-4 w-4" />
            <span className="hidden sm:inline">CREATE NOW</span>
            <span className="sm:hidden">GO</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
