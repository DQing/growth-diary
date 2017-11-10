import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers/index.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(reducer);

ReactDOM.render(<Provider store={store}>
    <Router>
        <div>
            <Route path="/" component={App}/>
        </div>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
