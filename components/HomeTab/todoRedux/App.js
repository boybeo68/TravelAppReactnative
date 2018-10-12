import React from 'react';
import {Provider} from 'react-redux'
import reduce from './redux/reducer/reducer'
import MainTodoList from './components/MainTodoList'
import {createStore} from 'redux'
import {Icon} from "native-base";


export default class App extends React.Component {
    static navigationOptions = ({navigation}) => {
        let drawerLabel = 'Todo list Redux';
        let drawerIcon = () => (
            <Icon name='ios-list-box'/>
        );
        return {drawerLabel, drawerIcon};
    };

    render() {
    return (
        <Provider store={store} >
            <MainTodoList {...this.props}/>
        </Provider>
    );
  }
}
let store=createStore(reduce);
