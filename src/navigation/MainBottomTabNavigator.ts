import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AnimeListScreen } from "../screens/AnimeList/AnimeListScreen";
import { FavoriteListScreen } from "../screens/FavoriteList/FavoriteListScreen";
import { StaticParamList } from "@react-navigation/native";

export const MainBottomTabNavigator = createBottomTabNavigator({
  screens: {
    AnimeListScreen,
    FavoriteListScreen,
  }
})

export type MainBottomTabParamList = StaticParamList<typeof MainBottomTabNavigator>
