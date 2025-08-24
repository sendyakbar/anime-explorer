import { FC } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Card } from "../Card/Card";
import { Container } from "../Container/Container";
import { Text } from "../Text/Text";
import { Spacer } from "../Spacer/Spacer";
import { ItemCardProps } from "./types";
import { styles } from "./styles";

export const ItemCard: FC<ItemCardProps> = (props) => {
  const {
    onPress,
    onPressFavorite,
    imageUri,
    title,
    score,
    episodes,
    isFavorite,
  } = props;

  return (
    <Card onPress={onPress} borderRadius="l" shadow="card">
      <Container direction="row" noPadding gap="l">
        <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
        <Container fill noPadding justify="space-between">
          <Container noPadding>
            <Text variant="h4">{title}</Text>
            <Spacer vertical space="s" />
            <Text variant="body">Score: {score || 'N/A'}</Text>
            <Text variant="body">Episodes: {episodes || 'N/A'}</Text>
          </Container>
          <TouchableOpacity
            onPress={onPressFavorite}
            style={[
              styles.favoriteButton,
              isFavorite
                ? styles.favoriteButtonActive
                : null,
              ]}
          >
            <Text variant="caption">
              {isFavorite ? '❤️ Remove' : '🤍 Add to Favorites'}
            </Text>
          </TouchableOpacity>
        </Container>
      </Container>
    </Card>
  );
};
