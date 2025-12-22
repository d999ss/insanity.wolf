import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Flame, ArrowRight, Briefcase, Heart, Gamepad2, Coffee, Calendar, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Meme Topics - Insanity Wolf Meme Categories",
  description: "Browse Insanity Wolf memes by topic. Work memes, relationship memes, gaming memes, Monday memes, coffee memes and more.",
  keywords: ["insanity wolf memes", "meme topics", "meme categories", "advice animal memes"],
}

const TOPICS = [
  {
    name: "Work",
    description: "Office rage, boss battles, and workplace chaos",
    icon: Briefcase,
    href: "/memes/work",
    color: "from-blue-600 to-blue-800",
    count: "2.4k",
  },
  {
    name: "Relationship",
    description: "Dating disasters and love life lunacy",
    icon: Heart,
    href: "/memes/relationship",
    color: "from-pink-600 to-pink-800",
    count: "1.8k",
  },
  {
    name: "Gaming",
    description: "Rage quits, noobs, and gamer moments",
    icon: Gamepad2,
    href: "/memes/gaming",
    color: "from-purple-600 to-purple-800",
    count: "3.1k",
  },
  {
    name: "Monday",
    description: "Hating Mondays with extreme prejudice",
    icon: Calendar,
    href: "/memes/monday",
    color: "from-gray-600 to-gray-800",
    count: "1.2k",
  },
  {
    name: "Coffee",
    description: "Caffeine addiction at dangerous levels",
    icon: Coffee,
    href: "/memes/coffee",
    color: "from-amber-600 to-amber-800",
    count: "980",
  },
]

export default function MemesIndexPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase mb-4">
              <Flame className="h-4 w-4" />
              Meme Topics
            </div>
            <h1
              className="text-4xl md:text-5xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Browse by <span className="text-red-500">Topic</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Find the perfect Insanity Wolf meme for every situation. Or create your own chaos.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TOPICS.map((topic) => (
            <Link
              key={topic.name}
              href={topic.href}
              className="group relative overflow-hidden border border-red-900/30 hover:border-red-500 transition-all hover:scale-[1.02]"
            >
              <div className={"absolute inset-0 bg-gradient-to-br opacity-20 " + topic.color} />
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <topic.icon className="h-10 w-10 text-red-400" />
                  <span className="px-2 py-1 bg-red-950/50 text-red-400 text-xs font-bold">
                    {topic.count} memes
                  </span>
                </div>
                <h2 className="text-2xl font-black uppercase mb-2">{topic.name} Memes</h2>
                <p className="text-white/60 text-sm mb-4">{topic.description}</p>
                <div className="flex items-center gap-2 text-red-400 font-bold uppercase text-sm group-hover:translate-x-2 transition-transform">
                  Browse {topic.name}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}

          {/* Create Your Own */}
          <Link
            href="/"
            className="group relative overflow-hidden border-2 border-dashed border-red-900/50 hover:border-red-500 transition-all hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10" />
            <div className="relative p-6 flex flex-col items-center justify-center text-center h-full min-h-[200px]">
              <Zap className="h-12 w-12 text-yellow-400 mb-4" />
              <h2 className="text-2xl font-black uppercase mb-2">Any Topic</h2>
              <p className="text-white/60 text-sm mb-4">Create a meme about anything</p>
              <div className="flex items-center gap-2 text-yellow-400 font-bold uppercase text-sm">
                Start Creating
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* Popular Memes Preview */}
        <div className="border-t border-red-900/30 pt-12">
          <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
            <Flame className="h-6 w-6 text-orange-400" />
            Trending Across All Topics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { top: "WIFI IS DOWN", bottom: "DECLARE WAR ON ISP" },
              { top: "BOSS SAYS WORK LATE", bottom: "BURN DOWN THE OFFICE" },
              { top: "COFFEE MACHINE BROKE", bottom: "SNORT THE GROUNDS" },
              { top: "MONDAY MORNING", bottom: "SKIP TO FRIDAY" },
            ].map((meme, i) => (
              <Link
                key={i}
                href={"/meme/" + btoa(JSON.stringify(meme))}
                className="group relative aspect-square bg-black border border-red-900/30 hover:border-red-500"
              >
                <Image
                  src="/insanity-wolf-template.webp"
                  alt={meme.top}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-2">
                  <p className="text-center text-xs font-black uppercase text-white" style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
                    {meme.top}
                  </p>
                  <p className="text-center text-xs font-black uppercase text-white" style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
                    {meme.bottom}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
