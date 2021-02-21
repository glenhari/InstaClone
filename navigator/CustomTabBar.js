import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Tab from './Tabs';

const CustomBottomTab = ({state, navigation}) => {

    const [selected, setSelected] = useState('Home')
    const {routes} = state;

    const renderColor = (currentTab) => {
        return currentTab === selected ? 'red' : 'black';
    };
    const handlePress = (activeTab, index) => {
        if (state.index !== index){
            setSelected(activeTab);
            navigation.navigate(activeTab);
        }
    };


    return(
        <View>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    {
                        routes.map((route,index) => <Tab 
                            tab={route} 
                            icon={route.params.icon} 
                            onPress={() => handlePress(route.name,index)} 
                            color={renderColor(route.name)} 
                            key={route.key}
                            display={route.params.display}/>)
                    }
                </View>
            </View>
        </View>
    );
};

const {width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    wrapper: {
        // position:'absolute',
        bottom:0,
        // display: "none",
        width,
        height: 50, 
        alignItems:'center',
        justifyContent:'center',
        
    },
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'black',
        width:'100%',
        height: '100%',
    },

});
export default CustomBottomTab;