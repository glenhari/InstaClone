import React, {useState, useEffect,useRef} from 'react';
import { Camera } from 'expo-camera';
import { View, StyleSheet, Text, TouchableOpacity, Modal, ImageBackground, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const CameraLay = (props) => {

    const cam = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraReady, setCameraReady] = useState(false);
    const [hasPermission, setPermission] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [open, setOpen] = useState(false);
    const [flash, setFlash] = useState('flash-off');

    const onCameraReady = () => {
        setCameraReady(true);
    };

    const closeModal = () => {
        setOpen(false);
        setCapturedPhoto(null);
    };

    const changeType = () => {
        type === Camera.Constants.Type.back ? setType(Camera.Constants.Type.front): setType(Camera.Constants.Type.back) ;
    };

    const changeFlash = () => {
        (flash === 'flash-off'? setFlash('flash') : setFlash('flash-off'));
    };

    const getFlash = () => {
        return (flash === 'flash-off') ? 0 : 1;
    };

    const takePicture = async () => {
        if (cam && cameraReady){
            const photo = await cam.current.takePictureAsync({skipProcessing:true});
            setCapturedPhoto(photo.uri);
            setOpen(true);
        }
    };

    useEffect(() => {

        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setPermission(status === 'granted');
            
        })();
        
    }, []);


    if (hasPermission === null) {
        return <View/>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return(
        <SafeAreaView style={styles.container}>
            <Camera type={type} style={styles.camera} ref={cam} onCameraReady={onCameraReady} flashMode={getFlash()}>
                <View style={styles.buttonTopBar}>
                    <Ionicons name="camera-reverse-outline" size={42} color="white" onPress={changeType} />
                    <MaterialCommunityIcons name={flash} size={42} color="white" onPress={changeFlash}/>
                </View>
                <View style={styles.buttonBottomBar}>
                    <TouchableOpacity onPress={ () => takePicture()}>
                        <View style={styles.buttonBorder}>
                            <View style={styles.roundButton}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </Camera>
            { capturedPhoto && 
                <Modal  
                animationType='slide'
                transparent={false}
                visible={open}
                onRequestClose={() => setOpen(false)}>
                    <View style={styles.container}>
                        <ImageBackground  source={{uri: capturedPhoto}} style={{ flex:1}}>
                            <View style={styles.container}>
                                <View style={styles.buttonCloseBar}>
                                    <TouchableOpacity onPress={closeModal}>
                                        <AntDesign name="close" size={32} color="white"/>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttonSendBar}>
                                    <TouchableOpacity>
                                        <Ionicons name="send" size={32} color="white" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    
                    </View>
                </Modal>
            }
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    camera: {
        flex:1
    },
    buttonTopBar:{
        flex:1 ,
        flexDirection:'row',
        margin: 10,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
    },
    buttonBottomBar:{
        flex:1,
        flexDirection:'row',
        margin: 5,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buttonBorder: {
        height: 76,
        width: 76,
        borderRadius: 76/2,
        backgroundColor: 'transparent',
        borderWidth: 4,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    roundButton: {
        height: 70,
        width: 70,
        borderRadius: 70/2,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'transparent'
    },
    buttonSendBar:{
        flex:1,
        flexDirection:'row',
        margin: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    buttonCloseBar:{
        flex:1 ,
        flexDirection:'row',
        margin: 10,
        justifyContent: 'flex-start'
    }
});

export default CameraLay;