import fs from "fs"
import path from "path"
import { ThemeCluster } from "./meme-patterns"

export interface Meme {
  id: string
  slug: string
  topText: string
  bottomText: string
  imageUrl: string
  createdAt: string
  views: number
  shares: number
  theme?: ThemeCluster
  isPinned?: boolean // For hub page pinning
  remixCount?: number // Track remix chains
  sourceSlug?: string // If this is a remix, link to original
}

const DATA_FILE = path.join(process.cwd(), "data", "memes.json")
const MEMES_DIR = path.join(process.cwd(), "public", "memes")

// Ensure directories exist
function ensureDirs() {
  const dataDir = path.dirname(DATA_FILE)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(MEMES_DIR)) {
    fs.mkdirSync(MEMES_DIR, { recursive: true })
  }
}

// Generate SEO-friendly slug from meme text
export function generateSlug(topText: string, bottomText: string): string {
  const combined = `${topText} ${bottomText}`
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 60)
    .replace(/-$/, "")

  const timestamp = Date.now().toString(36)
  return `${combined}-${timestamp}`
}

// Generate filename from meme text
export function generateFilename(topText: string, bottomText: string): string {
  const slug = `insanity-wolf-${topText}-${bottomText}`
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80)
  return slug
}

// Load all memes
export function loadMemes(): Meme[] {
  ensureDirs()
  if (!fs.existsSync(DATA_FILE)) {
    return []
  }
  try {
    const data = fs.readFileSync(DATA_FILE, "utf-8")
    return JSON.parse(data)
  } catch {
    return []
  }
}

// Save meme
export function saveMeme(meme: Meme): void {
  ensureDirs()
  const memes = loadMemes()
  const existingIndex = memes.findIndex(m => m.slug === meme.slug)
  if (existingIndex >= 0) {
    memes[existingIndex] = meme
  } else {
    memes.unshift(meme) // Add to beginning (newest first)
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(memes, null, 2))
}

// Get meme by slug
export function getMemeBySlug(slug: string): Meme | null {
  const memes = loadMemes()
  return memes.find(m => m.slug === slug) || null
}

// Get meme by ID
export function getMemeById(id: string): Meme | null {
  const memes = loadMemes()
  return memes.find(m => m.id === id) || null
}

// Get top memes (by views)
export function getTopMemes(limit = 50): Meme[] {
  const memes = loadMemes()
  return [...memes].sort((a, b) => b.views - a.views).slice(0, limit)
}

// Get newest memes
export function getNewestMemes(limit = 50): Meme[] {
  const memes = loadMemes()
  return memes.slice(0, limit)
}

// Get related memes (by keyword matching)
export function getRelatedMemes(meme: Meme, limit = 12): Meme[] {
  const memes = loadMemes()
  const words = `${meme.topText} ${meme.bottomText}`.toLowerCase().split(/\s+/)

  return memes
    .filter(m => m.slug !== meme.slug)
    .map(m => {
      const memeWords = `${m.topText} ${m.bottomText}`.toLowerCase()
      const score = words.reduce((acc, word) => {
        return acc + (memeWords.includes(word) ? 1 : 0)
      }, 0)
      return { meme: m, score }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.meme)
}

// Get all slugs (for sitemap)
export function getAllSlugs(): string[] {
  const memes = loadMemes()
  return memes.map(m => m.slug)
}

// Increment views
export function incrementViews(slug: string): void {
  const memes = loadMemes()
  const meme = memes.find(m => m.slug === slug)
  if (meme) {
    meme.views += 1
    fs.writeFileSync(DATA_FILE, JSON.stringify(memes, null, 2))
  }
}

// Get meme count
export function getMemeCount(): number {
  return loadMemes().length
}

// Get paginated memes
export function getPaginatedMemes(page: number, perPage = 24): { memes: Meme[], total: number, pages: number } {
  const allMemes = loadMemes()
  const total = allMemes.length
  const pages = Math.ceil(total / perPage)
  const start = (page - 1) * perPage
  const memes = allMemes.slice(start, start + perPage)
  return { memes, total, pages }
}

// ============================================
// THEME CLUSTER FUNCTIONS
// ============================================

// Get memes by theme
export function getMemesByTheme(theme: ThemeCluster, limit = 50): Meme[] {
  const memes = loadMemes()
  return memes
    .filter(m => m.theme === theme)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit)
}

// Get memes count by theme
export function getMemeCountByTheme(theme: ThemeCluster): number {
  const memes = loadMemes()
  return memes.filter(m => m.theme === theme).length
}

