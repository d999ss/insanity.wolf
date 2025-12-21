"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ThumbsUp, Share2, RefreshCw, X, ChevronLeft, ChevronRight, Download, Maximize2 } from "lucide-react"
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
  const [selectedMeme, setSelectedMeme] = useState<number | null>(null)
  const memesPerPage = 20

  useEffect(() => {
    // Shuffle and assign random votes
    const shuffled = shuffleArray(galleryImages as string[]).map(src => ({
      src,
      votes: Math.floor(Math.random() * 5000) + 100
    }))
    setMemes(shuffled)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMeme === null) return
      if (e.key === "ArrowLeft") {
        setSelectedMeme(prev => (prev !== null && prev > 0 ? prev - 1 : prev))
      } else if (e.key === "ArrowRight") {
        setSelectedMeme(prev => (prev !== null && prev < memes.length - 1 ? prev + 1 : prev))
      } else if (e.key === "Escape") {
        setSelectedMeme(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedMeme, memes.length])

  const handleVote = (index: number, e?: React.MouseEvent) => {
    e?.stopPropagation()
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

  const downloadMeme = (src: string) => {
    const link = document.createElement("a")
    link.href = `/gallery/${src}`
    link.download = src
    link.click()
  }

  const visibleMemes = memes.slice(0, (page + 1) * memesPerPage)

  if (memes.length === 0) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-pulse text-xl font-bold text-red-400">LOADING THE INSANITY...</div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <Button onClick={shuffle} variant="outline" className="gap-2 glitch-hover border-red-900/50 text-red-400 hover:bg-red-950/30 hover:text-red-300" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
          <RefreshCw className="h-4 w-4" />
          SHUFFLE THE MADNESS
        </Button>
      </div>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {visibleMemes.map((meme, idx) => (
          <div
            key={`${meme.src}-${idx}`}
            className="group relative overflow-hidden border-2 border-red-900/30 bg-gradient-to-br from-black via-red-950/10 to-black cursor-pointer transition-all hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10"
            onClick={() => setSelectedMeme(idx)}
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
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="h-5 w-5 text-white drop-shadow-lg" />
              </div>
            </div>

            <div className="border-t border-red-900/30 bg-red-950/30 p-2 md:p-3">
              <div className="flex items-center justify-between gap-1 md:gap-2">
                <Button
                  onClick={(e) => handleVote(idx, e)}
                  variant={voted.has(idx) ? "default" : "outline"}
                  size="sm"
                  className={`gap-1 md:gap-1.5 text-[10px] md:text-xs px-2 md:px-3 ${voted.has(idx) ? 'bg-red-900 hover:bg-red-800' : 'border-red-900/50 text-red-400 hover:bg-red-950/50'}`}
                  disabled={voted.has(idx)}
                >
                  <ThumbsUp className="h-2.5 w-2.5 md:h-3 md:w-3" />
                  {meme.votes.toLocaleString()}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-1.5 md:p-2 text-red-400 hover:text-red-300 hover:bg-red-950/50"
                  onClick={(e) => {
                    e.stopPropagation()
                    // Share functionality placeholder
                  }}
                >
                  <Share2 className="h-2.5 w-2.5 md:h-3 md:w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleMemes.length < memes.length && (
        <div className="flex justify-center pt-6 md:pt-8">
          <Button
            onClick={loadMore}
            size="lg"
            className="gap-2 bg-red-900 hover:bg-red-800 border border-red-500 text-sm md:text-base"
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            MORE INSANITY ({memes.length - visibleMemes.length})
          </Button>
        </div>
      )}

      <p className="text-center text-xs md:text-sm text-red-400/50">
        Showing {visibleMemes.length} of {memes.length} legendary memes
      </p>

      {/* Lightbox Modal */}
      <Dialog open={selectedMeme !== null} onOpenChange={(open) => !open && setSelectedMeme(null)}>
        <DialogContent className="max-w-4xl bg-black/95 border-red-900/50 p-0">
          {selectedMeme !== null && memes[selectedMeme] && (
            <div className="relative">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-red-950/50"
                onClick={() => setSelectedMeme(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation arrows */}
              {selectedMeme > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-red-950/50 h-12 w-12"
                  onClick={() => setSelectedMeme(selectedMeme - 1)}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
              )}
              {selectedMeme < memes.length - 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-red-950/50 h-12 w-12"
                  onClick={() => setSelectedMeme(selectedMeme + 1)}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              )}

              {/* Image */}
              <div className="relative aspect-square max-h-[70vh]">
                <Image
                  src={`/gallery/${memes[selectedMeme].src}`}
                  alt="Insanity Wolf Meme"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  priority
                />
              </div>

              {/* Actions bar */}
              <div className="border-t border-red-900/50 bg-red-950/30 p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    onClick={() => handleVote(selectedMeme)}
                    variant={voted.has(selectedMeme) ? "default" : "outline"}
                    className={`gap-2 ${voted.has(selectedMeme) ? 'bg-red-900 hover:bg-red-800' : 'border-red-900/50 text-red-400 hover:bg-red-950/50'}`}
                    disabled={voted.has(selectedMeme)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    {memes[selectedMeme].votes.toLocaleString()} VOTES
                  </Button>
                  <span className="text-sm text-red-400/50">
                    {selectedMeme + 1} of {memes.length}
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="gap-2 border-red-900/50 text-red-400 hover:bg-red-950/50"
                  onClick={() => downloadMeme(memes[selectedMeme].src)}
                >
                  <Download className="h-4 w-4" />
                  DOWNLOAD
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
