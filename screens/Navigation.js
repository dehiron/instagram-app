import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false
}

const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName = "HomeScreen" 
                screenOptions={screenOptions}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SignedInStack;