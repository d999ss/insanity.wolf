"use client"

import { Button } from "@/components/ui/button"
import { Share2, Twitter, Facebook, Link2, Check } from "lucide-react"
import { useState } from "react"

export function ShareButton({ title, text }: { title: string; text: string }) {
  const [copied, setCopied] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const shareData = {
    title: title,
    text: text,
    url: typeof window !== "undefined" ? window.location.href : "",
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      setShowMenu(!showMenu)
    }
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareData.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.log("Failed to copy:", err)
    }
  }

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareData.url)}`
    window.open(url, "_blank", "width=550,height=420")
  }

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`
    window.open(url, "_blank", "width=550,height=420")
  }

  return (
    <div className="relative">
      <Button onClick={handleShare} variant="outline" size="sm" className="gap-2 bg-transparent">
        <Share2 className="h-4 w-4" />
        Share
      </Button>

      {showMenu && (
        <div className="absolute right-0 top-full z-50 mt-2 flex flex-col gap-2 rounded-lg border border-border bg-card p-2 shadow-xl">
          <Button onClick={shareToTwitter} variant="ghost" size="sm" className="justify-start gap-2">
            <Twitter className="h-4 w-4" />
            Twitter
          </Button>
          <Button onClick={shareToFacebook} variant="ghost" size="sm" className="justify-start gap-2">
            <Facebook className="h-4 w-4" />
            Facebook
          </Button>
          <Button onClick={copyLink} variant="ghost" size="sm" className="justify-start gap-2">
            {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy Link"}
          </Button>
        </div>
      )}
    </div>
  )
}
