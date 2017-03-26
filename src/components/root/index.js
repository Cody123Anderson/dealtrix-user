import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';

import rootReducer from '../../reducers';
import { AUTH_USER } from '../../actions/types';
import App from './app';
import Home from './home';

const mountNode = document.createElement('div');
const store = createStore(rootReducer, applyMiddleware(thunk));
const token = localStorage.getItem('token');

// If user has a token, and it's not expired, consider them authenticated
if (token) {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const decoded = jwtDecode(token);
  if (decoded.exp && timestamp < decoded.exp) {
    store.dispatch({ type: AUTH_USER });
  }
}

document.body.appendChild(mountNode);
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>, mountNode);
