import { FC } from "react";
import { useViewModel } from "../../../../providers/ViewModel";
import { UseAnimeDetailContext } from "../../hooks/useAnimeDetail";
import { Container } from "../../../../components/Container/Container";
import { Text } from "../../../../components/Text/Text";
import { Tag } from "../../../../components/Tag/Tag";

export const GenresSection: FC = () => {
  const { anime } = useViewModel<UseAnimeDetailContext>()

  if (!anime?.genres) return null
  if (!anime.genres.length) return null

  return (
    <Container noPadding gap="m">
      <Text variant="h4">Genres</Text>
      <Container noPadding direction="row" wrap="wrap" gap="s">
        {anime.genres.map((genre) => (
          <Tag key={genre.name} title={genre.name} />
        ))}
      </Container>
    </Container>
  );
};
