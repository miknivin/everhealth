import { NextResponse } from "next/server";
import User from "@/models/User";
import dbConnect from "@/lib/db/connection";
import sendToken from "@/utils/sendToken";

export async function POST(request) {
    try {
        await dbConnect();
        const { name, email, avatar } = await request.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({
                name,
                email,
                avatar: { url: avatar },
                signupMethod: "OAuth",
            });
        } else if (user.signupMethod !== "OAuth") {
            user.signupMethod = "OAuth";
            if (avatar && (!user.avatar || !user.avatar.url)) {
                user.avatar = { url: avatar };
            }
            await user.save();
        }

        return sendToken(user, 200);
    } catch (error) {
        return NextResponse.json(
            { error: error?.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
