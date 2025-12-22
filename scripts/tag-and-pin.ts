/**
 * Tag & Pin Script
 *
 * Tags existing memes with themes and pins top performers.
 * Run once after initial seed, then periodically for new memes.
 */

import fs from "fs"
import path from "path"
import { loadMemes, detectTheme, type Meme } from "../lib/memes"
import { ThemeCluster } from "../lib/meme-patterns"

const DATA_FILE = path.join(process.cwd(), "data", "memes.json")

// Number of top memes to pin per theme
const PINS_PER_THEME = 3

// Number of top memes to pin globally (for homepage)
const GLOBAL_PINS = 10

async function tagAndPin(): Promise<void> {
  console.log("=".repeat(50))
  console.log("TAGGING AND PINNING MEMES")
  console.log("=".repeat(50))

  const memes = loadMemes()
  console.log(`\nTotal memes: ${memes.length}`)

  // Step 1: Tag all memes with themes
  console.log("\n1. Tagging memes with themes...")
  let taggedCount = 0

  for (const meme of memes) {
    if (!meme.theme) {
      meme.theme = detectTheme(meme.topText, meme.bottomText)
      taggedCount++
    }
    // Reset pins - we'll recalculate
    meme.isPinned = false
  }

  console.log(`   Tagged ${taggedCount} memes`)

  // Step 2: Count memes per theme
  console.log("\n2. Theme distribution:")
  const themeCounts: Record<ThemeCluster, number> = {
    work: 0, monday: 0, coffee: 0, technology: 0,
    relationships: 0, social: 0, gym: 0, sleep: 0,
    food: 0, driving: 0, neighbors: 0, money: 0,
  }

  for (const meme of memes) {
    if (meme.theme) {
      themeCounts[meme.theme]++
    }
  }

  for (const [theme, count] of Object.entries(themeCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`   ${theme}: ${count}`)
  }

  // Step 3: Pin top memes per theme
  console.log(`\n3. Pinning top ${PINS_PER_THEME} memes per theme...`)
  const themes = Object.keys(themeCounts) as ThemeCluster[]

  for (const theme of themes) {
    const themeMemes = memes
      .filter(m => m.theme === theme)
      .sort((a, b) => b.views - a.views)
      .slice(0, PINS_PER_THEME)

    for (const meme of themeMemes) {
      meme.isPinned = true
    }

    if (themeMemes.length > 0) {
      console.log(`   ${theme}: pinned ${themeMemes.length} memes`)
    }
  }

  // Step 4: Pin global top memes
  console.log(`\n4. Pinning global top ${GLOBAL_PINS} memes...`)
  const globalTop = [...memes]
    .sort((a, b) => b.views - a.views)
    .slice(0, GLOBAL_PINS)

  for (const meme of globalTop) {
    meme.isPinned = true
  }

  console.log(`   Pinned ${globalTop.length} global top memes`)

  // Step 5: Save
  console.log("\n5. Saving...")
  fs.writeFileSync(DATA_FILE, JSON.stringify(memes, null, 2))

  // Final stats
  const pinnedTotal = memes.filter(m => m.isPinned).length
  console.log(`\nComplete! ${pinnedTotal} memes are now pinned.`)

  // List pinned memes
  console.log("\nPinned memes:")
  const pinned = memes.filter(m => m.isPinned).sort((a, b) => b.views - a.views)
  for (const meme of pinned) {
    console.log(`  [${meme.theme}] ${meme.topText} - ${meme.bottomText} (${meme.views} views)`)
  }
}

tagAndPin().catch(console.error)
