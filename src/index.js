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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CatelogueStack = () => {
  return (
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
  );
};

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="小程序" component={CatelogueStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
