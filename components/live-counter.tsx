"use client"

import { useState, useEffect } from "react"
import { Activity } from "lucide-react"

export function LiveCounter() {
  const [count, setCount] = useState(847)
  const [recentAction, setRecentAction] = useState("")

  const actions = [
    "Someone in California just made a meme",
    "A meme was shared to Reddit",
    "New meme created in London",
    "Someone challenged their friend",
    "Meme battle vote in Tokyo",
    "New user from Germany",
    "Meme downloaded in Brazil",
    "Someone went MAXIMUM INSANITY",
    "Meme shared on X/Twitter",
    "New chaos unleashed in Australia",
  ]

  const locations = [
    "California", "New York", "London", "Tokyo", "Sydney",
    "Berlin", "Paris", "Toronto", "Singapore", "Dubai"
  ]

  useEffect(() => {
    // Random count fluctuation
    const countInterval = setInterval(() => {
      setCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2 // -2 to +2
        return Math.max(500, Math.min(2000, prev + change))
      })
    }, 3000)

    // Random action updates
    const actionInterval = setInterval(() => {
      const action = actions[Math.floor(Math.random() * actions.length)]
      setRecentAction(action)
    }, 5000)

    // Initial action
    setRecentAction(actions[Math.floor(Math.random() * actions.length)])

    return () => {
      clearInterval(countInterval)
      clearInterval(actionInterval)
    }
  }, [])

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
      <div className="bg-black/90 border border-red-900/50 p-3 backdrop-blur-sm max-w-xs">
        <div className="flex items-center gap-2 mb-2">
          <div className="relative">
            <Activity className="h-4 w-4 text-green-500" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full animate-ping" />
          </div>
          <span className="text-green-500 font-mono text-xs font-bold">
            {count.toLocaleString()} ONLINE NOW
          </span>
        </div>
        {recentAction && (
          <p className="text-red-400/60 text-[10px] font-mono animate-pulse truncate">
            {recentAction}
          </p>
        )}
      </div>
    </div>
  )
}
