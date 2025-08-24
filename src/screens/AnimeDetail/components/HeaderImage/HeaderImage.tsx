import { FC } from "react";
import { Image } from "react-native";
import { useViewModel } from "../../../../providers/ViewModel";
import { UseAnimeDetailContext } from "../../hooks/useAnimeDetail";
import { styles } from "./styles";
import Animated from "react-native-reanimated";

export const HeaderImage: FC = () => {
  const {
    anime,
    animation: {
      headerImageStyle,
      headerOverlayStyle,
    }
  } = useViewModel<UseAnimeDetailContext>();

  return (
    <Animated.View style={[styles.headerImageContainer, headerImageStyle]}>
      <Image
        source={{ uri: anime?.images.jpg.large_image_url }}
        style={styles.image}
      />
      <Animated.View style={[styles.headerOverlay, headerOverlayStyle]} />
    </Animated.View>
  );
};
