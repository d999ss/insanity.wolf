"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Flame, Sparkles, Crown, Image as ImageIcon } from "lucide-react"

const TEMPLATES = [
  {
    id: "classic",
    name: "Classic Insanity Wolf",
    description: "The original. The legend. Black background with the iconic snarling wolf.",
    image: "/insanity-wolf-template.webp",
    popular: true,
    badge: "ORIGINAL"
  },
  {
    id: "extreme",
    name: "Extreme Mode",
    description: "Maximum insanity. Glowing eyes, darker vibes, pure chaos energy.",
    image: "/extreme-wolf.png",
    popular: true,
    badge: "UNHINGED"
  },
]

const BACKGROUNDS = [
  { id: "black", name: "Black", color: "#000000", description: "Classic void of darkness" },
  { id: "red", name: "Blood Red", color: "#7f1d1d", description: "For maximum rage energy" },
  { id: "darkred", name: "Dark Red", color: "#450a0a", description: "Subtle but sinister" },
  { id: "gray", name: "Charcoal", color: "#1c1917", description: "Sleek and menacing" },
  { id: "blue", name: "Midnight", color: "#172554", description: "Cold, calculating chaos" },
  { id: "purple", name: "Dark Purple", color: "#3b0764", description: "Royal destruction" },
]

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase mb-4">
              <ImageIcon className="h-4 w-4" />
              Templates
            </div>
            <h1
              className="text-4xl md:text-6xl font-black uppercase mb-6"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Insanity Wolf<br />
              <span className="text-red-500">Templates</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Choose your weapon. Classic, extreme, or go completely unhinged.
              All templates are free to use for your chaotic creations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Templates */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Crown className="h-6 w-6 text-yellow-500" />
          <h2 className="text-2xl font-black uppercase">Wolf Templates</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TEMPLATES.map((template) => (
            <div key={template.id} className="group relative bg-red-950/20 border border-red-900/30 hover:border-red-500/50 transition-all">
              {template.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-bold">
                    {template.badge}
                  </span>
                </div>
              )}
              <div className="relative aspect-square bg-black flex items-center justify-center overflow-hidden">
                <Image
                  src={template.image}
                  alt={template.name}
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {template.popular && <Flame className="h-4 w-4 text-orange-500" />}
                  <h3 className="text-xl font-bold">{template.name}</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">{template.description}</p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-4 py-2 text-sm transition-colors"
                >
                  USE THIS TEMPLATE
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Colors */}
      <div className="border-t border-red-900/30 bg-red-950/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="h-6 w-6 text-purple-400" />
            <h2 className="text-2xl font-black uppercase">Background Colors</h2>
            <span className="text-white/50 text-sm">(Extreme Mode)</span>
          </div>

          <p className="text-white/70 mb-8">
            In Extreme Mode, you can customize the background color to match your level of insanity.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {BACKGROUNDS.map((bg) => (
              <div key={bg.id} className="group">
                <div
                  className="aspect-square border-2 border-white/20 group-hover:border-white/50 transition-all cursor-pointer mb-3"
                  style={{ backgroundColor: bg.color }}
                />
                <h4 className="font-bold text-sm">{bg.name}</h4>
                <p className="text-white/50 text-xs">{bg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="border-t border-red-900/30">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-red-950/20 border border-red-900/30 p-8 text-center">
            <Download className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-black uppercase mb-4">Download Blank Templates</h2>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Want to use the template in your own image editor? Download the high-resolution
              blank templates below. Just add your own Impact font text!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/insanity-wolf-template.webp"
                download="insanity-wolf-template.webp"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold uppercase px-6 py-3 transition-colors"
              >
                <Download className="h-4 w-4" />
                CLASSIC (600x600)
              </a>
              <a
                href="/extreme-wolf.png"
                download="extreme-wolf.png"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold uppercase px-6 py-3 transition-colors"
              >
                <Download className="h-4 w-4" />
                EXTREME (PNG)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Font Info */}
      <div className="border-t border-red-900/30 bg-red-950/10">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-black uppercase text-center mb-8">The Insanity Wolf Font</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black border border-red-900/30 p-6">
              <h3 className="font-bold mb-3">Impact Font</h3>
              <p className="text-white/70 text-sm mb-4">
                The classic meme font. Impact is the go-to choice for advice animals and has been
                since the format's creation. Bold, condensed, and readable even on small images.
              </p>
              <p
                className="text-2xl uppercase"
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                LIKE THIS
              </p>
            </div>
            <div className="bg-black border border-red-900/30 p-6">
              <h3 className="font-bold mb-3">Text Styling</h3>
              <p className="text-white/70 text-sm mb-4">
                White text with black outline. This combination ensures readability on any background.
                All caps for maximum impact (pun intended).
              </p>
              <p
                className="text-2xl uppercase text-white"
                style={{
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                }}
              >
                MAXIMUM CHAOS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-red-900/30 bg-gradient-to-b from-black to-red-950/30">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-black uppercase mb-4">
            Ready to <span className="text-red-500">Create</span>?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Don't waste time downloading templates. Use our generator and create your meme in seconds.
            It's free, fast, and properly unhinged.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-8 py-4 text-lg transition-all hover:scale-105"
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            CREATE YOUR MEME NOW
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
