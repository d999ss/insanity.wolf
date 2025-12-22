"use client"

import { useState, useEffect } from "react"
import { X, Flame, AlertTriangle } from "lucide-react"

export function ExitIntent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if already shown
    const shown = sessionStorage.getItem("exit-intent-shown")
    if (shown) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from top
      if (e.clientY <= 0) {
        setIsVisible(true)
        sessionStorage.setItem("exit-intent-shown", "true")
        document.removeEventListener("mouseleave", handleMouseLeave)
      }
    }

    // Add delay before enabling exit intent
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90" onClick={() => setIsVisible(false)} />

      <div className="relative w-full max-w-lg bg-gradient-to-br from-red-950 to-black border-2 border-red-500 p-8 shadow-2xl shadow-red-500/30 animate-in zoom-in-95 duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-red-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-600/30 border-2 border-red-500 mb-6 animate-pulse">
            <AlertTriangle className="h-10 w-10 text-red-500" />
          </div>

          <h3 className="text-3xl font-black uppercase text-white mb-3" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            WAIT! DON'T LEAVE!
          </h3>

          <p className="text-red-300/80 mb-6 text-lg">
            You haven't made a meme yet! The wolf demands CHAOS!
          </p>

          <div className="space-y-3">
            <a
              href="/#forge"
              onClick={() => setIsVisible(false)}
              className="w-full h-14 bg-red-600 hover:bg-red-500 text-white font-black uppercase flex items-center justify-center gap-3 transition-all hover:scale-105 text-lg"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              <Flame className="h-6 w-6" />
              CREATE A MEME NOW
            </a>

            <button
              onClick={() => setIsVisible(false)}
              className="w-full py-3 text-red-400/60 hover:text-red-400 text-sm transition-colors"
            >
              No thanks, I hate fun
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
