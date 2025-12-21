import { Button } from "@/components/ui/button"
import { ShoppingBag, Flame, Zap, Shirt, Star, TrendingUp, Package, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteNav } from "@/components/site-nav"
import { ScrollToTop } from "@/components/scroll-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insanity Wolf Store | Merch & Gear",
  description: "Get your Insanity Wolf merch. T-shirts, hoodies, stickers, and more chaos-fueled gear.",
  openGraph: {
    title: "Insanity Wolf Store",
    description: "Wear the chaos. Own the madness. Insanity Wolf merch available now.",
  },
}

const featuredProducts = [
  {
    name: "CLASSIC WOLF TEE",
    price: "$29.99",
    originalPrice: "$39.99",
    image: "/insanity-wolf-template.webp",
    tag: "BESTSELLER",
    description: "The OG design. 100% cotton. 100% chaos.",
    colors: ["Black", "Red", "White"],
  },
  {
    name: "CHAOS HOODIE",
    price: "$54.99",
    originalPrice: null,
    image: "/insanity-wolf-template.webp",
    tag: "NEW",
    description: "Soft fleece interior. Maximum warmth for cold-blooded decisions.",
    colors: ["Black", "Gray"],
  },
  {
    name: "RAGE MUG",
    price: "$16.99",
    originalPrice: null,
    image: "/insanity-wolf-template.webp",
    tag: "HOT",
    description: "11oz ceramic. Dishwasher safe. Perfect for morning rage.",
    colors: ["Black", "White"],
  },
]

const allProducts = [
  {
    name: "CLASSIC WOLF TEE",
    price: "$29.99",
    image: "/insanity-wolf-template.webp",
    tag: "BESTSELLER",
    category: "Apparel",
  },
  {
    name: "CHAOS HOODIE",
    price: "$54.99",
    image: "/insanity-wolf-template.webp",
    tag: "NEW",
    category: "Apparel",
  },
  {
    name: "STICKER PACK (10)",
    price: "$12.99",
    image: "/insanity-wolf-template.webp",
    tag: null,
    category: "Accessories",
  },
  {
    name: "POSTER 24x36",
    price: "$24.99",
    image: "/insanity-wolf-template.webp",
    tag: null,
    category: "Art",
  },
  {
    name: "RAGE MUG",
    price: "$16.99",
    image: "/insanity-wolf-template.webp",
    tag: "HOT",
    category: "Accessories",
  },
  {
    name: "PHONE CASE",
    price: "$24.99",
    image: "/insanity-wolf-template.webp",
    tag: null,
    category: "Accessories",
  },
  {
    name: "DAD HAT",
    price: "$27.99",
    image: "/insanity-wolf-template.webp",
    tag: null,
    category: "Apparel",
  },
  {
    name: "TANK TOP",
    price: "$24.99",
    image: "/insanity-wolf-template.webp",
    tag: null,
    category: "Apparel",
  },
  {
    name: "LAPTOP SLEEVE",
    price: "$34.99",
    image: "/insanity-wolf-template.webp",
    tag: "NEW",
    category: "Accessories",
  },
]

const stats = [
  { label: "Orders Shipped", value: "50K+" },
  { label: "5-Star Reviews", value: "4.9" },
  { label: "Countries", value: "147" },
  { label: "Happy Wolves", value: "∞" },
]

