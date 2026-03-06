'use client';

import React from "react";
import { motion } from "framer-motion";

export function CancellationReturnPolicy() {
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
                        Cancellation & Return Policy
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
                            At Everhealth, we want you to be completely satisfied with your purchase. This Cancellation and Return Policy outlines the terms and conditions for canceling orders and returning products. Please read this policy carefully before making a purchase.
                        </p>
                    </section>

                    {/* Order Cancellation */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Order Cancellation
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-[20px] md:text-[24px] font-['Roboto',sans-serif] font-semibold text-[#802367] mb-2">
                                    Before Shipment
                                </h3>
                                <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                                    You may cancel your order before it has been shipped. To cancel an order:
                                </p>
                                <ul className="list-disc list-inside ml-4 mt-2 space-y-2 text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75">
                                    <li>Log in to your account and go to "My Orders"</li>
                                    <li>Select the order you wish to cancel</li>
                                    <li>Click on "Cancel Order" and confirm</li>
                                    <li>You will receive a full refund within 5-7 business days</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[20px] md:text-[24px] font-['Roboto',sans-serif] font-semibold text-[#802367] mb-2">
                                    After Shipment
                                </h3>
                                <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                                    Once an order has been shipped, it cannot be canceled. However, you may refuse delivery or return the product as per our return policy outlined below.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Return Policy */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Return Policy
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-[20px] md:text-[24px] font-['Roboto',sans-serif] font-semibold text-[#802367] mb-2">
                                    Return Eligibility
                                </h3>
                                <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px] mb-3">
                                    Products may be returned within 7 days of delivery if they meet the following conditions:
                                </p>
                                <ul className="list-disc list-inside ml-4 space-y-2 text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75">
                                    <li>Product is damaged, defective, or not as described</li>
                                    <li>Product is unopened and in its original packaging</li>
                                    <li>Product seal is intact (for hygiene and safety reasons)</li>
                                    <li>All original tags, labels, and accessories are included</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[20px] md:text-[24px] font-['Roboto',sans-serif] font-semibold text-[#802367] mb-2">
                                    Non-Returnable Items
                                </h3>
                                <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px] mb-3">
                                    The following items cannot be returned:
                                </p>
                                <ul className="list-disc list-inside ml-4 space-y-2 text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75">
                                    <li>Opened or used products</li>
                                    <li>Products with broken seals</li>
                                    <li>Products purchased during special sales or promotions (unless defective)</li>
                                    <li>Products without original packaging or tags</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How to Return */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            How to Return a Product
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px] mb-3">
                            To initiate a return, please follow these steps:
                        </p>
                        <ol className="list-decimal list-inside ml-4 space-y-3 text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75">
                            <li>Contact our customer support team at everhealth.org@gmail.com or +91 8606914249</li>
                            <li>Provide your order number and reason for return</li>
                            <li>Our team will review your request and provide return instructions</li>
                            <li>Pack the product securely in its original packaging</li>
                            <li>Ship the product to the address provided by our team</li>
                            <li>Once we receive and inspect the returned product, we will process your refund or replacement</li>
                        </ol>
                    </section>

                    {/* Refund Process */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Refund Process
                        </h2>
                        <div className="space-y-4">
                            <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                                Once your return is received and inspected, we will send you an email notification. If approved, your refund will be processed according to the following timeline:
                            </p>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75">
                                <li>Online payments (Credit/Debit Card, UPI, Net Banking): 5-7 business days</li>
                                <li>Cash on Delivery: Bank transfer within 7-10 business days (bank details required)</li>
                            </ul>
                            <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px] mt-4">
                                Please note that shipping charges are non-refundable unless the return is due to our error (wrong product, damaged product, etc.).
                            </p>
                        </div>
                    </section>

                    {/* Exchange Policy */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Exchange Policy
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            We currently do not offer direct exchanges. If you wish to exchange a product, please return the original item for a refund and place a new order for the desired product.
                        </p>
                    </section>

                    {/* Damaged or Defective Products */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Damaged or Defective Products
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            If you receive a damaged or defective product, please contact us immediately with photos of the product and packaging. We will arrange for a replacement or full refund, including shipping charges, at no additional cost to you.
                        </p>
                    </section>

                    {/* Return Shipping */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Return Shipping Costs
                        </h2>
                        <div className="space-y-3 text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            <p><strong>Customer's responsibility:</strong> If the return is due to change of mind or personal preference, you will be responsible for return shipping costs.</p>
                            <p><strong>Our responsibility:</strong> If the return is due to our error (wrong product, damaged product, defective product), we will cover all return shipping costs.</p>
                        </div>
                    </section>

                    {/* Contact Us */}
                    <section>
                        <h2 className="text-[28px] md:text-[32px] font-['Roboto',sans-serif] font-semibold text-[#91086C] mb-4">
                            Contact Us
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-['Roboto',sans-serif] text-[#802367]/75 leading-[28px]">
                            If you have any questions about our Cancellation and Return Policy, please contact us at:
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
