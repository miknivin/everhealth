import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    productId: string;
    name: string;
    price: number;
    discountPrice: number;
    quantity: number;
    image: string;
    variant?: {
        size: string;
        price: number;
        discountPrice: number;
    };
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(
                (item) =>
                    item.productId === action.payload.productId &&
                    item.variant?.size === action.payload.variant?.size
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<{ productId: string; variantSize?: string }>) => {
            state.items = state.items.filter(
                (item) =>
                    !(item.productId === action.payload.productId &&
                        item.variant?.size === action.payload.variantSize)
            );
        },
        updateQuantity: (state, action: PayloadAction<{ productId: string; variantSize?: string; quantity: number }>) => {
            const item = state.items.find(
                (item) =>
                    item.productId === action.payload.productId &&
                    item.variant?.size === action.payload.variantSize
            );
            if (item) {
                item.quantity = Math.max(1, action.payload.quantity);
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
