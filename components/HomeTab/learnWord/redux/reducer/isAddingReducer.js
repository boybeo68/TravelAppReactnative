const isAddingReducer = (state = false, action) => {
    if (action.type === 'SHOWADDITEM') return !state;
    return state
};
export default isAddingReducer;