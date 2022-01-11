import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FormikPostUploader from "./FormikPostUploader";



const AddNewPost = (props) => {
    return (
        <View style={styles.container}>
            <Header navigation={props.navigation}/>
            <FormikPostUploader navigation={props.navigation}/>
        </View>
    )
}


const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image 
                    source={{ uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png"}}
                    style={{ width:30, height:30 }}
                />                
            </TouchableOpacity>
            <Text style={styles.headerText} >NEW POST</Text>
            <Text></Text> 
            <Text></Text> 
            {/* 最後の1行を入れることで感覚調整してる */}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginHorizontal: 10
    },
    headerContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 20,
        marginLeft: 40
    }

})

export default AddNewPost;
