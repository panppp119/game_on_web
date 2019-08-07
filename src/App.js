import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import asyncComponent from './components/AsyncComponent';

const AsyncHome = asyncComponent(() => import('pages/Home'));
const AsyncNotFound = asyncComponent(() => import('pages/NotFound'));

export default ({ childProps }) => (
  <Router>
    <Switch>
      <Route path="/" exact component={AsyncHome} props={childProps} />

      {/* unmatched routes */}
      <Route component={AsyncNotFound} />
    </Switch>
  </Router>
);
