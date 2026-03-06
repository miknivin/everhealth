import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [false, "Please enter your name"],
            maxlength: [50, "Your name cannot exceed 50 characters"],
        },
        email: {
            type: String,
            unique: true,
            sparse: true,
            validate: {
                validator: function (value) {
                    return !this.phone || !!value;
                },
                message: "Email or phone is required",
            },
        },
        phone: {
            type: String,
            unique: true,
            sparse: true,
            validate: {
                validator: function (value) {
                    return !this.email || !!value;
                },
                message: "Email or phone is required",
            },
        },
        password: {
            type: String,
            required: [false, "Please enter your password"],
            minlength: [6, "Your password must be longer than 6 characters"],
            select: false,
        },
        avatar: {
            public_id: String,
            url: String,
        },
        role: {
            type: String,
            default: "user",
            immutable: true,
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date,
        signupMethod: {
            type: String,
            enum: ["OTP", "Email/Password", "OAuth"],
            default: "Email/Password",
        },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME,
    });
};

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;
    return resetToken;
};

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
