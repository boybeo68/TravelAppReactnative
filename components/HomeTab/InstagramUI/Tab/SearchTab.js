import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import {Icon} from 'native-base'

// import styles from './styles';

export default class SearchTab extends Component {
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(<Icon name='ios-search' style={{color:tintColor}}/>)
    };
  render() {
    return (
      <View style={styles.container} >
          <Text>
              SearchTab
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