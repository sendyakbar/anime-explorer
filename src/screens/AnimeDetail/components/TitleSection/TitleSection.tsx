import { FC } from "react";
import { Container } from "../../../../components/Container/Container";
import { Text } from "../../../../components/Text/Text";
import { useViewModel } from "../../../../providers/ViewModel";
import { UseAnimeDetailContext } from "../../hooks/useAnimeDetail";

export const TitleSection: FC = () => {
  const { anime } = useViewModel<UseAnimeDetailContext>();
  
  return (
    <Container noPadding alignment="center" gap="xs">
      <Text variant="h3" textAlign="center">
        {anime?.title}
      </Text>
      {anime?.title_english && anime?.title_english !== anime?.title && (
        <Text variant="subtitle" ink="secondary" textAlign="center">
          {anime?.title_english}
        </Text>
      )}
      {anime?.title_japanese && (
        <Text variant="body" ink="secondary" textAlign="center">
          {anime?.title_japanese}
        </Text>
      )}
    </Container>
  );
};
