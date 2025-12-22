import { Metadata } from "next"
import { TopicMemePage } from "@/components/topic-meme-page"

export const metadata: Metadata = {
  title: "Monday Memes - Insanity Wolf Hating Mondays Memes",
  description: "Create brutal Insanity Wolf Monday memes about hating the start of the week. The most extreme Monday motivation.",
  keywords: ["monday memes", "i hate mondays", "monday motivation memes", "work week memes", "insanity wolf monday"],
}

const MONDAY_EXAMPLES = [
  { top: "MONDAY MORNING", bottom: "SKIP STRAIGHT TO FRIDAY" },
  { top: "ALARM GOES OFF", bottom: "CHOOSE VIOLENCE" },
  { top: "IT'S ONLY MONDAY", bottom: "HIBERNATE UNTIL WEEKEND" },
  { top: "MONDAY MEETING", bottom: "FAKE A POWER OUTAGE" },
  { top: "CASE OF THE MONDAYS", bottom: "CASE OF THE LAWSUITS" },
  { top: "SURVIVED MONDAY", bottom: "BARELY" },
]

const MONDAY_SUGGESTIONS = [
  "ALARM WON'T STOP",
  "TRAFFIC ON MONDAY",
  "MONDAY DEADLINE",
  "WEEKLY STANDUP",
  "5 DAYS UNTIL FRIDAY",
  "MONDAY MOTIVATION",
]

const RELATED_TOPICS = [
  { name: "Work", href: "/memes/work" },
  { name: "Coffee", href: "/memes/coffee" },
  { name: "Relationship", href: "/memes/relationship" },
  { name: "Gaming", href: "/memes/gaming" },
]

export default function MondayMemesPage() {
  return (
    <TopicMemePage
      topic="Monday"
      tagline="Because Garfield had the right idea."
      description="Express your Monday hatred with the intensity it deserves. Share with coworkers who understand."
      examples={MONDAY_EXAMPLES}
      suggestions={MONDAY_SUGGESTIONS}
      relatedTopics={RELATED_TOPICS}
    />
  )
}
