"use client"

import { useState, useEffect } from "react"
import { Swords, Trophy, Skull, RotateCcw, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const battles = [
  {
    left: { top: "CAN'T SLEEP", bottom: "STAY AWAKE FOREVER", votes: 1247 },
    right: { top: "LATE FOR WORK", bottom: "BURN DOWN THE OFFICE", votes: 893 },
  },
  {
    left: { top: "NEIGHBOR IS LOUD", bottom: "BECOME LOUDER", votes: 2103 },
    right: { top: "COFFEE IS COLD", bottom: "DRINK IT BOILING", votes: 1567 },
  },
  {
    left: { top: "TRAFFIC JAM", bottom: "DRIVE ON SIDEWALK", votes: 892 },
    right: { top: "PHONE DIES", bottom: "LIVE OFF GRID FOREVER", votes: 1243 },
  },
  {
    left: { top: "BOSS YELLS AT YOU", bottom: "YELL BACK LOUDER", votes: 1876 },
    right: { top: "FORGOT PASSWORD", bottom: "HACK THE MAINFRAME", votes: 1432 },
  },
  {
    left: { top: "PIZZA ARRIVES COLD", bottom: "EAT IT FROZEN NEXT TIME", votes: 743 },
    right: { top: "ALARM DIDN'T GO OFF", bottom: "NEVER SLEEP AGAIN", votes: 1098 },
  },
]

export function MemeBattle() {
  const [battleIndex, setBattleIndex] = useState(0)
  const [voted, setVoted] = useState<"left" | "right" | null>(null)
  const [countdown, setCountdown] = useState(10)
  const [streak, setStreak] = useState(0)

  const battle = battles[battleIndex]

  useEffect(() => {
    if (voted && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
    if (voted && countdown === 0) {
      nextBattle()
    }
  }, [voted, countdown])

  const handleVote = (side: "left" | "right") => {
    if (voted) return
    setVoted(side)
    setStreak(streak + 1)
    setCountdown(10)
  }

  const nextBattle = () => {
    setBattleIndex((prev) => (prev + 1) % battles.length)
    setVoted(null)
    setCountdown(10)
  }

  const totalVotes = battle.left.votes + battle.right.votes + (voted ? 1 : 0)
  const leftPercent = Math.round(((battle.left.votes + (voted === "left" ? 1 : 0)) / totalVotes) * 100)
  const rightPercent = 100 - leftPercent

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-red-900/50 bg-card shadow-2xl">
      <div className="border-b border-red-900/30 bg-gradient-to-r from-red-950/30 via-red-900/10 to-red-950/30 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Swords className="h-6 w-6 text-red-500" />
            <div>
              <h3 className="font-sans text-xl font-black uppercase tracking-tight text-red-500" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                MEME BATTLE ROYALE
              </h3>
              <p className="text-xs font-bold text-red-400/70">WHICH SOLUTION IS MORE INSANE?!</p>
            </div>
          </div>
          {streak > 0 && (
            <div className="flex items-center gap-2 rounded-full border border-red-500 bg-red-950/50 px-3 py-1.5">
              <Flame className="h-4 w-4 text-red-500" />
              <span className="text-sm font-black text-red-400">{streak} STREAK</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2">
        <div
          className={`group relative cursor-pointer overflow-hidden rounded-xl border-2 transition-all ${
            voted === "left"
              ? "border-red-500 scale-[1.02] shadow-xl shadow-red-500/30"
              : voted === "right"
                ? "opacity-50 border-red-900/30"
                : "border-red-900/30 hover:border-red-500/50 hover:scale-[1.01]"
          }`}
          onClick={() => handleVote("left")}
        >
          <div className="aspect-square bg-black/50 p-6">
            <div className="flex h-full flex-col items-center justify-between text-center">
              <p className="font-sans text-lg font-black uppercase leading-tight" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>{battle.left.top}</p>
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-red-900/50 bg-black overflow-hidden group-hover:border-red-500 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all">
                <Image src="/insanity-wolf.png" alt="Insanity Wolf" width={96} height={96} className="object-cover" />
              </div>
              <p className="font-sans text-lg font-black uppercase leading-tight text-red-500" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>{battle.left.bottom}</p>
            </div>
          </div>
          <div className="border-t border-red-900/30 bg-red-950/30 px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-black text-red-500">{(battle.left.votes + (voted === "left" ? 1 : 0)).toLocaleString()}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-red-400/60">VOTES</p>
              </div>
              {voted && (
                <div className="text-right">
                  <p className="text-xl font-black text-white">{leftPercent}%</p>
                </div>
              )}
            </div>
            {voted && (
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-red-950">
                <div
                  className="h-full bg-red-500 transition-all duration-500"
                  style={{ width: `${leftPercent}%` }}
                />
              </div>
            )}
          </div>
          {voted === "left" && (
            <div className="absolute top-4 right-4">
              <Trophy className="h-8 w-8 text-yellow-500 animate-bounce" />
            </div>
          )}
        </div>

        <div
          className={`group relative cursor-pointer overflow-hidden rounded-xl border-2 transition-all ${
            voted === "right"
              ? "border-red-500 scale-[1.02] shadow-xl shadow-red-500/30"
              : voted === "left"
                ? "opacity-50 border-red-900/30"
                : "border-red-900/30 hover:border-red-500/50 hover:scale-[1.01]"
          }`}
          onClick={() => handleVote("right")}
        >
          <div className="aspect-square bg-black/50 p-6">
            <div className="flex h-full flex-col items-center justify-between text-center">
              <p className="font-sans text-lg font-black uppercase leading-tight" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>{battle.right.top}</p>
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-red-900/50 bg-black overflow-hidden group-hover:border-red-500 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.5)] transition-all">
                <Image src="/insanity-wolf.png" alt="Insanity Wolf" width={96} height={96} className="object-cover" />
              </div>
              <p className="font-sans text-lg font-black uppercase leading-tight text-red-500" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>{battle.right.bottom}</p>
            </div>
          </div>
          <div className="border-t border-red-900/30 bg-red-950/30 px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-black text-red-500">{(battle.right.votes + (voted === "right" ? 1 : 0)).toLocaleString()}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-red-400/60">VOTES</p>
              </div>
              {voted && (
                <div className="text-right">
                  <p className="text-xl font-black text-white">{rightPercent}%</p>
                </div>
              )}
            </div>
            {voted && (
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-red-950">
                <div
                  className="h-full bg-red-500 transition-all duration-500"
                  style={{ width: `${rightPercent}%` }}
                />
              </div>
            )}
          </div>
          {voted === "right" && (
            <div className="absolute top-4 right-4">
              <Trophy className="h-8 w-8 text-yellow-500 animate-bounce" />
            </div>
          )}
        </div>
      </div>

      {!voted && (
        <div className="border-t border-red-900/30 bg-red-950/20 px-6 py-4 text-center">
          <p className="text-sm font-bold text-red-400/80 flex items-center justify-center gap-2">
            <Skull className="h-4 w-4" />
            CHOOSE YOUR DESTINY
            <Skull className="h-4 w-4" />
          </p>
        </div>
      )}

      {voted && (
        <div className="border-t border-red-500/30 bg-red-900/30 px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="font-black text-red-400">
              VOTE RECORDED! NEXT BATTLE IN {countdown}s
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextBattle}
              className="gap-2 text-red-400 hover:text-red-300 hover:bg-red-950/50"
            >
              <RotateCcw className="h-4 w-4" />
              SKIP
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
