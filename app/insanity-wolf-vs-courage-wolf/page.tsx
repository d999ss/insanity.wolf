import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Heart, Skull } from "lucide-react"

export const metadata: Metadata = {
  title: "Insanity Wolf vs Courage Wolf | What's the Difference?",
  description: "Compare Insanity Wolf and Courage Wolf memes. Learn the differences between these iconic advice animal memes, their origins, and when to use each one.",
  keywords: [
    "insanity wolf vs courage wolf",
    "courage wolf vs insanity wolf",
    "difference between insanity wolf and courage wolf",
    "wolf meme comparison",
    "advice animal comparison",
    "courage wolf meme",
    "insanity wolf meme",
  ],
  openGraph: {
    title: "Insanity Wolf vs Courage Wolf",
    description: "The definitive comparison between these two legendary wolf memes.",
    type: "article",
  },
  alternates: {
    canonical: "https://insanitywolf.com/insanity-wolf-vs-courage-wolf",
  },
}

export default function ComparisonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Insanity Wolf vs Courage Wolf: What's the Difference?",
    "description": "A comprehensive comparison of the two most iconic wolf advice animal memes.",
    "author": {
      "@type": "Organization",
      "name": "Insanity Wolf"
    }
  }

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
              <span className="text-red-500">Insanity Wolf</span> vs <span className="text-orange-400">Courage Wolf</span>
            </h1>
            <p className="text-xl text-white/70">
              Two wolves. One format. Completely different vibes.
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
              <figcaption className="p-4 bg-red-950/20 font-bold text-red-500 uppercase">
                Insanity Wolf
              </figcaption>
            </figure>
            <figure className="border border-orange-900/30 text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-orange-900/30 to-yellow-900/30 flex items-center justify-center">
                <div className="text-center p-4">
                  <Heart className="h-16 w-16 text-orange-400 mx-auto mb-4" />
                  <p className="text-orange-400 font-bold">COURAGE WOLF</p>
                  <p className="text-sm text-white/50">Motivational predecessor</p>
                </div>
              </div>
              <figcaption className="p-4 bg-orange-950/20 font-bold text-orange-400 uppercase">
                Courage Wolf
              </figcaption>
            </figure>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                The Key Difference
              </h2>
              <p className="text-white/80 leading-relaxed">
                <strong className="text-white">Courage Wolf</strong> gives you genuine, if aggressive, motivation. It's the drill sergeant meme – tough love that's actually trying to help you.
              </p>
              <p className="text-white/80 leading-relaxed">
                <strong className="text-red-400">Insanity Wolf</strong> is the parody. It takes Courage Wolf's intensity and cranks it to absurd, violent, clearly-satirical extremes. It's not advice – it's anti-advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                Comparison Chart
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-red-900/30">
                  <thead className="bg-red-950/30">
                    <tr>
                      <th className="p-3 text-left border-b border-red-900/30">Aspect</th>
                      <th className="p-3 text-left border-b border-red-900/30 text-orange-400">Courage Wolf</th>
                      <th className="p-3 text-left border-b border-red-900/30 text-red-500">Insanity Wolf</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="p-3 border-b border-red-900/30 font-bold">Origin</td>
                      <td className="p-3 border-b border-red-900/30">4chan /b/ (2008)</td>
                      <td className="p-3 border-b border-red-900/30">4chan /b/ (2009)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-red-900/30 font-bold">Purpose</td>
                      <td className="p-3 border-b border-red-900/30">Genuine motivation</td>
                      <td className="p-3 border-b border-red-900/30">Satirical humor</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-red-900/30 font-bold">Tone</td>
                      <td className="p-3 border-b border-red-900/30">Aggressive but helpful</td>
                      <td className="p-3 border-b border-red-900/30">Absurdly violent</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-red-900/30 font-bold">Example Top</td>
                      <td className="p-3 border-b border-red-900/30">"Life is hard"</td>
                      <td className="p-3 border-b border-red-900/30">"Someone's annoying"</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Example Bottom</td>
                      <td className="p-3">"So are diamonds. Get stronger."</td>
                      <td className="p-3">"Delete them from existence"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                Example Comparison
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-orange-500/30 bg-orange-950/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="h-4 w-4 text-orange-400" />
                    <span className="text-orange-400 font-bold text-sm">COURAGE WOLF</span>
                  </div>
                  <p className="text-white font-bold uppercase">Feeling tired?</p>
                  <p className="text-orange-300 uppercase">Sleep is for the weak. Become the legend they stay awake fearing.</p>
                </div>
                <div className="border border-red-500/30 bg-red-950/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Skull className="h-4 w-4 text-red-500" />
                    <span className="text-red-500 font-bold text-sm">INSANITY WOLF</span>
                  </div>
                  <p className="text-white font-bold uppercase">Feeling tired?</p>
                  <p className="text-red-400 uppercase">Rip out your own heart. It was slowing you down anyway.</p>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-4">
                See the difference? Courage Wolf pushes you to be better. Insanity Wolf suggests solutions that would end you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                Which One Should You Use?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-orange-500/30 p-4">
                  <h3 className="font-bold text-orange-400 mb-2 flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Use Courage Wolf when:
                  </h3>
                  <ul className="text-sm text-white/80 space-y-1">
                    <li>You want to genuinely motivate someone</li>
                    <li>The humor should be empowering</li>
                    <li>You're going for "tough love" vibes</li>
                  </ul>
                </div>
                <div className="border border-red-500/30 p-4">
                  <h3 className="font-bold text-red-500 mb-2 flex items-center gap-2">
                    <Skull className="h-4 w-4" />
                    Use Insanity Wolf when:
                  </h3>
                  <ul className="text-sm text-white/80 space-y-1">
                    <li>You want pure dark comedy</li>
                    <li>The "advice" should be obviously satire</li>
                    <li>You're channeling intrusive thoughts</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                The Family Tree
              </h2>
              <p className="text-white/80 leading-relaxed">
                Both wolves descend from <strong className="text-white">Advice Dog</strong>, the original advice animal meme. The lineage goes:
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap py-6">
                <span className="bg-blue-900/30 border border-blue-500/30 px-4 py-2">Advice Dog (2006)</span>
                <ArrowRight className="h-4 w-4 text-white/50" />
                <span className="bg-orange-900/30 border border-orange-500/30 px-4 py-2">Courage Wolf (2008)</span>
                <ArrowRight className="h-4 w-4 text-white/50" />
                <span className="bg-red-900/30 border border-red-500/30 px-4 py-2">Insanity Wolf (2009)</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                There's also <strong className="text-white">Baby Insanity Wolf</strong>, a milder version for small rebellions like "Using 11 items in the 10-item express lane."
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 border-2 border-red-500 bg-gradient-to-r from-red-950/50 to-black p-8 text-center">
            <h2
              className="text-2xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Make Your Own <span className="text-red-500">Insanity Wolf</span>
            </h2>
            <p className="text-white/70 mb-6">
              Now that you know the difference, create the most unhinged meme possible.
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
            <h3 className="text-sm font-bold text-white/50 uppercase mb-4">Read More</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog/what-is-insanity-wolf" className="text-red-400 hover:text-white transition-colors">
                What is Insanity Wolf? →
              </Link>
              <Link href="/blog/history" className="text-red-400 hover:text-white transition-colors">
                Complete History →
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
