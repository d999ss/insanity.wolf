"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Zap, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "/gallery", label: "GALLERY" },
  { href: "/battle", label: "BATTLE" },
  { href: "/create", label: "CREATE" },
  { href: "/store", label: "STORE" },
]

export function HomeNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl chaos-header">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 overflow-hidden border-2 border-red-900/50">
            <Image src="/insanity-wolf.png" alt="Wolf" width={32} height={32} className="object-cover" />
          </div>
          <span className="font-sans text-xl font-black uppercase tracking-tighter text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Insanity Wolf
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-red-300/80 hover:text-red-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Create Button */}
          <Button
            size="default"
            className="hidden gap-2 font-bold bg-red-900 hover:bg-red-800 border border-red-500 px-4 py-2 md:inline-flex"
            asChild
          >
            <Link href="/create">
              <Zap className="h-4 w-4" />
              CREATE
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-red-400 hover:text-red-300 hover:bg-red-950/50"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-black border-red-900/50 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between border-b border-red-900/50 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 overflow-hidden border-2 border-red-900/50">
                      <Image src="/insanity-wolf.png" alt="Wolf" width={32} height={32} className="object-cover" />
                    </div>
                    <span className="font-sans text-lg font-black uppercase tracking-tighter text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                      Menu
                    </span>
                  </div>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-4 px-6 py-4 text-lg font-bold uppercase tracking-wide text-red-300/80 hover:text-red-400 hover:bg-red-950/30 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="border-t border-red-900/50 p-6">
                  <Button
                    size="lg"
                    className="w-full gap-2 font-bold bg-red-900 hover:bg-red-800 border border-red-500"
                    asChild
                    onClick={() => setOpen(false)}
                  >
                    <Link href="/create">
                      <Zap className="h-5 w-5" />
                      CREATE MEME
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
