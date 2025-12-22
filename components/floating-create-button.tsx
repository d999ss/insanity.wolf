"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Flame } from "lucide-react"
import { usePathname } from "next/navigation"

export function FloatingCreateButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPulsing, setIsPulsing] = useState(false)
  const pathname = usePathname()

  // Don't show on create page
  const isCreatePage = pathname === "/" || pathname === "/create"

  useEffect(() => {
    if (isCreatePage) return

    // Show after scrolling 300px
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    // Pulse every 10 seconds
    const pulseInterval = setInterval(() => {
      setIsPulsing(true)
      setTimeout(() => setIsPulsing(false), 1000)
    }, 10000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(pulseInterval)
    }
  }, [isCreatePage])

  if (isCreatePage || !isVisible) return null

  return (
    <Link
      href="/"
      className={`fixed bottom-24 right-4 md:right-6 z-40 flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold uppercase px-4 py-3 shadow-lg shadow-red-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-red-500/40 ${
        isPulsing ? "animate-bounce" : ""
      }`}
      style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
    >
      <Flame className="h-5 w-5" />
      <span className="hidden sm:inline">MAKE A MEME</span>
      <span className="sm:hidden">CREATE</span>
    </Link>
  )
}
