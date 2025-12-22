"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { RefreshCw, Download, Share2, Shuffle, ArrowRight, Flame } from "lucide-react"

const RANDOM_MEMES = [
  { top: "WIFI IS DOWN", bottom: "DECLARE WAR ON ISP" },
  { top: "ALARM DIDN'T GO OFF", bottom: "BLAME TIMEZONE CONSPIRACY" },
  { top: "PIZZA ARRIVES COLD", bottom: "SUE ENTIRE COUNTRY OF ITALY" },
  { top: "COFFEE MACHINE BROKE", bottom: "SNORT THE GROUNDS" },
  { top: "NEIGHBOR IS LOUD", bottom: "BE LOUDER AT 3AM" },
  { top: "FORGOT PASSWORD", bottom: "HACK THE MAINFRAME" },
  { top: "DEADLINE TOMORROW", bottom: "FINISH IT NEXT WEEK" },
  { top: "BOSS WANTS OVERTIME", bottom: "QUIT AND BECOME BOSS" },
  { top: "CAR WON'T START", bottom: "HOTWIRE A HELICOPTER" },
  { top: "OUT OF MILK", bottom: "BUY A COW" },
  { top: "PHONE BATTERY LOW", bottom: "ABSORB LIGHTNING" },
  { top: "TRAFFIC JAM", bottom: "INSTALL ROCKET BOOSTERS" },
  { top: "NO PARKING SPOTS", bottom: "TOW EVERYONE ELSE" },
  { top: "SLOW INTERNET", bottom: "LAY OWN FIBER OPTIC" },
  { top: "HEADPHONES TANGLED", bottom: "BURN THEM ALL" },
  { top: "PRINTER JAMMED", bottom: "OFFICE SPACE IT" },
  { top: "MEETING AT 8 AM", bottom: "FAKE OWN DEATH" },
  { top: "CODE WON'T COMPILE", bottom: "DELETE THE INTERNET" },
  { top: "DENTIST APPOINTMENT", bottom: "PULL TEETH WITH PLIERS" },
  { top: "MICROWAVE IS BROKEN", bottom: "COOK FOOD WITH RAGE" },
]

export default function RandomMemePage() {
  const [meme, setMeme] = useState<{ top: string; bottom: string } | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(0)

  const getRandomMeme = () => {
    setIsLoading(true)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * RANDOM_MEMES.length)
      setMeme(RANDOM_MEMES[randomIndex])
      setCount((c) => c + 1)
      setIsLoading(false)
    }, 300)
  }

  useEffect(() => {
    getRandomMeme()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600 text-white text-xs font-bold uppercase mb-4">
            <Shuffle className="h-4 w-4" />
            Random
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Random <span className="text-orange-400">Meme</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Can't think of anything? Let fate decide. Hit the button for a random Insanity Wolf meme.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Meme display */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative w-full max-w-[450px] mb-6">
            <div className="relative aspect-square bg-black border border-red-500">
              <Image
                src="/insanity-wolf-template.webp"
                alt="Random Insanity Wolf Meme"
                fill
                className={"object-contain transition-all " + (isLoading ? "opacity-50 scale-95" : "opacity-100 scale-100")}
              />
              {meme && (
                <div className="absolute inset-0 flex flex-col justify-between p-[8%]">
                  <p
                    className="text-center text-lg md:text-xl font-black uppercase text-white"
                    style={{
                      fontFamily: 'Impact, "Arial Black", sans-serif',
                      textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000"
                    }}
                  >
                    {meme.top}
                  </p>
                  <p
                    className="text-center text-lg md:text-xl font-black uppercase text-white"
                    style={{
                      fontFamily: 'Impact, "Arial Black", sans-serif',
                      textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000"
                    }}
                  >
                    {meme.bottom}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Counter */}
          <div className="text-white/50 text-sm mb-4">
            Memes viewed this session: <span className="text-orange-400 font-bold">{count}</span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={getRandomMeme}
              disabled={isLoading}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 disabled:opacity-50 text-white font-black uppercase px-8 py-4 flex items-center gap-2 transition-all hover:scale-105"
            >
              <RefreshCw className={"h-5 w-5 " + (isLoading ? "animate-spin" : "")} />
              ANOTHER ONE
            </button>
            <button className="bg-green-600 hover:bg-green-500 text-white font-bold uppercase px-6 py-4 flex items-center gap-2 transition-colors">
              <Download className="h-5 w-5" />
              Download
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase px-6 py-4 flex items-center gap-2 transition-colors">
              <Share2 className="h-5 w-5" />
              Share
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-red-950/20 border border-red-900/30 p-6 text-center">
            <div className="text-3xl font-black text-orange-400">{RANDOM_MEMES.length}+</div>
            <div className="text-white/50 text-sm">Memes in rotation</div>
          </div>
          <div className="bg-red-950/20 border border-red-900/30 p-6 text-center">
            <div className="text-3xl font-black text-orange-400">∞</div>
            <div className="text-white/50 text-sm">Free clicks</div>
          </div>
          <div className="bg-red-950/20 border border-red-900/30 p-6 text-center">
            <div className="text-3xl font-black text-orange-400">0</div>
            <div className="text-white/50 text-sm">Signup required</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <Flame className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Want to Make Your <span className="text-red-500">Own</span>?
          </h2>
          <p className="text-white/70 mb-6">Create custom memes with your own text.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-6 py-3 transition-colors">
            Create Custom Meme
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
