"use client"

import { useState } from "react"
import { Swords, Trophy, Skull } from "lucide-react"
import Image from "next/image"

const battles = [
  {
    left: { top: "CAN'T SLEEP", bottom: "STAY AWAKE FOREVER", votes: 1247 },
    right: { top: "LATE FOR WORK", bottom: "BURN DOWN THE OFFICE", votes: 893 },
  },
]

export function MemeBattle() {
  const [battle] = useState(battles[0])
  const [voted, setVoted] = useState<"left" | "right" | null>(null)

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-red-900/50 bg-card shadow-2xl anger-border">
      <div className="border-b border-red-900/30 bg-gradient-to-r from-red-950/30 via-red-900/10 to-red-950/30 px-6 py-4">
        <div className="flex items-center justify-center gap-3">
          <Swords className="h-6 w-6 text-red-500 tremor" />
          <h3 className="font-sans text-xl font-black uppercase tracking-tight fire-text" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>MEME BATTLE ROYALE</h3>
          <Trophy className="h-6 w-6 text-red-500 tremor" />
        </div>
        <p className="mt-2 text-center text-sm font-bold text-red-400/70 glitch-hover">WHICH SOLUTION IS MORE INSANE?!</p>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2">
        <div
          className={`group relative cursor-pointer overflow-hidden rounded-xl border-2 transition-all berserk ${
            voted === "left"
              ? "border-red-500 scale-105 shadow-xl shadow-red-500/30"
              : "border-red-900/30 hover:border-red-500/50"
          }`}
          onClick={() => setVoted("left")}
        >
          <div className="aspect-square bg-black/50 p-6 heavy-scanlines">
            <div className="flex h-full flex-col items-center justify-between text-center">
              <p className="font-sans text-lg font-black uppercase leading-tight horror-shake" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>{battle.left.top}</p>
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-red-900/50 bg-black overflow-hidden group-hover:border-red-500 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all wolf-eyes-intense">
                <Image src="/insanity-wolf.png" alt="Insanity Wolf" width={96} height={96} className="object-cover" />
              </div>
              <p className="font-sans text-lg font-black uppercase leading-tight text-red-500 fire-text" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>{battle.left.bottom}</p>
            </div>
          </div>
          <div className="border-t border-red-900/30 bg-red-950/30 px-4 py-3 text-center">
            <p className="text-2xl font-black text-red-500 glitch-constant">{battle.left.votes + (voted === "left" ? 1 : 0)}</p>
            <p className="text-xs font-bold uppercase tracking-wider text-red-400/60">VOTES</p>
          </div>
        </div>

        <div
          className={`group relative cursor-pointer overflow-hidden rounded-xl border-2 transition-all berserk ${
            voted === "right"
              ? "border-red-500 scale-105 shadow-xl shadow-red-500/30"
              : "border-red-900/30 hover:border-red-500/50"
          }`}
          onClick={() => setVoted("right")}
        >
          <div className="aspect-square bg-black/50 p-6 heavy-scanlines">
            <div className="flex h-full flex-col items-center justify-between text-center">
              <p className="font-sans text-lg font-black uppercase leading-tight horror-shake" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>{battle.right.top}</p>
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-red-900/50 bg-black overflow-hidden group-hover:border-red-500 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all wolf-eyes-intense">
                <Image src="/insanity-wolf.png" alt="Insanity Wolf" width={96} height={96} className="object-cover" />
              </div>
              <p className="font-sans text-lg font-black uppercase leading-tight text-red-500 fire-text" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>{battle.right.bottom}</p>
            </div>
          </div>
          <div className="border-t border-red-900/30 bg-red-950/30 px-4 py-3 text-center">
            <p className="text-2xl font-black text-red-500 glitch-constant">{battle.right.votes + (voted === "right" ? 1 : 0)}</p>
            <p className="text-xs font-bold uppercase tracking-wider text-red-400/60">VOTES</p>
          </div>
        </div>
      </div>

      {!voted && (
        <div className="border-t border-red-900/30 bg-red-950/20 px-6 py-4 text-center">
          <p className="text-sm font-bold text-red-400/80 tremor flex items-center justify-center gap-2">
            <Skull className="h-4 w-4" />
            CHOOSE YOUR DESTINY
            <Skull className="h-4 w-4" />
          </p>
        </div>
      )}

      {voted && (
        <div className="border-t border-red-500/30 bg-red-900/30 px-6 py-4 text-center">
          <p className="font-black text-red-400 fire-text">BLOOD OATH RECORDED! NEXT BATTLE IN 5:32</p>
        </div>
      )}
    </div>
  )
}