// Auto-detect theme from meme text
export function detectTheme(topText: string, bottomText: string): ThemeCluster {
  const text = `${topText} ${bottomText}`.toUpperCase()

  // Theme detection keywords
  const themeKeywords: Record<ThemeCluster, string[]> = {
    work: ["BOSS", "COWORKER", "MEETING", "OFFICE", "DEADLINE", "EMAIL", "PRINTER", "ZOOM", "SPREADSHEET", "CORPORATE", "RESIGNATION"],
    monday: ["MONDAY", "ALARM", "MORNING", "WEEKEND", "SUNDAY", "SNOOZE", "WAKE"],
    coffee: ["COFFEE", "CAFFEINE", "ESPRESSO", "DECAF", "CREAMER", "CUP", "BREW"],
    technology: ["WIFI", "PHONE", "COMPUTER", "LAPTOP", "BATTERY", "APP", "UPDATE", "PASSWORD", "AUTOCORRECT", "BLUETOOTH", "CHARGER"],
    relationships: ["EX", "CRUSH", "DATE", "PARTNER", "TEXT", "GHOST", "REPLY", "READ"],
    social: ["SOMEONE", "LINE", "CHEW", "WALK", "SEAT", "MOVIE", "STRANGER", "THEATER"],
    gym: ["GYM", "WORKOUT", "GAINS", "LEG DAY", "MUSCLE", "CARDIO", "PROTEIN", "REST DAY", "MACHINE"],
    sleep: ["SLEEP", "INSOMNIA", "3 AM", "BED", "NOCTURNAL", "SNORE", "MELATONIN"],
    food: ["LUNCH", "FOOD", "EAT", "FRIES", "PIZZA", "HUNGRY", "HANGRY", "LEFTOVERS", "FRIDGE", "DISH"],
    driving: ["TRAFFIC", "PARKING", "DRIVE", "CAR", "HONK", "RED LIGHT", "GAS", "ROAD"],
    neighbors: ["NEIGHBOR", "DOG", "BARK", "NOISE", "HOA", "FENCE", "PACKAGE"],
    money: ["RENT", "BILL", "MONEY", "BUDGET", "OVERDRAFT", "PAYCHECK", "TAX", "CREDIT"],
  }

  // Score each theme
  let bestTheme: ThemeCluster = "social" // default
  let bestScore = 0

  for (const [theme, keywords] of Object.entries(themeKeywords)) {
    const score = keywords.filter(kw => text.includes(kw)).length
    if (score > bestScore) {
      bestScore = score
      bestTheme = theme as ThemeCluster
    }
  }

  return bestTheme
}

// ============================================
// PINNED MEMES (FOR HUB AUTHORITY)
// ============================================

// Get pinned memes for a theme
export function getPinnedMemes(theme?: ThemeCluster): Meme[] {
  const memes = loadMemes()
  let filtered = memes.filter(m => m.isPinned)
  if (theme) {
    filtered = filtered.filter(m => m.theme === theme)
  }
  return filtered.sort((a, b) => b.views - a.views)
}

// Pin a meme
export function pinMeme(slug: string): void {
  const memes = loadMemes()
  const meme = memes.find(m => m.slug === slug)
  if (meme) {
    meme.isPinned = true
    fs.writeFileSync(DATA_FILE, JSON.stringify(memes, null, 2))
  }
}

// Unpin a meme
export function unpinMeme(slug: string): void {
  const memes = loadMemes()
  const meme = memes.find(m => m.slug === slug)
  if (meme) {
    meme.isPinned = false
    fs.writeFileSync(DATA_FILE, JSON.stringify(memes, null, 2))
  }
}

// ============================================
// REMIX CHAIN TRACKING
// ============================================

// Increment remix count
export function incrementRemixCount(slug: string): void {
  const memes = loadMemes()
  const meme = memes.find(m => m.slug === slug)
  if (meme) {
    meme.remixCount = (meme.remixCount || 0) + 1
    fs.writeFileSync(DATA_FILE, JSON.stringify(memes, null, 2))
  }
}

// Get most remixed memes
export function getMostRemixedMemes(limit = 20): Meme[] {
  const memes = loadMemes()
  return memes
    .filter(m => (m.remixCount || 0) > 0)
    .sort((a, b) => (b.remixCount || 0) - (a.remixCount || 0))
    .slice(0, limit)
}

// Get remix chain (all remixes of a meme)
export function getRemixChain(slug: string): Meme[] {
  const memes = loadMemes()
  return memes.filter(m => m.sourceSlug === slug)
}

// ============================================
// EXISTING SLUG CHECK (FOR GENERATION)
// ============================================

// Check if a meme already exists
export function memeExists(topText: string, bottomText: string): boolean {
  const memes = loadMemes()
  const normalized = (t: string, b: string) =>
    `${t.toLowerCase().trim()}|${b.toLowerCase().trim()}`
  const target = normalized(topText, bottomText)
  return memes.some(m => normalized(m.topText, m.bottomText) === target)
}

// Get all existing meme text combinations
export function getExistingMemeTexts(): Set<string> {
  const memes = loadMemes()
  return new Set(
    memes.map(m => `${m.topText.toLowerCase()}|${m.bottomText.toLowerCase()}`)
  )
}
