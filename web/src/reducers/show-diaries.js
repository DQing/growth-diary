export default (state = {diaries: [], userId: 1, hiddenModifyInputArray: [], commitInputArray: []}, action) => {

    switch (action.type) {
        case "DIARIES":
            state.diaries = action.diaries;
            return Object.assign({}, state);
        case "ADD_HIDDEN":
            state.hiddenModifyInputArray.push(action.id);

            return {
                diaries: [...state.diaries],
                hiddenModifyInputArray: [...state.hiddenModifyInputArray],
                userId: 1,
                commitInputArray: [...state.commitInputArray]
            };
        case "DELETE_HIDDEN":
            const index = state.hiddenModifyInputArray.indexOf(action.id);
            state.hiddenModifyInputArray.splice(index, 1);
            return {
                diaries: [...state.diaries],
                hiddenModifyInputArray: [...state.hiddenModifyInputArray],
                userId: 1,
                commitInputArray: [...state.commitInputArray]
            };

        case "ADD_DISPLAY":
            if(state.commitInputArray.some(c => c === action.id)) {
                return state;
            }
            state.commitInputArray.push(action.id);

            return {
                diaries: [...state.diaries],
                hiddenModifyInputArray: [...state.hiddenModifyInputArray],
                userId: 1,
                commitInputArray: [...state.commitInputArray]
            };

        default:
            return state;
    }
}