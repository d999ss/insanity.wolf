"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, Trash2, ArrowLeft, CreditCard, Lock, Truck, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SiteNav } from "@/components/site-nav"

interface CartItem {
  id: string
  product: { id: string; name: string; basePrice: number; icon: string }
  size: string
  color: { name: string; hex: string }
  quantity: number
  image: string
  price: number
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const cart = localStorage.getItem("insanity-cart")
    if (cart) setCartItems(JSON.parse(cart))
  }, [])

  const updateCart = (items: CartItem[]) => {
    setCartItems(items)
    localStorage.setItem("insanity-cart", JSON.stringify(items))
  }

  const removeItem = (id: string) => updateCart(cartItems.filter(item => item.id !== id))

  const updateQuantity = (id: string, newQty: number) => {
    if (newQty < 1) return
    updateCart(cartItems.map(item => item.id === id ? { ...item, quantity: newQty } : item))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal >= 50 ? 0 : 5.99
  const total = subtotal + shipping

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const memeImage = localStorage.getItem("insanity-meme-image") || ""

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartItems,
          email,
          memeImage,
        }),
      })

      const data = await response.json()

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url
      } else {
        throw new Error(data.error || "Failed to create checkout")
      }
    } catch (error) {
      console.error("Checkout error:", error)
      alert("Something went wrong. Please try again.")
      setLoading(false)
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black text-foreground">
        <SiteNav />
        <main className="pt-24 pb-16 px-6">
          <div className="mx-auto max-w-2xl text-center py-20">
            <ShoppingCart className="h-16 w-16 text-red-500/50 mx-auto mb-6" />
            <h1 className="text-4xl font-black uppercase text-white mb-4">YOUR CART IS EMPTY</h1>
            <Link href="/create"><Button className="bg-red-600 hover:bg-red-500">CREATE A MEME</Button></Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-foreground">
      <SiteNav />
      <main className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <Link href="/merch" className="inline-flex items-center gap-2 text-red-400 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4" /><span className="text-sm font-bold uppercase">Continue Shopping</span>
            </Link>
            <h1 className="text-4xl font-black uppercase text-white">CHECKOUT</h1>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <div className="border border-red-900/30 bg-red-950/10 p-6">
                <h2 className="font-bold uppercase text-white mb-4">Your Items ({cartItems.length})</h2>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-red-900/20 pb-4 mb-4">
                    <div className="w-24 h-24 bg-gray-900 border border-red-900/30 flex items-center justify-center overflow-hidden">
                      {item.image ? <img src={item.image} alt="Meme" className="w-full h-full object-cover" /> : <span className="text-3xl">{item.product.icon}</span>}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white">{item.product.name}</h3>
                      <p className="text-xs text-red-400/60">{item.size} / {item.color.name}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-red-900/30">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-white">-</button>
                          <span className="px-3 py-1 text-white">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-white">+</button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-white"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-white">${(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })).format(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-red-900/30 bg-red-950/10 p-6">
                <h2 className="font-bold uppercase text-white mb-4"><Truck className="h-4 w-4 text-red-500 inline mr-2" />Shipping</h2>
                <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-12 px-4 bg-black/50 border border-red-900/30 text-white" />
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24 border-2 border-red-500/50 bg-red-950/20 p-6">
                <h2 className="font-bold uppercase text-white mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between"><span className="text-red-300/70">Subtotal</span><span className="text-white">{(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })).format(subtotal)}</span></div>
                  <div className="flex justify-between"><span className="text-red-300/70">Shipping</span><span className="text-white">{shipping === 0 ? "FREE" : (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })).format(shipping)}</span></div>
                  <div className="border-t border-red-900/30 pt-3 flex justify-between"><span className="font-bold text-white">Total</span><span className="font-bold text-white text-xl">{(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })).format(total)}</span></div>
                </div>
                <Button onClick={handleCheckout} disabled={loading || !email} className="w-full h-14 font-black uppercase bg-red-600 hover:bg-red-500">
                  {loading ? "PROCESSING..." : <><CreditCard className="h-5 w-5 mr-2" />PAY NOW</>}
                </Button>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-red-400/60"><Lock className="h-3 w-3" />Secure checkout</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
