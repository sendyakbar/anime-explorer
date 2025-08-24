import { FC } from 'react';
import { Container } from '../../components/Container/Container';
import { ActivityIndicator } from 'react-native';

export const SplashScreen: FC = () => (
  <Container fill alignment="center" justify="center">
    <ActivityIndicator size="large" />
  </Container>
);
