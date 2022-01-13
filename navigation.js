import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import NewPostScreen from "./screens/NewPostScreen";
import SignupScreen from "./screens/SignupScreen";

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false
}

const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName = "LoginScreen" 
                screenOptions={screenOptions}
            >
                {/* <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const SignedOutStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName = "LoginScreen" 
                screenOptions={screenOptions}
            >
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />                
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export { SignedInStack, SignedOutStack };