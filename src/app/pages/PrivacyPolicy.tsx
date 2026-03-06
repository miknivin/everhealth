'use client';

import React from "react";
import { motion } from "framer-motion";

export function PrivacyPolicy() {
    return (
        <div className="w-full bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-[62px] pt-[60px] md:pt-[80px] lg:pt-[100px] pb-[40px] md:pb-[50px] lg:pb-[60px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1
                        className="text-[36px] md:text-[48px] lg:text-[55px] font-['Inter',sans-serif] font-semibold mb-6"
                        style={{
                            background: "linear-gradient(96.24deg, rgba(145, 8, 108, 0.9) 8.33%, #B44295 75.16%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Privacy Policy
                    </h1>
                    <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 mb-8">
                        Last updated: January 31, 2026
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-8"
                >
                    {/* Introduction */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Introduction
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            At Everhealth, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Information We Collect
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-[20px] md:text-[24px] font-['Roboto',sans-serif] font-semibold text-[#802367] mb-2">
                                    Personal Information
                                </h3>
                                <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                                    We collect personal information that you voluntarily provide to us when you register on the website, place an order, subscribe to our newsletter, or contact us. This may include:
                                </p>
                                <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75">
                                    <li>Name and contact information (email address, phone number)</li>
                                    <li>Billing and shipping address</li>
                                    <li>Payment information</li>
                                    <li>Order history and preferences</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[20px] md:text-[24px] font-['Roboto',sans-serif] font-semibold text-[#802367] mb-2">
                                    Automatically Collected Information
                                </h3>
                                <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                                    When you visit our website, we automatically collect certain information about your device, including:
                                </p>
                                <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75">
                                    <li>IP address and browser type</li>
                                    <li>Operating system and device information</li>
                                    <li>Pages visited and time spent on our site</li>
                                    <li>Referring website addresses</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            How We Use Your Information
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px] mb-3">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75">
                            <li>Process and fulfill your orders</li>
                            <li>Communicate with you about your orders and account</li>
                            <li>Send you marketing communications (with your consent)</li>
                            <li>Improve our website and customer service</li>
                            <li>Prevent fraud and enhance security</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    {/* Information Sharing */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Information Sharing
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                        </p>
                        <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75">
                            <li>Service providers who assist us in operating our website and conducting our business</li>
                            <li>Payment processors to complete transactions</li>
                            <li>Shipping companies to deliver your orders</li>
                            <li>Law enforcement or regulatory authorities when required by law</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Data Security
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Your Rights
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px] mb-3">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75">
                            <li>Access and receive a copy of your personal information</li>
                            <li>Correct inaccurate or incomplete information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Withdraw consent for data processing</li>
                        </ul>
                    </section>

                    {/* Cookies */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Cookies and Tracking Technologies
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookies through your browser settings, but disabling cookies may affect your ability to use certain features of our website.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Contact Us
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <div className="mt-4 space-y-2 text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75">
                            <p><strong>Email:</strong> everhealth.org@gmail.com</p>
                            <p><strong>Phone:</strong> +91 8606914249</p>
                            <p><strong>Address:</strong> Everhealth, 14/211 Police station road, Kadirur, Thalassery, Kannur-670642, Kerala, India</p>
                        </div>
                    </section>
                </motion.div>
            </section>
        </div>
    );
}
