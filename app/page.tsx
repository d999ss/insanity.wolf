import { ArrowRight, Users, Flame, Skull, Zap, TrendingUp, Sparkles, Trophy, Clock, Share2 } from "lucide-react"
import Image from "next/image"
import { MemeGenerator } from "@/components/meme-generator"
import { HeroHeadline } from "@/components/hero-headline"
import { ShareButton } from "@/components/share-button"
import { RandomMeme } from "@/components/random-meme"
import { MemeGallery } from "@/components/meme-gallery"
import { DailyChallenge } from "@/components/daily-challenge"
import { LiveFeed } from "@/components/live-feed"
import { AchievementBadge } from "@/components/achievement-badge"
import { MemeBattle } from "@/components/meme-battle"
import { HomeNav } from "@/components/home-nav"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PageViewCounter } from "@/components/page-view-counter"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <HomeNav />

      {/* HERO: Meme Creator - Front and Center */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-black to-red-950/20" />
          <div className="absolute inset-x-0 top-0 h-32 blood-drip" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Hero Header */}
          <div className="mb-6 md:mb-10 text-center">
            <h1
              className="text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-6xl lg:text-7xl text-white mb-3 md:mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              CREATE YOUR
              <span className="block text-red-500">INSANITY WOLF MEME</span>
            </h1>
            <p className="mx-auto max-w-xl text-base md:text-xl text-red-300/80">
              Make it. Download it. Share it. Watch it go VIRAL.
            </p>
          </div>

          {/* Meme Generator */}
          <div className="flex justify-center">
            <MemeGenerator />
          </div>

          {/* Share & Shop CTAs */}
          <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="border border-red-900/50 bg-black/50 p-4 md:p-5 text-center">
              <Clock className="h-6 w-6 md:h-8 md:w-8 text-red-500 mx-auto mb-2" />
              <h3 className="font-bold text-red-400 uppercase text-sm md:text-base" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>INSTANT</h3>
              <p className="text-xs text-red-300/60">Create in seconds</p>
            </div>
            <div className="border border-red-900/50 bg-black/50 p-4 md:p-5 text-center">
              <Share2 className="h-6 w-6 md:h-8 md:w-8 text-red-500 mx-auto mb-2" />
              <h3 className="font-bold text-red-400 uppercase text-sm md:text-base" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>SHARE</h3>
              <p className="text-xs text-red-300/60">Go viral everywhere</p>
            </div>
            <a href="/store" className="border border-red-500 bg-red-950/50 p-4 md:p-5 text-center hover:bg-red-900/50 transition-colors group">
              <Flame className="h-6 w-6 md:h-8 md:w-8 text-red-500 mx-auto mb-2 group-hover:animate-pulse" />
              <h3 className="font-bold text-red-400 uppercase text-sm md:text-base" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>GET MERCH</h3>
              <p className="text-xs text-red-300/60">Wear the chaos</p>
            </a>
          </div>
        </div>
      </section>

      {/* Mini Hero - Wolf Image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/insanity-wolf.png"
            alt="Insanity Wolf - The Legendary Meme"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <HeroHeadline />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-red-400/70">
            <span className="text-xs font-bold uppercase tracking-widest">MORE CHAOS</span>
            <ArrowRight className="h-5 w-5 rotate-90" />
          </div>
        </div>
      </section>

      {/* Stats Section - BODY COUNT */}
      <section id="stats" className="relative px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 md:mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="h-4 w-4 text-red-500" />
              <span className="text-red-400">BODY COUNT</span>
            </div>
            <h2 className="text-balance font-sans text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-7xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              HALL OF CARNAGE
            </h2>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-xl text-red-300/70">
              The numbers don't lie. The DESTRUCTION is real.
            </p>
          </div>
          <div className="relative overflow-hidden border-2 border-red-900/50 bg-gradient-to-br from-black via-red-950/20 to-black p-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,0,0,0.1)_0%,transparent_60%)]" />
            <div className="relative grid gap-px bg-red-900/30 grid-cols-2 md:grid-cols-4">
              <PageViewCounter />
              <div className="bg-black p-6 md:p-12 text-center">
                <div className="mb-2 md:mb-4 font-sans text-5xl md:text-7xl font-black text-red-500" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>15+</div>
                <div className="mb-1 md:mb-2 text-sm font-bold uppercase tracking-widest text-red-400">Years of Terror</div>
                <p className="text-xs md:text-sm text-red-300/50">Born in the abyss, 2009</p>
              </div>
              <div className="bg-black p-6 md:p-12 text-center">
                <div className="mb-2 md:mb-4 font-sans text-5xl md:text-7xl font-black text-red-500" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>GOD</div>
                <div className="mb-1 md:mb-2 text-sm font-bold uppercase tracking-widest text-red-400">TIER STATUS</div>
                <p className="text-xs md:text-sm text-red-300/50">Untouchable. Unstoppable.</p>
              </div>
              <div className="bg-black p-6 md:p-12 text-center">
                <div className="mb-2 md:mb-4 font-sans text-5xl md:text-7xl font-black text-red-500" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>100%</div>
                <div className="mb-1 md:mb-2 text-sm font-bold uppercase tracking-widest text-red-400">PURE CHAOS</div>
                <p className="text-xs md:text-sm text-red-300/50">No mercy. No regrets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE HALL OF INSANITY */}
      <section id="gallery" className="relative bg-black/50 px-4 py-12 md:px-6 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-red-950/20" />
        <div className="mx-auto max-w-7xl relative z-10">
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
        <div className="mx-auto max-w-4xl relative z-10">
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
        <div className="mx-auto max-w-4xl">
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
        <div className="mx-auto max-w-7xl relative z-10">
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
        <div className="mx-auto max-w-7xl relative z-10">
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

      {/* Footer - CHAOS */}
      <footer className="border-t border-red-900/50 bg-black px-4 py-10 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center gap-3 cursor-pointer">
                <div className="relative h-12 w-12 bg-red-950/50 overflow-hidden border-2 border-red-900/50">
                  <Image src="/insanity-wolf.png" alt="Insanity Wolf" fill className="object-cover" />
                </div>
                <div className="text-2xl font-black tracking-tighter" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>INSANITY WOLF</div>
              </div>
              <p className="mb-6 max-w-md text-pretty leading-relaxed text-red-300/60">
                The legendary advice animal that DESTROYED internet humor since 2009. Over 10 million memes. ZERO regrets. MAXIMUM chaos.
              </p>
              <div className="flex gap-4">
                <ShareButton
                  title="Insanity Wolf - The Most Extreme Meme"
                  text="Check out Insanity Wolf, the legendary advice animal meme!"
                />
              </div>
            </div>

            <div>
              <h4 className="mb-6 font-sans text-sm font-bold uppercase tracking-wider text-red-400" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Quick Links</h4>
              <ul className="space-y-3 text-red-300/70">
                <li>
                  <a
                    href="/gallery"
                    className="blood-underline inline-block hover:text-red-400"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/battle"
                    className="blood-underline inline-block hover:text-red-400"
                  >
                    Battle Arena
                  </a>
                </li>
                <li>
                  <a
                    href="/create"
                    className="blood-underline inline-block hover:text-red-400"
                  >
                    Create Meme
                  </a>
                </li>
                <li>
                  <a
                    href="/store"
                    className="blood-underline inline-block hover:text-red-400"
                  >
                    Store
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-sans text-sm font-bold uppercase tracking-wider text-red-400" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>KILL COUNT</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-red-500" />
                  <span className="text-red-300/70">10M+ Souls Corrupted</span>
                </li>
                <li className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-red-500" />
                  <span className="text-red-300/70">GOD TIER Since Day One</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-red-500" />
                  <span className="text-red-300/70">Terrorizing Since 2009</span>
                </li>
                <li className="flex items-center gap-2">
                  <Skull className="h-4 w-4 text-red-500" />
                  <span className="text-red-300/70">Born in the Abyss</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-red-900/30 pt-8 text-center text-sm text-red-400/50">
            <p>
              © 2009-2025 INSANITY WOLF. Born from chaos. Fed by rage. DON'T follow this advice. We're NOT responsible for the consequences.
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
