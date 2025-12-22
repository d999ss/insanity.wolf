import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight, Sparkles } from "lucide-react"
import { getNewestMemes, getMemeCount } from "@/lib/memes"

export const metadata: Metadata = {
  title: "New Insanity Wolf Memes | Latest Advice Animal Memes",
  description: "See the newest Insanity Wolf memes created today. Fresh advice animal memes updated constantly. Create your own Insanity Wolf meme free.",
  keywords: [
    "new insanity wolf memes",
    "latest insanity wolf",
    "fresh memes",
    "new advice animal memes",
    "insanity wolf today",
  ],
  openGraph: {
    title: "New Insanity Wolf Memes | Latest Today",
    description: "See the newest Insanity Wolf memes. Fresh memes created today.",
    type: "website",
    siteName: "Insanity Wolf",
    images: [
      {
        url: "/insanity-wolf-template.webp",
        width: 600,
        height: 600,
        alt: "Insanity Wolf - New Memes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Insanity Wolf Memes",
    description: "See the newest Insanity Wolf memes created today",
  },
  alternates: {
    canonical: "https://insanitywolf.com/new-insanity-wolf-memes",
  },
}

// Revalidate every 5 minutes to show fresh content
export const revalidate = 300

export default function NewMemesPage() {
  const newMemes = getNewestMemes(48)
  const totalMemes = getMemeCount()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "New Insanity Wolf Memes",
    "description": "Latest Insanity Wolf memes",
    "url": "https://insanitywolf.com/new-insanity-wolf-memes",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": newMemes.length,
      "itemListElement": newMemes.slice(0, 10).map((meme, idx) => ({
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
              <Link href="/top-insanity-wolf-memes" className="text-xs font-bold text-white/50 hover:text-white transition-colors">
                TOP
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
            <div className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-1 text-xs font-bold uppercase mb-4">
              <Sparkles className="h-4 w-4" />
              FRESH CHAOS
            </div>
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              New <span className="text-red-500">Insanity Wolf</span> Memes
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              The latest Insanity Wolf memes, fresh off the generator. Updated constantly.
            </p>
          </header>

          {/* Meme grid */}
          {newMemes.length > 0 ? (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-green-500" />
                <h2 className="font-bold uppercase">Latest Memes</h2>
                <span className="text-white/30 text-sm">({totalMemes.toLocaleString()} total)</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {newMemes.map((meme) => (
                  <Link
                    key={meme.slug}
                    href={`/meme/${meme.slug}`}
                    className="group block border border-red-900/30 hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-500/10"
                  >
                    <Image
                      src={meme.imageUrl}
                      alt={`Insanity Wolf: ${meme.topText} - ${meme.bottomText}`}
                      width={275}
                      height={265}
                      className="w-full h-auto"
                    />
                    <div className="p-3 bg-red-950/10">
                      <p className="text-xs text-white/50 truncate">
                        {meme.topText} / {meme.bottomText}
                      </p>
                      <p className="text-xs text-green-400/60 mt-1">
                        {new Date(meme.createdAt).toLocaleDateString()}
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
              Add Your <span className="text-red-500">Meme</span> to the List
            </h2>
            <p className="text-white/70 mb-4">
              Create your own Insanity Wolf meme and watch it appear here instantly.
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
              <Link href="/top-insanity-wolf-memes" className="text-sm text-red-400 hover:text-white transition-colors">
                Top Memes
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
