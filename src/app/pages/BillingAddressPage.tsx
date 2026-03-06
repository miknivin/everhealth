'use client';

declare global {
  interface Window {
    Razorpay: any;
  }
}

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../redux/store';
import { useCreateNewOrderMutation } from "../redux/api/orderApi";
import { clearCart, CartItem } from "../redux/slices/cartSlice";
import clsx from "clsx";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import imgLogo2 from "@/assets/91af2b2974b632c0dcaf1add2472d0679b8ab69b.png";
import svgPathsImports from "../../imports/svg-5u31ml0zun";
import { PaymentSection } from "../components/PaymentSection";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { INDIAN_CITIES } from "../utils/indianCities";
import { toast } from "sonner";

// Helper Components
function InputField({
  label,
  placeholder,
  className = "",
  value,
  onChange,
  type = "text",
  required = false,
  list
}: {
  label: string;
  placeholder?: string;
  className?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  list?: string;
}) {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      <label className="text-[14px] font-['Roboto',sans-serif] font-medium text-[#222]/50">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="bg-[#ededed] h-[44px] rounded-[13px] shadow-inner flex items-center px-4">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent w-full h-full outline-none text-[#222] font-['Roboto',sans-serif]"
          placeholder={placeholder}
          required={required}
          list={list}
        />
      </div>
    </div>
  );
}

