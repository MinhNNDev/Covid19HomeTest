/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import AppStack from './appStack';
import AuthStack from './authStack';

const Root = () => {
  const {auth} = useSelector(state => state);
  console.log('Redux: ', auth);
  return (
    <NavigationContainer>
      {auth.tokenAccount !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Root;
