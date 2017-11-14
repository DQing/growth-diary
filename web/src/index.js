import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import SchoolTW from './components/layout';
import GrowthDiary from './components/growth-diary';
import ShowDiary from './components/show-diaries';
import Card from './components/card';
import Comment from './components/comment';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers/index.js';
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const Parent = () => {
    return <div>
        <Card>
            <Route component={GrowthDiary}/>
        </Card>
        <ShowDiary>
            <Route component={Comment} />
        </ShowDiary>
    </div>
}

ReactDOM.render(<Provider store={store}>
    <Router>
        <SchoolTW>
            <Route exac path="/diary" component={Parent}/>
            <Route path="/app" component={App}/>
        </SchoolTW>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
