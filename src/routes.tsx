import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, SingleSession } from './components/pages';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/session/:id" component={SingleSession} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  </>
);

export default Routes;
