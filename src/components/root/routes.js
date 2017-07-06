import React, { PureComponent } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import Home from './home';
import Favorites from '../deals/favorites';
import DealDetail from '../deals/deal-detail';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="favorites" component={Favorites} />
    <Route path="deals/:id" component={DealDetail} />
  </Route>
);

export default routes;
