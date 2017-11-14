import * as request from '../constant/fetch-request';

export const getFollowersBack = (followers) => {
    return {
        type: 'GET_FOLLOWED',
        followers
    }
};

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