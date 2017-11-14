export default (state = {users: []}, action) => {

    switch (action.type) {
        case 'FIND_USERS':
            state.users = action.users;
            return Object.assign({}, state)
        default:
            return state;
    }
}