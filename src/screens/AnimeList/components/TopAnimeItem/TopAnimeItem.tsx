import { useCallback } from "react";
import { ListRenderItem } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Anime } from "../../../../store/api/types";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { addToFavorites, removeFromFavorites } from "../../../../store/slices/favoritesSlice";
import { ItemCard } from "../../../../components/ItemCard/ItemCard";

export const TopAnimeItem: ListRenderItem<Anime> = ({ item }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites);
  const { navigate } = useNavigation();

  const isFavorite = useCallback((animeId: number) => {
    return favorites.some(fav => fav.mal_id === animeId);
  }, [favorites]);

  const toggleFavorite = useCallback((anime: Anime) => {
    if (isFavorite(anime.mal_id)) {
      dispatch(removeFromFavorites(anime));
    } else {
      dispatch(addToFavorites(anime));
    }
  }, [isFavorite, dispatch]);

  const handleAnimePress = useCallback((anime: Anime) => {
    navigate('AnimeDetailScreen', { animeId: anime.mal_id });
  }, [navigate]);

  return (
    <ItemCard
      onPress={() => handleAnimePress(item)}
      onPressFavorite={() => toggleFavorite(item)}
      imageUri={item.images.jpg.image_url}
      title={item.title}
      score={String(item.score)}
      episodes={String(item.episodes)}
      isFavorite={isFavorite(item.mal_id)}
    />
  );
};