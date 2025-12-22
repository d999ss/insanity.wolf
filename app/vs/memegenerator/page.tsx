import { Metadata } from "next"
import Link from "next/link"
import { Check, X, Zap, ArrowRight, Crown, Flame, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Insanity Wolf vs Meme Generator - Best Meme Maker Comparison 2024",
  description: "Compare Insanity Wolf to memegenerator.net. Faster, cleaner, more features. See why Insanity Wolf is the better choice for meme creation.",
  keywords: ["meme generator alternative", "memegenerator.net vs", "better than meme generator", "meme maker comparison", "best meme site"],
}

const COMPARISON = [
  { feature: "No signup required", us: true, them: false },
  { feature: "No watermarks", us: true, them: false },
  { feature: "Fast, modern site", us: true, them: false },
  { feature: "Classic templates", us: true, them: true },
  { feature: "Free API access", us: true, them: false },
  { feature: "Mobile optimized", us: true, them: false },
  { feature: "Dark mode", us: true, them: false },
  { feature: "Keyboard shortcuts", us: true, them: false },
  { feature: "Meme battles", us: true, them: false },
  { feature: "Weekly contests", us: true, them: false },
  { feature: "Large template library", us: false, them: true },
  { feature: "Instant download", us: true, them: true },
]

export default function VsMemegeneratorPage() {
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
            Insanity Wolf vs <span className="text-red-500">Meme Generator</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            memegenerator.net is the OG, but it's showing its age. See how Insanity Wolf compares.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick verdict */}
        <div className="bg-green-950/30 border border-green-500/30 p-6 mb-12 text-center">
          <Clock className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
          <h2 className="text-2xl font-black uppercase mb-2">The Verdict</h2>
          <p className="text-white/70">
            Meme Generator has history, but its <span className="text-red-400 font-bold">outdated interface</span> and
            <span className="text-red-400 font-bold"> required signup</span> make it frustrating.
            Insanity Wolf is <span className="text-green-400 font-bold">modern, fast, and signup-free</span>.
          </p>
        </div>

        {/* Comparison table */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6 text-center">Feature Comparison</h2>
          <div className="border border-red-900/30 overflow-hidden">
            <div className="grid grid-cols-3 bg-red-950/50 p-4 font-bold uppercase text-sm">
              <div>Feature</div>
              <div className="text-center text-green-400">Insanity Wolf</div>
              <div className="text-center text-white/50">Meme Generator</div>
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

        {/* Problems with MG */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Why People Leave Meme Generator</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold text-red-400 mb-2">Forced Signup</h3>
              <p className="text-white/70 text-sm">Can't download without creating an account. Who has time for that?</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold text-red-400 mb-2">Dated Interface</h3>
              <p className="text-white/70 text-sm">Looks like it was built in 2010 and never updated. Because it was.</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold text-red-400 mb-2">Watermarks</h3>
              <p className="text-white/70 text-sm">Free tier has watermarks. Your memes shouldn't advertise their site.</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold text-red-400 mb-2">Slow & Clunky</h3>
              <p className="text-white/70 text-sm">Heavy site with too many ads slowing everything down.</p>
            </div>
          </div>
        </div>

        {/* Why IW */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Why Insanity Wolf Works Better</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-950/20 border border-green-500/30 p-6">
              <h3 className="font-bold text-green-400 mb-2">Zero Friction</h3>
              <p className="text-white/70 text-sm">Land on the site, make a meme, download it. Done in 30 seconds.</p>
            </div>
            <div className="bg-green-950/20 border border-green-500/30 p-6">
              <h3 className="font-bold text-green-400 mb-2">Built in 2024</h3>
              <p className="text-white/70 text-sm">Modern tech stack, fast loading, works great on any device.</p>
            </div>
            <div className="bg-green-950/20 border border-green-500/30 p-6">
              <h3 className="font-bold text-green-400 mb-2">Power Features</h3>
              <p className="text-white/70 text-sm">Keyboard shortcuts, API access, meme battles. For serious memers.</p>
            </div>
            <div className="bg-green-950/20 border border-green-500/30 p-6">
              <h3 className="font-bold text-green-400 mb-2">Community</h3>
              <p className="text-white/70 text-sm">Weekly contests, leaderboards, meme of the day. Be part of something.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <Flame className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Time for an <span className="text-red-500">Upgrade</span>?
          </h2>
          <p className="text-white/70 mb-6">The OG had its day. This is the new generation.</p>
          <Link href="/" className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-8 py-4 text-xl transition-all hover:scale-105">
            START CREATING FREE
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
