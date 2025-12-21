import { Zap } from "lucide-react"
import { MemeGenerator } from "@/components/meme-generator"
import { SiteNav } from "@/components/site-nav"
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
      <main className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Zap className="h-4 w-4 text-red-500" />
              <span className="text-red-400">MEME FORGE</span>
            </div>
            <h1
              className="text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl text-white"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              CREATE YOUR
              <span className="block text-red-500">INSANITY WOLF MEME</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-red-300/70">
              Enter your problem. Enter your EXTREME solution. Download and unleash chaos.
            </p>
          </div>

          {/* Meme Generator */}
          <MemeGenerator />

          {/* Tips */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-red-900/30 bg-red-950/10 p-6 text-center">
              <h3 className="mb-2 font-bold text-red-400 uppercase" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Step 1</h3>
              <p className="text-sm text-red-300/60">Enter a mundane everyday problem in the TOP TEXT field</p>
            </div>
            <div className="rounded-xl border border-red-900/30 bg-red-950/10 p-6 text-center">
              <h3 className="mb-2 font-bold text-red-400 uppercase" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Step 2</h3>
              <p className="text-sm text-red-300/60">Enter an EXTREMELY disproportionate solution in the BOTTOM TEXT</p>
            </div>
            <div className="rounded-xl border border-red-900/30 bg-red-950/10 p-6 text-center">
              <h3 className="mb-2 font-bold text-red-400 uppercase" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Step 3</h3>
              <p className="text-sm text-red-300/60">Download and share your creation with the world</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-900/30 bg-black px-6 py-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-red-400/50">
          <p>Insanity Wolf - Born from chaos since 2009. DON'T follow this advice.</p>
        </div>
      </footer>
    </div>
  )
}
