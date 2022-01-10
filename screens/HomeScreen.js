import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';

const HomeScreen = () => {
    return(
        <SafeAreaView style = {styles.container} >
            <Header />
            <Stories />
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