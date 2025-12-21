"use client"

import { Button } from "@/components/ui/button"
import { Shuffle, Flame, Skull } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import galleryImages from "@/lib/gallery-images.json"

export function RandomMeme() {
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [spinCount, setSpinCount] = useState(0)

  useEffect(() => {
    const images = galleryImages as string[]
    setCurrentImage(images[Math.floor(Math.random() * images.length)])
  }, [])

  const getRandomMeme = useCallback(() => {
    if (isSpinning) return

    setIsSpinning(true)
    const images = galleryImages as string[]

    // Rapid cycling effect
    let cycles = 0
    const maxCycles = 15
    const interval = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)])
      cycles++
      if (cycles >= maxCycles) {
        clearInterval(interval)
        // Final selection
        let finalImage
        do {
          finalImage = images[Math.floor(Math.random() * images.length)]
        } while (finalImage === currentImage && images.length > 1)
        setCurrentImage(finalImage)
        setIsSpinning(false)
        setSpinCount(prev => prev + 1)
      }
    }, 80)
  }, [isSpinning, currentImage])

  if (!currentImage) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-pulse text-xl font-bold text-red-400">SUMMONING CHAOS...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className={`relative overflow-hidden rounded-2xl border-2 ${isSpinning ? 'border-red-500 shadow-lg shadow-red-500/30' : 'border-red-900/50'} bg-black transition-all`}>
        <div className="relative aspect-square">
          <Image
            src={`/gallery/${currentImage}`}
            alt="Random Insanity Wolf Meme"
            fill
            className={`object-cover transition-all duration-100 ${isSpinning ? 'blur-sm scale-105' : ''}`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {isSpinning && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="animate-spin">
                <Skull className="h-16 w-16 text-red-500" />
              </div>
            </div>
          )}
        </div>
        {spinCount > 0 && !isSpinning && (
          <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-red-500 bg-black/80 px-3 py-1.5">
            <Flame className="h-4 w-4 text-red-500" />
            <span className="text-sm font-black text-red-400">{spinCount} SPINS</span>
          </div>
        )}
      </div>

      <div className="text-center space-y-4">
        <Button
          onClick={getRandomMeme}
          disabled={isSpinning}
          className="w-full gap-2 font-bold bg-red-900 hover:bg-red-800 border-2 border-red-500 disabled:opacity-50"
          size="lg"
          style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
        >
          <Shuffle className={`h-5 w-5 ${isSpinning ? 'animate-spin' : ''}`} />
          {isSpinning ? 'SPINNING...' : 'SPIN THE WHEEL OF CHAOS'}
        </Button>
        <p className="text-sm text-red-400/70">
          {spinCount === 0
            ? "You want to leave it up to FATE?! Fine! Let the UNIVERSE decide!"
            : spinCount < 5
              ? "AGAIN?! You're getting ADDICTED to the CHAOS!"
              : spinCount < 10
                ? "You can't STOP can you?! THE MADNESS CONSUMES YOU!"
                : "ABSOLUTE LEGEND. You've given yourself to the CHAOS COMPLETELY!"}
        </p>
      </div>
    </div>
  )
}
