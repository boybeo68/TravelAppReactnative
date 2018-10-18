import {GETFAIL, ADDCOURSE, GETSUCSESS, GETCOURSE, LOADDING, ERROR,EDITCOURSE,DELETECOURSE} from '../actions/actionTypes'
import {put, takeLatest} from 'redux-saga/effects'
import {API} from './ApiSaga'
import {onAddCourse} from "../actions/actionCreator";

function* onGetCourse() {
    try {
        yield put({type: LOADDING, load: true});
        const dataCourse = yield API.fetDataCourse();
        yield put({type: GETSUCSESS, dataCourse});
        yield put({type: LOADDING, load: false})
    } catch (e) {
        yield put({type: LOADDING, load: false});
        yield put({type: ERROR});
    }
}

function* onAdd(action) {
    try {
        yield put({type: LOADDING, load: true});
        const dataCourse = yield API.postDataCourse(action.newFood);
        yield put({type: GETCOURSE});
    } catch (e) {
        yield put({type: LOADDING, load: false});
        yield put({type: ERROR});
    }
}

export function* watchGetCourse() {
    yield takeLatest(GETCOURSE, onGetCourse)
}

export function* watchADDCourse() {
    yield takeLatest(ADDCOURSE, onAdd)
}

function* onDelete(action) {
    try {
        yield API.DeleteDataCourse(action.id);
        yield put({type: GETCOURSE});
    } catch (e) {
        yield put({type: LOADDING, load: false});
        yield put({type: ERROR});
    }
}

function* onEdit(action) {
    try {
        yield API.putDataCourse(action.id, action.editFood);
        yield put({type: GETCOURSE});
    } catch (e) {
        yield put({type: LOADDING, load: false});
        yield put({type: ERROR});
    }
}

export function* watchDeleteCourse() {
    yield takeLatest(DELETECOURSE, onDelete)
}

export function* watchEditCourse() {
    yield takeLatest(EDITCOURSE, onEdit)
}