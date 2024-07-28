import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen1 from '../screens/SplashScreen1';
import SplashScreen2 from '../screens/SplashScreen2';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen1">
      <Stack.Screen name="SplashScreen1" component={SplashScreen1} options={{ headerShown: false }} />
      <Stack.Screen name="SplashScreen2" component={SplashScreen2} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
