import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AnimeListScreen } from "../screens/AnimeList/AnimeListScreen";
import { FavoriteListScreen } from "../screens/FavoriteList/FavoriteListScreen";

export const MainBottomTabNavigator = createBottomTabNavigator({
  screens: {
    AnimeListScreen,
    FavoriteListScreen,
  }
})