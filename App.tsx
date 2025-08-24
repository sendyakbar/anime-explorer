import { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createStaticNavigation } from '@react-navigation/native';

import { store, persistor } from './src/store/store';
import { RootNavigator } from './src/navigation/RootNavigator';
import { SplashScreen } from './src/screens/Splash/SplashScreen';

const Navigation = createStaticNavigation(RootNavigator);

export const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={<SplashScreen />}
      >
        <Navigation />
      </PersistGate>
    </Provider>
  );
};