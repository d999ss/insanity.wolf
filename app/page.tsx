import { ArrowRight, Users, Flame, Skull, Zap, TrendingUp, Sparkles, Trophy, Clock, Share2 } from "lucide-react"
import Image from "next/image"
import { MemeGenerator } from "@/components/meme-generator"
import { HeroHeadline } from "@/components/hero-headline"
import { ShareButton } from "@/components/share-button"
import { RandomMeme } from "@/components/random-meme"
import { MemeGallery } from "@/components/meme-gallery"
import { DailyChallenge } from "@/components/daily-challenge"
import { LiveFeed } from "@/components/live-feed"
import { AchievementBadge } from "@/components/achievement-badge"
import { MemeBattle } from "@/components/meme-battle"
import { HomeNav } from "@/components/home-nav"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PageViewCounter } from "@/components/page-view-counter"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <HomeNav />

      {/* Hero Section - Classic Meme Format - MAXIMUM CHAOS */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Full screen wolf background */}
        <div className="absolute inset-0">
          <Image
            src="/insanity-wolf.png"
            alt="Insanity Wolf - The Legendary Meme"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70" />
          {/* Blood drip from top */}
          <div className="absolute inset-x-0 top-0 h-32 blood-drip" />
        </div>

        {/* Meme text overlay - classic format: TOP TEXT / BUTTONS / BOTTOM TEXT */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-6 py-24 pt-32">
          <HeroHeadline />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-red-400/70">
            <span className="text-xs font-bold uppercase tracking-widest">SCROLL DOWN</span>
            <ArrowRight className="h-5 w-5 rotate-90" />
          </div>
        </div>
      </section>

      {/* Stats Section - BODY COUNT */}
      <section id="stats" className="relative px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 md:mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="h-4 w-4 text-red-500" />
              <span className="text-red-400">BODY COUNT</span>
            </div>
            <h2 className="text-balance font-sans text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-7xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              HALL OF CARNAGE
            </h2>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-xl text-red-300/70">
              The numbers don't lie. The DESTRUCTION is real.
            </p>
          </div>
          <div className="relative overflow-hidden border-2 border-red-900/50 bg-gradient-to-br from-black via-red-950/20 to-black p-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,0,0,0.1)_0%,transparent_60%)]" />
            <div className="relative grid gap-px bg-red-900/30 grid-cols-2 md:grid-cols-4">
              <PageViewCounter />
              <div className="bg-black p-6 md:p-12 text-center">
                <div className="mb-2 md:mb-4 font-sans text-5xl md:text-7xl font-black text-red-500" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>15+</div>
                <div className="mb-1 md:mb-2 text-sm font-bold uppercase tracking-widest text-red-400">Years of Terror</div>
                <p className="text-xs md:text-sm text-red-300/50">Born in the abyss, 2009</p>
              </div>
              <div className="bg-black p-6 md:p-12 text-center">
                <div className="mb-2 md:mb-4 font-sans text-5xl md:text-7xl font-black text-red-500" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>GOD</div>
                <div className="mb-1 md:mb-2 text-sm font-bold uppercase tracking-widest text-red-400">TIER STATUS</div>
                <p className="text-xs md:text-sm text-red-300/50">Untouchable. Unstoppable.</p>
              </div>
              <div className="bg-black p-6 md:p-12 text-center">
                <div className="mb-2 md:mb-4 font-sans text-5xl md:text-7xl font-black text-red-500" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>100%</div>
                <div className="mb-1 md:mb-2 text-sm font-bold uppercase tracking-widest text-red-400">PURE CHAOS</div>
                <p className="text-xs md:text-sm text-red-300/50">No mercy. No regrets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE HALL OF INSANITY */}
      <section id="gallery" className="relative bg-black/50 px-4 py-12 md:px-6 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-red-950/20" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-8 md:mb-16 text-center">
            <h2 className="text-balance text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              THE HALL OF INSANITY
            </h2>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-xl text-red-300/80">
              You think YOUR meme is crazy?! These people went ALL THE WAY! VOTE!
            </p>
          </div>

          <MemeGallery />
        </div>
      </section>

      {/* History Section - ORIGIN STORY */}
      <section id="history" className="relative border-y border-red-900/30 bg-black px-4 py-12 md:px-6 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/10" />
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-balance font-sans text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              WHERE DID THIS COME FROM?!
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed text-red-300/70">
            <p className="horror-shake">
              You want the HISTORY?! Let me TELL you about 2009! 4chan's /b/ board — the place your parents warned you about! Someone looked at a motivational poster and said "You know what? NO! I'm gonna do the OPPOSITE!" AND THEY DID IT! THEY ACTUALLY DID IT!
            </p>

            <p>
              This wolf? This beautiful, ANGRY wolf? He'd been floating around the internet since 2006! Just WAITING! Waiting for someone crazy enough to give him a VOICE! And when they did?! BOOM! EVERYTHING CHANGED!
            </p>

            <p>
              They called it "GOD TIER" on Memegenerator! GOD! TIER! You know why?! Because this wolf doesn't give you advice your THERAPIST gives you! No! He gives you the advice that gets you on a WATCHLIST! And people LOVED IT! MILLIONS of them!
            </p>

            <p className="font-bold text-red-400">
              Then came "Baby Insanity Wolf" — for people who want to be EDGY but still want to go to HEAVEN! Can't commit to the FULL insanity! HALF MEASURES! THAT'S WHAT THAT IS!
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-y border-red-900/30 bg-red-950/20 px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 md:mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/50 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-4 w-4 text-red-500" />
              <span className="text-red-400">FEELING DANGEROUS?!</span>
            </div>
            <h2 className="text-balance font-sans text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              SPIN THE WHEEL OF CHAOS
            </h2>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-lg text-red-300/70">
              Let the UNIVERSE decide how UNHINGED you're gonna get today!
            </p>
          </div>

          <RandomMeme />
        </div>
      </section>

      {/* Wiki Section */}
      <section id="wiki" className="relative px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-20 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Skull className="h-4 w-4 text-red-500" />
              <span className="text-red-400">ENCYCLOPEDIA</span>
            </div>
            <h2 className="text-balance font-sans text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              The Ultimate
              <span className="mt-1 md:mt-2 block text-primary">Insanity Wolf Archive</span>
            </h2>
            <p className="mx-auto mt-4 md:mt-6 max-w-3xl text-balance text-base md:text-lg leading-relaxed text-muted-foreground">
              Everything you need to know about the legendary meme
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-12 lg:col-span-2">
              {/* Overview */}
              <div className="overflow-hidden border-2 border-border bg-gradient-to-br from-card via-card to-muted/30">
                <div className="border-b border-border bg-muted/50 px-8 py-6">
                  <h3 className="font-sans text-2xl font-black uppercase tracking-tight">Overview</h3>
                </div>
                <div className="space-y-6 p-8 text-base leading-relaxed text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Insanity Wolf</strong> is a notorious advice animal image macro
                    series featuring a snarling gray wolf set against a multicolored ray background, with bold text
                    offering outrageous "advice." In the late 2000s and early 2010s, Insanity Wolf became emblematic of
                    the internet's penchant for edgy, taboo-breaking humor, standing out even among its meme
                    contemporaries for encouraging acts of insanity – from wanton violence to outright depravity.
                  </p>
                  <p>
                    The meme parodies the self-help and motivational advice genre by suggesting the most outrageously
                    violent or insane course of action imaginable. It represented the internet's id unleashed – saying
                    what no one would ever actually do, the intrusive crazy thought given shape.
                  </p>
                  <div className="grid gap-4 border border-border bg-background/50 p-6 md:grid-cols-2">
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground">Origin</p>
                      <p className="text-sm">4chan's /b/ board, 2009</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground">Format</p>
                      <p className="text-sm">Advice Animal Image Macro</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground">Status</p>
                      <p className="text-sm">God Tier on Memegenerator</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground">Ranking</p>
                      <p className="text-sm">#3 Most-Used Template (2018)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Origins & History */}
              <div className="overflow-hidden border-2 border-border bg-gradient-to-br from-card via-card to-muted/30">
                <div className="border-b border-border bg-muted/50 px-8 py-6">
                  <h3 className="font-sans text-2xl font-black uppercase tracking-tight">Origins & Evolution</h3>
                </div>
                <div className="space-y-6 p-8 text-base leading-relaxed text-muted-foreground">
                  <div>
                    <h4 className="mb-3 font-sans text-lg font-bold text-foreground">The Source Image</h4>
                    <p>
                      The iconic wolf photograph had been circulating online since at least 2006, appearing on YTMND in
                      October 2006 (titled "OMGWTFHOLYSHI-!") and on Flickr in 2007. The photo even appeared in a 1999
                      printing of The Hound of the Baskervilles, suggesting it was likely a generic stock photograph
                      that meme creators repurposed.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-3 font-sans text-lg font-bold text-foreground">Birth on 4chan (2009)</h4>
                    <p>
                      Insanity Wolf was spawned on 4chan's /b/ (random) board in 2009 as an offshoot of the "advice
                      animal" meme genre. By late 2009, one user had slapped boldface text onto the wolf photo, and a
                      legendary meme was born. The format took the concept of offering life advice and warped it into
                      deranged counsel – suggesting rape, murder, and other acts of insanity.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-3 font-sans text-lg font-bold text-foreground">Rise to God Tier (2009-2011)</h4>
                    <p>
                      After its 4chan debut, Insanity Wolf quickly spread to Memegenerator and Memebase. On
                      Memegenerator.net, it was soon ranked in the coveted "God Tier" – the 6th member alongside
                      classics like Advice Dog. By early 2009, the meme had "gained large popularity." A dedicated
                      Facebook app even appeared, showing its penetration into mainstream social media.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-3 font-sans text-lg font-bold text-foreground">Peak Era (2010-2012)</h4>
                    <p>
                      By 2010, Insanity Wolf macros were ubiquitous on Memebase and Reddit's r/AdviceAnimals subreddit.
                      The meme's brand of hyperbolic violence appealed to massive audiences. It was commonly referenced
                      alongside Foul Bachelor Frog and Socially Awkward Penguin as an example of the format's range –
                      from gross humor to Insanity Wolf's shock value.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-3 font-sans text-lg font-bold text-foreground">Cultural Milestone (2018)</h4>
                    <p>
                      The U.S. Library of Congress Web Cultures Archive highlighted Insanity Wolf's enduring footprint:
                      in a crawl of the MemeGenerator database, Insanity Wolf ranked as the{" "}
                      <strong className="text-foreground">#3 most frequent meme template</strong> with 610 distinct
                      instances archived, behind only "Y U No" Guy and Futurama Fry. This solidified it as one of the
                      top-used advice animal templates in internet history.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-3 font-sans text-lg font-bold text-foreground">Nostalgic Resurgence (2020)</h4>
                    <p>
                      Amid COVID-19 lockdowns, Gizmodo published "We Need Insanity Wolf Now More Than Ever," arguing
                      that the meme's spirit of howling rage might be cathartic. This media shout-out indicates how
                      Insanity Wolf lives on in internet memory as a cultural touchstone.
                    </p>
                  </div>
                </div>
              </div>

              {/* Format & Structure */}
              <div className="overflow-hidden border-2 border-border bg-gradient-to-br from-card via-card to-muted/30">
                <div className="border-b border-border bg-muted/50 px-8 py-6">
                  <h3 className="font-sans text-2xl font-black uppercase tracking-tight">Format & Structure</h3>
                </div>
                <div className="space-y-6 p-8 text-base leading-relaxed text-muted-foreground">
                  <div>
                    <h4 className="mb-3 font-sans text-lg font-bold text-foreground">Visual Format</h4>
                    <p>
                      The standard image is the wolf's head set against a stark multicolored radiating background with
                      Impact-font text in white, outlined in black, at the top and bottom. The format is identical to
                      other advice animals, making the meme instantly recognizable and easy to generate.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-3 font-sans text-lg font-bold text-foreground">Text Structure</h4>
                    <ul className="list-inside list-disc space-y-2 pl-4">
                      <li>
                        <strong className="text-foreground">Top Text:</strong> Presents a situation or trigger (usually
                        mundane)
                      </li>
                      <li>
                        <strong className="text-foreground">Bottom Text:</strong> Delivers Insanity Wolf's insane advice
                        or reaction (always extreme)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-sans text-lg font-bold text-foreground">Common Themes</h4>
                    <ul className="list-inside list-disc space-y-2 pl-4">
                      <li>
                        <strong className="text-foreground">Violence & Murder:</strong> Escalation to lethal violence as
                        the punchline
                      </li>
                      <li>
                        <strong className="text-foreground">Crime & Chaos:</strong> Advising robbery, arson, assault,
                        and worse
                      </li>
                      <li>
                        <strong className="text-foreground">Self-Harm:</strong> Suggesting self-mutilation or insane
                        feats
                      </li>
                      <li>
                        <strong className="text-foreground">Cathartic Rage:</strong> Voice to darkest possible impulse
                        in any scenario
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Iconic Examples */}
              <div className="overflow-hidden border-2 border-border bg-gradient-to-br from-card via-card to-muted/30">
                <div className="border-b border-border bg-muted/50 px-8 py-6">
                  <h3 className="font-sans text-2xl font-black uppercase tracking-tight">Legendary Examples</h3>
                </div>
                <div className="space-y-4 p-8 text-base leading-relaxed text-muted-foreground">
                  <p className="text-sm italic">
                    These infamous captions became defining examples of the meme's shock humor style:
                  </p>
                  <div className="space-y-3">
                    {[
                      { top: "Parents catch you masturbating", bottom: "Look them in the eye and finish, LIKE A BOSS" },
                      { top: "The snack that smiles back", bottom: "CHILDREN" },
                      { top: "Bring a knife to", bottom: "A paintball match" },
                      { top: "Friends invite you to paintball", bottom: "Bring a knife" },
                      { top: "To contribute to society, donate blood", bottom: "ALL OF IT!" },
                      { top: "Feeling bored?", bottom: "Free Satan from the depths of Hell" },
                      { top: "Baby on board sign", bottom: "TARGET ACQUIRED" },
                      { top: "Deck the halls", bottom: "With bloody corpses" },
                    ].map((meme, i) => (
                      <div key={i} className="border border-border bg-background/50 p-4">
                        <p className="mb-1 text-sm font-bold uppercase text-foreground">{meme.top}</p>
                        <p className="text-sm font-black uppercase text-primary">{meme.bottom}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Variants & Spin-Offs */}
              <div className="overflow-hidden border-2 border-border bg-gradient-to-br from-card via-card to-muted/30">
                <div className="border-b border-border bg-muted/50 px-8 py-6">
                  <h3 className="font-sans text-2xl font-black uppercase tracking-tight">Variants & Spin-Offs</h3>
                </div>
                <div className="space-y-6 p-8 text-base leading-relaxed text-muted-foreground">
                  <div>
                    <h4 className="mb-3 font-sans text-lg font-bold text-foreground">Baby Insanity Wolf (2013)</h4>
                    <p>
                      Features a cute howling wolf cub offering petty acts of rebellion instead of extreme violence.
                      Examples include "Agrees to Terms and Conditions – Doesn't read all the way through" and "Mom
                      tucks you in – Refuse the goodnight kiss." Born in December 2013 as a satirical response to
                      "tamed" Insanity Wolf posts.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-3 font-sans text-lg font-bold text-foreground">Scene Wolf (2009-2010)</h4>
                    <p>
                      Combines Insanity Wolf's face with multicolored "scene hair" to parody emo/punk teen culture.
                      Captions typically present melodramatic parent-teen conflicts like "OMG Mom, get out! I'm making a
                      video!" First appeared in late 2009, achieving moderate success with a couple hundred examples.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-3 font-sans text-lg font-bold text-foreground">Animeme Series</h4>
                    <p>
                      Insanity Wolf appeared as a voiced character in the animated YouTube series Animeme, complete with
                      rap battles against other meme characters. Notable lines include "I feed the homeless, TO the
                      homeless."
                    </p>
                  </div>
                </div>
              </div>

              {/* Cultural Impact */}
              <div className="overflow-hidden border-2 border-border bg-gradient-to-br from-card via-card to-muted/30">
                <div className="border-b border-border bg-muted/50 px-8 py-6">
                  <h3 className="font-sans text-2xl font-black uppercase tracking-tight">Cultural Impact</h3>
                </div>
                <div className="space-y-6 p-8 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Insanity Wolf represented a pivotal moment in internet humor, pushing the boundaries of what was
                    acceptable in meme culture. It embodied the "edgelord" aesthetic of early 2010s internet, where
                    shock value and transgression were forms of social currency on platforms like 4chan and Reddit.
                  </p>
                  <div className="border border-border bg-background/50 p-6">
                    <h4 className="mb-4 font-sans text-lg font-bold text-foreground">Legacy Metrics</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <p className="text-2xl font-black text-primary">610+</p>
                        <p className="text-sm">Archived instances in Library of Congress</p>
                      </div>
                      <div>
                        <p className="text-2xl font-black text-primary">#3</p>
                        <p className="text-sm">Most-used meme template (2018)</p>
                      </div>
                      <div>
                        <p className="text-2xl font-black text-primary">God Tier</p>
                        <p className="text-sm">Memegenerator ranking</p>
                      </div>
                      <div>
                        <p className="text-2xl font-black text-primary">2009-2012</p>
                        <p className="text-sm">Peak popularity era</p>
                      </div>
                    </div>
                  </div>
                  <p>
                    As meme culture evolved in the mid-2010s, Insanity Wolf became a nostalgic touchstone – a reminder
                    of internet humor's wilder days. While its shock-value style fell out of favor as platforms matured,
                    it remains one of the most recognizable and influential advice animals ever created.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Facts */}
              <div className="sticky top-8 overflow-hidden border-2 border-border bg-gradient-to-br from-card via-card to-muted/30">
                <div className="border-b border-border bg-muted/50 px-6 py-4">
                  <h3 className="font-sans text-xl font-black uppercase tracking-tight">Quick Facts</h3>
                </div>
                <div className="space-y-4 p-6 text-sm">
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">First Seen</p>
                    <p className="font-bold text-foreground">2009 (4chan /b/)</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Know Your Meme Entry
                    </p>
                    <p className="font-bold text-foreground">November 2009</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">Peak Years</p>
                    <p className="font-bold text-foreground">2009-2012</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Image Source
                    </p>
                    <p className="font-bold text-foreground">Stock photo (pre-2006)</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Library of Congress
                    </p>
                    <p className="font-bold text-foreground">610 instances archived</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Platform Rank
                    </p>
                    <p className="font-bold text-foreground">#3 Most-Used Template</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Character Type
                    </p>
                    <p className="font-bold text-foreground">Chaotic Evil</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">Humor Style</p>
                    <p className="font-bold text-foreground">Shock / Dark Comedy</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="overflow-hidden border-2 border-border bg-gradient-to-br from-card via-card to-muted/30">
                <div className="border-b border-border bg-muted/50 px-6 py-4">
                  <h3 className="font-sans text-xl font-black uppercase tracking-tight">Timeline</h3>
                </div>
                <div className="space-y-4 p-6 text-sm">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-black text-primary">2006</div>
                    <div className="text-muted-foreground">Wolf photo circulates online</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-black text-primary">2009</div>
                    <div className="text-muted-foreground">Meme born on 4chan /b/</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-black text-primary">2009</div>
                    <div className="text-muted-foreground">Reaches God Tier status</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-black text-primary">2010</div>
                    <div className="text-muted-foreground">Peak viral spread</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-black text-primary">2013</div>
                    <div className="text-muted-foreground">Baby Insanity Wolf emerges</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-black text-primary">2018</div>
                    <div className="text-muted-foreground">Library of Congress archives</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-black text-primary">2020</div>
                    <div className="text-muted-foreground">Nostalgic resurgence</div>
                  </div>
                </div>
              </div>

              {/* Related Memes */}
              <div className="overflow-hidden border-2 border-border bg-gradient-to-br from-card via-card to-muted/30">
                <div className="border-b border-border bg-muted/50 px-6 py-4">
                  <h3 className="font-sans text-xl font-black uppercase tracking-tight">Related Memes</h3>
                </div>
                <div className="space-y-3 p-6 text-sm">
                  <div>
                    <p className="font-bold text-foreground">Advice Dog</p>
                    <p className="text-xs text-muted-foreground">Original advice animal (2006)</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Baby Insanity Wolf</p>
                    <p className="text-xs text-muted-foreground">Petty rebellion variant (2013)</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Scene Wolf</p>
                    <p className="text-xs text-muted-foreground">Emo/punk teen parody (2009)</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Foul Bachelor Frog</p>
                    <p className="text-xs text-muted-foreground">Gross habit advice (2009)</p>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Socially Awkward Penguin</p>
                    <p className="text-xs text-muted-foreground">Social anxiety meme (2009)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black px-4 py-12 md:px-6 md:py-24 heavy-scanlines">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/10" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-8 md:mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Zap className="h-4 w-4 text-red-500" />
              <span className="text-red-400">JOIN THE CHAOS</span>
            </div>
            <h2 className="text-balance font-sans text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              ENTER THE WARZONE
            </h2>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-xl text-red-300/70">
              Daily challenges and epic meme battles happening RIGHT NOW
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            <DailyChallenge />
            <LiveFeed />
          </div>
        </div>
      </section>

      <section className="relative px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 md:mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Flame className="h-4 w-4 text-red-500" />
              <span className="text-red-400">FIGHT TO THE DEATH</span>
            </div>
            <h2 className="text-balance font-sans text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-5xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              MEME BATTLE ROYALE
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base md:text-lg text-red-300/70">
              CHOOSE YOUR CHAMPION!
            </p>
          </div>

          <MemeBattle />
        </div>
      </section>

      <section className="relative border-y border-red-900/30 bg-black px-4 py-12 md:px-6 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/10" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-8 md:mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Trophy className="h-4 w-4 text-red-500" />
              <span className="text-red-400">TROPHIES</span>
            </div>
            <h2 className="text-balance font-sans text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              EARN YOUR SCARS
            </h2>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-xl text-red-300/70">
              Create memes, DESTROY opponents, unlock badges
            </p>
          </div>

          <AchievementBadge />
        </div>
      </section>

      <section id="generator" className="relative px-4 py-12 md:px-6 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/10" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-8 md:mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Zap className="h-4 w-4 text-red-500" />
              <span className="text-red-400">MEME FORGE</span>
            </div>
            <h2 className="text-balance font-sans text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-5xl lg:text-6xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              CREATE YOUR OWN
              <span className="mt-1 md:mt-2 block text-red-500">INSANITY WOLF MEME</span>
            </h2>
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-pretty text-base md:text-xl text-red-300/70">
              Create. Download. DESTROY.
            </p>
          </div>

          <div className="flex justify-center">
            <MemeGenerator />
          </div>

          <div className="mt-8 md:mt-16 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
            <div className="border border-red-900/30 bg-black/50 p-4 md:p-6 text-center">
              <div className="mb-3 md:mb-4 flex justify-center">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center bg-red-950/50 border border-red-900/50">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-red-500" />
                </div>
              </div>
              <h3 className="mb-2 font-sans text-base md:text-lg font-bold text-red-400" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>INSTANT CHAOS</h3>
              <p className="text-xs md:text-sm text-red-300/60">Type. Generate. Destroy.</p>
            </div>
            <div className="border border-red-900/30 bg-black/50 p-4 md:p-6 text-center">
              <div className="mb-3 md:mb-4 flex justify-center">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center bg-red-950/50 border border-red-900/50">
                  <Flame className="h-5 w-5 md:h-6 md:w-6 text-red-500" />
                </div>
              </div>
              <h3 className="mb-2 font-sans text-base md:text-lg font-bold text-red-400" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>MAX QUALITY</h3>
              <p className="text-xs md:text-sm text-red-300/60">Perfect resolution.</p>
            </div>
            <div className="border border-red-900/30 bg-black/50 p-4 md:p-6 text-center">
              <div className="mb-3 md:mb-4 flex justify-center">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center bg-red-950/50 border border-red-900/50">
                  <Share2 className="h-5 w-5 md:h-6 md:w-6 text-red-500" />
                </div>
              </div>
              <h3 className="mb-2 font-sans text-base md:text-lg font-bold text-red-400" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>SPREAD IT</h3>
              <p className="text-xs md:text-sm text-red-300/60">Download and share.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section - MAXIMUM RAGE */}
      <section className="relative border-y border-red-900/50 bg-card px-4 py-12 md:px-6 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        <div className="relative mx-auto max-w-5xl text-center">
          <blockquote className="space-y-4 md:space-y-6">
            <div className="text-4xl md:text-6xl opacity-40 text-red-500">"</div>
            <p className="text-xl font-black uppercase leading-tight tracking-tight text-foreground sm:text-2xl md:text-4xl" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              Got PROBLEMS?
              <span className="text-red-500"> SET IT ON FIRE!</span>
            </p>
            <footer className="pt-2 md:pt-4 text-xs md:text-sm font-bold uppercase tracking-widest text-red-400/70">
              — THE ONLY PHILOSOPHY
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Footer - CHAOS */}
      <footer className="border-t border-red-900/50 bg-black px-4 py-10 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center gap-3 cursor-pointer">
                <div className="relative h-12 w-12 bg-red-950/50 overflow-hidden border-2 border-red-900/50">
                  <Image src="/insanity-wolf.png" alt="Insanity Wolf" fill className="object-cover" />
                </div>
                <div className="text-2xl font-black tracking-tighter" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>INSANITY WOLF</div>
              </div>
              <p className="mb-6 max-w-md text-pretty leading-relaxed text-red-300/60">
                The legendary advice animal that DESTROYED internet humor since 2009. Over 10 million memes. ZERO regrets. MAXIMUM chaos.
              </p>
              <div className="flex gap-4">
                <ShareButton
                  title="Insanity Wolf - The Most Extreme Meme"
                  text="Check out Insanity Wolf, the legendary advice animal meme!"
                />
              </div>
            </div>

            <div>
              <h4 className="mb-6 font-sans text-sm font-bold uppercase tracking-wider text-red-400" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Quick Links</h4>
              <ul className="space-y-3 text-red-300/70">
                <li>
                  <a
                    href="/gallery"
                    className="blood-underline inline-block hover:text-red-400"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/battle"
                    className="blood-underline inline-block hover:text-red-400"
                  >
                    Battle Arena
                  </a>
                </li>
                <li>
                  <a
                    href="/create"
                    className="blood-underline inline-block hover:text-red-400"
                  >
                    Create Meme
                  </a>
                </li>
                <li>
                  <a
                    href="/store"
                    className="blood-underline inline-block hover:text-red-400"
                  >
                    Store
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-sans text-sm font-bold uppercase tracking-wider text-red-400" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>KILL COUNT</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-red-500" />
                  <span className="text-red-300/70">10M+ Souls Corrupted</span>
                </li>
                <li className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-red-500" />
                  <span className="text-red-300/70">GOD TIER Since Day One</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-red-500" />
                  <span className="text-red-300/70">Terrorizing Since 2009</span>
                </li>
                <li className="flex items-center gap-2">
                  <Skull className="h-4 w-4 text-red-500" />
                  <span className="text-red-300/70">Born in the Abyss</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-red-900/30 pt-8 text-center text-sm text-red-400/50">
            <p>
              © 2009-2025 INSANITY WOLF. Born from chaos. Fed by rage. DON'T follow this advice. We're NOT responsible for the consequences.
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
