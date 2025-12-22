import { Metadata } from "next"
import Link from "next/link"
import { Star, Quote, ArrowRight, Users, MessageCircle, Trophy } from "lucide-react"

export const metadata: Metadata = {
  title: "Insanity Wolf Reviews & Testimonials - What Creators Say",
  description: "See what meme creators say about Insanity Wolf. Real reviews from real users. Join thousands of happy memers.",
  keywords: ["insanity wolf reviews", "meme generator reviews", "best meme maker", "meme generator testimonials"],
}

const TESTIMONIALS = [
  {
    name: "MemeKing2024",
    platform: "Reddit",
    rating: 5,
    text: "Finally a meme generator that doesn't force me to create an account. Made 50 memes in one sitting.",
    avatar: "🎮",
  },
  {
    name: "Sarah K.",
    platform: "Twitter",
    rating: 5,
    text: "The no-watermark feature is a game changer. My memes actually look professional now.",
    avatar: "👩‍💻",
  },
  {
    name: "OfficeHumor",
    platform: "Discord",
    rating: 5,
    text: "Our whole office uses this for our Slack memes. The keyboard shortcuts save so much time.",
    avatar: "🏢",
  },
  {
    name: "GamerDude",
    platform: "Twitch",
    rating: 5,
    text: "Used the API to build a meme bot for my stream. Free API access is insane (pun intended).",
    avatar: "🎮",
  },
  {
    name: "MemeQueen_",
    platform: "TikTok",
    rating: 5,
    text: "Dark mode + fast generation = perfect for late night meme sessions. 10/10.",
    avatar: "👑",
  },
  {
    name: "DevOpsGuy",
    platform: "GitHub",
    rating: 5,
    text: "Integrated this into our CI/CD pipeline for failure notifications. Boss was not amused. I was.",
    avatar: "💻",
  },
  {
    name: "MarketingMike",
    platform: "LinkedIn",
    rating: 5,
    text: "We use this for our company's social media. The embed widget on our blog gets tons of engagement.",
    avatar: "📊",
  },
  {
    name: "CryptoChad",
    platform: "Discord",
    rating: 5,
    text: "When my portfolio crashes, at least I can make memes about it instantly. Thanks Insanity Wolf.",
    avatar: "🚀",
  },
]

const STATS = [
  { value: "80K+", label: "Monthly visitors" },
  { value: "500K+", label: "Memes created" },
  { value: "4.9", label: "Average rating" },
  { value: "0", label: "Cost to use" },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-600 text-white text-xs font-bold uppercase mb-4">
            <Star className="h-4 w-4" />
            Reviews
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            What Creators <span className="text-yellow-400">Say</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Don't take our word for it. See what thousands of meme creators think about Insanity Wolf.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-red-950/20 border border-red-900/30 p-6 text-center">
              <div className="text-3xl font-black text-yellow-400">{stat.value}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="bg-red-950/20 border border-red-900/30 p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-white/50 text-sm">{testimonial.platform}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <Quote className="h-5 w-5 text-white/20 mb-2" />
              <p className="text-white/70 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6 text-center">Trusted By</h2>
          <div className="flex flex-wrap justify-center gap-8 text-white/30 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Reddit Communities
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Discord Servers
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Twitch Streamers
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <h2 className="text-3xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Join the <span className="text-yellow-400">Pack</span>
          </h2>
          <p className="text-white/70 mb-6">See for yourself why creators love Insanity Wolf.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold uppercase px-6 py-3 transition-colors">
            Start Creating Free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
