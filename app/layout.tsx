import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Insanity Wolf - The Most Extreme Advice Animal Meme | Create Your Own",
  description:
    "The legendary Insanity Wolf meme archive and generator. Born on 4chan in 2009, create and share extreme advice memes. 10M+ memes created. Make yours now!",
  keywords: [
    "Insanity Wolf",
    "meme generator",
    "advice animal",
    "meme maker",
    "4chan memes",
    "viral memes",
    "insanity wolf generator",
    "create meme",
    "wolf meme",
  ],
  openGraph: {
    title: "Insanity Wolf - The Most Extreme Advice Animal Ever",
    description: "Create your own Insanity Wolf meme! The legendary advice animal from 4chan. 10M+ memes created.",
    type: "website",
    siteName: "Insanity Wolf",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insanity Wolf Meme Generator",
    description: "Create extreme advice memes with the legendary Insanity Wolf. 10M+ memes created since 2009!",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
