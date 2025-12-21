import { Zap } from "lucide-react"
import { MemeGenerator } from "@/components/meme-generator"
import { SiteNav } from "@/components/site-nav"
import { ScrollToTop } from "@/components/scroll-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create Your Own Insanity Wolf Meme | Free Generator",
  description: "Create your own Insanity Wolf meme in seconds. Enter your problem, add an EXTREME solution, download and share. Free meme generator.",
  openGraph: {
    title: "Create Your Own Insanity Wolf Meme",
    description: "The legendary meme generator. Enter problem. Add extreme solution. Unleash chaos.",
  },
}

export default function CreatePage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <SiteNav />

      {/* Main Content */}
      <main className="pt-20 md:pt-24 pb-10 md:pb-16 px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-8 md:mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Zap className="h-4 w-4 text-red-500" />
              <span className="text-red-400">MEME FORGE</span>
            </div>
            <h1
              className="text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-5xl lg:text-6xl text-white"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              CREATE YOUR
              <span className="block text-red-500">INSANITY WOLF MEME</span>
            </h1>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-lg text-red-300/70">
              Enter problem. Add EXTREME solution. Download.
            </p>
          </div>

          {/* Meme Generator */}
          <MemeGenerator />

          {/* Tips */}
          <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
            <div className="border border-red-900/30 bg-red-950/10 p-4 md:p-6 text-center">
              <h3 className="mb-2 font-bold text-red-400 uppercase text-sm md:text-base" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Step 1</h3>
              <p className="text-xs md:text-sm text-red-300/60">Enter a mundane problem in TOP TEXT</p>
            </div>
            <div className="border border-red-900/30 bg-red-950/10 p-4 md:p-6 text-center">
              <h3 className="mb-2 font-bold text-red-400 uppercase text-sm md:text-base" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Step 2</h3>
              <p className="text-xs md:text-sm text-red-300/60">Add EXTREME solution in BOTTOM TEXT</p>
            </div>
            <div className="border border-red-900/30 bg-red-950/10 p-4 md:p-6 text-center">
              <h3 className="mb-2 font-bold text-red-400 uppercase text-sm md:text-base" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Step 3</h3>
              <p className="text-xs md:text-sm text-red-300/60">Download and share with the world</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-900/30 bg-black px-4 md:px-6 py-6 md:py-8">
        <div className="mx-auto max-w-7xl text-center text-xs md:text-sm text-red-400/50">
          <p>Insanity Wolf - Born from chaos since 2009. DON'T follow this advice.</p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
