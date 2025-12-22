"use client"

import { useState, useEffect } from "react"
import { Bell, X, Zap } from "lucide-react"

export function NotificationPrompt() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if already prompted or notifications not supported
    if (!("Notification" in window)) return
    if (Notification.permission !== "default") return

    const prompted = localStorage.getItem("insanity-notif-prompted")
    if (prompted) return

    // Show after 120 seconds
    const timer = setTimeout(() => setIsVisible(true), 120000)
    return () => clearTimeout(timer)
  }, [])

  const handleAllow = async () => {
    try {
      const permission = await Notification.requestPermission()
      if (permission === "granted") {
        // Show a test notification
        new Notification("🐺 WOLF PACK ACTIVATED", {
          body: "You'll now get alerts when your memes go viral!",
          icon: "/apple-icon.png",
        })
      }
    } catch (err) {
      console.error("Notification error:", err)
    }
    localStorage.setItem("insanity-notif-prompted", "true")
    setIsVisible(false)
  }

  const handleDismiss = () => {
    localStorage.setItem("insanity-notif-prompted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[140] animate-in zoom-in-95 duration-300">
      <div className="bg-black border-2 border-blue-500 shadow-2xl shadow-blue-500/30 p-6 w-80">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-blue-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4 animate-pulse">
            <Bell className="h-8 w-8 text-white" />
          </div>

          <h3 className="text-xl font-black uppercase text-white mb-2" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            STAY IN THE PACK
          </h3>

          <p className="text-blue-300/70 text-sm mb-4">
            Get notified when your memes go viral, new challenges drop, and exclusive deals!
          </p>

          <div className="space-y-2">
            <button
              onClick={handleAllow}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase py-3 transition-colors"
            >
              <Zap className="h-4 w-4" />
              ENABLE NOTIFICATIONS
            </button>
            <button
              onClick={handleDismiss}
              className="w-full text-blue-400/60 hover:text-blue-400 text-xs uppercase py-2 transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 -z-10" onClick={handleDismiss} />
    </div>
  )
}
