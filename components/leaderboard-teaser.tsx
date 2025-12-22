"use client"

import { useState, useEffect } from "react"
import { Trophy, ChevronUp, Crown, Medal, Award } from "lucide-react"

const FAKE_LEADERS = [
  { name: "ChaosKing420", score: 47823, badge: "crown" },
  { name: "WolfMaster99", score: 42156, badge: "medal" },
  { name: "InsanityQueen", score: 38947, badge: "award" },
  { name: "MemeDestroyer", score: 35621, badge: null },
  { name: "RageWolf2024", score: 31245, badge: null },
]

export function LeaderboardTeaser() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [userRank, setUserRank] = useState(0)

  useEffect(() => {
    // Show after 45 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Generate a fake user rank
      setUserRank(Math.floor(Math.random() * 500) + 100)
    }, 45000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-32 right-4 z-40 animate-in slide-in-from-right duration-500">
      {isExpanded ? (
        <div className="bg-black border-2 border-yellow-500 shadow-xl shadow-yellow-500/20 w-64">
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-white" />
              <span className="text-white font-bold uppercase text-sm">Leaderboard</span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white/70 hover:text-white"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>

          <div className="p-3 space-y-2">
            {FAKE_LEADERS.map((leader, idx) => (
              <div
                key={leader.name}
                className={`flex items-center justify-between py-1.5 px-2 ${idx === 0 ? "bg-yellow-500/10 border border-yellow-500/30" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`font-bold text-sm ${idx === 0 ? "text-yellow-400" : idx === 1 ? "text-gray-300" : idx === 2 ? "text-orange-400" : "text-white/60"}`}>
                    #{idx + 1}
                  </span>
                  {leader.badge === "crown" && <Crown className="h-3.5 w-3.5 text-yellow-400" />}
                  {leader.badge === "medal" && <Medal className="h-3.5 w-3.5 text-gray-300" />}
                  {leader.badge === "award" && <Award className="h-3.5 w-3.5 text-orange-400" />}
                  <span className="text-white text-xs truncate max-w-[100px]">{leader.name}</span>
                </div>
                <span className="text-yellow-400/70 text-xs font-mono">
                  {leader.score.toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-yellow-900/50 p-3 bg-yellow-950/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-white/60 text-xs">Your Rank:</span>
                <span className="text-white font-bold text-sm">#{userRank}</span>
              </div>
              <button className="text-yellow-400 text-xs uppercase font-bold hover:text-yellow-300 transition-colors">
                Climb Higher →
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-4 py-2 shadow-lg flex items-center gap-2 hover:scale-105 transition-transform animate-pulse"
        >
          <Trophy className="h-4 w-4" />
          <span className="font-bold text-sm uppercase">Top Creators</span>
        </button>
      )}
    </div>
  )
}
