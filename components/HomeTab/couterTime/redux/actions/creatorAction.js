import {DECREMENT, INCREMENT,ASYNC} from './actionTypes'
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
export const onAsync = (dlay) => {
    return {
        type: ASYNC,
        dlay
    }
};