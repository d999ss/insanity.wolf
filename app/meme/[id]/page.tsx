import type { Metadata } from "next"
import MemePageClient from "./client"

type Props = {
  params: Promise<{ id: string }>
}

function decodeMeme(id: string): { top: string; bottom: string } | null {
  try {
    const decoded = Buffer.from(id, "base64").toString("utf-8")
    return JSON.parse(decoded)
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const meme = decodeMeme(id)

  if (!meme) {
    return {
      title: "Meme Not Found | Insanity Wolf",
    }
  }

  const title = `${meme.top} / ${meme.bottom} | Insanity Wolf`
  const description = `Insanity Wolf meme: "${meme.top}" - "${meme.bottom}". Create your own at insanitywolf.com!`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Insanity Wolf",
      images: [
        {
          url: "/insanity-wolf-template.webp",
          width: 600,
          height: 600,
          alt: `${meme.top} / ${meme.bottom}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/insanity-wolf-template.webp"],
    },
  }
}

export default async function MemePage({ params }: Props) {
  const { id } = await params
  return <MemePageClient memeId={id} />
}
