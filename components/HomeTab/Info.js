import React, {Component} from 'react';
import {Icon} from 'native-base'
import {View, Text, TouchableHighlight, Image} from 'react-native';
import HeaderComponent from '../HeaderComponent'

// import styles from './styles';
const backgroundColor = '#33a726';
export default class Info extends Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'Info';
        let drawerIcon = () => (
            <Icon name='ios-information'/>
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
                        This is Info Screen
                    </Text>
                </View>
            </View>
        );
    }
}