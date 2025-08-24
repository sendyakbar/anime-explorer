import { FC, useCallback } from 'react';
import { Text } from "../../components/Text/Text";
import { Container } from "../../components/Container/Container";
import { LazyList } from '../../components/LazyList/LazyList';
import { useAppSelector } from "../../store/hooks";
import { FavoriteItem } from './components/FavoriteItem/FavoriteItem';
import { Props } from './types';

export const FavoriteListScreen: FC<Props> = () => {
  const favorites = useAppSelector(state => state.favorites);

  const renderEmpty = useCallback(() => (
    <Container fill direction="row" alignment="center" justify="center">
      <Text variant="h3">No favorites yet!</Text>
    </Container>
  ), [])

  return (
    <LazyList
      data={favorites}
      renderItem={(fav) => <FavoriteItem {...fav} />}
      ListEmptyComponent={renderEmpty}
    />
  );
};
