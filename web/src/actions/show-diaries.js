import * as request from '../constant/fetch-request';

export const getDiariesBack = diaries => {
    return {
        type:"DIARIES",
        diaries
    }
}

export const getDiaries = userId => {
    return dispatch => {
        (async () => {
            const res = await request.get(`/api/diary/${userId}`, userId);
            if (res.status) {
                dispatch(getDiariesBack(res.body));
            }
        })()
    }
};

export const deleteDiary = (id, userId) => {
    return dispatch => {
        (async() => {
            const res = await request.onDelete(`/api/diary/${id}`);
            if (res.status) {
                dispatch(getDiaries(userId));
            }
        })();
    }
}