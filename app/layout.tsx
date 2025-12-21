import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Insanity Wolf - The Most Extreme Advice Animal Meme | Create Your Own",
  description:
    "The legendary Insanity Wolf meme archive and generator. Born on 4chan in 2009, create and share extreme advice memes. GOD TIER since day one. Make yours now!",
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
    "extreme meme",
    "chaos meme",
    "advice dog",
  ],
  metadataBase: new URL("https://insanitywolf.com"),
  openGraph: {
    title: "Insanity Wolf - GOD TIER Meme Generator",
    description: "YOU WANT ADVICE?! Create your own Insanity Wolf meme! The legendary advice animal from 4chan. Born in 2009. NO SURVIVORS.",
    type: "website",
    siteName: "Insanity Wolf",
    url: "https://insanitywolf.com",
    images: [
      {
        url: "/insanity-wolf.png",
        width: 600,
        height: 600,
        alt: "Insanity Wolf - The Most Extreme Advice Animal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insanity Wolf - GOD TIER Meme Generator",
    description: "YOU WANT ADVICE?! Create extreme memes with the legendary Insanity Wolf. Born on 4chan 2009. NO SURVIVORS.",
    images: ["/insanity-wolf.png"],
    creator: "@insanitywolf",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: "/insanity-wolf.png",
        sizes: "32x32",
      },
      {
        url: "/insanity-wolf.png",
        sizes: "192x192",
      },
    ],
    apple: "/insanity-wolf.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
