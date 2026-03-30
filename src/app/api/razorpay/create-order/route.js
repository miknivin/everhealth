import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connection";
import SessionStartedOrder from "@/models/SessionStartedOrders";
import { isAuthenticatedUser } from "@/middlewares/auth";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  try {
    await dbConnect();

    // Authenticate user
    let user;
    try {
      user = await isAuthenticatedUser(req);
    } catch (err) {
      return NextResponse.json(
        { success: false, message: "Authentication required" },
        { status: 401 }
      );
    }

    const { amount, currency = "INR", shippingInfo, orderItems, itemsPrice } = await req.json();

    if (!amount) {
      return NextResponse.json(
        { success: false, message: "Amount is required" },
        { status: 400 }
      );
    }

    const options = {
      amount: Math.round(amount * 100), // Razorpay expects amount in paise
      currency,
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    // Create session order in database
    await SessionStartedOrder.create({
      razorpayOrderId: order.id,
      razorpayPaymentStatus: order.status,
      user: user._id,
      shippingInfo,
      orderItems,
      itemsPrice,
      totalAmount: amount
    });

    return NextResponse.json({
      success: true,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Razorpay error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to create Razorpay order" },
      { status: 500 }
    );
  }
}
