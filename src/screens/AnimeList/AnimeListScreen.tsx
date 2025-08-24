import { FC } from "react";
import { Text } from "../../components/Text/Text";
import { Container } from "../../components/Container/Container";

export const AnimeListScreen: FC = () => {
  return (
    <Container fill direction="row" alignment="center" justify="space-between">
      <Text variant="h3" ink="success">Hello</Text>
      <Text variant="h3" ink="success">Hello</Text>
    </Container>
  )
}