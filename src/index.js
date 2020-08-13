import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// import {Text} from 'react-native';

import Home from './pages/home';
import Webview from './pages/webview';
import Shoot from './pages/shoots';
import Miniprogram from './pages/mini-loader';

const Stack = createStackNavigator();

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              // headerRight: () => <Text>xx</Text>,
            }}
          />
          <Stack.Screen
            name="Web"
            component={Webview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Shoot"
            component={Shoot}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Miniprogram"
            component={Miniprogram}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
