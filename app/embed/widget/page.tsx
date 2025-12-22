"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { RefreshCw } from "lucide-react"

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
]

function WidgetContent() {
  const searchParams = useSearchParams()
  const auto = searchParams.get("auto") === "true"
  const interval = parseInt(searchParams.get("interval") || "10") * 1000
  const size = searchParams.get("size") || "normal"

  const [meme, setMeme] = useState(RANDOM_MEMES[0])
  const [isLoading, setIsLoading] = useState(false)

  const getRandomMeme = () => {
    setIsLoading(true)
    const randomIndex = Math.floor(Math.random() * RANDOM_MEMES.length)
    setTimeout(() => {
      setMeme(RANDOM_MEMES[randomIndex])
      setIsLoading(false)
    }, 300)
  }

  useEffect(() => {
    getRandomMeme()
  }, [])

  useEffect(() => {
    if (auto) {
      const timer = setInterval(getRandomMeme, interval)
      return () => clearInterval(timer)
    }
  }, [auto, interval])

  const isMini = size === "mini"

  return (
    <div className={"min-h-screen bg-black text-white flex flex-col " + (isMini ? "p-2" : "p-4")}>
      {/* Meme display */}
      <div className="flex-1 flex items-center justify-center">
        <div className={"relative " + (isMini ? "w-full max-w-[180px]" : "w-full max-w-[350px]")}>
          <div className="relative aspect-square">
            <Image
              src="/insanity-wolf-template.webp"
              alt="Insanity Wolf"
              fill
              className={"object-contain transition-opacity " + (isLoading ? "opacity-50" : "opacity-100")}
            />
            <div className="absolute inset-0 flex flex-col justify-between p-[8%]">
              <p
                className={"text-center font-black uppercase text-white " + (isMini ? "text-xs" : "text-sm md:text-base")}
                style={{
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000"
                }}
              >
                {meme.top}
              </p>
              <p
                className={"text-center font-black uppercase text-white " + (isMini ? "text-xs" : "text-sm md:text-base")}
                style={{
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000"
                }}
              >
                {meme.bottom}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={"border-t border-red-900/50 flex items-center justify-between " + (isMini ? "pt-2 mt-2" : "pt-3 mt-3")}>
        <a
          href="https://insanitywolf.com"
          target="_blank"
          rel="noopener noreferrer"
          className={"text-white/50 hover:text-white transition-colors " + (isMini ? "text-[10px]" : "text-xs")}
        >
          insanitywolf.com
        </a>
        <button
          onClick={getRandomMeme}
          disabled={isLoading}
          className={"bg-red-600 hover:bg-red-500 text-white font-bold uppercase transition-colors flex items-center gap-1 " + (isMini ? "px-2 py-1 text-[10px]" : "px-3 py-1.5 text-xs")}
        >
          <RefreshCw className={"transition-transform " + (isLoading ? "animate-spin " : "") + (isMini ? "h-3 w-3" : "h-3.5 w-3.5")} />
          {!isMini && "New"}
        </button>
      </div>
    </div>
  )
}

export default function EmbedWidgetPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">🐺</div>
          <p className="text-white/50 text-sm">Loading...</p>
        </div>
      </div>
    }>
      <WidgetContent />
    </Suspense>
  )
}
