//Saga effects
import { delay } from 'redux-saga';
import { all } from 'redux-saga/effects';

import { sayHello } from './counterSaga';
import { watchIncrement, watchDecrement } from './counterSaga';

export default function* rootSaga() {
    yield all([
        sayHello,
        watchIncrement(),
        watchDecrement(),
    ]);
}