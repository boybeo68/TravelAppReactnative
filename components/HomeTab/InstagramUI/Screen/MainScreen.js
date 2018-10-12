import React, {Component} from 'react';

import {View, Text, StyleSheet, Platform, StatusBar} from 'react-native';
import {Icon} from 'native-base'
import {createMaterialTopTabNavigator } from 'react-navigation'
import HomeTab from '../Tab/HomeTab'
import AddMediaTab from '../Tab/AddMediaTab'
import ProfileTab from '../Tab/ProfileTab'
import SearchTab from '../Tab/SearchTab'

// import styles from './styles';

export default class MainScreen extends Component {
    static navigationOptions = {
        // headerLeft: <Icon style={{paddingLeft: 10}} name='ios-camera-outline'/>,
        // title: 'Instagram',
        // headerRight: <Icon style={{paddingRight: 10}} name='ios-send-outline'/>
        header:null
    };

    render() {
        return (
            //<AppTab/>
                <AppTabNavigation/>

        );
    }
}
const AppTabNavigation = createMaterialTopTabNavigator ({
    Home: {
        screen: HomeTab
    },
    Profile: {
        screen: ProfileTab
    },
    'Add Media': {
        screen: AddMediaTab
    },
    Search: {
        screen: SearchTab
    }
},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: 'white'
                },
                ios:{
                    backgroundColor:'white'
                }
            })
        },
        activeTintColor: 'black',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true,
        indicatorStyle:{
            backgroundColor:'black'
        }
    },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});