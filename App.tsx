import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/screens/Splash';
import { useEffect, useState } from 'react';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import AppNavigator from './src/Navigation/AppNavigator';
// import * as SQLite from 'expo-sqlite';
import HomeScreenContextProvider from './context/HomeScreenContext';
export default function App() {
  const [showSplash,setShowSplash]=useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setShowSplash(false)
    }, 3000);
  },[])
  return (
    // <>
    // <Text>Hello</Text>
    // </>
    <HomeScreenContextProvider>
      <AppNavigator></AppNavigator>
    {/* <Text>hallo</Text> */}
    </HomeScreenContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
