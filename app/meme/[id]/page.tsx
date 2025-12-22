"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Share2, Download, Flame, Users, Copy, Check, Twitter, MessageCircle } from "lucide-react"

export default function MemePage() {
  const params = useParams()
  const memeId = params.id as string
  const [memeData, setMemeData] = useState<{ top: string; bottom: string; extreme?: boolean } | null>(null)
  const [copied, setCopied] = useState(false)
  const [stats, setStats] = useState({ views: 0, shares: 0 })

  useEffect(() => {
    // Decode meme data from ID (base64 encoded JSON)
    try {
      const decoded = atob(memeId)
      const data = JSON.parse(decoded)
      setMemeData(data)
    } catch {
      // Invalid meme ID
      setMemeData(null)
    }

    // Fake stats
    setStats({
      views: Math.floor(Math.random() * 5000) + 500,
      shares: Math.floor(Math.random() * 200) + 50,
    })
  }, [memeId])

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    if (!memeData) return

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new window.Image()
    img.crossOrigin = "anonymous"
    img.src = "/insanity-wolf-template.webp"

    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)

      ctx.fillStyle = "white"
      ctx.strokeStyle = "black"
      ctx.lineWidth = 4
      ctx.textAlign = "center"
      const fontSize = Math.floor(canvas.width * 0.08)
      ctx.font = `bold ${fontSize}px Impact, 'Arial Black', sans-serif`

      const maxWidth = canvas.width - 120

      if (memeData.top) {
        ctx.strokeText(memeData.top.toUpperCase(), canvas.width / 2, fontSize + 20)
        ctx.fillText(memeData.top.toUpperCase(), canvas.width / 2, fontSize + 20)
      }

      if (memeData.bottom) {
        ctx.strokeText(memeData.bottom.toUpperCase(), canvas.width / 2, canvas.height - 40)
        ctx.fillText(memeData.bottom.toUpperCase(), canvas.width / 2, canvas.height - 40)
      }

      // Watermark
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
      ctx.strokeStyle = "rgba(0, 0, 0, 0.5)"
      ctx.lineWidth = 2
      ctx.font = "bold 14px Arial, sans-serif"
      ctx.textAlign = "right"
      ctx.strokeText("insanitywolf.com", canvas.width - 10, canvas.height - 10)
      ctx.fillText("insanitywolf.com", canvas.width - 10, canvas.height - 10)

      const link = document.createElement("a")
      link.download = "insanity-wolf-meme.png"
      link.href = canvas.toDataURL()
      link.click()
    }
  }

  if (!memeData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-black uppercase mb-4">Meme Not Found</h1>
          <p className="text-white/70 mb-8">This meme has been lost to the void...</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-6 py-3 transition-colors"
          >
            CREATE YOUR OWN
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {stats.views.toLocaleString()} views
            </span>
            <span className="flex items-center gap-1">
              <Share2 className="h-4 w-4" />
              {stats.shares} shares
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4 text-orange-500" />
            <span className="text-orange-500 text-sm font-bold">TRENDING</span>
          </div>
        </div>

        {/* Meme Display */}
        <div className="relative border border-red-900/30 mb-8">
          <div className="relative aspect-square bg-black">
            <Image
              src="/insanity-wolf-template.webp"
              alt="Insanity Wolf Meme"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <p
                className="text-center text-2xl md:text-4xl font-black uppercase text-white"
                style={{
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  textShadow: "-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000",
                }}
              >
                {memeData.top}
              </p>
              <p
                className="text-center text-2xl md:text-4xl font-black uppercase text-white"
                style={{
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  textShadow: "-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000",
                }}
              >
                {memeData.bottom}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-4 py-3 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download
          </button>
          <button
            onClick={handleCopyLink}
            className={`flex items-center justify-center gap-2 font-bold uppercase px-4 py-3 transition-colors ${
              copied ? "bg-green-600 text-white" : "bg-white/10 hover:bg-white/20 text-white"
            }`}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy Link"}
          </button>
          <button
            onClick={() => {
              const text = encodeURIComponent(`${memeData.top} / ${memeData.bottom} 🐺 #InsanityWolf`)
              const url = encodeURIComponent(shareUrl)
              window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
            }}
            className="flex items-center justify-center gap-2 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/40 border border-[#1DA1F2]/50 text-white font-bold uppercase px-4 py-3 transition-colors"
          >
            <Twitter className="h-4 w-4" />
            Tweet
          </button>
          <button
            onClick={() => {
              const title = encodeURIComponent(`${memeData.top} / ${memeData.bottom}`)
              window.open(`https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${title}`, '_blank')
            }}
            className="flex items-center justify-center gap-2 bg-[#FF4500]/20 hover:bg-[#FF4500]/40 border border-[#FF4500]/50 text-white font-bold uppercase px-4 py-3 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Reddit
          </button>
        </div>

        {/* CREATE YOUR OWN CTA - The money maker */}
        <div className="relative overflow-hidden border-2 border-yellow-500 bg-gradient-to-r from-red-950/50 to-orange-950/50 p-8 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 animate-pulse" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 text-black text-xs font-bold uppercase mb-4">
              <Flame className="h-4 w-4" />
              YOUR TURN
            </div>
            <h2
              className="text-3xl md:text-4xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Think You Can Do <span className="text-red-500">Better</span>?
            </h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              This meme got {stats.views.toLocaleString()} views. Create your own Insanity Wolf
              and show the internet what chaos really looks like.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-8 py-4 text-xl transition-all hover:scale-105 animate-pulse"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              CREATE YOUR OWN MEME
              <ArrowRight className="h-6 w-6" />
            </Link>
            <p className="text-white/50 text-sm mt-4">
              Free. No signup. Pure chaos.
            </p>
          </div>
        </div>

        {/* Reply Chain Teaser */}
        <div className="mt-8 border border-red-900/30 p-6">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-red-400" />
            Reply to this meme
          </h3>
          <p className="text-white/70 text-sm mb-4">
            Got a better response? Create a reply meme and start a chain!
          </p>
          <Link
            href={`/?reply=${encodeURIComponent(memeData.top)}`}
            className="inline-flex items-center gap-2 bg-red-950/50 hover:bg-red-950 border border-red-900/30 text-white font-bold uppercase px-4 py-2 text-sm transition-colors"
          >
            REPLY WITH YOUR OWN
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
