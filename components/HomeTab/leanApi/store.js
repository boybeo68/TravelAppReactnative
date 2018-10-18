import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers/reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/rootSaga";
export const  sagamiddleWare = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagamiddleWare));
sagamiddleWare.run(rootSaga);

export default store