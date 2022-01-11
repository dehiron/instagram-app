import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { View, Text } from 'react-native';
import SignedInStack from './navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <SignedInStack />
    </SafeAreaProvider>
  );
}