import { collectionGroup, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { POSTS } from '../data/posts';
import { db } from '../firebase';

const HomeScreen = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        onSnapshot(
            collectionGroup(db, "posts"), 
            (snapshot) => {
                setPosts(snapshot.docs.map(post => ({
                    id: post.id,
                    ...post.data()
                })))  
            })
                        
    },[])

    if (!posts) {
        return (
            <SafeAreaView style = {styles.container} >
                <Header navigation = {props.navigation} />
                <ScrollView>
                    
                </ScrollView>
            </SafeAreaView>
        )
    }
    return(
        <SafeAreaView style = {styles.container} >
            <Header navigation = {props.navigation} />
            <Stories />
            <ScrollView>
                {posts.map((post, index) => (
                    <Post post={post} key={index}/>
                ))}
            </ScrollView>
            <BottomTabs icons={bottomTabIcons}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: "black",
        flex:1,
    }
})

export default HomeScreen