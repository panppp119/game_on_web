import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import asyncComponent from './components/AsyncComponent';

const AsyncHome = asyncComponent(() => import('pages/Home'));
const AsyncGame1 = asyncComponent(() => import('pages/Game1'));
const AsyncGame2 = asyncComponent(() => import('pages/Game2'));
const AsyncGame3 = asyncComponent(() => import('pages/Game3'));
const AsyncGame4 = asyncComponent(() => import('pages/Game4'));
const AsyncNotFound = asyncComponent(() => import('pages/NotFound'));

export default ({ childProps }) => (
  <Router>
    <Switch>
      <Route path="/" exact component={AsyncHome} props={childProps} />
      {/* <Route path="/admin" exact component={AsyncHome} props={childProps} /> */}

      <Route path="/game_1" component={AsyncGame1} props={childProps} />
      <Route path="/game_2" component={AsyncGame2} props={childProps} />
      <Route path="/game_3" component={AsyncGame3} props={childProps} />
      <Route path="/game_4" component={AsyncGame4} props={childProps} />

      {/* unmatched routes */}
      <Route component={AsyncNotFound} />
    </Switch>
  </Router>
);
