import BottomMenu from '@/menu/bottom-menu';
import {Family} from '@/screens/family/family';
import {Home} from '@/screens/home/home';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './navigate-ref';

export type RootStackParamList = {
  BottomMenu: {};
  // Home: {};
  // Family: {};
};

const Stack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomMenu" component={BottomMenu} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;
