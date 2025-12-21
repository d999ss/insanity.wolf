"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { HomeNav } from "@/components/home-nav"
import { ShoppingCart, Check, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  { id: "tshirt", name: "T-SHIRT", price: 29.99, icon: "👕", colors: ["#1a1a1a", "#ffffff", "#dc2626", "#1d4ed8"] },
  { id: "hoodie", name: "HOODIE", price: 49.99, icon: "🧥", colors: ["#1a1a1a", "#374151", "#7f1d1d"] },
  { id: "mug", name: "MUG", price: 14.99, icon: "☕", colors: ["#ffffff", "#1a1a1a"] },
  { id: "poster", name: "POSTER", price: 19.99, icon: "🖼️", colors: ["#1a1a1a"] },
  { id: "sticker", name: "STICKER PACK", price: 9.99, icon: "✨", colors: ["holographic"] },
  { id: "phone", name: "PHONE CASE", price: 24.99, icon: "📱", colors: ["#1a1a1a", "#ffffff", "#dc2626"] },
]

function MerchBuilderContent() {
  const searchParams = useSearchParams()
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [activePreview, setActivePreview] = useState("tshirt")
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [selectedColor, setSelectedColor] = useState<Record<string, string>>({
    tshirt: "#1a1a1a",
    hoodie: "#1a1a1a",
    mug: "#ffffff",
    poster: "#1a1a1a",
    sticker: "holographic",
    phone: "#1a1a1a",
  })

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

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const deltaX = e.clientX - dragStart.x
    const deltaY = e.clientY - dragStart.y
    setRotation({
      x: Math.max(-30, Math.min(30, rotation.x - deltaY * 0.5)),
      y: rotation.y + deltaX * 0.5,
    })
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 })
  }

  const rotateLeft = () => setRotation({ ...rotation, y: rotation.y - 45 })
  const rotateRight = () => setRotation({ ...rotation, y: rotation.y + 45 })

  const activeProduct = products.find((p) => p.id === activePreview)

  const MemeOverlay = ({ size = "small" }: { size?: "small" | "large" }) => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className={`relative ${size === "small" ? "w-1/2" : "w-2/3"} aspect-square`}>
        <Image
          src="/insanity-wolf-template.webp"
          alt="Meme preview"
          fill
          className="object-contain drop-shadow-2xl"
        />
        {topText && (
          <div className="absolute top-1 left-0 right-0 text-center px-1">
            <p
              className={`font-black uppercase text-white leading-tight ${size === "small" ? "text-[6px] md:text-[10px]" : "text-xs md:text-base"}`}
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              {topText}
            </p>
          </div>
        )}
        {bottomText && (
          <div className="absolute bottom-1 left-0 right-0 text-center px-1">
            <p
              className={`font-black uppercase text-white leading-tight ${size === "small" ? "text-[6px] md:text-[10px]" : "text-xs md:text-base"}`}
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              {bottomText}
            </p>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black">
      <HomeNav />

      <main className="pt-20 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12 text-center">
            <p className="font-mono text-xs md:text-sm uppercase text-red-400/80 mb-2">
              3D Merch Builder
            </p>
            <h1
              className="text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl text-white"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              PUT YOUR <span className="text-red-500">INSANITY</span> ON EVERYTHING
            </h1>
            <p className="font-mono text-sm text-red-400/50 mt-2">
              Drag to rotate • Click products to customize
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left - 3D Preview */}
            <div className="border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black p-4 md:p-6">
              {/* Product Tabs */}
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mono text-xs uppercase text-white/70">3D Preview</p>
                <div className="flex gap-1">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => {
                        setActivePreview(product.id)
                        resetRotation()
                      }}
                      className={`font-mono text-base md:text-lg p-1.5 md:p-2 transition-all rounded ${
                        activePreview === product.id
                          ? "bg-red-600 scale-110 shadow-lg shadow-red-500/30"
                          : "opacity-50 hover:opacity-100 hover:bg-red-950/50"
                      }`}
                    >
                      {product.icon}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3D Viewport */}
              <div
                className="relative aspect-square bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-red-900/30 overflow-hidden cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ perspective: "1000px" }}
              >
                {/* Lighting effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

                {/* 3D Product */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-transform duration-100"
                  style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* T-Shirt 3D */}
                  {activePreview === "tshirt" && (
                    <div className="relative w-4/5 h-4/5">
                      {/* Shirt body */}
                      <div
                        className="absolute inset-0 rounded-md shadow-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${selectedColor.tshirt} 0%, ${selectedColor.tshirt}dd 50%, ${selectedColor.tshirt}aa 100%)`,
                          clipPath: "polygon(20% 0%, 80% 0%, 100% 15%, 100% 100%, 0% 100%, 0% 15%)",
                          transform: "translateZ(20px)",
                        }}
                      >
                        {/* Collar */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[8%] bg-black/30 rounded-b-full" />
                        {/* Sleeves shadow */}
                        <div className="absolute top-[12%] left-0 w-[20%] h-[25%] bg-black/20 rounded-r-lg" />
                        <div className="absolute top-[12%] right-0 w-[20%] h-[25%] bg-black/20 rounded-l-lg" />
                        <MemeOverlay size="small" />
                      </div>
                      {/* Back face */}
                      <div
                        className="absolute inset-0 rounded-md"
                        style={{
                          background: selectedColor.tshirt,
                          clipPath: "polygon(20% 0%, 80% 0%, 100% 15%, 100% 100%, 0% 100%, 0% 15%)",
                          transform: "translateZ(-20px) rotateY(180deg)",
                        }}
                      />
                    </div>
                  )}

                  {/* Hoodie 3D */}
                  {activePreview === "hoodie" && (
                    <div className="relative w-4/5 h-4/5">
                      <div
                        className="absolute inset-0 rounded-lg shadow-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${selectedColor.hoodie} 0%, ${selectedColor.hoodie}dd 50%, ${selectedColor.hoodie}aa 100%)`,
                          clipPath: "polygon(15% 8%, 35% 0%, 65% 0%, 85% 8%, 100% 20%, 100% 100%, 0% 100%, 0% 20%)",
                          transform: "translateZ(25px)",
                        }}
                      >
                        {/* Hood */}
                        <div
                          className="absolute top-0 left-1/4 right-1/4 h-[15%] rounded-t-full"
                          style={{ background: `${selectedColor.hoodie}` }}
                        />
                        {/* Kangaroo pocket */}
                        <div className="absolute bottom-[15%] left-[20%] right-[20%] h-[20%] bg-black/20 rounded-lg" />
                        <MemeOverlay size="small" />
                      </div>
                    </div>
                  )}

                  {/* Mug 3D */}
                  {activePreview === "mug" && (
                    <div className="relative w-3/5 h-3/5">
                      {/* Mug body */}
                      <div
                        className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden"
                        style={{
                          background: `linear-gradient(90deg, ${selectedColor.mug}dd 0%, ${selectedColor.mug} 30%, ${selectedColor.mug} 70%, ${selectedColor.mug}aa 100%)`,
                          borderRadius: "10% 10% 20% 20%",
                          transform: "translateZ(30px)",
                        }}
                      >
                        {/* Rim */}
                        <div className="absolute top-0 left-0 right-0 h-[8%] bg-gradient-to-b from-white/30 to-transparent" />
                        <MemeOverlay size="large" />
                      </div>
                      {/* Handle */}
                      <div
                        className="absolute right-[-15%] top-[20%] w-[20%] h-[40%] border-4 rounded-full"
                        style={{
                          borderColor: selectedColor.mug === "#ffffff" ? "#e5e5e5" : selectedColor.mug,
                          borderLeftColor: "transparent",
                          transform: "translateZ(15px)",
                        }}
                      />
                    </div>
                  )}

                  {/* Poster 3D */}
                  {activePreview === "poster" && (
                    <div className="relative w-3/5 h-4/5">
                      {/* Frame */}
                      <div
                        className="absolute inset-0 bg-zinc-800 shadow-2xl p-2"
                        style={{ transform: "translateZ(10px)" }}
                      >
                        {/* Inner poster */}
                        <div
                          className="relative w-full h-full"
                          style={{ background: selectedColor.poster }}
                        >
                          <MemeOverlay size="large" />
                        </div>
                      </div>
                      {/* Shadow on wall */}
                      <div
                        className="absolute inset-0 bg-black/50 blur-xl -z-10"
                        style={{ transform: "translateZ(-20px) translateX(10px) translateY(10px)" }}
                      />
                    </div>
                  )}

                  {/* Sticker 3D */}
                  {activePreview === "sticker" && (
                    <div className="relative w-3/5 h-3/5 flex items-center justify-center gap-4">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="relative w-1/3 aspect-square rounded-lg shadow-xl overflow-hidden"
                          style={{
                            background: "linear-gradient(135deg, #ff00ff, #00ffff, #ffff00, #ff00ff)",
                            transform: `translateZ(${20 + i * 10}px) rotate(${(i - 1) * 15}deg)`,
                          }}
                        >
                          <div className="absolute inset-1 bg-black/90 rounded-md">
                            <Image
                              src="/insanity-wolf-template.webp"
                              alt="Sticker"
                              fill
                              className="object-contain p-1"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Phone Case 3D */}
                  {activePreview === "phone" && (
                    <div className="relative w-2/5 h-3/4">
                      <div
                        className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${selectedColor.phone} 0%, ${selectedColor.phone}dd 100%)`,
                          transform: "translateZ(15px)",
                        }}
                      >
                        {/* Camera cutout */}
                        <div className="absolute top-3 left-3 w-1/4 h-1/6 bg-black/50 rounded-xl" />
                        <div className="absolute inset-4 top-[20%]">
                          <MemeOverlay size="large" />
                        </div>
                      </div>
                      {/* Phone edge */}
                      <div
                        className="absolute inset-0 rounded-3xl border-4"
                        style={{
                          borderColor: selectedColor.phone,
                          transform: "translateZ(5px)",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Rotation controls */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <button
                    onClick={rotateLeft}
                    className="p-2 bg-black/50 border border-red-900/50 text-white/70 hover:text-white hover:bg-red-950/50 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={resetRotation}
                    className="p-2 bg-black/50 border border-red-900/50 text-white/70 hover:text-white hover:bg-red-950/50 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={rotateRight}
                    className="p-2 bg-black/50 border border-red-900/50 text-white/70 hover:text-white hover:bg-red-950/50 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Product label */}
                <div className="absolute top-4 left-4 font-mono text-xs text-white/50 uppercase">
                  {activeProduct?.name}
                </div>
              </div>

              {/* Color selector */}
              {activeProduct && activeProduct.colors.length > 1 && (
                <div className="mt-4 flex items-center gap-3">
                  <p className="font-mono text-xs text-white/50 uppercase">Color:</p>
                  <div className="flex gap-2">
                    {activeProduct.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor({ ...selectedColor, [activePreview]: color })}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          selectedColor[activePreview] === color
                            ? "border-red-500 scale-110"
                            : "border-white/20 hover:border-white/50"
                        }`}
                        style={{
                          background: color === "holographic"
                            ? "linear-gradient(135deg, #ff00ff, #00ffff, #ffff00)"
                            : color,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

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
                    className={`relative p-4 border transition-all text-left group ${
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
                    <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">{product.icon}</span>
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

      {/* Footer */}
      <footer className="border-t border-red-900/30 bg-black px-4 md:px-6 py-6 md:py-8">
        <div className="mx-auto max-w-5xl text-center font-mono text-xs text-red-400/40">
          <p>© 2009-2025 INSANITYWOLF.COM. This is satire. Don't actually follow this advice.</p>
        </div>
      </footer>
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
