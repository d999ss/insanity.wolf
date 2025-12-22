"use client"

import { useState, useEffect } from "react"
import { Gift, X, Sparkles, Clock } from "lucide-react"
import Link from "next/link"

export function ComebackBonus() {
  const [isVisible, setIsVisible] = useState(false)
  const [daysAway, setDaysAway] = useState(0)
  const [bonus, setBonus] = useState({ discount: 0, code: "" })

  useEffect(() => {
    const lastVisit = localStorage.getItem("insanity-last-visit-timestamp")
    const now = Date.now()

    if (lastVisit) {
      const daysSince = Math.floor((now - parseInt(lastVisit, 10)) / (1000 * 60 * 60 * 24))

      // If gone for 3+ days, show comeback bonus
      if (daysSince >= 3) {
        setDaysAway(daysSince)

        // Bigger bonus for longer absence
        let discount = 15
        let code = "WOLFBACK15"
        if (daysSince >= 7) {
          discount = 25
          code = "WOLFBACK25"
        } else if (daysSince >= 14) {
          discount = 35
          code = "WOLFBACK35"
        }

        setBonus({ discount, code })

        // Check if already shown this session
        const shown = sessionStorage.getItem("insanity-comeback-shown")
        if (!shown) {
          setTimeout(() => setIsVisible(true), 2000)
          sessionStorage.setItem("insanity-comeback-shown", "true")
        }
      }
    }

    // Update last visit timestamp
    localStorage.setItem("insanity-last-visit-timestamp", now.toString())
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[180] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90" onClick={() => setIsVisible(false)} />

      <div className="relative w-full max-w-sm animate-in zoom-in-95 duration-500">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 z-10 bg-white text-black p-1 hover:bg-gray-200"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="bg-gradient-to-br from-purple-900 to-purple-950 border-2 border-purple-400 p-6 text-center shadow-2xl shadow-purple-500/30">
          {/* Sparkle decoration */}
          <Sparkles className="absolute top-4 left-4 h-5 w-5 text-purple-300 animate-pulse" />
          <Sparkles className="absolute top-4 right-12 h-4 w-4 text-purple-300 animate-pulse" style={{ animationDelay: "0.5s" }} />

          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-600 border-4 border-purple-400 mb-3">
              <Gift className="h-10 w-10 text-white" />
            </div>

            <h2 className="text-2xl font-black text-white uppercase mb-1" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              WELCOME BACK, WOLF!
            </h2>

            <div className="flex items-center justify-center gap-1 text-purple-300 text-sm mb-4">
              <Clock className="h-4 w-4" />
              <span>It's been {daysAway} days since your last hunt</span>
            </div>
          </div>

          <div className="bg-black/30 border border-purple-500/50 p-4 mb-4">
            <p className="text-purple-200 text-sm mb-2">We missed you! Here's a special comeback gift:</p>
            <div className="text-4xl font-black text-white mb-1" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              {bonus.discount}% OFF
            </div>
            <p className="text-purple-300 text-xs">On all merch purchases</p>
            <div className="mt-3 bg-purple-950 border border-purple-600 px-3 py-2 inline-block">
              <span className="text-purple-300 text-xs">Code: </span>
              <span className="text-white font-mono font-bold">{bonus.code}</span>
            </div>
          </div>

          <Link
            href="/store"
            onClick={() => setIsVisible(false)}
            className="block w-full bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase py-3 transition-colors"
          >
            CLAIM MY BONUS →
          </Link>

          <p className="text-purple-400/60 text-xs mt-3">
            Expires in 24 hours • One-time use
          </p>
        </div>
      </div>
    </div>
  )
}
