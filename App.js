import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <HomeScreen /> */}
      <NewPostScreen />
    </SafeAreaProvider>
  );
}