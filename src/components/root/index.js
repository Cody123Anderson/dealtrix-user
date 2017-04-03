import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';

import rootReducer from '../../reducers';
import routes from './routes';
import { AUTH_USER } from '../../actions/types';

// Create Redux Store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Get token if one exists
const token = localStorage.getItem('token');

// If user has a token, and it's not expired, consider them authenticated
if (token) {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const decoded = jwtDecode(token);
  if (decoded.exp && timestamp < decoded.exp) {
    store.dispatch({ type: AUTH_USER });
  }
}

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>, mountNode);
