import React from 'react';
import { StyleSheet,TouchableOpacity,Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const Tab = ({color, tab, onPress, icon, display}) => {
    return (
        <TouchableOpacity style={display == '' ? styles.container: styles.invisible} onPress={onPress}>
            <AntDesign name={icon} size={24} color="white"  />
            {/* <Text style={{color}}>{tab.name}</Text> */}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // borderRightColor: 'white',
        // borderRightWidth: 2,
        // backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    invisible :{
        display:'none'
    },
    textInside:{
        color: 'red'
    }
});
export default Tab;