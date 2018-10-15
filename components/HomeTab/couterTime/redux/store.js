import {createStore, applyMiddleware} from 'redux'
import {reducers} from './reducers/reducers'
import createSagaMiddleware from 'redux-saga'
export const  sagamiddleWare = createSagaMiddleware();
export default store = createStore(reducers,applyMiddleware(sagamiddleWare));