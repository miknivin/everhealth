import { NextResponse } from "next/server";

const sendToken = (user, statusCode) => {
    const token = user?.getJwtToken();

    const cookieOptions = {
        httpOnly: true,
        maxAge: process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    };

    const response = NextResponse.json(
        {
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                createdAt: user.createdAt,
            },
        },
        { status: statusCode }
    );

    response.cookies.set("userToken", token, cookieOptions);

    return response;
};

export default sendToken;
