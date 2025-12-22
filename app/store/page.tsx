"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Flame, Zap, Shirt, Star, TrendingUp, Package, Sparkles, Check } from "lucide-react"
import Link from "next/link"
import { SiteNav } from "@/components/site-nav"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MemePreview } from "@/components/meme-preview"
import { CountdownTimer } from "@/components/countdown-timer"
import { StockUrgency } from "@/components/stock-urgency"

const featuredProducts = [
  {
    id: "monday-tee",
    name: "MONDAY MORNING TEE",
    topText: "ALARM GOES OFF",
    bottomText: "DESTROY IT",
    price: 29.99,
    originalPrice: 39.99,
    image: "/insanity-wolf-template.webp",
    tag: "BESTSELLER",
    description: "Start every week with unhinged energy. 100% cotton.",
    colors: ["Black", "Red", "White"],
    productType: "tshirt",
  },
  {
    id: "coffee-hoodie",
    name: "COFFEE CHAOS HOODIE",
    topText: "COFFEE IS COLD",
    bottomText: "DRINK LAVA",
    price: 54.99,
    originalPrice: null,
    image: "/insanity-wolf-template.webp",
    tag: "NEW",
    description: "Soft fleece. For those who prefer their beverages volcanic.",
    colors: ["Black", "Gray"],
    productType: "hoodie",
  },
  {
    id: "deadline-mug",
    name: "DEADLINE MUG",
    topText: "DEADLINE TOMORROW",
    bottomText: "START NEXT WEEK",
    price: 19.99,
    originalPrice: null,
    image: "/insanity-wolf-template.webp",
    tag: "HOT",
    description: "11oz ceramic. Perfect for procrastinating with style.",
    colors: ["White", "Black"],
    productType: "mug",
  },
]

const allProducts = [
  {
    id: "og-wolf-tee",
    name: "OG INSANITY WOLF",
    topText: "PROBLEM?",
    bottomText: "BECOME THE PROBLEM",
    price: 29.99,
    image: "/insanity-wolf-template.webp",
    tag: "CLASSIC",
    category: "T-Shirts",
    productType: "tshirt",
  },
  {
    id: "gym-tee",
    name: "GYM BRO TEE",
    topText: "SKIP LEG DAY",
    bottomText: "EVERY DAY IS ARM DAY",
    price: 29.99,
    image: "/insanity-wolf-template.webp",
    tag: null,
    category: "T-Shirts",
    productType: "tshirt",
  },
  {
    id: "diet-tee",
    name: "DIET MODE TEE",
    topText: "ON A DIET",
    bottomText: "EAT THE DIET BOOK",
    price: 29.99,
    image: "/insanity-wolf-template.webp",
    tag: null,
    category: "T-Shirts",
    productType: "tshirt",
  },
  {
    id: "meeting-hoodie",
    name: "MEETING HOODIE",
    topText: "ZOOM MEETING",
    bottomText: "PANTS OPTIONAL",
    price: 54.99,
    image: "/insanity-wolf-template.webp",
    tag: "NEW",
    category: "Hoodies",
    productType: "hoodie",
  },
  {
    id: "sleep-hoodie",
    name: "SLEEP HOODIE",
    topText: "CAN'T SLEEP",
    bottomText: "STAY AWAKE FOREVER",
    price: 54.99,
    image: "/insanity-wolf-template.webp",
    tag: null,
    category: "Hoodies",
    productType: "hoodie",
  },
  {
    id: "password-mug",
    name: "PASSWORD MUG",
    topText: "FORGOT PASSWORD",
    bottomText: "USE PASSWORD123",
    price: 19.99,
    image: "/insanity-wolf-template.webp",
    tag: null,
    category: "Mugs",
    productType: "mug",
  },
  {
    id: "monday-mug",
    name: "MONDAY MUG",
    topText: "CASE OF THE MONDAYS",
    bottomText: "CALL IN SICK FOREVER",
    price: 19.99,
    image: "/insanity-wolf-template.webp",
    tag: "HOT",
    category: "Mugs",
    productType: "mug",
  },
  {
    id: "boss-poster",
    name: "BOSS POSTER",
    topText: "BOSS SAYS NO",
    bottomText: "BECOME THE BOSS",
    price: 24.99,
    image: "/insanity-wolf-template.webp",
    tag: null,
    category: "Posters",
    productType: "poster",
  },
  {
    id: "traffic-poster",
    name: "TRAFFIC POSTER",
    topText: "STUCK IN TRAFFIC",
    bottomText: "HONK UNTIL DEAF",
    price: 24.99,
    image: "/insanity-wolf-template.webp",
    tag: null,
    category: "Posters",
    productType: "poster",
  },
  {
    id: "wifi-stickers",
    name: "WIFI STICKERS",
    topText: "WIFI DOWN",
    bottomText: "LIVE OFF THE GRID",
    price: 14.99,
    image: "/insanity-wolf-template.webp",
    tag: null,
    category: "Stickers",
    productType: "stickers",
  },
  {
    id: "battery-case",
    name: "BATTERY PHONE CASE",
    topText: "1% BATTERY",
    bottomText: "MAXIMUM POWER",
    price: 24.99,
    image: "/insanity-wolf-template.webp",
    tag: "NEW",
    category: "Phone Cases",
    productType: "phonecase",
  },
  {
    id: "email-tee",
    name: "EMAIL TEE",
    topText: "1000 UNREAD EMAILS",
    bottomText: "DELETE THEM ALL",
    price: 29.99,
    image: "/insanity-wolf-template.webp",
    tag: null,
    category: "T-Shirts",
    productType: "tshirt",
  },
]

