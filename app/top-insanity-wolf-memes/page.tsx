import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Trophy, TrendingUp, ArrowRight } from "lucide-react"
import { getTopMemes, getMemeCount } from "@/lib/memes"

export const metadata: Metadata = {
  title: "Top Insanity Wolf Memes | Best Advice Animal Memes",
  description: "Browse the top Insanity Wolf memes of all time. The best advice animal memes from the legendary 4chan meme. Create your own Insanity Wolf meme free.",
  keywords: [
    "insanity wolf memes",
    "top insanity wolf",
    "best insanity wolf memes",
    "insanity wolf best",
    "advice animal memes",
    "wolf meme",
    "funny insanity wolf",
  ],
  openGraph: {
    title: "Top Insanity Wolf Memes | Best Advice Animal Memes",
    description: "Browse the top Insanity Wolf memes. The most extreme advice animal memes ever created.",
    type: "website",
    siteName: "Insanity Wolf",
    images: [
      {
        url: "/insanity-wolf-template.webp",
        width: 600,
        height: 600,
        alt: "Insanity Wolf - Top Memes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Insanity Wolf Memes",
    description: "Browse the best Insanity Wolf memes of all time",
  },
  alternates: {
    canonical: "https://insanitywolf.com/top-insanity-wolf-memes",
  },
}

export default function TopMemesPage() {
  const topMemes = getTopMemes(48)
  const totalMemes = getMemeCount()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Top Insanity Wolf Memes",
    "description": "Collection of the top Insanity Wolf memes",
    "url": "https://insanitywolf.com/top-insanity-wolf-memes",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": topMemes.length,
      "itemListElement": topMemes.slice(0, 10).map((meme, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "url": `https://insanitywolf.com/meme/${meme.slug}`,
        "name": `${meme.topText} / ${meme.bottomText}`
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Nav */}
        <nav className="border-b border-red-900/30 bg-black/95 px-4 py-3">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="font-mono text-sm text-white hover:text-red-400 transition-colors">
              INSANITYWOLF.COM
            </Link>
            <div className="flex items-center gap-4">
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
          {/* Hero */}
          <header className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-600 text-black px-3 py-1 text-xs font-bold uppercase mb-4">
              <Trophy className="h-4 w-4" />
              HALL OF FAME
            </div>
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Top <span className="text-red-500">Insanity Wolf</span> Memes
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              The most viewed Insanity Wolf memes ever created. {totalMemes.toLocaleString()}+ memes and counting.
            </p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-xl mx-auto">
            <div className="border border-red-900/30 bg-red-950/10 p-4 text-center">
              <div className="text-2xl font-black text-white">{totalMemes.toLocaleString()}</div>
              <div className="text-xs text-red-400/60 uppercase">Total Memes</div>
            </div>
            <div className="border border-red-900/30 bg-red-950/10 p-4 text-center">
              <div className="text-2xl font-black text-white">
                {topMemes[0] ? topMemes[0].views.toLocaleString() : "0"}
              </div>
              <div className="text-xs text-red-400/60 uppercase">#1 Views</div>
            </div>
            <div className="border border-red-900/30 bg-red-950/10 p-4 text-center">
              <div className="text-2xl font-black text-white">2009</div>
              <div className="text-xs text-red-400/60 uppercase">Since</div>
            </div>
          </div>

          {/* Meme grid */}
          {topMemes.length > 0 ? (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-red-500" />
                <h2 className="font-bold uppercase">Top Memes by Views</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {topMemes.map((meme, idx) => (
                  <Link
                    key={meme.slug}
                    href={`/meme/${meme.slug}`}
                    className="group block border border-red-900/30 hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-500/10"
                  >
                    <div className="relative">
                      {idx < 3 && (
                        <div className={`absolute top-2 left-2 z-10 px-2 py-1 text-xs font-black ${
                          idx === 0 ? 'bg-yellow-500 text-black' :
                          idx === 1 ? 'bg-gray-300 text-black' :
                          'bg-orange-600 text-white'
                        }`}>
                          #{idx + 1}
                        </div>
                      )}
                      <Image
                        src={meme.imageUrl}
                        alt={`Insanity Wolf: ${meme.topText} - ${meme.bottomText}`}
                        width={275}
                        height={265}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="p-3 bg-red-950/10">
                      <p className="text-xs text-white/50 truncate">
                        {meme.topText} / {meme.bottomText}
                      </p>
                      <p className="text-xs text-red-400/60 mt-1">
                        {meme.views.toLocaleString()} views
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : (
            <div className="text-center py-12">
              <p className="text-white/50 mb-4">No memes yet. Be the first!</p>
              <Link
                href="/insanity-wolf-meme-generator"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-6 py-3 transition-colors"
              >
                Create First Meme
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          {/* CTA */}
          <section className="mt-12 border-2 border-yellow-500 bg-gradient-to-r from-red-950/50 to-orange-950/50 p-8 text-center">
            <h2
              className="text-2xl md:text-3xl font-black uppercase mb-3"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Create Your Own <span className="text-red-500">Insanity Wolf</span>
            </h2>
            <p className="text-white/70 mb-4">
              Join thousands of meme creators. Your meme could be next on this list.
            </p>
            <Link
              href="/insanity-wolf-meme-generator"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-6 py-3 text-lg transition-all"
            >
              CREATE MEME NOW
              <ArrowRight className="h-5 w-5" />
            </Link>
          </section>

          {/* Internal links */}
          <nav className="mt-8 border-t border-red-900/30 pt-6">
            <h3 className="text-sm font-bold text-white/50 uppercase mb-3">Explore</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/new-insanity-wolf-memes" className="text-sm text-red-400 hover:text-white transition-colors">
                New Memes
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/insanity-wolf-meme-generator" className="text-sm text-red-400 hover:text-white transition-colors">
                Meme Generator
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/gallery" className="text-sm text-red-400 hover:text-white transition-colors">
                Gallery
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/store" className="text-sm text-red-400 hover:text-white transition-colors">
                Merch
              </Link>
            </div>
          </nav>
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