export default function StorePage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <SiteNav />

      {/* Main Content */}
      <main className="pt-20 md:pt-24 pb-10 md:pb-16 px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Hero Section */}
          <div className="mb-8 md:mb-16 text-center">
            <div className="mb-3 md:mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider">
              <ShoppingBag className="h-3 w-3 md:h-4 md:w-4 text-red-500" />
              <span className="text-red-400">OFFICIAL MERCH</span>
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tight leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              WEAR THE
              <span className="block text-red-500 mt-1">CHAOS</span>
            </h1>
            <p className="mx-auto mt-3 md:mt-6 max-w-2xl text-sm md:text-xl text-red-300/80">
              Merch so EXTREME your coworkers will ask if you're okay.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 md:mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="border border-red-900/30 bg-red-950/10 p-3 md:p-4 text-center">
                <div className="text-xl md:text-2xl font-black text-white tabular-nums">{stat.value}</div>
                <div className="text-[10px] md:text-xs uppercase text-red-400/60 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Custom Merch CTA */}
          <Link href="/merch" className="block mb-8 md:mb-12">
            <div className="border-2 border-red-500/50 bg-gradient-to-r from-red-950/50 via-red-900/30 to-red-950/50 p-4 md:p-6 hover:border-red-500 transition-colors group">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-full">
                    <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-red-500" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                      CREATE CUSTOM MERCH
                    </h3>
                    <p className="text-xs md:text-sm text-red-300/70">Put YOUR meme on t-shirts, hoodies, mugs & more</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-red-400 group-hover:text-white transition-colors">
                  <span className="font-bold uppercase text-sm">Design Now</span>
                  <Shirt className="h-5 w-5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Featured Products */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-5 w-5 text-red-500" />
              <h2 className="text-xl md:text-2xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                FEATURED
              </h2>
            </div>
            <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
              {featuredProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden border-2 border-red-900/30 bg-gradient-to-br from-black via-red-950/10 to-black transition-all hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10"
                >
                  {product.tag && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-red-500 px-2 py-1 text-[10px] font-black uppercase text-white">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  <div className="aspect-square bg-black/50 p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={250}
                      className="object-contain w-32 h-32 md:w-48 md:h-48 transition-transform duration-300 group-hover:scale-110 relative z-10"
                    />
                  </div>
                  <div className="border-t border-red-900/30 bg-red-950/20 p-4 md:p-6">
                    <h3 className="mb-1 font-black uppercase text-base md:text-lg text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                      {product.name}
                    </h3>
                    <p className="text-xs text-red-400/60 mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3">
                      {product.colors.map((color, cidx) => (
                        <span key={cidx} className="text-[10px] uppercase text-red-400/50 border border-red-900/30 px-2 py-0.5">
                          {color}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl md:text-2xl font-black text-red-500">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-red-400/40 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      <Button size="sm" className="gap-2 font-bold bg-red-600 hover:bg-red-500 border-0 text-xs md:text-sm">
                        <ShoppingBag className="h-3 w-3 md:h-4 md:w-4" />
                        ADD
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Products */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Package className="h-5 w-5 text-red-500" />
              <h2 className="text-xl md:text-2xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                ALL PRODUCTS
              </h2>
            </div>
            <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-3">
              {allProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden border border-red-900/30 bg-gradient-to-br from-black via-red-950/5 to-black transition-all hover:border-red-500/50"
                >
                  {product.tag && (
                    <div className="absolute top-2 right-2 z-10">
                      <span className="bg-red-500 px-2 py-0.5 text-[10px] font-black uppercase text-white">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  <div className="aspect-square bg-black/30 p-4 md:p-6 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={150}
                      height={150}
                      className="object-contain w-20 h-20 md:w-32 md:h-32 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="border-t border-red-900/30 bg-red-950/10 p-3 md:p-4">
                    <span className="text-[9px] md:text-[10px] uppercase text-red-400/50 font-mono">{product.category}</span>
                    <h3 className="mb-2 font-black uppercase text-xs md:text-sm text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-base md:text-lg font-black text-red-500">{product.price}</span>
                      <Button size="sm" variant="outline" className="h-7 md:h-8 gap-1 font-bold border-red-900/50 hover:bg-red-950/50 hover:border-red-500 text-[10px] md:text-xs px-2">
                        <ShoppingBag className="h-3 w-3" />
                        <span className="hidden sm:inline">ADD</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Banner */}
          <div className="mb-8 md:mb-12 border border-red-900/30 bg-red-950/10 p-4 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-5 w-5 text-red-500" />
              <span className="font-bold uppercase text-sm text-red-400">WHY PEOPLE LOVE US</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🔥</div>
                <div>
                  <h4 className="font-bold text-white text-sm">Premium Quality</h4>
                  <p className="text-xs text-red-400/60">Soft fabrics, vibrant prints that last</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">📦</div>
                <div>
                  <h4 className="font-bold text-white text-sm">Fast Shipping</h4>
                  <p className="text-xs text-red-400/60">Ships in 2-3 business days worldwide</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">💯</div>
                <div>
                  <h4 className="font-bold text-white text-sm">Satisfaction Guaranteed</h4>
                  <p className="text-xs text-red-400/60">30-day returns, no questions asked</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center">
            <div className="border-2 border-red-900/30 bg-red-950/10 p-6 md:p-12">
              <Flame className="h-8 w-8 md:h-12 md:w-12 text-red-500 mx-auto mb-3 md:mb-4" />
              <h3 className="text-xl md:text-2xl font-black uppercase text-white mb-3 md:mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                MORE CHAOS COMING SOON
              </h3>
              <p className="text-sm md:text-base text-red-300/70 max-w-md mx-auto">
                Be the first to know when new items drop. Get exclusive discounts.
              </p>
              <div className="mt-4 md:mt-6 flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 border border-red-900/50 bg-black/50 px-4 py-2.5 md:py-3 text-sm text-white placeholder:text-red-400/50 focus:border-red-500 focus:outline-none"
                />
                <Button className="font-bold bg-red-600 hover:bg-red-500 border-0 text-sm">
                  <Zap className="h-4 w-4" />
                  NOTIFY ME
                </Button>
              </div>
            </div>
          </div>
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
