export default (state = {diaries: [], userId: 1}, action) => {
    switch (action.type) {
        case "DIARIES":
            state.diaries = action.diaries;
            return Object.assign({}, state);
        default:
            return state;
    }
}