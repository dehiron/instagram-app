import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import SignedInStack from './screens/Navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <SignedInStack />
    </SafeAreaProvider>
  );
}