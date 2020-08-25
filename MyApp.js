/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Person from "./Components/Person"

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import ManHinhA from './Components/ManHinhA';
import ManHinhB from './Components/ManHinhB';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyApp: () => React$Node = () => {
  return (
    // <View style={styles.container}>
    //   <Person hoten="Tuấn"></Person>
    //   <Person hoten="Mèo"></Person>
    // </View>

/*------------------------Navigator---------------------*/
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ManHinhA">
        <Stack.Screen name= "ManHinhA" component={ManHinhA} 
                      options={{title: "Màn hình A",
                      headerStyle:{
                        backgroundColor:"red"
                      },
                      headerBackTitleStyle:{
                        color:"yellow"
                      }}}></Stack.Screen>
        <Stack.Screen name= "ManHinhB" component={ManHinhB}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    flexDirection: "row",
    justifyContent: "space-around"
  }
})

export default MyApp;
