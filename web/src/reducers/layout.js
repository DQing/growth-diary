export default (state = {menu: "DIARY_PAGE"}, action) => {
    switch (action.type) {
        case "CHANGE_MENU":
            state.menu = action.menu;
            return Object.assign({}, state);
        default:
            return state;
    }
}