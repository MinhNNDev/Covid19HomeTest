import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Profile, Info} from '../screens';

const Stack = createStackNavigator();

const appStack = () => {
  return (
    <Stack.Navigator initialRouteName="Info">
      <Stack.Screen
        name="Home"
        component={Home}
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
    </Stack.Navigator>
  );
};

export default appStack;
