import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoverScreen from "../screens/Discover";
import HomeScreen from "../screens/Home";
import React from 'react';
import CustomBottomTab from "./CustomTabBar";
import CameraLay from "../screens/CameraLay";

const Tab = createBottomTabNavigator();

const BottomTabs = () =>{

    return (
        <Tab.Navigator initialRouteName='Home' backBehavior='initialRoute' tabBarOptions={{keyboardHidesTabBar:true}} tabBar={props => <CustomBottomTab {...props}/>}>
            <Tab.Screen name='Home' component={HomeScreen} initialParams={{icon:'home', display:''}} options={{keyboardHidesTabBar:true}}/>
            <Tab.Screen name='Discover' component={DiscoverScreen} initialParams={{icon:'search1', display:''}} options={{keyboardHidesTabBar:true}}/>
            <Tab.Screen name='AddPhoto' component={CameraLay} initialParams={{icon:'pluscircleo', display:''}} options={{keyboardHidesTabBar:true}}/>
            <Tab.Screen name='Notifications' component={HomeScreen} initialParams={{icon:'hearto', display:''}} options={{keyboardHidesTabBar:true}}/>
            <Tab.Screen name='Settings' component={DiscoverScreen} initialParams={{icon:'setting', display:''}} options={{keyboardHidesTabBar:true}}/>
        </Tab.Navigator>
    );
};

export default BottomTabs;