"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Flame, Zap, Download, Share2, Sparkles } from "lucide-react"

interface TopicMeme {
  top: string
  bottom: string
}

interface TopicMemePageProps {
  topic: string
  tagline: string
  description: string
  examples: TopicMeme[]
  suggestions: string[]
  relatedTopics: { name: string; href: string }[]
}

export function TopicMemePage({ topic, tagline, description, examples, suggestions, relatedTopics }: TopicMemePageProps) {
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")
  const [generated, setGenerated] = useState(false)

  const handleGenerate = () => {
    if (topText && bottomText) {
      setGenerated(true)
    }
  }

  const getMemeUrl = (meme: TopicMeme) => {
    return "/meme/" + btoa(JSON.stringify({ top: meme.top, bottom: meme.bottom }))
  }

  const getShareUrl = () => {
    if (!topText || !bottomText) return ""
    return "https://insanitywolf.com/meme/" + btoa(JSON.stringify({ top: topText, bottom: bottomText }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase mb-4">
              <Flame className="h-4 w-4" />
              {topic} Memes
            </div>
            <h1
              className="text-4xl md:text-5xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Insanity Wolf <span className="text-red-500">{topic}</span> Memes
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-2">
              {tagline}
            </p>
            <p className="text-white/50 max-w-xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Generator */}
        <div className="bg-red-950/30 border border-red-900/50 p-6 md:p-8 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="h-6 w-6 text-yellow-400" />
            <h2 className="text-xl font-black uppercase">Quick {topic} Meme Generator</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">Your {topic.toLowerCase()} problem:</label>
                <input
                  type="text"
                  value={topText}
                  onChange={(e) => { setTopText(e.target.value); setGenerated(false) }}
                  placeholder={suggestions[0] || "Enter your problem..."}
                  className="w-full bg-black border border-red-900/50 px-4 py-3 text-white placeholder:text-white/30 focus:border-red-500 focus:outline-none uppercase"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Insane solution:</label>
                <input
                  type="text"
                  value={bottomText}
                  onChange={(e) => { setBottomText(e.target.value); setGenerated(false) }}
                  placeholder="EXTREME RESPONSE..."
                  className="w-full bg-black border border-red-900/50 px-4 py-3 text-white placeholder:text-white/30 focus:border-red-500 focus:outline-none uppercase"
                />
              </div>
              <button
                onClick={handleGenerate}
                disabled={!topText || !bottomText}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black uppercase py-4 transition-all hover:scale-[1.02]"
              >
                <Flame className="inline h-5 w-5 mr-2" />
                Generate Meme
              </button>
            </div>

            {/* Preview */}
            <div className="relative aspect-square bg-black border border-red-900/50">
              <Image
                src="/insanity-wolf-template.webp"
                alt="Insanity Wolf"
                fill
                className="object-cover"
              />
              {(topText || bottomText) && (
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <p
                    className="text-center text-lg md:text-xl font-black uppercase text-white"
                    style={{
                      fontFamily: 'Impact, "Arial Black", sans-serif',
                      textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                    }}
                  >
                    {topText}
                  </p>
                  <p
                    className="text-center text-lg md:text-xl font-black uppercase text-white"
                    style={{
                      fontFamily: 'Impact, "Arial Black", sans-serif',
                      textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                    }}
                  >
                    {bottomText}
                  </p>
                </div>
              )}
            </div>
          </div>

          {generated && (
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link
                href={getShareUrl()}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-4 py-2 text-sm"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold uppercase px-4 py-2 text-sm"
              >
                <Sparkles className="h-4 w-4" />
                Advanced Editor
              </Link>
            </div>
          )}
        </div>

        {/* Suggestions */}
        <div className="mb-12">
          <h2 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-yellow-400" />
            {topic} Meme Ideas
          </h2>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, i) => (
              <button
                key={i}
                onClick={() => setTopText(suggestion)}
                className="px-3 py-2 bg-red-950/30 border border-red-900/30 hover:border-red-500 text-sm transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Examples */}
        <div className="mb-12">
          <h2 className="text-xl font-black uppercase mb-6">Best {topic} Insanity Wolf Memes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {examples.map((meme, i) => (
              <Link
                key={i}
                href={getMemeUrl(meme)}
                className="group relative aspect-square bg-black border border-red-900/30 hover:border-red-500 transition-all"
              >
                <Image
                  src="/insanity-wolf-template.webp"
                  alt={meme.top + " " + meme.bottom}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-3">
                  <p
                    className="text-center text-sm font-black uppercase text-white"
                    style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}
                  >
                    {meme.top}
                  </p>
                  <p
                    className="text-center text-sm font-black uppercase text-white"
                    style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}
                  >
                    {meme.bottom}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="text-white font-bold uppercase text-sm">View & Share</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Related Topics */}
        <div className="mb-12">
          <h2 className="text-xl font-black uppercase mb-4">More Meme Topics</h2>
          <div className="flex flex-wrap gap-3">
            {relatedTopics.map((related, i) => (
              <Link
                key={i}
                href={related.href}
                className="px-4 py-2 bg-red-950/30 border border-red-900/30 hover:border-red-500 hover:bg-red-950/50 font-bold uppercase text-sm transition-all"
              >
                {related.name} Memes
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <h2
            className="text-3xl font-black uppercase mb-4"
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            Create More <span className="text-red-500">Chaos</span>
          </h2>
          <p className="text-white/70 mb-6">
            Use our full-featured meme generator for more options, effects, and sharing features.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-8 py-4 text-xl transition-all hover:scale-105"
          >
            FULL MEME GENERATOR
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
