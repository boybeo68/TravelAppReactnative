import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Main from './couterTime/Main'
import {Icon} from "native-base";
import store from './couterTime/redux/store'
import {sagamiddleWare} from './couterTime/redux/store'
import rootSaga from './couterTime/redux/sagas/rootSaga'
// const defaultValue = {value: 19, hightLight: false};
// const reducer = (state= defaultValue, action ) => {
//     if (action.type === 'UP') return {value: state.value + 1, hightLight: state.hightLight};
//     if (action.type === 'DOWN') return {value: state.value - 1, hightLight: state.hightLight};
//     if (action.type === 'ChangeColor') return {value:state.value, hightLight: !state.hightLight};
//     return state;
// };
export default class AppCount extends React.Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'App Count';
        let drawerIcon = () => (
            <Icon name='ios-game-controller-a'/>
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
sagamiddleWare.run(rootSaga);

