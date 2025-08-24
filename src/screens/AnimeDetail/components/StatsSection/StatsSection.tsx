import { FC } from "react";
import { Card } from "../../../../components/Card/Card";
import { Container } from "../../../../components/Container/Container";
import { Text } from "../../../../components/Text/Text";
import { useViewModel } from "../../../../providers/ViewModel";
import { UseAnimeDetailContext } from "../../hooks/useAnimeDetail";

export const StatsSection: FC = () => {
  const { anime } = useViewModel<UseAnimeDetailContext>();

  return (
    <Card background="lightGray" pv="s" ph="l" shadow={undefined}>
      <Container
        noPadding
        direction="row"
        alignment="center"
        justify="space-between"
      >
        <Container noPadding alignment="center">
          <Text variant="label">Score</Text>
          <Text variant="subtitle">{anime?.score || 'N/A'}</Text>
        </Container>
        <Container noPadding alignment="center">
          <Text variant="label">Episodes</Text>
          <Text variant="subtitle">{anime?.episodes || 'N/A'}</Text>
        </Container>
        <Container noPadding alignment="center">
          <Text variant="label">Status</Text>
          <Text variant="subtitle">{anime?.status}</Text>
        </Container>
        <Container noPadding alignment="center">
          <Text variant="label">Year</Text>
          <Text variant="subtitle">{anime?.year || 'N/A'}</Text>
        </Container>
      </Container>
    </Card>
  );
};
