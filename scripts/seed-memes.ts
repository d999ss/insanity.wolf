import { generateSlug, generateFilename, saveMeme, type Meme } from "../lib/memes"
import { generateMemeImage } from "../lib/generate-image"

// Classic Insanity Wolf memes to seed the database
const seedMemes = [
  { top: "ALARM GOES OFF", bottom: "DESTROY IT WITH YOUR BARE HANDS" },
  { top: "BOSS SAYS GOOD MORNING", bottom: "FLIP THE TABLE AND LEAVE" },
  { top: "SOMEONE CUTS IN LINE", bottom: "ESTABLISH DOMINANCE" },
  { top: "MONDAY MORNING", bottom: "CHOOSE VIOLENCE" },
  { top: "COFFEE MACHINE BROKEN", bottom: "BURN THE BUILDING DOWN" },
  { top: "NEIGHBOR'S DOG BARKING", bottom: "BARK LOUDER" },
  { top: "EX TEXTS YOU", bottom: "BLOCK THE ENTIRE AREA CODE" },
  { top: "TRAFFIC JAM", bottom: "BECOME UNGOVERNABLE" },
  { top: "COWORKER STEALS YOUR LUNCH", bottom: "STEAL THEIR IDENTITY" },
  { top: "PRINTER JAMS", bottom: "OFFICE SPACE THAT THING" },
  { top: "OUT OF COFFEE", bottom: "DECLARE A STATE OF EMERGENCY" },
  { top: "MEETING COULD BE AN EMAIL", bottom: "SEND A RESIGNATION LETTER INSTEAD" },
  { top: "SOMEONE CHEWS LOUDLY", bottom: "ASSERT PRIMAL DOMINANCE" },
  { top: "WIFI IS DOWN", bottom: "EMBRACE THE DARKNESS" },
  { top: "FORGOT HEADPHONES", bottom: "MAKE THE WORLD LISTEN" },
  { top: "ROOMMATE LEFT DISHES", bottom: "LEAVE ROOMMATE" },
  { top: "SLOW WALKER IN FRONT", bottom: "WALK THROUGH THEM" },
  { top: "AUTOCORRECT RUINS TEXT", bottom: "THROW PHONE INTO THE SUN" },
  { top: "PACKAGE IS DELAYED", bottom: "TRACK DOWN THE DRIVER PERSONALLY" },
  { top: "SOMEONE SPOILS THE MOVIE", bottom: "SPOIL THEIR ENTIRE LIFE" },
  { top: "DENTIST APPOINTMENT TODAY", bottom: "TEETH ARE OPTIONAL" },
  { top: "COMPUTER CRASHED", bottom: "ACHIEVE FINAL FORM" },
  { top: "GROUP PROJECT", bottom: "BECOME THE ENTIRE GROUP" },
  { top: "READ BUT NO REPLY", bottom: "SHOW UP AT THEIR HOUSE" },
]

async function seed() {
  console.log("Seeding memes...")

  for (let i = 0; i < seedMemes.length; i++) {
    const { top, bottom } = seedMemes[i]
    console.log(`Creating: ${top} / ${bottom}`)

    const slug = generateSlug(top, bottom)
    const filename = generateFilename(top, bottom)

    try {
      const { webpPath } = await generateMemeImage(top, bottom, filename)

      const meme: Meme = {
        id: slug,
        slug,
        topText: top,
        bottomText: bottom,
        imageUrl: webpPath,
        createdAt: new Date(Date.now() - i * 3600000).toISOString(), // Stagger creation times
        views: Math.floor(Math.random() * 10000) + 100, // Random views for ranking
        shares: Math.floor(Math.random() * 100),
      }

      saveMeme(meme)
      console.log(`  ✓ Created: /meme/${slug}`)
    } catch (error) {
      console.error(`  ✗ Failed: ${error}`)
    }
  }

  console.log("\nSeeding complete!")
}

seed().catch(console.error)
