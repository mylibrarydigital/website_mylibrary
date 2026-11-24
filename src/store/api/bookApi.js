import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/endpoint';
import { normalizeDescription, validateAndNormalizeBooks } from '../../utils/books';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/base`,
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Book', 'BooksList'],
  endpoints: (builder) => ({
    getBooksList: builder.query({
      query: () => '/books-list',
      transformResponse: (response) => {
        if (
          !response ||
          typeof response !== 'object' ||
          Array.isArray(response) ||
          response.success !== true ||
          response.status_code !== 200 ||
          !Array.isArray(response.data)
        ) {
          throw new Error(
            response?.message ||
              'My Library Books API expected success: true, status_code: 200, and a data array.'
          );
        }
        return validateAndNormalizeBooks(response.data, 'My Library Books API data');
      },
      transformErrorResponse: (response) => {
        const status = response?.status;
        const message =
          response?.data?.message ||
          response?.data?.error ||
          (typeof status === 'number'
            ? `My Library Books API returned HTTP ${status}.`
            : 'Unable to reach My Library Books API. Please check your connection and try again.');
        return {
          status,
          data: { message },
        };
      },
      providesTags: ['BooksList'],
    }),
    getBookById: builder.query({
      query: (id) => `/books/${encodeURIComponent(id)}`,
      transformResponse: (response) => {
        // Transform the API response to match component expectations
        if (response && response.success && response.data) {
          return {
            id: response.data.id,
            title: response.data.title,
            author: response.data.author,
            description: normalizeDescription(response.data.description),
            coverImage: response.data.coverImage,
            categories: response.data.categories || [],
            library: response.data.library || null,
            // Map categories array to category string for display
            category: response.data.categories?.[0]?.name || '',
            language: response.data.library?.name || '',
          };
        }
        // If response structure is unexpected, throw error with message
        const errorMessage = response?.message || 'Failed to fetch book';
        throw new Error(errorMessage);
      },
      transformErrorResponse: (response) => {
        // Handle error responses
        return {
          status: response?.status,
          data: {
            message:
              response?.data?.message ||
              response?.data?.error ||
              'An error occurred while fetching the book',
          },
        };
      },
      providesTags: (result, error, id) => [{ type: 'Book', id }],
    }),
  }),
});

export const { useGetBooksListQuery, useGetBookByIdQuery } = bookApi;
