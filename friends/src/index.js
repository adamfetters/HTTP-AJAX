import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);




ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>, document.getElementById('root'));

