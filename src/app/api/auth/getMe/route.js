import { NextResponse } from "next/server";
import { isAuthenticatedUser } from "@/middlewares/auth";

export async function GET(req) {
    try {
        const user = await isAuthenticatedUser(req);
        return NextResponse.json({ success: true, user }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 401 }
        );
    }
}
