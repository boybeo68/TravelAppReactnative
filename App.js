import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions } from 'react-native';
import LoginScreen from './components/LoginScreen'
import SlashScreen from './components/SlashScreen'
import HomeScreen from './components/HomeScreen';
import {createStackNavigator} from 'react-navigation'

const AppNavigation = createStackNavigator({
    SlashScreen: {
        screen: SlashScreen,
        navigationOptions : { header: null }
    },
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions : { header: null }
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions:{
            header: null
        }
    },
},{
    initialRouteName:'HomeScreen'
});
export default class App extends React.Component {
    render() {
        return (
            //<Main/>
            //<LoginScreen/>
            <AppNavigation/>
        );
    }
}
