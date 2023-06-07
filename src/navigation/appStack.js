import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './tabNavigation';
import {Transport, Profile, Info, ScanHistory} from '../screens';

const Stack = createStackNavigator();

const appStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transport"
        component={Transport}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={ScanHistory}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default appStack;
