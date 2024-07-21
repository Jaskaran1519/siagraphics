// app/api/orders/tshirt/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../config/db";
import Order from "../../../../models/Order";

export async function POST(req: NextRequest) {
  try {
    console.log("API route called. Attempting to connect to database...");
    await connectDB();
    console.log("Database connected successfully");

    const body = await req.json();
    console.log("Received order data:", body);

    const { size, color, quantity } = body;
    const newOrder = new Order({
      productType: "tshirt",
      details: { size, color, quantity },
    });

    console.log("Saving order...");
    await newOrder.save();
    console.log("Order saved successfully");

    return NextResponse.json(
      { success: true, data: newOrder },
      { status: 201 }
    );
  } catch (error) {
    console.error("Detailed error in API route:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
