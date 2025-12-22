import { Metadata } from "next"
import { TopicMemePage } from "@/components/topic-meme-page"

export const metadata: Metadata = {
  title: "Coffee Memes - Insanity Wolf Caffeine Addict Memes",
  description: "Create unhinged Insanity Wolf coffee memes about caffeine addiction, mornings, and espresso. The most extreme coffee humor.",
  keywords: ["coffee memes", "caffeine memes", "morning coffee memes", "espresso memes", "insanity wolf coffee"],
}

const COFFEE_EXAMPLES = [
  { top: "COFFEE MACHINE BROKE", bottom: "SNORT THE GROUNDS" },
  { top: "OUT OF COFFEE", bottom: "DECLARE STATE OF EMERGENCY" },
  { top: "DECAF BY ACCIDENT", bottom: "SUE FOR DAMAGES" },
  { top: "SOMEONE TOOK MY MUG", bottom: "TAKE THEIR WILL TO LIVE" },
  { top: "COFFEE TOO HOT", bottom: "DRINK IT ANYWAY ASSERT DOMINANCE" },
  { top: "STARBUCKS SPELLED NAME WRONG", bottom: "LEGALLY CHANGE IT" },
]

const COFFEE_SUGGESTIONS = [
  "NO COFFEE LEFT",
  "WEAK COFFEE",
  "COWORKER FINISHED THE POT",
  "SPILLED MY COFFEE",
  "DECAF DISASTER",
  "COFFEE LINE TOO LONG",
]

const RELATED_TOPICS = [
  { name: "Monday", href: "/memes/monday" },
  { name: "Work", href: "/memes/work" },
  { name: "Relationship", href: "/memes/relationship" },
  { name: "Gaming", href: "/memes/gaming" },
]

export default function CoffeeMemesPage() {
  return (
    <TopicMemePage
      topic="Coffee"
      tagline="When caffeine withdrawal meets zero patience."
      description="For those who understand that coffee isn't a want, it's a need. A violent, desperate need."
      examples={COFFEE_EXAMPLES}
      suggestions={COFFEE_SUGGESTIONS}
      relatedTopics={RELATED_TOPICS}
    />
  )
}
