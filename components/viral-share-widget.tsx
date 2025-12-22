"use client"

import { useState } from "react"
import { Share2, X, MessageCircle, Send, Copy, Check } from "lucide-react"

export function ViralShareWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = "https://insanitywolf.com"
  const shareText = "This Insanity Wolf meme generator is absolutely unhinged. I can't stop making memes."

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareLinks = [
    {
      name: "X / Twitter",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: "bg-black hover:bg-gray-900",
    },
    {
      name: "Reddit",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249z"/>
        </svg>
      ),
      url: `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent("This meme generator is absolutely unhinged")}`,
      color: "bg-[#FF4500] hover:bg-[#FF5722]",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-5 w-5" />,
      url: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      color: "bg-[#25D366] hover:bg-[#128C7E]",
    },
    {
      name: "Telegram",
      icon: <Send className="h-5 w-5" />,
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: "bg-[#0088cc] hover:bg-[#0077b5]",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Share options panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-64 bg-black border-2 border-red-500/50 p-4 shadow-xl shadow-red-500/20 animate-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold uppercase text-white">SPREAD THE CHAOS</span>
            <button onClick={() => setIsOpen(false)} className="text-red-400 hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} text-white p-3 flex items-center justify-center gap-2 transition-all hover:scale-105`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 bg-red-950/50 border border-red-900/50 text-red-400 hover:bg-red-950 hover:text-white p-2 transition-colors"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span className="text-xs uppercase">{copied ? "COPIED!" : "COPY LINK"}</span>
          </button>
        </div>
      )}

      {/* Main share button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
          isOpen
            ? "bg-red-600 rotate-45"
            : "bg-red-600 hover:bg-red-500 hover:scale-110 animate-pulse"
        }`}
      >
        <Share2 className={`h-6 w-6 text-white transition-transform ${isOpen ? "-rotate-45" : ""}`} />

        {/* Notification badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-bold text-black">
            !
          </span>
        )}
      </button>
    </div>
  )
}
