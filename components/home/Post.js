import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

const Post = (props) => {
    return(
        <View style={{ marginBottom: 30 }} >
            <Divider width={1} orientation="vertical" />
            <PostHeader post={props.post} />
        </View>
    )
}

const PostHeader = (props) => (
    <View 
        style={{
            flexDirection: "row", 
            justifyContent: "space-between", 
            margin:5, 
            alignItems:"center"}}
    >
        <View style={{ flexDirection:"row", alignItems:"center" }}>
            <Image source={{ uri: props.post.profile_picture }} style={styles.story}/>
            <Text style={{ color: "white", marginLeft: 5, fontWeight: 700 }}>
                {props.post.user}
            </Text>
        </View>

        <View>
            <Text style={{ color: "white", fontWeight:"900" }}>
                ...
            </Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    story: {
        width:35,
        height:35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: "#ff8501"
    }
})

export default Post;