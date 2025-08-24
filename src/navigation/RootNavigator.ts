import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnimeDetailScreen } from "../screens/AnimeDetail/AnimeDetailScreen";
import { MainBottomTabNavigator } from "./MainBottomTabNavigator";
import { StaticParamList } from "@react-navigation/native";

export const RootNavigator = createNativeStackNavigator({
  screens: {
    MainBottomTabNavigator,
    AnimeDetailScreen,
  }
})

export type RootStackParamList = StaticParamList<typeof RootNavigator>;
