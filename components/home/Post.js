import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { FontAwesome } from '@expo/vector-icons';
import { auth, db } from "../../firebase";
import { arrayRemove, arrayUnion, collection, doc, FieldValue, getDoc, updateDoc } from "firebase/firestore";

const Post = (props) => {

    const handleLike = () => {

        const currentLikeStatus = !props.post.likes_by_users.includes(
            auth.currentUser.email
        )

        const update = updateDoc(
            doc(db, "users", props.post.owner_uid, "posts", props.post.id ),
            {
                likes_by_users: currentLikeStatus 
                    ? arrayUnion(auth.currentUser.email)
                    : arrayRemove(auth.currentUser.email)
            }
        ).then(() => {
            console.log("Success")
        }).catch((error) => {
            console.log("Error: ", error)
        })


        return update;

    }

    

    return(
        <View style={{ marginBottom: 30 }} >
            <Divider width={1} orientation="vertical" />
            <PostHeader post={props.post} />
            <PostImage post={props.post} />
            <View style={{marginHorizontal: 15, marginTop:10}}>
                <PostFooter post={props.post} handleLike={handleLike}/>
                <Likes post={props.post} />
                <Caption post={props.post} />
                <CommentSection post={props.post} />
                <Comments post={props.post} />
            </View>
            
        </View>
    )
}

const PostHeader = (props) => {
    return (
        <View 
            style={{
                flexDirection: "row", 
                justifyContent: "space-between", 
                margin:5, 
                alignItems:"center"}}
        >
            <View style={{ flexDirection:"row", alignItems:"center" }}>
                <Image source={{ uri: props.post.profile_picture }} style={styles.story}/>
                <Text style={{ color: "white", marginLeft: 5}}>
                    {props.post.username}
                </Text>
            </View>

            <View>
                <Text style={{ color: "white"}}>
                    ...
                </Text>
            </View>
        </View>
    )
}


const PostImage = (props) => {
    return (
        <View 
            style={{
                width: "100%",
                height: 450
            }}
        >
            <Image
                source={{uri: props.post.imageUrl}}
                style={{ height: "100%", resizeMode:"cover" }}
            />
        </View>
    )
}

const PostFooter = (props) => {
    return (
        <View style={{flexDirection: "row"}}>
            <View style={styles.leftFooterionsContainer}>
                <TouchableOpacity
                    onPress={() => props.handleLike(props.post)}
                >
                    <FontAwesome 
                        name= { props.post.likes_by_users.includes(auth.currentUser.email) ? "heart" : "heart-o"}
                        size= {28} 
                        color= { props.post.likes_by_users.includes(auth.currentUser.email) ? "red" : "white"}
                        tyle= {[styles.footerIcon]} 
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="comment-o" size={28} color="white" style={styles.footerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="send-o" size={28} color="white" style={[styles.shareIcon, styles.footerIcon,]} />
                </TouchableOpacity>
            </View>

            <View style={{ flex:1, alignItems:"flex-end"}}>
                <TouchableOpacity> 
                    <FontAwesome name="bookmark-o" size={28} color="white" style={styles.footerIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Likes = (props) => {
    return (
        <View style={{flexDirection:"row", marginTop:4}}>
            <Text style={{color:"white"}}>
                {props.post.likes_by_users.length.toLocaleString("en")} likes
            </Text>
        </View>
    )
}

const Caption = (props) => {
    return (
        <View style={{marginTop: 5}}>
            <Text style={{color:"white"}}>
                <Text style={{fontWeight: "600"}}>{props.post.username}</Text>
                <Text>{" "}{props.post.caption}</Text>
            </Text>
        </View>
    )
}

const CommentSection = (props) => {
    return (
        <View style={{marginTop: 5}}>
            { !! props.post.comments.length && (
                <Text style={{color:"gray"}}>
                    View{props.post.comments.length > 1 ? " all" : ""} {props.post.comments.length}{" "}
                    {props.post.comments.length > 1 ? "comments" : "comment"} 
                </Text>
            )}
        </View>
    )
}

const Comments = (props) => {
    return (
        <>
            {props.post.comments.map((comment, index) => (
                <View key={index} style={{flexDirection:"row", marginTop:5}}>
                    <Text style={{color: "white"}}>
                        <Text style={{fontWeight: "600"}}>
                            {comment.user}
                        </Text>
                        {" "}{comment.comment}
                    </Text>
                </View>
            ))}
        </>
    )
}

const styles = StyleSheet.create({
    story: {
        width:35,
        height:35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: "#ff8501"
    },
    footerIcon: {
        width: 33,
        height: 33
    },
    leftFooterionsContainer: {
        flexDirection: "row",
        width: "32%",
        justifyContent: "space-between"
    },
    shareIcon: {
        transform:[{rotate: "10deg"}]
    },
})

export default Post;