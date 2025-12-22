"use client"

import { useState, useEffect } from "react"
import { Zap, TrendingUp, Star } from "lucide-react"

const LEVELS = [
  { level: 1, name: "Wolf Pup", xpRequired: 0, color: "from-gray-500 to-gray-600" },
  { level: 2, name: "Young Wolf", xpRequired: 100, color: "from-green-500 to-green-600" },
  { level: 3, name: "Pack Member", xpRequired: 300, color: "from-blue-500 to-blue-600" },
  { level: 4, name: "Alpha Hunter", xpRequired: 600, color: "from-purple-500 to-purple-600" },
  { level: 5, name: "Chaos Bringer", xpRequired: 1000, color: "from-red-500 to-red-600" },
  { level: 6, name: "Insanity Master", xpRequired: 1500, color: "from-yellow-500 to-orange-500" },
  { level: 7, name: "Legendary Wolf", xpRequired: 2500, color: "from-pink-500 to-purple-500" },
  { level: 8, name: "GOD TIER", xpRequired: 5000, color: "from-yellow-400 to-yellow-600" },
]

const XP_ACTIONS = {
  visit: 10,
  memeView: 2,
  memeCreate: 25,
  memeDownload: 15,
  memeShare: 30,
  dailyStreak: 50,
  achievement: 100,
}

export function XPSystem() {
  const [xp, setXp] = useState(0)
  const [level, setLevel] = useState(LEVELS[0])
  const [showLevelUp, setShowLevelUp] = useState(false)
  const [xpGain, setXpGain] = useState<{ amount: number; action: string } | null>(null)

  useEffect(() => {
    // Load XP
    const storedXp = parseInt(localStorage.getItem("insanity-xp") || "0", 10)

    // Add visit XP if first visit today
    const lastVisit = localStorage.getItem("insanity-xp-last-visit")
    const today = new Date().toDateString()
    let newXp = storedXp

    if (lastVisit !== today) {
      newXp += XP_ACTIONS.visit
      localStorage.setItem("insanity-xp-last-visit", today)
      localStorage.setItem("insanity-xp", newXp.toString())

      // Show XP gain
      setTimeout(() => {
        setXpGain({ amount: XP_ACTIONS.visit, action: "Daily Visit" })
        setTimeout(() => setXpGain(null), 2000)
      }, 1500)
    }

    setXp(newXp)

    // Calculate level
    const currentLevel = [...LEVELS].reverse().find(l => newXp >= l.xpRequired) || LEVELS[0]
    setLevel(currentLevel)

    // Listen for XP gain events
    const handleXpGain = (e: CustomEvent<{ amount: number; action: string }>) => {
      const gainedXp = e.detail.amount
      const newTotal = newXp + gainedXp
      setXp(newTotal)
      localStorage.setItem("insanity-xp", newTotal.toString())

      // Check for level up
      const newLevel = [...LEVELS].reverse().find(l => newTotal >= l.xpRequired) || LEVELS[0]
      if (newLevel.level > currentLevel.level) {
        setLevel(newLevel)
        setShowLevelUp(true)
        setTimeout(() => setShowLevelUp(false), 3000)
      }

      // Show XP gain popup
      setXpGain(e.detail)
      setTimeout(() => setXpGain(null), 2000)
    }

    window.addEventListener("insanity-xp-gain" as any, handleXpGain as EventListener)
    return () => window.removeEventListener("insanity-xp-gain" as any, handleXpGain as EventListener)
  }, [])

  const nextLevel = LEVELS.find(l => l.xpRequired > xp) || LEVELS[LEVELS.length - 1]
  const prevLevelXp = level.xpRequired
  const progress = nextLevel.xpRequired > prevLevelXp
    ? ((xp - prevLevelXp) / (nextLevel.xpRequired - prevLevelXp)) * 100
    : 100

  return (
    <>
      {/* XP Bar - Fixed at top */}
      <div className="fixed top-10 left-0 right-0 z-30 h-1 bg-black/50">
        <div
          className={`h-full bg-gradient-to-r ${level.color} transition-all duration-500`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Level Badge */}
      <div className="fixed top-14 left-4 z-40">
        <div className={`flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${level.color} text-white text-xs font-bold uppercase shadow-lg`}>
          <Star className="h-3.5 w-3.5" />
          <span>Lv.{level.level}</span>
          <span className="opacity-70">{level.name}</span>
        </div>
      </div>

      {/* XP Gain Popup */}
      {xpGain && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[200] animate-in slide-in-from-bottom fade-in duration-300">
          <div className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 font-bold shadow-lg shadow-yellow-500/50">
            <Zap className="h-4 w-4" />
            <span>+{xpGain.amount} XP</span>
            <span className="opacity-70 text-sm">({xpGain.action})</span>
          </div>
        </div>
      )}

      {/* Level Up Celebration */}
      {showLevelUp && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center pointer-events-none">
          <div className="animate-in zoom-in-50 duration-500">
            <div className={`bg-gradient-to-r ${level.color} p-8 text-center shadow-2xl`}>
              <TrendingUp className="h-12 w-12 text-white mx-auto mb-4 animate-bounce" />
              <h2 className="text-3xl font-black text-white uppercase mb-2" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                LEVEL UP!
              </h2>
              <p className="text-white/90 text-xl font-bold">{level.name}</p>
              <p className="text-white/70 text-sm mt-2">Level {level.level} Achieved</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50 -z-10" />
        </div>
      )}
    </>
  )
}

// Helper to trigger XP gain from other components
export function gainXP(amount: number, action: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("insanity-xp-gain", { detail: { amount, action } }))
  }
}
