import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { TrendingUp, Flame, Clock, Users, ArrowRight } from "lucide-react"
import { getNewestMemes, getTopMemes, getMostRemixedMemes, getMemeCount } from "@/lib/memes"

export const metadata: Metadata = {
  title: "Trending Insanity Wolf Memes | Viral & Hot Right Now",
  description: "See what's trending on Insanity Wolf. The hottest, most viral, and most shared memes right now. Updated hourly.",
  keywords: [
    "trending insanity wolf",
    "viral insanity wolf memes",
    "hot memes",
    "trending memes today",
    "popular wolf memes",
    "viral memes 2024",
    "best memes today",
  ],
  openGraph: {
    title: "Trending Insanity Wolf Memes",
    description: "The hottest, most viral Insanity Wolf memes right now.",
    type: "website",
    siteName: "Insanity Wolf",
    url: "https://insanitywolf.com/trending-insanity-wolf-memes",
  },
  alternates: {
    canonical: "https://insanitywolf.com/trending-insanity-wolf-memes",
  },
}

export default function TrendingPage() {
  const newestMemes = getNewestMemes(12)
  const topMemes = getTopMemes(12)
  const mostRemixed = getMostRemixedMemes(8)
  const totalCount = getMemeCount()

  // Calculate "hot" memes - newest with good views
  const hotMemes = newestMemes
    .filter((m) => m.views > 10)
    .slice(0, 6)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Trending Insanity Wolf Memes",
    "description": "The hottest, most viral Insanity Wolf memes right now.",
    "url": "https://insanitywolf.com/trending-insanity-wolf-memes",
    "numberOfItems": totalCount,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-black text-white">
        <nav className="border-b border-red-900/30 bg-black/95 px-4 py-3">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="font-mono text-sm text-white hover:text-red-400 transition-colors">
              INSANITYWOLF.COM
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/top-insanity-wolf-memes" className="text-xs font-bold text-white/50 hover:text-white transition-colors">
                TOP
              </Link>
              <Link href="/new-insanity-wolf-memes" className="text-xs font-bold text-white/50 hover:text-white transition-colors">
                NEW
              </Link>
              <Link href="/insanity-wolf-meme-generator" className="text-xs font-bold text-red-400 hover:text-white transition-colors">
                CREATE
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-4 py-8">
          <header className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 text-xs font-bold uppercase mb-4">
              <TrendingUp className="h-4 w-4" />
              TRENDING NOW
            </div>
            <h1
              className="text-3xl md:text-5xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Trending <span className="text-red-500">Insanity Wolf</span> Memes
            </h1>
            <p className="text-white/70 max-w-xl mx-auto">
              The hottest, most viral memes happening right now. Updated hourly.
            </p>
          </header>

          {/* Hot Right Now */}
          {hotMemes.length > 0 && (
            <section className="mb-12">
              <h2 className="flex items-center gap-2 text-xl font-black uppercase mb-6">
                <Flame className="h-6 w-6 text-orange-500" />
                <span className="text-orange-400">Hot</span> Right Now
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotMemes.map((meme, idx) => (
                  <Link
                    key={meme.slug}
                    href={`/meme/${meme.slug}`}
                    className="block border-2 border-orange-500/50 hover:border-orange-400 transition-colors relative group"
                  >
                    {idx === 0 && (
                      <div className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 z-10">
                        #1 HOT
                      </div>
                    )}
                    <Image
                      src={meme.imageUrl}
                      alt={`Insanity Wolf: ${meme.topText} - ${meme.bottomText}`}
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <Users className="h-3 w-3" />
                        {meme.views} views
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Fresh Drops */}
          <section className="mb-12">
            <h2 className="flex items-center gap-2 text-xl font-black uppercase mb-6">
              <Clock className="h-6 w-6 text-green-500" />
              <span className="text-green-400">Fresh</span> Drops
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {newestMemes.slice(0, 8).map((meme) => (
                <Link
                  key={meme.slug}
                  href={`/meme/${meme.slug}`}
                  className="block border border-green-900/30 hover:border-green-500/50 transition-colors"
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
                href="/new-insanity-wolf-memes"
                className="text-green-400 hover:text-white text-sm font-bold transition-colors"
              >
                See All New Memes &rarr;
              </Link>
            </div>
          </section>

          {/* Most Remixed */}
          {mostRemixed.length > 0 && (
            <section className="mb-12">
              <h2 className="flex items-center gap-2 text-xl font-black uppercase mb-6">
                <TrendingUp className="h-6 w-6 text-purple-500" />
                <span className="text-purple-400">Most Remixed</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {mostRemixed.map((meme) => (
                  <Link
                    key={meme.slug}
                    href={`/meme/${meme.slug}`}
                    className="block border border-purple-900/30 hover:border-purple-500/50 transition-colors relative"
                  >
                    <Image
                      src={meme.imageUrl}
                      alt={`Insanity Wolf: ${meme.topText} - ${meme.bottomText}`}
                      width={275}
                      height={265}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1">
                      {meme.remixCount} remixes
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* All-Time Top */}
          <section className="mb-12">
            <h2 className="flex items-center gap-2 text-xl font-black uppercase mb-6">
              <TrendingUp className="h-6 w-6 text-red-500" />
              <span className="text-red-400">All-Time</span> Legends
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {topMemes.slice(0, 8).map((meme, idx) => (
                <Link
                  key={meme.slug}
                  href={`/meme/${meme.slug}`}
                  className="block border border-red-900/30 hover:border-red-500/50 transition-colors relative"
                >
                  <Image
                    src={meme.imageUrl}
                    alt={`Insanity Wolf: ${meme.topText} - ${meme.bottomText}`}
                    width={275}
                    height={265}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1">
                    #{idx + 1}
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/top-insanity-wolf-memes"
                className="text-red-400 hover:text-white text-sm font-bold transition-colors"
              >
                See All Top Memes &rarr;
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="border-2 border-red-500 bg-gradient-to-r from-red-950/50 to-orange-950/50 p-8 text-center">
            <h2
              className="text-2xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Make the Next <span className="text-red-500">Viral Meme</span>
            </h2>
            <p className="text-white/70 mb-6">
              Your meme could be trending next. Create one now.
            </p>
            <Link
              href="/insanity-wolf-meme-generator"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black uppercase px-8 py-4 transition-colors"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              CREATE MEME
              <ArrowRight className="h-5 w-5" />
            </Link>
          </section>
        </main>

        <footer className="border-t border-red-900/30 bg-black px-4 py-6">
          <div className="max-w-6xl mx-auto text-center font-mono text-xs text-red-400/40">
            <p>&copy; 2009-2025 INSANITYWOLF.COM. This is satire.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
