import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insanity Wolf Meme Examples | Inspiration & Ideas",
  description: "Browse classic Insanity Wolf meme examples for inspiration. Learn the format with these legendary examples from 4chan, Reddit, and beyond.",
  keywords: [
    "insanity wolf examples",
    "insanity wolf meme ideas",
    "insanity wolf inspiration",
    "best insanity wolf memes",
    "classic wolf memes",
    "meme examples",
    "advice animal examples",
  ],
  openGraph: {
    title: "Insanity Wolf Meme Examples",
    description: "Classic Insanity Wolf examples for inspiration. See the legendary memes that defined the format.",
    type: "website",
    images: [
      {
        url: "https://insanitywolf.com/insanity-wolf-template.webp",
        width: 600,
        height: 600,
        alt: "Insanity Wolf Examples",
      },
    ],
  },
  alternates: {
    canonical: "https://insanitywolf.com/examples",
  },
}

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
