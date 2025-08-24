import { FC } from "react";
import { useViewModel } from "../../../../providers/ViewModel";
import { UseAnimeDetailContext } from "../../hooks/useAnimeDetail";
import { Container } from "../../../../components/Container/Container";
import { Text } from "../../../../components/Text/Text";

export const SynopsisSection: FC = () => {
  const { anime } = useViewModel<UseAnimeDetailContext>()

  if (!anime?.synopsis) return null

  return (
    <Container noPadding gap="m">
      <Text variant="h4">Synopsis</Text>
      <Text variant="body">{anime.synopsis}</Text>
    </Container>
  )
}