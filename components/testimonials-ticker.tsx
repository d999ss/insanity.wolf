"use client"

import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"

const TESTIMONIALS = [
  { name: "@dankmemelord", platform: "Twitter", text: "This site is absolutely UNHINGED and I love it 💀", verified: true },
  { name: "xX_ChaosKing_Xx", platform: "Reddit", text: "Best meme generator on the internet. Period.", verified: false },
  { name: "@mikiyla_creates", platform: "TikTok", text: "My Insanity Wolf meme got 2M views!! This site is insane 🔥", verified: true },
  { name: "MemeWarrior2024", platform: "Discord", text: "I've made 50+ memes here. Can't stop won't stop.", verified: false },
  { name: "@funnybone_official", platform: "Instagram", text: "The merch quality is actually fire. Got 3 hoodies already", verified: true },
  { name: "WolfPackAlpha", platform: "Twitter", text: "Finally a meme site that gets it. Pure chaos energy.", verified: false },
  { name: "@internet_historian", platform: "YouTube", text: "Insanity Wolf: The most iconic advice animal returns", verified: true },
  { name: "DigitalNomad99", platform: "Reddit", text: "My coworkers think I'm insane. Mission accomplished 🐺", verified: false },
]

export function TestimonialsTicker() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % TESTIMONIALS.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const testimonial = TESTIMONIALS[current]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-black via-red-950/90 to-black border-t border-red-900/50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Left side - Stars */}
        <div className="hidden sm:flex items-center gap-1 flex-shrink-0">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          ))}
          <span className="text-white/60 text-xs ml-2">4.9/5</span>
        </div>

        {/* Testimonial */}
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center gap-3 animate-in fade-in duration-500" key={current}>
            <Quote className="h-4 w-4 text-red-400 flex-shrink-0" />
            <p className="text-white text-sm truncate">
              "{testimonial.text}"
            </p>
            <span className="text-red-400 text-xs flex-shrink-0 hidden md:block">
              — {testimonial.name}
              {testimonial.verified && <span className="text-blue-400 ml-1">✓</span>}
              <span className="text-white/40 ml-1">on {testimonial.platform}</span>
            </span>
          </div>
        </div>

        {/* Right side - Count */}
        <div className="flex-shrink-0 text-right hidden sm:block">
          <div className="text-white font-bold text-sm">10,847+</div>
          <div className="text-white/50 text-[10px] uppercase">5-Star Reviews</div>
        </div>
      </div>
    </div>
  )
}
