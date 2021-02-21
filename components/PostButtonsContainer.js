import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 



const PostButtons = (props) => {
    var name = "hearto";
    var color = "white";

    if (!props.liked){
        name = "hearto";
        color = "white";
    } else {
        name = "heart";
        color = "red";
    };

    const doLike = () => {
        props.callBackLike();
    };

    return (
        <View style={styles.buttonsContainer}>
            <View style={styles.firstButtons}>
                <AntDesign name={name} size={24} color={color} onPress={doLike} style={styles.marginButtons}/>
                <FontAwesome5 name="comment" size={24} color="white" style={styles.marginButtons}/>
                <Feather name="send" size={24} color="white" style={styles.marginButtons}/>
            </View>
            <View style={styles.buttonSave}>
                <FontAwesome name="bookmark-o" size={24} color="white"/>
            </View>
        </View>
    );

};


const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '1%'
    },
    firstButtons: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginLeft: '5%',
        // backgroundColor: 'blue'
    },
    buttonSave: {
        flex: 2,
        justifyContent: 'center',
        marginRight: '5%',
        alignItems: 'flex-end',
        // backgroundColor: 'red'
    },
    marginButtons:{
        marginRight: 15
    }
});

export default PostButtons;