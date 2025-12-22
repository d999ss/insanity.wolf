import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, TrendingUp, Clock } from "lucide-react"
import { getMemesByTheme, getMemeCountByTheme, getPinnedMemes } from "@/lib/memes"
import { getClusterBySlug, getRelatedClusters, CLUSTERS } from "@/lib/clusters"

interface Props {
  params: Promise<{ theme: string }>
}

export async function generateStaticParams() {
  return CLUSTERS.map((cluster) => ({
    theme: cluster.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { theme } = await params
  const cluster = getClusterBySlug(theme)

  if (!cluster) {
    return { title: "Theme Not Found" }
  }

  return {
    title: cluster.title,
    description: cluster.metaDescription,
    keywords: cluster.keywords,
    openGraph: {
      title: cluster.title,
      description: cluster.metaDescription,
      type: "website",
      siteName: "Insanity Wolf",
      url: `https://insanitywolf.com/memes/${cluster.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: cluster.title,
      description: cluster.metaDescription,
    },
    alternates: {
      canonical: `https://insanitywolf.com/memes/${cluster.slug}`,
    },
  }
}

export default async function ThemeClusterPage({ params }: Props) {
  const { theme } = await params
  const cluster = getClusterBySlug(theme)

  if (!cluster) {
    notFound()
  }

  const memes = getMemesByTheme(cluster.id, 50)
  const pinnedMemes = getPinnedMemes(cluster.id)
  const totalCount = getMemeCountByTheme(cluster.id)
  const relatedClusters = getRelatedClusters(cluster.id)

  // JSON-LD for collection
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": cluster.title,
    "description": cluster.description,
    "url": `https://insanitywolf.com/memes/${cluster.slug}`,
    "numberOfItems": totalCount,
    "hasPart": memes.slice(0, 10).map((meme) => ({
      "@type": "ImageObject",
      "name": `Insanity Wolf: ${meme.topText} - ${meme.bottomText}`,
      "contentUrl": `https://insanitywolf.com${meme.imageUrl}`,
      "url": `https://insanitywolf.com/meme/${meme.slug}`,
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
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link href="/memes" className="text-sm text-white/50 hover:text-white flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              All Categories
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              <span className="text-red-500">Insanity Wolf</span> {cluster.name} Memes
            </h1>
            <p className="text-white/70 max-w-2xl mb-4">
              {cluster.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                {totalCount} memes
              </span>
              <Link
                href="/insanity-wolf-meme-generator"
                className="text-red-400 hover:text-white transition-colors"
              >
                Create your own &rarr;
              </Link>
            </div>
          </header>

          {/* Pinned/Featured Memes */}
          {pinnedMemes.length > 0 && (
            <section className="mb-10">
              <h2 className="text-lg font-bold text-white/80 uppercase mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-red-500" />
                Top {cluster.name} Memes
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {pinnedMemes.slice(0, 6).map((meme) => (
                  <Link
                    key={meme.slug}
                    href={`/meme/${meme.slug}`}
                    className="block border-2 border-red-600/50 hover:border-red-500 transition-colors relative group"
                  >
                    <Image
                      src={meme.imageUrl}
                      alt={`Insanity Wolf: ${meme.topText} - ${meme.bottomText}`}
                      width={400}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-xs text-white/80 truncate">{meme.topText}</p>
                      <p className="text-xs text-red-400 truncate">{meme.bottomText}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* All Memes Grid */}
          <section className="mb-10">
            <h2 className="text-lg font-bold text-white/80 uppercase mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-white/50" />
              All {cluster.name} Memes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {memes.map((meme) => (
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
          </section>

          {/* Related Categories */}
          {relatedClusters.length > 0 && (
            <section className="mb-10">
              <h2 className="text-lg font-bold text-white/80 uppercase mb-4">
                Related Categories
              </h2>
              <div className="flex flex-wrap gap-3">
                {relatedClusters.map((related) => (
                  <Link
                    key={related.id}
                    href={`/memes/${related.slug}`}
                    className="px-4 py-2 border border-red-900/30 hover:border-red-500/50 hover:bg-red-950/20 text-sm transition-colors"
                  >
                    {related.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="border border-red-900/30 bg-red-950/10 p-6 text-center">
            <h2
              className="text-xl font-black uppercase mb-3"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Create Your Own <span className="text-red-500">{cluster.name}</span> Meme
            </h2>
            <p className="text-white/60 text-sm mb-4">
              Got a {cluster.name.toLowerCase()} frustration? Turn it into an Insanity Wolf meme.
            </p>
            <Link
              href="/insanity-wolf-meme-generator"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 uppercase transition-colors"
            >
              Make a Meme
            </Link>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-red-900/30 bg-black px-4 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {CLUSTERS.slice(0, 6).map((c) => (
                <Link
                  key={c.id}
                  href={`/memes/${c.slug}`}
                  className={`text-xs ${c.id === cluster.id ? 'text-red-400' : 'text-white/40 hover:text-white/70'} transition-colors`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
            <p className="text-center font-mono text-xs text-red-400/40">
              &copy; 2009-2025 INSANITYWOLF.COM. This is satire.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
