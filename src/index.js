import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/base.css';
import App from './component/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { allReducers } from './reducers/index';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();