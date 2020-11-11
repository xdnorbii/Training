import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {roots} from '.';
import RoomScreen from '../screens/Rooms/RoomScreen';
import AccountScreen from '../screens/account/AccountScreen'
import HomeFigma from '../screens/homeFigma/HomeFigma';
import loginFigma from '../screens/loginFigma/LoginFigma';

const Stack = createStackNavigator();

const defaultNavigationOptions = () => ({
  gestureEnabled: false,
  headerShown: false,
});

const MainStackNavigator = () => (
  <NavigationContainer>

    <Stack.Navigator
      screenOptions={defaultNavigationOptions}
      initialRouteName={roots.accountScreen}>
        <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.loginFigma}
        component={loginFigma}
      />
       <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.homeFigma}
        component={HomeFigma}
      />
       <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.accountScreen}
        component={AccountScreen}
      />
        <Stack.Screen
        screenOptions={defaultNavigationOptions}
        name={roots.roomScreen}
        component={RoomScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
