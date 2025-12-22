import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Baby, Skull } from "lucide-react"

export const metadata: Metadata = {
  title: "Insanity Wolf vs Baby Insanity Wolf | The Difference Explained",
  description: "What's the difference between Insanity Wolf and Baby Insanity Wolf? Learn when to use each meme format and see examples of both.",
  keywords: [
    "insanity wolf vs baby insanity wolf",
    "baby insanity wolf",
    "baby insanity wolf meme",
    "difference insanity wolf",
    "mild insanity wolf",
    "petty revenge meme",
    "insanity wolf variants",
  ],
  openGraph: {
    title: "Insanity Wolf vs Baby Insanity Wolf",
    description: "The definitive comparison between full insanity and mild rebellion.",
    type: "article",
  },
  alternates: {
    canonical: "https://insanitywolf.com/insanity-wolf-vs-baby-insanity-wolf",
  },
}

export default function BabyComparisonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Insanity Wolf vs Baby Insanity Wolf: The Difference",
    "description": "A comprehensive comparison of Insanity Wolf and its milder variant, Baby Insanity Wolf.",
    "author": {
      "@type": "Organization",
      "name": "Insanity Wolf"
    }
  }

  const examples = [
    {
      situation: "Someone parks badly",
      insanity: "Key every car in the lot to establish dominance",
      baby: "Park really close so they can't open their door",
    },
    {
      situation: "Coworker steals your lunch",
      insanity: "Poison ALL the food in the fridge",
      baby: "Label your food with a passive-aggressive note",
    },
    {
      situation: "Slow walker in front of you",
      insanity: "Eliminate the obstacle permanently",
      baby: "Sigh loudly while passing them",
    },
    {
      situation: "Someone cuts in line",
      insanity: "Cut them from existence",
      baby: "Stand uncomfortably close behind them",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-black text-white">
        <nav className="border-b border-red-900/30 bg-black/95 px-4 py-3">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link href="/" className="font-mono text-sm text-white hover:text-red-400 transition-colors">
              INSANITYWOLF.COM
            </Link>
            <Link href="/insanity-wolf-meme-generator" className="text-xs font-bold text-red-400 hover:text-white transition-colors">
              CREATE MEME
            </Link>
          </div>
        </nav>

        <article className="max-w-4xl mx-auto px-4 py-12">
          <header className="mb-12 text-center">
            <h1
              className="text-3xl md:text-5xl font-black uppercase mb-6"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              <span className="text-red-500">Insanity Wolf</span> vs <span className="text-blue-400">Baby Insanity Wolf</span>
            </h1>
            <p className="text-xl text-white/70">
              Full chaos vs. mild rebellion. Know when to go nuclear and when to be petty.
            </p>
          </header>

          {/* Images side by side */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <figure className="border border-red-900/30 text-center">
              <Image
                src="/insanity-wolf-template.webp"
                alt="Insanity Wolf meme template"
                width={400}
                height={400}
                className="w-full"
              />
              <figcaption className="p-4 bg-red-950/20 font-bold text-red-500 uppercase flex items-center justify-center gap-2">
                <Skull className="h-5 w-5" />
                Insanity Wolf
              </figcaption>
            </figure>
            <figure className="border border-blue-900/30 text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-900/30 to-cyan-900/30 flex items-center justify-center">
                <div className="text-center p-4">
                  <Baby className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-blue-400 font-bold">BABY INSANITY WOLF</p>
                  <p className="text-sm text-white/50">The mild version</p>
                </div>
              </div>
              <figcaption className="p-4 bg-blue-950/20 font-bold text-blue-400 uppercase flex items-center justify-center gap-2">
                <Baby className="h-5 w-5" />
                Baby Insanity Wolf
              </figcaption>
            </figure>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                The Core Difference
              </h2>
              <p className="text-white/80 leading-relaxed">
                <strong className="text-red-400">Insanity Wolf</strong> responds to minor problems with maximum violence and chaos. The response is so extreme it's clearly satirical.
              </p>
              <p className="text-white/80 leading-relaxed">
                <strong className="text-blue-400">Baby Insanity Wolf</strong> responds with petty, passive-aggressive actions that are mildly rebellious but won't get you arrested. It's the "I'm not crazy, but I'm not nice either" energy.
              </p>
              <div className="border border-yellow-500/30 bg-yellow-950/10 p-4 mt-4">
                <p className="text-white/80 text-sm">
                  <strong className="text-yellow-400">TL;DR:</strong> Insanity Wolf gets you on a watchlist. Baby Insanity Wolf makes people mildly uncomfortable.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                Side-by-Side Examples
              </h2>
              <div className="space-y-4">
                {examples.map((ex, i) => (
                  <div key={i} className="border border-red-900/30 overflow-hidden">
                    <div className="bg-red-950/30 p-3 font-bold text-white/80 text-sm uppercase">
                      Situation: {ex.situation}
                    </div>
                    <div className="grid md:grid-cols-2">
                      <div className="p-4 border-b md:border-b-0 md:border-r border-red-900/30">
                        <div className="flex items-center gap-2 mb-2">
                          <Skull className="h-4 w-4 text-red-500" />
                          <span className="text-red-500 font-bold text-xs uppercase">Insanity Wolf</span>
                        </div>
                        <p className="text-white uppercase font-bold">{ex.insanity}</p>
                      </div>
                      <div className="p-4 bg-blue-950/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Baby className="h-4 w-4 text-blue-400" />
                          <span className="text-blue-400 font-bold text-xs uppercase">Baby Insanity Wolf</span>
                        </div>
                        <p className="text-white/80">{ex.baby}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                When to Use Each
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-red-500/30 p-4">
                  <h3 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                    <Skull className="h-4 w-4" />
                    Use Insanity Wolf when:
                  </h3>
                  <ul className="text-sm text-white/80 space-y-2">
                    <li>You want maximum shock value</li>
                    <li>The "solution" should be illegal</li>
                    <li>Pure absurdist dark comedy</li>
                    <li>Channeling your inner villain</li>
                  </ul>
                </div>
                <div className="border border-blue-500/30 p-4">
                  <h3 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                    <Baby className="h-4 w-4" />
                    Use Baby Insanity Wolf when:
                  </h3>
                  <ul className="text-sm text-white/80 space-y-2">
                    <li>The rebellion is petty but real</li>
                    <li>You actually did the thing</li>
                    <li>Passive-aggressive energy</li>
                    <li>Relatable small acts of defiance</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                History & Origin
              </h2>
              <p className="text-white/80 leading-relaxed">
                <strong className="text-blue-400">Baby Insanity Wolf</strong> emerged on Reddit around 2013-2014 as users wanted a milder option for everyday petty victories. While Insanity Wolf dominated 4chan with extreme content, Reddit's r/AdviceAnimals community created Baby Insanity Wolf for more relatable, "actually happened" moments.
              </p>
              <p className="text-white/80 leading-relaxed">
                The format uses a similar wolf image but typically shows a less aggressive wolf or puppy. The humor comes from treating small acts of defiance as if they're huge rebellions.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 border-2 border-red-500 bg-gradient-to-r from-red-950/50 to-black p-8 text-center">
            <h2
              className="text-2xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Go Full <span className="text-red-500">Insanity Wolf</span>
            </h2>
            <p className="text-white/70 mb-6">
              Baby steps are for babies. Create a real Insanity Wolf meme.
            </p>
            <Link
              href="/insanity-wolf-meme-generator"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black uppercase px-8 py-4 transition-colors"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              CREATE MEME
              <Zap className="h-5 w-5" />
            </Link>
          </div>

          <nav className="mt-12 border-t border-red-900/30 pt-8">
            <h3 className="text-sm font-bold text-white/50 uppercase mb-4">More Comparisons</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/insanity-wolf-vs-courage-wolf" className="text-red-400 hover:text-white transition-colors">
                Insanity Wolf vs Courage Wolf →
              </Link>
              <Link href="/blog/what-is-insanity-wolf" className="text-red-400 hover:text-white transition-colors">
                What is Insanity Wolf? →
              </Link>
              <Link href="/wiki" className="text-red-400 hover:text-white transition-colors">
                Insanity Wolf Wiki →
              </Link>
            </div>
          </nav>
        </article>

        <footer className="border-t border-red-900/30 bg-black px-4 py-6">
          <div className="max-w-4xl mx-auto text-center font-mono text-xs text-red-400/40">
            <p>&copy; 2009-2025 INSANITYWOLF.COM. This is satire.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
