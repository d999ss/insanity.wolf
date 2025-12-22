import { Metadata } from "next"
import { TopicMemePage } from "@/components/topic-meme-page"

export const metadata: Metadata = {
  title: "Gaming Memes - Insanity Wolf Gamer & Video Game Memes",
  description: "Create epic Insanity Wolf gaming memes about rage quitting, noobs, lag, and gamer life. The most extreme gaming humor.",
  keywords: ["gaming memes", "gamer memes", "video game memes", "rage quit memes", "insanity wolf gaming", "esports memes"],
}

const GAMING_EXAMPLES = [
  { top: "TEAMMATE STEALS MY LOOT", bottom: "TEAMKILL AND QUIT" },
  { top: "LAGGING IN RANKED", bottom: "DDOS THE SERVER" },
  { top: "LOST TO A NOOB", bottom: "UNINSTALL LIFE" },
  { top: "MOM SAYS DINNER", bottom: "CAN'T PAUSE ONLINE GAME... OR CAN I" },
  { top: "CONTROLLER DIES MID-GAME", bottom: "THROW IT THROUGH THE TV" },
  { top: "GET CALLED A HACKER", bottom: "TAKE IT AS A COMPLIMENT" },
]

const GAMING_SUGGESTIONS = [
  "RAGE QUIT MOMENT",
  "TOXIC TEAMMATE",
  "PAY TO WIN GAME",
  "CAMPING ENEMY",
  "BROKEN CONTROLLER",
  "UPDATE DURING TOURNAMENT",
]

const RELATED_TOPICS = [
  { name: "Work", href: "/memes/work" },
  { name: "Monday", href: "/memes/monday" },
  { name: "Coffee", href: "/memes/coffee" },
  { name: "Relationship", href: "/memes/relationship" },
]

export default function GamingMemesPage() {
  return (
    <TopicMemePage
      topic="Gaming"
      tagline="When respawning isn't enough revenge."
      description="Channel your gamer rage into legendary memes. Perfect for Discord servers and Twitch chat."
      examples={GAMING_EXAMPLES}
      suggestions={GAMING_SUGGESTIONS}
      relatedTopics={RELATED_TOPICS}
    />
  )
}
