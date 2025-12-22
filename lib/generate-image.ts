import sharp from "sharp"
import fs from "fs"
import path from "path"

const MEMES_DIR = path.join(process.cwd(), "public", "memes")
const TEMPLATE_PATH = path.join(process.cwd(), "public", "insanity-wolf-template.webp")

// Ensure memes directory exists
function ensureMemeDir() {
  if (!fs.existsSync(MEMES_DIR)) {
    fs.mkdirSync(MEMES_DIR, { recursive: true })
  }
}

// Generate SVG text overlay
function createTextOverlay(text: string, position: "top" | "bottom", width: number, height: number): string {
  const fontSize = Math.floor(width * 0.07)
  const y = position === "top" ? fontSize + 20 : height - 30
  const upperText = text.toUpperCase()

  return `
    <text
      x="${width / 2}"
      y="${y}"
      font-family="Impact, 'Arial Black', sans-serif"
      font-size="${fontSize}"
      font-weight="bold"
      fill="white"
      text-anchor="middle"
      stroke="black"
      stroke-width="3"
      paint-order="stroke"
    >${escapeXml(upperText)}</text>
  `
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

// Generate watermark
function createWatermark(width: number, height: number): string {
  return `
    <text
      x="${width - 10}"
      y="${height - 10}"
      font-family="Arial, sans-serif"
      font-size="14"
      font-weight="bold"
      fill="rgba(255,255,255,0.7)"
      text-anchor="end"
      stroke="rgba(0,0,0,0.5)"
      stroke-width="1"
      paint-order="stroke"
    >insanitywolf.com</text>
  `
}

export interface GeneratedImage {
  webpPath: string
  pngPath: string
  filename: string
}

export async function generateMemeImage(
  topText: string,
  bottomText: string,
  filename: string
): Promise<GeneratedImage> {
  ensureMemeDir()

  // Read the template image
  const templateBuffer = fs.readFileSync(TEMPLATE_PATH)
  const metadata = await sharp(templateBuffer).metadata()
  const width = metadata.width || 550
  const height = metadata.height || 530

  // Create SVG overlay with text
  const svgOverlay = `
    <svg width="${width}" height="${height}">
      ${topText ? createTextOverlay(topText, "top", width, height) : ""}
      ${bottomText ? createTextOverlay(bottomText, "bottom", width, height) : ""}
      ${createWatermark(width, height)}
    </svg>
  `

  // Generate WebP
  const webpFilename = `${filename}.webp`
  const webpPath = path.join(MEMES_DIR, webpFilename)
  await sharp(templateBuffer)
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      },
    ])
    .webp({ quality: 85 })
    .toFile(webpPath)

  // Generate PNG
  const pngFilename = `${filename}.png`
  const pngPath = path.join(MEMES_DIR, pngFilename)
  await sharp(templateBuffer)
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      },
    ])
    .png()
    .toFile(pngPath)

  return {
    webpPath: `/memes/${webpFilename}`,
    pngPath: `/memes/${pngFilename}`,
    filename,
  }
}

// Check if image exists
export function memeImageExists(filename: string): boolean {
  const webpPath = path.join(MEMES_DIR, `${filename}.webp`)
  return fs.existsSync(webpPath)
}
