import React, { PureComponent } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import Home from './home';
import Favorites from '../ideas/favorites';
import FreeIdeasDetail from '../ideas/free-ideas-detail';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="favorites" component={Favorites} />
    <Route path="unsponsored/:id" component={FreeIdeasDetail} />
  </Route>
);

export default routes;
