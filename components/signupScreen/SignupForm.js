import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup"
import Validator from "email-validator"


const SignupForm = (props) => {

    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required("An email is required"),
        username: Yup.string().required().min(2, "A username is required"),
        password: Yup.string()
            .required()
            .min(6, "Your password has to have at least 8 characters")
    })

    return(
        <View style={styles.wrapper}>
            <Formik
                initialValues={{email: "", username:"", password:""}}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >
                {/* Formik使う時に必要なアノニマス関数で元々のView達をラップする（親<></>が必要） */}
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                    <>
                        <View style={[
                            styles.inputField,
                            {
                                borderColor: 
                                    values.email.length < 1 || Validator.validate(values.email) 
                                        ? "#ccc" 
                                        : "red"
                            }
                        ]}
                        >
                            <TextInput 
                                placeholder = "Email"
                                placeholderTextColor = "#444"
                                autoCapitalize = "none"
                                keyboardType = "email-address"
                                textContentType = "emailAddress"
                                autoFocus = {true}
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                            />
                        </View>

                        <View style={[
                            styles.inputField,
                            {
                                borderColor: 
                                    values.username.length < 1 || values.password.length >= 6 
                                        ? "#ccc" 
                                        : "red"
                            }
                        ]}
                        >
                            <TextInput 
                                placeholder = "Username"
                                placeholderTextColor = "#444"
                                autoCapitalize = "none"
                                textContentType = "username"
                                autoFocus = {true}
                                onChangeText={handleChange("username")}
                                onBlur={handleBlur("username")}
                                value={values.username}
                            />
                        </View>

                        <View style={[
                            styles.inputField,
                            {
                                borderColor: 
                                    values.password.length < 1 || values.password.length >= 2 
                                        ? "#ccc" 
                                        : "red"
                            }
                        ]}>
                            <TextInput 
                                placeholder = "Password"
                                placeholderTextColor = "#444"
                                autoCapitalize = "none"
                                autoCorrect = {false}
                                secureTextEntry = {true}
                                textContentType = "password"
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                            />
                        </View>

                        {/* <View style={{ alignItems:"flex-end", marginBottom: 30 }}>
                            <Text style={{ color: "#6BB0F5" }}>Forgot password?</Text>
                        </View> */}

                        <Pressable 
                            titleSize={20} 
                            style={[
                                styles.button, 
                                isValid ? null : styles.buttonNotValid 
                                //ダイナミックスタイリング使いたいけどウェブでエラー起きるからこの対処
                            ]} 
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}> Sign Up</Text>
                        </Pressable>

                        <View style={styles.loginContainer}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity
                                onPress={() => props.navigation.goBack()}
                            >
                                <Text style={{ color: "#6BB0F5" }}> Log in</Text>
                            </TouchableOpacity>
                        </View>

                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: "#FAFAFA",
        marginBottom: 10,
        borderWidth: 1,
    },
    //ダイナミックスタイリング使いたいけどウェブ上でエラー起きるから分ける
    button: {
        marginTop: 50,
        backgroundColor: "#0096F6",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 42,
        borderRadius: 4,
    },
    buttonNotValid: {
        backgroundColor: "#9ACAF7",
    },
    buttonText: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 20, 
    },
    loginContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        marginTop: 50
    }
})

export default SignupForm;