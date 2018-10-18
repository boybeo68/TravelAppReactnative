const url = 'http://5b90d0643ef10a001445d0ea.mockapi.io/api/course';

function* fetDataCourse() {
    const  respone = yield  fetch('http://5b90d0643ef10a001445d0ea.mockapi.io/api/course');
    return yield respone.json();
}
 function* postDataCourse(params) {
    try {
        const respone = yield fetch('http://5b90d0643ef10a001445d0ea.mockapi.io/api/course',{
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' :'application/json'
            },
            body:JSON.stringify(params)
        });
        return yield respone.json()
    }catch (e) {
        console.log(e)
    }
}
function* putDataCourse(id,params) {
    try {
        const respone = yield fetch(`http://5b90d0643ef10a001445d0ea.mockapi.io/api/course/${id}`,{
            method: 'PUT',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' :'application/json'
            },
            body:JSON.stringify(params)
        });
        return yield respone.json();
    }catch (e) {
        console.log(e)
    }
}
function* DeleteDataCourse(id){
    try {
        const respone = yield fetch(`http://5b90d0643ef10a001445d0ea.mockapi.io/api/course/${id}`,{
            method: 'DELETE',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' :'application/json'
            },
        });
        return yield respone.json()
    }catch (e) {
        console.log(e)
    }
}
export const API = {
    fetDataCourse,
    DeleteDataCourse,
    putDataCourse,
    postDataCourse
};