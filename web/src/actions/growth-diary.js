import * as request from '../constant/fetch-request';

export const addDiary = diary => {
    return dispatch => {
        (async () => {
            const res = await request.post('/api/diary', diary);
        })()
    }
};