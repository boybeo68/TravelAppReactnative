import React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation';
import {View, Text, Dimensions, StatusBar} from 'react-native';
import NotificationComponent from './HomeTab/Info';
import Camera_and_Info from './HomeTab/Camera_and_Info';
import Weather from './HomeTab/Weather';
import Home from './HomeTab/Home'
import AppLearnWord from './HomeTab/AppLearnWord'
import AppCount from './HomeTab/AppCount'
import App from './HomeTab/todoRedux/App'
import AppInstagram from './HomeTab/InstagramUI/App'

// import styles from './styles';
var {height, width} = Dimensions.get('window');
let routeConfigs = {
    Home: {
        screen: Home,
    },
    Weather: {
        screen: Weather,
    },
    AppLearnWord: {
        screen: AppLearnWord,
    },
    AppCount: {
        screen: AppCount,
    },
    NotificationComponent: {
        screen: NotificationComponent,
    },
    'Todo Redux': {
        screen: App,
    },
    AppInstagram:{
        screen:AppInstagram,
    },
    Camera_and_Info:{
        screen:Camera_and_Info
    }

};
let drawerNavigatorConfig = {
    initialRouteName: 'Home',
    drawerWidth: width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // drawerBackgroundColor: 'orange',
    contentOptions: {
        activeTintColor: 'red',
    },
};
const AppHomeTab = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
export default class HomeScreen extends Component {

    render() {
        console.log(this.props.navigation.state.params);
        return (
            <AppHomeTab/>
        );
    }
}