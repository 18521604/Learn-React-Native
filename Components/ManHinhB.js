//-----------------------Navigator--------------------
import React, {Component} from "react"
import {View, Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from "react-native-gesture-handler";

export default class ManHinhA extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor:"red"}}>
                <Text style={{fontSize:100}}>B</Text>
                <TouchableOpacity 
                    style={{backgroundColor: "yellow", alignItems:"center"}}
                    onPress={() => this.props.navigation.push("ManHinhB")}>
                    <Text>Hello man</Text>
                </TouchableOpacity>
            </View>
        )
    }
}