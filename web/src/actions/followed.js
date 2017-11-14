import * as request from '../constant/fetch-request';

export const getFollowersBack = (followers) => {
    return {
        type: 'GET_FOLLOWED',
        followers
    }
};

export const findUserBack = (users) => {
    return {
        type: 'FIND_USERS',
        users
    }
}

export const getFollowers = (userId) => {

    return dispatch => {
        (async () => {
            const res = await request.get(`/api/followed/${userId}`);
            if (res.status === 200){
                dispatch(getFollowersBack(res.body));
            }
        })();
    }
};

export const findUsers = (value) => {
    return dispatch => {
        (async () => {
            const res = await request.get(`/api/user/${value}`);
            if (res.status === 200) {
                console.log(res.body);
                dispatch(findUserBack(res.body));
            }
        })();
    }
}