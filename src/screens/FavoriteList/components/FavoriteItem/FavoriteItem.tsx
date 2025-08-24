import { useCallback } from "react";
import { ListRenderItem } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Anime } from "../../../../store/api/types";
import { useAppDispatch } from "../../../../store/hooks";
import { removeFromFavorites } from "../../../../store/slices/favoritesSlice";
import { ItemCard } from "../../../../components/ItemCard/ItemCard";

export const FavoriteItem: ListRenderItem<Anime> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation()

  const removeFavorite = useCallback((anime: Anime) => {
    dispatch(removeFromFavorites(anime));
  }, [dispatch]);

  const onPressItem = useCallback((anime: Anime) => {
    navigate('AnimeDetailScreen', {
      animeId: anime.mal_id,
    })
  }, [navigate])

  return (
    <ItemCard
      onPress={() => onPressItem(item)}
      onPressFavorite={() => removeFavorite(item)}
      imageUri={item.images.jpg.image_url}
      title={item.title}
      score={String(item.score)}
      episodes={String(item.episodes)}
      isFavorite
    />
  )
}