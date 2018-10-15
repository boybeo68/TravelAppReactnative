import {DECREMENT, INCREMENT} from './actionTypes'
export const onIncrement = (step) =>{
  return {
      type: INCREMENT,
      step
  }
};
export const onDecrement = (step) => {
    return {
        type: DECREMENT,
        step
    }
};