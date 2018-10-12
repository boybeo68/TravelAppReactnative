import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import MainScreen from './Screen/MainScreen'
import {Icon} from "native-base";

export default class AppInstagram extends React.Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'Instagram UI';
        let drawerIcon = () => (
            <Icon name='logo-designernews'/>
        );
        return {drawerLabel, drawerIcon};
    };
    render() {
        return (
            <AppStactNavigation/>
        );
    }
}
const AppStactNavigation = createStackNavigator({
    Main: {
        screen: MainScreen
    }
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
