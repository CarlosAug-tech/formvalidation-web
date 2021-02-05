import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Teste from '../pages/Teste';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/logon" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/teste" component={Teste} isPrivate />
    </Switch>
  );
};

export default Routes;
