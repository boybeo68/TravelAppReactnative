import React from 'react';
import {Provider} from 'react-redux'
import Main from './couterTime/Main'
import {Icon} from "native-base";
import store from './leanApi/store'
import Home from "./Home";

export default class AppCount extends React.Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'Redux Saga APi';
        let drawerIcon = () => (
            <Icon name='ios-home'/>
        );
        return {drawerLabel, drawerIcon};
    };
    render() {
        return (
            <Provider store={store}>
                <Home {...this.props} />
            </Provider>
        );
    }
}


