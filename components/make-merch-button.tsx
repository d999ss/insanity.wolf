"use client"

import { Shirt } from "lucide-react"
import { useRouter } from "next/navigation"

interface MakeMerchButtonProps {
  imageUrl: string
  topText: string
  bottomText: string
}

export function MakeMerchButton({ imageUrl, topText, bottomText }: MakeMerchButtonProps) {
  const router = useRouter()

  const handleMakeMerch = async () => {
    // Fetch the meme image and convert to data URL for merch page
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const reader = new FileReader()

      reader.onloadend = () => {
        localStorage.setItem("insanity-meme-image", reader.result as string)
        localStorage.setItem("insanity-meme-top", topText)
        localStorage.setItem("insanity-meme-bottom", bottomText)
        router.push("/merch")
      }

      reader.readAsDataURL(blob)
    } catch (error) {
      // Fallback: just navigate to merch with query params
      router.push(`/merch?top=${encodeURIComponent(topText)}&bottom=${encodeURIComponent(bottomText)}`)
    }
  }

  return (
    <button
      onClick={handleMakeMerch}
      className="w-full flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-black font-black uppercase px-4 py-4 text-lg transition-colors"
      style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
    >
      <Shirt className="h-5 w-5" />
      PUT THIS ON A SHIRT
    </button>
  )
}
