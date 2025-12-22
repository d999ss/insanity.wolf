"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "/gallery", label: "GALLERY" },
  { href: "/battle", label: "BATTLE" },
  { href: "/wiki", label: "WIKI" },
  { href: "/store", label: "STORE" },
]

export function HomeNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-10 z-50 border-b border-red-900/30 bg-black/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="cursor-pointer hover:opacity-70 transition-opacity">
          <span className="font-mono text-sm font-medium uppercase tracking-tight text-white">
            INSANITYWOLF.COM
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-red-400/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Create Button */}
          <Link
            href="/create"
            className="hidden md:inline-flex font-mono text-sm font-medium text-black bg-white hover:bg-white/90 px-4 py-2 transition-colors"
          >
            CREATE
          </Link>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-red-400/70 hover:text-white p-2 transition-colors">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-black border-red-900/30 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between border-b border-red-900/30 p-6">
                  <span className="font-mono text-sm font-medium uppercase text-white">
                    Menu
                  </span>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center px-6 py-3 font-mono text-sm text-red-400/70 hover:text-white hover:bg-red-950/20 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="border-t border-red-900/30 p-6">
                  <Link
                    href="/create"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center font-mono text-sm font-medium text-black bg-white hover:bg-white/90 px-4 py-3 transition-colors w-full"
                  >
                    CREATE MEME
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
