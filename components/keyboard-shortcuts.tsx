"use client"

import { useState, useEffect, useCallback } from "react"
import { X, Keyboard, Command } from "lucide-react"

const SHORTCUTS = [
  { keys: ["G"], action: "Generate meme", description: "Generate/refresh your meme" },
  { keys: ["D"], action: "Download", description: "Download meme as PNG" },
  { keys: ["S"], action: "Share", description: "Open share menu" },
  { keys: ["E"], action: "Extreme mode", description: "Toggle extreme mode" },
  { keys: ["R"], action: "Random", description: "Generate random meme" },
  { keys: ["T"], action: "Top text", description: "Focus top text input" },
  { keys: ["B"], action: "Bottom text", description: "Focus bottom text input" },
  { keys: ["?"], action: "Help", description: "Show this shortcuts menu" },
  { keys: ["Esc"], action: "Close", description: "Close any open modal" },
]

interface KeyboardShortcutsProps {
  onGenerate?: () => void
  onDownload?: () => void
  onShare?: () => void
  onToggleExtreme?: () => void
  onRandom?: () => void
  onFocusTop?: () => void
  onFocusBottom?: () => void
}

export function KeyboardShortcuts({
  onGenerate,
  onDownload,
  onShare,
  onToggleExtreme,
  onRandom,
  onFocusTop,
  onFocusBottom,
}: KeyboardShortcutsProps) {
  const [showHelp, setShowHelp] = useState(false)
  const [lastKey, setLastKey] = useState<string | null>(null)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Don't trigger if user is typing in an input
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      return
    }

    const key = e.key.toLowerCase()

    // Show key indicator briefly
    setLastKey(e.key.toUpperCase())
    setTimeout(() => setLastKey(null), 500)

    switch (key) {
      case "g":
        e.preventDefault()
        onGenerate?.()
        break
      case "d":
        e.preventDefault()
        onDownload?.()
        break
      case "s":
        e.preventDefault()
        onShare?.()
        break
      case "e":
        e.preventDefault()
        onToggleExtreme?.()
        break
      case "r":
        e.preventDefault()
        onRandom?.()
        break
      case "t":
        e.preventDefault()
        onFocusTop?.()
        break
      case "b":
        e.preventDefault()
        onFocusBottom?.()
        break
      case "?":
        e.preventDefault()
        setShowHelp(true)
        break
      case "escape":
        setShowHelp(false)
        break
    }
  }, [onGenerate, onDownload, onShare, onToggleExtreme, onRandom, onFocusTop, onFocusBottom])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      {/* Key indicator */}
      {lastKey && (
        <div className="fixed bottom-32 right-4 z-50 animate-in fade-in zoom-in duration-200">
          <div className="bg-black/90 border border-red-500 px-4 py-2 flex items-center gap-2">
            <Keyboard className="h-4 w-4 text-red-400" />
            <span className="font-mono font-bold text-white">{lastKey}</span>
          </div>
        </div>
      )}

      {/* Help button */}
      <button
        onClick={() => setShowHelp(true)}
        className="fixed bottom-32 left-4 z-40 bg-black/80 border border-red-900/50 hover:border-red-500 p-2 transition-colors group"
        title="Keyboard shortcuts (?)"
      >
        <Keyboard className="h-5 w-5 text-white/50 group-hover:text-white" />
      </button>

      {/* Help modal */}
      {showHelp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90" onClick={() => setShowHelp(false)} />

          <div className="relative w-full max-w-md bg-black border border-red-500 shadow-2xl shadow-red-500/20">
            <div className="flex items-center justify-between p-4 border-b border-red-900/50">
              <div className="flex items-center gap-2">
                <Command className="h-5 w-5 text-red-400" />
                <h2 className="font-bold uppercase">Keyboard Shortcuts</h2>
              </div>
              <button onClick={() => setShowHelp(false)} className="text-white/50 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 space-y-2 max-h-[60vh] overflow-y-auto">
              {SHORTCUTS.map((shortcut, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-red-900/20 last:border-0">
                  <div>
                    <p className="font-bold text-sm">{shortcut.action}</p>
                    <p className="text-white/50 text-xs">{shortcut.description}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {shortcut.keys.map((key, j) => (
                      <kbd
                        key={j}
                        className="px-2 py-1 bg-red-950/50 border border-red-900/50 text-xs font-mono"
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-red-900/50 text-center">
              <p className="text-white/50 text-xs">
                Press <kbd className="px-1.5 py-0.5 bg-red-950/50 border border-red-900/50 text-xs font-mono">?</kbd> anytime to see shortcuts
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
