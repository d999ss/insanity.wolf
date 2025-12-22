import { Metadata } from "next"
import { TopicMemePage } from "@/components/topic-meme-page"

export const metadata: Metadata = {
  title: "Work Memes - Insanity Wolf Office & Job Memes",
  description: "Create hilarious Insanity Wolf work memes about your boss, coworkers, meetings, and office life. The most extreme workplace humor generator.",
  keywords: ["work memes", "office memes", "boss memes", "job memes", "workplace humor", "insanity wolf work"],
}

const WORK_EXAMPLES = [
  { top: "BOSS SAYS WORK LATE", bottom: "BURN DOWN THE OFFICE" },
  { top: "COWORKER STEALS MY LUNCH", bottom: "POISON THEIRS" },
  { top: "MANDATORY MEETING AT 8AM", bottom: "SLEEP THROUGH IT AGGRESSIVELY" },
  { top: "EMAIL SAYS URGENT", bottom: "DELETE AND BLAME IT" },
  { top: "DEADLINE IS TOMORROW", bottom: "QUIT TODAY" },
  { top: "PRINTER NOT WORKING", bottom: "OFFICE SPACE IT" },
]

const WORK_SUGGESTIONS = [
  "BOSS WANTS OVERTIME",
  "COWORKER WON'T STOP TALKING",
  "REPLY ALL DISASTER",
  "ZOOM CALL AT 7AM",
  "SOMEONE ATE MY FOOD",
  "MICROMANAGING BOSS",
]

const RELATED_TOPICS = [
  { name: "Monday", href: "/memes/monday" },
  { name: "Coffee", href: "/memes/coffee" },
  { name: "Relationship", href: "/memes/relationship" },
  { name: "Gaming", href: "/memes/gaming" },
]

export default function WorkMemesPage() {
  return (
    <TopicMemePage
      topic="Work"
      tagline="When the 9-to-5 grind calls for extreme measures."
      description="Transform your workplace frustrations into legendary memes. Perfect for sharing in Slack (anonymously, of course)."
      examples={WORK_EXAMPLES}
      suggestions={WORK_SUGGESTIONS}
      relatedTopics={RELATED_TOPICS}
    />
  )
}
