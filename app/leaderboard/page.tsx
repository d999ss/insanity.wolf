"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trophy, Medal, Flame, Crown, TrendingUp, ArrowRight, Users, Eye } from "lucide-react"

const TOP_MEMES = [
  { id: 1, top: "WIFI IS DOWN", bottom: "DECLARE WAR ON ISP", votes: 15420, views: 89230, streak: 12 },
  { id: 2, top: "BOSS SAYS WORK LATE", bottom: "BURN DOWN THE OFFICE", votes: 12850, views: 72100, streak: 8 },
  { id: 3, top: "PIZZA ARRIVES COLD", bottom: "SUE ENTIRE COUNTRY OF ITALY", votes: 11200, views: 65400, streak: 6 },
  { id: 4, top: "ALARM DIDN'T GO OFF", bottom: "BLAME TIMEZONE CONSPIRACY", votes: 9870, views: 54200, streak: 5 },
  { id: 5, top: "COFFEE MACHINE BROKE", bottom: "SNORT THE GROUNDS", votes: 8540, views: 48900, streak: 4 },
  { id: 6, top: "SOMEONE TOOK MY PARKING SPOT", bottom: "LIVE IN THEIR CAR", votes: 7200, views: 41200, streak: 3 },
  { id: 7, top: "NEIGHBOR IS LOUD", bottom: "BE LOUDER AT 3AM", votes: 6100, views: 35800, streak: 3 },
  { id: 8, top: "PHONE BATTERY AT 1%", bottom: "LIVE OFF THE GRID FOREVER", votes: 5400, views: 31200, streak: 2 },
  { id: 9, top: "TRAFFIC JAM", bottom: "HELICOPTER TO WORK", votes: 4800, views: 28100, streak: 2 },
  { id: 10, top: "FORGOT PASSWORD", bottom: "HACK THE MAINFRAME", votes: 4200, views: 25600, streak: 1 },
]

const WEEKLY_STATS = {
  totalMemes: 12847,
  totalVotes: 284920,
  totalViews: 1420000,
  topCreator: "Anonymous Wolf",
}

export default function LeaderboardPage() {
  const [timeFrame, setTimeFrame] = useState<"daily" | "weekly" | "alltime">("weekly")
  const [animatedStats, setAnimatedStats] = useState({ memes: 0, votes: 0, views: 0 })

  useEffect(() => {
    const duration = 1500
    const steps = 50
    const interval = duration / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps
      setAnimatedStats({
        memes: Math.floor(WEEKLY_STATS.totalMemes * progress),
        votes: Math.floor(WEEKLY_STATS.totalVotes * progress),
        views: Math.floor(WEEKLY_STATS.totalViews * progress),
      })
      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-6 w-6 text-yellow-400" />
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-300" />
    if (rank === 3) return <Medal className="h-6 w-6 text-amber-600" />
    return <span className="text-white/50 font-bold">#{rank}</span>
  }

  const getTimeButtonClass = (t: string) => {
    if (timeFrame === t) return "bg-red-600 text-white"
    return "bg-white/10 text-white/70 hover:bg-white/20"
  }

  const getRankClass = (index: number) => {
    if (index === 0) return "bg-gradient-to-r from-yellow-950/50 to-orange-950/50 border-yellow-500/50"
    if (index === 1) return "bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-gray-500/30"
    if (index === 2) return "bg-gradient-to-r from-amber-950/50 to-orange-950/50 border-amber-700/30"
    return "bg-red-950/20 border-red-900/30"
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-950/30 to-black" />
        <div className="relative max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black text-sm font-bold uppercase mb-4">
              <Trophy className="h-5 w-5" />
              Hall of Insanity
            </div>
            <h1
              className="text-4xl md:text-5xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              <span className="text-yellow-400">Top</span> Memes
            </h1>
            <p className="text-white/70 max-w-xl mx-auto">
              The most voted, most shared, most insane Insanity Wolf memes. Can yours make the list?
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-red-950/30 border border-red-900/30">
              <p className="text-2xl md:text-3xl font-black text-red-400">{animatedStats.memes.toLocaleString()}</p>
              <p className="text-xs text-white/50 uppercase">Memes Created</p>
            </div>
            <div className="text-center p-4 bg-red-950/30 border border-red-900/30">
              <p className="text-2xl md:text-3xl font-black text-orange-400">{animatedStats.votes.toLocaleString()}</p>
              <p className="text-xs text-white/50 uppercase">Total Votes</p>
            </div>
            <div className="text-center p-4 bg-red-950/30 border border-red-900/30">
              <p className="text-2xl md:text-3xl font-black text-yellow-400">{(animatedStats.views / 1000000).toFixed(1)}M</p>
              <p className="text-xs text-white/50 uppercase">Total Views</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center gap-2 mb-8">
          {(["daily", "weekly", "alltime"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTimeFrame(t)}
              className={"px-4 py-2 font-bold uppercase text-sm transition-colors " + getTimeButtonClass(t)}
            >
              {t === "alltime" ? "All Time" : t}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {TOP_MEMES.map((meme, index) => (
            <div
              key={meme.id}
              className={"flex items-center gap-4 p-4 border transition-all hover:scale-[1.01] " + getRankClass(index)}
            >
              <div className="w-12 flex justify-center">{getRankIcon(index + 1)}</div>

              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/insanity-wolf-template.webp"
                  alt="Meme"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-grow min-w-0">
                <p className="font-bold text-sm md:text-base truncate">{meme.top}</p>
                <p className="text-red-400 text-sm md:text-base truncate">{meme.bottom}</p>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="hidden md:flex items-center gap-1 text-white/50">
                  <Eye className="h-4 w-4" />
                  {(meme.views / 1000).toFixed(1)}k
                </div>
                <div className="flex items-center gap-1 text-orange-400">
                  <TrendingUp className="h-4 w-4" />
                  {meme.votes.toLocaleString()}
                </div>
                {meme.streak > 3 && (
                  <div className="flex items-center gap-1 text-red-400">
                    <Flame className="h-4 w-4" />
                    {meme.streak}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-red-900/30 pt-16">
          <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h2
            className="text-3xl font-black uppercase mb-4"
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            Want to Be on This <span className="text-yellow-400">List</span>?
          </h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Create the most insane meme and get featured on our leaderboard.
            Top memes get shared to our social media with 100k+ followers!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-8 py-4 text-xl transition-all hover:scale-105"
            >
              CREATE YOUR MEME
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/battle"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold uppercase px-6 py-3 transition-colors"
            >
              <Users className="h-4 w-4" />
              VOTE IN BATTLES
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
