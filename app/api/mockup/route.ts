import { NextRequest, NextResponse } from "next/server"

// Printful product IDs for mockup generation
const PRODUCTS = {
  tshirt: { id: 71, variant: 4018, placement: "front" },      // Unisex Staple T-Shirt (Black, L)
  hoodie: { id: 146, variant: 7854, placement: "front" },     // Unisex Heavy Blend Hoodie (Black, L)
  mug: { id: 19, variant: 1320, placement: "default" },       // White Glossy Mug 11oz
  poster: { id: 1, variant: 2103, placement: "default" },     // Enhanced Matte Paper Poster 18x24
}

export async function POST(request: NextRequest) {
  try {
    const { imageUrl, productType = "tshirt" } = await request.json()

    if (!imageUrl) {
      return NextResponse.json({ error: "Image URL required" }, { status: 400 })
    }

    const product = PRODUCTS[productType as keyof typeof PRODUCTS] || PRODUCTS.tshirt

    // Create mockup generation task
    const response = await fetch(
      `https://api.printful.com/mockup-generator/create-task/${product.id}`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.PRINTFUL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          variant_ids: [product.variant],
          files: [
            {
              placement: product.placement,
              image_url: imageUrl,
              position: {
                area_width: 1800,
                area_height: 2400,
                width: 1800,
                height: 1800,
                top: 300,
                left: 0,
              },
            },
          ],
        }),
      }
    )

    const data = await response.json()

    if (data.code !== 200) {
      console.error("Printful error:", data)
      return NextResponse.json({ error: data.result || "Mockup generation failed" }, { status: 500 })
    }

    // Poll for task completion
    const taskKey = data.result.task_key
    let mockups = null
    let attempts = 0

    while (!mockups && attempts < 30) {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const statusResponse = await fetch(
        `https://api.printful.com/mockup-generator/task?task_key=${taskKey}`,
        {
          headers: {
            "Authorization": `Bearer ${process.env.PRINTFUL_API_KEY}`,
          },
        }
      )

      const statusData = await statusResponse.json()

      if (statusData.result.status === "completed") {
        mockups = statusData.result.mockups
        break
      } else if (statusData.result.status === "failed") {
        return NextResponse.json({ error: "Mockup generation failed" }, { status: 500 })
      }

      attempts++
    }

    if (!mockups) {
      return NextResponse.json({ error: "Mockup generation timeout" }, { status: 504 })
    }

    return NextResponse.json({
      success: true,
      mockups: mockups.map((m: { placement: string; mockup_url: string }) => ({
        placement: m.placement,
        url: m.mockup_url,
      })),
    })
  } catch (error) {
    console.error("Mockup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
