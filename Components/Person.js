//-------------Learning State and props ------------------------

import { Component } from "react"

import React from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native'

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chieucao: 0
        }
    }
    clickButton() {
        this.setState({
            chieucao: this.state.chieucao + 1
        })
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.card} onPress={() => { this.clickButton() }}>
                    <View>
                        <Text>{this.props.hoten}</Text>
                        <Text>{this.state.chieucao}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: 70,
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius:20,
        backgroundColor: 'red',
        color: 'yellow',
        margin: 20,
        padding: 10,
    }
})