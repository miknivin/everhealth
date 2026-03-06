import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
        credentials: "include",
    }),
    endpoints: (builder) => ({
        register: builder.mutation<any, any>({
            query(body) {
                return {
                    url: "/auth/register",
                    method: "POST",
                    body,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getMe.initiate(null));
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        googleSignIn: builder.mutation<any, any>({
            query(body) {
                return {
                    url: "/auth/google",
                    method: "POST",
                    body,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getMe.initiate(null));
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        login: builder.mutation<any, any>({
            query(body) {
                return {
                    url: "/auth/login",
                    method: "POST",
                    body,
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getMe.initiate(null));
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        logout: builder.query<any, void>({
            query: () => "auth/logout",
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useLazyLogoutQuery,
    useGoogleSignInMutation,
} = authApi;
