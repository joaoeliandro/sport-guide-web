import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Author from '../pages/Author';
import RegisterAthlete from '../pages/RegisterAthlete';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/detail/:sport+" component={Detail} />
    <Route path="/author" component={Author} />
    <Route path="/register-athlete" component={RegisterAthlete} />
  </Switch>
)

export default Routes;
