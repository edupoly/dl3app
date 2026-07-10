import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dl3backendserver.onrender.com",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => {
        return {
          url: `/login`,
          method: "POST",
          body: user,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation } = authApi;
