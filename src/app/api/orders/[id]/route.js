import dbConnect from "@/lib/db/connection";
import { isAuthenticatedUser } from "@/middlewares/auth";
import Order from "@/models/Order";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        await dbConnect();

        const user = await isAuthenticatedUser(req);
        if (!user) {
            return NextResponse.json(
                { success: false, message: "Authentication required" },
                { status: 401 }
            );
        }

        const order = await Order.findById(params.id).lean();
        if (!order) {
            return NextResponse.json(
                { success: false, message: "Order not found" },
                { status: 404 }
            );
        }

        if (order.user.toString() !== user._id.toString()) {
            return NextResponse.json(
                { success: false, message: "Not authorized to view this order" },
                { status: 403 }
            );
        }

        return NextResponse.json({ success: true, order }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
