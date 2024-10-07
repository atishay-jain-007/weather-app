import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { BACKGROUNDCOLOR, LIGHTNING } from "../../constants/constants";
import Feather from '@expo/vector-icons/Feather';
// import 
import FontAwesome from '@expo/vector-icons/FontAwesome';
import HourlyMain from "../screens/HourlyScreen/HourlyMain";
import AIQ from "../screens/AIQ/AIQ";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white", 
        tabBarInactiveTintColor: "#79797b", 
        // tabBarActiveBackgroundColor: LIGHTNING, 
        
        tabBarStyle: {
          backgroundColor: BACKGROUNDCOLOR,
          height: 60,
          marginTop: -4,
          borderTopWidth: 0,   
          shadowOpacity: 0,    
        },
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen
        name={"Home5"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" size={24} color={color} />; 
          },
        }}
      />
      <Tab.Screen
        name={"Hourly"}
        component={HourlyMain}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="search" size={24} color={color} />; 
          },
        }}
      />
      <Tab.Screen
        name={"AIQ"}
        component={AIQ}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" size={24} color={color} />; 
          },
        }}
      />
      <Tab.Screen
        name={"Home2"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" size={24} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
