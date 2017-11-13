import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import SchoolTW from './components/layout';
import GrowthDiary from './components/growth-diary';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers/index.js';
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={store}>
    <Router>
        <SchoolTW>
            <Route exac path="/diary" component={GrowthDiary}/>
            <Route path="/app" component={App}/>
        </SchoolTW>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
