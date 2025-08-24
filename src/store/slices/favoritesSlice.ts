import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Anime } from '../api/types';

type FavoritesState = Anime[]

const initialState: FavoritesState = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Anime>) => {
      const anime = action.payload;
      const isAlreadyFavorite = state.some(fav => fav.mal_id === anime.mal_id);
      if (!isAlreadyFavorite) {
        state.push(anime);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<Anime>) => {
      const anime = action.payload;
      return state.filter(fav => fav.mal_id !== anime.mal_id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
