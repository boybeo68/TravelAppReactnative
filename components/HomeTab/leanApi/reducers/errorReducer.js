import {ERROR} from '../actions/actionTypes'
const errorReducer = (isError = null, action ) =>{
    if (action.type === ERROR) {
        return 'không thể load dữ liệu do vấn đề nào đó'
    } return isError
};
export default errorReducer