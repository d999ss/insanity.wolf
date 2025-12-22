"use client"

import Image from "next/image"

interface MemePreviewProps {
  topText: string
  bottomText: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export function MemePreview({ topText, bottomText, size = "md", className = "" }: MemePreviewProps) {
  const sizeClasses = {
    sm: "w-[120px]",
    md: "w-[180px]",
    lg: "w-[250px]",
  }

  const textSizes = {
    sm: "text-[8px] md:text-[10px]",
    md: "text-[10px] md:text-xs",
    lg: "text-xs md:text-sm",
  }

  return (
    <div className={`relative ${sizeClasses[size]} aspect-square mx-auto ${className}`}>
      {/* Wolf image */}
      <Image
        src="/insanity-wolf-template.webp"
        alt="Insanity Wolf"
        fill
        priority
        className="object-contain z-[1]"
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-[2] pointer-events-none" />

      {/* Top text */}
      <div className="absolute top-1 left-0 right-0 z-20 px-1">
        <p
          className={`text-white font-black text-center uppercase leading-tight ${textSizes[size]}`}
          style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
            WebkitTextStroke: '0.5px black',
          }}
        >
          {topText}
        </p>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-1 left-0 right-0 z-20 px-1">
        <p
          className={`text-white font-black text-center uppercase leading-tight ${textSizes[size]}`}
          style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
            WebkitTextStroke: '0.5px black',
          }}
        >
          {bottomText}
        </p>
      </div>
    </div>
  )
}
