import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Share2, Download, Users, Repeat2, ShoppingBag } from "lucide-react"
import { getMemeBySlug, getRelatedMemes, incrementViews, getTopMemes } from "@/lib/memes"
import { MakeMerchButton } from "@/components/make-merch-button"

type Props = {
  params: Promise<{ slug: string }>
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const meme = getMemeBySlug(slug)

  if (!meme) {
    return {
      title: "Meme Not Found | Insanity Wolf",
    }
  }

  const title = `Insanity Wolf: ${meme.topText} ${meme.bottomText}`
  const description = `Create and share Insanity Wolf memes. ${meme.topText}. ${meme.bottomText}. Make your own at insanitywolf.com`
  const imageUrl = `https://insanitywolf.com${meme.imageUrl}`

  return {
    title,
    description,
    keywords: [
      "insanity wolf",
      "insanity wolf meme",
      meme.topText.toLowerCase(),
      meme.bottomText.toLowerCase(),
      "meme",
      "advice animal",
      "meme generator",
    ],
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Insanity Wolf",
      url: `https://insanitywolf.com/meme/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 550,
          height: 530,
          alt: `Insanity Wolf: ${meme.topText} - ${meme.bottomText}`,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      site: "@insanitywolf",
    },
    alternates: {
      canonical: `https://insanitywolf.com/meme/${slug}`,
    },
  }
}

