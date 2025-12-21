"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Trophy, Clock, Zap, Users } from "lucide-react"

const challenges = [
  { prompt: "Getting stuck in traffic", difficulty: "EASY", timeLimit: "24h", participants: 1247 },
  { prompt: "Forgot your phone charger", difficulty: "MEDIUM", timeLimit: "24h", participants: 893 },
  { prompt: "Neighbor plays loud music", difficulty: "HARD", timeLimit: "24h", participants: 2103 },
  { prompt: "Coffee machine broke", difficulty: "INSANE", timeLimit: "24h", participants: 567 },
]

export function DailyChallenge() {
  const [currentChallenge] = useState(challenges[Math.floor(Date.now() / (24 * 60 * 60 * 1000)) % challenges.length])
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const tomorrow = new Date(now)
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(0, 0, 0, 0)

      const diff = tomorrow.getTime() - now.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

      setTimeLeft(`${hours}h ${minutes}m`)
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-primary bg-gradient-to-br from-card via-primary/5 to-card shadow-xl">
      <div className="border-b border-primary/20 bg-primary/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-sans text-lg font-black uppercase tracking-tight">Daily Challenge</h3>
              <p className="text-xs font-semibold text-muted-foreground">Create the most extreme solution</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-primary bg-background px-3 py-1.5">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-primary">{timeLeft}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Today's Problem</span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide ${
                currentChallenge.difficulty === "INSANE"
                  ? "bg-primary text-primary-foreground"
                  : currentChallenge.difficulty === "HARD"
                    ? "bg-destructive/20 text-destructive"
                    : currentChallenge.difficulty === "MEDIUM"
                      ? "bg-yellow-500/20 text-yellow-600"
                      : "bg-green-500/20 text-green-600"
              }`}
            >
              {currentChallenge.difficulty}
            </span>
          </div>

          <p className="font-sans text-2xl font-black uppercase leading-tight tracking-tight text-foreground">
            {currentChallenge.prompt}
          </p>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span className="font-semibold">{currentChallenge.participants.toLocaleString()} participating</span>
            </div>
          </div>
        </div>

        <Button className="w-full gap-2 font-bold" size="lg">
          <Zap className="h-4 w-4" />
          SUBMIT YOUR SOLUTION
        </Button>
      </div>
    </div>
  )
}
