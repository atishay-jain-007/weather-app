import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreenStack from "./HomeScreenStack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="BottomTabs" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
      <Stack.Screen name="HomeStack" component={HomeScreenStack} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppNavigator;
