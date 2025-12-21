"use client"

import { useState, useEffect } from "react"
import { Eye } from "lucide-react"

export function PageViewCounter() {
  const [views, setViews] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const incrementViews = async () => {
      try {
        // Use countapi.xyz for simple view counting
        const response = await fetch('https://api.countapi.xyz/hit/insanitywolf.com/visits')
        const data = await response.json()
        setViews(data.value)
      } catch (error) {
        // Fallback to localStorage if API fails
        const stored = localStorage.getItem('insanity-wolf-views')
        const currentViews = stored ? parseInt(stored, 10) : 0
        const newViews = currentViews + 1
        localStorage.setItem('insanity-wolf-views', newViews.toString())
        setViews(newViews + 50000) // Add base views for appearance
      } finally {
        setLoading(false)
      }
    }

    incrementViews()
  }, [])

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toLocaleString()
  }

  return (
    <div className="bg-black p-6 md:p-12 text-center">
      <div
        className="mb-2 md:mb-4 font-sans text-5xl md:text-7xl font-black text-red-500"
        style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
      >
        {loading ? (
          <span className="animate-pulse">...</span>
        ) : views ? (
          formatNumber(views)
        ) : (
          "???"
        )}
      </div>
      <div className="mb-1 md:mb-2 text-sm font-bold uppercase tracking-widest text-red-400 flex items-center justify-center gap-2">
        <Eye className="h-4 w-4" />
        <span>Page Views</span>
      </div>
      <p className="text-xs md:text-sm text-red-300/50">Souls who witnessed the chaos</p>
    </div>
  )
}
