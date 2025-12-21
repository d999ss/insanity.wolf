"use client"

import { useState, useEffect } from "react"

function useAnimatedNumber(baseValue: number, incrementRatePerSecond: number) {
  const [value, setValue] = useState(baseValue)
  const [displayRate, setDisplayRate] = useState(incrementRatePerSecond)

  useEffect(() => {
    const updatesPerSecond = 20
    const baseIncrement = incrementRatePerSecond / updatesPerSecond

    const interval = setInterval(() => {
      const variation = 0.7 + Math.random() * 0.6
      const increment = Math.max(1, Math.floor(baseIncrement * variation))
      setValue((v) => v + increment)

      const rateVariation = 0.85 + Math.random() * 0.3
      setDisplayRate(Math.floor(incrementRatePerSecond * rateVariation))
    }, 1000 / updatesPerSecond)

    return () => clearInterval(interval)
  }, [incrementRatePerSecond])

  return { value, rate: displayRate }
}

const formatNumber = (num: number): string => {
  return num.toLocaleString("en-US")
}

function StatCard({
  title,
  baseValue,
  incrementRate,
  showRate = true,
  children,
  className,
}: {
  title: string
  baseValue?: number
  incrementRate?: number
  showRate?: boolean
  children?: React.ReactNode
  className?: string
}) {
  const { value, rate } = useAnimatedNumber(baseValue || 0, incrementRate || 0)

  return (
    <div className={`bg-red-950/20 border border-red-900/30 p-4 md:p-6 ${className || ""}`}>
      <div className="space-y-2">
        <h2 className="my-0 font-mono font-medium text-xs md:text-sm tracking-tight uppercase text-red-400/80">
          {title}
        </h2>
        {baseValue !== undefined && (
          <>
            <div className="text-2xl md:text-4xl tracking-normal font-mono tabular-nums text-white">
              {formatNumber(value)}
            </div>
            {showRate && (
              <div className="text-xs md:text-sm text-red-400/60 font-mono tabular-nums">
                +{formatNumber(rate)}/s
              </div>
            )}
          </>
        )}
        {children}
      </div>
    </div>
  )
}

function MetricRow({
  label,
  baseValue,
  incrementRate,
  showRate = false,
  color = "text-white"
}: {
  label: string
  baseValue: number
  incrementRate: number
  showRate?: boolean
  color?: string
}) {
  const { value, rate } = useAnimatedNumber(baseValue, incrementRate)

  return (
    <li className="flex flex-wrap items-center justify-between gap-x-3">
      <h3 className="m-0 font-mono font-normal text-xs md:text-sm text-red-400/60 uppercase">
        {label}
      </h3>
      <div className="flex items-center gap-2 md:gap-4 text-right">
        <div className={`text-xs md:text-sm font-mono tabular-nums ${color}`}>
          {formatNumber(value)}
        </div>
        {showRate && (
          <div className="w-14 md:w-20 text-red-400/40 text-right text-xs font-mono tabular-nums">
            <span>+{formatNumber(rate)}</span>
            <span aria-label="per second">/s</span>
          </div>
        )}
      </div>
    </li>
  )
}

const memeStats = {
  totalMemesCreated: 2847293,
  memesThisWeek: 47832,
  sharesTotal: 18934562,
  viralMemes: 1247,
  platforms: {
    twitter: 8234561,
    reddit: 5432198,
    discord: 3267803,
    instagram: 2000000,
  },
  topMemes: [
    { text: "HOMEWORK DUE TOMORROW", shares: 847293, color: "text-red-500" },
    { text: "BOSS SAYS WORK LATE", shares: 623471, color: "text-orange-500" },
    { text: "ALARM DIDN'T GO OFF", shares: 512834, color: "text-yellow-500" },
    { text: "EX TEXTS YOU BACK", shares: 489127, color: "text-green-500" },
    { text: "MONDAY MORNING MEETING", shares: 367829, color: "text-blue-500" },
  ],
}

