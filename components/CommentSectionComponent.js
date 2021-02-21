import React from 'react';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, View,TextInput, TouchableHighlight, Image } from 'react-native';



const CommentSection = (props) => {

    var firstComments = [];

    useEffect(() => {

        // console.log(firstComments);
    },[])

    for (i=0; i < props.comments.length; i++){

        firstComments.push(props.comments[i]);
    
        if (i === 1){
            break;
        }
    }

    return (
    <View style={styles.commentsContainer}>
        <View style={styles.viewMargin}>
            <Text style={styles.likesText}>
                Curtido por <Text style={styles.boldText}>{props.likes[0].userName}</Text> e <Text style={styles.boldText}>outras pesoas</Text> 
            </Text>
            <Text style={styles.likesText}>
                <Text style={styles.boldText}>{props.postInfo.user}</Text> {props.postInfo.description} 
            </Text>
            {(props.comments.length >= 2) && <Text style={styles.greyText}>Ver todos os {props.comments.length} comentários</Text>}
            {       
                firstComments.map((value, index) =>
                        <Text style={styles.likesText} key={index}><Text style={styles.boldText}>{value.userName} </Text>{value.comment}</Text>)
            }
            <View style={styles.inputCommentWrapper}>
                <Image source={{uri : props.postInfo.icon}} style={styles.iconComment}/>
                <TextInput placeholder={"Adicione um comentário..."} placeholderTextColor={'grey'} style={styles.inputComment}/>
            </View>
            <Text style={{color: 'grey', fontSize: 10, marginTop: 2}}>31 de janeiro</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    commentsContainer: {
        flex: 3,
        // backgroundColor: 'red'
    },
    likesText: {
        color: 'white',
        marginBottom: 1
    },
    descSection:{
        color: 'white'
    },
    boldText:{
        color: 'white',
        fontWeight: 'bold'
    },
    viewMargin: {
        paddingHorizontal: '4%'
    },
    greyText: {
        color: 'grey',
        marginBottom: 1
    },
    inputCommentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    iconComment: {
        height: 26,
        width: 26,
        borderRadius: 26/2,
        marginRight: 10
    },
    inputComment: {
        color: 'white',
    }
});

export default CommentSection;