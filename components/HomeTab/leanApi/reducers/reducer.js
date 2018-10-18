import {combineReducers} from 'redux';
import arrayReducer from './arrayReducer'
import loadingReducer from './loaddingReducer'
import errorReducer from "./errorReducer";
export const  reducer = combineReducers({
    arrayReducer,loadingReducer,errorReducer
});