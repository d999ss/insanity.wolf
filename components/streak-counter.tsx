"use client"

import { useState, useEffect } from "react"
import { Flame, Trophy, Zap } from "lucide-react"

export function StreakCounter() {
  const [streak, setStreak] = useState(0)
  const [showBadge, setShowBadge] = useState(false)
  const [isNew, setIsNew] = useState(false)

  useEffect(() => {
    const today = new Date().toDateString()
    const lastVisit = localStorage.getItem("insanity-last-visit")
    const currentStreak = parseInt(localStorage.getItem("insanity-streak") || "0", 10)

    if (lastVisit === today) {
      // Already visited today
      setStreak(currentStreak)
    } else {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)

      if (lastVisit === yesterday.toDateString()) {
        // Continuing streak
        const newStreak = currentStreak + 1
        localStorage.setItem("insanity-streak", newStreak.toString())
        localStorage.setItem("insanity-last-visit", today)
        setStreak(newStreak)
        setIsNew(true)
      } else {
        // Streak broken or first visit
        localStorage.setItem("insanity-streak", "1")
        localStorage.setItem("insanity-last-visit", today)
        setStreak(1)
        setIsNew(currentStreak > 0 ? false : true)
      }
    }

    // Show badge after delay
    setTimeout(() => setShowBadge(true), 2000)
  }, [])

  if (!showBadge || streak === 0) return null

  const getStreakTitle = () => {
    if (streak >= 30) return "INSANITY MASTER"
    if (streak >= 14) return "CHAOS LORD"
    if (streak >= 7) return "WOLF PACK ELITE"
    if (streak >= 3) return "RISING WOLF"
    return "WOLF CUB"
  }

  const getStreakColor = () => {
    if (streak >= 30) return "from-purple-500 to-pink-500 border-purple-500"
    if (streak >= 14) return "from-yellow-500 to-orange-500 border-yellow-500"
    if (streak >= 7) return "from-red-500 to-orange-500 border-red-500"
    if (streak >= 3) return "from-red-600 to-red-700 border-red-600"
    return "from-red-700 to-red-800 border-red-700"
  }

  return (
    <div
      className={`fixed top-28 left-4 z-40 animate-in slide-in-from-left duration-500 ${isNew ? "animate-bounce" : ""}`}
    >
      <div className={`bg-gradient-to-r ${getStreakColor()} text-white px-3 py-2 shadow-lg flex items-center gap-2`}>
        <div className="relative">
          <Flame className="h-5 w-5" />
          {streak >= 7 && (
            <Zap className="h-3 w-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
          )}
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xs opacity-70">{getStreakTitle()}</span>
          <span className="font-bold text-sm">{streak} Day Streak</span>
        </div>
        {streak >= 30 && (
          <Trophy className="h-4 w-4 text-yellow-300 animate-pulse" />
        )}
      </div>
    </div>
  )
}
