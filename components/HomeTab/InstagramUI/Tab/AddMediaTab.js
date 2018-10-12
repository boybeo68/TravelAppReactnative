import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import {Icon} from 'native-base'
// import styles from './styles';

export default class AddMediaTab extends Component {
    static navigationOptions={
        tabBarIcon:({tintColor})=>(<Icon name='ios-musical-notes' style={{color: tintColor}}/>)
    };
  render() {
    return (
      <View style={styles.container} >
          <Text>
              AddMediaTab
          </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    }
});