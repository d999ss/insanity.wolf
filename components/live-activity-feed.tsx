"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Zap } from "lucide-react"

const USERNAMES = [
  "ChaosKing420", "WolfMaster99", "MemeDestroyer", "RageWolf2024", "InsanityQueen",
  "DarkWolf666", "ChaoticNeutral", "WolfPack_Alpha", "MemeWarrior", "NightHowler",
  "ShadowWolf", "CrypticMemer", "WildOne2024", "StormBringer", "FireWolf",
  "IceWolf", "ThunderPaw", "MidnightHowl", "RedFang", "BlackWolf",
  "GhostWolf", "SilverMoon", "BloodMoon", "DarkMatter", "CosmicWolf",
]

const ACTIONS = [
  { text: "just created a meme", emoji: "🔥" },
  { text: "downloaded their meme", emoji: "⬇️" },
  { text: "shared to Twitter", emoji: "🐦" },
  { text: "ordered a t-shirt", emoji: "👕" },
  { text: "went EXTREME mode", emoji: "💀" },
  { text: "challenged a friend", emoji: "⚔️" },
  { text: "hit level up!", emoji: "⬆️" },
  { text: "unlocked an achievement", emoji: "🏆" },
]

const LOCATIONS = [
  "New York", "Los Angeles", "Chicago", "Houston", "Miami", "Seattle",
  "London", "Toronto", "Sydney", "Berlin", "Tokyo", "Paris",
  "Amsterdam", "Dublin", "Melbourne", "Vancouver", "Austin", "Denver",
]

export function LiveActivityFeed() {
  const pathname = usePathname()
  const [activities, setActivities] = useState<Array<{
    id: number
    username: string
    action: typeof ACTIONS[0]
    location: string
    time: string
  }>>([])

  useEffect(() => {
    // Generate initial activities
    const initial = Array.from({ length: 3 }, (_, i) => ({
      id: Date.now() - i * 1000,
      username: USERNAMES[Math.floor(Math.random() * USERNAMES.length)],
      action: ACTIONS[Math.floor(Math.random() * ACTIONS.length)],
      location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
      time: "just now",
    }))
    setActivities(initial)

    // Add new activity every 3-8 seconds
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        username: USERNAMES[Math.floor(Math.random() * USERNAMES.length)],
        action: ACTIONS[Math.floor(Math.random() * ACTIONS.length)],
        location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
        time: "just now",
      }

      setActivities(prev => {
        const updated = [newActivity, ...prev.slice(0, 4)]
        // Update times
        return updated.map((a, i) => ({
          ...a,
          time: i === 0 ? "just now" : i === 1 ? "1m ago" : `${i + 1}m ago`
        }))
      })
    }, Math.random() * 5000 + 3000)

    return () => clearInterval(interval)
  }, [])

  // Don't show on pages where it would block content
  const hiddenPages = ["/", "/create", "/merch", "/store", "/battle", "/gallery", "/poster", "/widget", "/wiki"]
  if (hiddenPages.includes(pathname)) {
    return null
  }

  return (
    <div className="fixed left-4 top-1/3 z-30 hidden lg:block w-64">
      <div className="bg-black/90 border border-red-900/50 shadow-xl">
        <div className="bg-red-600 px-3 py-2 flex items-center gap-2">
          <div className="relative">
            <Zap className="h-4 w-4 text-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full" />
          </div>
          <span className="text-white text-xs font-bold uppercase">Live Activity</span>
        </div>

        <div className="p-2 space-y-2 max-h-64 overflow-hidden">
          {activities.map((activity, idx) => (
            <div
              key={activity.id}
              className={`text-xs p-2 border-l-2 border-red-500/50 bg-red-950/20 transition-all ${idx === 0 ? "animate-in slide-in-from-top" : ""}`}
            >
              <div className="flex items-start gap-2">
                <span className="text-lg">{activity.action.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white truncate">
                    <span className="font-bold text-red-400">{activity.username}</span>
                    {" "}{activity.action.text}
                  </p>
                  <p className="text-white/40 text-[10px]">
                    {activity.location} • {activity.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-red-900/50 px-3 py-2 text-center">
          <span className="text-green-400 text-xs font-bold animate-pulse">
            🟢 {Math.floor(Math.random() * 200) + 150} users online now
          </span>
        </div>
      </div>
    </div>
  )
}
