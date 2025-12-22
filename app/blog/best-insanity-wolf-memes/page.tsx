import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, Star, Trophy } from "lucide-react"
import { getTopMemes } from "@/lib/memes"

export const metadata: Metadata = {
  title: "50 Best Insanity Wolf Memes of All Time | Classic & New",
  description: "The ultimate collection of the best Insanity Wolf memes ever created. From classic 4chan originals to the newest viral hits. Warning: extreme humor ahead.",
  keywords: [
    "best insanity wolf memes",
    "funniest insanity wolf",
    "top insanity wolf memes",
    "classic insanity wolf",
    "insanity wolf compilation",
    "viral wolf memes",
    "best advice animal memes",
    "insanity wolf greatest hits",
  ],
  openGraph: {
    title: "50 Best Insanity Wolf Memes of All Time",
    description: "The ultimate collection of the best Insanity Wolf memes ever created.",
    type: "article",
    publishedTime: "2024-03-01T00:00:00Z",
    authors: ["Insanity Wolf"],
  },
  alternates: {
    canonical: "https://insanitywolf.com/blog/best-insanity-wolf-memes",
  },
}

export default function BestMemesPage() {
  const topMemes = getTopMemes(24)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "50 Best Insanity Wolf Memes of All Time",
    "description": "The ultimate collection of the best Insanity Wolf memes ever created.",
    "image": "https://insanitywolf.com/insanity-wolf-template.webp",
    "author": {
      "@type": "Organization",
      "name": "Insanity Wolf"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Insanity Wolf",
      "logo": {
        "@type": "ImageObject",
        "url": "https://insanitywolf.com/insanity-wolf-template.webp"
      }
    },
    "datePublished": "2024-03-01",
    "dateModified": "2024-12-01"
  }

  const classicMemes = [
    { top: "Alarm goes off", bottom: "Throw it through the window", category: "Classic 4chan" },
    { top: "Someone takes your parking spot", bottom: "Take their life", category: "Classic 4chan" },
    { top: "Out of toilet paper", bottom: "Use your hand. Assert dominance.", category: "Classic 4chan" },
    { top: "Friend cancels plans", bottom: "Cancel their existence", category: "Classic 4chan" },
    { top: "Boss asks you to stay late", bottom: "Burn the building down", category: "Classic 4chan" },
    { top: "Stub your toe", bottom: "Remove the entire foot", category: "Reddit Era" },
    { top: "Someone honks at you", bottom: "Follow them home", category: "Reddit Era" },
    { top: "Run out of coffee", bottom: "Drink the blood of your enemies", category: "Reddit Era" },
    { top: "Microwave meal says stir halfway through", bottom: "Eat it frozen", category: "Modern" },
    { top: "Phone dies at 1%", bottom: "Throw it in the ocean", category: "Modern" },
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
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                March 1, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                10 min read
              </span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-6 w-6 text-yellow-500" />
              <span className="text-yellow-500 font-bold uppercase text-sm">Ultimate Collection</span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-black uppercase mb-6"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              50 Best <span className="text-red-500">Insanity Wolf</span> Memes of All Time
            </h1>
            <p className="text-xl text-white/70">
              From the chaotic depths of 4chan to today's viral hits – the most extreme, absurd, and legendary Insanity Wolf memes ever created.
            </p>
          </header>

          {/* Featured Image */}
          <figure className="mb-12 border border-red-900/30">
            <Image
              src="/insanity-wolf-template.webp"
              alt="Insanity Wolf - the legendary meme"
              width={600}
              height={600}
              className="w-full max-w-md mx-auto"
              priority
            />
            <figcaption className="text-center text-sm text-white/50 p-4 border-t border-red-900/30">
              The face that launched a million memes
            </figcaption>
          </figure>

          {/* Content */}
          <div className="prose prose-invert prose-red max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                The Classics That Started It All
              </h2>
              <p className="text-white/80 leading-relaxed">
                These are the original Insanity Wolf memes that defined the format on 4chan's /b/ board in 2009. They established the template: mundane problem, <strong className="text-white">absolutely unhinged solution</strong>.
              </p>
              <div className="grid gap-4 mt-6">
                {classicMemes.slice(0, 5).map((meme, i) => (
                  <div key={i} className="border border-red-900/30 bg-black p-4 flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-red-600 text-white font-black rounded-full flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <span className="text-xs text-yellow-500 uppercase font-bold">{meme.category}</span>
                      <p className="text-white font-bold uppercase">{meme.top}</p>
                      <p className="text-red-500 font-black uppercase">{meme.bottom}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                Reddit Era Favorites
              </h2>
              <p className="text-white/80 leading-relaxed">
                When Insanity Wolf migrated to Reddit around 2010-2012, it reached a massive new audience. These memes became some of the most upvoted advice animals of all time.
              </p>
              <div className="grid gap-4 mt-6">
                {classicMemes.slice(5, 8).map((meme, i) => (
                  <div key={i} className="border border-red-900/30 bg-black p-4 flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-red-600 text-white font-black rounded-full flex-shrink-0">
                      {i + 6}
                    </div>
                    <div>
                      <span className="text-xs text-yellow-500 uppercase font-bold">{meme.category}</span>
                      <p className="text-white font-bold uppercase">{meme.top}</p>
                      <p className="text-red-500 font-black uppercase">{meme.bottom}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                Modern Insanity Wolf
              </h2>
              <p className="text-white/80 leading-relaxed">
                Even today, Insanity Wolf lives on. New generations discover this classic meme and put their own spin on it. The best modern memes maintain the original spirit while adding contemporary humor.
              </p>
              <div className="grid gap-4 mt-6">
                {classicMemes.slice(8, 10).map((meme, i) => (
                  <div key={i} className="border border-red-900/30 bg-black p-4 flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-red-600 text-white font-black rounded-full flex-shrink-0">
                      {i + 9}
                    </div>
                    <div>
                      <span className="text-xs text-yellow-500 uppercase font-bold">{meme.category}</span>
                      <p className="text-white font-bold uppercase">{meme.top}</p>
                      <p className="text-red-500 font-black uppercase">{meme.bottom}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* User-generated memes from the site */}
            {topMemes.length > 0 && (
              <section>
                <h2 className="text-2xl font-black uppercase text-white mb-4 flex items-center gap-2" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                  <Star className="h-6 w-6 text-yellow-500" />
                  Top Community Memes
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  The best memes created by our community. These are the most viewed and shared Insanity Wolf memes on our site.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {topMemes.map((meme) => (
                    <Link
                      key={meme.slug}
                      href={`/meme/${meme.slug}`}
                      className="block border border-red-900/30 hover:border-red-500/50 transition-colors"
                    >
                      <Image
                        src={meme.imageUrl}
                        alt={`Insanity Wolf: ${meme.topText} - ${meme.bottomText}`}
                        width={275}
                        height={265}
                        className="w-full h-auto"
                      />
                    </Link>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link
                    href="/top-insanity-wolf-memes"
                    className="text-red-400 hover:text-white text-sm font-bold transition-colors"
                  >
                    View All Top Memes &rarr;
                  </Link>
                </div>
              </section>
            )}

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                What Makes These Memes Great?
              </h2>
              <p className="text-white/80 leading-relaxed">
                Looking at the best Insanity Wolf memes, patterns emerge:
              </p>
              <ul className="space-y-2 text-white/80 mt-4">
                <li><strong className="text-white">Relatable setup:</strong> Everyone's experienced an alarm they wanted to destroy</li>
                <li><strong className="text-white">Maximum escalation:</strong> The response is comically disproportionate</li>
                <li><strong className="text-white">Brevity:</strong> Short, punchy text that hits hard</li>
                <li><strong className="text-white">Clear satire:</strong> Obviously absurd, not genuinely concerning</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                Why Insanity Wolf Endures
              </h2>
              <p className="text-white/80 leading-relaxed">
                While many memes from 2009 have faded into obscurity, Insanity Wolf remains popular because it taps into something universal: <strong className="text-white">the intrusive thought</strong>.
              </p>
              <p className="text-white/80 leading-relaxed">
                Everyone has had moments where they imagined doing something completely inappropriate. Insanity Wolf gives voice to that dark humor in a way that's obviously satirical and therefore safe. It's cathartic.
              </p>
              <p className="text-white/80 leading-relaxed">
                The Library of Congress even archived Insanity Wolf as part of the Web Cultures collection, recognizing its significance to internet culture.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 border-2 border-red-500 bg-gradient-to-r from-red-950/50 to-black p-8 text-center">
            <h2
              className="text-2xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Create the Next <span className="text-red-500">Best Meme</span>
            </h2>
            <p className="text-white/70 mb-6">
              Your meme could be on this list. Make one now.
            </p>
            <Link
              href="/insanity-wolf-meme-generator"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black uppercase px-8 py-4 transition-colors"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              CREATE YOUR MEME
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Related Links */}
          <nav className="mt-12 border-t border-red-900/30 pt-8">
            <h3 className="text-sm font-bold text-white/50 uppercase mb-4">Read More</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog/what-is-insanity-wolf" className="text-red-400 hover:text-white transition-colors">
                What is Insanity Wolf? →
              </Link>
              <Link href="/blog/how-to-make-insanity-wolf-meme" className="text-red-400 hover:text-white transition-colors">
                How to Make a Meme →
              </Link>
              <Link href="/wiki" className="text-red-400 hover:text-white transition-colors">
                Wiki & Encyclopedia →
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
