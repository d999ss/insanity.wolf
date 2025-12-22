import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Random Insanity Wolf Meme | Surprise Me",
  description: "Get a random Insanity Wolf meme! Click to discover classic and new memes from our collection. Never know what chaos you'll find.",
  keywords: [
    "random insanity wolf",
    "random meme generator",
    "surprise meme",
    "random wolf meme",
    "meme randomizer",
  ],
  openGraph: {
    title: "Random Insanity Wolf Meme",
    description: "Get a random meme from our collection. Surprise yourself with chaos.",
    type: "website",
    images: [
      {
        url: "https://insanitywolf.com/insanity-wolf-template.webp",
        width: 600,
        height: 600,
        alt: "Random Insanity Wolf",
      },
    ],
  },
  alternates: {
    canonical: "https://insanitywolf.com/random",
  },
}

export default function RandomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
