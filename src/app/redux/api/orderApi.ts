import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
        credentials: "include",
    }),
    tagTypes: ["Order", "MyOrders", "AdminOrders", "Coupons", "SessionStartedOrder"],
    endpoints: (builder) => ({
        createNewOrder: builder.mutation<any, any>({
            query(body) {
                return {
                    url: "/orders/createOrder",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: ["MyOrders"], // Invalidate cache when new order is created
        }),
        myOrders: builder.query<any, void>({
            query: () => `/orders/getOrdersByUser`,
            providesTags: ["MyOrders"], // Tag this query for cache invalidation
        }),
        orderDetails: builder.query<any, string>({
            query: (id) => `/orders/${id}`,
            providesTags: ["Order"],
        }),
        checkCoupon: builder.mutation<any, any>({
            query(body) {
                return {
                    url: "/coupon/check",
                    method: "POST",
                    body,
                };
            },
        }),
        applyCoupon: builder.mutation<any, any>({
            query(body) {
                return {
                    url: "/coupon/apply",
                    method: "POST",
                    body,
                };
            },
        }),
    }),
});

export const {
    useCreateNewOrderMutation,
    useMyOrdersQuery,
    useOrderDetailsQuery,
    useCheckCouponMutation,
    useApplyCouponMutation,
} = orderApi;
