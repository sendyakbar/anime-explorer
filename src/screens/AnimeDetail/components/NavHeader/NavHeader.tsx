import { FC } from "react";
import Animated from "react-native-reanimated";
import { Text } from "../../../../components/Text/Text";
import { Container } from "../../../../components/Container/Container";
import { useViewModel } from "../../../../providers/ViewModel";
import { UseAnimeDetailContext } from "../../hooks/useAnimeDetail";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const NavHeader: FC = () => {
  const {
    anime,
    animation: { navigationHeaderStyle }
  } = useViewModel<UseAnimeDetailContext>();
  const insets = useSafeAreaInsets()
  const { goBack } = useNavigation()

  return (
    <Animated.View style={[
      styles.navigationHeader,
      { paddingTop: insets.top },
      navigationHeaderStyle,
    ]}>
      <TouchableOpacity
        onPress={goBack}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Image
          source={require('../../../../assets/icons/arrow_left_black.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Container noPadding fill>
        <Text variant="h4" textAlign="center" numberOfLines={1}>
          {anime?.title || 'Anime Details'}
        </Text>
      </Container>
      <Container style={styles.navPlaceholder} />
    </Animated.View>
  );
};
