export default (state = {followers: []}, action) => {
    switch (action.type) {

        case 'GET_FOLLOWED':
            state.followers = action.followers;
            return Object.assign({}, state);
        default :
            return state
    }
}