const stats = [
  { label: "Orders Shipped", value: "50K+" },
  { label: "5-Star Reviews", value: "4.9" },
  { label: "Countries", value: "147" },
  { label: "Happy Wolves", value: "∞" },
]

export default function StorePage() {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [addedId, setAddedId] = useState<string | null>(null)

  useEffect(() => {
    const cart = localStorage.getItem("insanity-cart")
    if (cart) {
      setCartItems(JSON.parse(cart))
    }
  }, [])

  const addToCart = (product: any) => {
    const item = {
      id: product.id + "-" + Date.now(),
      product: {
        id: product.productType,
        name: product.name,
        basePrice: product.price,
      },
      size: product.productType === "tshirt" || product.productType === "hoodie" ? "M" : "Standard",
      color: { name: "Black", hex: "#000000" },
      quantity: 1,
      image: null, // Pre-made designs
      topText: product.topText,
      bottomText: product.bottomText,
      price: product.price,
      isPreMade: true,
    }
    const newCart = [...cartItems, item]
    setCartItems(newCart)
    localStorage.setItem("insanity-cart", JSON.stringify(newCart))
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  return (
    <div className="min-h-screen bg-black text-foreground">
      <SiteNav />
      <div className="pt-16 md:pt-20">
        <CountdownTimer />
      </div>

      {/* Main Content */}
      <main className="pt-6 md:pt-10 pb-10 md:pb-16 px-4 md:px-6">
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

            {/* Urgency Banner */}
            <div className="mt-6 inline-flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/50 px-4 py-2 animate-pulse">
              <Flame className="h-4 w-4 text-yellow-500" />
              <span className="text-yellow-400 text-xs md:text-sm font-bold uppercase">
                <span className="text-yellow-300">47 people</span> viewing right now
              </span>
              <span className="text-yellow-500/50">|</span>
              <span className="text-yellow-400 text-xs md:text-sm font-bold uppercase">
                <span className="text-yellow-300">12 sold</span> in the last hour
              </span>
            </div>
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
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-red-500" />
                <h2 className="text-xl md:text-2xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                  FEATURED
                </h2>
              </div>
              {cartItems.length > 0 && (
                <Link href="/checkout" className="flex items-center gap-2 text-red-400 hover:text-white transition-colors">
                  <ShoppingBag className="h-4 w-4" />
                  <span className="text-sm font-bold">Cart ({cartItems.length})</span>
                </Link>
              )}
            </div>
            <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden border-2 border-red-900/30 bg-gradient-to-br from-black via-red-950/10 to-black transition-all hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10"
                >
                  {product.tag && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-red-500 px-2 py-1 text-[10px] font-black uppercase text-white">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  <div className="aspect-square bg-black/50 p-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
                    <div className="transition-transform duration-300 group-hover:scale-110 relative z-10">
                      <MemePreview topText={product.topText} bottomText={product.bottomText} size="lg" />
                    </div>
                  </div>
                  <div className="border-t border-red-900/30 bg-red-950/20 p-4 md:p-6">
                    <h3 className="mb-1 font-black uppercase text-base md:text-lg text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                      {product.name}
                    </h3>
                    <p className="text-xs text-red-400/60 mb-2 line-clamp-2">{product.description}</p>
                    <div className="mb-3">
                      <StockUrgency productName={product.name} />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      {product.colors.map((color, cidx) => (
                        <span key={cidx} className="text-[10px] uppercase text-red-400/50 border border-red-900/30 px-2 py-0.5">
                          {color}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl md:text-2xl font-black text-red-500">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-red-400/40 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        onClick={() => addToCart(product)}
                        className={`gap-2 font-bold border-0 text-xs md:text-sm transition-all ${addedId === product.id ? 'bg-green-600 hover:bg-green-600' : 'bg-red-600 hover:bg-red-500'}`}
                      >
                        {addedId === product.id ? (
                          <><Check className="h-3 w-3 md:h-4 md:w-4" /> ADDED</>
                        ) : (
                          <><ShoppingBag className="h-3 w-3 md:h-4 md:w-4" /> ADD</>
                        )}
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
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {allProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden border border-red-900/30 bg-gradient-to-br from-black via-red-950/5 to-black transition-all hover:border-red-500/50"
                >
                  {product.tag && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-red-500 px-2 py-1 text-[10px] font-black uppercase text-white">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  <div className="aspect-square bg-black/30 p-4 md:p-6 flex items-center justify-center">
                    <div className="transition-transform duration-300 group-hover:scale-105">
                      <MemePreview topText={product.topText} bottomText={product.bottomText} size="md" />
                    </div>
                  </div>
                  <div className="border-t border-red-900/30 bg-red-950/10 p-4 md:p-5">
                    <span className="text-[10px] md:text-xs uppercase text-red-400/50 font-mono">{product.category}</span>
                    <h3 className="mb-3 font-black uppercase text-sm md:text-base text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg md:text-xl font-black text-red-500">${product.price}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => addToCart(product)}
                        className={`h-8 md:h-9 gap-2 font-bold text-xs px-3 transition-all ${addedId === product.id ? 'bg-green-600 border-green-600 text-white hover:bg-green-600' : 'border-red-900/50 hover:bg-red-950/50 hover:border-red-500'}`}
                      >
                        {addedId === product.id ? (
                          <><Check className="h-4 w-4" /></>
                        ) : (
                          <><ShoppingBag className="h-4 w-4" /> ADD</>
                        )}
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
