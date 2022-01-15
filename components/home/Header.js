import { signOut } from "firebase/auth";
import React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { auth } from "../../firebase";


const handleSignout = async () => {
    try {
        await signOut(auth).then(
            console.log("Signedout successgully")
        )
    } catch (error) {
        console.log(error)
    }
}

const Header = (props) => {
    return(
        <View style = {styles.container}>
            <TouchableOpacity onPress={handleSignout}>
                <Image 
                    style={styles.logo} 
                    source={require("../../assets/header-logo.png")}
                />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => props.navigation.push("NewPostScreen")}>
                    <Image
                        style={styles.icon}
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image
                        style={styles.icon}
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
                        }}
                    />
                </TouchableOpacity>
            </View>     
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20,
    },
    iconsContainer:{
        flexDirection:'row' //これがあることでデフォルトの縦並びを横並びに変えられる
    },
    logo: {
        width: 100,
        height:50,
        resizeMode: "contain",
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: "contain"

    },
    unreadBadge: {
        backgroundColor: "#FF3250",
        position: "absolute",
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
    },
    unreadBadgeText: {
        color: "white",
        fontWeight: "600"
    }
})

export default Header;