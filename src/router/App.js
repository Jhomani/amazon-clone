import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';

export default function App() {
  return (
    <BrowserRouter>
      {/* {some component} */}

      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
