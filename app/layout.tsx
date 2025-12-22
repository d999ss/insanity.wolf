import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ViralShareWidget } from "@/components/viral-share-widget"
import { TrendingBanner } from "@/components/trending-banner"
import { EmailCapture } from "@/components/email-capture"
import { ExitIntent } from "@/components/exit-intent"
import { LiveCounter } from "@/components/live-counter"
import { SocialProof } from "@/components/social-proof"
import { PWAPrompt } from "@/components/pwa-prompt"
import { FloatingCreateButton } from "@/components/floating-create-button"
import { ReferralWidget } from "@/components/referral-widget"
import { StreakCounter } from "@/components/streak-counter"
import { LeaderboardTeaser } from "@/components/leaderboard-teaser"
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
  title: {
    default: "Insanity Wolf - Official Meme Generator & Archive | The Original Since 2009",
    template: "%s | Insanity Wolf"
  },
  description:
    "The OFFICIAL Insanity Wolf meme generator and archive. The legendary advice animal meme born on 4chan in 2009. Create, share, and explore millions of Insanity Wolf memes. GOD TIER since day one.",
  keywords: [
    "Insanity Wolf",
    "Insanity Wolf meme",
    "Insanity Wolf generator",
    "Insanity Wolf meme generator",
    "insanity wolf meme maker",
    "advice animal",
    "advice animal meme",
    "wolf meme",
    "extreme meme",
    "4chan meme",
    "4chan insanity wolf",
    "create insanity wolf",
    "make insanity wolf meme",
    "insanity wolf template",
    "insanity wolf blank",
    "courage wolf",
    "advice dog",
    "meme generator",
    "meme maker",
    "meme creator",
    "viral meme",
    "funny meme",
    "chaos meme",
    "rage meme",
    "internet meme",
    "classic meme",
    "2009 meme",
    "god tier meme",
  ],
  authors: [{ name: "Insanity Wolf", url: "https://insanitywolf.com" }],
  creator: "Insanity Wolf",
  publisher: "Insanity Wolf",
  category: "Entertainment",
  classification: "Meme Generator",
  metadataBase: new URL("https://insanitywolf.com"),
  alternates: {
    canonical: "https://insanitywolf.com",
  },
  openGraph: {
    title: "Insanity Wolf - The Official Meme Generator Since 2009",
    description: "The OFFICIAL Insanity Wolf meme generator. Create your own legendary advice animal meme! Born on 4chan in 2009. Over 10 million memes created. GOD TIER.",
    type: "website",
    siteName: "Insanity Wolf",
    url: "https://insanitywolf.com",
    locale: "en_US",
    images: [
      {
        url: "/insanity-wolf-template.webp",
        width: 600,
        height: 600,
        alt: "Insanity Wolf - The Most Extreme Advice Animal Meme",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@insanitywolf",
    title: "Insanity Wolf - Official Meme Generator Since 2009",
    description: "The OFFICIAL Insanity Wolf meme generator. Create legendary advice animal memes! Born on 4chan 2009. GOD TIER.",
    images: ["/insanity-wolf-template.webp"],
    creator: "@insanitywolf",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  icons: {
    icon: [
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/icon-dark-32x32.png",
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://insanitywolf.com/#website",
      "url": "https://insanitywolf.com",
      "name": "Insanity Wolf",
      "description": "The OFFICIAL Insanity Wolf meme generator and archive since 2009",
      "publisher": {
        "@id": "https://insanitywolf.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://insanitywolf.com/gallery?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Organization",
      "@id": "https://insanitywolf.com/#organization",
      "name": "Insanity Wolf",
      "url": "https://insanitywolf.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://insanitywolf.com/insanity-wolf-template.webp",
        "width": 600,
        "height": 600
      },
      "sameAs": [
        "https://twitter.com/insanitywolf",
        "https://knowyourmeme.com/memes/insanity-wolf"
      ],
      "foundingDate": "2009"
    },
    {
      "@type": "WebApplication",
      "@id": "https://insanitywolf.com/#webapp",
      "name": "Insanity Wolf Meme Generator",
      "url": "https://insanitywolf.com/create",
      "applicationCategory": "EntertainmentApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "10847",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://insanitywolf.com/#primaryimage",
      "url": "https://insanitywolf.com/insanity-wolf-template.webp",
      "width": 600,
      "height": 600,
      "caption": "Insanity Wolf - The legendary advice animal meme"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Insanity Wolf?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Insanity Wolf is an advice animal image macro meme that originated on 4chan in 2009. It features a fierce-looking wolf and provides intentionally extreme, over-the-top advice for everyday problems."
          }
        },
        {
          "@type": "Question",
          "name": "How do I create an Insanity Wolf meme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visit insanitywolf.com and use our free meme generator. Enter a mundane problem in the top text, add an extreme solution in the bottom text, then download and share your creation."
          }
        },
        {
          "@type": "Question",
          "name": "When was Insanity Wolf created?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Insanity Wolf was created in 2009 on 4chan's /b/ board. It quickly became one of the most popular advice animal memes and has been rated 'GOD TIER' on meme databases."
          }
        }
      ]
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <TrendingBanner />
        {children}
        <ViralShareWidget />
        <LiveCounter />
        <SocialProof />
        <EmailCapture />
        <ExitIntent />
        <PWAPrompt />
        <FloatingCreateButton />
        <ReferralWidget />
        <StreakCounter />
        <LeaderboardTeaser />
        <Analytics />
      </body>
    </html>
  )
}
