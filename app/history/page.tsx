"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Users, TrendingUp, Award, Flame } from "lucide-react"

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase mb-4">
              The Origin Story
            </span>
            <h1
              className="text-4xl md:text-6xl font-black uppercase mb-6"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              The History of<br />
              <span className="text-red-500">Insanity Wolf</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From a single image on 4chan to becoming the most iconic "advice animal" meme of all time.
              This is the story of Insanity Wolf.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* 2009 - Origin */}
        <div className="relative pl-8 pb-12 border-l-2 border-red-900/50">
          <div className="absolute left-0 top-0 w-4 h-4 bg-red-600 rounded-full -translate-x-[9px]" />
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-5 w-5 text-red-400" />
            <span className="text-red-400 font-bold">2009</span>
            <span className="text-white/50">—</span>
            <span className="text-white font-bold">The Birth</span>
          </div>
          <div className="bg-red-950/20 border border-red-900/30 p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="/insanity-wolf-template.webp"
                  alt="Original Insanity Wolf"
                  width={200}
                  height={200}
                  className="border border-red-900/50"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Born on 4chan's /b/ Board</h3>
                <p className="text-white/70 mb-4">
                  Insanity Wolf first appeared on 4chan's random board (/b/) in 2009, emerging from the
                  "advice animal" meme format that was taking over the internet. The image featured a
                  fierce-looking wolf with glowing eyes, paired with intentionally extreme and absurd advice.
                </p>
                <p className="text-white/70">
                  Unlike Courage Wolf (which offered genuine motivation), Insanity Wolf took everyday
                  problems and suggested the most unhinged, over-the-top solutions possible. The contrast
                  between mundane problems and psychotic solutions became its signature style.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2010 - Viral */}
        <div className="relative pl-8 pb-12 border-l-2 border-red-900/50">
          <div className="absolute left-0 top-0 w-4 h-4 bg-red-600 rounded-full -translate-x-[9px]" />
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-5 w-5 text-red-400" />
            <span className="text-red-400 font-bold">2010</span>
            <span className="text-white/50">—</span>
            <span className="text-white font-bold">Going Viral</span>
          </div>
          <div className="bg-red-950/20 border border-red-900/30 p-6">
            <div className="flex items-start gap-4 mb-4">
              <TrendingUp className="h-8 w-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">Explosion Across the Internet</h3>
                <p className="text-white/70 mb-4">
                  By 2010, Insanity Wolf had spread from 4chan to Reddit, Tumblr, and eventually mainstream
                  social media. The meme's popularity skyrocketed as people discovered the cathartic joy of
                  expressing their darkest, most chaotic impulses through a scary wolf picture.
                </p>
                <p className="text-white/70">
                  Dedicated subreddits formed, meme generators added Insanity Wolf templates, and the format
                  became one of the most recognizable advice animals alongside Courage Wolf, Advice Dog, and
                  Socially Awkward Penguin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2011 - Know Your Meme */}
        <div className="relative pl-8 pb-12 border-l-2 border-red-900/50">
          <div className="absolute left-0 top-0 w-4 h-4 bg-red-600 rounded-full -translate-x-[9px]" />
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-5 w-5 text-red-400" />
            <span className="text-red-400 font-bold">2011</span>
            <span className="text-white/50">—</span>
            <span className="text-white font-bold">Official Recognition</span>
          </div>
          <div className="bg-red-950/20 border border-red-900/30 p-6">
            <div className="flex items-start gap-4">
              <Award className="h-8 w-8 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">Know Your Meme: "Confirmed" Status</h3>
                <p className="text-white/70 mb-4">
                  Know Your Meme officially documented Insanity Wolf, giving it "Confirmed" meme status.
                  The entry noted the meme's unique position in advice animal culture as the "id" to
                  Courage Wolf's "superego" — representing our most primal, unfiltered responses to frustration.
                </p>
                <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 mt-4">
                  <p className="text-yellow-400 font-bold text-sm uppercase mb-2">Meme Status Rating:</p>
                  <p className="text-3xl font-black text-yellow-400">GOD TIER</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2012-2015 - Peak */}
        <div className="relative pl-8 pb-12 border-l-2 border-red-900/50">
          <div className="absolute left-0 top-0 w-4 h-4 bg-red-600 rounded-full -translate-x-[9px]" />
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-5 w-5 text-red-400" />
            <span className="text-red-400 font-bold">2012-2015</span>
            <span className="text-white/50">—</span>
            <span className="text-white font-bold">Peak Insanity</span>
          </div>
          <div className="bg-red-950/20 border border-red-900/30 p-6">
            <div className="flex items-start gap-4">
              <Flame className="h-8 w-8 text-orange-500 flex-shrink-0 animate-pulse" />
              <div>
                <h3 className="text-xl font-bold mb-3">The Golden Age of Insanity</h3>
                <p className="text-white/70 mb-4">
                  This period saw Insanity Wolf reach peak cultural penetration. The meme appeared in
                  mainstream articles, was referenced in TV shows, and became a go-to format for expressing
                  frustration with modern life.
                </p>
                <p className="text-white/70">
                  Classic templates like "SOMEONE CUTS YOU OFF IN TRAFFIC / FOLLOW THEM HOME AND BURN DOWN
                  THEIR HOUSE" became internet legends. The meme's influence extended to variations like
                  "Insanity Puppy" and inspired countless imitators.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Present */}
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 w-4 h-4 bg-red-600 rounded-full -translate-x-[9px] animate-pulse" />
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-5 w-5 text-red-400" />
            <span className="text-red-400 font-bold">Present</span>
            <span className="text-white/50">—</span>
            <span className="text-white font-bold">The Legend Continues</span>
          </div>
          <div className="bg-red-950/20 border border-red-900/30 p-6">
            <div className="flex items-start gap-4">
              <Users className="h-8 w-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-3">10+ Million Memes Created</h3>
                <p className="text-white/70 mb-4">
                  Today, Insanity Wolf remains one of the most beloved and recognizable memes in internet
                  history. While meme culture has evolved with new formats, Insanity Wolf maintains a
                  dedicated following who appreciate its cathartic, chaotic energy.
                </p>
                <p className="text-white/70 mb-6">
                  This site — InsanityWolf.com — serves as the official home for creating, sharing, and
                  celebrating the legend. Over 10 million memes have been created here, and the wolf's
                  glowing eyes continue to watch over all who embrace the chaos.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-6 py-3 transition-colors"
                >
                  CREATE YOUR OWN MEME
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fun Facts */}
      <div className="border-t border-red-900/30 bg-red-950/10">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-black uppercase text-center mb-8">Fun Facts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black border border-red-900/30 p-6">
              <p className="text-red-400 font-bold mb-2">Original Image</p>
              <p className="text-white/70 text-sm">
                The original wolf image is from a stock photo of a snarling gray wolf. The red/glowing
                eyes were added by early meme creators to make it look more intense.
              </p>
            </div>
            <div className="bg-black border border-red-900/30 p-6">
              <p className="text-red-400 font-bold mb-2">Advice Animal Family</p>
              <p className="text-white/70 text-sm">
                Insanity Wolf is part of the "advice animal" family that includes Courage Wolf (its
                predecessor), Advice Dog (the original), and dozens of others.
              </p>
            </div>
            <div className="bg-black border border-red-900/30 p-6">
              <p className="text-red-400 font-bold mb-2">The Format</p>
              <p className="text-white/70 text-sm">
                Classic format: Top text states a mundane problem. Bottom text offers an extreme, violent,
                or absurd solution. The contrast creates the humor.
              </p>
            </div>
            <div className="bg-black border border-red-900/30 p-6">
              <p className="text-red-400 font-bold mb-2">Cultural Impact</p>
              <p className="text-white/70 text-sm">
                "Insanity Wolf" has been referenced in mainstream media, used in psychology articles about
                internet humor, and inspired academic papers on meme evolution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-red-900/30">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-black uppercase mb-4">
            Be Part of the <span className="text-red-500">Legend</span>
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Join millions of chaos agents who have created their own Insanity Wolf memes.
            Your contribution to meme history awaits.
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
