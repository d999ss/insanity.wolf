"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { ShoppingCart, Check, Package, Flame, ArrowLeft, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SiteNav } from "@/components/site-nav"

const products = [
  {
    id: "tshirt",
    name: "T-SHIRT",
    basePrice: 29.99,
    icon: "T",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Red", hex: "#7f1d1d" },
      { name: "Navy", hex: "#1e3a5f" },
    ],
    description: "100% cotton, pre-shrunk. Printed with DTG for vibrant colors.",
  },
  {
    id: "hoodie",
    name: "HOODIE",
    basePrice: 54.99,
    icon: "H",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Gray", hex: "#374151" },
      { name: "Red", hex: "#7f1d1d" },
    ],
    description: "80/20 cotton-poly blend. Soft fleece interior. Kangaroo pocket.",
  },
  {
    id: "mug",
    name: "MUG",
    basePrice: 19.99,
    icon: "M",
    sizes: ["11oz", "15oz"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
    ],
    description: "Ceramic mug. Dishwasher & microwave safe. Wraparound print.",
  },
  {
    id: "poster",
    name: "POSTER",
    basePrice: 24.99,
    icon: "P",
    sizes: ["12x18", "18x24", "24x36"],
    colors: [
      { name: "Matte", hex: "#f5f5f5" },
      { name: "Glossy", hex: "#ffffff" },
    ],
    description: "Museum-quality poster. 200gsm paper. Vivid colors.",
  },
  {
    id: "stickers",
    name: "STICKERS",
    basePrice: 14.99,
    icon: "S",
    sizes: ["3 Pack", "5 Pack", "10 Pack"],
    colors: [
      { name: "Standard", hex: "#ffffff" },
    ],
    description: "Die-cut vinyl stickers. Waterproof. UV resistant.",
  },
  {
    id: "phonecase",
    name: "PHONE CASE",
    basePrice: 24.99,
    icon: "C",
    sizes: ["iPhone 14", "iPhone 15", "iPhone 16", "Samsung S24"],
    colors: [
      { name: "Clear", hex: "#f0f0f0" },
      { name: "Black", hex: "#000000" },
    ],
    description: "Impact-resistant case. Raised edges for screen protection.",
  },
]

