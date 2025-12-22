import { Metadata } from "next"
import Link from "next/link"
import { Code, Copy, ArrowRight, Zap, ExternalLink, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "Insanity Wolf Embeddable Widget - Add Memes to Your Site",
  description: "Embed the Insanity Wolf meme widget on your website. Auto-cycling random memes, customizable size and style. Free for any site.",
  keywords: ["meme widget", "embed meme", "website meme generator", "insanity wolf widget", "free meme widget"],
}

const WIDGET_CODE_BASIC = `<iframe
  src="https://insanitywolf.com/embed/widget"
  width="400"
  height="450"
  frameborder="0"
  style="border: none;"
></iframe>`

const WIDGET_CODE_AUTO = `<iframe
  src="https://insanitywolf.com/embed/widget?auto=true&interval=10"
  width="400"
  height="450"
  frameborder="0"
  style="border: none;"
></iframe>`

const WIDGET_CODE_MINI = `<iframe
  src="https://insanitywolf.com/embed/widget?size=mini"
  width="200"
  height="250"
  frameborder="0"
  style="border: none;"
></iframe>`

export default function WidgetPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600 text-white text-xs font-bold uppercase mb-4">
            <Code className="h-4 w-4" />
            Widget
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Embeddable <span className="text-purple-400">Widget</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Add Insanity Wolf memes to your website. Auto-cycling, customizable, and free.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Preview */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Live Preview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-950/20 border border-red-900/30 p-6 flex items-center justify-center">
              <div className="bg-black border border-red-500 w-[300px] h-[350px] flex flex-col">
                <div className="flex-1 flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🐺</div>
                    <p className="text-xs font-bold uppercase text-white" style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000" }}>
                      WIFI IS DOWN
                    </p>
                    <p className="text-xs font-bold uppercase text-white mt-2" style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000" }}>
                      DECLARE WAR ON ISP
                    </p>
                  </div>
                </div>
                <div className="border-t border-red-900/50 p-2 flex justify-between items-center">
                  <span className="text-xs text-white/50">insanitywolf.com</span>
                  <button className="text-xs bg-red-600 px-2 py-1 text-white uppercase">New Meme</button>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">Widget Features</h3>
              <ul className="text-white/70 text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-400" /> Auto-cycles through random memes
                </li>
                <li className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-purple-400" /> Customizable size and interval
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-blue-400" /> Links back to your site (optional)
                </li>
              </ul>
              <p className="text-white/50 text-sm mt-4">
                Perfect for blogs, forums, Discord servers, and entertainment sites.
              </p>
            </div>
          </div>
        </div>

        {/* Basic embed */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Basic Embed Code</h2>
          <p className="text-white/70 mb-4">Copy and paste this code into your website:</p>
          <div className="relative">
            <pre className="bg-black border border-red-900/50 p-4 overflow-x-auto text-sm text-green-400 font-mono whitespace-pre-wrap">
              {WIDGET_CODE_BASIC}
            </pre>
          </div>
        </div>

        {/* Auto-cycling */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Auto-Cycling Widget</h2>
          <p className="text-white/70 mb-4">Automatically shows a new meme every 10 seconds:</p>
          <div className="relative">
            <pre className="bg-black border border-red-900/50 p-4 overflow-x-auto text-sm text-green-400 font-mono whitespace-pre-wrap">
              {WIDGET_CODE_AUTO}
            </pre>
          </div>
        </div>

        {/* Mini widget */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Mini Widget (Sidebar)</h2>
          <p className="text-white/70 mb-4">Compact version for sidebars:</p>
          <div className="relative">
            <pre className="bg-black border border-red-900/50 p-4 overflow-x-auto text-sm text-green-400 font-mono whitespace-pre-wrap">
              {WIDGET_CODE_MINI}
            </pre>
          </div>
        </div>

        {/* Parameters */}
        <div className="mb-12">
          <h2 className="text-2xl font-black uppercase mb-6">Customization Parameters</h2>
          <div className="border border-red-900/30 overflow-hidden">
            <div className="grid grid-cols-3 bg-red-950/50 p-4 font-bold uppercase text-sm">
              <div>Parameter</div>
              <div>Values</div>
              <div>Description</div>
            </div>
            {[
              { param: "auto", values: "true/false", desc: "Enable auto-cycling memes" },
              { param: "interval", values: "5-60", desc: "Seconds between meme changes" },
              { param: "size", values: "normal/mini/large", desc: "Widget size preset" },
              { param: "theme", values: "dark/light", desc: "Color theme" },
              { param: "topic", values: "work/gaming/etc", desc: "Filter memes by topic" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-4 border-t border-red-900/30 items-center">
                <code className="text-purple-400 font-mono">{row.param}</code>
                <code className="text-white/50 font-mono text-sm">{row.values}</code>
                <div className="text-white/70 text-sm">{row.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-red-900/30 pt-12">
          <h2 className="text-3xl font-black uppercase mb-4" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            Need the <span className="text-purple-400">Full Generator</span>?
          </h2>
          <p className="text-white/70 mb-6">For custom meme creation, use our main site.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-6 py-3 transition-colors">
            Go to Generator
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
