"use client"

import { useState, useEffect } from "react"
import { Clock, Zap } from "lucide-react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    // Get or set end time in localStorage
    let endTime = localStorage.getItem("sale-end-time")
    if (!endTime) {
      // Set to 24 hours from now
      const end = Date.now() + 24 * 60 * 60 * 1000
      localStorage.setItem("sale-end-time", end.toString())
      endTime = end.toString()
    }

    const updateTimer = () => {
      const now = Date.now()
      const end = parseInt(endTime!)
      const diff = end - now

      if (diff <= 0) {
        // Reset timer
        const newEnd = Date.now() + 24 * 60 * 60 * 1000
        localStorage.setItem("sale-end-time", newEnd.toString())
        return
      }

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft({ hours, minutes, seconds })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => n.toString().padStart(2, "0")

  return (
    <div className="bg-gradient-to-r from-red-950/50 via-red-900/30 to-red-950/50 border-y border-red-500/50 py-3 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-yellow-500 animate-pulse" />
          <span className="text-yellow-400 text-xs md:text-sm font-bold uppercase">
            FLASH SALE: 20% OFF EVERYTHING
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-red-400" />
          <span className="text-white text-sm font-mono font-bold">
            ENDS IN:{" "}
            <span className="bg-red-600 px-2 py-0.5 mx-0.5">{pad(timeLeft.hours)}</span>:
            <span className="bg-red-600 px-2 py-0.5 mx-0.5">{pad(timeLeft.minutes)}</span>:
            <span className="bg-red-600 px-2 py-0.5 mx-0.5">{pad(timeLeft.seconds)}</span>
          </span>
        </div>

        <a
          href="/store"
          className="text-yellow-400 hover:text-yellow-300 text-xs font-bold uppercase underline underline-offset-2"
        >
          SHOP NOW →
        </a>
      </div>
    </div>
  )
}
