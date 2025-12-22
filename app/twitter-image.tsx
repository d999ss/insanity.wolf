import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Insanity Wolf - Official Meme Generator Since 2009"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          backgroundImage: "radial-gradient(circle at center, #1a0505 0%, #000 70%)",
        }}
      >
        {/* Wolf Image */}
        <img
          src="https://insanitywolf.com/extreme-wolf.png"
          alt="Insanity Wolf"
          width={350}
          height={350}
          style={{
            objectFit: "contain",
          }}
        />

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: "bold",
              color: "#fff",
              textShadow: "0 4px 20px rgba(220, 38, 38, 0.5)",
              letterSpacing: "-2px",
              fontFamily: "Impact",
            }}
          >
            INSANITY WOLF
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#dc2626",
              marginTop: 8,
              letterSpacing: "4px",
              fontFamily: "monospace",
            }}
          >
            OFFICIAL MEME GENERATOR
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#666",
              marginTop: 16,
              fontFamily: "monospace",
            }}
          >
            GOD TIER SINCE 2009
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
