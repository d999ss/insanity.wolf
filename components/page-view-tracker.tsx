"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function PageViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Increment page view count on each navigation
    const currentViews = parseInt(sessionStorage.getItem("insanity-page-views") || "0")
    sessionStorage.setItem("insanity-page-views", String(currentViews + 1))
  }, [pathname])

  return null
}
