import { NextResponse } from "next/server";
import Product from "@/models/Product";
import dbConnect from "@/lib/db/connection";

export async function GET(req, { params }) {
    try {
        await dbConnect();
        const { id } = params;

        const productById = await Product.findById(id).populate("reviews.user", "name email");

        if (!productById) {
            return NextResponse.json(
                { success: false, message: "Product not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, productById }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
