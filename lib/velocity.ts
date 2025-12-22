/**
 * 90-Day Content Velocity Model
 *
 * This defines the publishing cadence and growth targets.
 * Goal: Compound traffic through steady, theme-focused output.
 */

import { ThemeCluster } from "./meme-patterns"

// ============================================
// VELOCITY CONFIGURATION
// ============================================

export interface VelocityConfig {
  memesPerDay: number
  publishTime: string // 24h format, e.g. "09:00"
  timezone: string
  sitemapPingUrl: string
}

export const VELOCITY_CONFIG: VelocityConfig = {
  memesPerDay: 4, // 4 memes/day = 120/month = 360 in 90 days
  publishTime: "09:00", // Same time every day for freshness signals
  timezone: "America/Los_Angeles",
  sitemapPingUrl: "https://www.google.com/ping?sitemap=https://insanitywolf.com/sitemap.xml",
}

// ============================================
// 90-DAY THEME ROTATION
// ============================================

// Prioritized theme schedule - high-SEO-potential themes get more content
export interface ThemeSchedule {
  theme: ThemeCluster
  memesPerWeek: number
  priority: "high" | "medium" | "low"
}

export const THEME_SCHEDULE: ThemeSchedule[] = [
  // High priority (4 memes/week each) - 16 memes/week
  { theme: "work", memesPerWeek: 4, priority: "high" },
  { theme: "monday", memesPerWeek: 4, priority: "high" },
  { theme: "coffee", memesPerWeek: 4, priority: "high" },
  { theme: "relationships", memesPerWeek: 4, priority: "high" },

  // Medium priority (2 memes/week each) - 8 memes/week
  { theme: "technology", memesPerWeek: 2, priority: "medium" },
  { theme: "social", memesPerWeek: 2, priority: "medium" },
  { theme: "gym", memesPerWeek: 2, priority: "medium" },
  { theme: "food", memesPerWeek: 2, priority: "medium" },

  // Low priority (1 meme/week each) - 4 memes/week
  { theme: "sleep", memesPerWeek: 1, priority: "low" },
  { theme: "driving", memesPerWeek: 1, priority: "low" },
  { theme: "neighbors", memesPerWeek: 1, priority: "low" },
  { theme: "money", memesPerWeek: 1, priority: "low" },
]

// Total: 28 memes/week = 4/day average

// ============================================
// 90-DAY MILESTONES
// ============================================

export interface Milestone {
  day: number
  targetMemes: number
  targetIndexedPages: number
  description: string
  actions: string[]
}

export const MILESTONES: Milestone[] = [
  {
    day: 7,
    targetMemes: 28,
    targetIndexedPages: 20,
    description: "Week 1: Foundation",
    actions: [
      "All 12 theme cluster pages live",
      "Top 3 memes per cluster pinned",
      "Sitemap submitted to Google Search Console",
      "Verify images appearing in Google Images",
    ],
  },
  {
    day: 14,
    targetMemes: 56,
    targetIndexedPages: 50,
    description: "Week 2: Cluster Authority",
    actions: [
      "Check indexing rate in GSC",
      "Identify fastest-indexing themes",
      "Double down on high-performers",
      "Add internal links from blog/about pages",
    ],
  },
  {
    day: 30,
    targetMemes: 120,
    targetIndexedPages: 100,
    description: "Month 1: Traffic Signals",
    actions: [
      "First organic traffic from long-tail keywords",
      "Google Images impressions increasing",
      "Pin top 5 performers to homepage",
      "Create 'Best Of' compilation pages",
    ],
  },
  {
    day: 60,
    targetMemes: 240,
    targetIndexedPages: 200,
    description: "Month 2: Compounding",
    actions: [
      "Traffic should be 2-3x Month 1",
      "Remix chains producing user-generated content",
      "Top memes earning natural backlinks",
      "Expand to trending topics/events",
    ],
  },
  {
    day: 90,
    targetMemes: 360,
    targetIndexedPages: 300,
    description: "Month 3: Authority",
    actions: [
      "Established topical authority in core themes",
      "Predictable daily traffic baseline",
      "User-generated content > auto-generated",
      "Monetization optimization begins",
    ],
  },
]

// ============================================
// DAILY THEME SELECTION
// ============================================

// Returns which themes to generate for a given day
export function getThemesForDay(dayOfWeek: number): ThemeCluster[] {
  // dayOfWeek: 0 = Sunday, 1 = Monday, etc.
  const schedule: Record<number, ThemeCluster[]> = {
    0: ["relationships", "sleep", "social"], // Sunday - chill vibes
    1: ["monday", "work", "coffee", "monday"], // Monday - double monday content
    2: ["work", "technology", "gym", "food"], // Tuesday
    3: ["relationships", "work", "coffee", "social"], // Wednesday - hump day
    4: ["work", "technology", "driving", "money"], // Thursday
    5: ["work", "coffee", "food", "neighbors"], // Friday
    6: ["gym", "food", "relationships", "social"], // Saturday
  }

  return schedule[dayOfWeek] || schedule[1]
}

// Get next theme to generate (round-robin within day's themes)
export function getNextTheme(
  dayOfWeek: number,
  publishedToday: ThemeCluster[]
): ThemeCluster {
  const todaysThemes = getThemesForDay(dayOfWeek)

  // Find a theme we haven't published yet today
  for (const theme of todaysThemes) {
    if (!publishedToday.includes(theme)) {
      return theme
    }
  }

  // If all done, return highest priority theme
  return todaysThemes[0]
}

// ============================================
// VELOCITY TRACKING
// ============================================

export interface VelocityStats {
  totalMemes: number
  memesToday: number
  memesThisWeek: number
  memesThisMonth: number
  averagePerDay: number
  daysActive: number
  onTrack: boolean
  behindBy: number
}

export function calculateVelocityStats(
  memeCount: number,
  firstMemeDate: Date,
  memesPublishedToday: number
): VelocityStats {
  const now = new Date()
  const daysActive = Math.max(
    1,
    Math.floor((now.getTime() - firstMemeDate.getTime()) / (1000 * 60 * 60 * 24))
  )

  const targetMemes = daysActive * VELOCITY_CONFIG.memesPerDay
  const behindBy = Math.max(0, targetMemes - memeCount)
  const onTrack = behindBy === 0

  return {
    totalMemes: memeCount,
    memesToday: memesPublishedToday,
    memesThisWeek: Math.min(memeCount, 7 * VELOCITY_CONFIG.memesPerDay),
    memesThisMonth: Math.min(memeCount, 30 * VELOCITY_CONFIG.memesPerDay),
    averagePerDay: memeCount / daysActive,
    daysActive,
    onTrack,
    behindBy,
  }
}

// ============================================
// FRESHNESS SIGNALS
// ============================================

// Returns true if it's time to publish (based on config)
export function isPublishTime(): boolean {
  const now = new Date()
  const [targetHour, targetMinute] = VELOCITY_CONFIG.publishTime.split(":").map(Number)

  // Allow a 15-minute window
  const currentMinutes = now.getHours() * 60 + now.getMinutes()
  const targetMinutes = targetHour * 60 + targetMinute

  return Math.abs(currentMinutes - targetMinutes) <= 15
}

// Get next publish time
export function getNextPublishTime(): Date {
  const now = new Date()
  const [targetHour, targetMinute] = VELOCITY_CONFIG.publishTime.split(":").map(Number)

  const next = new Date(now)
  next.setHours(targetHour, targetMinute, 0, 0)

  // If we've passed today's time, schedule for tomorrow
  if (next <= now) {
    next.setDate(next.getDate() + 1)
  }

  return next
}
