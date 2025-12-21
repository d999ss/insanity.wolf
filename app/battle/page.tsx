import { Swords, Flame } from "lucide-react"
import { MemeBattle } from "@/components/meme-battle"
import { SiteNav } from "@/components/site-nav"
import { ScrollToTop } from "@/components/scroll-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meme Battle Royale | Vote for the Most Insane Solution",
  description: "Two memes enter. One meme leaves. Vote for the most INSANE Insanity Wolf solution and crown the champion!",
  openGraph: {
    title: "Insanity Wolf Meme Battle Royale",
    description: "Vote for the most extreme solution. Fight to the death. No mercy.",
  },
}

export default function BattlePage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <SiteNav />

      {/* Main Content */}
      <main className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Swords className="h-4 w-4 text-red-500" />
              <span className="text-red-400">FIGHT TO THE DEATH</span>
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              MEME BATTLE
              <span className="block text-red-500">ROYALE</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-xl text-red-300/80">
              Two memes enter. One meme leaves. Vote for the most INSANE solution and crown the champion!
            </p>
          </div>

          {/* Battle Arena */}
          <MemeBattle />

          {/* Battle Stats */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-red-900/30 bg-black/50 p-6 text-center">
              <div className="mb-2 text-4xl font-black text-red-500" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>2,140</div>
              <p className="text-sm font-bold uppercase tracking-wider text-red-400/60">BATTLES TODAY</p>
            </div>
            <div className="rounded-xl border border-red-900/30 bg-black/50 p-6 text-center">
              <div className="mb-2 text-4xl font-black text-red-500" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>89,432</div>
              <p className="text-sm font-bold uppercase tracking-wider text-red-400/60">TOTAL VOTES</p>
            </div>
            <div className="rounded-xl border border-red-900/30 bg-black/50 p-6 text-center">
              <div className="mb-2 flex items-center justify-center gap-2">
                <Flame className="h-8 w-8 text-red-500" />
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-red-400/60">BATTLE ACTIVE</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-900/50 bg-black px-6 py-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-red-400/50">
            INSANITY WOLF. Born from chaos. Fed by rage.
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
