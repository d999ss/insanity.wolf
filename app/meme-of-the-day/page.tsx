"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Trophy, Share2, ArrowRight, Clock, Flame, Twitter, MessageCircle, Download } from "lucide-react"

const DAILY_MEMES = [
  { top: "WIFI IS DOWN", bottom: "DECLARE WAR ON ISP", votes: 15420 },
  { top: "BOSS SAYS WORK LATE", bottom: "BURN DOWN THE OFFICE", votes: 12850 },
  { top: "PIZZA ARRIVES COLD", bottom: "SUE ENTIRE COUNTRY OF ITALY", votes: 11200 },
  { top: "ALARM DIDN'T GO OFF", bottom: "BLAME TIMEZONE CONSPIRACY", votes: 9870 },
  { top: "COFFEE MACHINE BROKE", bottom: "SNORT THE GROUNDS", votes: 8540 },
  { top: "NEIGHBOR IS LOUD", bottom: "BE LOUDER AT 3AM", votes: 6100 },
  { top: "PHONE BATTERY AT 1%", bottom: "LIVE OFF THE GRID FOREVER", votes: 5400 },
]

export default function MemeOfTheDayPage() {
  const [todaysMeme, setTodaysMeme] = useState(DAILY_MEMES[0])
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const [previousMemes, setPreviousMemes] = useState(DAILY_MEMES.slice(1, 4))

  useEffect(() => {
    // Select meme based on date (deterministic)
    const today = new Date()
    const dayIndex = today.getDate() % DAILY_MEMES.length
    setTodaysMeme(DAILY_MEMES[dayIndex])
    
    // Set previous memes
    const prev = []
    for (let i = 1; i <= 3; i++) {
      const idx = (dayIndex - i + DAILY_MEMES.length) % DAILY_MEMES.length
      prev.push({ ...DAILY_MEMES[idx], daysAgo: i })
    }
    setPreviousMemes(prev)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const tomorrow = new Date(now)
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(0, 0, 0, 0)
      
      const diff = tomorrow.getTime() - now.getTime()
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      
      setCountdown({ hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleDownload = () => {
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
      ctx.font = "bold " + fontSize + "px Impact, 'Arial Black', sans-serif"

      ctx.strokeText(todaysMeme.top.toUpperCase(), canvas.width / 2, fontSize + 20)
      ctx.fillText(todaysMeme.top.toUpperCase(), canvas.width / 2, fontSize + 20)

      ctx.strokeText(todaysMeme.bottom.toUpperCase(), canvas.width / 2, canvas.height - 40)
      ctx.fillText(todaysMeme.bottom.toUpperCase(), canvas.width / 2, canvas.height - 40)

      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
      ctx.strokeStyle = "rgba(0, 0, 0, 0.5)"
      ctx.lineWidth = 2
      ctx.font = "bold 14px Arial, sans-serif"
      ctx.textAlign = "right"
      ctx.strokeText("insanitywolf.com", canvas.width - 10, canvas.height - 10)
      ctx.fillText("insanitywolf.com", canvas.width - 10, canvas.height - 10)

      const link = document.createElement("a")
      link.download = "meme-of-the-day.png"
      link.href = canvas.toDataURL()
      link.click()
    }
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://insanitywolf.com/meme-of-the-day"

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/50 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-black text-sm font-bold uppercase mb-4 animate-pulse">
              <Calendar className="h-5 w-5" />
              {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            </div>
            <h1
              className="text-4xl md:text-5xl font-black uppercase mb-4"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Meme of the <span className="text-orange-500">Day</span>
            </h1>
            <p className="text-white/70">
              The most insane meme chosen daily. Come back tomorrow for a new one!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Today's Meme */}
        <div className="relative mb-8">
          <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-orange-600 opacity-50 blur-lg" />
          <div className="relative border-4 border-orange-500">
            <div className="relative aspect-square bg-black">
              <Image
                src="/insanity-wolf-template.webp"
                alt="Meme of the Day"
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
                  {todaysMeme.top}
                </p>
                <p
                  className="text-center text-2xl md:text-4xl font-black uppercase text-white"
                  style={{
                    fontFamily: 'Impact, "Arial Black", sans-serif',
                    textShadow: "-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000",
                  }}
                >
                  {todaysMeme.bottom}
                </p>
              </div>
            </div>
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-orange-500 text-black font-bold text-sm">
              <Trophy className="h-4 w-4" />
              MEME OF THE DAY
            </div>
          </div>
        </div>

        {/* Stats & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-orange-400">
              <Flame className="h-5 w-5" />
              <span className="font-bold">{todaysMeme.votes.toLocaleString()} votes</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-4 py-2 text-sm transition-colors"
            >
              <Download className="h-4 w-4" />
              Download
            </button>
            <button
              onClick={() => {
                const text = encodeURIComponent("Check out today's Meme of the Day! #InsanityWolf #MemeOfTheDay")
                const url = encodeURIComponent(shareUrl)
                window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" + url, '_blank')
              }}
              className="flex items-center gap-2 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/40 border border-[#1DA1F2]/50 text-white font-bold uppercase px-4 py-2 text-sm transition-colors"
            >
              <Twitter className="h-4 w-4" />
              Tweet
            </button>
            <button
              onClick={() => {
                const title = encodeURIComponent("Meme of the Day: " + todaysMeme.top + " / " + todaysMeme.bottom)
                window.open("https://reddit.com/submit?url=" + encodeURIComponent(shareUrl) + "&title=" + title, '_blank')
              }}
              className="flex items-center gap-2 bg-[#FF4500]/20 hover:bg-[#FF4500]/40 border border-[#FF4500]/50 text-white font-bold uppercase px-4 py-2 text-sm transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Reddit
            </button>
          </div>
        </div>

        {/* Countdown */}
        <div className="bg-red-950/30 border border-red-900/30 p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-orange-400" />
            <span className="text-white/70 text-sm uppercase">Next meme in</span>
          </div>
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <p className="text-4xl font-black text-orange-400">{String(countdown.hours).padStart(2, '0')}</p>
              <p className="text-xs text-white/50 uppercase">Hours</p>
            </div>
            <span className="text-4xl font-black text-white/30">:</span>
            <div className="text-center">
              <p className="text-4xl font-black text-orange-400">{String(countdown.minutes).padStart(2, '0')}</p>
              <p className="text-xs text-white/50 uppercase">Minutes</p>
            </div>
            <span className="text-4xl font-black text-white/30">:</span>
            <div className="text-center">
              <p className="text-4xl font-black text-orange-400">{String(countdown.seconds).padStart(2, '0')}</p>
              <p className="text-xs text-white/50 uppercase">Seconds</p>
            </div>
          </div>
        </div>

        {/* Previous Memes */}
        <div className="mb-12">
          <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-white/50" />
            Previous Days
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {previousMemes.map((meme, index) => (
              <div key={index} className="bg-red-950/20 border border-red-900/30 p-4">
                <div className="relative aspect-square mb-3">
                  <Image
                    src="/insanity-wolf-template.webp"
                    alt="Previous meme"
                    fill
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-3">
                    <p className="text-center text-sm font-black uppercase text-white" style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
                      {meme.top}
                    </p>
                    <p className="text-center text-sm font-black uppercase text-white" style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
                      {meme.bottom}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-white/50 text-center">{meme.daysAgo} day{meme.daysAgo > 1 ? 's' : ''} ago</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <h2
            className="text-3xl font-black uppercase mb-4"
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            Create the <span className="text-orange-500">Next</span> Meme of the Day
          </h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            The best memes get featured as Meme of the Day. Create yours now and get immortalized!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black uppercase px-8 py-4 text-xl transition-all hover:scale-105"
          >
            CREATE YOUR MEME
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
