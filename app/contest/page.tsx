"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trophy, Clock, Users, Flame, Crown, ArrowRight, Gift, Star, Medal } from "lucide-react"

const CONTEST_ENTRIES = [
  { id: 1, top: "WIFI IS DOWN", bottom: "DECLARE WAR ON ISP", votes: 1542, author: "ChaosLord420" },
  { id: 2, top: "MONDAY MEETING AT 8AM", bottom: "SLEEP THROUGH IT LOUDER", votes: 1389, author: "OfficeSurvivor" },
  { id: 3, top: "PIZZA ARRIVES COLD", bottom: "NUKE THE PIZZA PLACE", votes: 1256, author: "HangryWolf" },
  { id: 4, top: "BOSS SENDS EMAIL AT 11PM", bottom: "REPLY AT 4AM TO ASSERT DOMINANCE", votes: 1198, author: "NightOwlChaos" },
  { id: 5, top: "COWORKER USES SPEAKER PHONE", bottom: "USE MEGAPHONE", votes: 1087, author: "AudioWarfare" },
  { id: 6, top: "GYM IS CROWDED", bottom: "BECOME THE CROWD", votes: 956, author: "GainzGoblin" },
]

const PRIZES = [
  { place: "1st", prize: "Featured on homepage + $50 merch credit", icon: Crown, color: "text-yellow-400" },
  { place: "2nd", prize: "$25 merch credit + social shoutout", icon: Medal, color: "text-gray-300" },
  { place: "3rd", prize: "$10 merch credit", icon: Medal, color: "text-amber-600" },
]

export default function ContestPage() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [totalVotes, setTotalVotes] = useState(0)
  const [hasVoted, setHasVoted] = useState<number | null>(null)

  useEffect(() => {
    // Calculate end of week (Sunday midnight)
    const timer = setInterval(() => {
      const now = new Date()
      const endOfWeek = new Date(now)
      endOfWeek.setDate(now.getDate() + (7 - now.getDay()))
      endOfWeek.setHours(23, 59, 59, 999)

      const diff = endOfWeek.getTime() - now.getTime()

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }, 1000)

    setTotalVotes(CONTEST_ENTRIES.reduce((sum, e) => sum + e.votes, 0))

    return () => clearInterval(timer)
  }, [])

  const handleVote = (id: number) => {
    if (hasVoted) return
    setHasVoted(id)
    setTotalVotes(prev => prev + 1)
  }

  const sortedEntries = [...CONTEST_ENTRIES].sort((a, b) => {
    if (a.id === hasVoted) return -1
    if (b.id === hasVoted) return 1
    return b.votes - a.votes
  })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-950/30 via-red-950/30 to-black" />
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black text-sm font-bold uppercase mb-4 animate-pulse">
              <Trophy className="h-5 w-5" />
              Weekly Contest
            </div>
            <h1
              className="text-4xl md:text-5xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Meme of the <span className="text-yellow-400">Week</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Submit your best Insanity Wolf meme and compete for prizes. Most votes wins!
            </p>

            {/* Countdown */}
            <div className="inline-flex items-center gap-4 bg-red-950/50 border border-red-900/50 px-6 py-4">
              <Clock className="h-6 w-6 text-red-400" />
              <div className="flex items-center gap-3 font-mono">
                <div className="text-center">
                  <div className="text-2xl font-black text-yellow-400">{countdown.days}</div>
                  <div className="text-xs text-white/50">DAYS</div>
                </div>
                <span className="text-white/30">:</span>
                <div className="text-center">
                  <div className="text-2xl font-black text-yellow-400">{String(countdown.hours).padStart(2, '0')}</div>
                  <div className="text-xs text-white/50">HRS</div>
                </div>
                <span className="text-white/30">:</span>
                <div className="text-center">
                  <div className="text-2xl font-black text-yellow-400">{String(countdown.minutes).padStart(2, '0')}</div>
                  <div className="text-xs text-white/50">MIN</div>
                </div>
                <span className="text-white/30">:</span>
                <div className="text-center">
                  <div className="text-2xl font-black text-yellow-400">{String(countdown.seconds).padStart(2, '0')}</div>
                  <div className="text-xs text-white/50">SEC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Prizes */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {PRIZES.map((prize, i) => (
            <div key={i} className="bg-red-950/30 border border-red-900/30 p-6 text-center">
              <prize.icon className={"h-10 w-10 mx-auto mb-3 " + prize.color} />
              <div className={"text-2xl font-black mb-2 " + prize.color}>{prize.place} Place</div>
              <p className="text-white/70 text-sm">{prize.prize}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 mb-8 text-center">
          <div>
            <div className="text-3xl font-black text-red-400">{CONTEST_ENTRIES.length}</div>
            <div className="text-xs text-white/50 uppercase">Entries</div>
          </div>
          <div>
            <div className="text-3xl font-black text-orange-400">{totalVotes.toLocaleString()}</div>
            <div className="text-xs text-white/50 uppercase">Total Votes</div>
          </div>
          <div>
            <div className="text-3xl font-black text-yellow-400">$85</div>
            <div className="text-xs text-white/50 uppercase">In Prizes</div>
          </div>
        </div>

        {/* Entries */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
            <Flame className="h-6 w-6 text-orange-400" />
            This Week's Entries
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedEntries.map((entry, index) => (
              <div
                key={entry.id}
                className={"relative border transition-all " + (index === 0 ? "border-yellow-500/50 bg-yellow-950/20" : "border-red-900/30 bg-red-950/10")}
              >
                {index === 0 && (
                  <div className="absolute -top-3 left-4 px-2 py-1 bg-yellow-500 text-black text-xs font-bold flex items-center gap-1">
                    <Crown className="h-3 w-3" /> LEADING
                  </div>
                )}

                <div className="relative aspect-square">
                  <Image
                    src="/insanity-wolf-template.webp"
                    alt={entry.top}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-3">
                    <p className="text-center text-sm font-black uppercase text-white" style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
                      {entry.top}
                    </p>
                    <p className="text-center text-sm font-black uppercase text-white" style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
                      {entry.bottom}
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/50 text-sm">by {entry.author}</span>
                    <span className="flex items-center gap-1 text-orange-400 font-bold">
                      <Star className="h-4 w-4" />
                      {(hasVoted === entry.id ? entry.votes + 1 : entry.votes).toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => handleVote(entry.id)}
                    disabled={hasVoted !== null}
                    className={"w-full py-2 font-bold uppercase text-sm transition-all " + (
                      hasVoted === entry.id
                        ? "bg-green-600 text-white"
                        : hasVoted
                        ? "bg-white/10 text-white/50 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-500 text-white"
                    )}
                  >
                    {hasVoted === entry.id ? "Voted!" : hasVoted ? "Already Voted" : "Vote"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit CTA */}
        <div className="relative overflow-hidden border-2 border-yellow-500 bg-gradient-to-r from-yellow-950/30 to-orange-950/30 p-8 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 animate-pulse" />
          <div className="relative">
            <Gift className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h2
              className="text-3xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Enter the <span className="text-yellow-400">Contest</span>
            </h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              Create a meme and submit it to this week's contest. Winners announced every Sunday!
            </p>
            <Link
              href="/?contest=true"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-black uppercase px-8 py-4 text-xl transition-all hover:scale-105"
            >
              CREATE & SUBMIT
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
