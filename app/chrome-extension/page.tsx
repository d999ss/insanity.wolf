import { Metadata } from "next"
import Link from "next/link"
import { Chrome, Download, Zap, Image, Share2, ArrowRight, Star, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Insanity Wolf Chrome Extension - Meme Generator Browser Extension",
  description: "Install the Insanity Wolf Chrome extension for one-click meme creation. Generate memes without leaving your current page.",
  keywords: ["chrome extension meme", "meme generator extension", "browser meme maker", "insanity wolf chrome", "meme extension"],
}

const FEATURES = [
  {
    icon: Zap,
    title: "One-Click Access",
    description: "Click the icon in your toolbar to instantly open the meme generator",
  },
  {
    icon: Image,
    title: "Right-Click Any Image",
    description: "Right-click images on any webpage to turn them into meme templates",
  },
  {
    icon: Share2,
    title: "Quick Share",
    description: "Share memes directly to Twitter, Reddit, or copy the link",
  },
]

const SCREENSHOTS = [
  { title: "Toolbar Button", desc: "Quick access from any page" },
  { title: "Context Menu", desc: "Right-click to meme any image" },
  { title: "Popup Generator", desc: "Full generator in a popup" },
]

export default function ChromeExtensionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-600 text-white text-xs font-bold uppercase mb-4">
            <Chrome className="h-4 w-4" />
            Browser Extension
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Chrome <span className="text-yellow-400">Extension</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Create memes without leaving your current page. One-click access from any website.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Install CTA */}
        <div className="bg-yellow-950/30 border border-yellow-500/30 p-8 mb-12 text-center">
          <Chrome className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-black uppercase mb-4">Install Extension</h2>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-8 py-4 text-xl transition-colors"
          >
            <Download className="h-6 w-6" />
            ADD TO CHROME
          </a>
          <p className="text-white/50 text-sm mt-4">Coming Soon - Be notified when it launches</p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white/50 text-sm">Coming to Chrome Web Store</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {FEATURES.map((feature, i) => (
              <div key={i} className="bg-red-950/20 border border-red-900/30 p-6">
                <feature.icon className="h-8 w-8 text-yellow-400 mb-3" />
                <h3 className="font-bold mb-1">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots placeholder */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {SCREENSHOTS.map((shot, i) => (
              <div key={i} className="bg-red-950/20 border border-red-900/30 p-4">
                <div className="aspect-video bg-black/50 flex items-center justify-center mb-3">
                  <span className="text-4xl opacity-30">{i + 1}</span>
                </div>
                <h3 className="font-bold text-sm">{shot.title}</h3>
                <p className="text-white/50 text-xs">{shot.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Permissions */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Permissions</h2>
          <div className="bg-green-950/20 border border-green-500/30 p-6">
            <p className="text-white/70 mb-4">The extension only requests minimal permissions:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-white/70">Context menus - to add "Create meme" to right-click menu</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-white/70">Active tab - to get images you right-click on</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400">✗</span>
                <span className="text-white/50">No browsing history access</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400">✗</span>
                <span className="text-white/50">No data collection</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alternative */}
        <div className="mb-12 bg-red-950/20 border border-red-900/30 p-6">
          <h2 className="text-xl font-black uppercase mb-4">Don't Want an Extension?</h2>
          <p className="text-white/70 mb-4">Try our lightweight bookmarklet instead - no installation required.</p>
          <Link href="/tools/bookmarklet" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300">
            Get the Bookmarklet
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Notify */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <h2 className="text-3xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Get <span className="text-yellow-400">Notified</span>
          </h2>
          <p className="text-white/70 mb-6">Be the first to know when the extension launches.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-black border border-red-900/50 px-4 py-3 text-white placeholder:text-white/30 focus:border-yellow-500 focus:outline-none"
            />
            <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold uppercase px-6 py-3 transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