export function BillingAddressPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { user } = useSelector((state: RootState) => state.user);
  const [createOrder, { isLoading: isCreatingOrder }] = useCreateNewOrderMutation();

  const [showAddressConfirmed, setShowAddressConfirmed] = useState(false);
  const [isAddressConfirmed, setIsAddressConfirmed] = useState(false);
  const [sameAsBilling, setSameAsBilling] = useState(false);

  // Calculate cart total
  const cartTotal = cartItems.reduce((total: number, item: CartItem) => {
    const sellingPrice = (item.discountPrice > 0 && item.discountPrice < item.price)
      ? item.discountPrice
      : item.price;
    return total + (sellingPrice * item.quantity);
  }, 0);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    zipCode: "",
    city: "",
    country: "India"
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address1', 'zipCode', 'city', 'country'];
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

    if (emptyFields.length > 0) {
      toast.error('Please fill in all required fields');
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    // Basic phone validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, ''))) {
      toast.error('Please enter a valid 10-digit phone number');
      return false;
    }

    return true;
  };

  const handleContinue = () => {
    if (!validateForm()) {
      return;
    }

    // Show confirmation popup
    setShowAddressConfirmed(true);
  };

  const handleConfirmAddress = () => {
    setShowAddressConfirmed(false);
    // After closing/confirmation, the payment section will appear
    setIsAddressConfirmed(true);
  };

  const handlePay = async (amount: string, method: 'prepaid' | 'cod') => {
    try {
      if (isCreatingOrder) return;

      // Check if user is authenticated
      if (!user) {
        toast.error('Please login to place an order');
        return;
      }

      // Calculate amounts
      const itemsPrice = cartTotal;
      const taxAmount = 0;
      const shippingAmount = 0; // No shipping charges for both prepaid and COD
      const totalAmount = itemsPrice + taxAmount + shippingAmount;

      if (method === 'prepaid') {
        const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

        if (!razorpayKey) {
          toast.error("Razorpay Key ID is missing. Please add NEXT_PUBLIC_RAZORPAY_KEY_ID to your .env file.");
          return;
        }

        const options = {
          key: razorpayKey,
          amount: totalAmount * 100, // Razorpay expects amount in paise
          currency: "INR",
          name: "Everhealth",
          description: "Payment for your order",
          image: imgLogo2.src,
          handler: async function (response: any) {
            // Payment successful, now create the order
            await createOrderInDB(method, totalAmount, response.razorpay_payment_id);
          },
          prefill: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            contact: formData.phone,
          },
          theme: {
            color: "#802367",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response: any) {
          toast.error("Payment failed. Please try again.");
          console.error("Razorpay Error:", response.error);
        });
        rzp.open();
      } else {
        // COD logic
        await createOrderInDB(method, totalAmount);
      }
    } catch (error: any) {
      console.error('Order logic error:', error);
      toast.error(error?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  const createOrderInDB = async (method: 'prepaid' | 'cod', total: number, paymentId?: string) => {
    try {
      // Prepare order items
      const orderItems = cartItems.map((item: CartItem) => ({
        product: item.productId,
        name: item.name,
        quantity: item.quantity,
        image: item.image,
        price: item.price,
        discountPrice: item.discountPrice,
        variant: item.variant // Pass the entire variant object
      }));

      // Prepare shipping info
      const shippingInfo = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        phoneNo: formData.phone,
        address: formData.address1,
        address2: formData.address2,
        city: formData.city,
        zipCode: formData.zipCode,
        country: formData.country
      };

      const itemsPrice = cartTotal;
      const taxAmount = 0;
      const shippingAmount = 0; // No shipping charges for both prepaid and COD

      // Prepare payment info
      const paymentInfo = {
        status: method === 'prepaid' ? 'Paid' : 'Pending',
        taxPaid: taxAmount,
        amountPaid: method === 'prepaid' ? total : 0,
        id: paymentId
      };

      // Create order
      const orderData = {
        orderItems,
        shippingInfo,
        itemsPrice,
        taxAmount,
        shippingAmount,
        totalAmount: total,
        paymentMethod: method === 'prepaid' ? 'Online' : 'COD',
        paymentInfo
      };

      const response = await createOrder(orderData).unwrap();

      if (response.success) {
        dispatch(clearCart());
        if (method === 'prepaid') {
          toast.success(`Payment successful and order placed!`);
        } else {
          toast.success(`Order placed successfully! Pay ₹${total} on delivery.`);
        }
        setTimeout(() => {
          router.push('/');
        }, 1500);
      }
    } catch (error: any) {
      console.error('Database order creation error:', error);
      toast.error(error?.data?.message || 'Failed to create order in database.');
    }
  };

  return (
    <div className="bg-white min-h-screen w-full font-['Roboto',sans-serif] flex flex-col">
      {/* Confirmation Dialog */}
      <Dialog open={showAddressConfirmed} onOpenChange={setShowAddressConfirmed}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Address Confirmed</DialogTitle>
            <DialogDescription>
              Your billing and shipping address has been successfully verified. Please proceed to payment.
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={handleConfirmAddress}
            className="mt-4 bg-[#802367] text-white px-4 py-2 rounded-md hover:bg-[#6f0a54] transition-colors"
          >
            Okay
          </button>
        </DialogContent>
      </Dialog>

      <Header />

      {/* Page Title & Breadcrumb-ish info */}
      <div className="w-full max-w-[1000px] mx-auto px-4 lg:px-[62px] pt-[160px] pb-4">
        {/* Headings removed as per request */}

        {/* Main Content Form */}
        <div className="max-w-[1000px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
            {/* Row 1 */}
            <InputField
              label="First Name"
              value={formData.firstName}
              onChange={(value) => updateField('firstName', value)}
              required
            />
            <InputField
              label="Last Name"
              value={formData.lastName}
              onChange={(value) => updateField('lastName', value)}
              required
            />

            {/* Row 2 */}
            <InputField
              label="E-mail Address"
              type="email"
              value={formData.email}
              onChange={(value) => updateField('email', value)}
              required
            />
            <InputField
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(value) => updateField('phone', value)}
              placeholder="10-digit mobile number"
              required
            />

            {/* Row 3 */}
            <InputField
              label="Address 1"
              value={formData.address1}
              onChange={(value) => updateField('address1', value)}
              placeholder="Street address, P.O. box"
              required
            />
            <InputField
              label="Address 2"
              value={formData.address2}
              onChange={(value) => updateField('address2', value)}
              placeholder="Apartment, suite, unit, etc. (optional)"
            />

            {/* Row 4 */}
            <InputField
              label="Zip Code"
              value={formData.zipCode}
              onChange={(value) => updateField('zipCode', value)}
              placeholder="6-digit PIN code"
              required
            />

            <div>
              <InputField
                label="City"
                list="city-options"
                value={formData.city}
                onChange={(value) => updateField('city', value)}
                required
                placeholder="Select or type city"
              />
              <datalist id="city-options">
                {INDIAN_CITIES.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>

            {/* Row 5 - Full Width */}
            <div className="md:col-span-1">
              <InputField
                label="Choose Country"
                value={formData.country}
                onChange={(value) => updateField('country', value)}
                required
              />
            </div>
          </div>




          {/* Actions */}
          {!isAddressConfirmed ? (
            <div className="flex justify-between items-center mt-12 mb-20">
              <button
                onClick={() => router.push('/cart')}
                className="h-[48px] px-6 py-2 rounded-[13px] bg-[#7c5f47]/10 text-[#802367] text-[16px] font-medium hover:bg-[#7c5f47]/20 transition-colors"
              >
                Back to cart
              </button>

              <button
                onClick={handleContinue}
                className="h-[48px] px-6 py-2 rounded-[13px] bg-[#802367] text-white text-[16px] font-medium hover:bg-[#6f0a54] transition-colors"
              >
                Continue
              </button>
            </div>
          ) : (
            <div className="mt-12 mb-20">
              <PaymentSection onPay={handlePay} cartTotal={cartTotal} />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
