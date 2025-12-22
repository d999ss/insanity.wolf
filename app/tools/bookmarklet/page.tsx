"use client"

import { useState } from "react"
import Link from "next/link"
import { Bookmark, Copy, Check, ArrowRight, Zap, MousePointer } from "lucide-react"

const BOOKMARKLET_CODE = `javascript:(function(){window.open('https://insanitywolf.com?ref=bookmarklet','_blank','width=600,height=700')})();`

export default function BookmarkletPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(BOOKMARKLET_CODE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase mb-4">
            <Bookmark className="h-4 w-4" />
            Tool
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Meme <span className="text-blue-400">Bookmarklet</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            One-click meme creation from any webpage. Drag to your bookmarks bar for instant access.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* The bookmarklet */}
        <div className="bg-blue-950/30 border border-blue-500/30 p-8 mb-12 text-center">
          <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-black uppercase mb-4">Drag This to Your Bookmarks Bar</h2>

          <a
            href={BOOKMARKLET_CODE}
            onClick={(e) => e.preventDefault()}
            draggable="true"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-black uppercase px-8 py-4 text-xl cursor-grab active:cursor-grabbing hover:from-red-500 hover:to-orange-500 transition-colors"
          >
            <MousePointer className="h-6 w-6" />
            INSANITY WOLF
          </a>

          <p className="text-white/50 text-sm mt-4">
            Drag the button above to your browser's bookmarks bar
          </p>
        </div>

        {/* How to install */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">How to Install</h2>
          <div className="space-y-4">
            <div className="bg-red-950/20 border border-red-900/30 p-6 flex gap-4">
              <div className="text-2xl font-black text-red-500">1</div>
              <div>
                <h3 className="font-bold mb-1">Show Your Bookmarks Bar</h3>
                <p className="text-white/70 text-sm">Press Ctrl+Shift+B (Windows) or Cmd+Shift+B (Mac) to show your bookmarks bar</p>
              </div>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6 flex gap-4">
              <div className="text-2xl font-black text-red-500">2</div>
              <div>
                <h3 className="font-bold mb-1">Drag the Button</h3>
                <p className="text-white/70 text-sm">Click and drag the "INSANITY WOLF" button above to your bookmarks bar</p>
              </div>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6 flex gap-4">
              <div className="text-2xl font-black text-red-500">3</div>
              <div>
                <h3 className="font-bold mb-1">Click Anytime</h3>
                <p className="text-white/70 text-sm">Click the bookmark from any webpage to instantly open Insanity Wolf</p>
              </div>
            </div>
          </div>
        </div>

        {/* Manual install */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Manual Installation</h2>
          <p className="text-white/70 mb-4">If dragging doesn't work, copy this code and create a new bookmark manually:</p>

          <div className="relative">
            <pre className="bg-black border border-red-900/50 p-4 overflow-x-auto text-sm text-green-400 font-mono">
              {BOOKMARKLET_CODE}
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-500 p-2 transition-colors"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>

          <div className="mt-4 space-y-2 text-white/70 text-sm">
            <p><strong>Chrome:</strong> Right-click bookmarks bar → Add page → Paste code in URL field</p>
            <p><strong>Firefox:</strong> Right-click bookmarks bar → Add bookmark → Paste code in Location field</p>
            <p><strong>Safari:</strong> Bookmarks → Add Bookmark → Paste code in Address field</p>
          </div>
        </div>

        {/* Why use it */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Why Use the Bookmarklet?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-950/20 border border-red-900/30 p-6 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold mb-1">Instant Access</h3>
              <p className="text-white/50 text-sm">One click opens the meme generator</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6 text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-bold mb-1">Always Available</h3>
              <p className="text-white/50 text-sm">Works on any webpage you're viewing</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6 text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-bold mb-1">No Permissions</h3>
              <p className="text-white/50 text-sm">Doesn't need browser extension access</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <h2 className="text-3xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Want More <span className="text-red-500">Power</span>?
          </h2>
          <p className="text-white/70 mb-6">Check out our Chrome extension for advanced features.</p>
          <Link href="/chrome-extension" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-6 py-3 transition-colors">
            Chrome Extension
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
