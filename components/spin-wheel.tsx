"use client"

import { useState, useEffect } from "react"
import { X, Gift, Sparkles } from "lucide-react"
import Link from "next/link"

const PRIZES = [
  { label: "10% OFF", code: "WOLF10", color: "#dc2626" },
  { label: "TRY AGAIN", code: null, color: "#1f2937" },
  { label: "15% OFF", code: "WOLF15", color: "#7c3aed" },
  { label: "TRY AGAIN", code: null, color: "#1f2937" },
  { label: "20% OFF", code: "WOLF20", color: "#059669" },
  { label: "TRY AGAIN", code: null, color: "#1f2937" },
  { label: "FREE SHIP", code: "FREESHIP", color: "#2563eb" },
  { label: "TRY AGAIN", code: null, color: "#1f2937" },
]

export function SpinWheel() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [prize, setPrize] = useState<typeof PRIZES[0] | null>(null)
  const [hasClaimed, setHasClaimed] = useState(false)

  useEffect(() => {
    // Check if already spun
    const hasSpun = localStorage.getItem("insanity-wheel-spun")
    if (hasSpun) return

    // Show after 60 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 60000)

    return () => clearTimeout(timer)
  }, [])

  const handleSpin = () => {
    if (isSpinning || prize) return

    setIsSpinning(true)

    // Always land on a winning segment (rigged for good UX)
    const winningIndices = [0, 2, 4, 6] // 10%, 15%, 20%, FREE SHIP
    const selectedIndex = winningIndices[Math.floor(Math.random() * winningIndices.length)]

    // Calculate rotation to land on selected prize
    const segmentAngle = 360 / PRIZES.length
    const targetAngle = 360 - (selectedIndex * segmentAngle) - (segmentAngle / 2)
    const spins = 5 // Number of full rotations
    const finalRotation = (spins * 360) + targetAngle + (Math.random() * 20 - 10)

    setRotation(finalRotation)

    setTimeout(() => {
      setIsSpinning(false)
      setPrize(PRIZES[selectedIndex])
      localStorage.setItem("insanity-wheel-spun", "true")
      localStorage.setItem("insanity-discount-code", PRIZES[selectedIndex].code || "")
    }, 4000)
  }

  const handleDismiss = () => {
    setIsVisible(false)
    if (!prize) {
      localStorage.setItem("insanity-wheel-spun", "true")
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90" onClick={handleDismiss} />

      <div className="relative w-full max-w-sm bg-black border-2 border-red-500 shadow-2xl shadow-red-500/30 animate-in zoom-in-95 p-6">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 z-10 text-red-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
            <h3 className="text-xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              SPIN TO WIN!
            </h3>
            <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-red-300/70 text-sm">Win exclusive merch discounts!</p>
        </div>

        {/* Wheel */}
        <div className="relative w-64 h-64 mx-auto mb-4">
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
            <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-yellow-400" />
          </div>

          {/* Wheel */}
          <div
            className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden transition-transform"
            style={{
              transform: `rotate(${rotation}deg)`,
              transitionDuration: isSpinning ? "4s" : "0s",
              transitionTimingFunction: "cubic-bezier(0.17, 0.67, 0.12, 0.99)",
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {PRIZES.map((p, i) => {
                const angle = (360 / PRIZES.length) * i
                const startAngle = (angle - 90) * (Math.PI / 180)
                const endAngle = (angle + 360 / PRIZES.length - 90) * (Math.PI / 180)
                const x1 = 50 + 50 * Math.cos(startAngle)
                const y1 = 50 + 50 * Math.sin(startAngle)
                const x2 = 50 + 50 * Math.cos(endAngle)
                const y2 = 50 + 50 * Math.sin(endAngle)
                const largeArc = 360 / PRIZES.length > 180 ? 1 : 0

                return (
                  <g key={i}>
                    <path
                      d={`M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArc} 1 ${x2} ${y2} Z`}
                      fill={p.color}
                      stroke="#000"
                      strokeWidth="0.5"
                    />
                    <text
                      x="50"
                      y="20"
                      fill="white"
                      fontSize="5"
                      fontWeight="bold"
                      textAnchor="middle"
                      transform={`rotate(${angle + 360 / PRIZES.length / 2}, 50, 50)`}
                    >
                      {p.label}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black border-4 border-yellow-400 flex items-center justify-center">
            <Gift className="h-6 w-6 text-yellow-400" />
          </div>
        </div>

        {prize ? (
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 mb-4">
              <p className="text-white font-black text-2xl uppercase" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                🎉 YOU WON {prize.label}!
              </p>
              {prize.code && (
                <p className="text-white/80 text-sm mt-1">
                  Code: <span className="font-mono font-bold">{prize.code}</span>
                </p>
              )}
            </div>
            <Link
              href="/store"
              onClick={handleDismiss}
              className="block w-full bg-red-600 hover:bg-red-500 text-white font-black uppercase py-3 transition-colors"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              CLAIM NOW →
            </Link>
          </div>
        ) : (
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className={`w-full py-3 font-black uppercase text-white transition-all ${
              isSpinning
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-500 hover:scale-105"
            }`}
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            {isSpinning ? "SPINNING..." : "SPIN THE WHEEL!"}
          </button>
        )}
      </div>
    </div>
  )
}
