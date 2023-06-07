/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/client';
import store from './src/redux/store/store';
import {client} from './src/api/graphql';

import Root from './src/navigation';

const App = () => {
  LogBox.ignoreLogs([
    'Remote Debugger',
    'VirtualizedLists should never be nested',
    'Non-serializable values were found in the navigation state',
    'Bottom Tab Navigator',
  ]);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Root />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
