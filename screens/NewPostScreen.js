import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = (props) => {
    return (
        <SafeAreaView style={{backgroundColor: "black", flex: 1}}>
            <AddNewPost navigation={props.navigation}/>
        </SafeAreaView>
    )
}

export default NewPostScreen;