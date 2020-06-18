import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Splash, Home} from '../screens';

const stack = createStackNavigator();
const {Screen, Navigator} = stack;

const config = {
  duration: 10,
};

export const Navigation = () => (
  <NavigationContainer>
    <Navigator screenOptions={{header: () => null}}>
      <Screen
        name="Splash"
        component={Splash}
        options={{
          cardStyleInterpolator: ({current}) => ({
            cardStyle: {
              opacity: current.progress,
            },
          }),
          transitionSpec: {
            open: {
              animation: 'timing',
              config,
            },
            close: {
              animation: 'timing',
              config,
            },
          },
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          cardStyleInterpolator: ({current}) => ({
            cardStyle: {
              opacity: current.progress,
            },
          }),
          transitionSpec: {
            open: {
              animation: 'timing',
              config,
            },
            close: {
              animation: 'timing',
              config,
            },
          },
        }}
      />
    </Navigator>
  </NavigationContainer>
);
