import React, { Component } from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Controller from './Controller';
import {connect} from 'react-redux'
import HeaderComponent from "../../HeaderComponent";
import valueReducer from "./redux/reducers/ValueReducer";

// import styles from './styles';

 class Main  extends Component {
  render() {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
        }}>
            <HeaderComponent {...this.props} />
            <View style={styleApp.container}>
                <View style={styleApp.header}>
                    <Text style={styleApp.appName}>EXAM 1: {'\n'}APP COMPONENT</Text>
                    <Text style={styleApp.value}>{this.props.myValue}</Text>
                </View>
                <Controller/>
            </View>
        </View>
    );
  }
}
function mapStateToProps(state) {
    return {myValue: state.valueReducer}
}

 export default connect(mapStateToProps)(Main)
const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingTop: 30
    },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    appName: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    value: {
        color: 'yellow',
        fontSize: 40
    }
});