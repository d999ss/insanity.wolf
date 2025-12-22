import { Metadata } from "next"
import Link from "next/link"
import { MessageCircle, Terminal, Copy, ArrowRight, Zap, Users, Bot } from "lucide-react"

export const metadata: Metadata = {
  title: "Insanity Wolf Discord Bot - Generate Memes in Discord",
  description: "Add the Insanity Wolf bot to your Discord server. Generate memes directly in chat with simple commands. Free and easy to use.",
  keywords: ["discord meme bot", "insanity wolf discord", "meme generator bot", "discord bot", "meme commands"],
}

const COMMANDS = [
  { command: "/meme", args: "[top] [bottom]", description: "Generate a custom Insanity Wolf meme" },
  { command: "/random", args: "", description: "Generate a random Insanity Wolf meme" },
  { command: "/work", args: "", description: "Random work-themed meme" },
  { command: "/monday", args: "", description: "Random Monday meme" },
  { command: "/coffee", args: "", description: "Random coffee meme" },
  { command: "/battle", args: "", description: "Start a meme battle in the channel" },
  { command: "/leaderboard", args: "", description: "Show server meme leaderboard" },
  { command: "/help", args: "", description: "Show all available commands" },
]

export default function DiscordBotPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-600 text-white text-xs font-bold uppercase mb-4">
            <MessageCircle className="h-4 w-4" />
            Discord
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Discord <span className="text-indigo-400">Bot</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Generate Insanity Wolf memes directly in your Discord server. No website needed.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Add to server CTA */}
        <div className="bg-indigo-950/30 border border-indigo-500/30 p-8 mb-12 text-center">
          <Bot className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
          <h2 className="text-2xl font-black uppercase mb-4">Add to Your Server</h2>
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=COMING_SOON&permissions=2147485696&scope=bot%20applications.commands"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase px-8 py-4 text-xl transition-colors"
          >
            <MessageCircle className="h-6 w-6" />
            ADD TO DISCORD
          </a>
          <p className="text-white/50 text-sm mt-4">Coming Soon - Join waitlist below</p>
        </div>

        {/* Commands */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
            <Terminal className="h-6 w-6 text-indigo-400" />
            Commands
          </h2>
          <div className="border border-red-900/30 overflow-hidden">
            <div className="grid grid-cols-3 bg-red-950/50 p-4 font-bold uppercase text-sm">
              <div>Command</div>
              <div>Arguments</div>
              <div>Description</div>
            </div>
            {COMMANDS.map((cmd, i) => (
              <div key={i} className="grid grid-cols-3 p-4 border-t border-red-900/30 items-center">
                <code className="text-indigo-400 font-mono">{cmd.command}</code>
                <code className="text-white/50 font-mono text-sm">{cmd.args || "-"}</code>
                <div className="text-white/70 text-sm">{cmd.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Example usage */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Example Usage</h2>
          <div className="bg-[#36393f] border border-[#202225] p-4 font-sans">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">U</div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">User</span>
                  <span className="text-xs text-white/30">Today at 4:20 PM</span>
                </div>
                <p className="text-white">/meme "BOSS ASKED FOR OVERTIME" "QUIT AND BECAME BOSS"</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-lg">🐺</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-red-400">Insanity Wolf</span>
                  <span className="text-xs bg-indigo-600 px-1 rounded text-white">BOT</span>
                  <span className="text-xs text-white/30">Today at 4:20 PM</span>
                </div>
                <div className="bg-[#2f3136] p-3 mt-2 rounded max-w-sm">
                  <div className="text-white/50 text-xs mb-2">Generated meme:</div>
                  <div className="bg-black aspect-square flex items-center justify-center text-4xl">🐺</div>
                  <p className="text-xs text-white/30 mt-2">View full: insanitywolf.com/m/abc123</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Bot Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <Zap className="h-8 w-8 text-yellow-400 mb-3" />
              <h3 className="font-bold mb-1">Instant Generation</h3>
              <p className="text-white/50 text-sm">Memes appear in chat within seconds</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <Users className="h-8 w-8 text-indigo-400 mb-3" />
              <h3 className="font-bold mb-1">Server Battles</h3>
              <p className="text-white/50 text-sm">Run meme battles within your server</p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <Terminal className="h-8 w-8 text-green-400 mb-3" />
              <h3 className="font-bold mb-1">Slash Commands</h3>
              <p className="text-white/50 text-sm">Easy to use Discord slash commands</p>
            </div>
          </div>
        </div>

        {/* Self-host option */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Self-Host Option</h2>
          <p className="text-white/70 mb-4">Want to run your own instance? Use our free API:</p>
          <div className="bg-black border border-red-900/50 p-4 font-mono text-sm">
            <p className="text-green-400"># Generate a meme via API</p>
            <p className="text-white">curl "https://insanitywolf.com/api/generate?top=YOUR_TEXT&bottom=YOUR_TEXT"</p>
          </div>
          <Link href="/api-docs" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 mt-4 text-sm">
            View full API docs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Waitlist */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <h2 className="text-3xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Join the <span className="text-indigo-400">Waitlist</span>
          </h2>
          <p className="text-white/70 mb-6">Be first to know when the bot launches.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-black border border-red-900/50 px-4 py-3 text-white placeholder:text-white/30 focus:border-indigo-500 focus:outline-none"
            />
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold uppercase px-6 py-3 transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
