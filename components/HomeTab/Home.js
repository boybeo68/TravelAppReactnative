import React, {Component} from 'react';
import {Icon} from 'native-base'
import {View, Text, TouchableHighlight, Image} from 'react-native';
import HeaderComponent from '../HeaderComponent'

// import styles from './styles';
const backgroundColor = '#0067a7';
export default class Home extends Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'Home';
        let drawerIcon = () => (
            <Icon name='ios-home'/>
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
                        {this.props.navigation.state.params}
                    </Text>
                    <TouchableHighlight style={{
                        margin: 20,
                        width: 200,
                        height: 45,
                        backgroundColor: 'darkviolet',
                        padding: 10,
                        alignItems: 'center',
                    }}
                                        onPress={() => {
                                            const {navigate} = this.props.navigation;
                                            navigate('Info');
                                        }}>
                        <Text style={{color: 'white', fontSize: 18}}>Navigate to Info</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}