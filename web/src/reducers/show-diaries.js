export default (state = {diaries: [], userId: 1, hiddenArray: []}, action) => {

    switch (action.type) {
        case "DIARIES":
            state.diaries = action.diaries;
            return Object.assign({}, state);
        case "ADD_HIDDEN":
            state.hiddenArray.push(action.id);

            return {
                diaries: [...state.diaries],
                hiddenArray: [...state.hiddenArray],
                userId: 1
            };
        case "DELETE_HIDDEN":
            const index = state.hiddenArray.indexOf(action.id);
            state.hiddenArray.splice(index, 1);
            return {
                diaries: [...state.diaries],
                hiddenArray: [...state.hiddenArray],
                userId: 1
            };
        default:
            return state;
    }
}