import {createStore} from "redux";
import reduce from './reducer/reduce'
const store = createStore(reduce);
export default store