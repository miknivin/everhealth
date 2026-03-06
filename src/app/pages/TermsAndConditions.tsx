'use client';

import React from "react";
import { motion } from "framer-motion";

export function TermsAndConditions() {
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
                        Terms & Conditions
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
                            Welcome to Everhealth. These Terms and Conditions govern your use of our website and the purchase of products from us. By accessing our website or making a purchase, you agree to be bound by these terms. Please read them carefully.
                        </p>
                    </section>

                    {/* Use of Website */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Use of Website
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px] mb-3">
                            By using our website, you agree to:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75">
                            <li>Provide accurate and complete information when creating an account or placing an order</li>
                            <li>Maintain the security of your account credentials</li>
                            <li>Use the website only for lawful purposes</li>
                            <li>Not engage in any activity that could harm or interfere with the website's operation</li>
                            <li>Not attempt to gain unauthorized access to any part of the website</li>
                        </ul>
                    </section>

                    {/* Product Information */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Product Information
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions, images, pricing, or other content on our website is accurate, complete, reliable, current, or error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
                        </p>
                    </section>

                    {/* Pricing and Payment */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Pricing and Payment
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                                All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless otherwise stated. We reserve the right to change prices at any time without prior notice.
                            </p>
                            <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                                Payment must be made at the time of order placement. We accept various payment methods including credit/debit cards, net banking, UPI, and other digital payment options. All transactions are processed securely through our payment gateway partners.
                            </p>
                        </div>
                    </section>

                    {/* Order Acceptance */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Order Acceptance
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            Your order constitutes an offer to purchase products from us. We reserve the right to accept or reject any order for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraudulent activity. If we reject your order after payment has been processed, we will refund the full amount.
                        </p>
                    </section>

                    {/* Shipping and Delivery */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Shipping and Delivery
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px] mb-3">
                            We ship products to addresses within India. Shipping charges and estimated delivery times will be displayed during checkout. While we strive to meet estimated delivery times, we are not responsible for delays caused by:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2 text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75">
                            <li>Courier service delays</li>
                            <li>Natural disasters or weather conditions</li>
                            <li>Government restrictions or regulations</li>
                            <li>Incorrect or incomplete shipping information provided by you</li>
                        </ul>
                    </section>

                    {/* Product Quality */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Product Quality and Natural Variations
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            All our products are 100% natural and made from high-quality ingredients. As natural products, there may be slight variations in color, texture, or aroma between batches. These variations do not affect the quality or efficacy of the products.
                        </p>
                    </section>

                    {/* Intellectual Property */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Intellectual Property
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            All content on this website, including text, graphics, logos, images, and software, is the property of Everhealth and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Limitation of Liability
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            To the maximum extent permitted by law, Everhealth shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or products. Our total liability shall not exceed the amount paid by you for the product giving rise to the claim.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Governing Law
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Kannur, Kerala, India.
                        </p>
                    </section>

                    {/* Changes to Terms */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Changes to Terms
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the website after any changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Contact Us
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            If you have any questions about these Terms and Conditions, please contact us at:
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
