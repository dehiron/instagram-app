import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";

export const bottomTabIcons = [
    {
      name: 'Home',
      active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
      inactive:
        'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
    },
    {
      name: 'Search',
      active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
      inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
    },
    {
      name: 'Reels',
      active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
      inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
    },
    {
      name: 'Shop',
      active:
        'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
      inactive:
        'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
    },
    {
      name: 'Profile',
      active:
        'https://scontent-nrt1-1.xx.fbcdn.net/v/t31.18172-8/17635383_1472108459468225_501961712479371802_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WeYJjrmJdfwAX-6K-LQ&_nc_oc=AQkZkrNxKmi9Q52b85dRs38zgBawmE7HbQNBrhL8vzre9b74oSOrB5tDMDi35Om8uCPoT2EBpNlDwcN_sWAmiDX0&_nc_ht=scontent-nrt1-1.xx&oh=00_AT_GUZEhM-jYS-zOGIixvExnfEqLhtt8GUlPAJ_1TY78Yw&oe=61FFDED7',
      inactive:
        'https://scontent-nrt1-1.xx.fbcdn.net/v/t31.18172-8/17635383_1472108459468225_501961712479371802_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WeYJjrmJdfwAX-6K-LQ&_nc_oc=AQkZkrNxKmi9Q52b85dRs38zgBawmE7HbQNBrhL8vzre9b74oSOrB5tDMDi35Om8uCPoT2EBpNlDwcN_sWAmiDX0&_nc_ht=scontent-nrt1-1.xx&oh=00_AT_GUZEhM-jYS-zOGIixvExnfEqLhtt8GUlPAJ_1TY78Yw&oe=61FFDED7',
    },
]

const BottomTabs = (props) => {

    const [activeTab, setActiveTab] = useState('Home');
    

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation="vertical" />

            <View style={styles.container}>
                {props.icons.map((icon, index) => (
                    <TouchableOpacity key={index} onPress={() => setActiveTab(icon.name)}>
                        <Image 
                            source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} 
                            style={[
                                styles.icon, 
                                icon.name === "Profile" 
                                    ? styles.profilePic
                                    : null,
                                activeTab === "Profile" && icon.name === activeTab 
                                    ? styles.profilePicSelected(activeTab) 
                                    : null
                            ]}
                        />
                    </TouchableOpacity>
                ))}
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        width: "100%",
        bottom: "3%",
        zIndex: 999,
        backgroundColor: "#000"
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 50,
        paddingTop: 10
    },
    icon: {
        width: 30,
        height: 30
    },
    profilePic: {
        borderRadius: 50,
        borderColor: "#fff"
    },
    profilePicSelected: (activeTab = "" ) => ({
        borderWidth: activeTab === "Profile" ? 2 : 0,
    })
})

export default BottomTabs;