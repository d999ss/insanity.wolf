"use client"

import { useState } from "react"
import Link from "next/link"
import { Copy, Check, Code, Zap, Bot, Terminal, ArrowRight } from "lucide-react"

export default function ApiDocsPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const curlExample = `curl "https://insanitywolf.com/api/generate?random=true"`

  const nodeExample = `// Auto-post Insanity Wolf memes to Twitter
const fetch = require('node-fetch');

async function generateAndPost() {
  // Get random meme from API
  const res = await fetch('https://insanitywolf.com/api/generate?random=true');
  const data = await res.json();

  console.log('Generated meme:');
  console.log(\`\${data.meme.top} / \${data.meme.bottom}\`);
  console.log(\`Share URL: \${data.meme.shareUrl}\`);

  // Post to Twitter using your preferred library
  // const tweet = \`\${data.meme.top} / \${data.meme.bottom} 🐺 #InsanityWolf \${data.meme.shareUrl}\`;
  // await twitterClient.post(tweet);
}

// Run every hour
setInterval(generateAndPost, 60 * 60 * 1000);
generateAndPost();`

  const pythonExample = `# Auto-post Insanity Wolf memes
import requests
import time

def generate_meme():
    res = requests.get('https://insanitywolf.com/api/generate?random=true')
    data = res.json()

    print(f"Generated: {data['meme']['top']} / {data['meme']['bottom']}")
    print(f"Share URL: {data['meme']['shareUrl']}")

    # Post to social media using your preferred library
    # tweet = f"{data['meme']['top']} / {data['meme']['bottom']} 🐺 #InsanityWolf {data['meme']['shareUrl']}"
    # twitter_api.update_status(tweet)

    return data

# Run every hour
while True:
    generate_meme()
    time.sleep(3600)`

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 to-black" />
        <div className="relative max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-600 text-white text-xs font-bold uppercase mb-4">
              <Bot className="h-4 w-4" />
              API Documentation
            </div>
            <h1
              className="text-4xl md:text-5xl font-black uppercase mb-6"
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Insanity Wolf <span className="text-red-500">API</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Build bots, automate posting, and integrate Insanity Wolf memes into your apps.
              Free API, no key required.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Quick Start */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-black uppercase">Quick Start</h2>
          </div>

          <div className="bg-gray-900 border border-red-900/30 p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-white/50">Terminal</span>
              <button
                onClick={() => copyCode(curlExample, "curl")}
                className={`flex items-center gap-1 px-2 py-1 text-xs ${
                  copied === "curl" ? "text-green-400" : "text-white/50 hover:text-white"
                }`}
              >
                {copied === "curl" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copied === "curl" ? "Copied!" : "Copy"}
              </button>
            </div>
            <code className="text-green-400 text-sm">{curlExample}</code>
          </div>

          <p className="text-white/70">
            That's it! You'll get back a JSON response with a random meme and shareable URL.
          </p>
        </div>

        {/* Endpoints */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Code className="h-6 w-6 text-blue-400" />
            <h2 className="text-2xl font-black uppercase">Endpoints</h2>
          </div>

          <div className="space-y-6">
            {/* GET random */}
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-bold">GET</span>
                <code className="text-white">/api/generate</code>
              </div>
              <p className="text-white/70 text-sm mb-4">Generate a random or custom meme</p>
              <div className="space-y-2 text-sm">
                <p className="text-white/50">Query Parameters:</p>
                <ul className="space-y-1 text-white/70">
                  <li><code className="text-red-400">random=true</code> - Generate random meme</li>
                  <li><code className="text-red-400">top=TEXT</code> - Custom top text</li>
                  <li><code className="text-red-400">bottom=TEXT</code> - Custom bottom text</li>
                </ul>
              </div>
            </div>

            {/* POST custom */}
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-bold">POST</span>
                <code className="text-white">/api/generate</code>
              </div>
              <p className="text-white/70 text-sm mb-4">Create a meme with custom text</p>
              <div className="space-y-2 text-sm">
                <p className="text-white/50">Request Body (JSON):</p>
                <pre className="bg-black p-3 text-green-400 text-xs overflow-x-auto">
{`{
  "top": "YOUR PROBLEM",
  "bottom": "INSANE SOLUTION"
}`}
                </pre>
              </div>
            </div>

            {/* Response */}
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <p className="text-white/50 text-sm mb-3">Response:</p>
              <pre className="bg-black p-3 text-green-400 text-xs overflow-x-auto">
{`{
  "success": true,
  "meme": {
    "top": "WIFI IS DOWN",
    "bottom": "DECLARE WAR",
    "shareUrl": "https://insanitywolf.com/meme/..."
  }
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Bot Examples */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="h-6 w-6 text-purple-400" />
            <h2 className="text-2xl font-black uppercase">Bot Examples</h2>
          </div>

          {/* Node.js */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold">Node.js Auto-Post Bot</span>
              <button
                onClick={() => copyCode(nodeExample, "node")}
                className={`flex items-center gap-1 px-2 py-1 text-xs ${
                  copied === "node" ? "text-green-400" : "text-white/50 hover:text-white"
                }`}
              >
                {copied === "node" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                Copy
              </button>
            </div>
            <pre className="bg-gray-900 border border-red-900/30 p-4 text-green-400 text-xs overflow-x-auto">
              {nodeExample}
            </pre>
          </div>

          {/* Python */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold">Python Auto-Post Bot</span>
              <button
                onClick={() => copyCode(pythonExample, "python")}
                className={`flex items-center gap-1 px-2 py-1 text-xs ${
                  copied === "python" ? "text-green-400" : "text-white/50 hover:text-white"
                }`}
              >
                {copied === "python" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                Copy
              </button>
            </div>
            <pre className="bg-gray-900 border border-red-900/30 p-4 text-green-400 text-xs overflow-x-auto">
              {pythonExample}
            </pre>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl font-black uppercase mb-6">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold mb-2">Twitter/X Bot</h3>
              <p className="text-white/70 text-sm">
                Auto-post Insanity Wolf memes to your Twitter account on a schedule.
                Great for meme pages and engagement farming.
              </p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold mb-2">Discord Bot</h3>
              <p className="text-white/70 text-sm">
                Add a /meme command to your Discord server that generates random
                Insanity Wolf memes on demand.
              </p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold mb-2">Reddit Bot</h3>
              <p className="text-white/70 text-sm">
                Post memes to r/AdviceAnimals or other meme subreddits.
                Include the shareable link for backlinks.
              </p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-6">
              <h3 className="font-bold mb-2">Website Integration</h3>
              <p className="text-white/70 text-sm">
                Add a "Meme of the Day" widget to your site or generate
                memes based on your content.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-red-900/30 pt-16">
          <h2 className="text-2xl font-black uppercase mb-4">
            Ready to Build?
          </h2>
          <p className="text-white/70 mb-6">
            Start making API calls now. No signup, no API key, just pure chaos.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase px-6 py-3 transition-colors"
          >
            TRY THE GENERATOR
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
