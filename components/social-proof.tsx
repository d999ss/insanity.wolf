"use client"

import { useState, useEffect } from "react"
import { ShoppingBag, X } from "lucide-react"

const names = [
  "Alex", "Jordan", "Sam", "Taylor", "Casey", "Morgan", "Riley", "Quinn",
  "Blake", "Avery", "Charlie", "Dakota", "Emery", "Finley", "Gray", "Harper"
]

const locations = [
  "California", "New York", "Texas", "Florida", "London", "Berlin", "Tokyo",
  "Sydney", "Toronto", "Amsterdam", "Seoul", "Singapore", "Dubai", "Paris"
]

const products = [
  { name: "Monday Morning Tee", emoji: "👕" },
  { name: "Coffee Chaos Hoodie", emoji: "🧥" },
  { name: "Deadline Mug", emoji: "☕" },
  { name: "OG Wolf Poster", emoji: "🖼️" },
  { name: "Chaos Sticker Pack", emoji: "🎨" },
  { name: "Battery Phone Case", emoji: "📱" },
]

export function SocialProof() {
  const [notification, setNotification] = useState<{
    name: string
    location: string
    product: { name: string; emoji: string }
    timeAgo: string
  } | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const showNotification = () => {
      const name = names[Math.floor(Math.random() * names.length)]
      const location = locations[Math.floor(Math.random() * locations.length)]
      const product = products[Math.floor(Math.random() * products.length)]
      const minutes = Math.floor(Math.random() * 15) + 1

      setNotification({
        name,
        location,
        product,
        timeAgo: `${minutes} min ago`,
      })
      setIsVisible(true)

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }

    // Show first notification after 10 seconds
    const initialTimeout = setTimeout(showNotification, 10000)

    // Then show every 30-60 seconds
    const interval = setInterval(() => {
      const delay = Math.floor(Math.random() * 30000) + 30000
      setTimeout(showNotification, delay)
    }, 45000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  if (!isVisible || !notification) return null

  return (
    <div className="fixed bottom-24 left-6 z-40 animate-in slide-in-from-left-full duration-500 hidden md:block">
      <div className="bg-black/95 border border-red-900/50 p-4 shadow-xl max-w-xs relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-red-400/50 hover:text-white"
        >
          <X className="h-3 w-3" />
        </button>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-red-950/50 border border-red-900/30 flex items-center justify-center text-xl">
            {notification.product.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">
              <span className="text-red-400">{notification.name}</span> from{" "}
              <span className="text-red-400">{notification.location}</span>
            </p>
            <p className="text-red-300/70 text-xs mt-0.5">
              just bought <span className="font-semibold">{notification.product.name}</span>
            </p>
            <p className="text-red-400/50 text-[10px] mt-1">{notification.timeAgo}</p>
          </div>
        </div>

        <a
          href="/store"
          className="mt-3 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase py-2 transition-colors"
        >
          <ShoppingBag className="h-3 w-3" />
          VIEW STORE
        </a>
      </div>
    </div>
  )
}
