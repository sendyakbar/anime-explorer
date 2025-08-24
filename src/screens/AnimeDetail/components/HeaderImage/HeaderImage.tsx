import { FC } from "react";
import { Image } from "react-native";
import { useViewModel } from "../../../../providers/ViewModel";
import { UseAnimeDetailContext } from "../../hooks/useAnimeDetail";
import { styles } from "./styles";

export const HeaderImage: FC = () => {
  const { anime } = useViewModel<UseAnimeDetailContext>();

  return (
    <Image
      source={{ uri: anime?.images.jpg.large_image_url }}
      style={styles.image}
    />
  );
};
