import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { animeApi } from './api/animeApi';
import { favoritesSlice } from './slices/favoritesSlice';

// Persist config for favorites
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorites'], // Only persist favorites slice
};

// Combine reducers
const rootReducer = combineReducers({
  favorites: favoritesSlice.reducer,
  [animeApi.reducerPath]: animeApi.reducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
          'persist/PURGE',
          'persist/FLUSH',
          'persist/PAUSE',
        ],
      },
    }).concat(animeApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
