import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles, Trophy } from "lucide-react"
import { loadMemes } from "@/lib/memes"

export const metadata: Metadata = {
  title: "Best Insanity Wolf Memes of All Time (Top 50 Ranked)",
  description: "The ultimate collection of the funniest and most iconic Insanity Wolf memes ever created. From 4chan classics to modern masterpieces. Warning: extreme humor ahead.",
  keywords: ["best insanity wolf memes", "top insanity wolf", "funniest insanity wolf", "classic insanity wolf memes", "insanity wolf compilation"],
  openGraph: {
    title: "Best Insanity Wolf Memes of All Time",
    description: "The ultimate collection of legendary Insanity Wolf memes. From 4chan classics to modern masterpieces.",
    type: "article",
    publishedTime: "2024-01-20T00:00:00.000Z",
    modifiedTime: new Date().toISOString(),
  },
  alternates: {
    canonical: "https://insanitywolf.com/blog/best-insanity-wolf-memes"
  }
}

export default function BestInsanityWolfMemesPage() {
  const memes = loadMemes()
  const featuredMemes = memes.slice(0, 12)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Insanity Wolf Memes of All Time (Top 50 Ranked)",
    "description": "The ultimate collection of the funniest Insanity Wolf memes ever created.",
    "image": "https://insanitywolf.com/insanity-wolf-default.jpg",
    "author": {
      "@type": "Organization",
      "name": "Insanity Wolf"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Insanity Wolf",
      "logo": {
        "@type": "ImageObject",
        "url": "https://insanitywolf.com/insanity-wolf-default.jpg"
      }
    },
    "datePublished": "2024-01-20T00:00:00.000Z",
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://insanitywolf.com/blog/best-insanity-wolf-memes"
    }
  }

  const classicMemes = [
    {
      top: "NEED TO SNEEZE",
      bottom: "SWALLOW IT AND ABSORB ITS POWER",
      era: "2009 Classic"
    },
    {
      top: "SOMEONE TAKES YOUR PARKING SPOT",
      bottom: "TAKE THEIR FAMILY",
      era: "2010"
    },
    {
      top: "PHONE DIES",
      bottom: "DIE WITH IT OUT OF RESPECT",
      era: "2011"
    },
    {
      top: "ALARM CLOCK GOES OFF",
      bottom: "THROW IT THROUGH WINDOW, GO BACK TO SLEEP ON BROKEN GLASS",
      era: "2009 Classic"
    },
    {
      top: "MOSQUITO BITES YOU",
      bottom: "BITE IT BACK",
      era: "2010"
    },
    {
      top: "BOSS SAYS BE THERE OR BE SQUARE",
      bottom: "ARRIVE AS A TRIANGLE",
      era: "2012"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-red-500">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-red-500">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Best Insanity Wolf Memes</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-2 text-yellow-500 mb-4">
            <Trophy className="h-6 w-6" />
            <span className="font-bold uppercase tracking-wide">Hall of Fame</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Best <span className="text-red-500">Insanity Wolf</span> Memes of All Time
          </h1>
          <p className="text-xl text-gray-400">
            The most unhinged, legendary, and absolutely GOD TIER memes from 2009 to today
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} • {memes.length + classicMemes.length}+ memes
          </div>
        </header>

        {/* Quick CTA */}
        <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-900/50 p-6 mb-12">
          <p className="text-lg mb-4">
            <strong>Think you can do better?</strong> Create your own legendary meme:
          </p>
          <Link
            href="/insanity-wolf-meme-generator"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 font-bold"
          >
            <Sparkles className="h-5 w-5" />
            CREATE YOUR OWN
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Classic Era Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2">Classic Era (2009-2012)</h2>
          <p className="text-gray-400 mb-8">
            The memes that started it all. These are the ones that made Insanity Wolf a legend on 4chan and beyond.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {classicMemes.map((meme, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 p-6 hover:border-red-900/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{meme.era}</span>
                  <span className="text-yellow-500 text-sm font-bold">#{index + 1}</span>
                </div>
                <div className="space-y-2">
                  <p className="text-white font-bold uppercase">{meme.top}</p>
                  <p className="text-red-500 font-black uppercase text-lg">{meme.bottom}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modern Era Section */}
        {featuredMemes.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-2">Modern Classics</h2>
            <p className="text-gray-400 mb-8">
              The best user-created Insanity Wolf memes from our community. Fresh chaos daily.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {featuredMemes.map((meme) => (
                <Link
                  key={meme.id}
                  href={`/meme/${meme.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-square overflow-hidden border border-gray-800 group-hover:border-red-900/50 transition-colors">
                    <Image
                      src={meme.imageUrl}
                      alt={`${meme.topText} ${meme.bottomText}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-2 text-sm">
                    <p className="text-gray-300 truncate">{meme.topText}</p>
                    <p className="text-red-500 truncate font-bold">{meme.bottomText}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 border border-gray-700 hover:border-red-900 px-6 py-3 font-bold"
              >
                VIEW ALL MEMES IN GALLERY
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </section>
        )}

        {/* What Makes a Great Insanity Wolf Meme */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What Makes These Memes So Good?</h2>

          <div className="space-y-6 text-gray-300">
            <p>
              The best Insanity Wolf memes share common elements that make them memorable:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-gray-800 p-6">
                <h3 className="text-white font-bold mb-2">Relatable Setup</h3>
                <p className="text-gray-400">
                  The top text presents a situation everyone knows—an alarm going off, someone being annoying,
                  a minor inconvenience. This grounds the joke in reality.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-6">
                <h3 className="text-white font-bold mb-2">Insane Escalation</h3>
                <p className="text-gray-400">
                  The bottom text takes it to 11. The response is so disproportionate, so unhinged, that it becomes absurd comedy.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-6">
                <h3 className="text-white font-bold mb-2">Specificity</h3>
                <p className="text-gray-400">
                  "Sleep on broken glass" is funnier than "don't care." The specific details make it memorable.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-6">
                <h3 className="text-white font-bold mb-2">Confidence</h3>
                <p className="text-gray-400">
                  Insanity Wolf never hesitates, never explains. The advice is delivered with absolute conviction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Evolution Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Evolution of Insanity Wolf Humor</h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-20 text-right text-gray-500 font-mono">2009</div>
              <div className="w-3 h-3 mt-2 bg-red-500 rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold">The Birth</h3>
                <p className="text-gray-400">Raw, unfiltered chaos on 4chan's /b/ board. Pure shock value.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-20 text-right text-gray-500 font-mono">2010-11</div>
              <div className="w-3 h-3 mt-2 bg-red-500 rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold">Golden Age</h3>
                <p className="text-gray-400">Peak creativity. Spread to Reddit, Imgur, Facebook. Advice Animal format perfected.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-20 text-right text-gray-500 font-mono">2012-14</div>
              <div className="w-3 h-3 mt-2 bg-red-500 rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold">Mainstream</h3>
                <p className="text-gray-400">Know Your Meme's "GOD TIER" rating. Everyone's mom knows Insanity Wolf.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-20 text-right text-gray-500 font-mono">2015+</div>
              <div className="w-3 h-3 mt-2 bg-red-500 rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-white font-bold">Legacy Status</h3>
                <p className="text-gray-400">Archived by Library of Congress. Studied in meme history. Still creating bangers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="mt-12 text-center bg-gradient-to-b from-red-950/30 to-transparent p-12 border border-red-900/30">
          <h2 className="text-2xl font-bold mb-4">Ready to Make Meme History?</h2>
          <p className="text-gray-400 mb-6">
            Your meme could be on this list. Join thousands of creators making Insanity Wolf legends.
          </p>
          <Link
            href="/insanity-wolf-meme-generator"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-4 font-black text-xl"
          >
            CREATE YOUR LEGACY
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>

        {/* Related Content */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-bold mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/blog/what-is-insanity-wolf"
              className="block bg-gray-900/50 border border-gray-800 p-4 hover:border-red-900/50 transition-colors"
            >
              <h4 className="font-bold text-white mb-2">What is Insanity Wolf?</h4>
              <p className="text-sm text-gray-400">The complete history and meaning behind this legendary meme</p>
            </Link>
            <Link
              href="/blog/how-to-make-insanity-wolf-meme"
              className="block bg-gray-900/50 border border-gray-800 p-4 hover:border-red-900/50 transition-colors"
            >
              <h4 className="font-bold text-white mb-2">How to Make Insanity Wolf Memes</h4>
              <p className="text-sm text-gray-400">Step-by-step tutorial for creating perfect memes</p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
