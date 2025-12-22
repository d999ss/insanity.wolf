"use client"

import { useState, useEffect } from "react"
import { Trophy, X, Star, Zap, Flame, Crown, Skull, Target } from "lucide-react"

interface Achievement {
  id: string
  title: string
  description: string
  icon: "trophy" | "star" | "zap" | "flame" | "crown" | "skull" | "target"
  rarity: "common" | "rare" | "epic" | "legendary"
}

const ACHIEVEMENTS: Achievement[] = [
  { id: "first-visit", title: "WOLF CUB", description: "Welcome to the pack!", icon: "star", rarity: "common" },
  { id: "first-meme", title: "CHAOS INITIATED", description: "Created your first meme", icon: "zap", rarity: "common" },
  { id: "gallery-explorer", title: "MEME ARCHAEOLOGIST", description: "Browsed 20+ memes", icon: "target", rarity: "common" },
  { id: "share-master", title: "VIRAL SPREADER", description: "Shared a meme", icon: "flame", rarity: "rare" },
  { id: "night-owl", title: "MIDNIGHT WOLF", description: "Creating memes after midnight", icon: "skull", rarity: "rare" },
  { id: "weekend-warrior", title: "WEEKEND WARRIOR", description: "Making memes on the weekend", icon: "trophy", rarity: "rare" },
  { id: "early-bird", title: "DAWN PREDATOR", description: "Active before 7 AM", icon: "crown", rarity: "epic" },
  { id: "dedication", title: "TRUE INSANITY", description: "5+ day streak", icon: "crown", rarity: "legendary" },
]

const ICONS = {
  trophy: Trophy,
  star: Star,
  zap: Zap,
  flame: Flame,
  crown: Crown,
  skull: Skull,
  target: Target,
}

const RARITY_COLORS = {
  common: "from-gray-500 to-gray-600 border-gray-500",
  rare: "from-blue-500 to-blue-600 border-blue-500",
  epic: "from-purple-500 to-purple-600 border-purple-500",
  legendary: "from-yellow-500 to-orange-500 border-yellow-500",
}

const RARITY_GLOW = {
  common: "shadow-gray-500/30",
  rare: "shadow-blue-500/30",
  epic: "shadow-purple-500/50",
  legendary: "shadow-yellow-500/50",
}

export function AchievementPopup() {
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null)
  const [queue, setQueue] = useState<Achievement[]>([])

  useEffect(() => {
    const unlocked = JSON.parse(localStorage.getItem("insanity-achievements") || "[]")
    const toUnlock: Achievement[] = []

    // Check for first visit
    if (!unlocked.includes("first-visit")) {
      toUnlock.push(ACHIEVEMENTS.find(a => a.id === "first-visit")!)
    }

    // Check time-based achievements
    const hour = new Date().getHours()
    const day = new Date().getDay()

    if (hour >= 0 && hour < 5 && !unlocked.includes("night-owl")) {
      toUnlock.push(ACHIEVEMENTS.find(a => a.id === "night-owl")!)
    }

    if (hour >= 5 && hour < 7 && !unlocked.includes("early-bird")) {
      toUnlock.push(ACHIEVEMENTS.find(a => a.id === "early-bird")!)
    }

    if ((day === 0 || day === 6) && !unlocked.includes("weekend-warrior")) {
      toUnlock.push(ACHIEVEMENTS.find(a => a.id === "weekend-warrior")!)
    }

    // Check streak
    const streak = parseInt(localStorage.getItem("insanity-streak") || "0", 10)
    if (streak >= 5 && !unlocked.includes("dedication")) {
      toUnlock.push(ACHIEVEMENTS.find(a => a.id === "dedication")!)
    }

    // Random chance for gallery explorer (simulate)
    const visits = parseInt(localStorage.getItem("insanity-page-views") || "0", 10) + 1
    localStorage.setItem("insanity-page-views", visits.toString())
    if (visits >= 5 && !unlocked.includes("gallery-explorer") && Math.random() > 0.7) {
      toUnlock.push(ACHIEVEMENTS.find(a => a.id === "gallery-explorer")!)
    }

    if (toUnlock.length > 0) {
      // Save all as unlocked
      const newUnlocked = [...unlocked, ...toUnlock.map(a => a.id)]
      localStorage.setItem("insanity-achievements", JSON.stringify(newUnlocked))
      setQueue(toUnlock)
    }
  }, [])

  useEffect(() => {
    if (queue.length > 0 && !currentAchievement) {
      // Show next achievement after delay
      const timer = setTimeout(() => {
        setCurrentAchievement(queue[0])
        setQueue(q => q.slice(1))
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [queue, currentAchievement])

  useEffect(() => {
    if (currentAchievement) {
      // Auto-dismiss after 5 seconds
      const timer = setTimeout(() => {
        setCurrentAchievement(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [currentAchievement])

  if (!currentAchievement) return null

  const Icon = ICONS[currentAchievement.icon]

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[150] animate-in zoom-in-95 duration-300">
      <div className={`relative bg-black border-2 ${RARITY_COLORS[currentAchievement.rarity].split(' ')[2]} p-6 shadow-2xl ${RARITY_GLOW[currentAchievement.rarity]} min-w-[280px]`}>
        <button
          onClick={() => setCurrentAchievement(null)}
          className="absolute top-2 right-2 text-white/50 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-center">
          <div className="text-xs uppercase text-white/50 mb-2 tracking-widest">Achievement Unlocked</div>

          <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${RARITY_COLORS[currentAchievement.rarity]} flex items-center justify-center mb-3 animate-pulse`}>
            <Icon className="h-8 w-8 text-white" />
          </div>

          <h3 className="text-xl font-black uppercase text-white mb-1" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            {currentAchievement.title}
          </h3>

          <p className="text-white/70 text-sm mb-3">{currentAchievement.description}</p>

          <div className={`inline-block px-3 py-1 text-xs uppercase font-bold bg-gradient-to-r ${RARITY_COLORS[currentAchievement.rarity]}`}>
            {currentAchievement.rarity}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 -z-10" onClick={() => setCurrentAchievement(null)} />
    </div>
  )
}
