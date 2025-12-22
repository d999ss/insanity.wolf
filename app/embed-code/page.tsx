"use client"

import { useState } from "react"
import Link from "next/link"
import { Copy, Check, Code, ExternalLink, ArrowRight } from "lucide-react"

export default function EmbedCodePage() {
  const [copied, setCopied] = useState(false)
  const [width, setWidth] = useState(400)
  const [height, setHeight] = useState(550)

  const embedCode = `<iframe src="https://insanitywolf.com/embed" width="${width}" height="${height}" frameborder="0" style="border:1px solid #7f1d1d;border-radius:4px;" title="Insanity Wolf Meme Generator"></iframe>`

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600 text-white text-xs font-bold uppercase mb-4">
              <Code className="h-4 w-4" />
              For Developers
            </div>
            <h1
              className="text-4xl md:text-5xl font-black uppercase mb-6"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Embed <span className="text-red-500">Insanity Wolf</span><br />On Your Site
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Add the Insanity Wolf meme generator to your website for free.
              Your visitors can create memes without leaving your site.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Preview */}
          <div>
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            <div className="border border-red-900/30 bg-red-950/10 p-4">
              <iframe
                src="/embed"
                width={width}
                height={height}
                style={{ border: "1px solid #7f1d1d", borderRadius: "4px", maxWidth: "100%" }}
                title="Insanity Wolf Meme Generator"
              />
            </div>
          </div>

          {/* Code */}
          <div>
            <h2 className="text-xl font-bold mb-4">Get Embed Code</h2>

            {/* Size Options */}
            <div className="mb-4">
              <label className="block text-sm text-white/70 mb-2">Size</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => { setWidth(300); setHeight(450); }}
                  className={`px-3 py-2 text-sm border transition-colors ${
                    width === 300 ? "border-red-500 bg-red-950/50" : "border-red-900/30 hover:border-red-500/50"
                  }`}
                >
                  Small (300x450)
                </button>
                <button
                  onClick={() => { setWidth(400); setHeight(550); }}
                  className={`px-3 py-2 text-sm border transition-colors ${
                    width === 400 ? "border-red-500 bg-red-950/50" : "border-red-900/30 hover:border-red-500/50"
                  }`}
                >
                  Medium (400x550)
                </button>
                <button
                  onClick={() => { setWidth(500); setHeight(650); }}
                  className={`px-3 py-2 text-sm border transition-colors ${
                    width === 500 ? "border-red-500 bg-red-950/50" : "border-red-900/30 hover:border-red-500/50"
                  }`}
                >
                  Large (500x650)
                </button>
              </div>
            </div>

            {/* Code Block */}
            <div className="relative">
              <pre className="bg-gray-900 border border-red-900/30 p-4 text-sm text-green-400 overflow-x-auto">
                <code>{embedCode}</code>
              </pre>
              <button
                onClick={handleCopy}
                className={`absolute top-2 right-2 flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase transition-colors ${
                  copied ? "bg-green-600 text-white" : "bg-red-600 hover:bg-red-500 text-white"
                }`}
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              <h3 className="font-bold">Why Embed?</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  Increase engagement on your site
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  Free to use, no API key required
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  Works on any website or blog
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  Mobile responsive
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  All memes include your backlink
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-red-900/30 pt-16">
          <h2 className="text-2xl font-black uppercase mb-4">
            Want More Features?
          </h2>
          <p className="text-white/70 mb-6">
            Use the full generator on insanitywolf.com for extreme mode, custom backgrounds, and more.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-6 py-3 transition-colors"
          >
            GO TO FULL GENERATOR
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
