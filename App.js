import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}