export function showAddItem() {
    return {
        type: 'SHOWADDITEM'
    }
}
export function showAll() {
    return {
        type: 'FILTER_ShowAll'
    }
}

export function showMemoried() {
    return {
        type: 'FILTER_Memoried'
    }
}

export function showNeedPracticle() {
    return {
        type: 'FILTER_NeedPractice'
    }
}


export function addWord(en, vn) {
    return {
        type: 'ADDWORD', en, vn
    }
}
export function tooglememori(id) {
    return {
        type: 'TOGGLE_MEMMORIZE',
        id
    }
}
export function toogleShow(id) {
    return {
        type: 'TOGGLE_SHOW',
        id
    }
}
