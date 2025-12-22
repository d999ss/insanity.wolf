"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Trophy, Flame, Star, Crown, Skull, Zap } from "lucide-react"

const CLASSIC_MEMES = [
  { top: "ALARM DIDN'T GO OFF", bottom: "BURN DOWN THE CLOCK FACTORY", category: "Work Life", rating: "GOD TIER" },
  { top: "SOMEONE SPOILS THE MOVIE", bottom: "SPOIL THEIR FUNERAL", category: "Revenge", rating: "GOD TIER" },
  { top: "OUT OF TOILET PAPER", bottom: "USE THEIR CURTAINS", category: "Daily Life", rating: "LEGENDARY" },
  { top: "SLOW WIFI", bottom: "DECLARE WAR ON THE ROUTER", category: "Tech Rage", rating: "GOD TIER" },
  { top: "SOMEONE EATS YOUR LUNCH", bottom: "EAT THEIR WILL TO LIVE", category: "Office", rating: "LEGENDARY" },
  { top: "PARKING TICKET", bottom: "PARK ON THE METER MAID", category: "Driving", rating: "GOD TIER" },
  { top: "HEADPHONES TANGLED", bottom: "STRANGLE THE UNIVERSE", category: "Tech Rage", rating: "LEGENDARY" },
  { top: "MOSQUITO BITE", bottom: "DRAIN ITS ENTIRE FAMILY", category: "Nature", rating: "GOD TIER" },
  { top: "VENDING MACHINE EATS MONEY", bottom: "BECOME THE VENDING MACHINE'S NIGHTMARE", category: "Daily Life", rating: "LEGENDARY" },
  { top: "AUTOCORRECT RUINS TEXT", bottom: "AUTOCORRECT THEIR EXISTENCE", category: "Tech Rage", rating: "GOD TIER" },
  { top: "MONDAY MORNING", bottom: "ELIMINATE MONDAYS FROM THE CALENDAR", category: "Work Life", rating: "LEGENDARY" },
  { top: "SOMEONE DOUBLE DIPS", bottom: "DROWN THEM IN THE DIP", category: "Social", rating: "GOD TIER" },
]

const CATEGORY_STARTERS = [
  { category: "Work Problems", icon: Skull, examples: ["BOSS WANTS MEETING", "DEADLINE TOMORROW", "PRINTER JAMMED"] },
  { category: "Tech Frustration", icon: Zap, examples: ["PHONE DIES AT 1%", "UPDATE REQUIRED", "PASSWORD FORGOTTEN"] },
  { category: "Social Annoyances", icon: Flame, examples: ["SOMEONE CHEWS LOUD", "READ BUT NO REPLY", "FRIEND CANCELS"] },
  { category: "Daily Life", icon: Star, examples: ["TRAFFIC JAM", "OUT OF COFFEE", "LOST MY KEYS"] },
]

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 text-black text-xs font-bold uppercase mb-4">
              <Trophy className="h-4 w-4" />
              Hall of Fame
            </div>
            <h1
              className="text-4xl md:text-6xl font-black uppercase mb-6"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Best <span className="text-red-500">Insanity Wolf</span> Memes
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              The most legendary, unhinged, and absolutely chaotic Insanity Wolf memes ever created.
              Learn from the masters of mayhem.
            </p>
          </div>
        </div>
      </div>

      {/* Classic Memes Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Crown className="h-6 w-6 text-yellow-500" />
          <h2 className="text-2xl font-black uppercase">Classic Examples</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLASSIC_MEMES.map((meme, i) => (
            <div key={i} className="group relative bg-red-950/20 border border-red-900/30 hover:border-red-500/50 transition-all">
              <div className="relative aspect-square bg-black">
                <Image
                  src="/insanity-wolf-template.webp"
                  alt="Insanity Wolf"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <p
                    className="text-center text-lg md:text-xl font-black uppercase text-white"
                    style={{
                      fontFamily: 'Impact, "Arial Black", sans-serif',
                      textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                    }}
                  >
                    {meme.top}
                  </p>
                  <p
                    className="text-center text-lg md:text-xl font-black uppercase text-white"
                    style={{
                      fontFamily: 'Impact, "Arial Black", sans-serif',
                      textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                    }}
                  >
                    {meme.bottom}
                  </p>
                </div>
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="text-xs text-white/50">{meme.category}</span>
                <span className={`text-xs font-bold ${meme.rating === "GOD TIER" ? "text-yellow-400" : "text-orange-400"}`}>
                  {meme.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to Write Section */}
      <div className="border-t border-red-900/30 bg-red-950/10">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-black uppercase text-center mb-8">
            How to Write the Perfect Insanity Wolf Meme
          </h2>

          <div className="space-y-6">
            <div className="bg-black border border-red-900/30 p-6">
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-8 h-8 bg-red-600 font-bold text-sm flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold mb-2">Start with a Relatable Problem</h3>
                  <p className="text-white/70 text-sm">
                    The top text should be something everyone experiences — a minor inconvenience, a daily
                    frustration, or an annoying situation. The more mundane and universal, the better.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-red-950/50 text-red-400 text-xs">Traffic jam</span>
                    <span className="px-2 py-1 bg-red-950/50 text-red-400 text-xs">Slow wifi</span>
                    <span className="px-2 py-1 bg-red-950/50 text-red-400 text-xs">Monday morning</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black border border-red-900/30 p-6">
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-8 h-8 bg-red-600 font-bold text-sm flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold mb-2">Go MAXIMUM Overkill on the Solution</h3>
                  <p className="text-white/70 text-sm">
                    The bottom text is where you unleash pure chaos. The solution should be absurdly
                    disproportionate to the problem. Think: nuclear option for a paper cut.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-red-950/50 text-red-400 text-xs">Burn it down</span>
                    <span className="px-2 py-1 bg-red-950/50 text-red-400 text-xs">Declare war</span>
                    <span className="px-2 py-1 bg-red-950/50 text-red-400 text-xs">Assert dominance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black border border-red-900/30 p-6">
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-8 h-8 bg-red-600 font-bold text-sm flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold mb-2">The Bigger the Contrast, the Funnier</h3>
                  <p className="text-white/70 text-sm">
                    Comedy comes from the gap between expectation and reality. A tiny problem paired with
                    an apocalyptic response = peak Insanity Wolf energy.
                  </p>
                  <div className="mt-3 p-3 bg-red-950/30 border border-red-900/50">
                    <p className="text-xs text-white/50 mb-1">Example:</p>
                    <p className="text-sm"><span className="text-red-400">Problem:</span> Stub toe on furniture</p>
                    <p className="text-sm"><span className="text-red-400">Solution:</span> Furniture store goes down in flames</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Starters */}
      <div className="border-t border-red-900/30">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-black uppercase text-center mb-8">
            Need Inspiration? Start Here
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORY_STARTERS.map((cat, i) => (
              <div key={i} className="bg-red-950/20 border border-red-900/30 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <cat.icon className="h-5 w-5 text-red-400" />
                  <h3 className="font-bold">{cat.category}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.examples.map((ex, j) => (
                    <li key={j} className="text-sm text-white/70 flex items-center gap-2">
                      <span className="w-1 h-1 bg-red-500 rounded-full" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-red-900/30 bg-gradient-to-b from-black to-red-950/30">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-black uppercase mb-4">
            Ready to Create Your <span className="text-red-500">Masterpiece</span>?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            You've seen the examples. You know the formula. Now it's your turn to unleash chaos upon the internet.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-8 py-4 text-lg transition-all hover:scale-105"
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            CREATE YOUR MEME NOW
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
