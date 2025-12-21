"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="5" r="0.75" fill="currentColor" />
    </svg>
  )
}

function PixelGridTransition({
  firstContent,
  secondContent,
  isActive,
  gridSize = 25,
  animationStepDuration = 0.25,
  className,
}: {
  firstContent: React.ReactNode
  secondContent: React.ReactNode
  isActive: boolean
  gridSize?: number
  animationStepDuration?: number
  className?: string
}) {
  const [showPixels, setShowPixels] = useState(false)
  const [animState, setAnimState] = useState<"idle" | "growing" | "shrinking">("idle")
  const hasActivatedRef = useRef(false)

  const pixels = useMemo(() => {
    const total = gridSize * gridSize
    const result = []
    for (let n = 0; n < total; n++) {
      const row = Math.floor(n / gridSize)
      const col = n % gridSize
      // Red/black theme for Insanity Wolf
      const color = Math.random() > 0.85 ? "#dc2626" : "#1f1f1f"
      result.push({ id: n, row, col, color })
    }
    return result
  }, [gridSize])

  const [shuffledOrder, setShuffledOrder] = useState<number[]>([])

  useEffect(() => {
    if (!hasActivatedRef.current && !isActive) return
    if (isActive) hasActivatedRef.current = true

    const indices = pixels.map((_, i) => i)
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[indices[i], indices[j]] = [indices[j], indices[i]]
    }
    setShuffledOrder(indices)

    setShowPixels(true)
    setAnimState("growing")

    const shrinkTimer = setTimeout(() => setAnimState("shrinking"), animationStepDuration * 1000)
    const hideTimer = setTimeout(() => {
      setShowPixels(false)
      setAnimState("idle")
    }, animationStepDuration * 2000)

    return () => {
      clearTimeout(shrinkTimer)
      clearTimeout(hideTimer)
    }
  }, [isActive, animationStepDuration, pixels])

  const delayPerPixel = useMemo(() => animationStepDuration / pixels.length, [animationStepDuration, pixels.length])
  const orderMap = useMemo(() => {
    const map = new Map<number, number>()
    shuffledOrder.forEach((idx, order) => map.set(idx, order))
    return map
  }, [shuffledOrder])

  return (
    <div className={`w-full overflow-hidden max-w-full relative ${className || ""}`}>
      <motion.div
        className="h-full"
        aria-hidden={isActive}
        initial={{ opacity: 1 }}
        animate={{ opacity: isActive ? 0 : 1 }}
        transition={{ duration: 0, delay: animationStepDuration }}
      >
        {firstContent}
      </motion.div>

      <motion.div
        className="absolute inset-0 w-full h-full z-[2] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0, delay: animationStepDuration }}
        style={{ pointerEvents: isActive ? "auto" : "none" }}
        aria-hidden={!isActive}
      >
        {secondContent}
      </motion.div>

      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        }}
      >
        <AnimatePresence>
          {showPixels &&
            pixels.map((pixel) => {
              const order = orderMap.get(pixel.id) ?? 0
              return (
                <motion.div
                  key={pixel.id}
                  style={{
                    backgroundColor: pixel.color,
                    aspectRatio: "1 / 1",
                    gridArea: `${pixel.row + 1} / ${pixel.col + 1}`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: animState === "growing" ? 1 : 0,
                    scale: animState === "growing" ? 1 : 0,
                  }}
                  transition={{ duration: 0.01, delay: order * delayPerPixel }}
                />
              )
            })}
        </AnimatePresence>
      </div>
    </div>
  )
}

