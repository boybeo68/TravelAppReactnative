import React, {Component} from 'react';

import {View, TouchableHighlight, Image , StatusBar} from 'react-native';

// import styles from './styles';

export default class HeaderComponent extends Component {
    render() {
        return (//;/'[]

            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', height: 70,}}>
                <StatusBar barStyle={"dark-content"}/>
                <TouchableHighlight style={{marginLeft: 10, marginTop: 10}} onPress={()=>{
                    this.props.navigation.openDrawer();
                }}>
                    <Image style={{width: 32, height: 32}} source={require('../icons/menu-icon.png')}>
                    </Image>
                </TouchableHighlight>
            </View>
        );
    }
}