import * as request from '../constant/fetch-request';
import * as action from './show-diaries';

export const addDiary = diary => {
    return dispatch => {
        (async () => {
            const res = await request.post('/api/diary', diary);
            if (res.status === 201) {
                dispatch(action.getDiaries(diary.userId));
            }
        })()
    }
};