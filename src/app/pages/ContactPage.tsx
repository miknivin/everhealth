'use client';

import React from "react";
import clsx from "clsx";
import svgPaths from "../../imports/svg-0vmr3y62d3";
import { toast } from "sonner";
import { useCreateEnquiryMutation } from "../redux/api/enquiryApi";

// Helper Components
function InputField({
  label,
  placeholder,
  className = "",
  multiline = false,
  value,
  onChange,
  name,
  required = false
}: {
  label?: string;
  placeholder?: string;
  className?: string;
  multiline?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name?: string;
  required?: boolean;
}) {
  return (
    <div className={clsx("flex flex-col gap-2 w-full", className)}>
      <div className={clsx(
        "group bg-[#f8f8f8] rounded-[16px] border-2 border-transparent transition-all duration-300 flex items-center px-6 overflow-hidden focus-within:border-[#802367] focus-within:bg-white focus-within:shadow-lg focus-within:shadow-[#802367]/5",
        multiline ? "h-[180px] py-5" : "h-[54px]"
      )}>
        {multiline ? (
          <textarea
            className="bg-transparent w-full h-full outline-none text-[#222] font-['Roboto',sans-serif] text-[18px] leading-[1.6] resize-none placeholder:text-[#222]/30 [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_white_inset] [&:-webkit-autofill]:[text-fill-color:#222]"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            required={required}
          />
        ) : (
          <input
            type="text"
            className="bg-transparent w-full h-full outline-none text-[#222] font-['Roboto',sans-serif] text-[18px] placeholder:text-[#222]/30 [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_white_inset] [&:-webkit-autofill]:[text-fill-color:#222]"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            required={required}
          />
        )}
      </div>
    </div>
  );
}

export function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [createEnquiry, { isLoading }] = useCreateEnquiryMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createEnquiry({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      }).unwrap();

      toast.success("Enquiry sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to send enquiry. Please try again.");
    }
  };

  return (
    <div className="bg-white min-h-[calc(100vh-80px)] w-full font-['Roboto',sans-serif] flex flex-col relative overflow-x-hidden pt-[80px] lg:pt-[120px]">

      {/* Background Decorative Blobs */}
      <div className="absolute top-[20%] -left-[10%] w-[400px] h-[500px] pointer-events-none z-0 rotate-[54deg] opacity-60 hidden lg:block">
        <svg viewBox="0 0 398 502" className="w-full h-full fill-[#FFDABC]/10">
          <path d={svgPaths.p3dfad400} />
        </svg>
      </div>
      <div className="absolute top-[35%] -right-[5%] w-[287px] h-[362px] pointer-events-none z-0 rotate-[20deg] opacity-60 hidden lg:block">
        <svg viewBox="0 0 287 362" className="w-full h-full fill-[#FFDABC]/10">
          <path d={svgPaths.p108fed00} />
        </svg>
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 lg:px-[62px] py-8 relative z-10 flex flex-col items-center">

        {/* Page Title */}
        <div className="w-full mb-8 lg:mb-16 mt-8 lg:mt-0">
          <h1 className="text-[35px] lg:text-[55px] font-['Inter',sans-serif] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#91086c] to-[#b44295] leading-none mb-2 text-center">
            Contact Us
          </h1>
        </div>

        {/* Contact Form Card */}
        <form onSubmit={handleSubmit} className="bg-white rounded-[32px] shadow-[0px_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 w-full max-w-[771px] p-6 lg:p-[60px] flex flex-col items-center mb-20 transition-all duration-500 hover:shadow-[0px_30px_70px_rgba(0,0,0,0.08)]">
          <h2 className="text-[28px] lg:text-[40px] font-bold text-[#91086c] text-center mb-10 lg:mb-14 font-['Inter',sans-serif]">
            Send us a message
          </h2>

          <div className="w-full flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-col md:flex-row gap-4 lg:gap-6 w-full">
              <InputField
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <InputField
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <InputField
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <InputField
              name="message"
              placeholder="Message"
              multiline
              value={formData.message}
              onChange={handleChange}
              required
            />

            <div className="flex justify-center mt-4 lg:mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="h-[54px] px-24 bg-[#802367] text-white text-[18px] font-bold rounded-[16px] hover:bg-[#6f0a54] hover:shadow-xl hover:shadow-[#802367]/20 transition-all duration-300 w-full md:w-auto disabled:opacity-50 active:scale-[0.98]"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>

      </main>
    </div>
  );
}
