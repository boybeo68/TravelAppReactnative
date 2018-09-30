import React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation';
import {View, Text, Dimensions, StatusBar} from 'react-native';
import Info from './HomeTab/Info';
import Setting from './HomeTab/Setting';
import Weather from './HomeTab/Weather';
import Home from './HomeTab/Home'

// import styles from './styles';
var {height, width} = Dimensions.get('window');
let routeConfigs = {
    Home: {
        screen: Home,
    },
    Weather: {
        screen: Weather,
    },
    Info: {
        screen: Info,
    },
    Settings: {
        screen: Setting,
    },
};
let drawerNavigatorConfig = {
    initialRouteName: 'Weather',
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