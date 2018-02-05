import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { connect } from 'react-redux'

import { Button } from 'antd-mobile'

import Ionicons from 'react-native-vector-icons/Ionicons'

@connect()
class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        tabBarLabel: 'Home',
        /**
         * tab 导航 icon
         */
        tabBarIcon: ({ tintColor, focused }) =>
            <Ionicons
                name={focused ? 'ios-home' : 'ios-home-outline'}
                size={26}
                style={{ color: tintColor }}
            />
    }
    render() {
        return (
            <View style={styles.container}>
                <Button type="warning">default</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 32,
        height: 32
    }
})

export default Home
