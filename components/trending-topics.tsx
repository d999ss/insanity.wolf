"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Flame, Zap, RefreshCw } from "lucide-react"

// Rotating trending topics (updated to feel current)
const TRENDING_TOPICS = [
  // Tech/Internet
  { topic: "AI TAKES MY JOB", category: "Tech", hot: true },
  { topic: "WIFI GOES DOWN", category: "Tech", hot: false },
  { topic: "PHONE DIES AT 1%", category: "Tech", hot: true },
  { topic: "CAPTCHA WON'T VERIFY", category: "Tech", hot: false },
  { topic: "SOFTWARE UPDATE REQUIRED", category: "Tech", hot: false },
  // Work
  { topic: "MEETING COULD'VE BEEN EMAIL", category: "Work", hot: true },
  { topic: "BOSS SENDS 'WE NEED TO TALK'", category: "Work", hot: true },
  { topic: "RETURN TO OFFICE MANDATE", category: "Work", hot: true },
  { topic: "COWORKER TAKES CREDIT", category: "Work", hot: false },
  { topic: "LAYOFFS ANNOUNCED", category: "Work", hot: true },
  // Life
  { topic: "GAS PRICES UP AGAIN", category: "Life", hot: true },
  { topic: "RENT DUE TOMORROW", category: "Life", hot: false },
  { topic: "GROCERIES COST $200", category: "Life", hot: true },
  { topic: "PACKAGE SAYS DELIVERED", category: "Life", hot: false },
  { topic: "FLIGHT GETS DELAYED", category: "Life", hot: true },
  // Social
  { topic: "LEFT ON READ", category: "Social", hot: false },
  { topic: "EX VIEWS YOUR STORY", category: "Social", hot: true },
  { topic: "FRIEND CANCELS LAST MINUTE", category: "Social", hot: false },
  { topic: "FAMILY GROUP CHAT", category: "Social", hot: true },
  { topic: "SOMEONE SPOILS THE SHOW", category: "Social", hot: true },
]

interface TrendingTopicsProps {
  onSelect: (topic: string) => void
}

export function TrendingTopics({ onSelect }: TrendingTopicsProps) {
  const [topics, setTopics] = useState<typeof TRENDING_TOPICS>([])
  const [isRefreshing, setIsRefreshing] = useState(false)

  const shuffleTopics = () => {
    setIsRefreshing(true)
    const shuffled = [...TRENDING_TOPICS].sort(() => Math.random() - 0.5).slice(0, 6)
    setTimeout(() => {
      setTopics(shuffled)
      setIsRefreshing(false)
    }, 300)
  }

  useEffect(() => {
    shuffleTopics()
  }, [])

  return (
    <div className="bg-red-950/20 border border-red-900/30 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-red-400" />
          <span className="font-mono text-xs uppercase text-white/70">Trending Problems</span>
        </div>
        <button
          onClick={shuffleTopics}
          className="flex items-center gap-1 text-xs text-white/50 hover:text-white transition-colors"
          disabled={isRefreshing}
        >
          <RefreshCw className={`h-3 w-3 ${isRefreshing ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {topics.map((item, i) => (
          <button
            key={i}
            onClick={() => onSelect(item.topic)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium transition-all hover:scale-105 ${
              item.hot
                ? "bg-gradient-to-r from-red-600 to-orange-600 text-white"
                : "bg-red-950/50 border border-red-900/50 text-red-400 hover:text-white hover:bg-red-900/50"
            }`}
          >
            {item.hot ? <Flame className="h-3 w-3" /> : <Zap className="h-3 w-3" />}
            {item.topic}
          </button>
        ))}
      </div>

      <p className="text-[10px] text-white/30 mt-3">
        Click a topic to use it as your problem. Add your insane solution!
      </p>
    </div>
  )
}
