import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import HomePage from './screens/authPages/HomePage';
import LoginPage from './screens/authPages/LoginPage';
import SignUppage from './screens/authPages/SignUppage';
import ForgetPassword from './screens/authPages/ForgetPassword';
import OtpPage from './screens/authPages/OtpPage';
import ChangePassword from './screens/authPages/ChangePassword';
import ChatHomePage from './screens/InnerMainPages/ChatHomePage';
import MessageScreen from './screens/InnerMainPages/MessageScreen';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" options={{ headerShown: false }} component={HomePage} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginPage} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUppage} /> */}
        <Stack.Screen name="ChatHome" options={{ headerShown: false }} component={ChatHomePage} />
        <Stack.Screen name="Messages" options={{ headerShown: false }} component={MessageScreen} />
        <Stack.Screen name="ForgetPassword" options={{ headerShown: false }} component={ForgetPassword} />
        <Stack.Screen name="OTP" options={{ headerShown: false }} component={OtpPage} />
        <Stack.Screen name="PasswordChange" options={{ headerShown: false }} component={ChangePassword} />

      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}


