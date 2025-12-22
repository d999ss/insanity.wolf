import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "History of Insanity Wolf: The Meme That Defined 2009 | Origin Story",
  description: "The complete history of Insanity Wolf meme. From 4chan origins in 2009 to becoming a legendary advice animal. Learn how this iconic meme changed internet culture.",
  keywords: ["insanity wolf history", "insanity wolf origin", "insanity wolf 4chan", "advice animal history", "2009 memes", "insanity wolf meme meaning"],
  openGraph: {
    title: "History of Insanity Wolf: The Meme That Defined 2009",
    description: "The complete origin story of the legendary Insanity Wolf meme",
    type: "article",
    publishedTime: "2024-01-15",
  },
}

export default function HistoryBlogPage() {
  return (
    <article className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-3xl mx-auto px-4 py-16">
          <div className="flex items-center gap-4 text-white/50 text-sm mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              January 15, 2024
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              8 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            History of <span className="text-red-500">Insanity Wolf</span>
          </h1>
          <p className="text-xl text-white/70">
            The complete origin story of the meme that defined internet chaos in 2009
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Featured Image */}
        <div className="relative aspect-square max-w-md mx-auto mb-12">
          <Image
            src="/insanity-wolf-template.webp"
            alt="Insanity Wolf Original Template"
            fill
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-red max-w-none">
          <h2 className="text-2xl font-black uppercase text-white">Origins: 4chan's /b/ Board (2009)</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Insanity Wolf first appeared on 4chan's infamous /b/ board in September 2009. The image macro featured a close-up photograph of a snarling grey wolf, its eyes wild with intensity. Unlike its predecessor Courage Wolf, which offered motivational advice, Insanity Wolf took things to the extreme—offering absurdly violent or unhinged "solutions" to everyday problems.
          </p>
          <p className="text-white/80 leading-relaxed mb-6">
            The original format was simple: a mundane problem on top, followed by an outrageously extreme response on the bottom. The humor came from the shocking escalation—turning minor inconveniences into declarations of war.
          </p>

          <h2 className="text-2xl font-black uppercase text-white mt-12">The Advice Animal Era</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Insanity Wolf was part of a larger phenomenon called "Advice Animals"—image macros featuring animal photos with Impact font captions. This format dominated internet humor from 2009-2012, spawning hundreds of variations including:
          </p>
          <ul className="text-white/80 space-y-2 mb-6">
            <li>• <strong>Courage Wolf</strong> - The motivational predecessor</li>
            <li>• <strong>Advice Dog</strong> - The original that started it all</li>
            <li>• <strong>Socially Awkward Penguin</strong> - Relatable social anxiety</li>
            <li>• <strong>Success Kid</strong> - Small victories celebrated</li>
            <li>• <strong>Bad Luck Brian</strong> - Everything goes wrong</li>
          </ul>
          <p className="text-white/80 leading-relaxed mb-6">
            Among these, Insanity Wolf stood out for its raw intensity. It was rated "GOD TIER" on meme databases—a designation reserved for only the most iconic internet phenomena.
          </p>

          <h2 className="text-2xl font-black uppercase text-white mt-12">Classic Examples</h2>
          <div className="bg-red-950/20 border border-red-900/30 p-6 mb-6">
            <p className="text-white font-bold mb-2">"ALARM DIDN'T GO OFF"</p>
            <p className="text-red-400 font-bold">"BLAME TIMEZONE CONSPIRACY"</p>
          </div>
          <div className="bg-red-950/20 border border-red-900/30 p-6 mb-6">
            <p className="text-white font-bold mb-2">"PIZZA ARRIVES COLD"</p>
            <p className="text-red-400 font-bold">"SUE ENTIRE COUNTRY OF ITALY"</p>
          </div>
          <div className="bg-red-950/20 border border-red-900/30 p-6 mb-6">
            <p className="text-white font-bold mb-2">"NEIGHBOR IS LOUD"</p>
            <p className="text-red-400 font-bold">"BE LOUDER AT 3AM"</p>
          </div>

          <h2 className="text-2xl font-black uppercase text-white mt-12">Cultural Impact</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Insanity Wolf became more than just a meme—it became a way to express frustration through absurdist humor. When something goes wrong, the "Insanity Wolf response" became cultural shorthand for the most unhinged possible reaction.
          </p>
          <p className="text-white/80 leading-relaxed mb-6">
            The meme influenced everything from workplace humor to social media commentary. Its legacy lives on in modern meme formats that use escalation and absurdity for comedic effect.
          </p>

          <h2 className="text-2xl font-black uppercase text-white mt-12">The Revival</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Today, insanitywolf.com carries on the legacy as the official generator for this classic meme format. Create your own Insanity Wolf memes instantly—no signup required, no watermarks, completely free.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-red-900/30 pt-12 mt-12">
          <h2 className="text-3xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Create Your Own <span className="text-red-500">Legend</span>
          </h2>
          <p className="text-white/70 mb-6">Join millions of meme creators. Make your Insanity Wolf meme now.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold uppercase px-6 py-3 transition-colors">
            Create Meme
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}
