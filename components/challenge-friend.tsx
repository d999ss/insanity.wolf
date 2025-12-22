"use client"

import { useState } from "react"
import { Swords, Copy, Check, X } from "lucide-react"

interface ChallengeFriendProps {
  topText?: string
  bottomText?: string
}

export function ChallengeFriend({ topText, bottomText }: ChallengeFriendProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const challengeText = topText && bottomText
    ? `I challenge you to beat my Insanity Wolf meme: "${topText} / ${bottomText}" Can you do better? Make yours at insanitywolf.com`
    : `I challenge you to make a better Insanity Wolf meme than me! Think you're crazy enough? insanitywolf.com`

  const handleCopy = () => {
    navigator.clipboard.writeText(challengeText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareToX = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(challengeText)}`, '_blank')
  }

  const shareToReddit = () => {
    window.open(`https://reddit.com/submit?title=${encodeURIComponent("I challenge you to beat this Insanity Wolf meme")}&url=https://insanitywolf.com`, '_blank')
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/30 hover:text-yellow-300 transition-all font-mono text-xs uppercase"
      >
        <Swords className="h-4 w-4" />
        CHALLENGE A FRIEND
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80" onClick={() => setIsOpen(false)} />

          <div className="relative w-full max-w-md bg-black border-2 border-yellow-500 p-6 shadow-2xl shadow-yellow-500/20 animate-in zoom-in-95">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-yellow-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 border-2 border-yellow-500 mb-4">
                <Swords className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                MEME DUEL!
              </h3>
              <p className="text-yellow-300/70 text-sm mt-2">
                Challenge your friends to beat your meme!
              </p>
            </div>

            <div className="bg-yellow-950/30 border border-yellow-900/50 p-4 mb-4">
              <p className="text-yellow-300/80 text-sm">{challengeText}</p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={shareToX}
                className="flex items-center justify-center gap-2 bg-black border border-white/20 text-white p-3 hover:bg-white/10 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <button
                onClick={shareToReddit}
                className="flex items-center justify-center gap-2 bg-[#FF4500] text-white p-3 hover:bg-[#FF5722] transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701z"/>
                </svg>
              </button>
              <button
                onClick={handleCopy}
                className={`flex items-center justify-center gap-2 p-3 transition-colors ${
                  copied ? 'bg-green-600 text-white' : 'bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/30'
                }`}
              >
                {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
