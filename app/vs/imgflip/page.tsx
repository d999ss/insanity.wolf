import { Metadata } from "next"
import Link from "next/link"
import { Check, X, Zap, ArrowRight, Crown, Flame } from "lucide-react"

export const metadata: Metadata = {
  title: "Insanity Wolf vs Imgflip - Best Meme Generator Comparison 2024",
  description: "Compare Insanity Wolf to Imgflip. See why creators choose Insanity Wolf for faster, funnier meme creation. No watermarks, no signup required.",
  keywords: ["imgflip alternative", "imgflip vs", "better than imgflip", "meme generator comparison", "best meme generator", "free meme maker"],
}

const COMPARISON = [
  { feature: "No signup required", us: true, them: false },
  { feature: "No watermarks on free tier", us: true, them: false },
  { feature: "Instant download", us: true, them: true },
  { feature: "Classic meme templates", us: true, them: true },
  { feature: "API access (free)", us: true, them: false },
  { feature: "Mobile optimized", us: true, them: true },
  { feature: "Dark mode", us: true, them: false },
  { feature: "Keyboard shortcuts", us: true, them: false },
  { feature: "Meme battles", us: true, them: false },
  { feature: "Weekly contests", us: true, them: false },
  { feature: "Share URL generation", us: true, them: true },
  { feature: "High-res downloads", us: true, them: false },
]

export default function VsImgflipPage() {
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
            Insanity Wolf vs <span className="text-red-500">Imgflip</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Looking for an Imgflip alternative? See why thousands of creators switched to Insanity Wolf.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick verdict */}
        <div className="bg-green-950/30 border border-green-500/30 p-6 mb-12 text-center">
          <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
          <h2 className="text-2xl font-black uppercase mb-2">The Verdict</h2>
          <p className="text-white/70">
            Insanity Wolf offers <span className="text-green-400 font-bold">no watermarks</span>, 
            <span className="text-green-400 font-bold"> no signup</span>, and 
            <span className="text-green-400 font-bold"> free API access</span> - 
            features Imgflip locks behind a paywall.
          </p>
        </div>

        {/* Comparison table */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6 text-center">Feature Comparison</h2>
          <div className="border border-red-900/30 overflow-hidden">
            <div className="grid grid-cols-3 bg-red-950/50 p-4 font-bold uppercase text-sm">
              <div>Feature</div>
              <div className="text-center text-green-400">Insanity Wolf</div>
              <div className="text-center text-white/50">Imgflip</div>
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
          <h2 className="text-2xl font-black uppercase mb-6">Why Creators Switch to Insanity Wolf</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold text-green-400 mb-2">No Watermarks Ever</h3>
              <p className="text-white/70 text-sm">Imgflip puts watermarks on free memes. We don't. Your memes, your brand.</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold text-green-400 mb-2">Zero Signup Friction</h3>
              <p className="text-white/70 text-sm">Start creating immediately. No email, no password, no BS.</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold text-green-400 mb-2">Free API Access</h3>
              <p className="text-white/70 text-sm">Build bots and integrations without paying. Imgflip charges for API.</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold text-green-400 mb-2">Community Features</h3>
              <p className="text-white/70 text-sm">Battles, contests, leaderboards. More than just a generator.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <Flame className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Ready to <span className="text-red-500">Switch</span>?
          </h2>
          <p className="text-white/70 mb-6">Try Insanity Wolf free. No signup required.</p>
          <Link href="/" className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-8 py-4 text-xl transition-all hover:scale-105">
            START CREATING FREE
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
