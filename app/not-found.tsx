import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Home, Zap, Search } from "lucide-react"
import { getTopMemes } from "@/lib/memes"

export default function NotFound() {
  const topMemes = getTopMemes(4)

  return (
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

      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        {/* 404 Header */}
        <div className="mb-8">
          <h1
            className="text-8xl md:text-9xl font-black text-red-500 mb-4"
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            404
          </h1>
          <h2
            className="text-2xl md:text-4xl font-black uppercase mb-4"
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            Page Not Found?
            <span className="block text-red-500">DESTROY IT!</span>
          </h2>
          <p className="text-white/70 max-w-md mx-auto">
            This page has been banished to the shadow realm. But don't worry - there's plenty of chaos to explore.
          </p>
        </div>

        {/* Wolf Image */}
        <div className="mb-8">
          <Image
            src="/insanity-wolf-template.webp"
            alt="Insanity Wolf"
            width={200}
            height={200}
            className="mx-auto opacity-50"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-6 py-3 transition-colors"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
          <Link
            href="/insanity-wolf-meme-generator"
            className="flex items-center gap-2 border-2 border-red-600 hover:bg-red-600/20 text-white font-bold uppercase px-6 py-3 transition-colors"
          >
            <Zap className="h-5 w-5" />
            Create a Meme
          </Link>
        </div>

        {/* Popular Content */}
        <section className="border-t border-red-900/30 pt-8">
          <h3 className="text-lg font-bold uppercase text-white/60 mb-6">
            Maybe You Were Looking For...
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {topMemes.map((meme) => (
              <Link
                key={meme.slug}
                href={`/meme/${meme.slug}`}
                className="block border border-red-900/30 hover:border-red-500/50 transition-colors"
              >
                <Image
                  src={meme.imageUrl}
                  alt={`Insanity Wolf: ${meme.topText}`}
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/top-insanity-wolf-memes" className="text-red-400 hover:text-white transition-colors">
              Top Memes →
            </Link>
            <Link href="/gallery" className="text-red-400 hover:text-white transition-colors">
              Gallery →
            </Link>
            <Link href="/blog" className="text-red-400 hover:text-white transition-colors">
              Blog →
            </Link>
            <Link href="/wiki" className="text-red-400 hover:text-white transition-colors">
              Wiki →
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-red-900/30 bg-black px-4 py-6">
        <div className="max-w-4xl mx-auto text-center font-mono text-xs text-red-400/40">
          <p>&copy; 2009-2025 INSANITYWOLF.COM. This is satire.</p>
        </div>
      </footer>
    </div>
  )
}
