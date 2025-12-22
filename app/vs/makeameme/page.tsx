import { Metadata } from "next"
import Link from "next/link"
import { Check, X, Zap, ArrowRight, Crown, Flame, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Insanity Wolf vs Make a Meme - Meme Generator Comparison 2024",
  description: "Compare Insanity Wolf to Make a Meme. Better features, no ads, faster creation. See why creators are switching to Insanity Wolf.",
  keywords: ["makeameme alternative", "make a meme vs", "better than makeameme", "meme generator comparison", "best meme maker"],
}

const COMPARISON = [
  { feature: "No signup required", us: true, them: true },
  { feature: "No watermarks", us: true, them: true },
  { feature: "Minimal ads", us: true, them: false },
  { feature: "Fast loading", us: true, them: false },
  { feature: "Classic meme templates", us: true, them: true },
  { feature: "Free API access", us: true, them: false },
  { feature: "Dark mode", us: true, them: false },
  { feature: "Keyboard shortcuts", us: true, them: false },
  { feature: "Meme battles", us: true, them: false },
  { feature: "Weekly contests", us: true, them: false },
  { feature: "Share URL generation", us: true, them: true },
  { feature: "Modern interface", us: true, them: false },
]

export default function VsMakeamemePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-600 text-white text-xs font-bold uppercase mb-4">
            <Crown className="h-4 w-4" />
            Comparison
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Insanity Wolf vs <span className="text-red-500">Make a Meme</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Same basic features, but Insanity Wolf offers a faster, cleaner, ad-free experience with bonus features.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick verdict */}
        <div className="bg-green-950/30 border border-green-500/30 p-6 mb-12 text-center">
          <Sparkles className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
          <h2 className="text-2xl font-black uppercase mb-2">The Verdict</h2>
          <p className="text-white/70">
            Both are free meme generators, but Insanity Wolf has a
            <span className="text-green-400 font-bold"> modern dark interface</span>,
            <span className="text-green-400 font-bold"> fewer ads</span>, and exclusive features like
            <span className="text-green-400 font-bold"> meme battles</span> and
            <span className="text-green-400 font-bold"> weekly contests</span>.
          </p>
        </div>

        {/* Comparison table */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6 text-center">Feature Comparison</h2>
          <div className="border border-red-900/30 overflow-hidden">
            <div className="grid grid-cols-3 bg-red-950/50 p-4 font-bold uppercase text-sm">
              <div>Feature</div>
              <div className="text-center text-green-400">Insanity Wolf</div>
              <div className="text-center text-white/50">Make a Meme</div>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-4 border-t border-red-900/30 items-center">
                <div className="text-white/80">{row.feature}</div>
                <div className="text-center">
                  {row.us ? <Check className="h-5 w-5 text-green-400 mx-auto" /> : <X className="h-5 w-5 text-red-400 mx-auto" />}
                </div>
                <div className="text-center">
                  {row.them ? <Check className="h-5 w-5 text-green-400 mx-auto" /> : <X className="h-5 w-5 text-red-400 mx-auto" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why switch */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Why Creators Switch</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold text-green-400 mb-2">Cleaner Experience</h3>
              <p className="text-white/70 text-sm">No intrusive ads, no pop-ups, no distractions. Just memes.</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold text-green-400 mb-2">Dark Mode Default</h3>
              <p className="text-white/70 text-sm">Easy on the eyes. Perfect for late-night meme sessions.</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold text-green-400 mb-2">Power User Features</h3>
              <p className="text-white/70 text-sm">Keyboard shortcuts for rapid meme creation. Press ? to see them all.</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold text-green-400 mb-2">Community Features</h3>
              <p className="text-white/70 text-sm">Meme battles, weekly contests, leaderboards. It's a whole community.</p>
            </div>
          </div>
        </div>

        {/* Speed comparison */}
        <div className="mb-12 bg-red-950/20 border border-red-900/30 p-6">
          <h2 className="text-xl font-black uppercase mb-4 text-center">Performance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-green-400 font-bold mb-2">Insanity Wolf</div>
              <div className="text-3xl font-black">~1.2s</div>
              <div className="text-white/50 text-sm">Page load time</div>
            </div>
            <div className="text-center">
              <div className="text-white/50 font-bold mb-2">Make a Meme</div>
              <div className="text-3xl font-black text-white/50">~3.5s</div>
              <div className="text-white/50 text-sm">Page load time (with ads)</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <Flame className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Ready for a <span className="text-red-500">Better</span> Experience?
          </h2>
          <p className="text-white/70 mb-6">Faster. Cleaner. More features. Still free.</p>
          <Link href="/" className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-8 py-4 text-xl transition-all hover:scale-105">
            START CREATING FREE
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
