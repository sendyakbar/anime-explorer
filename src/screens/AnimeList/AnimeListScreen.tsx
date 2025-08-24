import React, { FC, useCallback } from "react";
import { ActivityIndicator } from "react-native";
import { useInfiniteAnime } from "./hooks/useInfiniteAnime";
import { Text } from "../../components/Text/Text";
import { Container } from "../../components/Container/Container";
import { LazyList } from "../../components/LazyList/LazyList";
import { Props } from "./types";
import { TopAnimeItem } from "./components/TopAnimeItem/TopAnimeItem";

export const AnimeListScreen: FC<Props> = () => {
  const {
    animeList,
    isLoading,
    isFetching,
    error,
    hasNextPage,
    loadMore,
    refresh,
  } = useInfiniteAnime(10);

  const handleEndReached = () => {
    if (hasNextPage && !isFetching) {
      loadMore();
    }
  };

  const renderFooter = useCallback(() => {
    if (!isFetching) return null;
    return (
      <Container direction="row" justify="center" alignment="center" gap="l">
        <ActivityIndicator size="small" />
        <Text ink="secondary">Loading more anime...</Text>
      </Container>
    );
  }, [isFetching]);

  if (isLoading) {
    return (
      <Container fill alignment="center" justify="center" gap="l">
        <ActivityIndicator size="large" />
        <Text ink="secondary">Loading top anime...</Text>
      </Container>
    );
  }

  if (error) {
    return (
      <Container fill direction="row" alignment="center" justify="center">
        <Text variant="h3" ink="error">Error loading anime</Text>
      </Container>
    );
  }

  return (
    <LazyList
      data={animeList}
      renderItem={(anime) => <TopAnimeItem {...anime} />}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
      onRefresh={refresh}
      refreshing={isLoading}
    />
  );
};
