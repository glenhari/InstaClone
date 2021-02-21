import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

const StoriesButton = (props) => {

    return(
        <View style={styles.container}>
            <TouchableHighlight style={styles.profileImgContainer}>
                <LinearGradient
                    colors={['#CA1D7E', '#E35157', '#F2703F']}
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    style={{ height: 70,width: 70,alignItems: 'center',justifyContent: 'center',borderRadius:70 / 2}}>
                        <Image source={{ uri:props.uri }} style={styles.profileImg}></Image>
                </LinearGradient>            
            </TouchableHighlight>
            <View>
                <Text style={styles.txtStory}>{props.name}</Text>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginLeft: 10,
        justifyContent: 'center',
        flex:1,

    },

    profileImgContainer: {
        height: 70,
        width: 70,
        borderRadius: 70/2,   

    },

    profileImg: {
        height: 65,
        width: 65,
        borderRadius: 65/2,
        borderWidth: 3,
        borderColor: 'black', 
    },

    txtStory:{
        fontSize: 12,

        color: 'white',
        
    },
});

export default StoriesButton;