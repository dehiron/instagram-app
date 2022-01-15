import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthNavigation from './AuthNavigation';
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
// import { View, Text } from 'react-native';


export default function App() {
  return (
    <SafeAreaProvider>
      <AuthNavigation />
    </SafeAreaProvider>
  );
}