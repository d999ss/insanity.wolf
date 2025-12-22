"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Flame, Zap, Shirt, Star, TrendingUp, Package, Sparkles, Check, Filter, ChevronRight, Shield, Truck, RotateCcw } from "lucide-react"
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
    category: "T-Shirts",
    reviews: 847,
    rating: 4.9,
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
    category: "Hoodies",
    reviews: 234,
    rating: 4.8,
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
    category: "Mugs",
    reviews: 562,
    rating: 4.9,
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
    reviews: 1203,
    rating: 5.0,
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
    reviews: 389,
    rating: 4.7,
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
    reviews: 276,
    rating: 4.8,
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
    reviews: 198,
    rating: 4.9,
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
    reviews: 167,
    rating: 4.6,
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
    reviews: 445,
    rating: 4.8,
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
    reviews: 723,
    rating: 4.9,
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
    reviews: 156,
    rating: 4.7,
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
    reviews: 98,
    rating: 4.5,
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
    reviews: 312,
    rating: 4.8,
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
    reviews: 87,
    rating: 4.6,
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
    reviews: 234,
    rating: 4.7,
  },
]

const categories = ["All", "T-Shirts", "Hoodies", "Mugs", "Posters", "Stickers", "Phone Cases"]

const stats = [
  { label: "Orders Shipped", value: "50K+", icon: "📦" },
  { label: "5-Star Reviews", value: "4.9", icon: "⭐" },
  { label: "Countries", value: "147", icon: "🌍" },
  { label: "Happy Wolves", value: "∞", icon: "🐺" },
]

const reviews = [
  { name: "Mike T.", text: "Wore this to work. Got promoted. Coincidence?", rating: 5, product: "Monday Tee" },
  { name: "Sarah K.", text: "My cat judges me less now", rating: 5, product: "Coffee Hoodie" },
  { name: "Jake R.", text: "Best purchase of 2024. People ask about it daily.", rating: 5, product: "OG Wolf Tee" },
]

