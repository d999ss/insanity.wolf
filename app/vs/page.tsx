import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Trophy, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Insanity Wolf vs Other Meme Generators - Comparison Hub",
  description: "Compare Insanity Wolf to Imgflip, Kapwing, Make a Meme, and other meme generators. See why creators choose Insanity Wolf.",
  keywords: ["meme generator comparison", "best meme generator", "imgflip alternative", "kapwing alternative", "free meme maker"],
}

const COMPETITORS = [
  {
    name: "Imgflip",
    slug: "imgflip",
    tagline: "The popular choice, but with watermarks",
    wins: ["No watermarks", "No signup", "Free API"],
  },
  {
    name: "Kapwing",
    slug: "kapwing",
    tagline: "Great for video, expensive for memes",
    wins: ["100% free", "No subscription", "Instant access"],
  },
  {
    name: "Make a Meme",
    slug: "makeameme",
    tagline: "Simple but dated",
    wins: ["Modern interface", "Dark mode", "Fewer ads"],
  },
  {
    name: "Meme Generator",
    slug: "memegenerator",
    tagline: "The OG, stuck in 2010",
    wins: ["No signup needed", "Mobile optimized", "Fast loading"],
  },
]

export default function VsIndexPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-600 text-white text-xs font-bold uppercase mb-4">
            <Trophy className="h-4 w-4" />
            Comparisons
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            How We <span className="text-red-500">Stack Up</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            See how Insanity Wolf compares to other popular meme generators.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick summary */}
        <div className="bg-green-950/30 border border-green-500/30 p-6 mb-12 text-center">
          <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
          <h2 className="text-xl font-black uppercase mb-2">TL;DR</h2>
          <p className="text-white/70">
            Insanity Wolf: <span className="text-green-400 font-bold">No signup</span>,
            <span className="text-green-400 font-bold"> no watermarks</span>,
            <span className="text-green-400 font-bold"> free API</span>,
            <span className="text-green-400 font-bold"> meme battles</span>.
            Everything you need, nothing you don't.
          </p>
        </div>

        {/* Comparison links */}
        <div className="grid gap-4 mb-12">
          {COMPETITORS.map((competitor) => (
            <Link
              key={competitor.slug}
              href={"/vs/" + competitor.slug}
              className="group bg-red-950/20 border border-red-900/30 hover:border-red-500 p-6 flex items-center justify-between transition-all"
            >
              <div>
                <h2 className="text-xl font-bold mb-1">
                  Insanity Wolf vs <span className="text-red-400">{competitor.name}</span>
                </h2>
                <p className="text-white/50 text-sm mb-2">{competitor.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {competitor.wins.map((win, i) => (
                    <span key={i} className="text-xs bg-green-900/30 text-green-400 px-2 py-1">
                      {win}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowRight className="h-6 w-6 text-white/30 group-hover:text-white transition-colors" />
            </Link>
          ))}
        </div>

        {/* Overall winner */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Still Not <span className="text-red-500">Convinced</span>?
          </h2>
          <p className="text-white/70 mb-6">Try it yourself. Takes 30 seconds.</p>
          <Link href="/" className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-8 py-4 text-xl transition-all hover:scale-105">
            MAKE A MEME NOW
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
