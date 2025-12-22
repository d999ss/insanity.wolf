"use client"

import { useState, useEffect } from "react"
import { X, Download, Smartphone } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export function PWAPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if already dismissed
    const dismissed = localStorage.getItem("pwa-prompt-dismissed")
    if (dismissed) return

    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches

    if (isIOSDevice && !isStandalone) {
      setIsIOS(true)
      // Show iOS prompt after 30 seconds
      setTimeout(() => setIsVisible(true), 30000)
      return
    }

    // Listen for beforeinstallprompt event (Chrome/Android)
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      // Show prompt after 30 seconds
      setTimeout(() => setIsVisible(true), 30000)
    }

    window.addEventListener("beforeinstallprompt", handler)
    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setIsVisible(false)
    }
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("pwa-prompt-dismissed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 animate-in slide-in-from-bottom duration-500">
      <div className="bg-black border-2 border-red-500 p-4 shadow-xl shadow-red-500/20">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-red-400/50 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-12 h-12 bg-red-600 flex items-center justify-center">
            <Smartphone className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-sm uppercase mb-1">
              ADD TO HOME SCREEN
            </h3>
            <p className="text-red-300/70 text-xs mb-3">
              Install Insanity Wolf for quick access to meme creation!
            </p>

            {isIOS ? (
              <div className="text-red-400/80 text-xs">
                <p className="mb-1">Tap <span className="inline-block bg-white/10 px-1 rounded">Share</span> then</p>
                <p>"Add to Home Screen"</p>
              </div>
            ) : (
              <button
                onClick={handleInstall}
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase py-2 transition-colors"
              >
                <Download className="h-4 w-4" />
                INSTALL APP
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
