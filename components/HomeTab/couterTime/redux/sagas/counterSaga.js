import { INCREMENT, DECREMENT, ASYNC} from '../actions/actionTypes';
//Saga effects
import { delay } from 'redux-saga';
import { put, takeEvery,takeLatest } from 'redux-saga/effects';

export function* sayHello() {
    console.log('Hello world !');
}
function* increment() {
    // yield delay(2000);
    // yield put({type:INCREMENT});
    console.log(`This is increment saga`);
}

export function* watchIncrement() {
    console.log(`watchIncrement saga`);
    yield takeEvery(INCREMENT, increment);
}

export function* asyncincre() {
    yield delay(3000);
    yield put ({type:INCREMENT, step: 5});
    yield put ({type:DECREMENT, step: 2});
    console.log('thực hiện xong 2 phép tính')
}

export function * asyncCoun() {
    yield takeLatest(ASYNC,asyncincre)
}

function* decrement() {
    console.log(`This is decrement saga`);
}

export function* watchDecrement() {
    //yield put({ type: INCREMENT, step: step });
    console.log(`watchDecrement saga`);
    yield takeEvery(DECREMENT, decrement);
}