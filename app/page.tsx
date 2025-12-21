import { ArrowRight, Zap, Sparkles, Flame, Trophy } from "lucide-react"
import Image from "next/image"
import { MemeGenerator } from "@/components/meme-generator"
import { ShareButton } from "@/components/share-button"
import { RandomMeme } from "@/components/random-meme"
import { MemeGallery } from "@/components/meme-gallery"
import { DailyChallenge } from "@/components/daily-challenge"
import { LiveFeed } from "@/components/live-feed"
import { AchievementBadge } from "@/components/achievement-badge"
import { MemeBattle } from "@/components/meme-battle"
import { HomeNav } from "@/components/home-nav"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ViralStats } from "@/components/viral-stats"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <HomeNav />

      {/* Meme Creator */}
      <main className="pt-20 md:pt-24 pb-10 md:pb-16 px-4 md:px-6 bg-black">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-8 md:mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Zap className="h-4 w-4 text-red-500" />
              <span className="text-red-400">MEME FORGE</span>
            </div>
            <h1
              className="text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-5xl lg:text-6xl text-white"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              CREATE YOUR
              <span className="block text-red-500">INSANITY WOLF</span>
            </h1>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-lg text-red-300/70">
              Enter problem. Add EXTREME solution. Download.
            </p>
          </div>

          {/* Meme Generator */}
          <MemeGenerator />

          {/* Tips */}
          <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
            <div className="border border-red-900/30 bg-red-950/10 p-4 md:p-6 text-center">
              <h3 className="mb-2 font-bold text-red-400 uppercase text-sm md:text-base" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Step 1</h3>
              <p className="text-xs md:text-sm text-red-300/60">Enter a mundane problem in TOP TEXT</p>
            </div>
            <div className="border border-red-900/30 bg-red-950/10 p-4 md:p-6 text-center">
              <h3 className="mb-2 font-bold text-red-400 uppercase text-sm md:text-base" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Step 2</h3>
              <p className="text-xs md:text-sm text-red-300/60">Add EXTREME solution in BOTTOM TEXT</p>
            </div>
            <div className="border border-red-900/30 bg-red-950/10 p-4 md:p-6 text-center">
              <h3 className="mb-2 font-bold text-red-400 uppercase text-sm md:text-base" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Step 3</h3>
              <p className="text-xs md:text-sm text-red-300/60">Download and share with the world</p>
            </div>
          </div>
        </div>
      </main>

      {/* Viral Stats Dashboard - Vercel Style */}
      <ViralStats />

      {/* THE HALL OF INSANITY */}
      <section id="gallery" className="relative bg-black/50 px-4 py-12 md:px-6 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-red-950/20" />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="mb-8 md:mb-16 text-center">
            <h2 className="text-balance text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              THE HALL OF INSANITY
            </h2>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-xl text-red-300/80">
              You think YOUR meme is crazy?! These people went ALL THE WAY! VOTE!
            </p>
          </div>

          <MemeGallery />

          {/* Inline Shop CTA */}
          <div className="mt-10 md:mt-16 border-2 border-red-500/50 bg-gradient-to-r from-red-950/30 via-red-900/20 to-red-950/30 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                  LOVE THESE MEMES? <span className="text-red-500">WEAR THEM.</span>
                </h3>
                <p className="text-sm md:text-base text-red-300/70 mt-1">Get official Insanity Wolf merch</p>
              </div>
              <a
                href="/store"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-6 py-3 transition-all hover:scale-105 whitespace-nowrap"
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                <Flame className="h-5 w-5" />
                SHOP MERCH
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* History Section - ORIGIN STORY */}
      <section id="history" className="relative border-y border-red-900/30 bg-black px-4 py-12 md:px-6 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/10" />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-balance font-sans text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              WHERE DID THIS COME FROM?!
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed text-red-300/70">
            <p className="horror-shake">
              You want the HISTORY?! Let me TELL you about 2009! 4chan's /b/ board — the place your parents warned you about! Someone looked at a motivational poster and said "You know what? NO! I'm gonna do the OPPOSITE!" AND THEY DID IT! THEY ACTUALLY DID IT!
            </p>

            <p>
              This wolf? This beautiful, ANGRY wolf? He'd been floating around the internet since 2006! Just WAITING! Waiting for someone crazy enough to give him a VOICE! And when they did?! BOOM! EVERYTHING CHANGED!
            </p>

            <p>
              They called it "GOD TIER" on Memegenerator! GOD! TIER! You know why?! Because this wolf doesn't give you advice your THERAPIST gives you! No! He gives you the advice that gets you on a WATCHLIST! And people LOVED IT! MILLIONS of them!
            </p>

            <p className="font-bold text-red-400">
              Then came "Baby Insanity Wolf" — for people who want to be EDGY but still want to go to HEAVEN! Can't commit to the FULL insanity! HALF MEASURES! THAT'S WHAT THAT IS!
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-y border-red-900/30 bg-red-950/20 px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 md:mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/50 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-4 w-4 text-red-500" />
              <span className="text-red-400">FEELING DANGEROUS?!</span>
            </div>
            <h2 className="text-balance font-sans text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              SPIN THE WHEEL OF CHAOS
            </h2>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-lg text-red-300/70">
              Let the UNIVERSE decide how UNHINGED you're gonna get today!
            </p>
          </div>

          <RandomMeme />
        </div>
      </section>

      <section className="relative bg-black px-4 py-12 md:px-6 md:py-24 heavy-scanlines">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/10" />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="mb-8 md:mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Zap className="h-4 w-4 text-red-500" />
              <span className="text-red-400">JOIN THE CHAOS</span>
            </div>
            <h2 className="text-balance font-sans text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              ENTER THE WARZONE
            </h2>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-xl text-red-300/70">
              Daily challenges and epic meme battles happening RIGHT NOW
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            <DailyChallenge />
            <LiveFeed />
          </div>
        </div>
      </section>

      <section className="relative px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 md:mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Flame className="h-4 w-4 text-red-500" />
              <span className="text-red-400">FIGHT TO THE DEATH</span>
            </div>
            <h2 className="text-balance font-sans text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-5xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              MEME BATTLE ROYALE
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base md:text-lg text-red-300/70">
              CHOOSE YOUR CHAMPION!
            </p>
          </div>

          <MemeBattle />
        </div>
      </section>

      <section className="relative border-y border-red-900/30 bg-black px-4 py-12 md:px-6 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/10" />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="mb-8 md:mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Trophy className="h-4 w-4 text-red-500" />
              <span className="text-red-400">TROPHIES</span>
            </div>
            <h2 className="text-balance font-sans text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              EARN YOUR SCARS
            </h2>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-xl text-red-300/70">
              Create memes, DESTROY opponents, unlock badges
            </p>
          </div>

          <AchievementBadge />
        </div>
      </section>

      {/* SHOP CTA - Big Store Banner */}
      <section className="relative px-4 py-12 md:px-6 md:py-20 bg-gradient-to-r from-red-950/50 via-red-900/30 to-red-950/50 border-y-2 border-red-500/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl relative z-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 border border-red-500 bg-red-950/50 px-4 py-2 text-xs font-bold uppercase tracking-wider">
            <Flame className="h-4 w-4 text-red-500 animate-pulse" />
            <span className="text-red-400">OFFICIAL MERCH</span>
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-5xl lg:text-6xl text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            WEAR THE <span className="text-red-500">CHAOS</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-xl text-red-300/80 mb-6 md:mb-8">
            T-shirts, hoodies, stickers & more. Rep the wolf. Spread the madness.
          </p>
          <a
            href="/store"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-wide px-8 py-4 text-lg md:text-xl transition-all hover:scale-105 border-2 border-red-400"
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            <Flame className="h-6 w-6" />
            SHOP NOW
            <ArrowRight className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* Quote Section - MAXIMUM RAGE */}
      <section className="relative border-y border-red-900/50 bg-card px-4 py-12 md:px-6 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        <div className="relative mx-auto max-w-5xl text-center">
          <blockquote className="space-y-4 md:space-y-6">
            <div className="text-4xl md:text-6xl opacity-40 text-red-500">"</div>
            <p className="text-xl font-black uppercase leading-tight tracking-tight text-foreground sm:text-2xl md:text-4xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              Got PROBLEMS?
              <span className="text-red-500"> SET IT ON FIRE!</span>
            </p>
            <footer className="pt-2 md:pt-4 text-xs md:text-sm font-bold uppercase tracking-widest text-red-400/70">
              — THE ONLY PHILOSOPHY
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-900/30 bg-black px-4 py-10 md:px-6 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="font-mono text-sm font-medium uppercase text-white">
                  INSANITYWOLF.COM
                </span>
              </div>
              <p className="mb-6 max-w-md font-mono text-xs text-red-400/50 leading-relaxed">
                The legendary advice animal since 2009. Over 10 million memes created. The original chaos meme.
              </p>
              <ShareButton
                title="Insanity Wolf - The Most Extreme Meme"
                text="Check out Insanity Wolf, the legendary advice animal meme!"
              />
            </div>

            <div>
              <h4 className="mb-4 font-mono text-xs uppercase text-red-400/60">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/gallery" className="font-mono text-sm text-red-400/70 hover:text-white transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/battle" className="font-mono text-sm text-red-400/70 hover:text-white transition-colors">
                    Battle
                  </a>
                </li>
                <li>
                  <a href="/create" className="font-mono text-sm text-red-400/70 hover:text-white transition-colors">
                    Create
                  </a>
                </li>
                <li>
                  <a href="/store" className="font-mono text-sm text-red-400/70 hover:text-white transition-colors">
                    Store
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-mono text-xs uppercase text-red-400/60">Stats</h4>
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-red-400/50">Since</span>
                  <span className="text-white tabular-nums">2009</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-red-400/50">Memes</span>
                  <span className="text-white tabular-nums">10M+</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-red-400/50">Status</span>
                  <span className="text-white">GOD TIER</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-red-400/50">Countries</span>
                  <span className="text-white tabular-nums">147</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-red-900/30">
            <p className="font-mono text-xs text-red-400/40 text-center">
              © 2009-2025 Insanity Wolf. This is satire. Don't actually follow this advice.
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
