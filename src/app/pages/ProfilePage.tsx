'use client';

import React from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useMyOrdersQuery, orderApi } from "../redux/api/orderApi";
import { useLazyLogoutQuery } from "../redux/api/authApi";
import { logoutUser } from "../redux/slices/userSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
    User,
    Package,
    LogOut,
    Mail,
    MapPin,
    Calendar,
    ChevronRight,
    Loader2,
    ShoppingBag
} from "lucide-react";

export function ProfilePage() {
    const { user } = useSelector((state: RootState) => state.user);
    const { data: orderData, isLoading: isOrdersLoading } = useMyOrdersQuery();
    const [logout] = useLazyLogoutQuery();
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logout(undefined).unwrap();
            dispatch(logoutUser());
            // Reset API cache to prevent stale data
            dispatch(orderApi.util.resetApiState());
            toast.success("Logged out successfully");
            router.push("/");
        } catch (err) {
            toast.error("Logout failed");
        }
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
                <div className="text-center">
                    <Loader2 className="w-10 h-10 animate-spin text-[#802367] mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Loading your profile...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-[120px] pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: User Profile Overview */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-1 space-y-6"
                >
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-[#802367]/10 rounded-full flex items-center justify-center mb-4 border-2 border-[#802367]/20">
                                <User className="w-12 h-12 text-[#802367]" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#802367]">{user.name}</h2>
                            <p className="text-[#7C5F47] font-medium capitalize mt-1 px-3 py-1 bg-[#7C5F47]/5 rounded-full text-xs">
                                {user.role} Account
                            </p>
                        </div>

                        <div className="mt-8 space-y-4">
                            {user.email && (
                                <div className="flex items-center gap-4 p-3 rounded-2xl bg-gray-50 border border-transparent hover:border-gray-200 transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#802367]">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Email Address</span>
                                        <span className="text-sm font-medium text-gray-700 truncate max-w-[180px]">{user.email}</span>
                                    </div>
                                </div>
                            )}

                            {user.phone && (
                                <div className="flex items-center gap-4 p-3 rounded-2xl bg-gray-50 border border-transparent hover:border-gray-200 transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#802367]">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Phone Number</span>
                                        <span className="text-sm font-medium text-gray-700">{user.phone}</span>
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center gap-4 p-3 rounded-2xl bg-gray-50 border border-transparent hover:border-gray-200 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#802367]">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Member Since</span>
                                    <span className="text-sm font-medium text-gray-700">
                                        {new Date(user.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleLogout}
                            className="w-full mt-8 h-12 bg-red-50 text-red-500 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-100 transition-colors border border-red-500/10"
                        >
                            <LogOut className="w-5 h-5" />
                            Logout from Account
                        </motion.button>
                    </div>

                    <div className="bg-[#802367] rounded-[32px] p-8 shadow-lg shadow-[#802367]/20 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-lg font-bold mb-2">Need help?</h3>
                            <p className="text-white/80 text-sm mb-4">Our support team is here for you 24/7 if you have any questions about your orders.</p>
                            <motion.button
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2 text-sm font-bold underline"
                            >
                                Contact Support <ChevronRight className="w-4 h-4" />
                            </motion.button>
                        </div>
                        <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    </div>
                </motion.div>

                {/* Right Column: Order History */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-2 space-y-6"
                >
                    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 min-h-[500px]">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#802367] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#802367]/30">
                                    <Package className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#802367]">Order History</h2>
                                    <p className="text-[#7C5F47]/60 text-sm">Track and manage your recent orders</p>
                                </div>
                            </div>
                        </div>

                        {isOrdersLoading ? (
                            <div className="flex flex-col items-center justify-center py-20 grayscale opacity-50">
                                <Loader2 className="w-10 h-10 animate-spin text-[#802367] mb-4" />
                                <p>Retrieving your order data...</p>
                            </div>
                        ) : orderData?.orders && orderData.orders.length > 0 ? (
                            <div className="space-y-4">
                                {orderData.orders.map((order: any) => (
                                    <motion.div
                                        key={order._id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        whileHover={{ scale: 1.01 }}
                                        className="p-5 rounded-[24px] bg-gray-50 border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-md transition-all cursor-pointer"
                                        onClick={() => router.push(`/order/${order._id}`)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-sm relative overflow-hidden">
                                                {order.orderItems?.[0]?.image ? (
                                                    <img src={order.orderItems[0].image} alt="Product" className="w-full h-full object-cover" />
                                                ) : (
                                                    <ShoppingBag className="w-6 h-6 text-[#802367]/30" />
                                                )}
                                                {order.orderItems?.length > 1 && (
                                                    <div className="absolute bottom-0 right-0 bg-[#802367] text-white text-[9px] px-1 font-bold">
                                                        +{order.orderItems.length - 1}
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold text-[#802367] text-sm">#{order._id.slice(-6).toUpperCase()}</span>
                                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${order.orderStatus === 'Delivered' ? 'bg-green-100 text-green-600' :
                                                        order.orderStatus === 'Processing' ? 'bg-blue-100 text-blue-600' :
                                                            order.orderStatus === 'Shipped' ? 'bg-purple-100 text-purple-600' :
                                                                'bg-orange-100 text-orange-600'
                                                        }`}>
                                                        {order.orderStatus}
                                                    </span>
                                                </div>
                                                <p className="text-gray-400 text-xs mt-1">
                                                    {new Date(order.createdAt).toLocaleDateString('en-GB', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                                            <div className="text-right">
                                                <span className="text-[10px] text-gray-400 block font-bold">Total Amount</span>
                                                <span className="text-lg font-black text-[#802367]">₹{order.totalAmount}</span>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-[#802367] transition-colors shadow-sm">
                                                <ChevronRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                    <Package className="w-10 h-10 text-gray-200" />
                                </div>
                                <h3 className="text-xl font-bold text-[#802367]">No orders yet</h3>
                                <p className="text-gray-400 mt-2 max-w-[250px]">You haven't placed any orders yet. Start shopping to see them here!</p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => router.push('/products')}
                                    className="mt-6 px-8 py-3 bg-[#802367] text-white rounded-2xl font-bold shadow-lg shadow-[#802367]/20"
                                >
                                    Explore Products
                                </motion.button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
