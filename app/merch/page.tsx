"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { HomeNav } from "@/components/home-nav"
import { SiteNav } from "@/components/site-nav"
import { ShoppingCart, Check } from "lucide-react"

const products = [
  { id: "tshirt", name: "T-SHIRT", price: 29.99, icon: "👕" },
  { id: "hoodie", name: "HOODIE", price: 49.99, icon: "🧥" },
  { id: "mug", name: "MUG", price: 14.99, icon: "☕" },
  { id: "poster", name: "POSTER", price: 19.99, icon: "🖼️" },
  { id: "sticker", name: "STICKER PACK", price: 9.99, icon: "✨" },
  { id: "phone", name: "PHONE CASE", price: 24.99, icon: "📱" },
]

function MerchBuilderContent() {
  const searchParams = useSearchParams()
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [activePreview, setActivePreview] = useState("tshirt")

  useEffect(() => {
    setTopText(searchParams.get("top") || "")
    setBottomText(searchParams.get("bottom") || "")
  }, [searchParams])

  const toggleProduct = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    )
  }

  const totalPrice = selectedProducts.reduce((sum, id) => {
    const product = products.find((p) => p.id === id)
    return sum + (product?.price || 0)
  }, 0)

  return (
    <div className="min-h-screen bg-black">
      <HomeNav />

      <main className="pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <p className="font-mono text-xs md:text-sm uppercase text-red-400/80 mb-2">
              Merch Builder
              <span className="block text-red-400/50 font-mono">
                [PUT YOUR INSANITY ON EVERYTHING]
              </span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left - Preview */}
            <div className="border border-red-900/30 bg-red-950/10 p-4 md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mono text-xs uppercase text-white/70">Preview</p>
                <div className="flex gap-2">
                  {products.slice(0, 4).map((product) => (
                    <button
                      key={product.id}
                      onClick={() => setActivePreview(product.id)}
                      className={`font-mono text-lg p-2 transition-all ${
                        activePreview === product.id
                          ? "bg-red-950/50 scale-110"
                          : "opacity-50 hover:opacity-100"
                      }`}
                    >
                      {product.icon}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative aspect-square bg-black/50 border border-red-900/30 flex items-center justify-center">
                {/* Product mockup area */}
                <div className="relative w-3/4 aspect-square">
                  {activePreview === "tshirt" && (
                    <div className="w-full h-full bg-zinc-900 rounded-sm flex items-center justify-center relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1/2 aspect-square relative">
                          <Image
                            src="/insanity-wolf-template.webp"
                            alt="Meme preview"
                            fill
                            className="object-contain"
                          />
                          {topText && (
                            <div className="absolute top-1 left-0 right-0 text-center">
                              <p
                                className="text-[8px] md:text-xs font-black uppercase text-white leading-tight"
                                style={{
                                  fontFamily: "Impact, 'Arial Black', sans-serif",
                                  textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                                }}
                              >
                                {topText}
                              </p>
                            </div>
                          )}
                          {bottomText && (
                            <div className="absolute bottom-1 left-0 right-0 text-center">
                              <p
                                className="text-[8px] md:text-xs font-black uppercase text-white leading-tight"
                                style={{
                                  fontFamily: "Impact, 'Arial Black', sans-serif",
                                  textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                                }}
                              >
                                {bottomText}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      <span className="absolute bottom-4 font-mono text-xs text-white/30">T-SHIRT</span>
                    </div>
                  )}
                  {activePreview === "hoodie" && (
                    <div className="w-full h-full bg-zinc-800 rounded-sm flex items-center justify-center relative">
                      <div className="w-1/2 aspect-square relative">
                        <Image
                          src="/insanity-wolf-template.webp"
                          alt="Meme preview"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="absolute bottom-4 font-mono text-xs text-white/30">HOODIE</span>
                    </div>
                  )}
                  {activePreview === "mug" && (
                    <div className="w-full h-full bg-white rounded-sm flex items-center justify-center relative">
                      <div className="w-1/3 aspect-square relative">
                        <Image
                          src="/insanity-wolf-template.webp"
                          alt="Meme preview"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="absolute bottom-4 font-mono text-xs text-black/30">MUG</span>
                    </div>
                  )}
                  {activePreview === "poster" && (
                    <div className="w-full h-full bg-zinc-900 border-4 border-zinc-700 flex items-center justify-center relative">
                      <div className="w-2/3 aspect-square relative">
                        <Image
                          src="/insanity-wolf-template.webp"
                          alt="Meme preview"
                          fill
                          className="object-contain"
                        />
                        {topText && (
                          <div className="absolute top-2 left-0 right-0 text-center">
                            <p
                              className="text-sm md:text-lg font-black uppercase text-white"
                              style={{
                                fontFamily: "Impact, 'Arial Black', sans-serif",
                                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                              }}
                            >
                              {topText}
                            </p>
                          </div>
                        )}
                        {bottomText && (
                          <div className="absolute bottom-2 left-0 right-0 text-center">
                            <p
                              className="text-sm md:text-lg font-black uppercase text-white"
                              style={{
                                fontFamily: "Impact, 'Arial Black', sans-serif",
                                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                              }}
                            >
                              {bottomText}
                            </p>
                          </div>
                        )}
                      </div>
                      <span className="absolute bottom-4 font-mono text-xs text-white/30">POSTER</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Meme text display */}
              <div className="mt-4 p-4 bg-black/50 border border-red-900/30">
                <p className="font-mono text-xs text-red-400/60 uppercase mb-2">Your Meme Text</p>
                <p className="font-mono text-sm text-white uppercase">{topText || "..."}</p>
                <p className="font-mono text-sm text-white uppercase">{bottomText || "..."}</p>
              </div>
            </div>

            {/* Right - Product Selection */}
            <div className="border border-red-900/30 bg-black p-4 md:p-6">
              <p className="font-mono text-xs uppercase text-white/70 mb-4">Select Products</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => toggleProduct(product.id)}
                    className={`relative p-4 border transition-all text-left ${
                      selectedProducts.includes(product.id)
                        ? "border-red-500 bg-red-950/30"
                        : "border-red-900/30 bg-red-950/10 hover:border-red-900/50"
                    }`}
                  >
                    {selectedProducts.includes(product.id) && (
                      <div className="absolute top-2 right-2 w-5 h-5 bg-red-500 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <span className="text-2xl mb-2 block">{product.icon}</span>
                    <p className="font-mono text-xs uppercase text-white">{product.name}</p>
                    <p className="font-mono text-sm text-red-400">${product.price}</p>
                  </button>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="border-t border-red-900/30 pt-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-mono text-xs uppercase text-white/70">
                    {selectedProducts.length} items selected
                  </p>
                  <p className="font-mono text-lg text-white">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>

                <button
                  disabled={selectedProducts.length === 0}
                  className="w-full flex items-center justify-center gap-2 font-mono text-sm font-medium text-black bg-white hover:bg-white/90 disabled:bg-white/20 disabled:text-white/40 px-4 py-3 transition-colors disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="h-4 w-4" />
                  {selectedProducts.length > 0 ? "ADD TO CART" : "SELECT SOME SHIT"}
                </button>

                <p className="text-center font-mono text-xs text-white/50 mt-4">
                  Free shipping on orders over $50
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteNav />
    </div>
  )
}

export default function MerchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="font-mono text-white/50">Loading...</p>
      </div>
    }>
      <MerchBuilderContent />
    </Suspense>
  )
}
