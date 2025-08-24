import { useState, useCallback } from 'react';
import { useGetInfiniteTopAnimeQuery } from '../store/api/animeApi';

export const useInfiniteAnime = (limit: number = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
  } = useGetInfiniteTopAnimeQuery(
    { page: currentPage, limit },
    {
      // Don't refetch on mount if we already have data
      refetchOnMountOrArgChange: false,
    }
  );

  const loadMore = useCallback(() => {
    if (data?.pagination?.has_next_page && !isFetching) {
      setCurrentPage(prev => prev + 1);
    }
  }, [data?.pagination?.has_next_page, isFetching]);

  const refresh = useCallback(() => {
    setCurrentPage(1);
    refetch();
  }, [refetch]);

  const hasNextPage = data?.pagination?.has_next_page || false;
  const animeList = data?.data || [];

  return {
    animeList,
    isLoading,
    isFetching,
    error,
    hasNextPage,
    currentPage,
    loadMore,
    refresh,
  };
};
