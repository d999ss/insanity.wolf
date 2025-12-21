import { Button } from "@/components/ui/button"
import { ShoppingBag, Flame, Skull, Zap } from "lucide-react"
import Image from "next/image"
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

const products = [
  {
    name: "CLASSIC WOLF TEE",
    price: "$29.99",
    image: "/insanity-wolf.png",
    tag: "BESTSELLER",
  },
  {
    name: "CHAOS HOODIE",
    price: "$49.99",
    image: "/insanity-wolf.png",
    tag: "NEW",
  },
  {
    name: "STICKER PACK",
    price: "$9.99",
    image: "/insanity-wolf.png",
    tag: null,
  },
  {
    name: "POSTER 24x36",
    price: "$19.99",
    image: "/insanity-wolf.png",
    tag: null,
  },
  {
    name: "COFFEE MUG",
    price: "$14.99",
    image: "/insanity-wolf.png",
    tag: "HOT",
  },
  {
    name: "PHONE CASE",
    price: "$24.99",
    image: "/insanity-wolf.png",
    tag: null,
  },
]

export default function StorePage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <SiteNav />

      {/* Main Content */}
      <main className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <ShoppingBag className="h-4 w-4 text-red-500" />
              <span className="text-red-400">WEAR THE CHAOS</span>
            </div>
            <h1 className="text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              INSANITY WOLF
              <span className="block text-red-500">STORE</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-xl text-red-300/80">
              Merch so EXTREME your coworkers will ask if you're okay. You're NOT. And that's the POINT.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border-2 border-red-900/30 bg-gradient-to-br from-black via-red-950/10 to-black transition-all hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10"
              >
                {product.tag && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-black uppercase text-white">
                      {product.tag}
                    </span>
                  </div>
                )}
                <div className="aspect-square bg-black/50 p-8 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="border-t border-red-900/30 bg-red-950/20 p-6">
                  <h3 className="mb-2 font-black uppercase text-lg text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-red-500">{product.price}</span>
                    <Button size="sm" className="gap-2 font-bold bg-red-900 hover:bg-red-800 border border-red-500">
                      <ShoppingBag className="h-4 w-4" />
                      ADD
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-16 text-center">
            <div className="rounded-2xl border-2 border-red-900/30 bg-red-950/10 p-12">
              <Flame className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-black uppercase text-white mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                MORE CHAOS COMING SOON
              </h3>
              <p className="text-red-300/70 max-w-md mx-auto">
                We're cooking up more UNHINGED merch. Enter your email to be the FIRST to know when new items drop.
              </p>
              <div className="mt-6 flex max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 rounded-lg border border-red-900/50 bg-black/50 px-4 py-3 text-white placeholder:text-red-400/50 focus:border-red-500 focus:outline-none"
                />
                <Button className="font-bold bg-red-900 hover:bg-red-800 border border-red-500">
                  <Zap className="h-4 w-4" />
                  NOTIFY ME
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-900/50 bg-black px-6 py-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-red-400/50">
            INSANITY WOLF STORE. All sales final. No refunds. NO MERCY.
          </p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
