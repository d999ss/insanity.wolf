"use client"

import { useState, useEffect } from "react"
import { Target, X, Clock, Users, ChevronRight } from "lucide-react"
import Link from "next/link"

const CHALLENGES = [
  { theme: "WORKPLACE RAGE", prompt: "Create a meme about office life gone wrong", participants: 2847 },
  { theme: "TECH FRUSTRATION", prompt: "When technology betrays you...", participants: 3521 },
  { theme: "MONDAY MADNESS", prompt: "Express your Monday morning feelings", participants: 4102 },
  { theme: "RELATIONSHIP CHAOS", prompt: "When love gets too real", participants: 1893 },
  { theme: "FOOD FURY", prompt: "Hunger-induced insanity", participants: 2156 },
  { theme: "SOCIAL MEDIA MELTDOWN", prompt: "Online life gone wrong", participants: 3789 },
  { theme: "ADULTING FAILS", prompt: "When being a grown-up is too hard", participants: 4521 },
]

export function DailyChallenge() {
  const [isVisible, setIsVisible] = useState(false)
  const [challenge, setChallenge] = useState(CHALLENGES[0])
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)
    const todayChallenge = CHALLENGES[dayOfYear % CHALLENGES.length]

    const now = new Date()
    const midnight = new Date(now)
    midnight.setHours(24, 0, 0, 0)
    const diff = midnight.getTime() - now.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    setChallenge({
      ...todayChallenge,
      participants: todayChallenge.participants + Math.floor(Math.random() * 500),
    })
    setTimeLeft(`${hours}h ${minutes}m`)

    const dismissed = localStorage.getItem("insanity-challenge-dismissed")
    const today = new Date().toDateString()
    if (dismissed === today) return

    const timer = setTimeout(() => setIsVisible(true), 25000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const midnight = new Date(now)
      midnight.setHours(24, 0, 0, 0)
      const diff = midnight.getTime() - now.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      setTimeLeft(`${hours}h ${minutes}m`)
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("insanity-challenge-dismissed", new Date().toDateString())
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-[100] animate-in slide-in-from-right duration-500 w-80">
      <div className="bg-black border-2 border-orange-500 shadow-xl shadow-orange-500/20">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-white" />
            <span className="text-white font-bold uppercase text-sm">Daily Challenge</span>
          </div>
          <button onClick={handleDismiss} className="text-white/70 hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4">
          <div className="mb-3">
            <h4 className="text-white font-black uppercase text-lg" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              {challenge.theme}
            </h4>
            <p className="text-orange-300/70 text-sm">{challenge.prompt}</p>
          </div>
          <div className="flex items-center gap-4 mb-4 text-xs">
            <div className="flex items-center gap-1 text-white/60">
              <Users className="h-3.5 w-3.5" />
              <span>{challenge.participants.toLocaleString()} joined</span>
            </div>
            <div className="flex items-center gap-1 text-orange-400">
              <Clock className="h-3.5 w-3.5" />
              <span>{timeLeft} left</span>
            </div>
          </div>
          <Link
            href="/"
            onClick={handleDismiss}
            className="flex items-center justify-center gap-2 w-full bg-orange-600 hover:bg-orange-500 text-white font-bold uppercase py-2.5 text-sm transition-colors"
          >
            ACCEPT CHALLENGE
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