// Server component - fully SSR
export default async function MemePage({ params }: Props) {
  const { slug } = await params
  const meme = getMemeBySlug(slug)

  if (!meme) {
    notFound()
  }

  // Increment views (server-side)
  incrementViews(slug)

  // Get related memes
  const relatedMemes = getRelatedMemes(meme, 12)
  const topMemes = relatedMemes.length < 6 ? getTopMemes(12) : []

  const shareUrl = `https://insanitywolf.com/meme/${slug}`
  const shareText = encodeURIComponent(`${meme.topText} / ${meme.bottomText} #InsanityWolf`)

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "name": `Insanity Wolf: ${meme.topText} ${meme.bottomText}`,
    "description": `Insanity Wolf meme: ${meme.topText}. ${meme.bottomText}.`,
    "contentUrl": `https://insanitywolf.com${meme.imageUrl}`,
    "thumbnailUrl": `https://insanitywolf.com${meme.imageUrl}`,
    "uploadDate": meme.createdAt,
    "author": {
      "@type": "Organization",
      "name": "Insanity Wolf",
      "url": "https://insanitywolf.com"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Simple nav */}
        <nav className="border-b border-red-900/30 bg-black/95 px-4 py-3">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link href="/" className="font-mono text-sm text-white hover:text-red-400 transition-colors">
              INSANITYWOLF.COM
            </Link>
            <Link
              href="/insanity-wolf-meme-generator"
              className="text-xs font-bold text-red-400 hover:text-white transition-colors"
            >
              CREATE MEME
            </Link>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Meme stats */}
          <div className="flex items-center justify-between mb-4 text-sm text-white/50">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {meme.views.toLocaleString()} views
              </span>
              <span className="flex items-center gap-1">
                <Share2 className="h-4 w-4" />
                {meme.shares} shares
              </span>
            </div>
            <time dateTime={meme.createdAt} className="text-xs">
              {new Date(meme.createdAt).toLocaleDateString()}
            </time>
          </div>

          {/* The meme image - REAL IMG TAG, not canvas */}
          <figure className="border border-red-900/30 mb-6">
            <Image
              src={meme.imageUrl}
              alt={`Insanity Wolf meme: ${meme.topText} - ${meme.bottomText}`}
              width={550}
              height={530}
              className="w-full h-auto"
              priority
            />
            <figcaption className="sr-only">
              Insanity Wolf: {meme.topText}. {meme.bottomText}.
            </figcaption>
          </figure>

          {/* Meme text for SEO (visible) */}
          <div className="mb-6 p-4 border border-red-900/30 bg-red-950/10">
            <h1
              className="text-xl md:text-2xl font-black uppercase text-center"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              <span className="text-white">{meme.topText}</span>
              <span className="text-red-500 mx-2">/</span>
              <span className="text-red-400">{meme.bottomText}</span>
            </h1>
          </div>

          {/* Make Merch - prominent CTA */}
          <div className="mb-4">
            <MakeMerchButton
              imageUrl={meme.imageUrl}
              topText={meme.topText}
              bottomText={meme.bottomText}
            />
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <a
              href={meme.imageUrl}
              download={`insanity-wolf-${slug}.webp`}
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-4 py-3 text-sm transition-colors"
            >
              <Download className="h-4 w-4" />
              Download
            </a>
            <Link
              href={`/insanity-wolf-meme-generator?top=${encodeURIComponent(meme.topText)}&bottom=${encodeURIComponent(meme.bottomText)}`}
              className="flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-500 text-black font-bold uppercase px-4 py-3 text-sm transition-colors"
            >
              <Repeat2 className="h-4 w-4" />
              Remix
            </Link>
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/40 border border-[#1DA1F2]/50 text-white font-bold uppercase px-4 py-3 text-sm transition-colors"
            >
              Tweet
            </a>
            <a
              href={`https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#FF4500]/20 hover:bg-[#FF4500]/40 border border-[#FF4500]/50 text-white font-bold uppercase px-4 py-3 text-sm transition-colors"
            >
              Reddit
            </a>
          </div>

          {/* CTA - Create your own */}
          <div className="border-2 border-yellow-500 bg-gradient-to-r from-red-950/50 to-orange-950/50 p-6 md:p-8 text-center mb-8">
            <h2
              className="text-2xl md:text-3xl font-black uppercase mb-3"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Create Your Own <span className="text-red-500">Insanity Wolf</span>
            </h2>
            <p className="text-white/70 mb-4">
              Make your own meme in seconds. Free, no signup required.
            </p>
            <Link
              href="/insanity-wolf-meme-generator"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-6 py-3 text-lg transition-all hover:scale-105"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              CREATE MEME NOW
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Merch link - subtle */}
          <div className="border border-red-900/30 bg-red-950/10 p-4 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-5 w-5 text-red-500" />
              <span className="text-sm text-white/70">Get this on a t-shirt, mug, or poster</span>
            </div>
            <Link
              href="/store"
              className="text-xs font-bold text-red-400 hover:text-white transition-colors"
            >
              SHOP MERCH
            </Link>
          </div>

          {/* Related memes - internal linking */}
          {(relatedMemes.length > 0 || topMemes.length > 0) && (
            <section className="mb-8">
              <h2 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                <span className="text-red-500">Related</span> Insanity Wolf Memes
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {(relatedMemes.length > 0 ? relatedMemes : topMemes).slice(0, 8).map((related) => (
                  <Link
                    key={related.slug}
                    href={`/meme/${related.slug}`}
                    className="block border border-red-900/30 hover:border-red-500/50 transition-colors"
                  >
                    <Image
                      src={related.imageUrl}
                      alt={`Insanity Wolf: ${related.topText} - ${related.bottomText}`}
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

          {/* Hub page links */}
          <nav className="border-t border-red-900/30 pt-6">
            <h3 className="text-sm font-bold text-white/50 uppercase mb-3">Explore More</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/top-insanity-wolf-memes" className="text-sm text-red-400 hover:text-white transition-colors">
                Top Insanity Wolf Memes
              </Link>
              <span className="text-white/20">|</span>
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
            </div>
          </nav>
        </main>

        <footer className="border-t border-red-900/30 bg-black px-4 py-6">
          <div className="max-w-4xl mx-auto text-center font-mono text-xs text-red-400/40">
            <p>&copy; 2009-2025 INSANITYWOLF.COM. This is satire.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
