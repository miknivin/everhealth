import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const enquiryApi = createApi({
    reducerPath: "enquiryApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
        credentials: "include",
    }),
    tagTypes: ["Enquiries"],
    endpoints: (builder) => ({
        getEnquiries: builder.query({
            query: () => "/enquiries",
            providesTags: ["Enquiries"],
            transformResponse: (response: any) => {
                return { enquiries: response.data };
            },
        }),
        deleteEnquiry: builder.mutation({
            query: (id) => ({
                url: `/enquiries/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Enquiries"],
        }),
        createEnquiry: builder.mutation({
            query: (body) => ({
                url: "/enquiries",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Enquiries"],
        }),
    }),
});

export const { useGetEnquiriesQuery, useDeleteEnquiryMutation, useCreateEnquiryMutation } = enquiryApi;
