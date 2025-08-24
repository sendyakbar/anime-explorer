import { FC } from 'react';
import {
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { ViewModelProvider } from '../../providers/ViewModel';
import { Text } from "../../components/Text/Text";
import { Container } from "../../components/Container/Container";
import { HeaderImage } from './components/HeaderImage/HeaderImage';
import { TitleSection } from './components/TitleSection/TitleSection';
import { StatsSection } from './components/StatsSection/StatsSection';
import { FavButton } from './components/FavButton/FavButton';
import { GenresSection } from './components/GenresSection/GenresSection';
import { SynopsisSection } from './components/SynopsisSection/SynopsisSection';
import { Props } from './types';
import { styles } from './styles';
import { useAnimeDetail } from './hooks/useAnimeDetail';

export const AnimeDetailScreen: FC<Props> = (props) => {
  const hook = useAnimeDetail(props)
  const {
    anime,
    error,
    isLoading,
  } = hook

  if (isLoading) {
    return (
      <Container fill alignment="center" justify="center" gap="l">
        <ActivityIndicator size="large" />
        <Text variant="subtitle" ink="disabled">Loading anime details...</Text>
      </Container>
    );
  }

  if (error || !anime) {
    return (
      <Container fill direction="row" alignment="center" justify="center">
        <Text variant="h3">Error loading anime details</Text>
      </Container>
    );
  }

  return (
    <ViewModelProvider {...hook}>
      <ScrollView style={styles.container}>
        <HeaderImage />
        <Container gap="l">
          <TitleSection />
          <StatsSection />
          <FavButton />
          <GenresSection />
          <SynopsisSection />
        </Container>
      </ScrollView>
    </ViewModelProvider>
  );
};
