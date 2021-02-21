import React from 'react';
import { Button, StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

const AddStoriesButton = (props) => {

    return(
        <View style={styles.container}>
            <TouchableHighlight style={styles.profileImgContainer}>
                <Image source={{ uri:"https://wallpapercave.com/wp/wp2465923.jpg" }} style={styles.profileImg}></Image>
            </TouchableHighlight>
            <View style={styles.plusBlue}>
                <View style={{backgroundColor:'transparent', height:16, width: 16, justifyContent: 'center', alignItems: 'center'}}>
                    <Entypo name="plus" size={12} color="white" />
                </View>
            </View>
            <View>
                <Text style={styles.txtStory}>Seu story</Text>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        marginLeft: 15,
        justifyContent: 'center',
        marginRight: 8,
        flex:1,

    },

    profileImgContainer: {
        height: 70,
        width: 70,
        borderRadius: 70/2,
        justifyContent: 'center',
        alignItems: 'center',

    },

    profileImg: {
        height: 65,
        width: 65,
        borderRadius: 65/2,
        // borderWidth: 5,
        // borderColor: 'blue'
    },
    txtStory:{
        fontSize: 12,

        color: 'white',
        // marginTop:2
        // justifyContent: 'flex-end'
    },

    plusBlue: {
        height:20,
        width:20,
        borderRadius: 20/2,
        position: 'absolute',
        top:58,
        left:45,
        backgroundColor: '#4d81bd',
        borderColor: 'black',
        borderWidth: 2,
        alignContent: 'center',
        justifyContent: 'center'
    }
});

export default AddStoriesButton