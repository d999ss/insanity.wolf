"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Swords, Trophy, Flame, Share2, ArrowRight, Zap } from "lucide-react"

const MEME_PAIRS = [
  { left: { top: "ALARM DIDN'T GO OFF", bottom: "BLAME TIMEZONE" }, right: { top: "OVERSLEPT BY 3 HOURS", bottom: "TELL BOSS IT'S A RELIGIOUS HOLIDAY" } },
  { left: { top: "PIZZA ARRIVES COLD", bottom: "EAT IT ANYWAY" }, right: { top: "PIZZA ARRIVES COLD", bottom: "SUE DELIVERY DRIVER" } },
  { left: { top: "WIFI IS DOWN", bottom: "RESTART ROUTER" }, right: { top: "WIFI IS DOWN", bottom: "DECLARE WAR ON ISP" } },
  { left: { top: "GOT A PARKING TICKET", bottom: "PAY THE FINE" }, right: { top: "GOT A PARKING TICKET", bottom: "PARK ON THE SIDEWALK NEXT TIME" } },
  { left: { top: "COFFEE MACHINE BROKE", bottom: "DRINK TEA" }, right: { top: "COFFEE MACHINE BROKE", bottom: "SNORT THE GROUNDS" } },
  { left: { top: "EMAIL WON'T SEND", bottom: "CHECK INTERNET" }, right: { top: "EMAIL WON'T SEND", bottom: "HAND DELIVER IT SHIRTLESS" } },
  { left: { top: "PHONE BATTERY AT 1%", bottom: "FIND A CHARGER" }, right: { top: "PHONE BATTERY AT 1%", bottom: "LIVE OFF THE GRID FOREVER" } },
  { left: { top: "NEIGHBOR IS LOUD", bottom: "ASK THEM POLITELY" }, right: { top: "NEIGHBOR IS LOUD", bottom: "BE LOUDER" } },
]

export default function BattlePage() {
  const [currentPair, setCurrentPair] = useState(0)
  const [voted, setVoted] = useState<"left" | "right" | null>(null)
  const [scores, setScores] = useState({ left: 0, right: 0 })
  const [streak, setStreak] = useState(0)
  const [totalVotes, setTotalVotes] = useState(0)

  useEffect(() => {
    setScores({
      left: Math.floor(Math.random() * 500) + 100,
      right: Math.floor(Math.random() * 500) + 100,
    })
    setTotalVotes(Math.floor(Math.random() * 10000) + 5000)
  }, [currentPair])

  const handleVote = (side: "left" | "right") => {
    if (voted) return
    setVoted(side)
    const winner = scores.left > scores.right ? "left" : "right"
    if (side === winner) {
      setStreak(s => s + 1)
    } else {
      setStreak(0)
    }
  }

  const nextBattle = () => {
    setVoted(null)
    setCurrentPair((currentPair + 1) % MEME_PAIRS.length)
  }

  const pair = MEME_PAIRS[currentPair]
  const leftPercent = Math.round((scores.left / (scores.left + scores.right)) * 100)
  const rightPercent = 100 - leftPercent

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="border-b border-red-900/30 bg-gradient-to-r from-red-950/50 to-orange-950/50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Swords className="h-8 w-8 text-red-500" />
              <div>
                <h1 className="text-2xl font-black uppercase" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                  Meme <span className="text-red-500">Battle</span>
                </h1>
                <p className="text-white/50 text-sm">Vote for the most insane response</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {streak > 0 && (
                <div className="flex items-center gap-2 px-3 py-1 bg-orange-600 text-white text-sm font-bold">
                  <Flame className="h-4 w-4" />
                  {streak} STREAK
                </div>
              )}
              <div className="text-right">
                <p className="text-xs text-white/50">Total Votes</p>
                <p className="font-bold">{totalVotes.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 relative">
          <button
            onClick={() => handleVote("left")}
            disabled={voted !== null}
            className={`relative group transition-all ${voted === "left" ? "ring-4 ring-green-500" : voted === "right" ? "opacity-50" : "hover:scale-[1.02]"}`}
          >
            <div className="relative aspect-square bg-black border-2 border-red-900/50">
              <Image src="/insanity-wolf-template.webp" alt="Insanity Wolf" fill className="object-cover" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <p className="text-center text-xl md:text-2xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000" }}>
                  {pair.left.top}
                </p>
                <p className="text-center text-xl md:text-2xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000" }}>
                  {pair.left.bottom}
                </p>
              </div>
              {!voted && (
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="text-2xl font-black uppercase">VOTE</span>
                </div>
              )}
            </div>
            {voted && (
              <>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800">
                  <div className="h-full bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-1000" style={{ width: `${leftPercent}%` }} />
                </div>
                <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 text-xl font-bold">{leftPercent}%</div>
              </>
            )}
          </button>

          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center font-black text-xl shadow-lg shadow-red-500/50">VS</div>
          </div>

          <button
            onClick={() => handleVote("right")}
            disabled={voted !== null}
            className={`relative group transition-all ${voted === "right" ? "ring-4 ring-green-500" : voted === "left" ? "opacity-50" : "hover:scale-[1.02]"}`}
          >
            <div className="relative aspect-square bg-black border-2 border-red-900/50">
              <Image src="/insanity-wolf-template.webp" alt="Insanity Wolf" fill className="object-cover" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <p className="text-center text-xl md:text-2xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000" }}>
                  {pair.right.top}
                </p>
                <p className="text-center text-xl md:text-2xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000" }}>
                  {pair.right.bottom}
                </p>
              </div>
              {!voted && (
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="text-2xl font-black uppercase">VOTE</span>
                </div>
              )}
            </div>
            {voted && (
              <>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-800">
                  <div className="h-full bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-1000" style={{ width: `${rightPercent}%` }} />
                </div>
                <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 text-xl font-bold">{rightPercent}%</div>
              </>
            )}
          </button>
        </div>

        <div className="md:hidden flex justify-center -my-6 relative z-10">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-black shadow-lg shadow-red-500/50">VS</div>
        </div>

        {voted && (
          <div className="mt-8 text-center">
            <button onClick={nextBattle} className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-8 py-4 text-xl transition-all hover:scale-105">
              NEXT BATTLE
              <Zap className="h-6 w-6" />
            </button>
          </div>
        )}

        <div className="mt-16 border-t border-red-900/30 pt-16">
          <div className="text-center">
            <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              Think You Can Create <span className="text-red-500">Better</span>?
            </h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              Submit your own Insanity Wolf meme and watch it battle against others. The most voted memes get featured!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-6 py-3 transition-colors">
                CREATE YOUR MEME
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => {
                  const text = encodeURIComponent("Vote for the most insane Insanity Wolf response! #MemeBattle")
                  const url = encodeURIComponent("https://insanitywolf.com/battle")
                  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
                }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold uppercase px-6 py-3 transition-colors"
              >
                <Share2 className="h-4 w-4" />
                SHARE BATTLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
