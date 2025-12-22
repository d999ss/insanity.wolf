"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, Zap, ArrowRight, RefreshCw, Download, Share2, Brain, Wand2 } from "lucide-react"

const AI_SUGGESTIONS = [
  { top: "BOSS WANTS TEAM BUILDING", bottom: "DECLARE HUNGER GAMES" },
  { top: "CAR WON'T START", bottom: "HOTWIRE A HELICOPTER" },
  { top: "MICROWAVE IS BROKEN", bottom: "COOK FOOD WITH RAGE" },
  { top: "DENTIST APPOINTMENT", bottom: "PULL TEETH WITH PLIERS" },
  { top: "NO PARKING SPOTS", bottom: "TOW EVERYONE ELSE" },
  { top: "PHONE UPDATE AVAILABLE", bottom: "THROW IT INTO VOLCANO" },
  { top: "PRINTER JAMMED", bottom: "OFFICE SPACE IT" },
  { top: "MEETING AT 8 AM", bottom: "FAKE OWN DEATH" },
  { top: "CODE WON'T COMPILE", bottom: "DELETE THE INTERNET" },
  { top: "PIZZA ARRIVED COLD", bottom: "ANNEX ITALY" },
]

export default function AIGeneratorPage() {
  const [prompt, setPrompt] = useState("")
  const [generatedMeme, setGeneratedMeme] = useState<{ top: string; bottom: string } | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateMeme = () => {
    setIsGenerating(true)
    // Simulate AI generation with random selection
    setTimeout(() => {
      const randomMeme = AI_SUGGESTIONS[Math.floor(Math.random() * AI_SUGGESTIONS.length)]
      setGeneratedMeme(randomMeme)
      setIsGenerating(false)
    }, 1500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    generateMeme()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold uppercase mb-4">
            <Sparkles className="h-4 w-4" />
            AI Powered
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            AI Meme <span className="text-purple-400">Generator</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Describe your situation and let AI create the perfect Insanity Wolf meme.
            No creativity required.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Generator */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-400" />
              Describe Your Situation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Example: My boss scheduled a meeting at 8am on Monday..."
                  className="w-full h-32 bg-black border border-red-900/50 px-4 py-3 text-white placeholder:text-white/30 focus:border-purple-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 text-white font-black uppercase py-4 flex items-center justify-center gap-2 transition-all"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    GENERATING...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-5 w-5" />
                    GENERATE AI MEME
                  </>
                )}
              </button>
            </form>

            {/* Quick prompts */}
            <div className="mt-6">
              <p className="text-white/50 text-sm mb-3">Or try a quick prompt:</p>
              <div className="flex flex-wrap gap-2">
                {["Work stress", "Monday morning", "Tech problems", "Traffic", "Dating"].map((q) => (
                  <button
                    key={q}
                    onClick={() => { setPrompt(q); generateMeme(); }}
                    className="px-3 py-1 bg-red-950/50 border border-red-900/30 hover:border-purple-500 text-sm transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-red-950/20 border border-red-900/30 p-6 flex items-center justify-center">
            <div className="relative w-full max-w-[350px]">
              <div className="relative aspect-square">
                <Image
                  src="/insanity-wolf-template.webp"
                  alt="AI Generated Meme"
                  fill
                  className={"object-contain transition-opacity " + (isGenerating ? "opacity-50" : "opacity-100")}
                />
                {generatedMeme && (
                  <div className="absolute inset-0 flex flex-col justify-between p-[8%]">
                    <p
                      className="text-center text-sm md:text-base font-black uppercase text-white"
                      style={{
                        fontFamily: 'Impact, "Arial Black", sans-serif',
                        textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000"
                      }}
                    >
                      {generatedMeme.top}
                    </p>
                    <p
                      className="text-center text-sm md:text-base font-black uppercase text-white"
                      style={{
                        fontFamily: 'Impact, "Arial Black", sans-serif',
                        textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000"
                      }}
                    >
                      {generatedMeme.bottom}
                    </p>
                  </div>
                )}
                {isGenerating && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="text-center">
                      <Sparkles className="h-8 w-8 text-purple-400 mx-auto mb-2 animate-pulse" />
                      <p className="text-purple-400 text-sm">AI is thinking...</p>
                    </div>
                  </div>
                )}
              </div>

              {generatedMeme && !isGenerating && (
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold uppercase py-2 flex items-center justify-center gap-2 text-sm transition-colors">
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                  <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase py-2 flex items-center justify-center gap-2 text-sm transition-colors">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">How AI Generation Works</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-950/20 border border-red-900/30 p-6 text-center">
              <div className="text-3xl mb-3">1</div>
              <h3 className="font-bold mb-2">Describe Your Problem</h3>
              <p className="text-white/50 text-sm">Tell us what's annoying you in plain English</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6 text-center">
              <div className="text-3xl mb-3">2</div>
              <h3 className="font-bold mb-2">AI Creates Response</h3>
              <p className="text-white/50 text-sm">Our AI generates an extreme Insanity Wolf solution</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6 text-center">
              <div className="text-3xl mb-3">3</div>
              <h3 className="font-bold mb-2">Download & Share</h3>
              <p className="text-white/50 text-sm">Save the meme or share directly to social</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">AI Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-950/20 border border-purple-500/30 p-6">
              <Sparkles className="h-8 w-8 text-purple-400 mb-3" />
              <h3 className="font-bold mb-2">Context Aware</h3>
              <p className="text-white/50 text-sm">AI understands your situation and generates relevant extreme responses</p>
            </div>
            <div className="bg-purple-950/20 border border-purple-500/30 p-6">
              <Zap className="h-8 w-8 text-yellow-400 mb-3" />
              <h3 className="font-bold mb-2">Instant Generation</h3>
              <p className="text-white/50 text-sm">Get meme suggestions in seconds, not minutes</p>
            </div>
            <div className="bg-purple-950/20 border border-purple-500/30 p-6">
              <RefreshCw className="h-8 w-8 text-green-400 mb-3" />
              <h3 className="font-bold mb-2">Unlimited Retries</h3>
              <p className="text-white/50 text-sm">Don't like the result? Generate again for free</p>
            </div>
            <div className="bg-purple-950/20 border border-purple-500/30 p-6">
              <Brain className="h-8 w-8 text-pink-400 mb-3" />
              <h3 className="font-bold mb-2">Learns Meme Culture</h3>
              <p className="text-white/50 text-sm">Trained on classic meme formats and internet humor</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <h2 className="text-3xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Prefer <span className="text-red-500">Manual</span> Creation?
          </h2>
          <p className="text-white/70 mb-6">Use our classic generator for full control.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-6 py-3 transition-colors">
            Classic Generator
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
