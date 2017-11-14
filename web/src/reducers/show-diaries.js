export default (state = {diaries: [], userId: 1, hiddenModifyInputArray: [], commentInputArray: [], currentDiaryId: 0}, action) => {

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
                commentInputArray: [...state.commentInputArray],
                currentDiaryId: state.currentDiaryId
            };
        case "DELETE_HIDDEN":
            const index = state.hiddenModifyInputArray.indexOf(action.id);
            state.hiddenModifyInputArray.splice(index, 1);
            return {
                diaries: [...state.diaries],
                hiddenModifyInputArray: [...state.hiddenModifyInputArray],
                userId: 1,
                commentInputArray: [...state.commentInputArray],
                currentDiaryId: state.currentDiaryId
            };

        case "ADD_DISPLAY":
            if(state.commentInputArray.some(c => c === action.id)) {
                return state;
            }
            state.commentInputArray.push(action.id);

            return {
                diaries: [...state.diaries],
                hiddenModifyInputArray: [...state.hiddenModifyInputArray],
                userId: 1,
                commentInputArray: [...state.commentInputArray],
                currentDiaryId: action.id
            };

        default:
            return state;
    }
}