/**
 * Daily Meme Generation Pipeline
 *
 * This script generates and publishes memes automatically.
 * Run via cron: 0 9 * * * npx ts-node scripts/generate-daily.ts
 *
 * Features:
 * - Generates memes from theme-specific patterns
 * - Scores and filters for quality
 * - Avoids duplicates
 * - Tags with theme clusters
 * - Pings sitemap after publishing
 */

import { generateMemesForTheme, scoreMeme, type ThemeCluster } from "../lib/meme-patterns"
import { generateMemeImage } from "../lib/generate-image"
import {
  generateSlug,
  generateFilename,
  saveMeme,
  memeExists,
  loadMemes,
  type Meme,
} from "../lib/memes"
import {
  VELOCITY_CONFIG,
  getThemesForDay,
  calculateVelocityStats,
} from "../lib/velocity"

// ============================================
// CONFIGURATION
// ============================================

const MIN_SCORE = 60 // Minimum quality score to publish
const MAX_RETRIES = 3 // Max attempts to find unique meme per theme

// ============================================
// PIPELINE FUNCTIONS
// ============================================

interface GenerationResult {
  success: boolean
  meme?: Meme
  error?: string
}

async function generateSingleMeme(
  theme: ThemeCluster
): Promise<GenerationResult> {
  // Get all memes for this theme
  const candidates = generateMemesForTheme(theme)

  // Filter by score and uniqueness
  for (const candidate of candidates) {
    // Check score
    if (candidate.score < MIN_SCORE) {
      continue
    }

    // Check if already exists
    if (memeExists(candidate.topText, candidate.bottomText)) {
      continue
    }

    // Found a good candidate - generate it
    try {
      const slug = generateSlug(candidate.topText, candidate.bottomText)
      const filename = generateFilename(candidate.topText, candidate.bottomText)

      console.log(`  Generating: ${candidate.topText} / ${candidate.bottomText}`)
      console.log(`  Score: ${candidate.score} | Theme: ${theme}`)

      const { webpPath } = await generateMemeImage(
        candidate.topText,
        candidate.bottomText,
        filename
      )

      const meme: Meme = {
        id: slug,
        slug,
        topText: candidate.topText,
        bottomText: candidate.bottomText,
        imageUrl: webpPath,
        createdAt: new Date().toISOString(),
        views: 0,
        shares: 0,
        theme,
        isPinned: false,
        remixCount: 0,
      }

      saveMeme(meme)

      return { success: true, meme }
    } catch (error) {
      console.error(`  Error generating meme: ${error}`)
      continue
    }
  }

  return {
    success: false,
    error: `No unique memes available for theme: ${theme}`,
  }
}

async function runDailyGeneration(): Promise<void> {
  console.log("=".repeat(50))
  console.log("INSANITY WOLF DAILY GENERATION PIPELINE")
  console.log(`Date: ${new Date().toISOString()}`)
  console.log("=".repeat(50))

  const dayOfWeek = new Date().getDay()
  const themes = getThemesForDay(dayOfWeek)

  console.log(`\nThemes for today (day ${dayOfWeek}): ${themes.join(", ")}`)
  console.log(`Target memes: ${VELOCITY_CONFIG.memesPerDay}`)
  console.log("")

  const results: GenerationResult[] = []
  const publishedThemes: ThemeCluster[] = []

  // Generate one meme per theme slot
  for (let i = 0; i < Math.min(themes.length, VELOCITY_CONFIG.memesPerDay); i++) {
    const theme = themes[i]
    console.log(`\n[${i + 1}/${VELOCITY_CONFIG.memesPerDay}] Theme: ${theme.toUpperCase()}`)

    const result = await generateSingleMeme(theme)
    results.push(result)

    if (result.success && result.meme) {
      publishedThemes.push(theme)
      console.log(`  ✓ Published: /meme/${result.meme.slug}`)
    } else {
      console.log(`  ✗ Failed: ${result.error}`)
    }
  }

  // Summary
  console.log("\n" + "=".repeat(50))
  console.log("SUMMARY")
  console.log("=".repeat(50))

  const successful = results.filter(r => r.success).length
  const failed = results.filter(r => !r.success).length

  console.log(`Published: ${successful}`)
  console.log(`Failed: ${failed}`)

  // Velocity stats
  const allMemes = loadMemes()
  const firstMeme = allMemes[allMemes.length - 1]
  const firstDate = firstMeme ? new Date(firstMeme.createdAt) : new Date()

  const stats = calculateVelocityStats(allMemes.length, firstDate, successful)

  console.log(`\nVelocity Stats:`)
  console.log(`  Total memes: ${stats.totalMemes}`)
  console.log(`  Days active: ${stats.daysActive}`)
  console.log(`  Average/day: ${stats.averagePerDay.toFixed(1)}`)
  console.log(`  On track: ${stats.onTrack ? "YES" : `NO (behind by ${stats.behindBy})`}`)

  // Ping sitemap if we published anything
  if (successful > 0) {
    console.log(`\nPinging sitemap...`)
    try {
      const response = await fetch(VELOCITY_CONFIG.sitemapPingUrl)
      console.log(`  Sitemap ping: ${response.ok ? "OK" : "FAILED"}`)
    } catch (error) {
      console.log(`  Sitemap ping: FAILED (${error})`)
    }
  }

  console.log("\n" + "=".repeat(50))
  console.log("PIPELINE COMPLETE")
  console.log("=".repeat(50))
}

// ============================================
// BATCH GENERATION (for backfilling)
// ============================================

async function batchGenerate(count: number): Promise<void> {
  console.log(`\nBatch generating ${count} memes...`)

  const allThemes: ThemeCluster[] = [
    "work", "monday", "coffee", "relationships",
    "technology", "social", "gym", "food",
    "sleep", "driving", "neighbors", "money",
  ]

  let generated = 0
  let themeIndex = 0

  while (generated < count) {
    const theme = allThemes[themeIndex % allThemes.length]
    console.log(`\n[${generated + 1}/${count}] Theme: ${theme}`)

    const result = await generateSingleMeme(theme)

    if (result.success) {
      generated++
      console.log(`  ✓ ${result.meme?.slug}`)
    } else {
      console.log(`  ✗ ${result.error}`)
    }

    themeIndex++

    // Avoid infinite loop if all memes exhausted
    if (themeIndex > count * 2) {
      console.log("\nNo more unique memes available.")
      break
    }
  }

  console.log(`\nBatch complete: ${generated} memes generated.`)
}

// ============================================
// CLI ENTRY POINT
// ============================================

const args = process.argv.slice(2)

if (args.includes("--batch")) {
  const countArg = args.find(a => a.startsWith("--count="))
  const count = countArg ? parseInt(countArg.split("=")[1]) : 50
  batchGenerate(count).catch(console.error)
} else if (args.includes("--theme")) {
  const themeArg = args.find(a => a.startsWith("--theme="))
  const theme = themeArg?.split("=")[1] as ThemeCluster
  if (theme) {
    generateSingleMeme(theme).then(result => {
      if (result.success) {
        console.log(`Generated: ${result.meme?.slug}`)
      } else {
        console.log(`Failed: ${result.error}`)
      }
    })
  }
} else {
  runDailyGeneration().catch(console.error)
}
