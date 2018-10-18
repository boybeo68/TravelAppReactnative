import {all,call,fork} from 'redux-saga/effects'
import {watchGetCourse,watchADDCourse,watchDeleteCourse,watchEditCourse} from './learnApiSaga'
export default function* rootSaga() {
    yield fork(watchGetCourse);
    yield fork(watchADDCourse);
    yield fork(watchDeleteCourse);
    yield fork(watchEditCourse)
}