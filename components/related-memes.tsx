"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Flame, TrendingUp } from "lucide-react"

const ALL_MEMES = [
  { top: "WIFI IS DOWN", bottom: "DECLARE WAR ON ISP", votes: 15420 },
  { top: "BOSS SAYS WORK LATE", bottom: "BURN DOWN THE OFFICE", votes: 12850 },
  { top: "PIZZA ARRIVES COLD", bottom: "SUE ENTIRE COUNTRY OF ITALY", votes: 11200 },
  { top: "ALARM DIDN'T GO OFF", bottom: "BLAME TIMEZONE CONSPIRACY", votes: 9870 },
  { top: "COFFEE MACHINE BROKE", bottom: "SNORT THE GROUNDS", votes: 8540 },
  { top: "SOMEONE TOOK MY PARKING SPOT", bottom: "LIVE IN THEIR CAR", votes: 7200 },
  { top: "NEIGHBOR IS LOUD", bottom: "BE LOUDER AT 3AM", votes: 6100 },
  { top: "PHONE BATTERY AT 1%", bottom: "LIVE OFF THE GRID FOREVER", votes: 5400 },
  { top: "TRAFFIC JAM", bottom: "HELICOPTER TO WORK", votes: 4800 },
  { top: "FORGOT PASSWORD", bottom: "HACK THE MAINFRAME", votes: 4200 },
  { top: "PRINTER NOT WORKING", bottom: "OFFICE SPACE IT", votes: 3900 },
  { top: "MONDAY MORNING", bottom: "SKIP TO FRIDAY", votes: 3600 },
]

interface RelatedMemesProps {
  currentTop?: string
  currentBottom?: string
  maxItems?: number
}

export function RelatedMemes({ currentTop, currentBottom, maxItems = 4 }: RelatedMemesProps) {
  const [memes, setMemes] = useState(ALL_MEMES.slice(0, maxItems))

  useEffect(() => {
    // Filter out current meme and shuffle
    const filtered = ALL_MEMES.filter(
      (m) => m.top !== currentTop || m.bottom !== currentBottom
    )
    const shuffled = [...filtered].sort(() => Math.random() - 0.5)
    setMemes(shuffled.slice(0, maxItems))
  }, [currentTop, currentBottom, maxItems])

  const getMemeUrl = (meme: { top: string; bottom: string }) => {
    const memeId = btoa(JSON.stringify({ top: meme.top, bottom: meme.bottom }))
    return "/meme/" + memeId
  }

  return (
    <div className="bg-red-950/20 border border-red-900/30 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-orange-400" />
          More Insanity
        </h3>
        <Link
          href="/leaderboard"
          className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1"
        >
          View All
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {memes.map((meme, index) => (
          <Link
            key={index}
            href={getMemeUrl(meme)}
            className="group relative aspect-square bg-black border border-red-900/30 hover:border-red-500 transition-all hover:scale-[1.02]"
          >
            <Image
              src="/insanity-wolf-template.webp"
              alt="Related meme"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-2">
              <p
                className="text-center text-xs font-black uppercase text-white leading-tight"
                style={{
                  textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                {meme.top}
              </p>
              <p
                className="text-center text-xs font-black uppercase text-white leading-tight"
                style={{
                  textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                {meme.bottom}
              </p>
            </div>
            <div className="absolute bottom-1 right-1 flex items-center gap-1 px-1.5 py-0.5 bg-black/70 text-orange-400 text-xs">
              <Flame className="h-3 w-3" />
              {(meme.votes / 1000).toFixed(1)}k
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
