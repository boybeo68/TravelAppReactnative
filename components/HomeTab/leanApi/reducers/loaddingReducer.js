import {LOADDING} from '../actions/actionTypes'
const loadingReducer = (loading = false, action ) => {
  if (action.type === LOADDING ) {
      return action.load
  }return loading
};
export default loadingReducer