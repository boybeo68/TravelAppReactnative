const fiterReducer = (state = 'ShowAll', action) => {
    if (action.type === 'FILTER_ShowAll') return 'ShowAll';
    if (action.type === 'FILTER_Memoried') return 'Memoried';
    if (action.type === 'FILTER_NeedPractice') return 'NeedPractice';
    return state
};
export default fiterReducer;