"use client"

import { useState, useEffect } from "react"

export function WolfEyesCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [leftEye, setLeftEye] = useState({ x: 0, y: 0 })
  const [rightEye, setRightEye] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    // Calculate eye positions based on mouse
    const eyeRadius = 8
    const leftEyeCenter = { x: window.innerWidth - 80, y: 120 }
    const rightEyeCenter = { x: window.innerWidth - 50, y: 120 }

    const calcEyePos = (center: { x: number; y: number }) => {
      const dx = mousePos.x - center.x
      const dy = mousePos.y - center.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const maxMove = eyeRadius

      if (distance < maxMove) {
        return { x: dx, y: dy }
      }

      return {
        x: (dx / distance) * maxMove,
        y: (dy / distance) * maxMove,
      }
    }

    setLeftEye(calcEyePos(leftEyeCenter))
    setRightEye(calcEyePos(rightEyeCenter))
  }, [mousePos])

  return (
    <div className="fixed top-24 right-4 z-50 hidden md:block">
      <div className="relative">
        {/* Wolf silhouette */}
        <div className="text-6xl filter drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
          🐺
        </div>

        {/* Glowing eyes overlay */}
        <div className="absolute top-[18px] left-[12px] flex gap-[6px]">
          {/* Left eye */}
          <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center overflow-hidden border border-red-500/50">
            <div
              className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_rgba(255,0,0,0.8)]"
              style={{
                transform: `translate(${leftEye.x}px, ${leftEye.y}px)`,
                transition: "transform 0.1s ease-out",
              }}
            />
          </div>
          {/* Right eye */}
          <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center overflow-hidden border border-red-500/50">
            <div
              className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_rgba(255,0,0,0.8)]"
              style={{
                transform: `translate(${rightEye.x}px, ${rightEye.y}px)`,
                transition: "transform 0.1s ease-out",
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-[10px] text-red-500/70 font-bold uppercase animate-pulse">
            Always Watching
          </span>
        </div>
      </div>
    </div>
  )
}
