/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import AppStack from './appStack';
import AuthStack from './authStack';

const Root = props => {
  const {auth} = useSelector(state => state);
  console.log(auth);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <NavigationContainer>
      {auth.tokenAccount !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Root;
