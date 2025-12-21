import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { items, email, memeImage } = await request.json()

    // Create line items for Stripe
    const lineItems = items.map((item: {
      product: { name: string }
      size: string
      color: { name: string }
      quantity: number
      price: number
    }) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: `${item.product.name} - ${item.size} / ${item.color.name}`,
          description: "Custom Insanity Wolf Meme Print",
          images: ["https://insanitywolf.com/wolf-logo.png"],
        },
        unit_amount: Math.round(item.price * 100), // Stripe uses cents
      },
      quantity: item.quantity,
    }))

    // Add shipping if under $50
    const subtotal = items.reduce((sum: number, item: { price: number; quantity: number }) =>
      sum + (item.price * item.quantity), 0)

    if (subtotal < 50) {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: "Shipping",
            description: "Standard shipping (3-5 business days)",
          },
          unit_amount: 599, // $5.99
        },
        quantity: 1,
      })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout`,
      customer_email: email,
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU", "DE", "FR", "JP", "NL", "SE", "NO", "DK", "FI", "IE", "NZ"],
      },
      metadata: {
        memeImage: memeImage?.substring(0, 500) || "", // Store reference (Stripe has 500 char limit)
        orderItems: JSON.stringify(items.map((i: { product: { name: string }; size: string; color: { name: string }; quantity: number }) => ({
          name: i.product.name,
          size: i.size,
          color: i.color.name,
          qty: i.quantity
        }))),
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error("Stripe error:", error)
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}
