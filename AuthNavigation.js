import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { auth } from "./firebase";
import { SignedInStack, SignedOutStack } from "./navigation";

const AuthNavigation = () => {

    const [currentUser, setCurrentUser] = useState(null)

    const userHandler = (user) => {
        return (
            user ? setCurrentUser(user) : setCurrentUser(null)   
        )
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            userHandler(user);
        })
    },[])
    
    return(
        <>
            {currentUser ? 
                <SignedInStack />
                :
                <SignedOutStack />
            }
        </>
        
    )
}

export default AuthNavigation;