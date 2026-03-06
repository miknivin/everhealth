import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import { productApi } from "./api/productApi";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { orderApi } from "./api/orderApi";
import { websiteSettingsApi } from "./api/websiteSettingsApi";
import { enquiryApi } from "./api/enquiryApi";
import { couponApi } from "./api/couponApi";

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        [productApi.reducerPath]: productApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [websiteSettingsApi.reducerPath]: websiteSettingsApi.reducer,
        [enquiryApi.reducerPath]: enquiryApi.reducer,
        [couponApi.reducerPath]: couponApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            productApi.middleware,
            authApi.middleware,
            userApi.middleware,
            orderApi.middleware,
            websiteSettingsApi.middleware,
            enquiryApi.middleware,
            couponApi.middleware,
        ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
