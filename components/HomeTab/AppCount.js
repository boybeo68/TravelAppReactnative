import React from 'react';
import {Provider} from 'react-redux'
import Main from './couterTime/Main'
import {Icon} from "native-base";
import store from './couterTime/redux/store'

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


