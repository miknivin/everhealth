'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User as UserIcon, Eye, EyeOff, Loader2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { useLoginMutation, useRegisterMutation, useGoogleSignInMutation } from "../redux/api/authApi";
import { useDispatch } from "react-redux";
import { setUser, setIsAuthenticated } from "../redux/slices/userSlice";
import { auth, googleProvider } from "../../lib/firebase";
import { signInWithPopup } from "firebase/auth";

interface LoginRegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.26 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.11c-.22-.67-.35-1.38-.35-2.11s.13-1.44.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z" fill="#EA4335" />
    </svg>
);

export function LoginRegisterModal({ isOpen, onClose }: LoginRegisterModalProps) {
    const [mode, setMode] = useState<"login" | "register">("login");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [registrationMethod, setRegistrationMethod] = useState<"email" | "phone">("email");
    const dispatch = useDispatch();
    const [login, { isLoading: isLoginLoading }] = useLoginMutation();
    const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();
    const [googleSignIn, { isLoading: isGoogleLoading }] = useGoogleSignInMutation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const isLoading = isLoginLoading || isRegisterLoading || isGoogleLoading;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setErrorMessage(""); // Clear error when user types
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(""); // Clear previous errors

        try {
            if (mode === "login") {
                const res = await login({ email: formData.email, password: formData.password }).unwrap();
                dispatch(setUser(res.user));
                dispatch(setIsAuthenticated(true));
                toast.success("Logged in successfully!");
            } else {
                const res = await register(formData).unwrap();
                dispatch(setUser(res.user));
                dispatch(setIsAuthenticated(true));
                toast.success("Account created successfully!");
            }
            onClose();
        } catch (error: any) {
            const errorMsg = error?.data?.error || "Authentication failed. Please check your credentials.";
            setErrorMessage(errorMsg);
            toast.error(errorMsg);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            const res = await googleSignIn({
                name: user.displayName,
                email: user.email,
                avatar: user.photoURL,
            }).unwrap();

            dispatch(setUser(res.user));
            dispatch(setIsAuthenticated(true));
            toast.success("Logged in with Google successfully!");
            onClose();
        } catch (error: any) {
            console.error(error);
            toast.error(error?.data?.error || "Google login failed. Please try again.");
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden border-none bg-white rounded-[32px] max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="relative p-6 sm:p-8">
                    <DialogHeader className="mb-6 sm:mb-8">
                        <DialogTitle className="text-3xl font-bold text-[#802367] text-center font-['Inter',sans-serif]">
                            {mode === "login" ? "Sign In" : "Sign Up"}
                        </DialogTitle>
                    </DialogHeader>

                    {/* Error Message Display */}
                    <AnimatePresence>
                        {errorMessage && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mb-4 p-3 bg-red-50 border border-red-200 rounded-[12px] flex items-start gap-2"
                            >
                                <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <p className="text-sm text-red-700 font-medium">{errorMessage}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <AnimatePresence mode="wait">
                            {mode === "register" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-2"
                                >
                                    <Label htmlFor="name">Full Name</Label>
                                    <div className="relative">
                                        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            className="pl-10 h-12 bg-gray-50 border-gray-100 rounded-[12px] focus:ring-[#802367] focus:border-[#802367]"
                                            required={mode === "register"}
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-4">
                            {/* Email Field - Always Show */}
                            <div className="space-y-2">
                                <Label htmlFor="email">
                                    {mode === "login" ? "Email or Phone Number" : (
                                        <>Email Address <span className="text-gray-400 font-normal">(Optional if Phone provided)</span></>
                                    )}
                                </Label>
                                <div className="relative">
                                    {mode === "login" ? (
                                        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    ) : (
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    )}
                                    <Input
                                        id="email"
                                        type={mode === "login" ? "text" : "email"}
                                        placeholder={mode === "login" ? "Email or phone number" : "name@example.com"}
                                        className="pl-10 h-12 bg-gray-50 border-gray-100 rounded-[12px] focus:ring-[#802367] focus:border-[#802367]"
                                        required={mode === "login"}
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Phone Field - Only Show in Register Mode */}
                            {mode === "register" && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="space-y-2 overflow-hidden"
                                >
                                    <Label htmlFor="phone">Phone Number <span className="text-gray-400 font-normal">(Optional if Email provided)</span></Label>
                                    <div className="relative">
                                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+91 00000 00000"
                                            className="pl-10 h-12 bg-gray-50 border-gray-100 rounded-[12px] focus:ring-[#802367] focus:border-[#802367]"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password">Password</Label>
                                {mode === "login" && (
                                    <button type="button" className="text-sm text-[#802367] hover:underline">
                                        Forgot Password?
                                    </button>
                                )}
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="pl-10 pr-10 h-12 bg-gray-50 border-gray-100 rounded-[12px] focus:ring-[#802367] focus:border-[#802367]"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5 text-gray-400" />
                                    ) : (
                                        <Eye className="w-5 h-5 text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 bg-[#802367] hover:bg-[#6d1d57] text-white rounded-[12px] text-base font-semibold transition-all duration-300 transform active:scale-[0.98]"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : mode === "login" ? (
                                "Sign In"
                            ) : (
                                "Sign Up"
                            )}
                        </Button>
                    </form>

                    <div className="relative my-6 text-center">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-100"></span>
                        </div>
                        <span className="relative px-4 text-sm text-gray-400 bg-white">Or continue with</span>
                    </div>

                    <Button
                        type="button"
                        variant="outline"
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                        className="w-full h-12 border-gray-100 rounded-[12px] font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-3 transition-colors"
                    >
                        {isGoogleLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                <GoogleIcon />
                                Sign in with Google
                            </>
                        )}
                    </Button>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
                        <button
                            onClick={() => {
                                setMode(mode === "login" ? "register" : "login");
                                setErrorMessage(""); // Clear error when switching modes
                            }}
                            className="text-[#802367] font-semibold hover:underline"
                        >
                            {mode === "login" ? "Sign up" : "Sign in"}
                        </button>
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
}