function MerchBuilderContent() {
  const searchParams = useSearchParams()
  const [memeImage, setMemeImage] = useState<string | null>(null)
  const [mockupImage, setMockupImage] = useState<string | null>(null)
  const [mockupLoading, setMockupLoading] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [selectedSize, setSelectedSize] = useState(products[0].sizes[1])
  const [selectedColor, setSelectedColor] = useState(products[0].colors[0])
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])

  // Upload image and generate mockup
  const generateMockup = async (base64Image: string, productType: string) => {
    // Only generate mockups in production (blob storage required)
    if (typeof window !== "undefined" && window.location.hostname === "localhost") {
      return // Skip mockup generation locally
    }

    setMockupLoading(true)
    setMockupImage(null)
    try {
      // Upload image to get public URL
      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64Image }),
      })
      const uploadData = await uploadRes.json()

      if (!uploadData.url) {
        console.error("Upload failed:", uploadData)
        setMockupLoading(false)
        return
      }

      // Generate mockup with Printful
      const mockupRes = await fetch("/api/mockup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl: uploadData.url, productType }),
      })
      const mockupData = await mockupRes.json()

      if (mockupData.mockups && mockupData.mockups.length > 0) {
        setMockupImage(mockupData.mockups[0].url)
      }
    } catch (error) {
      console.error("Mockup generation error:", error)
    } finally {
      setMockupLoading(false)
    }
  }

  useEffect(() => {
    const imageParam = searchParams.get("image")
    if (imageParam) {
      setMemeImage(decodeURIComponent(imageParam))
    }
    const stored = localStorage.getItem("insanity-meme-image")
    if (stored && !imageParam) {
      setMemeImage(stored)
    }
    const cart = localStorage.getItem("insanity-cart")
    if (cart) {
      setCartItems(JSON.parse(cart))
    }
  }, [searchParams])

  // Generate mockup when meme or product changes
  useEffect(() => {
    if (memeImage && selectedProduct) {
      generateMockup(memeImage, selectedProduct.id)
    }
  }, [memeImage, selectedProduct.id])

  const handleProductChange = (product: typeof products[0]) => {
    setSelectedProduct(product)
    setSelectedSize(product.sizes[Math.min(1, product.sizes.length - 1)])
    setSelectedColor(product.colors[0])
  }

  const handleAddToCart = () => {
    const item = {
      id: selectedProduct.id + "-" + selectedSize + "-" + selectedColor.name + "-" + Date.now(),
      product: selectedProduct,
      size: selectedSize,
      color: selectedColor,
      quantity,
      image: memeImage,
      price: selectedProduct.basePrice,
    }
    const newCart = [...cartItems, item]
    setCartItems(newCart)
    localStorage.setItem("insanity-cart", JSON.stringify(newCart))
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const totalPrice = (selectedProduct.basePrice * quantity).toFixed(2)

  return (
    <div className="min-h-screen bg-black text-foreground">
      <SiteNav />
      <main className="pt-20 md:pt-24 pb-10 md:pb-16 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 md:mb-8">
            <Link href="/create" className="inline-flex items-center gap-2 text-red-400 hover:text-white transition-colors mb-4">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-bold uppercase">Back to Generator</span>
            </Link>
            <div className="flex items-center gap-3">
              <Flame className="h-6 w-6 md:h-8 md:w-8 text-red-500" />
              <h1 className="text-2xl md:text-4xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                CREATE YOUR MERCH
              </h1>
            </div>
            <p className="text-sm md:text-base text-red-300/70 mt-2">Put your meme on real products. Ships worldwide.</p>
          </div>

          <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
            <div className="order-1">
              <div className="sticky top-24">
                <div className="border-2 border-red-900/30 bg-gradient-to-br from-red-950/20 to-black p-4 md:p-8">
                  <div className="aspect-square relative flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
                    {mockupLoading ? (
                      <div className="flex flex-col items-center justify-center gap-4">
                        <div className="w-12 h-12 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin" />
                        <p className="text-red-400 font-mono text-sm uppercase">Generating mockup...</p>
                      </div>
                    ) : mockupImage ? (
                      <img src={mockupImage} alt="Product mockup" className="w-full h-full object-contain" />
                    ) : memeImage ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                          <span className="text-[180px] font-black text-white">{selectedProduct.icon}</span>
                        </div>
                        <div className="relative z-10 w-2/3 h-2/3 flex items-center justify-center">
                          <img src={memeImage} alt="Your meme" className="max-w-full max-h-full object-contain shadow-2xl" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-2/3 h-2/3 border-2 border-dashed border-red-500/50 flex items-center justify-center">
                        <div className="text-center p-4">
                          <p className="text-red-400 font-bold uppercase text-sm">No Meme Selected</p>
                          <p className="text-red-400/60 text-xs mt-1">Go back and create one first</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-red-400/60 uppercase">Preview</p>
                      <p className="font-bold text-white">{selectedProduct.name} - {selectedColor.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-red-400/60 uppercase">Size</p>
                      <p className="font-bold text-white">{selectedSize}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2 space-y-6">
              <div className="border border-red-900/30 bg-red-950/10 p-4 md:p-6">
                <h3 className="font-bold uppercase text-white mb-4 flex items-center gap-2">
                  <Package className="h-4 w-4 text-red-500" />
                  Product Type
                </h3>
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductChange(product)}
                      className={"p-3 md:p-4 border-2 transition-all text-center " + (selectedProduct.id === product.id ? "border-red-500 bg-red-950/30" : "border-red-900/30 hover:border-red-500/50")}
                    >
                      <span className="text-2xl md:text-3xl block mb-1 font-black text-red-500">{product.icon}</span>
                      <span className="text-[10px] md:text-xs font-bold uppercase text-white">{product.name}</span>
                      <span className="text-[10px] md:text-xs text-red-400 block">${product.basePrice}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border border-red-900/30 bg-red-950/10 p-4 md:p-6">
                <h3 className="font-bold uppercase text-white mb-4">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={"px-4 py-2 border-2 font-bold text-sm transition-all " + (selectedSize === size ? "border-red-500 bg-red-500 text-white" : "border-red-900/30 text-white hover:border-red-500/50")}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border border-red-900/30 bg-red-950/10 p-4 md:p-6">
                <h3 className="font-bold uppercase text-white mb-4">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={"relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 transition-all " + (selectedColor.name === color.name ? "border-red-500 ring-2 ring-red-500 ring-offset-2 ring-offset-black" : "border-red-900/30 hover:border-red-500/50")}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor.name === color.name && (
                        <Check className={"absolute inset-0 m-auto h-5 w-5 " + (color.hex === "#FFFFFF" || color.hex === "#f5f5f5" || color.hex === "#f0f0f0" ? "text-black" : "text-white")} />
                      )}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-red-400/60 mt-2">Selected: {selectedColor.name}</p>
              </div>

              <div className="border border-red-900/30 bg-red-950/10 p-4 md:p-6">
                <h3 className="font-bold uppercase text-white mb-4">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 border border-red-900/30 flex items-center justify-center hover:border-red-500 transition-colors">
                    <Minus className="h-4 w-4 text-white" />
                  </button>
                  <span className="text-2xl font-black text-white tabular-nums w-12 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border border-red-900/30 flex items-center justify-center hover:border-red-500 transition-colors">
                    <Plus className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>

              <div className="border border-red-900/30 bg-red-950/10 p-4 md:p-6">
                <h3 className="font-bold uppercase text-white mb-2">About This Product</h3>
                <p className="text-sm text-red-300/70">{selectedProduct.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase">
                  <span className="px-2 py-1 bg-red-950/50 text-red-400 border border-red-900/30">Free Shipping $50+</span>
                  <span className="px-2 py-1 bg-red-950/50 text-red-400 border border-red-900/30">30-Day Returns</span>
                  <span className="px-2 py-1 bg-red-950/50 text-red-400 border border-red-900/30">Ships in 3-5 Days</span>
                </div>
              </div>

              <div className="border-2 border-red-500/50 bg-red-950/20 p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-red-400/60 uppercase">Total</p>
                    <p className="text-3xl md:text-4xl font-black text-white">${totalPrice}</p>
                  </div>
                  {cartItems.length > 0 && (
                    <Link href="/checkout" className="text-sm text-red-400 hover:text-white transition-colors">
                      Cart ({cartItems.length})
                    </Link>
                  )}
                </div>
                <Button
                  onClick={handleAddToCart}
                  disabled={!memeImage}
                  className={"w-full h-12 md:h-14 font-black uppercase text-base md:text-lg gap-2 transition-all " + (addedToCart ? "bg-green-600 hover:bg-green-600" : "bg-red-600 hover:bg-red-500")}
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                >
                  {addedToCart ? (
                    <>
                      <Check className="h-5 w-5" />
                      ADDED TO CART
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-5 w-5" />
                      ADD TO CART
                    </>
                  )}
                </Button>
                {!memeImage && (
                  <p className="text-xs text-red-400 text-center mt-2">
                    <Link href="/create" className="underline hover:text-white">Create a meme first</Link> to add to merch
                  </p>
                )}
              </div>

              {cartItems.length > 0 && (
                <Link href="/checkout">
                  <Button className="w-full h-12 font-black uppercase gap-2 bg-white text-black hover:bg-gray-200" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                    CHECKOUT ({cartItems.length} {cartItems.length === 1 ? "ITEM" : "ITEMS"})
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
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
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-red-500 font-bold uppercase">Loading...</div></div>}>
      <MerchBuilderContent />
    </Suspense>
  )
}
