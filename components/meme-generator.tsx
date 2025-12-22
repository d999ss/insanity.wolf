"use client"

import { useState } from "react"
import Image from "next/image"
import { Download, Share2, Shirt, Shuffle, Flame, Palette, Check, Loader2, AlertCircle, Swords } from "lucide-react"
import { useRouter } from "next/navigation"

const backgroundOptions = [
  { id: "black", name: "Black", color: "#000000" },
  { id: "red", name: "Blood Red", color: "#7f1d1d" },
  { id: "darkred", name: "Dark Red", color: "#450a0a" },
  { id: "gray", name: "Charcoal", color: "#1c1917" },
  { id: "blue", name: "Midnight", color: "#172554" },
  { id: "purple", name: "Dark Purple", color: "#3b0764" },
]

export function MemeGenerator() {
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")
  const [extremeMode, setExtremeMode] = useState(false)
  const [selectedBackground, setSelectedBackground] = useState("black")
  const [shareStatus, setShareStatus] = useState<"idle" | "sharing" | "copied" | "error">("idle")
  const [showChallenge, setShowChallenge] = useState(false)
  const router = useRouter()

  const memeReady = topText && bottomText
  const currentBg = backgroundOptions.find(bg => bg.id === selectedBackground) || backgroundOptions[0]

  // Templates
  const standardTemplate = "/insanity-wolf-template.webp"
  const extremeCanvas = "/extreme-canvas.png"
  const extremeWolf = "/extreme-wolf.png"

  const handleMakeMerch = () => {
    // Generate the meme image and save to localStorage before navigating
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const generateAndNavigate = () => {
      ctx.fillStyle = "white"
      ctx.strokeStyle = "black"
      ctx.lineWidth = 4
      ctx.textAlign = "center"
      const fontSize = Math.floor(canvas.width * 0.08)
      ctx.font = `bold ${fontSize}px Impact, 'Arial Black', sans-serif`

      const maxWidth = canvas.width - 120
      const lineHeight = fontSize * 1.15

      if (topText) {
        const topY = fontSize + 20
        wrapText(ctx, topText.toUpperCase(), canvas.width / 2, topY, maxWidth, lineHeight, false)
      }

      if (bottomText) {
        const bottomY = canvas.height - 40
        wrapText(ctx, bottomText.toUpperCase(), canvas.width / 2, bottomY, maxWidth, lineHeight, true)
      }

      // Save to localStorage and navigate
      const imageData = canvas.toDataURL("image/png")
      localStorage.setItem("insanity-meme-image", imageData)
      router.push("/merch")
    }

    if (extremeMode) {
      const wolfImg = new window.Image()
      wolfImg.crossOrigin = "anonymous"
      wolfImg.src = extremeWolf

      wolfImg.onload = () => {
        canvas.width = 600
        canvas.height = 600
        ctx.fillStyle = currentBg.color
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        const scale = Math.min(canvas.width / wolfImg.width, canvas.height / wolfImg.height) * 0.67
        const w = wolfImg.width * scale
        const h = wolfImg.height * scale
        const x = (canvas.width - w) / 2
        const y = (canvas.height - h) / 2
        ctx.drawImage(wolfImg, x, y, w, h)
        generateAndNavigate()
      }
    } else {
      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.src = standardTemplate

      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        generateAndNavigate()
      }
    }
  }

  const problems = [
    // Work problems
    "ALARM DIDN'T GO OFF",
    "BOSS WANTS TO SEE ME",
    "SOMEONE ATE MY LUNCH",
    "DEADLINE TOMORROW",
    "COMPUTER CRASHED",
    "MEETING COULD'VE BEEN AN EMAIL",
    "COWORKER WON'T STOP TALKING",
    "PRINTER JAMMED AGAIN",
    "GOT CC'D ON DRAMA EMAIL",
    "MICROMANAGER STRIKES AGAIN",
    // Tech problems
    "WIFI IS DOWN",
    "PHONE BATTERY AT 1%",
    "FORGOT PASSWORD",
    "UPDATE REQUIRES RESTART",
    "AUTOCORRECT RUINED MY TEXT",
    "SENT TO WRONG PERSON",
    "LOST UNSAVED WORK",
    "CAPS LOCK WAS ON",
    "BLUETOOTH WON'T CONNECT",
    "TOO MANY TABS OPEN",
    // Daily life
    "TRAFFIC JAM",
    "MONDAY MORNING",
    "OUT OF COFFEE",
    "RUNNING LATE",
    "CAN'T FIND PARKING",
    "ROOMMATE LEFT DISHES",
    "NEIGHBOR'S DOG WON'T STOP",
    "STEPPED IN SOMETHING WET",
    "FORGOT HEADPHONES",
    "SOMEONE TOOK MY SPOT",
    // Social problems
    "EX TEXTS YOU",
    "SOMEONE SPOILS THE MOVIE",
    "GROUP PROJECT",
    "FRIEND CANCELS LAST MINUTE",
    "READ BUT NO REPLY",
    "SOMEONE CHEWS LOUDLY",
    "SLOW WALKER IN FRONT",
    "PEOPLE WON'T LEAVE THE PARTY",
    "TAGGED IN BAD PHOTO",
    "VOICEMAIL NOTIFICATION",
    // Food problems
    "FOOD IS TOO HOT",
    "FOOD IS TOO COLD",
    "THEY GOT MY ORDER WRONG",
    "NO MORE PIZZA",
    "MILK IS EXPIRED",
    "FORGOT LUNCH AT HOME",
    "SNACK STUCK IN VENDING MACHINE",
    "RESTAURANT IS CLOSED",
    // Random annoyances
    "CAN'T SLEEP",
    "TOO EARLY",
    "DENTIST APPOINTMENT",
    "CAR WON'T START",
    "PACKAGE IS DELAYED",
    "REMOTE IS MISSING",
    "SHOE CAME UNTIED",
    "HEADPHONE CORD TANGLED",
    "BIRD POOPED ON CAR",
    "STUB TOE ON FURNITURE",
    "ITCH YOU CAN'T REACH",
    "HICCUPS WON'T STOP",
  ]

  const solutions = [
    // Violence themed
    "BURN THE BUILDING DOWN",
    "FIGHT EVERYONE",
    "FLIP THE TABLE",
    "SET IT ON FIRE",
    "THROW IT OUT THE WINDOW",
    "BREAK EVERYTHING",
    "PUNCH A HOLE IN THE WALL",
    "DECLARE WAR",
    "CHOOSE VIOLENCE",
    "THROW HANDS IMMEDIATELY",
    // Chaos themed
    "SCREAM INTO THE VOID",
    "BECOME THE PROBLEM",
    "ASSERT DOMINANCE",
    "CHAOS IS THE ANSWER",
    "EMBRACE THE DARKNESS",
    "BECOME UNGOVERNABLE",
    "LET IT ALL BURN",
    "WATCH THE WORLD BURN",
    "CAUSE A SCENE",
    "GO ABSOLUTELY FERAL",
    // Escape themed
    "FAKE YOUR OWN DEATH",
    "DESTROY ALL EVIDENCE",
    "ESTABLISH A NEW IDENTITY",
    "BURN ALL BRIDGES",
    "RUN NAKED THROUGH THE STREETS",
    "FLEE THE COUNTRY",
    "DISAPPEAR FOREVER",
    "WITNESS PROTECTION PROGRAM",
    "START A NEW LIFE IN ANTARCTICA",
    "BECOME A HERMIT",
    // Power moves
    "MAKE THEM FEAR YOU",
    "ACCEPT NO SURVIVORS",
    "T-POSE TO ASSERT DOMINANCE",
    "STARE INTO THEIR SOUL",
    "BECOME THEIR NEW BOSS",
    "OUTLIVE YOUR ENEMIES",
    "SUCCESS IS THE BEST REVENGE",
    "NEVER FORGIVE NEVER FORGET",
    "HOLD THIS GRUDGE FOREVER",
    "HAUNT THEM FROM BEYOND",
    // Absurd solutions
    "RELEASE THE WOLVES",
    "SUMMON ANCIENT DEMONS",
    "CONSULT THE ELDER GODS",
    "CALL IN THE WOLVES",
    "UNLEASH THE BEES",
    "DEPLOY THE ATTACK GEESE",
    "ACTIVATE GOBLIN MODE",
    "CHANNEL PURE RAGE",
    "ASCEND TO A HIGHER PLANE",
    "ACHIEVE FINAL FORM",
    // Petty revenge
    "SIGN THEM UP FOR SPAM",
    "UNPLUG THEIR CHARGER 1%",
    "MOVE THEIR BOOKMARK",
    "SET THEIR ALARM FOR 3AM",
    "HIDE ONE OF THEIR SOCKS",
    "CHANGE THEIR AUTOCORRECT",
    "PUT GLITTER IN THEIR MAIL",
    "SUBSCRIBE TO CAT FACTS",
    // Unhinged responses
    "EAT THE EVIDENCE",
    "BLAME IT ON GHOSTS",
    "GASLIGHT EVERYONE",
    "SIMPLY ✨UNALIVE✨ IT",
    "SPEEDRUN SELF-DESTRUCTION",
    "DOUBLE DOWN HARDER",
    "MAKE IT EVERYONE'S PROBLEM",
    "GO OFF THE GRID",
  ]

  const generateProblem = () => {
    const randomProblem = problems[Math.floor(Math.random() * problems.length)]
    setTopText(randomProblem)
  }

  const generateSolution = () => {
    const randomSolution = solutions[Math.floor(Math.random() * solutions.length)]
    setBottomText(randomSolution)
  }

  const wrapText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number,
    fromBottom = false,
  ) => {
    const words = text.split(" ")
    let line = ""
    const lines: string[] = []

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " "
      const metrics = ctx.measureText(testLine)
      const testWidth = metrics.width

      if (testWidth > maxWidth && i > 0) {
        lines.push(line.trim())
        line = words[i] + " "
      } else {
        line = testLine
      }
    }
    lines.push(line.trim())

    const startY = fromBottom ? y - (lines.length - 1) * lineHeight : y

    lines.forEach((line, index) => {
      const lineY = startY + index * lineHeight
      ctx.strokeText(line, x, lineY)
      ctx.fillText(line, x, lineY)
    })

    return lines.length
  }

  const handleDownload = () => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const drawText = () => {
      ctx.fillStyle = "white"
      ctx.strokeStyle = "black"
      ctx.lineWidth = 4
      ctx.textAlign = "center"
      const fontSize = Math.floor(canvas.width * 0.08)
      ctx.font = `bold ${fontSize}px Impact, 'Arial Black', sans-serif`

      const maxWidth = canvas.width - 120
      const lineHeight = fontSize * 1.15

      if (topText) {
        const topY = fontSize + 20
        wrapText(ctx, topText.toUpperCase(), canvas.width / 2, topY, maxWidth, lineHeight, false)
      }

      if (bottomText) {
        const bottomY = canvas.height - 40
        wrapText(ctx, bottomText.toUpperCase(), canvas.width / 2, bottomY, maxWidth, lineHeight, true)
      }

      const link = document.createElement("a")
      link.download = extremeMode ? "insanity-wolf-extreme-meme.png" : "insanity-wolf-meme.png"
      link.href = canvas.toDataURL()
      link.click()
    }

    if (extremeMode) {
      const wolfImg = new window.Image()
      wolfImg.crossOrigin = "anonymous"
      wolfImg.src = extremeWolf

      wolfImg.onload = () => {
        // Set canvas size
        canvas.width = 600
        canvas.height = 600

        // Draw background color
        ctx.fillStyle = currentBg.color
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw wolf centered and contained, shrunk by 33%
        const scale = Math.min(canvas.width / wolfImg.width, canvas.height / wolfImg.height) * 0.67
        const w = wolfImg.width * scale
        const h = wolfImg.height * scale
        const x = (canvas.width - w) / 2
        const y = (canvas.height - h) / 2
        ctx.drawImage(wolfImg, x, y, w, h)
        drawText()
      }
    } else {
      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.src = standardTemplate

      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        drawText()
      }
    }
  }

  const handleShare = async () => {
    setShareStatus("sharing")
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) {
      setShareStatus("error")
      return
    }

    const shareImage = async () => {
      ctx.fillStyle = "white"
      ctx.strokeStyle = "black"
      ctx.lineWidth = 4
      ctx.textAlign = "center"
      const fontSize = Math.floor(canvas.width * 0.08)
      ctx.font = `bold ${fontSize}px Impact, 'Arial Black', sans-serif`

      const maxWidth = canvas.width - 120
      const lineHeight = fontSize * 1.15

      if (topText) {
        const topY = fontSize + 20
        wrapText(ctx, topText.toUpperCase(), canvas.width / 2, topY, maxWidth, lineHeight, false)
      }

      if (bottomText) {
        const bottomY = canvas.height - 40
        wrapText(ctx, bottomText.toUpperCase(), canvas.width / 2, bottomY, maxWidth, lineHeight, true)
      }

      try {
        const blob = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob((b) => {
            if (b) resolve(b)
            else reject(new Error("Failed to create blob"))
          }, "image/png")
        })

        const fileName = extremeMode ? "insanity-wolf-extreme-meme.png" : "insanity-wolf-meme.png"
        const file = new File([blob], fileName, { type: "image/png" })

        // Try native share first (mobile)
        if (typeof navigator !== "undefined" && navigator.share) {
          try {
            const shareData = {
              title: "Insanity Wolf Meme",
              text: "Check out this Insanity Wolf meme I made! #InsanityWolf",
              files: [file],
            }

            if (navigator.canShare && navigator.canShare(shareData)) {
              await navigator.share(shareData)
              setShareStatus("idle")
              return
            }

            // Try without files (for browsers that don't support file sharing)
            await navigator.share({
              title: "Insanity Wolf Meme",
              text: "Check out this Insanity Wolf meme I made! #InsanityWolf",
              url: "https://insanitywolf.com",
            })
            setShareStatus("idle")
            return
          } catch (shareErr) {
            // User cancelled or share not supported, fall through to clipboard
            if ((shareErr as Error).name === "AbortError") {
              setShareStatus("idle")
              return
            }
          }
        }

        // Fallback: copy to clipboard
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ "image/png": blob })
          ])
          setShareStatus("copied")
          setTimeout(() => setShareStatus("idle"), 2000)
        } catch {
          // Clipboard API not available, try downloading
          const url = URL.createObjectURL(blob)
          const link = document.createElement("a")
          link.download = fileName
          link.href = url
          link.click()
          URL.revokeObjectURL(url)
          setShareStatus("idle")
        }
      } catch (err) {
        console.error("Share failed:", err)
        setShareStatus("error")
        setTimeout(() => setShareStatus("idle"), 2000)
      }
    }

    if (extremeMode) {
      const wolfImg = new window.Image()
      wolfImg.crossOrigin = "anonymous"
      wolfImg.src = extremeWolf

      wolfImg.onload = () => {
        // Set canvas size
        canvas.width = 600
        canvas.height = 600

        // Draw background color
        ctx.fillStyle = currentBg.color
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Shrunk by 33%
        const scale = Math.min(canvas.width / wolfImg.width, canvas.height / wolfImg.height) * 0.67
        const w = wolfImg.width * scale
        const h = wolfImg.height * scale
        const x = (canvas.width - w) / 2
        const y = (canvas.height - h) / 2
        ctx.drawImage(wolfImg, x, y, w, h)
        shareImage()
      }

      wolfImg.onerror = () => {
        setShareStatus("error")
        setTimeout(() => setShareStatus("idle"), 2000)
      }
    } else {
      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.src = standardTemplate

      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        shareImage()
      }

      img.onerror = () => {
        setShareStatus("error")
        setTimeout(() => setShareStatus("idle"), 2000)
      }
    }
  }

  return (
    <div className="w-full">
      <div className="border border-red-900/30 bg-black">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Left side - Inputs */}
          <div className="space-y-4 md:space-y-6 border-b border-red-900/30 p-4 md:p-6 lg:border-b-0 lg:border-r">
            <div className="mb-4 md:mb-6">
              <h3 className="font-mono text-sm md:text-base font-medium uppercase text-white">
                GENERATE INSANITY
              </h3>
            </div>

            <div className="space-y-2">
              <label htmlFor="top-text" className="font-mono text-xs uppercase text-red-400/60">
                Top Text (The Problem)
              </label>
              <div className="flex gap-2">
                <input
                  id="top-text"
                  placeholder="EVERYDAY PROBLEM..."
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                  className="flex-1 h-12 px-4 font-mono text-base bg-red-950/20 border border-red-900/30 text-white placeholder:text-red-400/30 focus:outline-none focus:border-red-500/50"
                />
                <button
                  onClick={generateProblem}
                  className="h-12 px-4 font-mono text-xs uppercase bg-red-950/50 border border-red-900/30 text-red-400 hover:bg-red-950 hover:text-white transition-colors flex items-center gap-2"
                  title="Generate random problem"
                >
                  <Shuffle className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="bottom-text" className="font-mono text-xs uppercase text-red-400/60">
                Bottom Text (The Solution)
              </label>
              <div className="flex gap-2">
                <input
                  id="bottom-text"
                  placeholder="EXTREME SOLUTION..."
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                  className="flex-1 h-12 px-4 font-mono text-base bg-red-950/20 border border-red-900/30 text-white placeholder:text-red-400/30 focus:outline-none focus:border-red-500/50"
                />
                <button
                  onClick={generateSolution}
                  className="h-12 px-4 font-mono text-xs uppercase bg-red-950/50 border border-red-900/30 text-red-400 hover:bg-red-950 hover:text-white transition-colors flex items-center gap-2"
                  title="Generate random solution"
                >
                  <Shuffle className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              {memeReady ? (
                <>
                  <button
                    onClick={handleMakeMerch}
                    className="w-full flex items-center justify-center gap-2 font-mono text-sm font-medium text-black bg-white hover:bg-white/90 px-4 py-3 transition-colors"
                  >
                    <Shirt className="h-4 w-4" />
                    MAKE FUCKING MERCH
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex items-center justify-center gap-2 font-mono text-xs font-medium text-white bg-red-950/50 border border-red-900/30 hover:bg-red-950 px-4 py-2.5 transition-colors"
                    >
                      <Download className="h-3.5 w-3.5" />
                      DOWNLOAD
                    </button>
                    <button
                      onClick={handleShare}
                      disabled={shareStatus === "sharing"}
                      className={`flex items-center justify-center gap-2 font-mono text-xs font-medium text-white px-4 py-2.5 transition-all ${
                        shareStatus === "copied"
                          ? "bg-green-600 border border-green-500"
                          : shareStatus === "error"
                            ? "bg-red-700 border border-red-500"
                            : shareStatus === "sharing"
                              ? "bg-red-950/50 border border-red-900/30 opacity-70 cursor-wait"
                              : "bg-red-950/50 border border-red-900/30 hover:bg-red-950"
                      }`}
                    >
                      {shareStatus === "sharing" ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          SHARING...
                        </>
                      ) : shareStatus === "copied" ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          COPIED!
                        </>
                      ) : shareStatus === "error" ? (
                        <>
                          <AlertCircle className="h-3.5 w-3.5" />
                          ERROR
                        </>
                      ) : (
                        <>
                          <Share2 className="h-3.5 w-3.5" />
                          SHARE
                        </>
                      )}
                    </button>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => {
                        const text = encodeURIComponent(`${topText} / ${bottomText} 🐺 Made at insanitywolf.com #InsanityWolf`)
                        window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank')
                      }}
                      className="flex-1 flex items-center justify-center gap-2 font-mono text-xs font-medium text-white bg-[#1DA1F2]/20 border border-[#1DA1F2]/50 hover:bg-[#1DA1F2]/40 px-3 py-2 transition-colors"
                    >
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      POST TO X
                    </button>
                    <button
                      onClick={() => {
                        const title = encodeURIComponent(`${topText} / ${bottomText}`)
                        window.open(`https://reddit.com/submit?url=https://insanitywolf.com&title=${title}`, '_blank')
                      }}
                      className="flex-1 flex items-center justify-center gap-2 font-mono text-xs font-medium text-white bg-[#FF4500]/20 border border-[#FF4500]/50 hover:bg-[#FF4500]/40 px-3 py-2 transition-colors"
                    >
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
                      REDDIT
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(`${topText} / ${bottomText} 🐺 insanitywolf.com`)
                        setShareStatus("copied")
                        setTimeout(() => setShareStatus("idle"), 2000)
                      }}
                      className="flex items-center justify-center gap-2 font-mono text-xs font-medium text-white bg-red-950/50 border border-red-900/30 hover:bg-red-950 px-3 py-2 transition-colors"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    </button>
                  </div>
                  <button
                    onClick={() => setShowChallenge(true)}
                    className="w-full flex items-center justify-center gap-2 font-mono text-xs font-medium text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 hover:bg-yellow-500/20 px-3 py-2.5 mt-2 transition-colors"
                  >
                    <Swords className="h-4 w-4" />
                    CHALLENGE A FRIEND TO BEAT THIS
                  </button>
                </>
              ) : (
                <>
                  <button
                    disabled
                    className="w-full flex items-center justify-center gap-2 font-mono text-sm font-medium text-white/40 bg-white/20 px-4 py-3 cursor-not-allowed"
                  >
                    <Shirt className="h-4 w-4" />
                    MAKE FUCKING MERCH
                  </button>
                  <p className="text-center font-mono text-xs text-white/50">
                    {topText || bottomText ? "Looking good! Keep going..." : "Enter text above to create your meme"}
                  </p>
                </>
              )}
            </div>

            <div className="bg-red-950/20 border border-red-900/30 p-4">
              <p className="mb-3 font-mono text-xs uppercase text-white/70">Quick Tips</p>
              <ul className="space-y-2 font-mono text-xs text-white/50">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Keep it short and punchy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Make the solution completely over the top</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  <span>Channel your inner chaos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Preview */}
          <div className="bg-red-950/10 p-4 md:p-6">
            <div className="mb-3 md:mb-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase text-white/70">Live Preview</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setExtremeMode(!extremeMode)}
                    className={`flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase transition-all duration-300 border ${
                      extremeMode
                        ? "bg-red-600 border-red-500 text-white animate-pulse"
                        : "bg-red-950/50 border-red-900/30 text-red-400 hover:bg-red-950 hover:text-white"
                    }`}
                  >
                    <Flame className={`h-3.5 w-3.5 ${extremeMode ? "animate-bounce" : ""}`} />
                    {extremeMode ? "MAXIMUM INSANITY" : "GO MORE INSANE"}
                  </button>
                  <div className="flex items-center gap-1.5">
                    <div className={`h-2 w-2 ${extremeMode ? "animate-ping bg-red-500" : "animate-pulse bg-green-500"}`}></div>
                    <span className={`font-mono text-xs ${extremeMode ? "text-red-500" : "text-green-500"}`}>
                      {extremeMode ? "EXTREME" : "LIVE"}
                    </span>
                  </div>
                </div>
              </div>
              {extremeMode && (
                <div className="flex items-center gap-2">
                  <Palette className="h-3.5 w-3.5 text-white/50" />
                  <div className="flex gap-1.5">
                    {backgroundOptions.map((bg) => (
                      <button
                        key={bg.id}
                        onClick={() => setSelectedBackground(bg.id)}
                        className={`w-6 h-6 rounded-sm border-2 transition-all ${
                          selectedBackground === bg.id
                            ? "border-white scale-110"
                            : "border-white/20 hover:border-white/50"
                        }`}
                        style={{ backgroundColor: bg.color }}
                        title={bg.name}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="sticky top-24 overflow-hidden border border-red-900/30">
              <div className="relative">
{extremeMode ? (
                  <div className="relative aspect-square" style={{ backgroundColor: currentBg.color }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={extremeWolf}
                        alt="Extreme Wolf"
                        width={400}
                        height={400}
                        className="w-[67%] h-[67%] object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <Image
                    src={standardTemplate}
                    alt="Insanity Wolf Meme Preview"
                    width={600}
                    height={600}
                    className="w-full"
                  />
                )}
                {topText && (
                  <div className="absolute left-0 right-0 top-4 md:top-8 px-4 md:px-8 text-center">
                    <p
                      className="break-words text-xl md:text-3xl lg:text-4xl font-black uppercase leading-tight tracking-tight text-white"
                      style={{
                        fontFamily: "Impact, 'Arial Black', sans-serif",
                        textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 8px #000",
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {topText}
                    </p>
                  </div>
                )}
                {bottomText && (
                  <div className="absolute bottom-4 md:bottom-8 left-0 right-0 px-4 md:px-8 text-center">
                    <p
                      className="break-words text-xl md:text-3xl lg:text-4xl font-black uppercase leading-tight tracking-tight text-white"
                      style={{
                        fontFamily: "Impact, 'Arial Black', sans-serif",
                        textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 8px #000",
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {bottomText}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Friend Modal */}
      {showChallenge && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80" onClick={() => setShowChallenge(false)} />
          <div className="relative w-full max-w-md bg-black border-2 border-yellow-500 p-6 shadow-2xl shadow-yellow-500/20 animate-in zoom-in-95">
            <button
              onClick={() => setShowChallenge(false)}
              className="absolute top-4 right-4 text-yellow-400 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 border-2 border-yellow-500 mb-4">
                <Swords className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                MEME DUEL!
              </h3>
              <p className="text-yellow-300/70 text-sm mt-2">
                Challenge your friends to beat your meme!
              </p>
            </div>

            <div className="bg-yellow-950/30 border border-yellow-900/50 p-4 mb-4">
              <p className="text-yellow-300/80 text-sm">
                I challenge you to beat my Insanity Wolf meme: "{topText} / {bottomText}" Can you do better? insanitywolf.com
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  const text = encodeURIComponent(`I challenge you to beat my Insanity Wolf meme: "${topText} / ${bottomText}" Can you do better? insanitywolf.com`)
                  window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank')
                }}
                className="flex items-center justify-center gap-2 bg-black border border-white/20 text-white p-3 hover:bg-white/10 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </button>
              <button
                onClick={() => {
                  window.open(`https://reddit.com/submit?title=${encodeURIComponent("I challenge you to beat this Insanity Wolf meme")}&url=https://insanitywolf.com`, '_blank')
                }}
                className="flex items-center justify-center gap-2 bg-[#FF4500] text-white p-3 hover:bg-[#FF5722] transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701z"/></svg>
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`I challenge you to beat my Insanity Wolf meme: "${topText} / ${bottomText}" Can you do better? insanitywolf.com`)
                  setShareStatus("copied")
                  setTimeout(() => setShareStatus("idle"), 2000)
                }}
                className={`flex items-center justify-center gap-2 p-3 transition-colors ${
                  shareStatus === "copied" ? 'bg-green-600 text-white' : 'bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/30'
                }`}
              >
                {shareStatus === "copied" ? <Check className="h-5 w-5" /> : <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
