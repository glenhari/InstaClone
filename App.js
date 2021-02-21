import React from 'react';
import { StyleSheet, TabBarIOS, Text, View,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './navigator/TabHandler';
import CustomBottomTab from './navigator/CustomTabBar';

export default function App() {

  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        <StatusBar/>
        <BottomTabs/>
      </NavigationContainer>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default App;