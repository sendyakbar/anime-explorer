import { RootNavigator } from "../navigation/RootNavigator";

type RootStackParamList = StaticParamList<typeof RootNavigator>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}