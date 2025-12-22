import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Insanity Wolf Blog | Meme History, Guides & More",
  description: "Learn everything about Insanity Wolf memes. History, how-to guides, best memes, comparisons with other advice animals, and more.",
  keywords: [
    "insanity wolf blog",
    "meme history",
    "insanity wolf guide",
    "advice animal blog",
    "meme tutorials",
  ],
  openGraph: {
    title: "Insanity Wolf Blog",
    description: "Everything you need to know about Insanity Wolf memes.",
    type: "website",
  },
  alternates: {
    canonical: "https://insanitywolf.com/blog",
  },
}

const blogPosts = [
  {
    slug: "what-is-insanity-wolf",
    title: "What is Insanity Wolf?",
    description: "The complete guide to understanding the legendary advice animal meme that defined early internet culture.",
    date: "January 15, 2024",
    readTime: "8 min",
    category: "Guide",
  },
  {
    slug: "how-to-make-insanity-wolf-meme",
    title: "How to Make an Insanity Wolf Meme",
    description: "Master the art of creating the most extreme advice animal meme on the internet.",
    date: "February 1, 2024",
    readTime: "5 min",
    category: "Tutorial",
  },
  {
    slug: "best-insanity-wolf-memes",
    title: "50 Best Insanity Wolf Memes of All Time",
    description: "From classic 4chan originals to the newest viral hits. The ultimate collection.",
    date: "March 1, 2024",
    readTime: "10 min",
    category: "Collection",
  },
  {
    slug: "history",
    title: "The Complete History of Insanity Wolf",
    description: "From 4chan origins to Library of Congress archives. The full story.",
    date: "December 1, 2023",
    readTime: "12 min",
    category: "History",
  },
]

export default function BlogIndexPage() {
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

      <main className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase mb-4">
            <BookOpen className="h-4 w-4" />
            BLOG
          </div>
          <h1
            className="text-3xl md:text-5xl font-black uppercase mb-4"
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            <span className="text-red-500">Insanity Wolf</span> Blog
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Guides, history, tutorials, and everything you need to know about the legendary meme.
          </p>
        </header>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="border border-red-900/30 hover:border-red-500/50 transition-colors"
            >
              <Link href={`/blog/${post.slug}`} className="block p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-white/50">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="text-sm text-white/50">{post.readTime} read</span>
                </div>
                <h2
                  className="text-xl font-black uppercase text-white mb-2"
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                >
                  {post.title}
                </h2>
                <p className="text-white/70 mb-4">{post.description}</p>
                <span className="inline-flex items-center gap-1 text-red-400 font-bold text-sm">
                  Read More <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </article>
          ))}
        </div>

        {/* Related pages */}
        <section className="mt-12 border-t border-red-900/30 pt-8">
          <h2 className="text-lg font-black uppercase mb-4">Related Content</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/insanity-wolf-vs-courage-wolf"
              className="border border-red-900/30 p-4 hover:border-red-500/50 transition-colors"
            >
              <h3 className="font-bold text-white mb-1">Insanity Wolf vs Courage Wolf</h3>
              <p className="text-sm text-white/60">Compare the two legendary wolf memes</p>
            </Link>
            <Link
              href="/wiki"
              className="border border-red-900/30 p-4 hover:border-red-500/50 transition-colors"
            >
              <h3 className="font-bold text-white mb-1">Insanity Wolf Wiki</h3>
              <p className="text-sm text-white/60">Encyclopedia of Insanity Wolf lore</p>
            </Link>
          </div>
        </section>

        <nav className="mt-12 border-t border-red-900/30 pt-8">
          <h3 className="text-sm font-bold text-white/50 uppercase mb-4">More on the Site</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/top-insanity-wolf-memes" className="text-red-400 hover:text-white transition-colors">
              Top Memes →
            </Link>
            <Link href="/new-insanity-wolf-memes" className="text-red-400 hover:text-white transition-colors">
              New Memes →
            </Link>
            <Link href="/insanity-wolf-meme-generator" className="text-red-400 hover:text-white transition-colors">
              Meme Generator →
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
  )
}
