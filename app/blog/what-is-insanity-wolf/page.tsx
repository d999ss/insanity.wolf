import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "What is Insanity Wolf? The Complete Guide to the Legendary Meme",
  description: "Learn everything about Insanity Wolf - the iconic advice animal meme from 4chan. Discover its origins, meaning, format, and why it became one of the most famous internet memes ever.",
  keywords: [
    "what is insanity wolf",
    "insanity wolf meaning",
    "insanity wolf explained",
    "insanity wolf meme",
    "insanity wolf origin",
    "advice animal meme",
    "4chan meme",
    "wolf meme meaning",
  ],
  openGraph: {
    title: "What is Insanity Wolf? Complete Guide",
    description: "Everything you need to know about the legendary Insanity Wolf meme - origins, meaning, and cultural impact.",
    type: "article",
    publishedTime: "2024-01-15T00:00:00Z",
    authors: ["Insanity Wolf"],
  },
  alternates: {
    canonical: "https://insanitywolf.com/blog/what-is-insanity-wolf",
  },
}

export default function WhatIsInsanityWolfPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What is Insanity Wolf? The Complete Guide to the Legendary Meme",
    "description": "Learn everything about Insanity Wolf - the iconic advice animal meme from 4chan.",
    "image": "https://insanitywolf.com/insanity-wolf-template.webp",
    "author": {
      "@type": "Organization",
      "name": "Insanity Wolf"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Insanity Wolf",
      "logo": {
        "@type": "ImageObject",
        "url": "https://insanitywolf.com/insanity-wolf-template.webp"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-12-01"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

        <article className="max-w-4xl mx-auto px-4 py-12">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: "What is Insanity Wolf?" },
            ]}
          />

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                January 15, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                8 min read
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-black uppercase mb-6"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              What is <span className="text-red-500">Insanity Wolf</span>?
            </h1>
            <p className="text-xl text-white/70">
              The complete guide to understanding the legendary advice animal meme that defined early internet culture.
            </p>
          </header>

          {/* Featured Image */}
          <figure className="mb-12 border border-red-900/30">
            <Image
              src="/insanity-wolf-template.webp"
              alt="Insanity Wolf meme template - a snarling gray wolf"
              width={600}
              height={600}
              className="w-full max-w-md mx-auto"
              priority
            />
            <figcaption className="text-center text-sm text-white/50 p-4 border-t border-red-900/30">
              The iconic Insanity Wolf image macro template
            </figcaption>
          </figure>

          {/* Content */}
          <div className="prose prose-invert prose-red max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                Definition
              </h2>
              <p className="text-white/80 leading-relaxed">
                <strong className="text-white">Insanity Wolf</strong> is an advice animal image macro meme featuring a fierce, snarling gray wolf photographed against a colorful radiating background. The meme follows a simple format: the top text presents an everyday problem or situation, while the bottom text delivers an absurdly violent, extreme, or insane "solution."
              </p>
              <p className="text-white/80 leading-relaxed">
                Unlike other advice animals that offer genuine (if humorous) life tips, Insanity Wolf represents pure id – the darkest, most inappropriate response imaginable to any situation. It's the intrusive thought given form, the thing you'd never actually do but might briefly imagine.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                Origins
              </h2>
              <p className="text-white/80 leading-relaxed">
                Insanity Wolf emerged on <strong className="text-white">4chan's /b/ board in 2009</strong>, during the golden age of advice animal memes. The wolf photograph had been circulating online since at least 2006, appearing on platforms like YTMND and Flickr before being repurposed for the meme.
              </p>
              <p className="text-white/80 leading-relaxed">
                The meme was born as a darker counterpart to Courage Wolf, which offered genuinely motivational messages. Where Courage Wolf said "Face your fears," Insanity Wolf would say "Become the thing people fear."
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                The Format
              </h2>
              <div className="border border-red-900/30 bg-red-950/20 p-6">
                <p className="text-white/80 mb-4">Every Insanity Wolf meme follows this structure:</p>
                <ul className="space-y-2 text-white/80">
                  <li><strong className="text-red-400">Top Text:</strong> A relatable situation or minor problem</li>
                  <li><strong className="text-red-400">Bottom Text:</strong> An extremely violent, illegal, or insane response</li>
                </ul>
              </div>
              <p className="text-white/80 leading-relaxed mt-4">
                The humor comes from the massive escalation – taking something mundane and responding with total overkill. The more inappropriate the response, the funnier the meme.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                Classic Examples
              </h2>
              <div className="grid gap-4">
                {[
                  { top: "Someone takes your parking spot", bottom: "Take their life" },
                  { top: "Alarm goes off", bottom: "Throw it through the window" },
                  { top: "Friend cancels plans", bottom: "Cancel their existence" },
                  { top: "Out of coffee", bottom: "Drink the blood of your enemies" },
                ].map((example, i) => (
                  <div key={i} className="border border-red-900/30 bg-black p-4">
                    <p className="text-white font-bold uppercase">{example.top}</p>
                    <p className="text-red-500 font-black uppercase">{example.bottom}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                Cultural Impact
              </h2>
              <p className="text-white/80 leading-relaxed">
                Insanity Wolf became one of the most influential memes of the early 2010s. It was ranked <strong className="text-white">"GOD TIER"</strong> on Memegenerator.net and became the <strong className="text-white">#3 most-used meme template</strong> according to Library of Congress data.
              </p>
              <p className="text-white/80 leading-relaxed">
                The meme has been archived by the U.S. Library of Congress as part of the Web Cultures Web Archive, preserving it as a significant artifact of internet culture.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                Related Memes
              </h2>
              <ul className="space-y-2 text-white/80">
                <li><strong className="text-white">Courage Wolf</strong> – The motivational predecessor</li>
                <li><strong className="text-white">Baby Insanity Wolf</strong> – A milder version with petty rebellions</li>
                <li><strong className="text-white">Advice Dog</strong> – The original advice animal</li>
                <li><strong className="text-white">Foul Bachelor Frog</strong> – Gross habits humor</li>
              </ul>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 border-2 border-red-500 bg-gradient-to-r from-red-950/50 to-black p-8 text-center">
            <h2
              className="text-2xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Create Your Own <span className="text-red-500">Insanity Wolf</span>
            </h2>
            <p className="text-white/70 mb-6">
              Now that you know what it is, make your own meme!
            </p>
            <Link
              href="/insanity-wolf-meme-generator"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black uppercase px-8 py-4 transition-colors"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              MAKE A MEME
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Related Links */}
          <nav className="mt-12 border-t border-red-900/30 pt-8">
            <h3 className="text-sm font-bold text-white/50 uppercase mb-4">Read More</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog/history" className="text-red-400 hover:text-white transition-colors">
                Complete History →
              </Link>
              <Link href="/blog/how-to-make-insanity-wolf-meme" className="text-red-400 hover:text-white transition-colors">
                How to Make a Meme →
              </Link>
              <Link href="/wiki" className="text-red-400 hover:text-white transition-colors">
                Wiki & Encyclopedia →
              </Link>
            </div>
          </nav>
        </article>

        <footer className="border-t border-red-900/30 bg-black px-4 py-6">
          <div className="max-w-4xl mx-auto text-center font-mono text-xs text-red-400/40">
            <p>&copy; 2009-2025 INSANITYWOLF.COM. This is satire.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
