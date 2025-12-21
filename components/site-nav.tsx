import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function SiteNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-red-900/50 bg-black/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-red-900/50">
            <Image src="/insanity-wolf.png" alt="Wolf" width={32} height={32} className="object-cover" />
          </div>
          <span className="font-sans text-xl font-black uppercase tracking-tighter text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Insanity Wolf
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/gallery"
            className="text-sm font-semibold text-red-300/80 hover:text-red-400 transition-colors"
          >
            GALLERY
          </Link>
          <Link
            href="/battle"
            className="text-sm font-semibold text-red-300/80 hover:text-red-400 transition-colors"
          >
            BATTLE
          </Link>
          <Link
            href="/create"
            className="text-sm font-semibold text-red-300/80 hover:text-red-400 transition-colors"
          >
            CREATE
          </Link>
          <Link
            href="/store"
            className="text-sm font-semibold text-red-300/80 hover:text-red-400 transition-colors"
          >
            STORE
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button
            size="sm"
            className="gap-2 font-bold bg-red-900 hover:bg-red-800 border border-red-500"
            asChild
          >
            <Link href="/create">
              <Zap className="h-4 w-4" />
              CREATE
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
