import {combineReducers} from "redux";
import fiterReducer from "./fiterReducer";
import isAddingReducer from "./isAddingReducer";
import defaultArrWordsReducer from "./defaultArrWordsReducer";

const reduce = combineReducers({
    filter:fiterReducer,
    isAdding:isAddingReducer,
    defaultArrWords:defaultArrWordsReducer,
});
export default reduce