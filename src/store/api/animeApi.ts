import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Anime, AnimeDetailRequest, AnimeListResponse } from './types';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.jikan.moe/v4/',
  }),
  tagTypes: ['Anime'],
  endpoints: (builder) => ({
    // Get top anime with infinite scrolling
    getInfiniteTopAnime: builder.query<BaseResponse<AnimeListResponse>, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 20 } = {}) => `top/anime?page=${page}&limit=${limit}`,
      serializeQueryArgs: ({ queryArgs }) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { page, ...rest } = queryArgs;
        return rest; // Only serialize limit, ignore page for caching
      },
      merge: (currentCache, newItems) => {
        if (newItems.pagination?.current_page === 1) {
          // First page - replace cache
          return newItems;
        }
        // Subsequent pages - merge with existing data
        return {
          ...newItems,
          data: [...(currentCache?.data || []), ...newItems.data],
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
      providesTags: ['Anime'],
    }),
    // Get anime by ID
    getAnimeById: builder.query<BaseResponse<Anime>, AnimeDetailRequest>({
      query: (body) => `anime/${body.animeId}`,
      providesTags: (result, error, body) => (
        [{ type: 'Anime', id: body.animeId}]
      ),
    }),
  }),
});

export const {
  useGetInfiniteTopAnimeQuery,
  useGetAnimeByIdQuery,
} = animeApi;
