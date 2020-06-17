import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Splash, Home} from '../screens';

const stack = createStackNavigator();
const {Screen, Navigator} = stack;

export const Navigation = () => (
  <NavigationContainer>
    <Navigator screenOptions={{header: () => null}}>
      <Screen name="Splash" component={Splash} />
      <Screen name="Home" component={Home} />
    </Navigator>
  </NavigationContainer>
);
