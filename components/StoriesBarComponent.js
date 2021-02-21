import React from 'react';
import { Button, StyleSheet, Text, View, TouchableWithoutFeedback,ScrollView, FlatList } from 'react-native';
import AddStoriesButton from './AddStoriesButtonComponent';
import StoriesButton from './StoriesButtonComponent';

const stories = [
    {uri:"https://www.t-nation.com/system/publishing/articles/10005529/original/6-Reasons-You-Should-Never-Open-a-Gym.png", name: "dogcururu"},
    {uri: "https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png", name: "jac43"},
    {uri: "https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png", name: "jac43"},
    {uri: "https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png", name: "jac43"},
    {uri: "https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png", name: "jac43"},
    {uri: "https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png", name: "jac43"},
    {uri: "https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png", name: "jac43"}
];

const StoriesBar = () => {
    
    return (
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={styles.barContainer} >
            <AddStoriesButton/>
            {
                stories.map((item, key) => (
                    <StoriesButton uri={item.uri} key={key} name={item.name}/>
                ))
            }   
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    barContainer: {
        height: '8%',
        // backgroundColor: 'red'
    }
});

export default StoriesBar;