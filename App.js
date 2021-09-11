/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {LogBox} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
// import store from './src/redux/store/store';
import {client} from './src/api/graphql';

import AppStack from './src/navigation/appStack';
import AuthStack from './src/navigation/authStack';
import Tabs from './src/navigation/tabNavigation';

const App = () => {
  LogBox.ignoreLogs([
    'Remote Debugger',
    'VirtualizedLists should never be nested',
    'Non-serializable values were found in the navigation state',
    'Bottom Tab Navigator',
  ]);

  const [isLogin, setIsLogin] = useState(false);
  return (
    <ApolloProvider client={client}>
      {/* <StoreProvider store={store}> */}
      <NavigationContainer>
        {isLogin ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
      {/* </StoreProvider> */}
    </ApolloProvider>
  );
};

export default App;
