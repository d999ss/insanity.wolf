import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insanity Wolf Templates | Free Meme Templates & Backgrounds",
  description: "Download free Insanity Wolf meme templates. Classic and Extreme Mode versions available. High-quality blank templates with custom background colors for your meme creations.",
  keywords: [
    "insanity wolf template",
    "insanity wolf blank",
    "wolf meme template",
    "insanity wolf background",
    "free meme templates",
    "advice animal template",
    "meme maker template",
    "insanity wolf download",
    "blank meme template",
  ],
  openGraph: {
    title: "Insanity Wolf Templates | Free Downloads",
    description: "Download free Insanity Wolf meme templates. Classic and Extreme Mode versions with custom backgrounds.",
    type: "website",
    images: [
      {
        url: "https://insanitywolf.com/insanity-wolf-template.webp",
        width: 600,
        height: 600,
        alt: "Insanity Wolf Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insanity Wolf Templates",
    description: "Free Insanity Wolf meme templates. Classic and Extreme Mode versions available.",
    images: ["https://insanitywolf.com/insanity-wolf-template.webp"],
  },
  alternates: {
    canonical: "https://insanitywolf.com/templates",
  },
}

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
