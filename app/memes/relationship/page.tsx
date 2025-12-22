import { Metadata } from "next"
import { TopicMemePage } from "@/components/topic-meme-page"

export const metadata: Metadata = {
  title: "Relationship Memes - Insanity Wolf Dating & Love Memes",
  description: "Create savage Insanity Wolf relationship memes about dating, marriage, exes, and love. The most unhinged relationship humor.",
  keywords: ["relationship memes", "dating memes", "boyfriend memes", "girlfriend memes", "marriage memes", "insanity wolf relationship"],
}

const RELATIONSHIP_EXAMPLES = [
  { top: "PARTNER SAYS WE NEED TO TALK", bottom: "FAKE YOUR OWN DEATH" },
  { top: "EX TEXTS AT 2AM", bottom: "SCREENSHOT AND BILLBOARD IT" },
  { top: "FORGOT ANNIVERSARY", bottom: "PROPOSE AGAIN TO RESET THE CLOCK" },
  { top: "THEY LEFT ME ON READ", bottom: "SHOW UP IN PERSON" },
  { top: "ARGUMENT OVER NOTHING", bottom: "ESCALATE TO EVERYTHING" },
  { top: "MEET THE PARENTS", bottom: "ASSERT DOMINANCE IMMEDIATELY" },
]

const RELATIONSHIP_SUGGESTIONS = [
  "LEFT ON READ",
  "EX WON'T STOP TEXTING",
  "FORGOT VALENTINE'S DAY",
  "PARTNER IS MAD",
  "FIRST DATE DISASTER",
  "WEDDING PLANNING STRESS",
]

const RELATED_TOPICS = [
  { name: "Work", href: "/memes/work" },
  { name: "Monday", href: "/memes/monday" },
  { name: "Coffee", href: "/memes/coffee" },
  { name: "Gaming", href: "/memes/gaming" },
]

export default function RelationshipMemesPage() {
  return (
    <TopicMemePage
      topic="Relationship"
      tagline="When love needs a little... chaos intervention."
      description="Turn your dating disasters and relationship drama into viral memes. Warning: May cause breakups."
      examples={RELATIONSHIP_EXAMPLES}
      suggestions={RELATIONSHIP_SUGGESTIONS}
      relatedTopics={RELATED_TOPICS}
    />
  )
}
