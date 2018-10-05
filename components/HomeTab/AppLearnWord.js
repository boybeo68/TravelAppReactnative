import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Main from './learnWord/Main'
import {Provider} from 'react-redux'
import store from './learnWord/redux/store'
import {Icon} from "native-base";

export default class AppLearnWord extends React.Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'Learn Word';
        let drawerIcon = () => (
            <Icon name='ios-book'/>
        );
        return {drawerLabel, drawerIcon};
    };

    render() {
        return (
            <Provider store={store}>
                <Main {...this.props} />
            </Provider>
        );
    }
}


