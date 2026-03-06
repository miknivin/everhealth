import { NextResponse } from "next/server";
import Product from "@/models/Product";
import dbConnect from "@/lib/db/connection";

export async function GET(req) {
    try {
        await dbConnect();

        const url = new URL(req.url);
        const page = parseInt(url.searchParams.get("page") || "1") || 1;
        const limit = parseInt(url.searchParams.get("limit") || "12") || 12;
        const search = url.searchParams.get("keyword") || "";
        const category = url.searchParams.get("category") || "";

        const skip = (page - 1) * limit;
        const query = {};

        if (search) {
            query.name = { $regex: search, $options: "i" };
        }

        if (category) {
            query.category = category;
        }

        const allProducts = await Product.find(query)
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        const totalProducts = await Product.countDocuments(query);

        return NextResponse.json(
            {
                success: true,
                allProducts,
                totalProducts,
                currentPage: page,
                totalPages: Math.ceil(totalProducts / limit),
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
