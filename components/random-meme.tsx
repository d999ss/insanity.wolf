"use client"

import { Button } from "@/components/ui/button"
import { Shuffle } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import galleryImages from "@/lib/gallery-images.json"

export function RandomMeme() {
  const [currentImage, setCurrentImage] = useState<string | null>(null)

  useEffect(() => {
    // Pick a random image on mount
    const images = galleryImages as string[]
    setCurrentImage(images[Math.floor(Math.random() * images.length)])
  }, [])

  const getRandomMeme = () => {
    const images = galleryImages as string[]
    let newImage
    do {
      newImage = images[Math.floor(Math.random() * images.length)]
    } while (newImage === currentImage && images.length > 1)
    setCurrentImage(newImage)
  }

  if (!currentImage) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-pulse text-xl font-bold">SUMMONING CHAOS...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="group relative overflow-hidden rounded-2xl border-2 border-border bg-gradient-to-br from-card via-card to-muted/30 transition-all hover:border-primary hover:shadow-2xl hover:shadow-primary/10 metal-card-hover wolf-glow">
        <div className="relative aspect-square">
          <Image
            src={`/gallery/${currentImage}`}
            alt="Random Insanity Wolf Meme"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <Button onClick={getRandomMeme} className="w-full gap-2 font-bold rage-mode" size="lg" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
        <Shuffle className="h-5 w-5" />
        SPIN THE WHEEL OF CHAOS
      </Button>
    </div>
  )
}
