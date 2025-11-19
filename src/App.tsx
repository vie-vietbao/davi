import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import RootNavigator from './navigation/root-navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {store} from '@/service/store';

enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
