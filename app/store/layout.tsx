import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insanity Wolf Store | Official Merch & Apparel",
  description: "Official Insanity Wolf merchandise. T-shirts, hoodies, mugs, and more featuring the legendary meme. High-quality apparel for true chaos enthusiasts.",
  keywords: [
    "insanity wolf merch",
    "insanity wolf shirt",
    "insanity wolf t-shirt",
    "insanity wolf hoodie",
    "insanity wolf mug",
    "wolf meme merch",
    "advice animal merchandise",
    "meme shirts",
    "insanity wolf store",
  ],
  openGraph: {
    title: "Insanity Wolf Store | Official Merch",
    description: "Official Insanity Wolf merchandise. T-shirts, hoodies, mugs, and more featuring the legendary meme.",
    type: "website",
    images: [
      {
        url: "https://insanitywolf.com/insanity-wolf-template.webp",
        width: 600,
        height: 600,
        alt: "Insanity Wolf Merchandise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insanity Wolf Store",
    description: "Official Insanity Wolf merchandise. T-shirts, hoodies, mugs, and more.",
    images: ["https://insanitywolf.com/insanity-wolf-template.webp"],
  },
  alternates: {
    canonical: "https://insanitywolf.com/store",
  },
}

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
