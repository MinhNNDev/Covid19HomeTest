import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Profile} from '../screens';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return <Tab.Navigator></Tab.Navigator>;
};

export default Tabs;
