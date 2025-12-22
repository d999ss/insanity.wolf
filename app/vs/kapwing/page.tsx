import { Metadata } from "next"
import Link from "next/link"
import { Check, X, Zap, ArrowRight, Crown, Flame, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Insanity Wolf vs Kapwing - Free Meme Generator Comparison 2024",
  description: "Compare Insanity Wolf to Kapwing for meme creation. No signup, no watermarks, completely free. See why meme creators choose Insanity Wolf.",
  keywords: ["kapwing alternative", "kapwing vs", "better than kapwing", "free meme generator", "meme maker no watermark", "kapwing free alternative"],
}

const COMPARISON = [
  { feature: "No signup required", us: true, them: false },
  { feature: "No watermarks (free)", us: true, them: false },
  { feature: "Completely free", us: true, them: false },
  { feature: "Instant meme creation", us: true, them: true },
  { feature: "Classic meme templates", us: true, them: true },
  { feature: "No account needed", us: true, them: false },
  { feature: "Free API access", us: true, them: false },
  { feature: "Mobile optimized", us: true, them: true },
  { feature: "Meme battles", us: true, them: false },
  { feature: "Weekly contests", us: true, them: false },
  { feature: "High-res downloads", us: true, them: false },
  { feature: "Video editing", us: false, them: true },
]

export default function VsKapwingPage() {
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
            Insanity Wolf vs <span className="text-red-500">Kapwing</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Looking for a free Kapwing alternative for memes? Insanity Wolf is 100% free with no watermarks.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick verdict */}
        <div className="bg-green-950/30 border border-green-500/30 p-6 mb-12 text-center">
          <DollarSign className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
          <h2 className="text-2xl font-black uppercase mb-2">The Verdict</h2>
          <p className="text-white/70">
            Kapwing is a full video editor but charges <span className="text-red-400 font-bold">$16/month</span> for watermark-free exports.
            For memes, Insanity Wolf is <span className="text-green-400 font-bold">100% free</span> with
            <span className="text-green-400 font-bold"> no watermarks ever</span>.
          </p>
        </div>

        {/* Comparison table */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6 text-center">Feature Comparison</h2>
          <div className="border border-red-900/30 overflow-hidden">
            <div className="grid grid-cols-3 bg-red-950/50 p-4 font-bold uppercase text-sm">
              <div>Feature</div>
              <div className="text-center text-green-400">Insanity Wolf</div>
              <div className="text-center text-white/50">Kapwing</div>
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

        {/* Pricing comparison */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Pricing Comparison</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-950/30 border border-green-500/30 p-6">
              <h3 className="font-bold text-green-400 text-xl mb-4">Insanity Wolf</h3>
              <div className="text-4xl font-black mb-2">$0</div>
              <p className="text-white/50 text-sm mb-4">Forever free</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> Unlimited memes</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> No watermarks</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> No signup</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-400" /> Free API</li>
              </ul>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold text-white/50 text-xl mb-4">Kapwing Pro</h3>
              <div className="text-4xl font-black mb-2">$16<span className="text-lg text-white/50">/mo</span></div>
              <p className="text-white/50 text-sm mb-4">Billed annually</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-white/30" /> No watermarks</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-white/30" /> Video editing</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-white/30" /> Team features</li>
                <li className="flex items-center gap-2"><X className="h-4 w-4 text-red-400" /> Requires account</li>
              </ul>
            </div>
          </div>
        </div>

        {/* When to use each */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">When to Use Each</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-950/20 border border-green-500/30 p-6">
              <h3 className="font-bold text-green-400 mb-2">Use Insanity Wolf for:</h3>
              <ul className="text-white/70 text-sm space-y-2">
                <li>- Quick meme creation</li>
                <li>- Classic advice animal memes</li>
                <li>- When you need no watermarks free</li>
                <li>- Building meme bots (free API)</li>
                <li>- Meme battles and contests</li>
              </ul>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold text-white/50 mb-2">Use Kapwing for:</h3>
              <ul className="text-white/50 text-sm space-y-2">
                <li>- Video editing projects</li>
                <li>- Subtitles and captions</li>
                <li>- Team collaboration</li>
                <li>- Complex multimedia content</li>
                <li>- Professional video work</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <Flame className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Just Need <span className="text-red-500">Memes</span>?
          </h2>
          <p className="text-white/70 mb-6">Skip the $16/month. Create unlimited memes free.</p>
          <Link href="/" className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-8 py-4 text-xl transition-all hover:scale-105">
            START CREATING FREE
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
