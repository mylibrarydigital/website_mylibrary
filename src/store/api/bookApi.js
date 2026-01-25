import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/endpoint';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/web/base`,
    prepareHeaders: (headers, { getState }) => {
      // Add any auth headers if needed
      // const token = getState().auth?.token;
      // if (token) {
      //   headers.set('authorization', `Bearer ${token}`);
      // }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Book'],
  endpoints: (builder) => ({
    getBookById: builder.query({
      query: (id) => `/books/${id}`,
      transformResponse: (response, meta, arg) => {
        // Transform the API response to match component expectations
        if (response && response.success && response.data) {
          return {
            id: response.data.id,
            title: response.data.title,
            author: response.data.author,
            description: response.data.description,
            coverImage: response.data.coverImage,
            categories: response.data.categories || [],
            library: response.data.library || null,
            // Map categories array to category string for display
            category: response.data.categories?.[0]?.name || '',
            language: response.data.library?.name || 'Sinhala', // Adjust based on your data
          };
        }
        // If response structure is unexpected, throw error with message
        const errorMessage = response?.message || 'Failed to fetch book';
        throw new Error(errorMessage);
      },
      transformErrorResponse: (response, meta, arg) => {
        // Handle error responses
        return {
          status: response?.status,
          data: {
            message: response?.data?.message || response?.data?.error || 'An error occurred while fetching the book',
          },
        };
      },
      providesTags: (result, error, id) => [{ type: 'Book', id }],
    }),
  }),
});

export const { useGetBookByIdQuery } = bookApi;
