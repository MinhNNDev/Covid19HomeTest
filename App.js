/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
// import store from './src/redux/store/store';

import AppStack from './src/navigation/appStack';
import AuthStack from './src/navigation/authStack';

const App = () => {
  return (
    // <StoreProvider store={store}>
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
    // </StoreProvider>
  );
};

export default App;
