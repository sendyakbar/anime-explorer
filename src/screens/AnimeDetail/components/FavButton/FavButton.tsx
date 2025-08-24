import { FC, useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { useViewModel } from "../../../../providers/ViewModel";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { addToFavorites, removeFromFavorites } from "../../../../store/slices/favoritesSlice";
import { Text } from "../../../../components/Text/Text";
import { UseAnimeDetailContext } from "../../hooks/useAnimeDetail";
import { styles } from "./styles";

export const FavButton: FC = () => {
  const { anime } = useViewModel<UseAnimeDetailContext>()
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites);
  const isFavorite = anime ? favorites.some(fav => fav.mal_id === anime.mal_id) : false;

  const toggleFavorite = useCallback(() => {
    if (anime) {
      if (isFavorite) {
        dispatch(removeFromFavorites(anime));
      } else {
        dispatch(addToFavorites(anime));
      }
    }
  }, [dispatch, anime, isFavorite]);

  return (
    <TouchableOpacity
      style={[styles.favoriteButton, isFavorite && styles.favoriteButtonActive]}
      onPress={toggleFavorite}
    >
      <Text variant="subtitle" textAlign="center">
        {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
      </Text>
    </TouchableOpacity>
  );
};