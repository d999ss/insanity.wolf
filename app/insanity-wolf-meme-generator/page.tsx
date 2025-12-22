import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { Zap, ArrowRight, Download, Share2, Clock } from "lucide-react"
import { MemeGenerator } from "@/components/meme-generator"
import { getTopMemes, getMemeCount } from "@/lib/memes"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Insanity Wolf Meme Generator | Free Online Meme Maker",
  description: "Create Insanity Wolf memes instantly with our free generator. No signup required. Add your text, download, and share. The official Insanity Wolf meme maker since 2009.",
  keywords: [
    "insanity wolf meme generator",
    "insanity wolf generator",
    "insanity wolf meme maker",
    "create insanity wolf meme",
    "make insanity wolf",
    "free meme generator",
    "advice animal generator",
    "wolf meme maker",
    "meme generator online",
    "meme creator free",
  ],
  openGraph: {
    title: "Insanity Wolf Meme Generator | Free Online Meme Maker",
    description: "Create Insanity Wolf memes instantly. No signup. Free download. The official generator since 2009.",
    type: "website",
    siteName: "Insanity Wolf",
    url: "https://insanitywolf.com/insanity-wolf-meme-generator",
    images: [
      {
        url: "/insanity-wolf-template.webp",
        width: 600,
        height: 600,
        alt: "Insanity Wolf Meme Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insanity Wolf Meme Generator | Free Online",
    description: "Create Insanity Wolf memes instantly. Free, no signup required.",
    images: ["/insanity-wolf-template.webp"],
  },
  alternates: {
    canonical: "https://insanitywolf.com/insanity-wolf-meme-generator",
  },
}

export default function MemeGeneratorPage() {
  const topMemes = getTopMemes(8)
  const totalMemes = getMemeCount()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Insanity Wolf Meme Generator",
    "url": "https://insanitywolf.com/insanity-wolf-meme-generator",
    "description": "Create Insanity Wolf memes instantly with our free online generator",
    "applicationCategory": "EntertainmentApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "10847",
      "bestRating": "5"
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
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Link href="/" className="font-mono text-sm text-white hover:text-red-400 transition-colors">
              INSANITYWOLF.COM
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/top-insanity-wolf-memes" className="text-xs font-bold text-white/50 hover:text-white transition-colors">
                TOP MEMES
              </Link>
              <Link href="/new-insanity-wolf-memes" className="text-xs font-bold text-white/50 hover:text-white transition-colors">
                NEW
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-5xl mx-auto px-4 py-8">
          {/* Hero */}
          <header className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase mb-4">
              <Zap className="h-4 w-4" />
              FREE MEME GENERATOR
            </div>
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              <span className="text-red-500">Insanity Wolf</span> Meme Generator
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto mb-4">
              Create your own Insanity Wolf meme in seconds. Enter a problem, add an extreme solution, download and share.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                Free download
              </span>
              <span className="flex items-center gap-1">
                <Share2 className="h-4 w-4" />
                Easy sharing
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                No signup
              </span>
            </div>
          </header>

          {/* Generator */}
          <section className="mb-12">
            <Suspense fallback={<div className="h-96 bg-red-950/20 animate-pulse border border-red-900/30" />}>
              <MemeGenerator />
            </Suspense>
          </section>

          {/* How it works */}
          <section className="mb-12">
            <h2
              className="text-2xl font-black uppercase text-center mb-6"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              How to Create an <span className="text-red-500">Insanity Wolf</span> Meme
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-red-900/30 bg-red-950/10 p-6 text-center">
                <div className="text-4xl mb-3">1</div>
                <h3 className="font-bold text-white mb-2">Enter Your Problem</h3>
                <p className="text-sm text-white/60">Type a mundane problem or situation in the top text field</p>
              </div>
              <div className="border border-red-900/30 bg-red-950/10 p-6 text-center">
                <div className="text-4xl mb-3">2</div>
                <h3 className="font-bold text-white mb-2">Add Extreme Solution</h3>
                <p className="text-sm text-white/60">Write an absurdly over-the-top response in the bottom text</p>
              </div>
              <div className="border border-red-900/30 bg-red-950/10 p-6 text-center">
                <div className="text-4xl mb-3">3</div>
                <h3 className="font-bold text-white mb-2">Download & Share</h3>
                <p className="text-sm text-white/60">Download your meme and share it with the world</p>
              </div>
            </div>
          </section>

          {/* Recent memes */}
          {topMemes.length > 0 && (
            <section className="mb-12">
              <h2
                className="text-xl font-black uppercase mb-4"
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                Popular <span className="text-red-500">Insanity Wolf</span> Memes
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                <Link href="/top-insanity-wolf-memes" className="text-red-400 hover:text-white text-sm font-bold transition-colors">
                  View All Top Memes ({totalMemes.toLocaleString()}+) &rarr;
                </Link>
              </div>
            </section>
          )}

          {/* FAQ for SEO */}
          <section className="mb-12">
            <h2
              className="text-xl font-black uppercase mb-6"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              About <span className="text-red-500">Insanity Wolf</span>
            </h2>
            <div className="space-y-4">
              <div className="border border-red-900/30 bg-red-950/10 p-4">
                <h3 className="font-bold text-white mb-2">What is Insanity Wolf?</h3>
                <p className="text-sm text-white/70">
                  Insanity Wolf is an advice animal meme that originated on 4chan in 2009. It features a snarling wolf and provides absurdly extreme "solutions" to everyday problems. It's rated "GOD TIER" on meme databases.
                </p>
              </div>
              <div className="border border-red-900/30 bg-red-950/10 p-4">
                <h3 className="font-bold text-white mb-2">Is this meme generator free?</h3>
                <p className="text-sm text-white/70">
                  Yes! Our Insanity Wolf meme generator is 100% free. No signup, no watermarks, no hidden fees. Create unlimited memes.
                </p>
              </div>
              <div className="border border-red-900/30 bg-red-950/10 p-4">
                <h3 className="font-bold text-white mb-2">Can I share my memes?</h3>
                <p className="text-sm text-white/70">
                  Every meme you create gets a unique shareable URL. Download the image or share the link directly to Twitter, Reddit, Discord, and more.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <nav className="border-t border-red-900/30 pt-6">
            <h3 className="text-sm font-bold text-white/50 uppercase mb-3">Explore</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/top-insanity-wolf-memes" className="text-sm text-red-400 hover:text-white transition-colors">
                Top Memes
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/new-insanity-wolf-memes" className="text-sm text-red-400 hover:text-white transition-colors">
                New Memes
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/gallery" className="text-sm text-red-400 hover:text-white transition-colors">
                Gallery
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/store" className="text-sm text-red-400 hover:text-white transition-colors">
                Merch
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/blog/history" className="text-sm text-red-400 hover:text-white transition-colors">
                History
              </Link>
            </div>
          </nav>
        </main>

        <footer className="border-t border-red-900/30 bg-black px-4 py-6">
          <div className="max-w-5xl mx-auto text-center font-mono text-xs text-red-400/40">
            <p>&copy; 2009-2025 INSANITYWOLF.COM. This is satire. Don't actually follow this advice.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
