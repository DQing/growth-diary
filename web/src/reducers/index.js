import {combineReducers} from 'redux';
import layout from './layout';
import showDiaries from './show-diaries';
import followed from './followed';

export default combineReducers({
    layout,
    showDiaries,
    followed
});