import {GETSUCSESS, GETCOURSE, ADDCOURSE, GETFAIL} from '../actions/actionTypes'
const arrayReducer = (data=[], action) => {
   switch (action.type) {
       case GETSUCSESS:
           return action.dataCourse;
       case GETFAIL:
           return [];
       default:
           return data
   }
 };
export default arrayReducer;