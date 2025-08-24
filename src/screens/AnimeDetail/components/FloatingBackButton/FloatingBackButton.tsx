import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Animated from "react-native-reanimated";
import { useViewModel } from "../../../../providers/ViewModel";
import { UseAnimeDetailContext } from "../../hooks/useAnimeDetail";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const FloatingBackButton: FC = () => {
  const { goBack } = useNavigation()
  const {
    animation: { floatingBackButtonStyle }
  } = useViewModel<UseAnimeDetailContext>()
  const insets = useSafeAreaInsets()

  return (
    <Animated.View
      style={[
        styles.floatingBackButton,
        { top: insets.top + 16 },
        floatingBackButtonStyle,
      ]}
    >
      <TouchableOpacity
        onPress={goBack}
        style={styles.container}
        activeOpacity={0.8}
      >
        <Image
          source={require('../../../../assets/icons/arrow_left_black.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </Animated.View>
  )
}