import React from "react";
import { StyleSheet, View, Image } from "react-native";
import SignupForm from "../components/signupScreen/SignupForm";

const INSTAGRAM_LOGO = "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-256.png"

const SignupScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={{uri : INSTAGRAM_LOGO, height: 100, width: 100}} />
            </View>
            <SignupForm navigation={props.navigation}/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 60,
    }
})

export default SignupScreen;