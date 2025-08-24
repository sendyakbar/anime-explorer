import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AnimeListScreen } from "../screens/AnimeList/AnimeListScreen";
import { FavoriteListScreen } from "../screens/FavoriteList/FavoriteListScreen";
import { StaticParamList } from "@react-navigation/native";

export const MainBottomTabNavigator = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    AnimeListScreen: {
      screen: AnimeListScreen,
      options: {
        title: 'Top Anime',
      },
    },
    FavoriteListScreen: {
      screen: FavoriteListScreen,
      options: {
        title: 'My Favorite',
      },
    },
  }
})

export type MainBottomTabParamList = StaticParamList<typeof MainBottomTabNavigator>
