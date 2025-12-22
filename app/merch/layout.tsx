import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insanity Wolf Merch | Custom Meme Products",
  description: "Create custom Insanity Wolf merchandise with your own meme. T-shirts, hoodies, mugs, and more with your personalized design.",
  keywords: [
    "insanity wolf merch",
    "custom meme merch",
    "meme t-shirt",
    "custom wolf shirt",
    "personalized meme merchandise",
    "meme hoodie",
    "meme products",
  ],
  openGraph: {
    title: "Insanity Wolf Merch | Custom Products",
    description: "Create custom merchandise with your own Insanity Wolf meme design.",
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
  alternates: {
    canonical: "https://insanitywolf.com/merch",
  },
}

export default function MerchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
