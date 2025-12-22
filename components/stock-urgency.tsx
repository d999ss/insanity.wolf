"use client"

import { useState, useEffect } from "react"
import { AlertTriangle, TrendingUp, Clock } from "lucide-react"

interface StockUrgencyProps {
  productName: string
  baseStock?: number
}

export function StockUrgency({ productName, baseStock = 15 }: StockUrgencyProps) {
  const [stock, setStock] = useState(baseStock)
  const [recentBuyers, setRecentBuyers] = useState(0)
  const [isLow, setIsLow] = useState(false)

  useEffect(() => {
    // Generate consistent stock based on product name (so it doesn't change on every render)
    const hash = productName.split("").reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0)
    const initialStock = Math.abs(hash % 12) + 3 // 3-14 in stock
    setStock(initialStock)
    setIsLow(initialStock <= 5)

    // Fake recent buyers
    setRecentBuyers(Math.abs(hash % 8) + 2) // 2-9 bought recently

    // Occasionally decrease stock
    const decreaseInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setStock(prev => Math.max(1, prev - 1))
      }
    }, 30000) // Check every 30 seconds

    return () => clearInterval(decreaseInterval)
  }, [productName])

  return (
    <div className="space-y-2">
      {/* Stock count */}
      <div className={`flex items-center gap-2 text-sm ${isLow ? "text-red-400" : "text-yellow-400"}`}>
        {isLow ? (
          <AlertTriangle className="h-4 w-4 animate-pulse" />
        ) : (
          <TrendingUp className="h-4 w-4" />
        )}
        <span className="font-bold">
          {isLow ? `Only ${stock} left!` : `${stock} in stock`}
        </span>
        {isLow && (
          <span className="text-red-400/70 text-xs">– Selling fast!</span>
        )}
      </div>

      {/* Recent buyers */}
      <div className="flex items-center gap-2 text-xs text-white/60">
        <Clock className="h-3 w-3" />
        <span>{recentBuyers} bought in the last 24 hours</span>
      </div>

      {/* Progress bar for stock */}
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-500 ${isLow ? "bg-red-500" : "bg-yellow-500"}`}
          style={{ width: `${(stock / baseStock) * 100}%` }}
        />
      </div>
    </div>
  )
}
