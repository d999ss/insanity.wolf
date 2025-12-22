"use client"

import { useState, useEffect } from "react"
import { Users, Copy, Check, Gift } from "lucide-react"

export function ReferralWidget() {
  const [referralCode, setReferralCode] = useState("")
  const [referralCount, setReferralCount] = useState(0)
  const [copied, setCopied] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Generate or retrieve referral code
    let code = localStorage.getItem("insanity-referral-code")
    if (!code) {
      code = `WOLF${Math.random().toString(36).substring(2, 8).toUpperCase()}`
      localStorage.setItem("insanity-referral-code", code)
    }
    setReferralCode(code)

    // Get referral count (simulated with random increment over time)
    const storedCount = parseInt(localStorage.getItem("insanity-referral-count") || "0", 10)
    const lastUpdate = localStorage.getItem("insanity-referral-last-update")
    const now = Date.now()

    // Simulate referrals over time (1-3 every hour)
    if (lastUpdate) {
      const hoursPassed = (now - parseInt(lastUpdate, 10)) / (1000 * 60 * 60)
      if (hoursPassed >= 1) {
        const newReferrals = Math.floor(hoursPassed * (Math.random() * 2 + 1))
        const newCount = storedCount + newReferrals
        localStorage.setItem("insanity-referral-count", newCount.toString())
        localStorage.setItem("insanity-referral-last-update", now.toString())
        setReferralCount(newCount)
      } else {
        setReferralCount(storedCount)
      }
    } else {
      // First time - start with 0
      localStorage.setItem("insanity-referral-last-update", now.toString())
      setReferralCount(storedCount)
    }

    // Check if user came from a referral
    const urlParams = new URLSearchParams(window.location.search)
    const refCode = urlParams.get("ref")
    if (refCode && refCode !== code) {
      localStorage.setItem("insanity-referred-by", refCode)
    }
  }, [])

  const referralLink = `insanitywolf.com?ref=${referralCode}`

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${referralLink}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = (platform: string) => {
    const text = encodeURIComponent(`Join me in creating unhinged Insanity Wolf memes! Use my link for exclusive chaos: insanitywolf.com?ref=${referralCode} 🐺`)
    const url = encodeURIComponent(`https://insanitywolf.com?ref=${referralCode}`)

    if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank")
    } else if (platform === "reddit") {
      window.open(`https://reddit.com/submit?url=${url}&title=${encodeURIComponent("Join the Insanity Wolf pack!")}`, "_blank")
    }
  }

  return (
    <div className="fixed bottom-4 left-4 z-40">
      {isExpanded ? (
        <div className="bg-black border-2 border-purple-500 p-4 shadow-xl shadow-purple-500/20 w-72 animate-in slide-in-from-bottom">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-purple-400 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 bg-purple-600 flex items-center justify-center">
              <Gift className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm uppercase">Wolf Pack Referrals</h3>
              <p className="text-purple-300/70 text-xs">Spread the insanity!</p>
            </div>
          </div>

          <div className="bg-purple-950/30 border border-purple-900/50 p-3 mb-3">
            <p className="text-purple-300/60 text-xs uppercase mb-1">Your Referral Link</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 text-white text-xs truncate">{referralLink}</code>
              <button
                onClick={handleCopy}
                className={`p-1.5 transition-colors ${copied ? "bg-green-600 text-white" : "bg-purple-950 text-purple-400 hover:text-white"}`}
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-purple-400" />
              <span className="text-white text-sm font-bold">{referralCount}</span>
              <span className="text-purple-300/60 text-xs">wolves recruited</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleShare("twitter")}
              className="flex items-center justify-center gap-1.5 bg-black border border-white/20 text-white text-xs py-2 hover:bg-white/10 transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Share
            </button>
            <button
              onClick={() => handleShare("reddit")}
              className="flex items-center justify-center gap-1.5 bg-[#FF4500] text-white text-xs py-2 hover:bg-[#FF5722] transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701z"/></svg>
              Share
            </button>
          </div>

          {referralCount >= 5 && (
            <div className="mt-3 p-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 text-center">
              <p className="text-yellow-400 text-xs font-bold">
                🎉 LEGEND STATUS! {referralCount}+ wolves recruited!
              </p>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 shadow-lg shadow-purple-500/30 transition-all hover:scale-105"
        >
          <Users className="h-4 w-4" />
          <span className="font-bold text-sm uppercase">
            {referralCount > 0 ? `${referralCount} Wolves` : "Refer Friends"}
          </span>
        </button>
      )}
    </div>
  )
}
