import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../config/db";
import Order from "../../../../models/Order";

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const { image, quantity, colorType } = await req.json();
    const newOrder = new Order({
      productType: "flyer",
      details: { image, quantity, colorType },
    });

    await newOrder.save();
    return NextResponse.json(
      { success: true, data: newOrder },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
