import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Splash from './pages/Splash';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Splash} path="/localidade" />
    </BrowserRouter>
  ) 
}

export default Routes;