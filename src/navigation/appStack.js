import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './tabNavigation';
import {Home, Profile, Category, Phone, ScanHistory} from '../screens';

const Stack = createStackNavigator();

const appStack = () => {
  return (
    <Stack.Navigator initialRouteName="Info">
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
	@@ -28,6 +29,11 @@ const appStack = () => {
        name="Phone"
        component={Phone}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="History"
        component={ScanHistory}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default appStack;
