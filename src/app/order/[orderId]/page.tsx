'use client';

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useOrderDetailsQuery } from "@/app/redux/api/orderApi";
import { motion } from "framer-motion";
import {
    Package,
    MapPin,
    CreditCard,
    Calendar,
    ArrowLeft,
    Loader2,
    CheckCircle,
    Clock,
    Truck,
    XCircle
} from "lucide-react";

export default function OrderDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const orderId = params.orderId as string;

    const { data, isLoading, isError } = useOrderDetailsQuery(orderId);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
                <div className="text-center">
                    <Loader2 className="w-10 h-10 animate-spin text-[#802367] mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Loading order details...</p>
                </div>
            </div>
        );
    }

    if (isError || !data?.order) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
                <div className="text-center">
                    <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Not Found</h2>
                    <p className="text-gray-500 mb-6">We couldn't find the order you're looking for.</p>
                    <button
                        onClick={() => router.push('/profile')}
                        className="px-6 py-2 bg-[#802367] text-white rounded-lg hover:bg-[#6f0a54] transition-colors"
                    >
                        Back to Profile
                    </button>
                </div>
            </div>
        );
    }

    const order = data.order;

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Delivered':
                return <CheckCircle className="w-5 h-5 text-green-600" />;
            case 'Shipped':
                return <Truck className="w-5 h-5 text-purple-600" />;
            case 'Processing':
                return <Clock className="w-5 h-5 text-blue-600" />;
            case 'Cancelled':
                return <XCircle className="w-5 h-5 text-red-600" />;
            default:
                return <Package className="w-5 h-5 text-orange-600" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Delivered':
                return 'bg-green-100 text-green-600';
            case 'Shipped':
                return 'bg-purple-100 text-purple-600';
            case 'Processing':
                return 'bg-blue-100 text-blue-600';
            case 'Cancelled':
                return 'bg-red-100 text-red-600';
            default:
                return 'bg-orange-100 text-orange-600';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-[120px] pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => router.push('/profile')}
                    className="flex items-center gap-2 text-[#802367] hover:text-[#6f0a54] mb-6 font-medium"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Orders
                </button>

                {/* Order Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 mb-6"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-[#802367] mb-2">
                                Order #{order._id.slice(-6).toUpperCase()}
                            </h1>
                            <div className="flex items-center gap-2 text-gray-500">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">
                                    Placed on {new Date(order.createdAt).toLocaleDateString('en-GB', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            {getStatusIcon(order.orderStatus)}
                            <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider ${getStatusColor(order.orderStatus)}`}>
                                {order.orderStatus}
                            </span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Order Items */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2 bg-white rounded-[32px] p-8 shadow-sm border border-gray-100"
                    >
                        <h2 className="text-xl font-bold text-[#802367] mb-6 flex items-center gap-2">
                            <Package className="w-6 h-6" />
                            Order Items
                        </h2>
                        <div className="space-y-4">
                            {order.orderItems.map((item: any, index: number) => (
                                <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="w-20 h-20 bg-white rounded-xl overflow-hidden border border-gray-100 flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-gray-800">{item.name}</h3>
                                        {item.variant && (
                                            <p className="text-sm text-gray-500">
                                                Size: {item.variant.size || item.variant}
                                            </p>
                                        )}
                                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-[#802367]">₹{item.discountPrice || item.price}</p>
                                        {item.discountPrice && item.discountPrice < item.price && (
                                            <p className="text-sm text-gray-400 line-through">₹{item.price}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Order Summary & Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Shipping Info */}
                        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-[#802367] mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                Shipping Address
                            </h3>
                            <div className="space-y-2 text-sm text-gray-600">
                                <p className="font-semibold text-gray-800">
                                    {order.shippingInfo.firstName} {order.shippingInfo.lastName}
                                </p>
                                <p>{order.shippingInfo.address}</p>
                                {order.shippingInfo.address2 && <p>{order.shippingInfo.address2}</p>}
                                <p>
                                    {order.shippingInfo.city}, {order.shippingInfo.zipCode}
                                </p>
                                <p>{order.shippingInfo.country}</p>
                                <p className="pt-2 border-t border-gray-100">
                                    Phone: {order.shippingInfo.phone || order.shippingInfo.phoneNo}
                                </p>
                                <p>Email: {order.shippingInfo.email}</p>
                            </div>
                        </div>

                        {/* Payment Info */}
                        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-[#802367] mb-4 flex items-center gap-2">
                                <CreditCard className="w-5 h-5" />
                                Payment Details
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Payment Method</span>
                                    <span className="font-semibold text-gray-800">{order.paymentMethod}</span>
                                </div>
                                {/* <div className="flex justify-between">
                                    <span className="text-gray-600">Payment Status</span>
                                    <span className={`font-semibold ${order.paymentInfo?.status === 'Paid' ? 'text-green-600' : 'text-orange-600'}`}>
                                        {order.paymentInfo?.status || 'Pending'}
                                    </span>
                                </div> */}
                                <div className="border-t border-gray-100 pt-3 space-y-2">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>₹{order.itemsPrice}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax</span>
                                        <span>₹{order.taxAmount}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span>{order.shippingAmount > 0 ? `₹${order.shippingAmount}` : 'FREE'}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold text-[#802367] pt-2 border-t border-gray-200">
                                        <span>Total</span>
                                        <span>₹{order.totalAmount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
