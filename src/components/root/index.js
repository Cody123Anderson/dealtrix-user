import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import thunk from 'redux-thunk';

import rootReducer from '../../reducers';
import App from './app';
import Home from './home';

const mountNode = document.createElement('div');
const store = createStore(rootReducer, applyMiddleware(thunk));

document.body.appendChild(mountNode);
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>, mountNode);
