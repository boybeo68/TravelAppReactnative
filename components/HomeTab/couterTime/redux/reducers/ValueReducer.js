import {DECREMENT, INCREMENT} from '../actions/actionTypes'
const valueReducer = (valueCount=0 , action) =>{
  switch (action.type) {
      case INCREMENT :
          return  valueCount + action.step;
      case DECREMENT:
          return  valueCount - action.step;
      default:
          return valueCount
  }  
};
export default valueReducer