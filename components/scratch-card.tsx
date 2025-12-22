"use client"

import { useState, useEffect, useRef } from "react"
import { Gift, X, Sparkles } from "lucide-react"
import Link from "next/link"

const PRIZES = [
  { discount: 15, code: "SCRATCH15", message: "15% OFF!" },
  { discount: 20, code: "SCRATCH20", message: "20% OFF!" },
  { discount: 25, code: "SCRATCH25", message: "25% OFF!" },
  { discount: 30, code: "SCRATCH30", message: "30% OFF!" },
]

export function ScratchCard() {
  const [isVisible, setIsVisible] = useState(false)
  const [isRevealed, setIsRevealed] = useState(false)
  const [prize, setPrize] = useState(PRIZES[0])
  const [scratchProgress, setScratchProgress] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isScratching = useRef(false)

  useEffect(() => {
    const scratched = localStorage.getItem("insanity-scratch-done")
    if (scratched) return

    // Show after 80 seconds
    const timer = setTimeout(() => {
      // Pick prize (weighted towards lower discounts)
      const rand = Math.random()
      if (rand < 0.4) setPrize(PRIZES[0])
      else if (rand < 0.7) setPrize(PRIZES[1])
      else if (rand < 0.9) setPrize(PRIZES[2])
      else setPrize(PRIZES[3])

      setIsVisible(true)
    }, 80000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Draw scratch layer
    ctx.fillStyle = "#444"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add some texture
    for (let i = 0; i < 1000; i++) {
      ctx.fillStyle = `rgba(100, 100, 100, ${Math.random() * 0.3})`
      ctx.fillRect(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        2,
        2
      )
    }

    // Add text
    ctx.fillStyle = "#666"
    ctx.font = "bold 16px Arial"
    ctx.textAlign = "center"
    ctx.fillText("SCRATCH HERE!", canvas.width / 2, canvas.height / 2)
  }, [isVisible])

  const handleScratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (isRevealed || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    let x, y

    if ("touches" in e) {
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      x = e.clientX - rect.left
      y = e.clientY - rect.top
    }

    ctx.globalCompositeOperation = "destination-out"
    ctx.beginPath()
    ctx.arc(x, y, 20, 0, Math.PI * 2)
    ctx.fill()

    // Calculate progress
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    let transparent = 0
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++
    }
    const progress = (transparent / (imageData.data.length / 4)) * 100

    setScratchProgress(progress)

    if (progress > 50 && !isRevealed) {
      setIsRevealed(true)
      localStorage.setItem("insanity-scratch-done", "true")
      localStorage.setItem("insanity-scratch-code", prize.code)
    }
  }

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("insanity-scratch-done", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[210] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90" onClick={handleDismiss} />

      <div className="relative w-full max-w-sm animate-in zoom-in-95">
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 z-10 bg-white text-black p-1 hover:bg-gray-200"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="bg-gradient-to-br from-yellow-500 via-yellow-400 to-orange-500 p-1">
          <div className="bg-black p-6">
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
                <span className="text-yellow-400 font-black uppercase text-lg">Mystery Discount!</span>
                <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
              </div>
              <p className="text-white/70 text-sm">Scratch to reveal your exclusive discount!</p>
            </div>

            {/* Scratch area */}
            <div className="relative mx-auto w-64 h-32 mb-4">
              {/* Prize underneath */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 flex flex-col items-center justify-center">
                <Gift className="h-8 w-8 text-white mb-2" />
                <span className="text-3xl font-black text-white">{prize.message}</span>
                <span className="text-white/80 text-sm">Code: {prize.code}</span>
              </div>

              {/* Scratch canvas */}
              <canvas
                ref={canvasRef}
                width={256}
                height={128}
                className="absolute inset-0 cursor-pointer touch-none"
                onMouseMove={(e) => isScratching.current && handleScratch(e)}
                onMouseDown={() => { isScratching.current = true }}
                onMouseUp={() => { isScratching.current = false }}
                onMouseLeave={() => { isScratching.current = false }}
                onTouchMove={handleScratch}
                style={{ opacity: isRevealed ? 0 : 1, transition: "opacity 0.5s" }}
              />
            </div>

            {isRevealed ? (
              <div className="space-y-3">
                <div className="text-center">
                  <p className="text-green-400 font-bold text-lg animate-bounce">🎉 CONGRATULATIONS! 🎉</p>
                </div>
                <Link
                  href="/store"
                  onClick={handleDismiss}
                  className="block w-full text-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold uppercase py-3 transition-all"
                >
                  USE CODE: {prize.code}
                </Link>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-white/50 text-xs">
                  {scratchProgress > 0 ? `${Math.round(scratchProgress)}% revealed...` : "Use your finger or mouse to scratch!"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
