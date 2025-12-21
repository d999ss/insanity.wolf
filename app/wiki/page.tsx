import { Skull, Flame, ArrowRight } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { ScrollToTop } from "@/components/scroll-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insanity Wolf Wiki | History, Origins & Lore",
  description: "The complete encyclopedia of Insanity Wolf. Learn the history, origins, and cultural impact of the legendary advice animal meme born in 2009.",
  openGraph: {
    title: "Insanity Wolf Wiki - The Complete Encyclopedia",
    description: "Everything you need to know about the legendary meme. Origins, history, and cultural impact.",
  },
}

export default function WikiPage() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-black to-black" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs font-bold uppercase tracking-wider">
              <Skull className="h-4 w-4 text-red-500" />
              <span className="text-red-400">ENCYCLOPEDIA</span>
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              The Ultimate
              <span className="block text-red-500">Insanity Wolf Archive</span>
            </h1>
            <p className="mx-auto mt-4 md:mt-6 max-w-3xl text-base md:text-lg text-red-300/70">
              Everything you need to know about the legendary meme
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-12 lg:col-span-2">
              {/* Overview */}
              <div className="overflow-hidden border-2 border-red-900/50 bg-gradient-to-br from-black via-red-950/10 to-black">
                <div className="border-b border-red-900/50 bg-red-950/30 px-6 py-4 md:px-8 md:py-6">
                  <h2 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Overview</h2>
                </div>
                <div className="space-y-6 p-6 md:p-8 text-sm md:text-base leading-relaxed text-red-300/70">
                  <p>
                    <strong className="text-white">Insanity Wolf</strong> is a notorious advice animal image macro
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
                  <div className="grid gap-4 border border-red-900/50 bg-black/50 p-4 md:p-6 md:grid-cols-2">
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-400">Origin</p>
                      <p className="text-sm text-white">4chan's /b/ board, 2009</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-400">Format</p>
                      <p className="text-sm text-white">Advice Animal Image Macro</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-400">Status</p>
                      <p className="text-sm text-white">God Tier on Memegenerator</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-400">Ranking</p>
                      <p className="text-sm text-white">#3 Most-Used Template (2018)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Origins & History */}
              <div className="overflow-hidden border-2 border-red-900/50 bg-gradient-to-br from-black via-red-950/10 to-black">
                <div className="border-b border-red-900/50 bg-red-950/30 px-6 py-4 md:px-8 md:py-6">
                  <h2 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Origins & Evolution</h2>
                </div>
                <div className="space-y-6 p-6 md:p-8 text-sm md:text-base leading-relaxed text-red-300/70">
                  <div>
                    <h3 className="mb-3 font-sans text-base md:text-lg font-bold text-white">The Source Image</h3>
                    <p>
                      The iconic wolf photograph had been circulating online since at least 2006, appearing on YTMND in
                      October 2006 (titled "OMGWTFHOLYSHI-!") and on Flickr in 2007. The photo even appeared in a 1999
                      printing of The Hound of the Baskervilles, suggesting it was likely a generic stock photograph
                      that meme creators repurposed.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 font-sans text-base md:text-lg font-bold text-white">Birth on 4chan (2009)</h3>
                    <p>
                      Insanity Wolf was spawned on 4chan's /b/ (random) board in 2009 as an offshoot of the "advice
                      animal" meme genre. By late 2009, one user had slapped boldface text onto the wolf photo, and a
                      legendary meme was born. The format took the concept of offering life advice and warped it into
                      deranged counsel – suggesting rape, murder, and other acts of insanity.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 font-sans text-base md:text-lg font-bold text-white">Rise to God Tier (2009-2011)</h3>
                    <p>
                      After its 4chan debut, Insanity Wolf quickly spread to Memegenerator and Memebase. On
                      Memegenerator.net, it was soon ranked in the coveted "God Tier" – the 6th member alongside
                      classics like Advice Dog. By early 2009, the meme had "gained large popularity." A dedicated
                      Facebook app even appeared, showing its penetration into mainstream social media.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 font-sans text-base md:text-lg font-bold text-white">Peak Era (2010-2012)</h3>
                    <p>
                      By 2010, Insanity Wolf macros were ubiquitous on Memebase and Reddit's r/AdviceAnimals subreddit.
                      The meme's brand of hyperbolic violence appealed to massive audiences. It was commonly referenced
                      alongside Foul Bachelor Frog and Socially Awkward Penguin as an example of the format's range –
                      from gross humor to Insanity Wolf's shock value.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 font-sans text-base md:text-lg font-bold text-white">Cultural Milestone (2018)</h3>
                    <p>
                      The U.S. Library of Congress Web Cultures Archive highlighted Insanity Wolf's enduring footprint:
                      in a crawl of the MemeGenerator database, Insanity Wolf ranked as the{" "}
                      <strong className="text-white">#3 most frequent meme template</strong> with 610 distinct
                      instances archived, behind only "Y U No" Guy and Futurama Fry. This solidified it as one of the
                      top-used advice animal templates in internet history.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 font-sans text-base md:text-lg font-bold text-white">Nostalgic Resurgence (2020)</h3>
                    <p>
                      Amid COVID-19 lockdowns, Gizmodo published "We Need Insanity Wolf Now More Than Ever," arguing
                      that the meme's spirit of howling rage might be cathartic. This media shout-out indicates how
                      Insanity Wolf lives on in internet memory as a cultural touchstone.
                    </p>
                  </div>
                </div>
              </div>

              {/* Format & Structure */}
              <div className="overflow-hidden border-2 border-red-900/50 bg-gradient-to-br from-black via-red-950/10 to-black">
                <div className="border-b border-red-900/50 bg-red-950/30 px-6 py-4 md:px-8 md:py-6">
                  <h2 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Format & Structure</h2>
                </div>
                <div className="space-y-6 p-6 md:p-8 text-sm md:text-base leading-relaxed text-red-300/70">
                  <div>
                    <h3 className="mb-3 font-sans text-base md:text-lg font-bold text-white">Visual Format</h3>
                    <p>
                      The standard image is the wolf's head set against a stark multicolored radiating background with
                      Impact-font text in white, outlined in black, at the top and bottom. The format is identical to
                      other advice animals, making the meme instantly recognizable and easy to generate.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 font-sans text-base md:text-lg font-bold text-white">Text Structure</h3>
                    <ul className="list-inside list-disc space-y-2 pl-4">
                      <li>
                        <strong className="text-white">Top Text:</strong> Presents a situation or trigger (usually mundane)
                      </li>
                      <li>
                        <strong className="text-white">Bottom Text:</strong> Delivers Insanity Wolf's insane advice or reaction (always extreme)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 font-sans text-base md:text-lg font-bold text-white">Common Themes</h3>
                    <ul className="list-inside list-disc space-y-2 pl-4">
                      <li>
                        <strong className="text-white">Violence & Murder:</strong> Escalation to lethal violence as the punchline
                      </li>
                      <li>
                        <strong className="text-white">Crime & Chaos:</strong> Advising robbery, arson, assault, and worse
                      </li>
                      <li>
                        <strong className="text-white">Self-Harm:</strong> Suggesting self-mutilation or insane feats
                      </li>
                      <li>
                        <strong className="text-white">Cathartic Rage:</strong> Voice to darkest possible impulse in any scenario
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Iconic Examples */}
              <div className="overflow-hidden border-2 border-red-900/50 bg-gradient-to-br from-black via-red-950/10 to-black">
                <div className="border-b border-red-900/50 bg-red-950/30 px-6 py-4 md:px-8 md:py-6">
                  <h2 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Legendary Examples</h2>
                </div>
                <div className="space-y-4 p-6 md:p-8 text-sm md:text-base leading-relaxed text-red-300/70">
                  <p className="text-xs md:text-sm italic">
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
                      <div key={i} className="border border-red-900/50 bg-black/50 p-4">
                        <p className="mb-1 text-xs md:text-sm font-bold uppercase text-white">{meme.top}</p>
                        <p className="text-xs md:text-sm font-black uppercase text-red-500">{meme.bottom}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Variants & Spin-Offs */}
              <div className="overflow-hidden border-2 border-red-900/50 bg-gradient-to-br from-black via-red-950/10 to-black">
                <div className="border-b border-red-900/50 bg-red-950/30 px-6 py-4 md:px-8 md:py-6">
                  <h2 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Variants & Spin-Offs</h2>
                </div>
                <div className="space-y-6 p-6 md:p-8 text-sm md:text-base leading-relaxed text-red-300/70">
                  <div>
                    <h3 className="mb-3 font-sans text-base md:text-lg font-bold text-white">Baby Insanity Wolf (2013)</h3>
                    <p>
                      Features a cute howling wolf cub offering petty acts of rebellion instead of extreme violence.
                      Examples include "Agrees to Terms and Conditions – Doesn't read all the way through" and "Mom
                      tucks you in – Refuse the goodnight kiss." Born in December 2013 as a satirical response to
                      "tamed" Insanity Wolf posts.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 font-sans text-base md:text-lg font-bold text-white">Scene Wolf (2009-2010)</h3>
                    <p>
                      Combines Insanity Wolf's face with multicolored "scene hair" to parody emo/punk teen culture.
                      Captions typically present melodramatic parent-teen conflicts like "OMG Mom, get out! I'm making a
                      video!" First appeared in late 2009, achieving moderate success with a couple hundred examples.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 font-sans text-base md:text-lg font-bold text-white">Animeme Series</h3>
                    <p>
                      Insanity Wolf appeared as a voiced character in the animated YouTube series Animeme, complete with
                      rap battles against other meme characters. Notable lines include "I feed the homeless, TO the
                      homeless."
                    </p>
                  </div>
                </div>
              </div>

              {/* Cultural Impact */}
              <div className="overflow-hidden border-2 border-red-900/50 bg-gradient-to-br from-black via-red-950/10 to-black">
                <div className="border-b border-red-900/50 bg-red-950/30 px-6 py-4 md:px-8 md:py-6">
                  <h2 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Cultural Impact</h2>
                </div>
                <div className="space-y-6 p-6 md:p-8 text-sm md:text-base leading-relaxed text-red-300/70">
                  <p>
                    Insanity Wolf represented a pivotal moment in internet humor, pushing the boundaries of what was
                    acceptable in meme culture. It embodied the "edgelord" aesthetic of early 2010s internet, where
                    shock value and transgression were forms of social currency on platforms like 4chan and Reddit.
                  </p>
                  <div className="border border-red-900/50 bg-black/50 p-4 md:p-6">
                    <h3 className="mb-4 font-sans text-base md:text-lg font-bold text-white">Legacy Metrics</h3>
                    <div className="grid gap-4 grid-cols-2">
                      <div>
                        <p className="text-xl md:text-2xl font-black text-red-500">610+</p>
                        <p className="text-xs md:text-sm">Archived instances in Library of Congress</p>
                      </div>
                      <div>
                        <p className="text-xl md:text-2xl font-black text-red-500">#3</p>
                        <p className="text-xs md:text-sm">Most-used meme template (2018)</p>
                      </div>
                      <div>
                        <p className="text-xl md:text-2xl font-black text-red-500">God Tier</p>
                        <p className="text-xs md:text-sm">Memegenerator ranking</p>
                      </div>
                      <div>
                        <p className="text-xl md:text-2xl font-black text-red-500">2009-2012</p>
                        <p className="text-xs md:text-sm">Peak popularity era</p>
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
              <div className="sticky top-24 overflow-hidden border-2 border-red-900/50 bg-gradient-to-br from-black via-red-950/10 to-black">
                <div className="border-b border-red-900/50 bg-red-950/30 px-6 py-4">
                  <h3 className="font-sans text-lg md:text-xl font-black uppercase tracking-tight text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Quick Facts</h3>
                </div>
                <div className="space-y-4 p-6 text-sm">
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-red-400">First Seen</p>
                    <p className="font-bold text-white">2009 (4chan /b/)</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-red-400">Know Your Meme Entry</p>
                    <p className="font-bold text-white">November 2009</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-red-400">Peak Years</p>
                    <p className="font-bold text-white">2009-2012</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-red-400">Image Source</p>
                    <p className="font-bold text-white">Stock photo (pre-2006)</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-red-400">Library of Congress</p>
                    <p className="font-bold text-white">610 instances archived</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-red-400">Platform Rank</p>
                    <p className="font-bold text-white">#3 Most-Used Template</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-red-400">Character Type</p>
                    <p className="font-bold text-white">Chaotic Evil</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-red-400">Humor Style</p>
                    <p className="font-bold text-white">Shock / Dark Comedy</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="border-t border-red-900/50 bg-red-950/30 p-6">
                  <a
                    href="/create"
                    className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-500 text-white font-bold uppercase py-3 transition-all"
                    style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                  >
                    <Flame className="h-5 w-5" />
                    CREATE YOUR MEME
                  </a>
                </div>
              </div>

              {/* Timeline */}
              <div className="overflow-hidden border-2 border-red-900/50 bg-gradient-to-br from-black via-red-950/10 to-black">
                <div className="border-b border-red-900/50 bg-red-950/30 px-6 py-4">
                  <h3 className="font-sans text-lg md:text-xl font-black uppercase tracking-tight text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Timeline</h3>
                </div>
                <div className="space-y-4 p-6 text-sm">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-black text-red-500">2006</div>
                    <div className="text-red-300/70">Wolf photo circulates online</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-black text-red-500">2009</div>
                    <div className="text-red-300/70">Meme born on 4chan /b/</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-black text-red-500">2009</div>
                    <div className="text-red-300/70">Reaches God Tier status</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-black text-red-500">2010</div>
                    <div className="text-red-300/70">Peak viral spread</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-black text-red-500">2013</div>
                    <div className="text-red-300/70">Baby Insanity Wolf emerges</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-black text-red-500">2018</div>
                    <div className="text-red-300/70">Library of Congress archives</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 font-black text-red-500">2020</div>
                    <div className="text-red-300/70">Nostalgic resurgence</div>
                  </div>
                </div>
              </div>

              {/* Related Memes */}
              <div className="overflow-hidden border-2 border-red-900/50 bg-gradient-to-br from-black via-red-950/10 to-black">
                <div className="border-b border-red-900/50 bg-red-950/30 px-6 py-4">
                  <h3 className="font-sans text-lg md:text-xl font-black uppercase tracking-tight text-white" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>Related Memes</h3>
                </div>
                <div className="space-y-3 p-6 text-sm">
                  <div>
                    <p className="font-bold text-white">Advice Dog</p>
                    <p className="text-xs text-red-300/60">Original advice animal (2006)</p>
                  </div>
                  <div>
                    <p className="font-bold text-white">Baby Insanity Wolf</p>
                    <p className="text-xs text-red-300/60">Petty rebellion variant (2013)</p>
                  </div>
                  <div>
                    <p className="font-bold text-white">Scene Wolf</p>
                    <p className="text-xs text-red-300/60">Emo/punk teen parody (2009)</p>
                  </div>
                  <div>
                    <p className="font-bold text-white">Foul Bachelor Frog</p>
                    <p className="text-xs text-red-300/60">Gross habit advice (2009)</p>
                  </div>
                  <div>
                    <p className="font-bold text-white">Socially Awkward Penguin</p>
                    <p className="text-xs text-red-300/60">Social anxiety meme (2009)</p>
                  </div>
                </div>
              </div>

              {/* Shop CTA */}
              <div className="overflow-hidden border-2 border-red-500/50 bg-gradient-to-br from-red-950/30 via-red-900/20 to-red-950/30">
                <div className="p-6 text-center">
                  <Flame className="h-10 w-10 text-red-500 mx-auto mb-3" />
                  <h3 className="font-sans text-lg font-black uppercase text-white mb-2" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
                    WEAR THE WOLF
                  </h3>
                  <p className="text-sm text-red-300/70 mb-4">Official Insanity Wolf merch</p>
                  <a
                    href="/store"
                    className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-500 text-white font-bold uppercase py-3 transition-all"
                    style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                  >
                    SHOP NOW
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-900/30 bg-black px-4 md:px-6 py-6 md:py-8">
        <div className="mx-auto max-w-5xl text-center font-mono text-xs text-red-400/40">
          <p>© 2009-2025 INSANITYWOLF.COM. This is satire. Don't actually follow this advice.</p>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}
