"use client"

import { useState, useEffect } from "react"

export function WolfHowl() {
  const [isHowling, setIsHowling] = useState(false)
  const [position, setPosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleHowl = (e: CustomEvent<{ x?: number; y?: number }>) => {
      setPosition({ x: e.detail?.x || 50, y: e.detail?.y || 50 })
      setIsHowling(true)
      setTimeout(() => setIsHowling(false), 1500)
    }

    window.addEventListener("insanity-wolf-howl" as any, handleHowl as EventListener)
    return () => window.removeEventListener("insanity-wolf-howl" as any, handleHowl as EventListener)
  }, [])

  if (!isHowling) return null

  return (
    <div
      className="fixed z-[400] pointer-events-none"
      style={{ left: `${position.x}%`, top: `${position.y}%`, transform: "translate(-50%, -50%)" }}
    >
      {/* Shockwave rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-32 h-32 border-4 border-red-500 rounded-full animate-ping opacity-75" />
        <div className="absolute w-48 h-48 border-2 border-red-400 rounded-full animate-ping opacity-50" style={{ animationDelay: "0.2s" }} />
        <div className="absolute w-64 h-64 border border-red-300 rounded-full animate-ping opacity-25" style={{ animationDelay: "0.4s" }} />
      </div>

      {/* Central wolf icon with glow */}
      <div className="relative">
        <div className="absolute inset-0 blur-xl bg-red-500 opacity-75 animate-pulse" style={{ width: 80, height: 80, borderRadius: "50%" }} />
        <div
          className="relative text-6xl animate-bounce"
          style={{
            filter: "drop-shadow(0 0 20px rgba(255,0,0,0.8)) drop-shadow(0 0 40px rgba(255,0,0,0.5))",
            animation: "howlScale 0.5s ease-out"
          }}
        >
          🐺
        </div>
      </div>

      {/* Floating text */}
      <div
        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap"
        style={{ animation: "floatUp 1s ease-out forwards" }}
      >
        <span
          className="text-xl font-black text-white uppercase"
          style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            textShadow: "0 0 10px rgba(255,0,0,0.8), 0 0 20px rgba(255,0,0,0.5), -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000"
          }}
        >
          AWOOOO!
        </span>
      </div>

      <style jsx>{`
        @keyframes howlScale {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes floatUp {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-30px); }
        }
      `}</style>
    </div>
  )
}

// Helper to trigger howl
export function triggerWolfHowl(x?: number, y?: number) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("insanity-wolf-howl", { detail: { x, y } }))
  }
}