export default function StorePage() {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [addedId, setAddedId] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showCart, setShowCart] = useState(false)

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
      image: null,
      topText: product.topText,
      bottomText: product.bottomText,
      price: product.price,
      isPreMade: true,
    }
    const newCart = [...cartItems, item]
    setCartItems(newCart)
    localStorage.setItem("insanity-cart", JSON.stringify(newCart))
    setAddedId(product.id)
    setShowCart(true)
    setTimeout(() => setAddedId(null), 1500)
  }

  const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory)

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen bg-black text-foreground">
      <SiteNav />
      <div className="pt-16 md:pt-20">
        <CountdownTimer />
      </div>

      {/* Sticky Cart Bar */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-red-900 to-red-800 border-t border-red-600 px-4 py-3 md:hidden">
          <Link href="/checkout" className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingBag className="h-6 w-6 text-white" />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </div>
              <span className="text-white font-bold">View Cart</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-black text-lg">${cartTotal.toFixed(2)}</span>
              <ChevronRight className="h-5 w-5 text-white" />
            </div>
          </Link>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-6 md:pt-10 pb-24 md:pb-16 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="mb-8 md:mb-12 text-center">
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

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 border border-red-900/30 bg-red-950/10 p-3 md:p-4">
              <Truck className="h-4 w-4 md:h-5 md:w-5 text-green-500" />
              <span className="text-[10px] md:text-xs font-bold text-white uppercase">Free Shipping $50+</span>
            </div>
            <div className="flex items-center justify-center gap-2 border border-red-900/30 bg-red-950/10 p-3 md:p-4">
              <Shield className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
              <span className="text-[10px] md:text-xs font-bold text-white uppercase">Secure Checkout</span>
            </div>
            <div className="flex items-center justify-center gap-2 border border-red-900/30 bg-red-950/10 p-3 md:p-4">
              <RotateCcw className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
              <span className="text-[10px] md:text-xs font-bold text-white uppercase">30-Day Returns</span>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="border border-red-900/30 bg-gradient-to-br from-red-950/20 to-black p-4 md:p-5 text-center group hover:border-red-500/50 transition-all">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl md:text-2xl font-black text-white tabular-nums">{stat.value}</div>
                <div className="text-[10px] md:text-xs uppercase text-red-400/60 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Custom Merch CTA */}
          <Link href="/merch" className="block mb-8 md:mb-12">
            <div className="border-2 border-red-500/50 bg-gradient-to-r from-red-950/50 via-red-900/30 to-red-950/50 p-4 md:p-6 hover:border-red-500 transition-all hover:shadow-lg hover:shadow-red-500/20 group">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-full group-hover:bg-red-500/30 transition-colors">
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
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Featured Products */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <h2 className="text-xl md:text-2xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                  BEST SELLERS
                </h2>
              </div>
              {cartItems.length > 0 && (
                <Link href="/checkout" className="hidden md:flex items-center gap-2 bg-red-600 hover:bg-red-500 px-4 py-2 transition-colors">
                  <ShoppingBag className="h-4 w-4 text-white" />
                  <span className="text-sm font-bold text-white">Cart ({cartItems.length}) - ${cartTotal.toFixed(2)}</span>
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
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`px-3 py-1 text-xs font-black uppercase text-white ${product.tag === 'BESTSELLER' ? 'bg-yellow-600' : product.tag === 'NEW' ? 'bg-green-600' : 'bg-red-500'}`}>
                        {product.tag}
                      </span>
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-red-600 px-2 py-1 text-xs font-black uppercase text-white">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  )}
                  <div className="aspect-square bg-black/50 p-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
                    <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 relative z-10">
                      <MemePreview topText={product.topText} bottomText={product.bottomText} size="lg" />
                    </div>
                  </div>
                  <div className="border-t border-red-900/30 bg-red-950/20 p-5 md:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <span className="text-xs text-red-400/60">({product.reviews})</span>
                    </div>
                    <h3 className="mb-1 font-black uppercase text-lg md:text-xl text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                      {product.name}
                    </h3>
                    <p className="text-xs text-red-400/60 mb-3 line-clamp-2">{product.description}</p>
                    <div className="mb-3">
                      <StockUrgency productName={product.name} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl md:text-3xl font-black text-white">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-red-400/40 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <Button
                        onClick={() => addToCart(product)}
                        className={`gap-2 font-bold border-0 text-sm px-4 py-2 transition-all ${addedId === product.id ? 'bg-green-600 hover:bg-green-600' : 'bg-red-600 hover:bg-red-500'}`}
                      >
                        {addedId === product.id ? (
                          <><Check className="h-4 w-4" /> ADDED</>
                        ) : (
                          <><ShoppingBag className="h-4 w-4" /> ADD TO CART</>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="mb-12 md:mb-16">
            <div className="border border-red-900/30 bg-red-950/10 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="text-white font-bold">4.9/5 from 10,000+ reviews</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {reviews.map((review, idx) => (
                  <div key={idx} className="border border-red-900/30 bg-black/50 p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-white text-sm mb-2">"{review.text}"</p>
                    <div className="flex items-center justify-between">
                      <span className="text-red-400/60 text-xs font-bold">{review.name}</span>
                      <span className="text-red-400/40 text-xs">Verified Purchase</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="h-5 w-5 text-red-500" />
              <h2 className="text-xl md:text-2xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                SHOP BY CATEGORY
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs md:text-sm font-bold uppercase transition-all ${
                    selectedCategory === cat
                      ? 'bg-red-600 text-white'
                      : 'border border-red-900/50 text-red-400 hover:border-red-500 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* All Products */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-red-500" />
                <h2 className="text-xl md:text-2xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                  {selectedCategory === "All" ? "ALL PRODUCTS" : selectedCategory.toUpperCase()}
                </h2>
                <span className="text-red-400/50 text-sm">({filteredProducts.length})</span>
              </div>
            </div>
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden border border-red-900/30 bg-gradient-to-br from-black via-red-950/5 to-black transition-all hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10"
                >
                  {product.tag && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`px-2 py-1 text-[10px] font-black uppercase text-white ${
                        product.tag === 'CLASSIC' ? 'bg-purple-600' :
                        product.tag === 'NEW' ? 'bg-green-600' :
                        product.tag === 'HOT' ? 'bg-orange-600' : 'bg-red-500'
                      }`}>
                        {product.tag}
                      </span>
                    </div>
                  )}
                  <div className="aspect-square bg-black/30 p-4 md:p-6 flex items-center justify-center">
                    <div className="transition-all duration-300 group-hover:scale-105">
                      <MemePreview topText={product.topText} bottomText={product.bottomText} size="md" />
                    </div>
                  </div>
                  <div className="border-t border-red-900/30 bg-red-950/10 p-4 md:p-5">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-2.5 w-2.5 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} />
                      ))}
                      <span className="text-[10px] text-red-400/50 ml-1">({product.reviews})</span>
                    </div>
                    <span className="text-[10px] md:text-xs uppercase text-red-400/50 font-mono">{product.category}</span>
                    <h3 className="mb-3 font-black uppercase text-sm md:text-base text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl md:text-2xl font-black text-white">${product.price}</span>
                      <Button
                        size="sm"
                        onClick={() => addToCart(product)}
                        className={`h-9 gap-2 font-bold text-xs px-3 transition-all ${addedId === product.id ? 'bg-green-600 hover:bg-green-600' : 'bg-red-600 hover:bg-red-500'}`}
                      >
                        {addedId === product.id ? (
                          <Check className="h-4 w-4" />
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

          {/* Why Choose Us */}
          <div className="mb-8 md:mb-12 border border-red-900/30 bg-red-950/10 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-5 w-5 text-red-500" />
              <span className="font-black uppercase text-lg text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>WHY WOLVES CHOOSE US</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🔥</div>
                <h4 className="font-bold text-white text-sm mb-1">Premium Quality</h4>
                <p className="text-xs text-red-400/60">Soft fabrics, vibrant prints that last 1000+ washes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📦</div>
                <h4 className="font-bold text-white text-sm mb-1">Fast Shipping</h4>
                <p className="text-xs text-red-400/60">Ships in 2-3 days. Free over $50</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💯</div>
                <h4 className="font-bold text-white text-sm mb-1">100% Guarantee</h4>
                <p className="text-xs text-red-400/60">30-day returns, no questions asked</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🐺</div>
                <h4 className="font-bold text-white text-sm mb-1">Join the Pack</h4>
                <p className="text-xs text-red-400/60">50,000+ wolves wearing our gear</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center">
            <div className="border-2 border-red-900/30 bg-gradient-to-br from-red-950/20 to-black p-6 md:p-12">
              <Flame className="h-8 w-8 md:h-12 md:w-12 text-red-500 mx-auto mb-3 md:mb-4 animate-pulse" />
              <h3 className="text-xl md:text-3xl font-black uppercase text-white mb-3 md:mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                JOIN THE WOLF PACK
              </h3>
              <p className="text-sm md:text-base text-red-300/70 max-w-md mx-auto mb-6">
                Get 15% OFF your first order + exclusive drops and chaos delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 border border-red-900/50 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-red-400/50 focus:border-red-500 focus:outline-none"
                />
                <Button className="font-bold bg-red-600 hover:bg-red-500 border-0 text-sm px-6 py-3">
                  <Zap className="h-4 w-4" />
                  GET 15% OFF
                </Button>
              </div>
              <p className="text-xs text-red-400/40 mt-3">No spam. Unsubscribe anytime. We're chaotic, not annoying.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-900/30 bg-black px-4 md:px-6 py-6 md:py-8">
        <div className="mx-auto max-w-6xl text-center font-mono text-xs text-red-400/40">
          <p>© 2009-2025 INSANITYWOLF.COM. This is satire. Don't actually follow this advice.</p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
