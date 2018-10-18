import {createStore, applyMiddleware} from 'redux'
import {reducers} from './reducers/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/rootSaga";
export const  sagamiddleWare = createSagaMiddleware();
const store = createStore(reducers,applyMiddleware(sagamiddleWare));
sagamiddleWare.run(rootSaga);
export default store