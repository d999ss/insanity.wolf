"use client"

import { useState, useEffect, ReactNode } from "react"

const headlines = [
  { top: "YOU WANT ADVICE?!", bottom: "I'LL GIVE YOU ADVICE!" },
  { top: "PROBLEM?", bottom: "ELIMINATE THE PROBLEM!" },
  { top: "CAN'T SLEEP?", bottom: "STAY AWAKE FOREVER!" },
  { top: "FEELING SAD?", bottom: "DESTROY EVERYTHING!" },
  { top: "LIFE GOT YOU DOWN?", bottom: "BURN IT ALL DOWN!" },
  { top: "BOSS MAKING YOU MAD?", bottom: "BECOME THE BOSS!" },
  { top: "TRAFFIC MAKING YOU LATE?", bottom: "DRIVE THROUGH IT!" },
  { top: "WANT A SOLUTION?", bottom: "HERE'S YOUR SOLUTION!" },
  { top: "GOT A HEADACHE?", bottom: "DECAPITATION!" },
  { top: "NEIGHBORS TOO LOUD?", bottom: "NO MORE NEIGHBORS!" },
  { top: "MONDAY MORNING?", bottom: "BURN THE CALENDAR!" },
  { top: "PHONE WON'T STOP?", bottom: "INTO THE VOLCANO!" },
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
            textShadow: '-4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000, 0 0 30px rgba(255,0,0,0.5), 0 0 60px rgba(255,0,0,0.3)'
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
            textShadow: '-4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000, 0 0 30px rgba(255,0,0,0.5), 0 0 60px rgba(255,0,0,0.3)'
          }}
        >
          {currentHeadline.bottom}
        </h2>
      </div>
    </>
  )
}
