import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Folder, TrendingUp, Zap } from "lucide-react"
import { CLUSTERS, getClustersByPriority } from "@/lib/clusters"
import { getMemesByTheme, getMemeCountByTheme } from "@/lib/memes"

export const metadata: Metadata = {
  title: "Insanity Wolf Meme Categories | Browse by Topic",
  description: "Browse Insanity Wolf memes by category: work, Monday, coffee, relationships, technology, and more. Find the perfect meme for every extreme situation.",
  keywords: [
    "insanity wolf categories",
    "insanity wolf memes",
    "work memes",
    "monday memes",
    "coffee memes",
    "relationship memes",
    "meme categories",
  ],
  openGraph: {
    title: "Insanity Wolf Meme Categories",
    description: "Browse memes by topic: work, Monday, coffee, relationships, and more.",
    type: "website",
    siteName: "Insanity Wolf",
    url: "https://insanitywolf.com/memes",
  },
  alternates: {
    canonical: "https://insanitywolf.com/memes",
  },
}

export default function MemeCategoriesPage() {
  const clusters = getClustersByPriority()

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Insanity Wolf Meme Categories",
    "description": "Browse Insanity Wolf memes by category",
    "url": "https://insanitywolf.com/memes",
    "hasPart": clusters.map((cluster) => ({
      "@type": "CollectionPage",
      "name": cluster.title,
      "url": `https://insanitywolf.com/memes/${cluster.slug}`,
    })),
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
              <Link href="/insanity-wolf-meme-generator" className="text-xs font-bold text-white/50 hover:text-white transition-colors">
                GENERATOR
              </Link>
              <Link href="/top-insanity-wolf-memes" className="text-xs font-bold text-white/50 hover:text-white transition-colors">
                TOP MEMES
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <header className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase mb-4">
              <Folder className="h-4 w-4" />
              BROWSE BY CATEGORY
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              <span className="text-red-500">Insanity Wolf</span> Meme Categories
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Browse memes by topic. From work rage to Monday mayhem, find the perfect extreme reaction.
            </p>
          </header>

          {/* Category Grid */}
          <section className="mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clusters.map((cluster) => {
                const memes = getMemesByTheme(cluster.id, 4)
                const count = getMemeCountByTheme(cluster.id)

                return (
                  <Link
                    key={cluster.id}
                    href={`/memes/${cluster.slug}`}
                    className="block border border-red-900/30 hover:border-red-500/50 transition-colors group"
                  >
                    {/* Preview grid */}
                    <div className="grid grid-cols-2 gap-px bg-red-900/20">
                      {memes.slice(0, 4).map((meme, i) => (
                        <div key={i} className="aspect-square overflow-hidden">
                          <Image
                            src={meme.imageUrl}
                            alt=""
                            width={150}
                            height={150}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      ))}
                      {/* Fill empty slots */}
                      {Array(Math.max(0, 4 - memes.length)).fill(0).map((_, i) => (
                        <div key={`empty-${i}`} className="aspect-square bg-red-950/30" />
                      ))}
                    </div>

                    {/* Category info */}
                    <div className="p-4 bg-black">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="font-bold text-white group-hover:text-red-400 transition-colors">
                          {cluster.name}
                        </h2>
                        <span className="text-xs text-white/40">
                          {count} memes
                        </span>
                      </div>
                      <p className="text-xs text-white/60 line-clamp-2">
                        {cluster.description}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* Quick links */}
          <section className="border border-red-900/30 bg-red-950/10 p-6">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/top-insanity-wolf-memes"
                className="flex items-center gap-2 text-sm text-red-400 hover:text-white transition-colors"
              >
                <TrendingUp className="h-4 w-4" />
                Top Memes
              </Link>
              <Link
                href="/new-insanity-wolf-memes"
                className="flex items-center gap-2 text-sm text-red-400 hover:text-white transition-colors"
              >
                <Zap className="h-4 w-4" />
                New Memes
              </Link>
              <Link
                href="/insanity-wolf-meme-generator"
                className="flex items-center gap-2 text-sm text-red-400 hover:text-white transition-colors"
              >
                Create Your Own &rarr;
              </Link>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-red-900/30 bg-black px-4 py-6">
          <div className="max-w-6xl mx-auto text-center font-mono text-xs text-red-400/40">
            <p>&copy; 2009-2025 INSANITYWOLF.COM. This is satire.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
