import { Trophy } from "lucide-react"
import { MemeGallery } from "@/components/meme-gallery"
import { SiteNav } from "@/components/site-nav"
import { ScrollToTop } from "@/components/scroll-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insanity Wolf Meme Gallery | 1000+ Classic Memes",
  description: "Browse the ultimate collection of Insanity Wolf memes. Over 1000 classic memes from the legendary 4chan advice animal.",
  openGraph: {
    title: "Insanity Wolf Meme Gallery",
    description: "The Hall of Insanity. Over 1000 classic memes from the GOD TIER advice animal.",
  },
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <SiteNav />

      {/* Main Content */}
      <main className="pt-20 md:pt-24 pb-10 md:pb-16 px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Hero Section */}
          <div className="mb-8 md:mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Trophy className="h-4 w-4 text-red-500" />
              <span className="text-red-400">HALL OF INSANITY</span>
            </div>
            <h1 className="text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-5xl lg:text-6xl text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              THE GALLERY OF
              <span className="block text-red-500">MAXIMUM CHAOS</span>
            </h1>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-xl text-red-300/80">
              Vote for your favorites. Embrace the madness.
            </p>
          </div>

          {/* Gallery */}
          <MemeGallery />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-900/30 bg-black px-4 md:px-6 py-6 md:py-8">
        <div className="mx-auto max-w-5xl text-center font-mono text-xs text-red-400/40">
          <p>© 2009-2025 INSANITYWOLF.COM. This is satire. Don't actually follow this advice.</p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
