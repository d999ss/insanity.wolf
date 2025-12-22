"use client"

import { useState, useEffect } from "react"
import { X, Flame, Mail, Loader2 } from "lucide-react"

export function EmailCapture() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  useEffect(() => {
    // Check if already subscribed or dismissed
    const dismissed = localStorage.getItem("email-popup-dismissed")
    const subscribed = localStorage.getItem("email-subscribed")
    if (dismissed || subscribed) return

    // Show after 15 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 15000)

    // Or show on scroll (50% of page)
    const handleScroll = () => {
      if (window.scrollY > document.body.scrollHeight * 0.5) {
        setIsVisible(true)
        window.removeEventListener("scroll", handleScroll)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("email-popup-dismissed", "true")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === "loading") return

    setStatus("loading")

    // Simulate API call - replace with actual email service
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In production, send to your email service here
      console.log("Email captured:", email)

      setStatus("success")
      localStorage.setItem("email-subscribed", "true")

      // Close after success message
      setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    } catch {
      setStatus("error")
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-black border-2 border-red-500 p-6 shadow-2xl shadow-red-500/30 animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-red-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "success" ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 mb-4">
              <Flame className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-black uppercase text-white mb-2" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              YOU'RE IN!
            </h3>
            <p className="text-red-300/70">
              Get ready for maximum chaos in your inbox.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-red-600 px-3 py-1 text-xs font-bold uppercase mb-4">
                <Flame className="h-3 w-3 animate-pulse" />
                <span>EXCLUSIVE CHAOS</span>
              </div>
              <h3 className="text-2xl font-black uppercase text-white mb-2" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                JOIN THE PACK
              </h3>
              <p className="text-red-300/70 text-sm">
                Get new meme drops, merch launches & exclusive chaos delivered to your inbox.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-400/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full h-12 pl-10 pr-4 bg-red-950/30 border border-red-900/50 text-white placeholder:text-red-400/40 focus:outline-none focus:border-red-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-12 bg-red-600 hover:bg-red-500 disabled:opacity-70 text-white font-bold uppercase flex items-center justify-center gap-2 transition-colors"
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                {status === "loading" ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Flame className="h-5 w-5" />
                    UNLEASH THE CHAOS
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-xs text-center">Something went wrong. Try again!</p>
              )}
            </form>

            {/* Footer */}
            <p className="text-center text-red-400/40 text-[10px] mt-4">
              No spam. Only chaos. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
