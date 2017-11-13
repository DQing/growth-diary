import {combineReducers} from 'redux';
import layout from './layout';
import showDiaries from './show-diaries';

export default combineReducers({
    layout,
    showDiaries
});