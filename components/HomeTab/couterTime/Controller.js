import React, { Component } from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux'
import {onDecrement,onIncrement} from './redux/actions/creatorAction'

// import styles from './styles';

 class Controller extends Component {
  render() {
    return (
        <View style={styleController.controller}>
            <Text style={styleController.controllName}>CONTROLLER COMPONENT</Text>
            <View style={styleController.buttonContainer}>
                <TouchableOpacity style={styleController.button} onPress={() => {
                   this.props.onIncrement(1)
                }}>
                    <Text style={styleController.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleController.button} onPress={()=>{this.props.onDecrement(2)}}>
                    <Text style={styleController.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}
export default connect(null,{onDecrement,onIncrement})(Controller)

const styleController = StyleSheet.create({
    controller: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        margin: 20
    },
    controllName: {
        fontSize: 20,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 50,
        paddingVertical: 25,
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 40
    }
});
