"use client"

import { Star, Flame, Skull, Zap } from "lucide-react"

const badges = [
  { name: "First Blood", icon: Zap, description: "Created your first meme", rarity: "common" },
  { name: "Viral Lord", icon: Flame, description: "Got 1000+ votes", rarity: "rare" },
  { name: "God Tier", icon: Star, description: "Won daily challenge", rarity: "legendary" },
  { name: "Chaos Master", icon: Skull, description: "Created 100 memes", rarity: "epic" },
]

export function AchievementBadge() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className={`group relative overflow-hidden rounded-xl border-2 p-6 text-center transition-all hover:scale-105 hover:shadow-2xl ${
            badge.rarity === "legendary"
              ? "border-yellow-500 bg-gradient-to-br from-yellow-500/10 to-orange-500/10"
              : badge.rarity === "epic"
                ? "border-purple-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                : badge.rarity === "rare"
                  ? "border-blue-500 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
                  : "border-border bg-card"
          }`}
        >
          <div className="mb-4 flex justify-center">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full ${
                badge.rarity === "legendary"
                  ? "bg-yellow-500/20"
                  : badge.rarity === "epic"
                    ? "bg-purple-500/20"
                    : badge.rarity === "rare"
                      ? "bg-blue-500/20"
                      : "bg-muted"
              }`}
            >
              <badge.icon
                className={`h-8 w-8 ${
                  badge.rarity === "legendary"
                    ? "text-yellow-500"
                    : badge.rarity === "epic"
                      ? "text-purple-500"
                      : badge.rarity === "rare"
                        ? "text-blue-500"
                        : "text-muted-foreground"
                }`}
              />
            </div>
          </div>
          <h4 className="mb-2 font-sans text-sm font-black uppercase tracking-tight">{badge.name}</h4>
          <p className="text-xs text-muted-foreground">{badge.description}</p>
          <div className="absolute right-2 top-2">
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-black uppercase ${
                badge.rarity === "legendary"
                  ? "bg-yellow-500 text-black"
                  : badge.rarity === "epic"
                    ? "bg-purple-500 text-white"
                    : badge.rarity === "rare"
                      ? "bg-blue-500 text-white"
                      : "bg-muted text-muted-foreground"
              }`}
            >
              {badge.rarity}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
