import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View, TouchableWithoutFeedback,ScrollView, FlatList, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import InstaPost from '../components/InstaPostComponent';
import StoriesBar from '../components/StoriesBarComponent';
import { Feather } from '@expo/vector-icons'; 
import CameraLay from './CameraLay';


const HomeScreen = props => {
    useEffect(() => {
        let firstData =  
            [
                {
                    user: 'glenha',
                    icon: 'https://reactnative.dev/img/tiny_logo.png',
                    id: '1',
                    photo: 'https://somos.lojaiplace.com.br/wp-content/uploads/2020/03/08_03_DiadaMulher.png',
                    description: 'Loved this one!',
                    time: '',
                    liked: false,
                    likes: [
                        {
                            userName: "fuy57",
                        },
                        {
                            userName: "jj36"
                        }
                    ],
                    comments: [
                        {
                            userName: "fuy57",
                            comment: "Nice photo!"
                        },
                        {
                            userName: "jj36",
                            comment: "Good one!"
                        },
                        {
                            userName: "nn77",
                            comment: "😍"
                        }
                    ]
                },
                {
                    user: 'glenha',
                    icon: 'https://reactnative.dev/img/tiny_logo.png',
                    id: '2',
                    photo: 'https://somos.lojaiplace.com.br/wp-content/uploads/2020/03/08_03_DiadaMulher.png',
                    description: 'Loved this one!',
                    time: '',
                    liked: false,
                    likes: [
                        {
                            userName: "fuy57"
                        },
                        {
                            userName: "jj36"
                        }
                    ],
                    comments: [

                    ]
                },
            ];
        
            setData(firstData);
        }, []);

    const [data, setData] = useState(null);

    return(
        <View style={styles.wholeBody}>
            <View style={styles.headerBar}>
                <View>
                    <Image source={require('../assets/instagramtitle.png')} style={styles.imageHeader} resizeMode={'contain'}/>
                </View>
                <TouchableWithoutFeedback>
                    <Feather name="send" size={24} color="white" style={styles.iconMessages}/>
                </TouchableWithoutFeedback>
            </View>
            <View style={{flex:1}}>
                <FlatList 
                    data={data} 
                    renderItem={(item) => 
                        (<InstaPost 
                            info={item} 
                            changeData={(item) => {

                                let idx = data.findIndex(obj => obj.id == item.id);
                                var newData = data.map((value, index, array) => { 
                                    if (index === idx) {
                                        value.liked = item.liked;
                                    }
                                    return value;
                                });
                                setData(newData);
                            }}/>
                        )} 
                    keyExtractor={item => item.id} 
                    ListHeaderComponent={StoriesBar} 
                    contentContainerStyle={{ paddingBottom: 20 }}
                    extraData={data}/>
            </View>
        </View>  
    );
};

const styles = StyleSheet.create({
    wholeBody:{
        backgroundColor: 'black',
        flex: 1,
    },
    headerBar:{
        height: '11%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textTitle:{
        fontSize: 25,
        padding: 30,
        color: 'white'
    },
    iconMessages:{
        paddingRight:20,
        marginTop: 8
    },
    storiesBar:{
        flexDirection: 'row',
    },
    imageHeader:{
        height: '80%',
        width: 185,
        
    }
});

export default HomeScreen;