import { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import Animated from 'react-native-reanimated';
import { ViewModelProvider } from '../../providers/ViewModel';
import { Text } from "../../components/Text/Text";
import { Container } from "../../components/Container/Container";
import { HeaderImage } from './components/HeaderImage/HeaderImage';
import { TitleSection } from './components/TitleSection/TitleSection';
import { StatsSection } from './components/StatsSection/StatsSection';
import { FavButton } from './components/FavButton/FavButton';
import { GenresSection } from './components/GenresSection/GenresSection';
import { SynopsisSection } from './components/SynopsisSection/SynopsisSection';
import { FloatingBackButton } from './components/FloatingBackButton/FloatingBackButton';
import { NavHeader } from './components/NavHeader/NavHeader';
import { Props } from './types';
import { styles } from './styles';
import { useAnimeDetail } from './hooks/useAnimeDetail';

export const AnimeDetailScreen: FC<Props> = (props) => {
  const hook = useAnimeDetail(props)
  const {
    anime,
    error,
    isLoading,
    animation: {
      scrollHandler,
      contentStyle,
    },
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
      <Container noPadding background="warning">
        <NavHeader />
        <FloatingBackButton />
        <Animated.ScrollView 
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <HeaderImage />
          <Animated.View style={[contentStyle, styles.content]}>
            <Container
              gap="l"
              background="white"
              style={styles.contentSection}
            >
              <TitleSection />
              <StatsSection />
              <FavButton />
              <GenresSection />
              <SynopsisSection />
            </Container>
          </Animated.View>
        </Animated.ScrollView>
      </Container>
    </ViewModelProvider>
  );
};