function StatCard({
  title,
  baseValue,
  incrementRate,
  showRate = true,
  children,
  infoContent,
  href,
  className,
}: {
  title: string
  baseValue?: number
  incrementRate?: number
  showRate?: boolean
  children?: React.ReactNode
  infoContent?: string
  href?: string
  className?: string
}) {
  const [showInfo, setShowInfo] = useState(false)
  const { value, rate } = useAnimatedNumber(baseValue || 0, incrementRate || 0)

  const statsContent = (
    <div className="bg-red-950/20 border border-red-900/30 p-4 md:p-6 w-full min-h-[120px] h-full">
      <div className="space-y-2">
        <h2 className="my-0 font-mono font-medium text-xs md:text-sm tracking-tight uppercase text-red-400/80 pr-6">
          {title}
        </h2>
        {baseValue !== undefined && (
          <>
            <div className="text-2xl md:text-4xl tracking-normal font-mono tabular-nums text-white">
              {formatNumber(value)}
            </div>
            {showRate && incrementRate && incrementRate > 0 && (
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

  const infoContentView = (
    <div className="bg-red-950/30 border border-red-900/30 p-4 md:p-6 w-full h-full overflow-y-auto flex flex-col gap-y-2">
      {href ? (
        <a
          href={href}
          tabIndex={showInfo ? 0 : -1}
          target="_blank"
          rel="noopener noreferrer"
          className="my-0 font-mono font-medium text-xs md:text-sm tracking-tight uppercase text-red-400 hover:underline underline-offset-2 inline-flex gap-x-0.5 items-center w-fit shrink-0"
        >
          {title}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z" />
          </svg>
        </a>
      ) : (
        <span className="my-0 font-mono font-medium text-xs md:text-sm tracking-tight uppercase text-red-400 shrink-0">
          {title}
        </span>
      )}
      <span className="tracking-tight text-xs md:text-sm text-red-400/70 leading-relaxed line-clamp-6">
        {infoContent}
      </span>
    </div>
  )

  return (
    <div className={`relative group overflow-hidden ${className || ""}`}>
      <PixelGridTransition
        firstContent={statsContent}
        secondContent={infoContentView}
        isActive={showInfo}
        gridSize={25}
        animationStepDuration={0.25}
        className="h-full"
      />
      {infoContent && (
        <div className={`absolute top-2 right-2 transition-opacity duration-150 z-[20] isolate ${showInfo ? "opacity-100" : "opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"}`}>
          <button
            aria-label={`Learn more about ${title}`}
            type="button"
            onClick={() => setShowInfo(!showInfo)}
            className="p-1 m-0 bg-transparent text-red-400/60 md:text-red-400/40 border-none md:border md:border-solid border-red-900/30 hover:text-red-400 hover:bg-red-950/50 transition-colors duration-150 flex items-center justify-center outline-none focus-visible:ring cursor-pointer"
          >
            <InfoIcon />
          </button>
        </div>
      )}
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
  merchOrders: 89234,
  platforms: {
    twitter: 8234561,
    reddit: 5432198,
    discord: 3267803,
    instagram: 2000000,
  },
  engagement: {
    laughsTriggered: 47293847,
    coffeeSpilled: 892341,
    bossesAngered: 234891,
    therapistsBooked: 12847,
  },
  topMemes: [
    { text: "HOMEWORK DUE TOMORROW", shares: 847293, color: "text-red-500" },
    { text: "BOSS SAYS WORK LATE", shares: 623471, color: "text-orange-500" },
    { text: "ALARM DIDN'T GO OFF", shares: 512834, color: "text-yellow-500" },
    { text: "EX TEXTS YOU BACK", shares: 489127, color: "text-green-500" },
    { text: "MONDAY MORNING MEETING", shares: 367829, color: "text-blue-500" },
  ],
  countries: [
    { code: "US", name: "United States", memes: 1247832, color: "#3b82f6" },
    { code: "GB", name: "United Kingdom", memes: 423891, color: "#1d4ed8" },
    { code: "CA", name: "Canada", memes: 312847, color: "#dc2626" },
    { code: "AU", name: "Australia", memes: 234891, color: "#16a34a" },
    { code: "DE", name: "Germany", memes: 189234, color: "#fbbf24" },
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
            infoContent="Total number of Insanity Wolf memes generated since 2009. Each meme represents someone embracing pure chaos."
            className="md:col-span-1"
          />
          <StatCard
            title="Total Shares"
            baseValue={memeStats.sharesTotal}
            incrementRate={89}
            infoContent="Combined shares across all platforms. Your meme could be the next viral sensation."
            className="md:col-span-1"
          />
          <StatCard
            title="Viral Memes (10K+ shares)"
            baseValue={memeStats.viralMemes}
            incrementRate={0.3}
            showRate={false}
            infoContent="Memes that achieved legendary status with over 10,000 shares. The cream of the chaos crop."
            className="md:col-span-1"
          />
        </div>

        {/* Secondary Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5">
          {/* Platform Breakdown */}
          <StatCard
            title="Platform Distribution"
            infoContent="Where your memes spread like wildfire. Twitter/X leads the pack for maximum chaos."
          >
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

          {/* Top Countries */}
          <StatCard
            title="Top Countries"
            infoContent="Global reach of chaos. The wolf knows no borders."
          >
            <ul className="space-y-1.5 list-none pl-0 mt-3">
              {memeStats.countries.map((country) => (
                <li key={country.code} className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2">
                    <span style={{ color: country.color }} className="text-xs">■</span>
                    <span className="font-mono text-xs text-white/70 uppercase">
                      {country.code}
                    </span>
                  </span>
                  <span className="font-mono text-xs tabular-nums text-white">
                    {formatNumber(country.memes)}
                  </span>
                </li>
              ))}
            </ul>
          </StatCard>

          {/* Engagement Metrics */}
          <StatCard
            title="Real World Impact"
            infoContent="The tangible effects of Insanity Wolf on society. Use responsibly (or don't)."
          >
            <ul className="space-y-1.5 list-none pl-0 mt-3">
              <MetricRow
                label="Laughs Triggered"
                baseValue={memeStats.engagement.laughsTriggered}
                incrementRate={156}
                showRate
              />
              <MetricRow
                label="Coffee Spilled"
                baseValue={memeStats.engagement.coffeeSpilled}
                incrementRate={3}
                showRate
              />
              <MetricRow
                label="Bosses Angered"
                baseValue={memeStats.engagement.bossesAngered}
                incrementRate={1.2}
                showRate
              />
              <MetricRow
                label="Therapists Booked"
                baseValue={memeStats.engagement.therapistsBooked}
                incrementRate={0.4}
                showRate
              />
            </ul>
          </StatCard>

          {/* Top Memes */}
          <StatCard
            title="Top Memes by Shares"
            infoContent="The most shared problems. Your daily struggles are content gold."
          >
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
            infoContent="Weekly meme production. The chaos never sleeps."
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

          {/* Merch Orders */}
          <StatCard
            title="Merch Orders"
            baseValue={memeStats.merchOrders}
            incrementRate={2}
            infoContent="Custom Insanity Wolf merchandise shipped worldwide. Wear your chaos with pride."
            href="/merch"
          />
        </div>

        {/* Footer Stats */}
        <div className="flex flex-wrap items-center gap-6 mt-6 text-sm font-mono">
          <div className="flex items-center gap-3">
            <span className="text-red-500 text-xs">▲</span>
            <span className="text-white font-medium">147</span>
            <span className="text-red-400/60">Countries Reached</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-red-500 text-xs">■</span>
            <span className="text-white font-medium">24/7</span>
            <span className="text-red-400/60">Chaos Generation</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-red-500 text-xs">●</span>
            <span className="text-white font-medium">∞</span>
            <span className="text-red-400/60">Insanity Level</span>
          </div>
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
