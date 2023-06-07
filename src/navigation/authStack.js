import React from 'react';
import {Auth, Phone, Info, AuthOTP} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const authStack = () => {
  return (
    <Stack.Navigator initialRouteName="Phone">
      <Stack.Screen
        name="Phone"
        component={Phone}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default authStack;
