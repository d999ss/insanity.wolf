"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Check, Package, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SiteNav } from "@/components/site-nav"

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [orderNumber, setOrderNumber] = useState("")

  useEffect(() => {
    // Generate order number from session ID
    if (sessionId) {
      setOrderNumber(`IW-${sessionId.slice(-8).toUpperCase()}`)
    }
    // Clear cart on successful order
    localStorage.removeItem("insanity-cart")
    localStorage.removeItem("insanity-meme-image")
  }, [sessionId])

  return (
    <div className="min-h-screen bg-black text-foreground">
      <SiteNav />
      <main className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-2xl text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-green-500/20 border-2 border-green-500 rounded-full flex items-center justify-center animate-pulse">
              <Check className="w-12 h-12 text-green-500" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
            ORDER CONFIRMED
          </h1>
          <p className="text-xl text-red-400 mb-2">
            Your insanity is being printed.
          </p>

          {/* Order Number */}
          {orderNumber && (
            <div className="inline-block bg-red-950/30 border border-red-900/50 px-6 py-3 mt-4 mb-8">
              <span className="text-red-400/60 text-sm">Order Number</span>
              <p className="text-white font-mono text-xl font-bold">{orderNumber}</p>
            </div>
          )}

          {/* Info Cards */}
          <div className="grid gap-4 md:grid-cols-2 mt-8 text-left">
            <div className="border border-red-900/30 bg-red-950/10 p-6">
              <Mail className="h-6 w-6 text-red-500 mb-3" />
              <h3 className="font-bold text-white uppercase mb-2">Confirmation Email</h3>
              <p className="text-sm text-red-300/70">
                Check your inbox for order details and tracking information.
              </p>
            </div>
            <div className="border border-red-900/30 bg-red-950/10 p-6">
              <Package className="h-6 w-6 text-red-500 mb-3" />
              <h3 className="font-bold text-white uppercase mb-2">Shipping</h3>
              <p className="text-sm text-red-300/70">
                Your order will ship within 3-5 business days. Tracking sent via email.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 space-y-4">
            <Link href="/create">
              <Button className="h-14 px-8 font-black uppercase bg-red-600 hover:bg-red-500">
                CREATE ANOTHER MEME <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-red-400/50 text-sm">
              Share your insanity with the world
            </p>
          </div>

          {/* Wolf */}
          <div className="mt-16 opacity-30">
            <img
              src="/wolf-logo.png"
              alt="Insanity Wolf"
              className="w-32 h-32 mx-auto"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="text-red-500 font-bold uppercase">Loading...</div></div>}>
      <SuccessContent />
    </Suspense>
  )
}
