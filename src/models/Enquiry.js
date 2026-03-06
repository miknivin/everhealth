import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"],
        },
        email: {
            type: String,
            required: [true, "Please enter your email"],
        },
        subject: {
            type: String,
            required: false,
        },
        message: {
            type: String,
            required: [true, "Please enter your message"],
        },
        status: {
            type: String,
            default: "New",
            enum: {
                values: ["New", "Read", "Replied", "Closed"],
                message: "Please select valid status",
            },
        },
    },
    { timestamps: true }
);

const Enquiry = mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);

export default Enquiry;
