import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, Button} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";
import validUrl from 'valid-url';
import { auth, db } from "../../firebase";
import { collection, doc,　onSnapshot, serverTimestamp, setDoc } from "firebase/firestore";


const PLACEHOLDER_IMG = "https://jmva.or.jp/wp-content/uploads/2018/07/noimage.png"

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required("A URL is required"),
    caption: Yup.string().max(2200, "Caption has reached the character limit.")
})


const FormikPostUploader = ( props ) => {

    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)

    const getUsername = () => {
        const user = auth.currentUser;

        const unsubscribe = onSnapshot(
            doc(db, "users", user.uid), 
            (snapshot) => {
                setCurrentLoggedInUser({
                    username: snapshot.data().username,
                    profilePicture: snapshot.data().profile_picture
                })
        })

        return unsubscribe;

    }

    useEffect(() => {
        getUsername()
    }, [])


    const uploadPostToFirebase = (imageUrl, caption) => {

        const user = auth.currentUser;

        // サブコレクションにドキュメントを入れる方法
        // addDoc => addDoc(collection(...), {...})
        // setDoc => setDoc(doc(...), {...}, "any id")
        // setDoc => setDoc(doc(collection(...)), {...})
        const unsubscribe = setDoc(
            doc(collection(db, "users", user.uid, "posts")),
            {
                imageUrl: imageUrl,
                username: currentLoggedInUser.username,
                profile_picture: currentLoggedInUser.profilePicture,
                owner_uid: user.uid,
                owner_email: user.email,
                caption: caption,
                createAt: serverTimestamp(),
                likes_by_users: [],
                comments: [],
            }
        ).then(() => {
            props.navigation.goBack();
        })

        return unsubscribe;
    }

    return (
        <Formik
            initialValues={{caption: "", imageUrl: ""}}
            onSubmit={(values) => {
                uploadPostToFirebase(values.imageUrl, values.caption)
            }}
            validationSchema={uploadPostSchema}
            validateOnMount={true} //Shareボタンのエラー対処
        >
        {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => 
            <>
                <View style={{ 
                    margin: 20,
                    justifyContent: "space-between",
                    flexDirection: "row"
                }}
                >
                    <Image source = {{ uri : validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG }} style={{width: 100, height: 100}}/>
                    <View style={{flex: 1, marginLeft: 12}}>
                        <TextInput 
                            placeholder="Write a caption..." 
                            placeholderTextColor="gray" 
                            multiline={true}
                            style={{color: "#fff", fontSize: 20}}
                            onChangeText={handleChange("caption")}
                            onBlur={handleBlur("caption")}
                            value = {values.caption}
                        />
                    </View>
                </View>
                <Divider width={0.2} orientation="vertical" />
                <TextInput
                    onChange={(e) => {setThumbnailUrl(e.nativeEvent.text)}}
                    placeholder="Enter a image Url" 
                    placeholderTextColor="gray" 
                    style={{color: "#fff", fontSize: 18}}
                    onChangeText={handleChange("imageUrl")}
                    onBlur={handleBlur("imageUrl")}
                    value = {values.imageUrl}
                />
                {errors.imageUrl && (
                    <Text style={{ fontSize: 12, color: "red"}}>
                        {errors.imageUrl}
                    </Text>
                )}

                <Button onPress={handleSubmit} title="Share" disabled={!isValid} />

            </>
        }  



        </Formik>

        // <View>
        //     <Text style={{ color: "white"}}>formik</Text>
        // </View>
    )
}

export default FormikPostUploader;