export function ViralStats() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-black to-red-950/5" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <p className="font-mono text-xs md:text-sm uppercase text-red-400/80 mb-2">
            Live Meme Statistics
            <span className="block text-red-400/50 font-mono">
              [REAL-TIME DATA]
            </span>
          </p>
        </div>

        {/* Main Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 mb-1.5">
          <StatCard
            title="Total Memes Created"
            baseValue={memeStats.totalMemesCreated}
            incrementRate={12}
            className="md:col-span-1"
          />
          <StatCard
            title="Total Shares"
            baseValue={memeStats.sharesTotal}
            incrementRate={89}
            className="md:col-span-1"
          />
          <StatCard
            title="Viral Memes (10K+ shares)"
            baseValue={memeStats.viralMemes}
            incrementRate={0.3}
            showRate={false}
            className="md:col-span-1"
          />
        </div>

        {/* Secondary Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5">
          {/* Platform Breakdown */}
          <StatCard title="Platform Distribution" className="flex-1">
            <ul className="space-y-1.5 list-none pl-0 mt-3">
              <MetricRow
                label="Twitter/X"
                baseValue={memeStats.platforms.twitter}
                incrementRate={34}
                showRate
              />
              <MetricRow
                label="Reddit"
                baseValue={memeStats.platforms.reddit}
                incrementRate={28}
                showRate
              />
              <MetricRow
                label="Discord"
                baseValue={memeStats.platforms.discord}
                incrementRate={19}
                showRate
              />
              <MetricRow
                label="Instagram"
                baseValue={memeStats.platforms.instagram}
                incrementRate={8}
                showRate
              />
            </ul>
          </StatCard>

          {/* Top Memes */}
          <StatCard title="Top Memes by Shares" className="flex-1">
            <ul className="space-y-1.5 list-none pl-0 mt-3">
              {memeStats.topMemes.map((meme, index) => (
                <li key={index} className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">
                    <span className={`text-xs ${meme.color}`}>■</span>
                    <span className="font-mono text-xs text-white/70 uppercase truncate max-w-[140px]">
                      {meme.text}
                    </span>
                  </span>
                  <span className="font-mono text-xs tabular-nums text-white">
                    {formatNumber(meme.shares)}
                  </span>
                </li>
              ))}
            </ul>
          </StatCard>

          {/* This Week */}
          <StatCard
            title="Created This Week"
            baseValue={memeStats.memesThisWeek}
            incrementRate={3}
            className="flex-1"
          >
            <div className="mt-3 pt-3 border-t border-red-900/30">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-red-400/60 uppercase">Avg per hour</span>
                <span className="font-mono text-sm tabular-nums text-white">
                  {formatNumber(Math.floor(memeStats.memesThisWeek / 168))}
                </span>
              </div>
            </div>
          </StatCard>
        </div>

        {/* Wolf Regions */}
        <div className="flex items-center gap-3 mt-6 text-sm font-mono">
          <span className="text-red-500 text-xs">▲</span>
          <span className="text-white font-medium">147</span>
          <span className="text-red-400/60">Countries Reached</span>
        </div>
      </div>
    </section>
  )
}

// Compact version for homepage
export function ViralStatsCompact() {
  const { value: totalMemes, rate: memeRate } = useAnimatedNumber(2847293, 12)
  const { value: totalShares, rate: shareRate } = useAnimatedNumber(18934562, 89)

  return (
    <div className="bg-black/80 border border-red-900/30 p-4 md:p-6">
      <p className="font-mono text-xs uppercase text-red-400/60 mb-4">
        Live Statistics
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-xl md:text-2xl font-mono tabular-nums text-white">
            {formatNumber(totalMemes)}
          </div>
          <div className="text-xs text-red-400/60 font-mono uppercase">
            Memes Created
          </div>
          <div className="text-xs text-red-400/40 font-mono tabular-nums mt-1">
            +{formatNumber(memeRate)}/s
          </div>
        </div>
        <div>
          <div className="text-xl md:text-2xl font-mono tabular-nums text-white">
            {formatNumber(totalShares)}
          </div>
          <div className="text-xs text-red-400/60 font-mono uppercase">
            Total Shares
          </div>
          <div className="text-xs text-red-400/40 font-mono tabular-nums mt-1">
            +{formatNumber(shareRate)}/s
          </div>
        </div>
      </div>
    </div>
  )
}
