import React, {Component} from 'react';
import {Icon} from 'native-base'
import {View, Text, TouchableHighlight, Image} from 'react-native';
import HeaderComponent from '../HeaderComponent'

// import styles from './styles';
const backgroundColor = '#a7441f';
export default class Setting extends Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'Todo App use redux';
        let drawerIcon = () => (
            <Icon name='md-done-all'/>
        );
        return {drawerLabel, drawerIcon};
    };

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <HeaderComponent {...this.props} />
                <View style={{
                    flex: 1,
                    backgroundColor: backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
                        This is Setting Screen
                    </Text>
                </View>
            </View>
        );
    }
}