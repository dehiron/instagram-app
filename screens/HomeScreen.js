import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';
import { POSTS } from '../data/posts';

const HomeScreen = (props) => {
    return(
        <SafeAreaView style = {styles.container} >
            <Header navigation = {props.navigation} />
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (
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