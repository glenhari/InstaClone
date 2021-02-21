import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CommentSection from './CommentSectionComponent';
import PostButtons from './PostButtonsContainer';


const InstaPost = (props) => {

    let firstTap = null;

    const checkTaps = (timeTap) => {
        let result = (timeTap.getTime() - firstTap.getTime());

        if (result <= 400){
            firstTap = null;
            buttonLiked();
        }
        else
        {
            firstTap = timeTap;
        }
    };

    const handleTap = () => {
        var timeTap = new Date(Date.now());
        firstTap == null ? firstTap = timeTap : checkTaps(timeTap);  
    };

    const buttonLiked = () => {
        props.info.item.liked = !props.info.item.liked;
        props.changeData(props.info.item);
    }

    return (
        <View style={{marginBottom:15}}>
            <View style={{ height:450 }}>
                <View style={styles.headerPost}>
                    <LinearGradient
                        colors={['#CA1D7E', '#E35157', '#F2703F']}
                        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                        style={{ height: 27,width: 27, borderRadius:27 / 2, alignItems:'center', justifyContent:'center', marginLeft:'4%'}}>
                            <Image source={{uri: props.info.item.icon}} style={styles.image}/>
                    </LinearGradient>
                    <Text style={styles.textUser}>{props.info.item.user}</Text>
                </View>
                <View style={styles.photoContainer}>
                    <TouchableWithoutFeedback onPress={handleTap}>
                        <Image source={{uri: props.info.item.photo}} style={styles.photoContainer} resizeMode='cover'/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={styles.actionsContainer}>
                <View style={{height:45}}>
                    <PostButtons liked={props.info.item.liked} callBackLike={() => {buttonLiked()}}/>
                </View>
                <View>
                    <CommentSection likes={props.info.item.likes} comments={props.info.item.comments} postInfo={props.info.item}/>
                </View>
            </View>
            
        </View>
    );

};

const styles = StyleSheet.create({
    headerPost: {
        height: '9%',
        flexDirection: 'row',
        alignItems: 'center',
        // borderTopWidth: 1,
        // borderTopColor: 'grey'
    },
    image: {
        height: 24,
        width: 24,
        borderRadius: 24/2,
        borderWidth: 1,
        borderColor: 'black',
    },
    textUser: {
        color: 'white',
        marginLeft: '2%',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    photoContainer: {
        flex: 3,
    },
    photo: {
        // flex: 3,
        
    },
    actionsContainer: { 
        flex: 1,
    },
    infosContainer: {
        flex: 1,
    }
});

export default InstaPost;