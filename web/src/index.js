import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './App';
import SchoolTW from './components/layout';
import GrowthDiary from './components/growth-diary';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers/index.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(reducer);

const Page = () => (
    <div>
        <Route exact path="/" component={App}/>
        <Route component={SchoolTW}/>
    </div>
);

ReactDOM.render(<Provider store={store}>
    <Router>
        <div>
            <Route exact path="/" component={Page}/>
            <Route path="/diary" component={GrowthDiary}/>
        </div>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
