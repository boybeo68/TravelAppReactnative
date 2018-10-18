import {ADDCOURSE, GETCOURSE, GETFAIL, GETSUCSESS, LOADDING, ERROR, DELETECOURSE, EDITCOURSE} from './actionTypes'

export const onAddCourse = (newFood) => {
    return {
        type: ADDCOURSE,
        newFood
    }
};
export const onEditCourse = (id, editFood) => {
    return {
        type: EDITCOURSE,
        id,
        editFood
    }
};
export const onDeleteCourse = (id) => {
    return {
        type: DELETECOURSE,
        id
    }
};

export const onGetCourse = () => {
    return {
        type: GETCOURSE
    }
};

export const onSuccess = (dataCourse) => {
    return {
        type: GETSUCSESS,
        dataCourse
    }
};

export const onFailt = (errorr) => {
    return {
        type: GETFAIL,
        errorr
    }
};
export const onERROR = (error) => {
    return {
        type: ERROR,
        error
    }
};
export const onLoading = (load) => {
    return {
        type: LOADDING,
        load
    }
};