import dbConnect from "@/lib/db/connection";
import Enquiry from "@/models/Enquiry";
import { NextResponse } from "next/server";

// DELETE enquiry by ID
export async function DELETE(req, { params }) {
    try {
        await dbConnect();

        const { id } = params;

        const enquiry = await Enquiry.findByIdAndDelete(id);

        if (!enquiry) {
            return NextResponse.json(
                { success: false, message: "Enquiry not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, message: "Enquiry deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}

// PATCH update enquiry status
export async function PATCH(req, { params }) {
    try {
        await dbConnect();

        const { id } = params;
        const { status } = await req.json();

        const enquiry = await Enquiry.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );

        if (!enquiry) {
            return NextResponse.json(
                { success: false, message: "Enquiry not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, data: enquiry, message: "Enquiry updated successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
