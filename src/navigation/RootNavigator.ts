import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnimeDetailScreen } from "../screens/AnimeDetail/AnimeDetailScreen";
import { MainBottomTabNavigator } from "./MainBottomTabNavigator";

export const RootNavigator = createNativeStackNavigator({
  screens: {
    MainBottomTabNavigator,
    AnimeDetailScreen,
  }
})