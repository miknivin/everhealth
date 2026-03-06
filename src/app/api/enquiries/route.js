import dbConnect from "@/lib/db/connection";
import Enquiry from "@/models/Enquiry";
import { NextResponse } from "next/server";

// GET all enquiries
export async function GET(req) {
    try {
        await dbConnect();

        const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });

        return NextResponse.json(
            { success: true, data: enquiries },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}

// POST create new enquiry
export async function POST(req) {
    try {
        await dbConnect();

        const { name, email, subject, message } = await req.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, message: "Name, email, and message are required" },
                { status: 400 }
            );
        }

        const enquiry = await Enquiry.create({
            name,
            email,
            subject,
            message,
        });

        return NextResponse.json(
            { success: true, data: enquiry, message: "Enquiry submitted successfully" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
