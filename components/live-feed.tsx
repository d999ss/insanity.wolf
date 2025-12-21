"use client"

import { useState, useEffect } from "react"
import { Zap, TrendingUp } from "lucide-react"

const activities = [
  { user: "Anonymous", action: "created a meme", time: "Just now" },
  { user: "WolfPack42", action: "voted", time: "2m ago" },
  { user: "ChaosKing", action: "shared a meme", time: "5m ago" },
  { user: "ExtremeSolver", action: "submitted challenge", time: "8m ago" },
  { user: "Anonymous", action: "created a meme", time: "12m ago" },
  { user: "InsanityFan", action: "voted", time: "15m ago" },
]

export function LiveFeed() {
  const [feed, setFeed] = useState(activities)
  const [newActivity, setNewActivity] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setNewActivity(true)
      setTimeout(() => {
        setFeed((prev) => {
          const newItem = {
            user: `User${Math.floor(Math.random() * 9999)}`,
            action: ["created a meme", "voted", "shared a meme"][Math.floor(Math.random() * 3)],
            time: "Just now",
          }
          return [newItem, ...prev.slice(0, 5)]
        })
        setNewActivity(false)
      }, 500)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="overflow-hidden border-2 border-border bg-card shadow-xl">
      <div className="border-b border-border bg-muted/50 px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center bg-primary/10">
              <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-sans text-sm md:text-lg font-black uppercase tracking-tight">Live Activity</h3>
              <p className="text-[10px] md:text-xs font-semibold text-muted-foreground">What's happening right now</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className={`h-2 w-2 bg-primary ${newActivity ? "animate-ping" : "animate-pulse"}`}></div>
            <span className="text-xs font-semibold text-primary">LIVE</span>
          </div>
        </div>
      </div>

      <div className="divide-y divide-border">
        {feed.map((activity, idx) => (
          <div
            key={idx}
            className={`px-4 py-3 md:px-6 md:py-4 transition-colors hover:bg-muted/30 ${idx === 0 && newActivity ? "bg-primary/5" : ""}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3">
                <Zap className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                <p className="text-xs md:text-sm">
                  <span className="font-bold text-foreground">{activity.user}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>
                </p>
              </div>
              <span className="text-[10px] md:text-xs font-semibold text-muted-foreground">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
