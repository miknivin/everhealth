import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
        credentials: "include",
    }),
    tagTypes: ["Product", "AdminProducts", "Reviews"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (params: any) => ({
                url: "products/getAllProducts",
                params: {
                    page: params?.page,
                    keyword: params?.keyword,
                    category: params?.category,
                    limit: params?.limit,
                    "price[gte]": params?.min,
                    "price[lte]": params?.max,
                    "ratings[gte]": params?.ratings,
                },
            }),
            providesTags: ["Product"],
        }),
        getProductDetails: builder.query({
            query: (id) => `/products/${id}`,
            providesTags: ["Product"],
        }),
        submitReview: builder.mutation({
            query(body) {
                return {
                    url: "/reviews",
                    method: "PUT",
                    body,
                };
            },
            invalidatesTags: ["Product"],
        }),
        canUserReview: builder.query({
            query: (productId) => `/can_review/?productId=${productId}`,
        }),
        getAdminProducts: builder.query({
            query: () => "/admin/products",
            providesTags: ["AdminProducts"],
        }),
        createProduct: builder.mutation({
            query(body) {
                return {
                    url: "/products/newProduct",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: ["AdminProducts", "Product"],
        }),
        uploadProductImages: builder.mutation({
            query({ id, formData }) {
                return {
                    url: `/products/updateProductImages/addProductImage/${id}`,
                    method: "PATCH",
                    body: formData,
                };
            },
            invalidatesTags: ["Product"],
        }),
        updateProduct: builder.mutation({
            query({ id, body }) {
                return {
                    url: `/products/update/${id}`,
                    method: "PUT",
                    body,
                };
            },
            invalidatesTags: ["Product", "AdminProducts"],
        }),
        deleteProduct: builder.mutation({
            query(id) {
                return {
                    url: `/products/delete/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["AdminProducts", "Product"],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductDetailsQuery,
    useGetAdminProductsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useUploadProductImagesMutation,
    useSubmitReviewMutation,
    useCanUserReviewQuery,
} = productApi;
