"use client"

import { useState, useEffect, ReactNode } from "react"

const headlines = [
  { top: "DONATE BLOOD", bottom: "ALL OF IT!" },
  { top: "WAY TO A WOMAN'S HEART?", bottom: "THROUGH HER RIBCAGE!" },
  { top: "FEED THE HOMELESS", bottom: "TO THE HOMELESS" },
]

interface HeroHeadlineProps {
  children?: ReactNode
}

export function HeroHeadline({ children }: HeroHeadlineProps) {
  const [currentHeadline, setCurrentHeadline] = useState(headlines[0])
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setCurrentHeadline(headlines[Math.floor(Math.random() * headlines.length)])

    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentHeadline(prev => {
          let newHeadline
          do {
            newHeadline = headlines[Math.floor(Math.random() * headlines.length)]
          } while (newHeadline.top === prev.top && headlines.length > 1)
          return newHeadline
        })
        setIsAnimating(false)
      }, 300)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* TOP TEXT */}
      <div className="text-center">
        <h1
          className={`text-4xl font-black uppercase leading-none tracking-tight text-white md:text-6xl lg:text-8xl xl:text-9xl transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            textShadow: '-4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000'
          }}
        >
          {currentHeadline.top}
        </h1>
      </div>

      {/* MIDDLE - Children (buttons) */}
      {children}

      {/* BOTTOM TEXT */}
      <div className="text-center">
        <h2
          className={`text-4xl font-black uppercase leading-none tracking-tight text-white md:text-6xl lg:text-8xl xl:text-9xl transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            textShadow: '-4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000'
          }}
        >
          {currentHeadline.bottom}
        </h2>
      </div>
    </>
  )
}
