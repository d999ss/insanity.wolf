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
      <main className="pt-20 md:pt-24 pb-10 md:pb-16 px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Hero Section */}
          <div className="mb-8 md:mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Swords className="h-4 w-4 text-red-500" />
              <span className="text-red-400">FIGHT TO THE DEATH</span>
            </div>
            <h1 className="text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-5xl lg:text-6xl text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              MEME BATTLE
              <span className="block text-red-500">ROYALE</span>
            </h1>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-xl text-red-300/80">
              Vote for the most INSANE solution!
            </p>
          </div>

          {/* Battle Arena */}
          <MemeBattle />

          {/* Battle Stats */}
          <div className="mt-8 md:mt-16 grid gap-4 md:gap-6 grid-cols-3">
            <div className="border border-red-900/30 bg-black/50 p-3 md:p-6 text-center">
              <div className="mb-1 md:mb-2 text-2xl md:text-4xl font-black text-red-500" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>2,140</div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-red-400/60">BATTLES</p>
            </div>
            <div className="border border-red-900/30 bg-black/50 p-3 md:p-6 text-center">
              <div className="mb-1 md:mb-2 text-2xl md:text-4xl font-black text-red-500" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>89K</div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-red-400/60">VOTES</p>
            </div>
            <div className="border border-red-900/30 bg-black/50 p-3 md:p-6 text-center">
              <div className="mb-1 md:mb-2 flex items-center justify-center gap-2">
                <Flame className="h-6 w-6 md:h-8 md:w-8 text-red-500" />
              </div>
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-red-400/60">ACTIVE</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-900/50 bg-black px-4 md:px-6 py-6 md:py-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs md:text-sm text-red-400/50">
            INSANITY WOLF. Born from chaos. Fed by rage.
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
