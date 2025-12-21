"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { ThumbsUp, Share2, RefreshCw } from "lucide-react"
import Image from "next/image"
import galleryImages from "@/lib/gallery-images.json"

interface MemeItem {
  src: string
  votes: number
}

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function MemeGallery() {
  const [memes, setMemes] = useState<MemeItem[]>([])
  const [voted, setVoted] = useState<Set<number>>(new Set())
  const [page, setPage] = useState(0)
  const memesPerPage = 16

  useEffect(() => {
    // Shuffle and assign random votes
    const shuffled = shuffleArray(galleryImages as string[]).map(src => ({
      src,
      votes: Math.floor(Math.random() * 5000) + 100
    }))
    setMemes(shuffled)
  }, [])

  const handleVote = (index: number) => {
    if (voted.has(index)) return

    setMemes((prev) =>
      prev.map((meme, i) => (i === index ? { ...meme, votes: meme.votes + 1 } : meme))
    )
    setVoted((prev) => new Set([...prev, index]))
  }

  const loadMore = () => {
    setPage(p => p + 1)
  }

  const shuffle = () => {
    setMemes(shuffleArray(memes))
    setPage(0)
    setVoted(new Set())
  }

  const visibleMemes = memes.slice(0, (page + 1) * memesPerPage)

  if (memes.length === 0) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-pulse text-xl font-bold">LOADING THE INSANITY...</div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <Button onClick={shuffle} variant="outline" className="gap-2 glitch-hover" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
          <RefreshCw className="h-4 w-4" />
          SHUFFLE THE MADNESS
        </Button>
      </div>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {visibleMemes.map((meme, idx) => (
          <div
            key={`${meme.src}-${idx}`}
            className="group relative overflow-hidden rounded-xl border-2 border-border bg-gradient-to-br from-card via-card to-muted/30 metal-card-hover noise-hover explode-hover cursor-pointer"
          >
            <div className="relative aspect-square">
              <Image
                src={`/gallery/${meme.src}`}
                alt="Insanity Wolf Meme"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="border-t border-border bg-muted/50 p-3">
              <div className="flex items-center justify-between gap-2">
                <Button
                  onClick={() => handleVote(idx)}
                  variant={voted.has(idx) ? "default" : "outline"}
                  size="sm"
                  className="gap-1.5 text-xs violent-shake"
                  disabled={voted.has(idx)}
                >
                  <ThumbsUp className="h-3 w-3" />
                  {meme.votes.toLocaleString()}
                </Button>
                <Button variant="ghost" size="sm" className="glitch-hover p-2">
                  <Share2 className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />
          </div>
        ))}
      </div>

      {visibleMemes.length < memes.length && (
        <div className="flex justify-center pt-8">
          <Button onClick={loadMore} size="lg" className="gap-2 rage-mode" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            SHOW ME MORE INSANITY ({memes.length - visibleMemes.length} remaining)
          </Button>
        </div>
      )}

      <p className="text-center text-sm text-muted-foreground">
        Showing {visibleMemes.length} of {memes.length} legendary memes
      </p>
    </div>
  )
}
