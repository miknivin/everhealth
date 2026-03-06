import dbConnect from "@/lib/db/connection";
import { isAuthenticatedUser } from "@/middlewares/auth";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await dbConnect();

        const user = await isAuthenticatedUser(req);
        if (!user) {
            return NextResponse.json(
                { success: false, message: "Authentication required", orders: [] },
                { status: 401 }
            );
        }

        const orders = await Order.find({ user: user._id })
            .sort({ createdAt: -1 })
            .lean();

        return NextResponse.json({ success: true, orders }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error", orders: [] },
            { status: 500 }
        );
    }
}
